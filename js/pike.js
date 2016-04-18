//global functions and variables
var openHours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11a:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:' ];

var msg;

var pikePlace = {
  locationName: 'Pike\'s Place',
  minCustomer: 17,
  maxCustomer: 88,
  avePerCust: 5.2,
  aveCustomersIn: function () {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
  },
  aveCookiesPerHour: function () {
    return Math.floor((this.aveCustomersIn()) * this.avePerCust);
  },
  customerArray: [],
  cookieArray: [],
};

var newData = document.getElementById('newData');
for (var i = 0; i < openHours.length; i++) {
  var openTimes = document.createElement('li');
  //openTimes.value = newData;
  //openTimes.textContent = newData;
  pikePlace.cookieArray.push(pikePlace.aveCookiesPerHour());
  openTimes.textContent = (openHours[i] + pikePlace.cookieArray[i] + ' cookies');
  newData.appendChild(openTimes);
}

//
// var elCustomers = document.getElementById('newData');
// elCustomers.textContent = pikePlace.aveCustomersIn;
// //
// // var newData = document.getElementById('newData');
// var newOpt = document.createElement('option');
// //   newOpt.value = digits;
// //   newOpt.textContent = digits + ' cookies';
// //   newData.appendChild(newOpt);
