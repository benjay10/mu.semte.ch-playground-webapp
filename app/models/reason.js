import Model, { attr } from "@ember-data/model";

export default class ReasonModel extends Model {
  @attr("string") label;
  @attr("string") comment;

  classLabel = "";

  get reasonString() {
    return this.classLabel + " > " + this.label;
  }
}
