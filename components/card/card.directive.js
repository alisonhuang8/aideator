import template from './card.html';
import controller from './card.controller';

export default function() {
  return {
    template,
    controller,
    restrict: 'E',
    replace: true,
    bindToController: true,
    controllerAs: '$ctrl'
  };
};
