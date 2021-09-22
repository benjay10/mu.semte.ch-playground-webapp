import Model, { attr, belongsTo } from "@ember-data/model";
import { inject } from '@ember/service';

export default class BidModel extends Model {
  
  @inject conversionService;

  @attr("number") amount;
  @attr("date")   timestamp;
  
  @belongsTo("client") user;
  @belongsTo("lot", { polymorphic: true }) lot;

  get niceTimestamp() {
    return this.conversionService.dateToNiceDate(this.timestamp);
  }
  get niceAmount() {
    return this.conversionService.valutaToNiceValuta(this.amount);
  }
}
