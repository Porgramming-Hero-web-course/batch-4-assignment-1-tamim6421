Understanding TypeScript’s Union and Intersection Types
TypeScript's type system offers powerful features for enhancing code reliability and safety. Among these features, Union Types and Intersection Types are essential tools that allow you to handle different kinds of data in a flexible and safe way. Let’s dive deeper into each of them and explore how they can help improve your TypeScript code.


What are Union Types?
A union type allows a variable to hold one of several specified types. Union types give us the flexibility to say, "this value could be of type A or type B," making it perfect for cases where multiple types are valid for a single value.

Syntax

To create a union type, use the pipe symbol ( | ) between the types:

let value: string | number;
value = "Hello";  // Valid
value = 42;       // Also valid
In this case, userId can either be a string or a number. This is useful when you have multiple functions with different parameter types but similar functionality.

Why Union Types are Important
Union types are critical for improving type safety in scenarios where a variable can have multiple types. They enable TypeScript to detect errors when an invalid type is assigned, while also giving you the flexibility to work with multiple types in a single variable.

Key Benefits of Union Types:
Flexibility: Allows a variable to accept multiple types, which is especially useful when working with APIs or data from different sources.
Enhanced Type Checking: TypeScript will still validate each possible type, alerting you to invalid type usage.
Improved Readability: Union types make it clear that a value is expected to be one of a specific set of types.

Example
the following variable is of type number or string:

let result: number | string;
result = 10; // OK
result = 'Hi'; // also OK
result = false; // a boolean value, not OK
A union type describes a value that can be one of several types, not just two. For example number | string | boolean is the type of a value that can be a number, a string, or a boolean.

Back to the add() function example, you can change the types of parameters from the any to a union like this:

function add(a: number | string, b: number | string) :  number | string {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}
What are intersection types?
Intersection types are a way in TypeScript to combine multiple types into one. This allows you to mix multiple types together to create a new type that includes all the properties of the original types. In other words, an intersection type is a type that combines multiple types into one, effectively combining them. For example, Name & Age & Height is a type that is all of Name and Age and Height. That means an object of this type will have all members of all three types. The syntax for creating intersection types is quite simple. You use the & operator between two or more types.

Here's an example:

type Name = { name: string };
type Age = { age: number };
type Height = { height: number };
type Person = Name & Age & Height; //intersection type

let person: Person = {
    name: 'John',
    age: 25,
    height: 185
};
