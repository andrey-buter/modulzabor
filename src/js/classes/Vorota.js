import Zabor from './abstract.Zabor';

export default class Vorota extends Zabor {
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
	getMsg() {
		let count = this.stolbCount;

		if ( 0 >= count ) 
			return '';

		return this.join([
			this.title( 'Ворота и калитка' ),
			this.message( `усиленные столбы <small>${this.stolbSize}x${this.stolbSize}</small>`, count, this.getStolbPrice() ),
		]);
	}
}