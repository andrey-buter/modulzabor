import GLOBALS from '../utils/config';

export default class Result {
	constructor() {
		// vars to set up
		this.stolbType = 'normal';
		this.stolbSize = 0;

		// calc vars
		this.stolbCount = 0;
		this.proletCount = 0;

		// default var
		this._prolet = GLOBALS.prolet;

		// results vars
		this._stolbPrice = 0;
	}
	setStolbPrice() {
		this._stolbPrice = GLOBALS.stolbs[ this.stolbSize ][ this.stolbType ];
	}
	getPrice() {
		return this._stolbPrice * this.stolbCount + this.proletCount * this._prolet.price;
	}
	getLength() {
		return this.stolbSize * this.stolbCount + this.proletCount * this._prolet.size;
	}
	getStolbCount() {
		return this.stolbCount;
	}
	getProletCount() {
		return this.proletCount;
	}
}