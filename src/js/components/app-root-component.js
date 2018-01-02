import Prolet from '../classes/Prolet';
import Vorota from '../classes/Vorota';
import GLOBALS from '../utils/config';

class AppRootComponent {
	constructor( $sce ) {
		this.$sce = $sce;

		this.generalLength = '';
		this.includeVorota = '';
		this.vorotaLength = '';

		this.error  = 'Введите длину забора.';
		this.result = this.error;

		this.stolbs = Object.keys( GLOBALS.stolbs );
		this.stolbSize = this.stolbs[0];
		this.vorotaPositions = GLOBALS.vorotaPositions;
		this.vorotaPosition = this.vorotaPositions[0];
	}
	calc() {
		let length = this.generalLength * 100;

		if ( ! length ) {
			this.result = this.error;
			return;
		}

		let vorota = new Vorota( this.stolbSize, this.vorotaPosition.id );

		length -= vorota.getLength();

		let prolet = new Prolet( this.stolbSize, length );

		this.result = this.showResultMessage( vorota, prolet );
	}

	showResultMessage( vorota, prolet ) {
		let price = vorota.getPrice() + prolet.getPrice();
		let vorotaMsg = '';

		if ( vorota.getStolbCount() > 0 ) {
			vorotaMsg = `
				Ворота и калитка: (${vorota.getPrice()} руб.) <br>
				- усиленные столбы: ${vorota.getStolbCount()} <br>
			`;			
		}

		return `
			${vorotaMsg}
			Забор: (${prolet.getPrice()} руб.) <br> 
			- столбы: ${prolet.getStolbCount()} <br>
			- пролеты: ${prolet.getProletCount()} <br>
			Сумма: <br>
			${price} руб.
		`;
	}

	trustAsHtml( text ) {
		return this.$sce.trustAsHtml( text );
	}
}

export default {
	template: `
		<div class="card">
			<div>
				<label for="meters">
					Длина забора
					<input
						id="meters" 
						type="number" 
						placeholder="0"
						ng-model="$ctrl.generalLength" 
						ng-required="true"
						ng-change="$ctrl.calc()"
					>
				</label>
				<label ng-if="false" for="with-vorota">
					С учетом ворот
					<input
						id="with-vorota"
						type="checkbox"
						ng-model="$ctrl.includeVorota"
						ng-change="$ctrl.calc()"
					>
				</label>
			</div>
			<div>
				<label ng-repeat="size in $ctrl.stolbs" for="size-{{ size }}">
					<input
						id="size-{{ size }}" 
						type="radio" 
						ng-model="$ctrl.stolbSize" 
						ng-value="size"
						ng-change="$ctrl.calc()"
					>
					{{ size }}
				</label>
			</div>
			<div>
				<label ng-repeat="position in $ctrl.vorotaPositions" for="position-{{ position.id }}">
					<input 
						id="position-{{ position.id }}"
						type="radio"
						ng-model="$ctrl.vorotaPosition"
						ng-value="position"
						ng-change="$ctrl.calc()"
					>
					{{ position.label }}
				</label>
				<div ng-if="$ctrl.includeVorota">
					<label for="kalitkaLength">
						Длина калитки
						<input
							id="kalitkaLength" 
							type="number" 
							placeholder="0"
							ng-model="$ctrl.kalitkaLength" 
							ng-change="$ctrl.calc()"
						>
					</label>
					<label for="vorotaLength">
						Длина ворот
						<input
							id="vorotaLength" 
							type="number" 
							placeholder="0"
							ng-model="$ctrl.vorotaLength" 
							ng-change="$ctrl.calc()"
						>
					</label>
				</div>
			</div>
		</div>
		<div class="card" ng-bind-html="$ctrl.trustAsHtml( $ctrl.result )"></div>
	`,
	controller: AppRootComponent
}