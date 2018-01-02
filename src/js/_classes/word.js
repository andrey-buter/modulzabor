export default class Word {
	constructor( word, topic ) {
		this.eng = word[0];
		this.rus = word[1];
		this.id  = this.eng.replace( ' ', '-' );
		this.transcription = word[2] || '';
		this.audioType = word[3] || 'mp3';
		this.text = word[4] || '';
		this.topic = topic;
		this.favorite = {
			eng: false,
			rus: false
		};
		this.currentLang = 'eng';
	}
	getAudioFile() {
		return `${GLOBALS.topicsFolder}/${this.topic}/files/${this.eng}.${this.audioType}`;
	}
	getStatus() {
		return this.status;
	}
	isFavorite() {
		return this.favorite[ this.currentLang ];
	}
	switchFavorite() {
		this.favorite[ this.currentLang ] = ! this.isFavorite();
	}
	setCurrentLang( lang ) {
		this.currentLang = lang;
	}
}