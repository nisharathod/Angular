var app = angular.module("myApp", ["ngStorage", "ui.router"]);
app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/signIn");
  $stateProvider
    .state("signIn", {
      url: "/signIn",
      component: "signIn",
      
    })
    .state("addUser", {
      url: "/addUser",
      component: "formComponent",
    
    })
    .state("viewUser", {
      url: "/viewUser",
      component: "listComponent"

    })
    .state("appDetails", {
      url: "/appDetails",
      component: "aboutAppComp"
    });
});

