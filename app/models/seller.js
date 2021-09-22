import Model, { attr, belongsTo, hasMany } from "@ember-data/model";
import Participant from "./participant";

export default class SellerModel extends Participant {
  @belongsTo("company") company;
}
