export class Person {
	private name: string;
	private age: number;

	constructor(name: string, age: number){
		this.name = name;
		this.age = age;
	}

	setName = (name: string) => this.name = name;
	setAge = (age: number) => this.age = age;
	
	getName = ():string => this.name;
	getAge = ():number => this.age;
}