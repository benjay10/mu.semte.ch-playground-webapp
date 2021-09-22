import Service from '@ember/service';
import { inject } from '@ember/service';

export default class UserServiceService extends Service {

  @inject session;
  @inject store;

  _currentUser;

  async getCurrentUser() {
    if (!this._currentUser) {

      // Trying to fix some annoying bug, the following does mocking of access rights to trick the identifier.
      console.log("BEFORE GETTING USER INFORMATION: mocking access rights");
      let headerso = new Headers();
      headerso.set("Content-Type", "application/json");
      let access = await fetch("http://localhost/mockaccess/", {
        method: "POST",
        headers: headerso,
        //body: "[{\"variables\":[],\"name\":\"public\"},{\"variables\":[\"2640809039\"],\"name\":\"persondata\"},{\"variables\":[],\"name\":\"clean\"}]"
        body: "CLEAR"
      });
      console.log("Return value from access rights:", access);

      let accountId = this.session.data.authenticated.relationships.account.data.id;
      let account = await this.store.findRecord("account", accountId, { include: "user" });
      console.log("Account info", account);
      let userId = account.get("user").get("id");
      console.log("User id", userId);
      this._currentUser = this.store.findRecord("client", userId);
    }
    return this._currentUser;
  }

  async addFavorite(lot) {
    console.log("Will add as favorite", lot, this.currentUser);
    let currentUser = await this.getCurrentUser();
    let favs = await currentUser.favorites;
    favs.pushObject(lot);
    console.log("Changes user?", currentUser.changedAttributes());
    console.log("Changes lot?",  currentUser.changedAttributes());
    return currentUser.save();
  }

  async removeFavorite(lot) {
    console.log("Will remove as favorite", lot, this.currentUser);
    let currentUser = await this.getCurrentUser();
    let favs = await currentUser.favorites;
    favs.removeObject(lot);
    console.log("Changes user?", currentUser.changedAttributes());
    console.log("Changes lot?",  currentUser.changedAttributes());
    return currentUser.save();
  }
}
