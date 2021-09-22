import Controller  from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action }  from '@ember/object';
import { cancel, later, next } from '@ember/runloop';
import { inject } from '@ember/service';

export default class AuctionsAuctiondetailsLotController extends Controller {

  @tracked model;
  @inject  bidService;
  @inject  userService;

  @action
  async makeBid(lot) {
    return this.bidService.makeBid(lot);
  }

  @action
  async markFavorite(lot) {
    return this.userService.addFavorite(lot);
  }

  @action
  async unmarkFavorite(lot) {
    return this.userService.removeFavorite(lot);
  }

  @action
  async setupModel() {
    let m = this.model;
    let current = await m.category;
    let result = [];

    while (current) {
      result.push(current.label);
      current = await current.parentcategory;
    }
    this.model.fullCategory = result.reverse().join(" > ");
    this.model = this.model;
  }

}
