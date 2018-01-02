class AudioActions {
	constructor( $timeout ) {
		this.$timeout = $timeout;
		this.interval = 2000;
		this.timeoutPromise;
	}
	$onChanges() {
		this.isShowTranslate = false;
	}
	pause() {
		this.$timeout.cancel( this.timeoutPromise );
		this.timeoutPromise = '';
	}
	play() {
		this.timeoutPromise = this.$timeout( () => {
			this.next();
			this.play();
			console.log(this.timeoutPromise)
		}, this.interval );
	}
	isShowPlay() {
		return ! this.timeoutPromise;
	}
	isShowPause() {
		return ! this.isShowPlay();
	}
}


export default {
	bindings: {
		next: '&',
	},
	template: `
		<button 
			class="audio-action-button"
			ng-if="$ctrl.isShowPlay()"
			ng-click="$ctrl.play()"
		>
			Play
		</button>
		<button 
			class="audio-action-button"
			ng-if="$ctrl.isShowPause()"
			ng-click="$ctrl.pause()"
		>
			Pause
		</button>
	`,
	controller: AudioActions
}