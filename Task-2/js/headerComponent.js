(function () {
    function headerComp(validate) {
          var ctrl = this;
          ctrl.$onInit = function() {
            var ctrl = this;
            //ctrl.user_array=crud;
            ctrl.user_nav_obj = validate;
            //ctrl.user_nav_obj.resetFactory();
            console.log("value of isvalidate in header compo",ctrl.user_nav_obj.isvalidate)
             // resetFactory();
            //console.log(ctrl.user_nav_obj);  
            //console.log(ctrl.user_obj);   
                         
          };
          ctrl.$onDestroy = function() {
          };
    }
    headerComp.$inject = ['validate'];
    angular
      .module('myApp')
      .component('headerComp', {
        templateUrl:'html/header.html',
        transclude: true,
        controller: headerComp,
        bindings:{
          
        }
      });
  })();