import Model, { attr, belongsTo, hasMany } from "@ember-data/model";
import Participant from "./participant";

export default class ClientModel extends Participant {
  @hasMany("lot") favorites;
}
