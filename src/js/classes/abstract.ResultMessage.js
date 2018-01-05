export default class ResultMessage {
	constructor() {
	}

	title( title ) {
		return this._block( title, 'Кол-во', 'Цена', 'result-title-item' );
	}
	message( title, count, price ) {
		return this._block( title, count, `${price}`, 'result-message-item' );
	}

	result( price ) {
		return this._block( 'Итого (руб.):', '', `${price}`, 'result-item' );
	}

	_block( title, count, price, cssClass ) {
		return `
			<div class="result-message-row ${cssClass}">
				<div class="col-item col-title">
					${title}
				</div>
				<div class="col-item col-count">
					${count}
				</div>
				<div class="col-item col-price">
					${price}
				</div>
			</div>
		`;
	}

	join( array ) {
		return array.join( '' );
	}
}