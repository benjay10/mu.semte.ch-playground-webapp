import Model, { attr } from '@ember-data/model';

export default class ClassinfoModel extends Model {
  @attr("string") label;
  @attr("string") comment;
}
