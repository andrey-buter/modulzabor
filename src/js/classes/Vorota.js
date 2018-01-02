import Result from './Result';

export default class Vorota extends Result {
	constructor( stolbSize, vorotaPosition = 'without' ) {
		super();

		this.stolbType = 'reinforced';
		this.stolbSize = +stolbSize;

		this.vorotaPosition = vorotaPosition;

		this.calcCount();
		this.setStolbPrice();
	}
	calcCount() {
		switch ( this.vorotaPosition ) {
			case 'without':
				this.proletCount = 0;
			break;
			case 'together':
				this.stolbCount = 3;
			break;
			case 'different':
				this.stolbCount = 4;
			break;
		}
	}
}