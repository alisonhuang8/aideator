import cardComponent from './card.directive';

const module = angular.module('basic.components.card', []);

module.directive('card', cardComponent);

export default module.name;
