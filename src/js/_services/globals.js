import Word from '../classes/word';

export default class GlobalsService {
	/* @ngInject */
	constructor( arrayService, dbFavoriteService ) {
		this.arrayService = arrayService;
		this.dbFavoriteService = dbFavoriteService;
		this.unformatedWords  = GLOBALS.words;
		this.topics = [];
		this.words = false;

		this._setTopics();
	}

	_setTopics() {
		this.topics = Object.keys( this.unformatedWords );
	}

	_setWords() {
		this.words = {};
		
		angular.forEach( this.unformatedWords, ( words, topic ) => {
			let formated = [];
			angular.forEach( words, ( w ) => {
				let word = new Word( w, topic );
				this.dbFavoriteService.setToWord( word );
				formated.push( word );
			});
			this.words[ topic ] = this.arrayService.shuffle( formated );
		});
	}

	getWords() {
		if ( false === this.words ) 
			this._setWords();

		return this.words;
	}

	getTopics() {
		return this.topics;
	}
}