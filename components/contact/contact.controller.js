import styles from './contact.module.scss';

export default class {

  constructor($stateParams) {
    'ngInject';

    // css-modules (https://github.com/webpack/css-loader#css-modules)
    this.styles = styles;

    this.myCoolVariable = $stateParams.id
  }
}
