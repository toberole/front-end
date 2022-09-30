//import "./test1"

function test2_1() {
    //test1_1();
    console.log("test2 ......");
}

var obj = {
    "name": "hello",
    "age": 11
}
// 遍历obj属性
for (var n in obj) {
    console.log(n)
}
/**
 * 每个函数都对应着一个prototype
 * 如果函数作为普通函数 prototype没有任何作用
 * 如果函数作为构造函数 对象中有一个隐含属性指向prototype
 *      可以通过__proto__访问隐含属性
 */
function Person() {
    this.name = "hello";
    this.age = 11;
    this.sysName = function () {
        console.log("name: " + this.name)
    }
}

var p = new Person();
p.sysName();
console.log(Person.prototype)
console.log(p.__proto__)

console.log(p.hasOwnProperty("name"))

// PropertyIsEnumerable
// 判断给定的属性是否可以用 for...in 语句进行枚举。

// hasOwnProperty(property)
// 判断对象是否有某个特定的属性。必须用字符串指定该属性



