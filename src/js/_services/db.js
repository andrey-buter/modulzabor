/**
 * see https://frontender.info/localforage-offline-storage-improved/
 * see https://github.com/localForage/localForage
 *
 * В первую очередь нужно запустить метод init(), чтобы закэшировать/инициализировать базу.
 * Кэш сделан с целью ускорить работу сервиса и сделать его работу более прозрачной
 * + сдеать получение данных без промиса
 * 
 */
export default class DBService {
	/* @ngInject */
	constructor() {
		this._setConfig();
		this.baseName = 'audio-player';
		this.db = false;
	}

	init() {
		return this._getDB().then( data => {
			console.log('== init DB')
			console.log(data)
			return data;
		});
	}

	_setConfig() {
		// see https://codepen.io/thgreasi/pen/ojYKeE
		localforage.setDriver([
			localforage.INDEXEDDB,
			localforage.LOCALSTORAGE
		]);
	}

	set( key, value ) {
		this.db[ key ] = value;
		return this._saveDB( this.db ).then( () => {
			return value;
		});
	}

	get( key ) {
		return new Promise( ( resolve ) => {
			setTimeout( () => {
				resolve( this.db[ key ] );
			}, 0);
		});
	}

	directGet( key ) {
		return this.db[ key ];
	}

	// remove( key ) {

	// }

	_isSetDB() {
		return ( false !== this.db );
	}

	_saveDB() {
		return localforage.setItem( this.baseName, this.db );
	}

	_getDB() {
		if ( this._isSetDB() ) {
			return new Promise( ( resolve ) => {
				setTimeout( () => {
					resolve( this.db );
				}, 0);
			});
		}

		return localforage.getItem( this.baseName ).then( ( data ) => {
			if ( ! data ) 
				data = {};

			this.db = data;

			return this.db;
		});
	}

	_removeAll() {
		return localforage.removeItem( this.baseName ).then( () => {
			this.db = {};
			return null;
		});
	}
}