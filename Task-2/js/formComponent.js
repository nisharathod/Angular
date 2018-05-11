(function () {
    function formComponent(validate,$state) {
          var ctrl = this;
          ctrl.$onInit = function() {
            var ctrl = this;
              ctrl.user_fac_obj=validate;
              if(ctrl.user_fac_obj.isvalidate==false){
                $state.go("signIn");
              }
              if(ctrl.user_fac_obj.is_admin==false){
                $state.go("appDetails");
              }
             // resetFactory();
              
          };
          ctrl.$onDestroy = function() {
          };
    }
    formComponent.$inject = ['validate','$state'];
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