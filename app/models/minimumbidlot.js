import Model, { attr } from "@ember-data/model";
import Lot from "./lot";

export default class MinumumbidlotModel extends Lot {
  @attr("number") minimumsellingamount;
}
