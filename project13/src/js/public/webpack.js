import user from "./../domain/User"
// 导入 触发webpack打包
import "./../../css/webpack.css"

let u = new user.User("hell wp", 18);

window.onload = function () {
    let box1 = document.getElementById("box1");
    box1.innerHTML = ("hello " + u.name + (new Date()).toString());
}