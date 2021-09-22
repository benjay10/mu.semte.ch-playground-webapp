import Controller  from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class AuctionsAuctiondetailsIndexController extends Controller {
  @tracked model;

  async setupModel() {
    let m        = this.model;
    let cats     = await m.categories;
    let fullcats = [];
    cats.forEach((item, index) => {
      let current = item;
      let fullcat = [];
      while (current) {
        let label = current.get("label");
        if (label) {
          fullcat.push(label);
        }
        current = current.get("parentcategory");
      }
      fullcats.push(fullcat.reverse().join(" > "));
    });
    this.model.fullCategory = fullcats.join("<br />");
    // Please, dear God, trigger an update on the model to rerender the component!
    this.model = this.model;
  }
}
