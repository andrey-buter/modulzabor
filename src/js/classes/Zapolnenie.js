import ResultMessage from './abstract.ResultMessage';

export default class Zapolnenie extends ResultMessage {
	constructor( zokolCount, zapolnenieType ) {
		super();

		this.zokolCount = zokolCount;
		this.type = zapolnenieType;
	}

	getPrice() {
		return this.zokolCount * this.type.price;
	}

	getCount() {
		return this.zokolCount;
	}
	getMsg() {
		let price = this.getPrice();

		if ( 0 >= price ) 
			return '';

		return this.join([
			this.title( 'Деревянное заполнение' ),
			this.message( this.type.label, this.zokolCount, price ),
		]);
	}
}