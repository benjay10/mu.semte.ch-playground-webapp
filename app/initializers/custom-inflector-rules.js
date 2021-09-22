import Inflector from 'ember-inflector';

export function initialize(/* application */) {
  const inflector = Inflector.inflector;

  //inflector.irregular('campus', 'campuses');

  inflector.uncountable("classinfo");
  inflector.uncountable("condition");
  inflector.uncountable("brandnew");
  inflector.uncountable("new");
  inflector.uncountable("old");
  inflector.uncountable("used");
  inflector.uncountable("damagedpackaging");
  inflector.uncountable("aged");
  inflector.uncountable("damaged");
  inflector.uncountable("excellent");
  inflector.uncountable("broken");
  inflector.uncountable("good");
  inflector.uncountable("wornout");
}

export default {
  name: 'custom-inflector-rules',
  initialize
};
