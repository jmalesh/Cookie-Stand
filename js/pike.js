//global functions and variables
var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' ];

var allStores = [];

var appendRows = document.getElementById('append-rows');

function Store(location,min,max,avgPerSale){
  this.storeLocation = location;
  this.min = min;
  this.max = max;
  this.avgPerSale = avgPerSale;
  this.dailyTotal = 0;
  this.avgCustomer = avgCustomer(this.min,this.max);
  this.hourlyCustomers = [];
  this.hourlyCookies = [];
  for (var i = 0; i < openHours.length; i++) {
    this.hourlyCustomers.push(avgCustomer(min,max));
  };
  for (var i = 0; i < openHours.length; i++){
    this.hourlyCookies.push(totalCookiesPerHour(this.hourlyCustomers[i], this.avgPerSale));
    this.dailyTotal += this.hourlyCookies[i];
  };
};

function avgCustomer(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function totalCookiesPerHour(hourlyCustomers, avgPerSale) {
  return Math.floor(hourlyCustomers * avgPerSale);
};

function time(){
  var tr = document.createElement('tr');
  var empty = document.createElement('td');
  tr.appendChild(empty);
  for (var i = 0; i < openHours.length; i++){
    var th = document.createElement('th');
    th.textContent = openHours[i];
    tr.appendChild(th);
  }
  var totalCookie = document.createElement('th');
  totalCookie.textContent = 'Total';
  tr.appendChild(totalCookie);
  appendRows.appendChild(tr);
}

function data(store) {
  var tr = document.createElement('tr');
  var nameCell = document.createElement('td');
  nameCell.textContent = store.storeLocation;
  tr.appendChild(nameCell);
  for (var i = 0; i < store.hourlyCookies.length; i++){
    var td = document.createElement('td');
    td.textContent = store.hourlyCookies[i];
    tr.appendChild(td);
  };
  var total = document.createElement('td');
  total.textContent = store.dailyTotal;
  tr.appendChild(total);
  appendRows.appendChild(tr);
};

allStores.push(new Store('Pike Place',17,88,5.2));
allStores.push(new Store('SeaTac Airport',6,24,1.2));
allStores.push(new Store('Southcenter',11,38,1.9));
allStores.push(new Store('Bellevue',20,48,3.3));
allStores.push(new Store('Alki',3,24,2.6));

time();
for (i = 0; i < allStores.length; i++) {
  data(allStores[i]);
};








//
//
//
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
//
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
//
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
//
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
//
// var alkiBeach = {
//   locationName: 'Alki Beach',
//   minCustomer: 3,
//   maxCustomer: 24,
//   avePerCust: 2.6,
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
// var alkiBeachData = document.getElementById('alkiBeachData');
// for (var i = 0; i < openHours.length; i++) {
//   var beachAlki = document.createElement('li');
//   alkiBeach.cookieArray.push(alkiBeach.aveCookiesPerHour());
//   beachAlki.textContent = (openHours[i] + ' ' + alkiBeach.cookieArray[i] + ' cookies');
//   alkiBeachData.appendChild(beachAlki);
// };
//
// // function calcTotalAlki () {
// //   for (var i = 0; i < alkiBeach.cookieArray; i++) {
// //     var totalCookie = [];
// //      // 'this' is a keyword that can be used within an object...
// //      // ...to refer to the object itself
// //     totalCookie.push(;
// //     // Math.floor(this.calcRandomGulls(this.minGullsPerHour, this.maxGullsPerHour) * this.avgFriesPerGull);
// //     // this.hourlyTotals.push(singleHour);
// //   };
// // };
