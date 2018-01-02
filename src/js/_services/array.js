export default class ArrayService {
	/* @ngInject */
	constructor() {
		this.number = 0;
	}

	// https://stackoverflow.com/questions/3746725/create-a-javascript-array-containing-1-n
	getOrderArray() {
		return Array.apply(null, {length: this.number}).map(Function.call, Math.random);
	}

	// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
	shuffle(array) {
		var currentIndex = array.length, temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}
}