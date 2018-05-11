(function () {
    function signIn(validate) {
          var ctrl = this;
          ctrl.$onInit = function() {
            var ctrl = this;
            
            ctrl.user_fac_obj = validate;
            console.log( ctrl.user_fac_obj);
            
          };
          ctrl.$onDestroy = function() {
            //resetFactory();
          };
    }
    signIn.$inject = ['validate'];
    angular
      .module('myApp')
      .component('signIn', {
        templateUrl:'html/signIn.html',
        transclude: true,
        controller: signIn,
        bindings: {
        }
      });
  })();