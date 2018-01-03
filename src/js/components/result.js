class Result {
	constructor( $sce ) {
		this.$sce = $sce;

		this.error  = this.trustAsHtml( 'Введите длину забора.' );
	}
	getResultMessage() {
		let vorota = this.result.vorota;
		let prolet = this.result.prolet;
		let install = this.result.install;

		let price = vorota.getPrice() + prolet.getPrice() + install.getPrice();
		let vorotaMsg = '';
		let installMsg = '';

		let stolbSize = prolet.stolbSize;

		if ( vorota.getStolbCount() > 0 ) {
			vorotaMsg = `
				Ворота и калитка: (${vorota.getPrice()} руб.) <br>
				- усиленные столбы <small>${vorota.stolbSize}x${vorota.stolbSize}</small>: <strong>${vorota.getStolbCount()}</strong>  <br>
				<hr />
			`;			
		}

		if ( install.getPrice() > 0 ) {
			installMsg = `
				Установка: ${install.getLength()} м.п. - ${install.getPrice()} руб. <br> 
				<hr />
			`;
		}

		return `
			${vorotaMsg}
			Забор: (${prolet.getPrice()} руб.) <br> 
			- столбы <small>${stolbSize}x${stolbSize}</small>: <strong>${prolet.getStolbCount()}</strong> <br>
			- пролеты: <strong>${prolet.getProletCount()}</strong> <br>
			<hr />
			${installMsg}
			<strong>Итого:</strong> ${price} руб.
		`;
	}
	showMessage() {
		if ( ! this.result )
			return this.error;

		return this.trustAsHtml( this.getResultMessage() );
	}
	trustAsHtml( text ) {
		return this.$sce.trustAsHtml( text );
	}
}

export default {
	bindings: {
		result: '<',
	},
	template: `
		<div class="card" ng-bind-html="$ctrl.showMessage()"></div>
	`,
	controller: Result
}