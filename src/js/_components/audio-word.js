class AudioWord {
	constructor( $element ) {
		this.player = document.getElementById('my-player');
	}
	$onChanges() {
		this.isShowTranslate = false;
	}
	showTranslate() {
		this.isShowTranslate = true;
	}
	play() {
		this.player.play();
	}
}


export default {
	bindings: {
		word: '<',
	},
	template: `
		<audio id="my-player" src="{{ $ctrl.word.getAudioFile() }}" autoplay></audio>
		<button class="play-button" type="button" ng-click="$ctrl.play()">Repeat</button>
		<div class="clearfix"></div>
		<button class="show-translate-btn" type="button" ng-if="$ctrl.isShowTranslate == false" ng-click="$ctrl.showTranslate()">Show Translation</button>
		<div class="translation-text" ng-if="$ctrl.isShowTranslate == true">
			<p>
				<strong>{{ $ctrl.word.eng }} - {{ $ctrl.word.rus }}</strong>
			</p>
			<p ng-if="0 !== $ctrl.word.transcription.length">{{ $ctrl.word.transcription }}</p>
			<p ng-if="0 !== $ctrl.word.text.length">{{ $ctrl.word.text }}</p>
		</div>
	`,
	controller: AudioWord
}