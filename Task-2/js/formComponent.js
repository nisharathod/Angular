(function () {
    function formComponent(validate,$state,$localStorage,$route) {
          var ctrl = this;
          ctrl.$onInit = function() {
            var ctrl = this;
              ctrl.user_fac_obj=validate;
              if(localStorage.isvalidate==false){
                $state.go("signIn");
              }else{
                ctrl.user_fac_obj.isvalidate=true;
              }
              // if(ctrl.user_fac_obj.is_admin==false){
              //   $state.go("appDetails");
              // }
              // if(ctrl.user_fac_obj.signin_form.uname=="admin"){
              //   ctrl.user_fac_obj.is_admin=true;
              //  console.log("is admin after refresh",ctrl.user_fac_obj.is_admin);  
              //  }     
             // resetFactory();
              
          };
          ctrl.$onDestroy = function() {
          };
          
    }
    formComponent.$inject = ['validate','$state','$localStorage'];
    angular
      .module('myApp')
      .component('formComponent', {
        templateUrl:'html/form.html',
        transclude: true,
        controller:formComponent,
        bindings:{
        }
      });
  })();