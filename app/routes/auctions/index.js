import Route from "@ember/routing/route";

export default class AuctionsRoute extends Route {

  async model() {
    return this.store.findAll("auction");
  }
}
