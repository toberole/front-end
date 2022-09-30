console.log("Hello World!")

// 变量
var a = 123;
console.log(a)

/**
 * javascript数据类型
 * String
 * Number
 * Boolean
 * Null
 * Undefine
 * Object
 */
var str = "hello";
console.log(str)

/**
 * typeof（变量）检查变量类型
 */
console.log(typeof (str))
var i = 1
console.log(typeof (i))
console.log(Number.MAX_VALUE)

var ii = 1 + "2"
console.log(ii)

var n = 1;
console.log(n.toString())
/**
 * new 调用构造函数
 */
var obj = new Object();
console.log(typeof obj);
obj.name = "hello";
console.log(obj)
console.log(obj.name)
// 检查对象是否存在某属性
console.log("name" in obj)

function test1_1() {
    console.log("test1_1 ......");
}