{
    function countWordOccurrences (sentence:string, word:string): number{
        const mySentence:string[] = sentence.split(' ')
        console.log(mySentence)

        let count: number = 0
        mySentence.forEach( (value) => {
        
            if(value.toLocaleLowerCase() === word.toLocaleLowerCase() ){
                count ++ 
            }
        } )

        return count
    }


    const result = countWordOccurrences("I love  typescript typescRipt TypesCript ", "typesCript")
    // console.log(result)
}