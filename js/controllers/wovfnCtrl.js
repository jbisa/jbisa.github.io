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
      //.when("/reviews", {templateUrl: "content/reviews.html", controller: "WovfnCtrl"})
      
      // Resume
      .when("/resume", {templateUrl: "content/resume.html", controller: "WovfnCtrl"})
      
      // Contact
      //.when("/contact", {templateUrl: "content/contact.html", controller: "WovfnCtrl"})
      
      // 404
      .otherwise("/404", {templateUrl: "content/404.html", controller: "WovfnCtrl"})
}]);


/**
 * AngularJS controller which controls logic of app
 */
myApp.controller('WovfnCtrl', ['$scope', '$location', function($scope, $location) {
  console.log("Switching pages...");
  console.log("location.path(): " + $location.path());
  
  $scope.navLocations = [{ id: "about", name: "About", link: "#/", path: "/"},
			 { id: "portfolio", name: "Portfolio", link: "#/portfolio", path: "/portfolio"},
			 { id: "resume", name: "Resume", link: "#/resume", path: "/resume"}];//,
  //{ id: "contact", name: "Contact", link: "#/contact", path: "/contact"}];

  $scope.activeLocation = $location.path();
  
  $scope.init = function() {
      if ($location.path() === "") {
	  // Start off on the About page
	  $scope.activeLocation = "/";
      } else {
	  // In case the user refreshes the page, set active tab to current location
	  $scope.activeLocation = $location.path();
      }
  }
  
  $scope.setSelected = function(selectedLocation) {
      //console.log("selectedLocation: " + selectedLocation);
      //$scope.activeLocation = selectedLocation;
      $("li").removeClass("active");
      if (selectedLocation === "about") {
	  $scope.activeLocation = "/";
      } else {
	  $scope.activeLocation = "/"+selectedLocation;
      }
      $("#"+selectedLocation).addClass("active");
 
  }

  $scope.setSelectedFromLink = function(selectedLocation) {
      $("li").removeClass('active');
      $scope.activeLocation = "/"+selectedLocation;
      $('#'+selectedLocation).addClass('active');
  }

}]);