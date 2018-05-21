(function () {
    function headerComp(validate,$localStorage) {
          var ctrl = this;
          ctrl.$onInit = function() {
            var ctrl = this;
          
            ctrl.user_nav_obj = validate;
            //ctrl.user_nav_obj.resetFactory();
            if(localStorage.is_admin=true){
              console.log("val of admin in ls.",localStorage.is_admin);
             ctrl.user_nav_obj.is_admin=true;
            console.log("is admin after refresh in header",ctrl.user_nav_obj.is_admin);  
            }     
          };
          ctrl.$onDestroy = function() {
          };
    }
    headerComp.$inject = ['validate','$localStorage'];
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