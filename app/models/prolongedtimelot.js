import Model, { attr } from "@ember-data/model";
import Absolutelot from "./absolutelot";

export default class ProlongedtimelotModel extends Absolutelot {
  @attr("number") incrementtime;
}
