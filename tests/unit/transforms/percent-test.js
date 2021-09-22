import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Transform | percent', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let transform = this.owner.lookup('transform:percent');
    assert.ok(transform);
  });
});
