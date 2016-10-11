
//find the body tag and store it in a variable called 'body'
  var body = document.querySelector("body");

  var taxiLocationCounter = 1;

  body.onkeydown = function(e){
    var trafficLight = new TrafficLight(taxiLocationCounter);

    //right arrow : 39
    //left arrow  : 37
    //up arrow    : 38
    //down arrow  : 40

    displayMessage(e.keyCode);
    if ((e.keyCode === 39) && (trafficLight.state() === 'green')) {
      var previousLocationCounter = taxiLocationCounter;
      taxiLocationCounter ++;

    }
    else if (e.keyCode === 37) {
    var  previousLocationCounter = taxiLocationCounter;
    taxiLocationCounter --;
    }
    else if (e.keyCode === 38 ) {

    trafficLight.red();
  }
  else if (e.keyCode === 40) {
  trafficLight.green();

}
  else if (true) {
      trafficLight.orange();

  }
      moveTaxi(previousLocationCounter, taxiLocationCounter);


    // //change the color like this
    // trafficLight.green();
    // trafficLight.red();
    // trafficLight.orange();
    //
    // //get the current color of the traffic light
    // trafficLight.state(taxiLocationCounter); // returns 'red', 'green' or 'orange'



      //up arrow    : 38
      //down arrow  : 40


    /*if (moveTaxi == 38) {
      var previousLocationCounter = taxiLocationCounter;
      taxiLocationCounter --;
    }
    else if (moveTaxi == 40) {
      var previousLocationCounter = taxiLocationCounter;
      taxiLocationCounter ++;
    }

    /*
    to move the taxi forward...
    when the right arrow is pressed
    work with `taxiLocationCounter`

    store the value of `taxiLocationCounter` in a variable called `previousLocationCounter`
    increment the `taxiLocationCounter`

    pass both to the `moveTaxi( previousLocationCounter,
        taxiLocationCounter)` function

    */
    // to make the second TrafficLight `Orange`

    // var tl = new TrafficLight(2);
    // tl.orange();

};
