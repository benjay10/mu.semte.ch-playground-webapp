import { helper } from '@ember/component/helper';

export default helper(function ifp(args) {
  let [ pred , alt ] = args;
  if (pred) {
    return pred;
  } else {
    return alt;
  }
});
