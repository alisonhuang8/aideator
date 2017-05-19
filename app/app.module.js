console.log('application loading...');

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import animate from 'angular-animate';
import AppStyles from '../styles/app.scss';
import AppComponent from './app.component';
import Components from '../components/components.module';

// create our app module and setup core dependencies
angular.module('app', [

  uiRouter,
  animate,
  Components

])

.config(($urlRouterProvider) => {
  'ngInject';

  // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
  // #how-to-configure-your-server-to-work-with-html5mode
  // $locationProvider.html5Mode(true);

  // setup default route
  $urlRouterProvider.otherwise('/');

})

// setup root component
.component('app', AppComponent);

