(function () {
    function aboutAppComp(validate,$state,$localStorage) {
          var ctrl = this;
          ctrl.$onInit = function() {
            var ctrl = this;
              ctrl.user_fac_obj=validate;
              if(localStorage.isvalidate==false){
                $state.go("signIn");
              }else{
                ctrl.user_fac_obj.isvalidate=true;
              }
              //resetFactory();
              // if(ctrl.user_fac_obj.signin_form.uname=="admin"){
              //   ctrl.user_fac_obj.is_admin=true;
              //  console.log("is admin after refresh",ctrl.user_fac_obj.is_admin);  
              //  }     
          };
          ctrl.$onDestroy = function() {
          };
    }
    aboutAppComp.$inject = ['validate','$state','$localStorage'];
    angular
      .module('myApp')
      .component('aboutAppComp', {
        templateUrl:'html/aboutApp.html',
        transclude: true,
        controller:aboutAppComp,
        bindings: {
          
        }
      });
  })();