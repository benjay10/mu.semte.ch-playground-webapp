import Component   from '@ember/component';
import { tracked } from '@glimmer/tracking';
import { action }  from '@ember/object';
import { cancel, later, next } from '@ember/runloop';
import { inject }  from '@ember/service';
import { computed } from '@ember/object';

export default class BidonitComponent extends Component {
  
  @inject userService;
  @inject session;

  enddate;
  @tracked timeleft = "";
  timer;
  @tracked sortedBids;
  @tracked isFavorite;
  tooltips;

  @computed("session.isAuthenticated")
  get isLoggedIn() {
    console.log("checking if logged in for the bidonit", this.session.isAuthenticated)
    return this.session.isAuthenticated;
  }

  @action
  async makeBid(lot) {
    let bid = await this.onMakeBid(lot);
    this.addBidSorted(bid);
    return bid;
  }

  @action
  async markFavorite() {
    //console.log("Marking as favorite (component js)", this.model);
    let me = this;
    return this.onMarkFavorite(this.model).then((val) => {
      me.isFavorite = true;
      return val;
    });
  }

  @action
  async unmarkFavorite() {
    //console.log("Unmarking as favorite (component js)", this.model);
    let me = this;
    return this.onUnmarkFavorite(this.model).then((val) => {
      me.isFavorite = false;
      return val;
    });
  }

  @action
  async checkFavorite() {
    let currentUser = await this.userService.getCurrentUser();
    this.isFavorite = currentUser.get("favorites").isAny("id", this.model.id);
    //this.isFavorite = this.userService.currentUser.favorites.isAny("id", this.model.id);
  }

  @action
  startCountDown(element) {
    this.enddate = this.model.enddate;
    this.timeleft = this.msecToHMS(new Date(this.enddate - Date.now()));
    next(this, function() {
      this.timer = this.adjustCountDown();
    });
  }

  @action
  adjustCountDown() {
    return later(this, function() {
      this.timeleft = this.msecToHMS(new Date(this.enddate - Date.now()));
      this.timer = this.adjustCountDown();
    }, 1000);
  }

  @action
  stopCountDown(element) {
    cancel(this.timer);
  }

  @action
  async makeSortedBids() {
    let sorted = await this.model.bids;
    sorted = sorted.toArray();
    sorted.sort((bid1, bid2) => {
      return bid2.timestamp - bid1.timestamp;
    });
    this.sortedBids = sorted;
  }

  @action
  addBidSorted(bid) {
    //Prepend elements to the array using "unshift"(?)
    this.sortedBids.unshift(bid);
    this.sortedBids = this.sortedBids;
  }

  msecToHMS(msecs) {
    let left, h, m, s;
    left  = Math.round(msecs / 1000);
    h     = Math.floor(left  / 3600);
    left -= (h * 3600);
    m     = Math.floor(left  / 60);
    left -= (m * 60);
    s     = left;

    s = s < 10 ? `0${s}` : `${s}`;
    m = m < 10 ? `0${m}` : `${m}`;
    h = h < 10 ? `0${h}` : `${h}`;
    return `${h}:${m}:${s}`
  }

  destroyTooltip(element) {
    bootstrap.Tooltip.getInstance(element).dispose();
  }

  insertedTooltip(element) {
    new bootstrap.Tooltip(element);
  }

  insertedPopover(element) {
    new bootstrap.Popover(element);
  }
  
////This is replaced by reder modifiers for better performance
//  didRender() {
//    [...document.querySelectorAll('[data-bs-toggle="popover"]')].forEach(el => new bootstrap.Popover(el));
//    [...document.querySelectorAll('[data-bs-toggle="tooltip"]')].forEach(el => new bootstrap.Tooltip(el));
//  },

}
