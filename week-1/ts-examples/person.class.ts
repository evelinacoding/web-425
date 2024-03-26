/**
 * Title: person.class.ts
 * Author: Evelyn Zepeda
 * Date: 3/25/24
 * Description: Person class that implements a Person interface 
 */

import {IPerson} from "./person.interface";

class Person implements IPerson {
    firstName: string;
    lastName: string;

    constructor(firstName:string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let myName = new Person("Evelyn", "Zepeda");
console.log(`My name is ${myName.firstName} ${myName.lastName}`)