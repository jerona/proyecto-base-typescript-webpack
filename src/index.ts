import { Person } from "./models/Person";

const welcome = () => {
	let person: Person = new Person('jeron', 21);
	console.log(`Typescript loading OK\nbienvenido -> name: ${person.getName()} age: ${person.getAge()}`);
}

welcome();

// code here!