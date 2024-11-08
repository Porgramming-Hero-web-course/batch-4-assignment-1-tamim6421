{


    function removeDuplicate ( arr: number[]) : number [] {

            const items: number[] = []
            arr.forEach ( (value) =>{
                if( !items.includes (value)){
                    items.push(value)
                }
            })
            return items.sort ((a:number, b:number) => (a- b) );

    }

    const myArry : number [] = [1,4,5,2,4,5,1,3,2,4,6,78,3,6,8,11]
    const result = removeDuplicate(myArry)
    console.log(result)
}