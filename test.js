var Car = function(maxSpeed,driver){
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.speed = function(speed,time){
        console.log("Distance travelled is " + (speed * time));
    }
    this.drive = function(){
        console.log("Driver name is " + this.driver);
    }
}

var myCar1 = new Car(50,"Sudharshan");
var myCar2 = new Car(60,"Nithin");
var myCar3 = new Car(70,"Neha");
var myCar4 = new Car(80,"Nidhi");

console.log(myCar4.driver);
