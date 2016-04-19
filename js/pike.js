//global functions and variables
var openHours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:' ];

var msg;

// var pikePlace = {
//   locationName: 'Pike\'s Place',
//   minCustomer: 17,
//   maxCustomer: 88,
//   avePerCust: 5.2,
//   aveCustomersIn: function () {
//     return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
//   },
//   aveCookiesPerHour: function () {
//     return Math.floor((this.aveCustomersIn()) * this.avePerCust);
//   },
//   customerArray: [],
//   cookieArray: [],
// };
//
// var newData = document.getElementById('newData');
// for (var i = 0; i < openHours.length; i++) {
//   var openTimes = document.createElement('li');
//   pikePlace.cookieArray.push(pikePlace.aveCookiesPerHour());
//   openTimes.textContent = (openHours[i] + ' ' + pikePlace.cookieArray[i] + ' cookies');
//   newData.appendChild(openTimes);
// }

// var seaTac = {
//   locationName: 'SeaTac Airport',
//   minCustomer: 6,
//   maxCustomer: 24,
//   avePerCust: 1.2,
//   aveCustomersIn: function () {
//     return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
//   },
//   aveCookiesPerHour: function () {
//     return Math.floor((this.aveCustomersIn()) * this.avePerCust);
//   },
//   customerArray: [],
//   cookieArray: [],
// };
//
// var seaTacData = document.getElementById('seaTacData');
// for (var i = 0; i < openHours.length; i++) {
//   var seaAir = document.createElement('li');
//   seaTac.cookieArray.push(seaTac.aveCookiesPerHour());
//   seaAir.textContent = (openHours[i] + ' ' + seaTac.cookieArray[i] + ' cookies');
//   seaTacData.appendChild(seaAir);
// };

// var southCenter = {
//   locationName: 'Southcenter Mall',
//   minCustomer: 11,
//   maxCustomer: 38,
//   avePerCust: 1.9,
//   aveCustomersIn: function () {
//     return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
//   },
//   aveCookiesPerHour: function () {
//     return Math.floor((this.aveCustomersIn()) * this.avePerCust);
//   },
//   customerArray: [],
//   cookieArray: [],
// };
//
// var southCenterData = document.getElementById('southCenterData');
// for (var i = 0; i < openHours.length; i++) {
//   var centerSouth = document.createElement('li');
//   southCenter.cookieArray.push(southCenter.aveCookiesPerHour());
//   centerSouth.textContent = (openHours[i] + ' ' + southCenter.cookieArray[i] + ' cookies');
//   southCenterData.appendChild(centerSouth);
// }

// var bellSquare = {
//   locationName: 'Bellevue Square Mall',
//   minCustomer: 20,
//   maxCustomer: 48,
//   avePerCust: 3.3,
//   aveCustomersIn: function () {
//     return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
//   },
//   aveCookiesPerHour: function () {
//     return Math.floor((this.aveCustomersIn()) * this.avePerCust);
//   },
//   customerArray: [],
//   cookieArray: [],
// };
//
// var bellSquareData = document.getElementById('bellSquareData');
// for (var i = 0; i < openHours.length; i++) {
//   var squareBell = document.createElement('li');
//   bellSquare.cookieArray.push(bellSquare.aveCookiesPerHour());
//   squareBell.textContent = (openHours[i] + ' ' + bellSquare.cookieArray[i] + ' cookies');
//   bellSquareData.appendChild(squareBell);
// };

var alkiBeach = {
  locationName: 'Alki Beach',
  minCustomer: 3,
  maxCustomer: 24,
  avePerCust: 2.6,
  aveCustomersIn: function () {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
  },
  aveCookiesPerHour: function () {
    return Math.floor((this.aveCustomersIn()) * this.avePerCust);
  },
  customerArray: [],
  cookieArray: [],
};

var alkiBeachData = document.getElementById('alkiBeachData');
for (var i = 0; i < openHours.length; i++) {
  var beachAlki = document.createElement('li');
  alkiBeach.cookieArray.push(alkiBeach.aveCookiesPerHour());
  beachAlki.textContent = (openHours[i] + ' ' + alkiBeach.cookieArray[i] + ' cookies');
  alkiBeachData.appendChild(beachAlki);
};
