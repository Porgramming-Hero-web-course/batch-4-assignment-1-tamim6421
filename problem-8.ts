{


    function validateKeys  (obj: object, keys: string []): boolean {
        
        if(typeof obj !== "object" || obj == null || !Array.isArray(keys)) {
            console.error(" Ivaled input, Obj must be Object and Keys must be array")
            return false
        }

        for (let key of keys ) {
            if (typeof key !== "string"){
                console.error("Invaled key, key must be string")
                return false
            }

            if( !(key in obj)){
                console.log("key does not exsit in the object")
                return false
            }
        }
    return true
    }

    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, []));



}