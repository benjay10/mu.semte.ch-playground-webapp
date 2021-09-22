import Service from '@ember/service';
import { inject } from '@ember/service';

export default class BidServiceService extends Service {

  @inject userService;
  @inject store;

  async makeBid(lot) {
    //console.log("Making a bid on lot", lot);
    let user       = await this.userService.getCurrentUser();
    let bids       = await lot.bids;
    let bidsA      = bids.toArray();
    let highestbid = await this.getHighestBid(bidsA);
    let newAmount  = highestbid ? (highestbid.amount + lot.stepamount) : lot.get("startamount");
    //console.log("New amount", newAmount);
    //let newBid     = this.store.createRecord("bid", { amount: newAmount, timestamp: new Date(), user: user });
    let newBid     = this.store.createRecord("bid", {});
      newBid.amount = newAmount;
      newBid.timestamp = new Date();
      newBid.user = user;
    lot.bids.pushObject(newBid);
    lot.productvat = "21%";
    //console.log("ChangedAttributes", lot.changedAttributes());
    //console.log("HasDirtyAttributes", lot.hasDirtyAttributes);
    let bidp  = newBid.save();
    return bidp;
    ////Below does not work as intended. The lot needs no saving? Probably because the relation and inverse relation between bid and lot is well defined?
    //let bidp2 = bidp.then((bid) => {
    //  let lotp = lot.save();
    //  return lotp.then((lot) => {
    //    return bid;
    //  });
    //});
    //bidp2.catch((err) => console.error("An error occured"));
    //return bidp2;
  }

  async getHighestBid(bids) {
    //console.log("GETTING HIGHEST BID", bids);
    let guess = await bids.get(0);
    //console.log("INITIAL GUESS", guess);
    if (!guess) { return undefined };
    bids.forEach((bid) => {
      //console.log("CHECKING FOR HIGHER BID", bid);
      //console.log("\tBID VALUES:", bid.get("amount"), guess.get("amount"));
      if (bid.get("amount") > guess.get("amount")) {
        guess = bid;
      }
    });
    //console.log("NEW GUESS FOUND", guess);
    return guess;
  }

}
