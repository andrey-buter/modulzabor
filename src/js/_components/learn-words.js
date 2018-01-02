class LearnWords {
	constructor( arrayService, dbFavoriteService ) {
		this.arrayService = arrayService;
		this.dbFavoriteService = dbFavoriteService;
		this.init();
		this.status = 'all';
		// this.order = this.randomInteger( 0, this.currentWordsList.length - 1 );
	}	
	$onChanges() {
		this.showStart = true;
		this.init();
	}
	init() {
		this.currentWord = '';
		this.currentPos = 0;
		this.currentWordsList = this.words;
	}
	clickNext() {
		this.currentPos++;

		if ( this.currentPos == this.currentWordsList.length ) {
			this.currentPos = 0;
		}

		this.setCurrentWord();
	}
	setCurrentWord() {
		// this.currentWord = this.currentWordsList[ this.order[ this.currentPos ] ];
		this.currentWord = this.currentWordsList[ this.currentPos ];
	}
	// randomInteger(min, max) {
	// 	let rand = min - 0.5 + Math.random() * (max - min + 1)
	// 	rand = Math.round(rand);
	// 	return rand;
	// }
	
	startLearning() {
		this.currentWord = this.currentWordsList[0];
		this.showStart = false;
	}
	isShowStart() {
		return ( this.currentWordsList.length > 0 && this.showStart );
	}
	onShowAll() {
		this.status = 'all';
		this.currentPos = 0;
		this.currentWordsList = this.arrayService.shuffle( this.words );
		this.setCurrentWord();
	}
	onShowFavorites() {
		this.status = 'favorites';
		this.currentPos = 0;
		this.favoriteWords = this.dbFavoriteService.filterFavorites( this.words );
		this.currentWordsList = this.arrayService.shuffle( this.favoriteWords );
		this.setCurrentWord();
	}
	activeListClass( type ) {
		return type == this.status ? 'active' : '';
	} 
}

export default {
	bindings: {
		words: '<',
		favoriteWords: '<'
	},
	template: `
		<button 
			class="start-button" 
			type="button" 
			ng-if="$ctrl.isShowStart()" 
			ng-click="$ctrl.startLearning()"
		>
			Start
		</button>
		<div ng-if="$ctrl.currentWord">
			<audio-actions next="$ctrl.clickNext()"></audio-actions>
			<div class="list-buttons">
				<button 
					class="list-button"
					ng-click="$ctrl.onShowAll()"
					ng-class="$ctrl.activeListClass('all')"
				>
					All
				</button>
				<button 
					class="list-button"
					ng-click="$ctrl.onShowFavorites()"
					ng-class="$ctrl.activeListClass('favorites')"
				>
					Favorites
				</button>
			</div>
			<button class="next-button" type="button" ng-click="$ctrl.clickNext()">
				Next &#10095;
				<br>
				({{ $ctrl.currentWordsList.length }}/{{ $ctrl.currentPos + 1 }})
			</button>
			<audio-word word="$ctrl.currentWord"></audio-word>
			<favorite word="$ctrl.currentWord"></favorite>
		</div>
	`,
	controller: LearnWords
}