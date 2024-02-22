console.log('hello-world');

const deepObj = {
  key: {
    key: {
      key: {
        key: {
          key: 'value'
        }
      }
    }
  }
}

console.dir(deepObj, { depth: 4 });

debugger;

let value = 0;

console.log('debug 1');

value = 1;

console.log('debug 2');

value = 2;

console.log('debug 3');

value = 100;

console.log('debug 3');
