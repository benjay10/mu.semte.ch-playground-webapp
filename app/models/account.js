import Model, { attr, belongsTo } from '@ember-data/model';

export default class AccountModel extends Model {

  @attr("string") username;

  @belongsTo("user", { polymorphic: true }) user;
}
