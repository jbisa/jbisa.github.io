/**
 * Set up AngularJS app
 */
var myApp = angular.module('wovfnApp', ['ngResource', 'ngRoute']);

/**
 * Configure the app routes
 */
myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
      // About
      .when("/", {templateUrl: "content/about.html", controller: "WovfnCtrl"})
      // Portfolio
      .when("/portfolio", {templateUrl: "content/portfolio.html", controller: "WovfnCtrl"})
      // Music Reviews
      .when("/reviews", {templateUrl: "content/reviews.html", controller: "WovfnCtrl"})
      // Contact
      .when("/contact", {templateUrl: "content/contact.html", controller: "WovfnCtrl"})
      // 404
      .otherwise("/404", {templateUrl: "content/404.html", controller: "WovfnCtrl"})
}]);


/**
 * AngularJS controller which controls logic of app
 */
myApp.controller('WovfnCtrl', ['$scope', function($scope) {
  console.log("Switching pages...");

}]);