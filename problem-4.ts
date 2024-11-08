{


    type Circle = {
        shape: "circle";
        radius: number;
    }

    type Rectangle = {
        shape : "rectangle";
        width: number;
        height: number;

    }



    function calculateCircleArea(circle: Circle): number {
        return Math.PI * circle.radius * circle.radius;
    }

    function calculateRectangleArea(rectangle: Rectangle): number {
        return rectangle.width * rectangle.height;
    }





    function calculateShapeArea(shape: Circle | Rectangle): number {
        if (shape.shape === "circle") {
            return calculateCircleArea(shape);  
        } else {
            return calculateRectangleArea(shape); 
        }
    }

    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    const result = parseFloat(circleArea.toFixed(2))  
    console.log(result)
    
    // Sample Input 2
    const rectangleArea = calculateShapeArea({
      shape: "rectangle",
      width: 4,
      height: 6,
    });
}