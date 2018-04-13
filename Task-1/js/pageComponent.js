    (function () {
        function myPage(crud) {
              var ctrl = this;
              ctrl.$onInit = function() {
                var ctrl = this;
                //ctrl.user_array=crud;
                ctrl.user_fac_obj = crud;
                console.log(ctrl.user_fac_obj);  
                //console.log(ctrl.user_obj);                
              };
              ctrl.$onDestroy = function() {
              };
        }
        myPage.$inject = ['crud'];
        angular
          .module('DemoApp')
          .component('myPage', {
            templateUrl:'html/page.html',
            transclude: true,
            controller: myPage,
            bindings: {
            }
          });
      })();