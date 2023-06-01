const day = "sunday";

switch(day){
    case "monday":
        console.log("Plan course structure");
        console.log("learn js");
        break;

    case "tuesday":
        console.log("Finish homework");
        break;

    case "wednesday":
    case "thursday":
        console.log("This is using both wed and thurs");
        break;


    case "friday":
    case "saturday":
    case "sunday":
        console.log("play games all day");
        break;



    default:
        console.log("Not a day");
}

// this is all the same as an if else statment.
//This is a very long way to do this.--------------------------------------------

/*if (day === "monday"){
    console.log("Plan course structure");
        console.log("learn js");
}

else if(day === "tuesday"){
    console.log("Finish homework");

}

else if(day === "wednesday"){
    console.log("Finish homework");
}

else if(day === "thursday"){
    console.log("Finish homework");
}

else if(day === "friday"){
    console.log("Finish homework");
}

else if(day === "saturday" || day ==="sunday"){
    console.log("Finish homework");
}*/