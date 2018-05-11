(function () {
    function aboutAppComp(validate,$state) {
          var ctrl = this;
          ctrl.$onInit = function() {
            var ctrl = this;
              ctrl.user_fac_obj=validate;
              if(ctrl.user_fac_obj.isvalidate==false){
                $state.go("signIn");
              }
              //resetFactory();
              
          };
          ctrl.$onDestroy = function() {
          };
    }
    aboutAppComp.$inject = ['validate','$state'];
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