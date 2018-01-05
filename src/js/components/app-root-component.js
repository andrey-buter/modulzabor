import Prolet from '../classes/Prolet';
import Vorota from '../classes/Vorota';
import Install from '../classes/Install';
import Zapolnenie from '../classes/Zapolnenie';
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

		this.zapolnenie = GLOBALS.zapolnenie;
		this.zapolnenieType = this.zapolnenie[0];
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

		let zapolnenie = new Zapolnenie( prolet.proletCount, this.zapolnenieType )

		this.result = {
			vorota,
			prolet,
			install,
			zapolnenie
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
			<div ng-if="+$ctrl.generalLength > 0">
				<div class="form-stolbs form-radio">
					<div class="form-stolb-item form-radio-item" ng-repeat="size in $ctrl.stolbs">
						<input
							id="size-{{ size }}" 
							type="radio" 
							ng-model="$ctrl.stolbSize" 
							ng-value="size"
							ng-change="$ctrl.calc()"
						>
						<label for="size-{{ size }}">
							{{ size }}x{{ size }}
						</label>
					</div>
				</div>
				<hr />
				<div>
					Ворота и калитка
					<div class="form-radio">
						<div class="form-radio-item" ng-repeat="position in $ctrl.vorotaPositions">
							<input 
								id="position-{{ position.id }}"
								type="radio"
								ng-model="$ctrl.vorotaPosition"
								ng-value="position"
								ng-change="$ctrl.calc()"
							>
							<label for="position-{{ position.id }}">
								{{ position.label }}
							</label>
						</div>
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
					<div class="form-radio">
						<div class="form-radio-item" ng-repeat="install in $ctrl.installation">
							<input 
								id="install-{{ install.id }}"
								type="radio"
								ng-model="$ctrl.installType"
								ng-value="install"
								ng-change="$ctrl.calc()"
							>
							<label for="install-{{ install.id }}">
								{{ install.label }}
							</label>
						</div>
					</div>
				</div>
				<hr />
				<div>
					Деревянные пролеты
					<div class="form-select">
						<select 
							ng-model="$ctrl.zapolnenieType"
							ng-options="type.label for type in $ctrl.zapolnenie"
							ng-change="$ctrl.calc()"
						></select>
					</div>
				</div>
				<hr />
				<div>
					Доставка
					<div class="form-radio">
						<div class="form-radio-item" ng-repeat="item in $ctrl.delivery">
							<input 
								id="delivery-{{ item.id }}"
								type="radio"
								ng-model="$ctrl.deliveryType"
								ng-value="item"
								ng-change="$ctrl.calc()"
							>
							<label for="delivery-{{ item.id }}">
								{{ item.label }}
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>
		<result result="$ctrl.result"></result>
	`,
	controller: AppRootComponent
}