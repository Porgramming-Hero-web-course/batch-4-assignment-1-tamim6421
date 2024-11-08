{


    interface Profile {
        name: string;
        age: number;
        email: string;
    }


    function updateProfile (profile: Profile, update: {name?:string; age?:number; email?:string}) : Profile {
        return {...profile, ...update}
    }

    // Sample Input :
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));



}