import ResultMessage from './abstract.ResultMessage';
import GLOBALS from '../utils/config';

export default class Zabor extends ResultMessage {
	constructor() {
		super();
		// vars to set up
		this.stolbType = 'normal';
		this.stolbSize = 0;

		// calc vars
		this.stolbCount = 0;
		this.proletCount = 0;

		// default var
		this._zokolPlita = this._getGlobal( 'zokolPlita' );

		// results vars
		this._stolbPrice = 0;
	}
	setStolbPrice() {
		let stolbs = this._getGlobal( 'stolbs' );
		this._stolbPrice = stolbs[ this.stolbSize ][ this.stolbType ];
	}
	getPrice() {
		return this.getStolbPrice() + this.getProletPrice();
	}
	getStolbPrice() {
		return this._stolbPrice * this.stolbCount;
	}
	getProletPrice() {
		return this.proletCount * this._zokolPlita.price;
	}
	getLength() {
		return this.stolbSize * this.stolbCount + this.proletCount * this._zokolPlita.size;
	}
	_getGlobal( key ) {
		return GLOBALS[ key ];
	}
	getMsg() {
		return '';
	}
}