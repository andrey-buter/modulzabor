export default class Install {
	constructor( length, installType ) {
		this.length = length / 100;
		this.type = installType;
	}

	getPrice() {
		return this.length * this.type.price;
	}

	getLength() {
		return this.length;
	}
}