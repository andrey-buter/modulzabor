class Result {
	constructor( $sce ) {
		this.$sce = $sce;

		this.error  = this.trustAsHtml( 'Введите длину забора.' );
	}
	getResultMessage() {
		let vorota = this.result.vorota;
		let prolet = this.result.prolet;
		let install = this.result.install;
		let zapolnenie = this.result.zapolnenie;

		let price = vorota.getPrice() + prolet.getPrice() + install.getPrice() + zapolnenie.getPrice();

		return `
			${prolet.getMsg()}
			${vorota.getMsg()}
			${install.getMsg()}
			${zapolnenie.getMsg()}
			${prolet.result( price )}
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