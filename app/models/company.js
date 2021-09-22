import Model, { attr } from "@ember-data/model";
import { inject } from '@ember/service';

export default class CompanyModel extends Model {

  @inject conversionService;

  @attr("string") name;
  @attr("string") description;
  @attr("string") vatnumber;
  @attr("string") address;

  get niceAddress() {
    return this.conversionService.escapedstringToHTML(this.address);
  }
}
