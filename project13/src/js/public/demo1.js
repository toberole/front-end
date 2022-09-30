import m1 from "../modules/m1.js"
import m2 from "../modules/m2.js"
import user from "../domain/User.js"
// 导入 触发webpack打包
import "./../../css/demo1.css"

console.log(m1);
console.log(m2);
console.log(user.User);

window.onload = function () {
    console.log("demo1.js ......");
}

