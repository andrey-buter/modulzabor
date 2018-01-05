import ResultMessage from './abstract.ResultMessage';

export default class Install extends ResultMessage {
	constructor( length, installType ) {
		super();

		this.length = length / 100;
		this.type = installType;
	}

	getPrice() {
		return this.length * this.type.price;
	}

	getLength() {
		return this.length;
	}
	getMsg() {
		let price = this.getPrice();

		if ( 0 >= price ) 
			return '';

		return this.join([
			this.title( 'Установка' ),
			this.message( '&nbsp;', `${this.length} м.п.`, price ),
		]);
	}
}