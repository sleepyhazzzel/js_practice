var obj = {}
Object.defineProperty(obj, 'a', {
  value: {},
  writable: false
})

obj.a = 'aaa'   // num.a = {}
obj.a.b = 'bbb' // num.a = { b: 'bbb' } // 子屬性可修改

'use strict';   // 嚴格模式
obj.a = 'aaa'   // Uncaught TypeError: Cannot assign to read only property 'a' of object

Object.defineProperty(obj, 'a', {
  value: {},
  writable: true
})

obj.a = 'aaa'   // num.a = 'aaa' // 可修改