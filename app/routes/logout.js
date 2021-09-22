import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default class LogoutRoute extends Route {
  @inject session;

  beforeModel(transition) {
    this.session.requireAuthentication(transition, 'index');
  }
}
