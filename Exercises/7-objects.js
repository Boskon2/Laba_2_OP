'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = () => {
  const obj1 = { name: 'Taras' };
  let obj2 = { name: 'Ivan' };
  obj1.name = 'Vlad';
  obj2.name = 'Oleg';
  // obj1 = { name: 'Mykhailo' };
  //TypeError: Assignment to constant,
  obj2 = { name: 'Serhii' };
  return { obj1, obj2 };
};
module.exports = { fn };
