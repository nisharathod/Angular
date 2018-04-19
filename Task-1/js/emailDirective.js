app.directive("formatedEmail",function(){
    function remove_com(element,attribute){
        email="addff";
        email.slice(0, -4); 
    }
    return{
        restrict: 'AE',
        link:remove_com
    }
});