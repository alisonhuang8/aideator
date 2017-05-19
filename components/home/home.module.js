import homeComponent from './home.directive';

const module = angular.module('basic.components.home', []);

module.directive('home', homeComponent);

//configure component states
module.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('home', {
      url: '/',
      template: '<home></home>'
    });
});

export default module.name;
