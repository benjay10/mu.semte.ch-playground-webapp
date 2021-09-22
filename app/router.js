import EmberRouter from "@ember/routing/router";
import config from "auction-web-app/config/environment";

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route("index", { path: "/" });
  this.route("auctions", function () {
    this.route("index",          { path: "/" });
    this.route("auctiondetails", { path: "/:auction_id" }, function() {
      this.route("index", { path: "/" });
      this.route("lot",   { path: "lot/:lot_id" });
    });
  });
  this.route("favorites");
  this.route("company", { path: "company/:company_id" });
  this.route('login');
  this.route('logout');
});
