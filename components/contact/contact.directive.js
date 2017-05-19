import template from './contact.html';
import controller from './contact.controller';

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

