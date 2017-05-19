import Home from './home/home.module';
import Contact from './contact/contact.module';
import Card from './card/card.module';

const module = angular.module('basic.components', [
  Home,
  Contact,
  Card
]);

export default module.name;
