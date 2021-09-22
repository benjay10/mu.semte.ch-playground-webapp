import Model, { attr, belongsTo, hasMany } from '@ember-data/model';
import { inject } from '@ember/service';

export default class AuctionModel extends Model {

  @inject conversionService;

  @attr('string') subject;
  @attr('string') description;
  @attr('date')   startdate;
  @attr('date')   enddate;
  @attr('string') takeawayaddress;
  @attr('date')   takeawaydate;
  @attr('date')   visitdate;

  @belongsTo('company') organisingcompany;
  @belongsTo('company') sellingcompany;
  @belongsTo('seller')  sellingparticipant;
  @belongsTo('reason')  reason;

  @hasMany('category') categories;
  @hasMany('lot', { polymorphic: true }) lots;

  get niceStartdate() {
    return this.conversionService.dateToNiceDate(this.startdate);
  }
  get niceEnddate() {
    return this.conversionService.dateToNiceDate(this.enddate);
  }
  get niceTakeawaydate() {
    return this.conversionService.dateToNiceDate(this.takeawaydate);
  }
  get niceVisitdate() {
    return this.conversionService.dateToNiceDate(this.visitdate);
  }
  get niceTakeawayaddress() {
    return this.conversionService.escapedstringToHTML(this.takeawayaddress);
  }
}
