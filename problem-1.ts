
{
//

function sumArray (arr: number[]):number {
    
    const addSum  = arr.reduce((sum: number, num: number) : number => sum + num, 0)
    // console.log(addSum)
    return addSum 

}

const myArray : number [] = [1,2,3] 
sumArray(myArray)



//
}
