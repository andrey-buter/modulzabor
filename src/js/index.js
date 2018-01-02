'use strict';

// import ArrayService from './services/array';
// import GlobalsService from './services/globals';
// import DBService from './services/db';
// import DBFavoriteService from './services/db-favorite';
import AppRootComponent from './components/app-root-component';
// import ConfigUIRouter from './ui-router/config';



angular.module( 'myApp', ['ui.router'] )
	// .service( 'arrayService', ArrayService )
	// .service( 'globalsService', GlobalsService )
	// .service( 'dbService', DBService )
	// .service( 'dbFavoriteService', DBFavoriteService )
	
	.component( 'appRootComponent', AppRootComponent )


	.config( $stateProvider => {
		$stateProvider.state('home', {
			url: '/',
			template: 'home',
		});
		$stateProvider.state('users', {
			url: '/users',
			template: 'users',
		});
	} )
;