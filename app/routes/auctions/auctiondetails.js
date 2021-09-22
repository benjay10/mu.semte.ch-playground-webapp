import Route from "@ember/routing/route";

export default class AuctionsAuctiondetailsRoute extends Route {
  
  async model(params) {
    let categories = this.store.findAll("category", { include: "parentcategory" });
    let auction    = this.store.findRecord("auction", params.auction_id, {
            include: "lots,reason,sellingcompany,organisingcompany,sellingparticipant,categories"
    });
    return Promise.all([categories, auction]).then((values) => values[1]);

    //let categories = await this.store.findAll("category", { include: "parentcategory" });
    //let auction    = await this.store.findRecord("auction", params.auction_id, {
    //        include: "lots,reason,sellingcompany,organisingcompany,sellingparticipant,categories"
    //});
    //return auction;
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    let contr = this.controllerFor(this.fullRouteName + ".index");
    contr.set("model", model);
    contr.setupModel();
  }
}
