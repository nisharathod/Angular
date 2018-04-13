(function () {
    function newForm() {
          var ctrl = this;
          ctrl.$onInit = function() { 
            console.log(ctrl.formObj);
          };
          ctrl.$onDestroy = function() {
          };
    }
    angular
      .module('DemoApp')
      .component('newForm', {
        templateUrl:'html/form.html',
        transclude: true,
        controller: newForm,
        bindings: {
          formObj : '='
        }
      });
  })();