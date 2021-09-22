import Route from '@ember/routing/route';

export default class AuctionsAuctiondetailsLotRoute extends Route {

  async model(params) {
    return this.store.findRecord("lot", params.lot_id, {
      include: "condition,category,classinfo,bids"
    });
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    let contr = this.controllerFor(this.fullRouteName);
    contr.set("model", model);
    contr.setupModel();
  }
}
