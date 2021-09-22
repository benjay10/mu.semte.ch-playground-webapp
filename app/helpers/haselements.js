import { helper } from '@ember/component/helper';

export default helper(function haselements(list) {
  console.log(list);
  console.log(list.length);
  return (list && list.length && list.length > 0);
});
