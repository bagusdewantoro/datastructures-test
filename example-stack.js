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
