import Model, { attr, belongsTo } from "@ember-data/model";

export default class CategoryModel extends Model {
  @attr("string") label;
  @attr("string") comment;

  @belongsTo("category", { inverse: null }) parentcategory;

  get breadcrumbs() {
    let result = [ this.label ];
    let cat    = this.parentcategory;

    while (cat) {
      result.push(cat);
      cat = cat.parentcategory;
    }

    return result.reverse().join(" > ");
  }
}
