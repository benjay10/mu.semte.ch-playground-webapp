import Model, { attr } from "@ember-data/model";
import User from "./user";

export default class ParticipantModel extends User {
  @attr("string") firstname;
  @attr("string") lastname;
  @attr("string") address;
  @attr("string") vatnumber;
  @attr("number") balance;

  get fullname() {
    return [ this.firstname, this.lastname ].join(" ");
  }
}
