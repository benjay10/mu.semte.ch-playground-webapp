import Route from "@ember/routing/route";
import { inject } from '@ember/service';

export default class FavoritesRoute extends Route {

  @inject userService;
  @inject session;
  
  async beforeModel(transition) {
    this.session.requireAuthentication(transition, 'login');
  }

  async model() {
    ////console.log("Session variable", this.session);
    ////console.log("Account id", this.session.data.authenticated.relationships.account.data.id);
    //let accountId = this.session.data.authenticated.relationships.account.data.id;
    //let account = await this.store.findRecord("account", accountId, { include: "user" });
    ////console.log("Gevonden account", account);
    ////console.log("User info:", account.get("user").get("id"));

    //let userId = account.get("user").get("id");
    ////let user = await this.userService.currentUser;
    //return this.store.findRecord("client", userId, { include: "favorites,favorites.auction" });
    ////return this.store.findAll("prolongedtimelot", { include: "auction" });
    console.log("Will find the current user");
    let currentUser = await this.userService.getCurrentUser();
    console.log("Current user info", currentUser);
    return this.store.findRecord("client", currentUser.id, { include: "favorites,favorites.auction" });
  }

}
