import Model, { attr } from "@ember-data/model";

export default class ConditionModel extends Model {
  @attr("string") label;
  @attr("string") comment;

  classLabel = "";

  get conditionString() {
    return this.classLabel + " > " + this.label;
  }
}
