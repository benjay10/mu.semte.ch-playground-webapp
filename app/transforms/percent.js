import Transform from '@ember-data/serializer/transform';

export default class PercentTransform extends Transform {
  deserialize(serialized) {
    return serialized + "%";
  }

  serialize(deserialized) {
    return parseFloat(deserialized.replace(/\%/, ""));
  }
}
