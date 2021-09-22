import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default class ApplicationRoute extends Route {
  
  @inject userService;
  
  async model() {
    //let userService = this.userService;
    //return this.store.findRecord("client", "2640809039", { include: "favorites" }).then((user) => {
    //  userService.currentUser = user;
    //});
  }
}
