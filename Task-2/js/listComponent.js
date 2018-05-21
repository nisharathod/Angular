(function () {
    function listComponent(validate,$state,$localStorage) {
          var ctrl = this;
          ctrl.$onInit = function() {
            var ctrl = this;
            ctrl.user_fac_obj=validate;
            if(localStorage.isvalidate==false){
              $state.go("signIn");
          }else{
            ctrl.user_fac_obj.isvalidate=true;
            console.log("value in else block",ctrl.user_fac_obj.isvalidate);
          }
          // if(ctrl.user_fac_obj.signin_form.uname=="admin"){
          //   ctrl.user_fac_obj.is_admin=true;
          //  console.log("is admin after refresh",ctrl.user_fac_obj.is_admin);  
          //  }     
          // if(ctrl.user_fac_obj.is_admin==false){
          //   $state.go("appDetails");
          // }

           //resetFactory();
          
          ctrl.$onDestroy = function() {
          };
    }
  }
    listComponent.$inject = ['validate',"$state","$localStorage"];
    angular
      .module('myApp')
      .component('listComponent', {
        templateUrl:'html/list.html',
        transclude: true,
        controller:listComponent,
        bindings: {
        }
      });
  })();