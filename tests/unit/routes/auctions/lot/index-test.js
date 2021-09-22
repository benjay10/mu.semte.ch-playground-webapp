import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | auctions/lot/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:auctions/lot/index');
    assert.ok(route);
  });
});
