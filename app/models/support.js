import Model, { attr } from "@ember-data/model";
import User from "./user";

export default class SupportModel extends User {
  @attr("string") username;
}
