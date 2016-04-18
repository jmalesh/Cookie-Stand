//global functions and variables
var openHours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11a:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:' ];

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
};

//console.log(parseInt(pikePlace.aveCustomersIn));

//var elCustomers = document.getElementById('newData');
//elCustomers.textContent = pikePlace.aveCustomersIn;
//
// var totalCustomers = function getRandomIntInclusive(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };
//
// var newData = document.getElementById('newData');
// 	for (var i = pikePlace.minCustomer; i < pikePlace.maxCustomer; i++) {
//   var digits = i.toString();
//   var newOpt = document.createElement('option');
//   newOpt.value = digits;
//   newOpt.textContent = digits + ' cookies';
//   newData.appendChild(newOpt);
// }
