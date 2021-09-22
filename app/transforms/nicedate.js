import Transform from "@ember-data/serializer/transform";

export default class NicedateTransform extends Transform {
  deserialize(serialized) {
    let result = new Date(serialized);
        result = result.toLocaleString();
        result = result.replace(/ /, " at ");
        result = result.replace(/:\d\d$/, "");
    return result;
  }

  serialize(deserialized) {
    let result = deserialized.replace(/ at /, ", ");
    return new Date(result);
  }
}
