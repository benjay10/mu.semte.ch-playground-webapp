import Model, { attr, hasMany } from "@ember-data/model";

export default class UserModel extends Model {
  @attr("string") email;
  @attr("string") language;
  @attr("string") timezone;

  @hasMany("account", { inverse: "user" }) accounts;
}
