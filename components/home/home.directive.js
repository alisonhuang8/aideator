import template from './home.html';
import controller from './home.controller';

export default function() {
  return {
    template,
    controller,
    restrict: 'E',
    //replace: true,
    bindToController: true,
    controllerAs: '$ctrl'
  };
};

