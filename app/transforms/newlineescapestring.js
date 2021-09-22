import Transform from "@ember-data/serializer/transform";

export default class NewlineescapestringTransform extends Transform {
  deserialize(serialized) {
    let result = serialized.replace(/\\n/, "<br />");
    return result;
  }

  serialize(deserialized) {
    let result = serialized.replace(/\<br \/\>/, "\\n");
    return result;
  }
}
