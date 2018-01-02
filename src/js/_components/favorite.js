class Favorite {
	constructor( dbService, dbFavoriteService ) {
		this.dbService = dbService;
		this.dbFavoriteService = dbFavoriteService;
		this.tableName = 'favorite';
	}
	$onChanges() {
		this._isFavorite = false;
	}
	isFavorite() {
		// this.dbService.getItem('')
	}
	onSwitchFavorite() {
		this.dbFavoriteService.switch( this.word );
	}
	getClass() {
		return this.word.isFavorite() ? 'active' : '';
	}
}


export default {
	bindings: {
		word: '<',
	},
	template: `
		<button
			class="btn-favorite"
			ng-click="$ctrl.onSwitchFavorite()" 
			ng-class="$ctrl.getClass()"
		>Favorite</button>
	`,
	controller: Favorite
}