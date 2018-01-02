export default class DBFavoriteService {
	/* @ngInject */
	constructor( dbService ) {
		this.db = dbService;
		this.tableName = 'favorites';
		this.formatedFavorites = {};
	}

	init() {
		let list = {};
		angular.forEach( this.getAll(), ( words, lang ) => {
			angular.forEach( words, ( word, index ) => {
				if ( ! list[ word ] ) 
					list[ word ] = {};

				list[ word ][ lang ] = true;
			});
		});
		this.formatedFavorites = list;
	}

	filterFavorites( words ) {
		let filtered = [];
		angular.forEach( words, ( word ) => {
			if ( ! word.isFavorite() ) 
				return;

			filtered.push( word );
		});
		return filtered;
	}

	setToWord( word ) {
		if ( ! this.formatedFavorites[ word.id ] ) 
			return;

		angular.extend( word.favorite, this.formatedFavorites[ word.id ] );
	}

	switch( word ) {
		let callback = word.isFavorite() ? this._switchOff : this._switchOn;
		let data     = this.getAll();

		word.switchFavorite();

		this._updateData( data, word, callback.bind(this) );

		return this.db.set( this.tableName, data );
	}

	getAll() {
		return this.db.directGet( this.tableName );
	}

	_updateData( data, word, callback ) {
		// if bd is not created
		if ( ! data ) 
			data = {};

		let favorites = data[ word.currentLang ];

		favorites = callback( favorites, word );

		data[ word.currentLang ] = favorites;

		return data;
	}

	_switchOn( favorites, word ) {
		if ( ! favorites ) {
			favorites = [];
		} else {
			// если слово уже почему-то есть в списке
			if ( -1 !== favorites.indexOf( word.id ) ) 
				return favorites;
		}

		favorites.push( word.id );

		return favorites;
	}

	_switchOff( favorites, word ) {
		let index = favorites.indexOf( word.id );

		if ( -1 === index ) 
			return favorites;

		favorites.splice( index, 1 );

		return favorites; 
	}
}