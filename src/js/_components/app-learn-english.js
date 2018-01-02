class AppLearnEnglish {
	constructor( $scope, dbService, globalsService, dbFavoriteService ) {
		this.initDB = false;
		this.currentTopic = '';
		this.words = [];
		this.favoriteWords = [];
		this.topics = globalsService.getTopics();
		this.dbFavoriteService = dbFavoriteService;

		dbService.init().then( () => {
			this.initDB = true;
			dbFavoriteService.init();
			this.allWords = globalsService.getWords();

			$scope.$apply();
		});
	}
	onSelectTopic() {
		if ( ! this.currentTopic ) { 
			this.words = [];
			return;
		}
		this.words = this.allWords[ this.currentTopic ];
	}
}

export default {
	template: `
		<ui-view></ui-view>
		<div class="loader" ng-if="false === $ctrl.initDB">Loading...</div>
		<div ng-if="true === $ctrl.initDB">
			<select 
				class="select-topic" 
				ng-model="$ctrl.currentTopic" 
				ng-options="topic for topic in $ctrl.topics" 
				ng-change="$ctrl.onSelectTopic()"
			>
				<option value="">(blank)</option>
			</select>
			<learn-words words="$ctrl.words"></learn-words>
		</div>
	`,
	controller: AppLearnEnglish
}