import Model, { attr, belongsTo, hasMany } from "@ember-data/model";
import Lot from "./lot";

export default class ReservelotModel extends Lot {
  @attr("number") secrettargetamount;

  @hasMany("secretbid") secretbids;
}
