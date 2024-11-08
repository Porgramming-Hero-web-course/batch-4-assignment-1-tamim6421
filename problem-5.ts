{

    function getItems <T> ( obj: T, key : keyof T) : T [keyof T] {
        return obj [key]
    }

    const person1 = { name: "Hero", age: 600}
    const result1 = getItems(person1, "name")
    const result2 = getItems(person1, "age")
    console.log(result1, result2)

    


}