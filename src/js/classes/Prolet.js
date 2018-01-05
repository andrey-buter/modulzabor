import Zabor from './abstract.Zabor';

export default class Prolet extends Zabor {
	constructor( stolbSize, length = 0, isCalcFirst = true ) {
		super();

		this.stolbType = 'normal';
		this.stolbSize = +stolbSize;

		this.length = length;
		this.isCalcFirst = isCalcFirst;

		this.calcCount();
		this.setStolbPrice();
	}
	get() {
		return this.stolbSize + this._zokolPlita.size;
	}
	calcCount() {
		let length = this.length;

		if ( this.isCalcFirst ) {
			this.stolbCount = 1;
			length -= this.stolbSize;
		}

		this.proletCount = length > 0 ? Math.ceil( length / this.get() ) : 1;

		this.stolbCount += this.proletCount;
	}
	getMsg() {
		return this.join([
			this.title( 'Забор' ),
			this.message( `столбы <small>${this.stolbSize}x${this.stolbSize}</small>`, this.stolbCount, this.getStolbPrice() ),
			this.message( 'пролеты', this.proletCount, this.getProletPrice() ),
		]);
	}
}