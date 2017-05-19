import contactComponent from './contact.directive';

const module = angular.module('basic.components.contact', []);

module.directive('contact', contactComponent);

//configure component states
module.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('contact', {
      url: '/contact/:id',
      template: '<contact></contact>'
    });
});

export default module.name;
