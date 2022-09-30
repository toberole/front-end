class Demo{
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	sysname(){
		console.log(this.name)
	}
}

var demo = new Demo("hello",11);
console.log(demo)
demo.sysname()

function test1(){
	
}