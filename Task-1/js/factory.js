app.factory("crud",function(){
    var user_obj ={
        user_array : [],
        IsVisible : false,
        user_form : {
            fname :'',
            lname:'',
            email :'',
            pwd:'',
            DOB:'',
            mob:'',
            gender:'',
        },
        addData:function(){},
        clearForm:function(){},
        showHide:function(){}
    };

    var cloned_obj = {};
    user_obj.addData = function(){
     console.log(user_obj.user_array);
     user_obj.user_array.push(user_obj.user_form);
     console.log(user_obj.user_array);
    
    };
    user_obj.showHide=function(){
        user_obj.IsVisible = user_obj.IsVisible ? false : true;
        console.log(IsVisible);
    }

     user_obj.clearForm = function(){
         user_obj.user_form = cloned_obj.user_form;
     };

     cloned_obj = angular.copy(user_obj);
        return user_obj;
});
