{


    class Car {
        build: string;
        model: string;
        year: number;

        constructor(build: string, model: string, year: number){
            this.build = build;
            this.model = model;
            this.year  = year;
        }

        getCarAge(): number {
            const runningYear = new Date().getFullYear()
            return runningYear - this.year
        }
    }

    const myCar = new Car ("toyota", "Corolla", 2010)
    console.log(myCar.getCarAge())



}