import Model, { attr, belongsTo, hasMany } from "@ember-data/model";
import { inject } from '@ember/service';

export default class LotModel extends Model {

  @inject conversionService;
  
  @attr("string")  subject;
  @attr("string")  description;
  @attr("number")  amountofobjects;
  @attr("percent") productvat;
  @attr("percent") auctiontax;
  @attr("percent") vatonauctiontax;
  @attr("date")    enddate;
  @attr("number")  startamount;
  @attr("number")  stepamount;

  @hasMany("bid", { inverse: "lot" }) bids;

  @belongsTo("category")  category;
  @belongsTo("condition") condition;
  @belongsTo("auction", { inverse: "lots" }) auction;
  @belongsTo("classinfo") classinfo;

  get niceEnddate() {
    return this.conversionService.dateToNiceDate(this.enddate);
  }
  get niceStartamount() {
    return this.conversionService.valutaToNiceValuta(this.startamount);
  }
  get niceStepamount() {
    return this.conversionService.valutaToNiceValuta(this.stepamount);
  }
}
