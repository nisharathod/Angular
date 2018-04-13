(function () {
    function myList() {
          var ctrl = this;
          ctrl.$onInit = function() { 
            console.log(ctrl.listObj);
          };
          ctrl.$onDestroy = function() {
          };
    }
    angular
      .module('DemoApp')
      .component('myList', {
        templateUrl:'html/list.html',
        transclude: true,
        controller: myList,
        bindings: {
          listObj : '='
        }
      });
  })();