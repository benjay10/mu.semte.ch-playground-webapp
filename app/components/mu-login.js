import MuLoginComponent from 'ember-mu-login/components/mu-login';
import { tracked } from '@glimmer/tracking';
import { action }  from '@ember/object';
import { computed } from '@ember/object';

export default class AuctionLoginComponent extends MuLoginComponent {

  @computed("errorMessage")
  get hasErrorMessage() {
    return this.errorMessage ? true : false;
  }
}
