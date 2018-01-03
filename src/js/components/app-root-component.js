import Prolet from '../classes/Prolet';
import Vorota from '../classes/Vorota';
import Install from '../classes/Install';
import GLOBALS from '../utils/config';

class AppRootComponent {
	constructor() {
		this.generalLength = '';
		this.includeVorota = '';
		this.vorotaLength = '';

		this.result = null;

		this.stolbs = Object.keys( GLOBALS.stolbs );
		this.stolbSize = this.stolbs[0];
		this.vorotaPositions = GLOBALS.vorotaPositions;
		this.vorotaPosition = this.vorotaPositions[0];
		this.installation = GLOBALS.installation;
		this.installType = this.installation[0];
		this.delivery = GLOBALS.delivery;
		this.deliveryType = this.delivery[0];
	}
	calc() {
		let length = this.generalLength * 100;

		if ( ! length ) {
			this.result = null;
			return;
		}

		let install = new Install( length, this.installType );
		let vorota = new Vorota( this.stolbSize, this.vorotaPosition.id );

		length -= vorota.getLength();

		let prolet = new Prolet( this.stolbSize, length );


		this.result = {
			vorota,
			prolet,
			install
		}
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
			<hr />
			<div>
				Ворота и калитка
				<div ng-repeat="position in $ctrl.vorotaPositions">
					<label for="position-{{ position.id }}">
						<input 
							id="position-{{ position.id }}"
							type="radio"
							ng-model="$ctrl.vorotaPosition"
							ng-value="position"
							ng-change="$ctrl.calc()"
						>
						{{ position.label }}
					</label>
				</div>
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
			<hr />
			<div>
				Установка
				<div ng-repeat="install in $ctrl.installation">
					<label for="install-{{ install.id }}">
						<input 
							id="install-{{ install.id }}"
							type="radio"
							ng-model="$ctrl.installType"
							ng-value="install"
							ng-change="$ctrl.calc()"
						>
						{{ install.label }}
					</label>
				</div>
			</div>
			<hr />
			<div>
				Доставка
				<div ng-repeat="item in $ctrl.delivery">
					<label for="delivery-{{ item.id }}">
						<input 
							id="delivery-{{ item.id }}"
							type="radio"
							ng-model="$ctrl.deliveryType"
							ng-value="item"
							ng-change="$ctrl.calc()"
						>
						{{ item.label }}
					</label>
				</div>
			</div>
		</div>
		<result result="$ctrl.result"></result>
	`,
	controller: AppRootComponent
}