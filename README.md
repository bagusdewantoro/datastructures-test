# DataStructures-test.js

My first NPM package for learning purpose.
The content is based on the book that currently I read, [Learning JavaScript Data Structures and Algorithms: Write complex and powerful JavaScript code using the latest ECMAScript, 3rd Edition](https://www.amazon.com/Learning-JavaScript-Data-Structures-Algorithms/dp/1788623878) by [Loiane Groner](https://github.com/loiane).

- [Installation](#installation)
- [Quick Start](#quick-start)

## Installation

```bash
npm i datastructures-test
```

## Quick Start

Example file: [example-stack.js](./example-stack.js)

```js
const Stack = require('datastructures-test');
console.log(Stack);

const stack = new Stack;
stack.push(2)
stack.push(3)
stack.clear()
stack.push(10)
stack.push(11)
stack.push(12)
console.log(stack.pop()) // 12
stack.push(30)
console.log(stack) // Stack { count: 3, items: { '0': 10, '1': 11, '2': 30 } }
console.log(stack.peek()) // 30
console.log(stack.size()) // 3
console.log(stack.toString()) // only this method will have O(n)
```
