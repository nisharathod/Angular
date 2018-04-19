app.factory("crud",function(){
    var user_obj ={
        user_array : [],
        show_form :false,
        show_list:true,
        submit_btn:true,
        update_btn:false,
        index:'',
        user_form : {
            fname :'',
            lname:'',
            email :'',
            pwd:'',
            DOB:'',
            mob:'',
            radio:'',
        },
        addData:function(){},
        clearForm:function(){},
        showHide:function(){},
        showHideList:function(){},
        deleteMe:function(){},
        update:function(){}
    };

    var cloned_obj = {};
    user_obj.addData = function(){
     console.log(user_obj.user_array);
     user_obj.user_array.push(user_obj.user_form);
     console.log(user_obj.user_array);
     user_obj.show_list = user_obj.show_list ? false : true;
     console.log("show-list:",user_obj.show_list);
     user_obj.show_form = user_obj.show_form ? false : true;
     user_obj.user_form = angular.copy(cloned_obj.user_form);
        
    
    };
    user_obj.showHide=function(){
        user_obj.show_form = user_obj.show_form ? false : true;
        console.log(user_obj.show_form);
        user_obj.show_list = user_obj.show_list ? false : true;
        console.log("show-list:",user_obj.show_list);

       // cloned_obj = angular.copy(user_obj);
    }

     user_obj.clearForm = function(){
         user_obj.user_form = cloned_obj.user_form;
     };

     user_obj.editMe=function(current_obj,index){
         user_obj.index=index;
        user_obj.show_form = user_obj.show_form ? false : true;
        user_obj.show_list = user_obj.show_list ? false : true;
        user_obj.user_form = current_obj;
        user_obj.submit_btn= user_obj.submit_btn ? false : true;
        user_obj.update_btn=user_obj.update_btn ? false : true;

     }
     user_obj.update=function(){
        user_obj.user_array[user_obj.index]=user_obj.user_form;
        
        user_obj.show_form = user_obj.show_form ? false : true;
        user_obj.show_list = user_obj.show_list ? false : true;
     }

     user_obj.deleteMe = function(index){
         user_obj.user_array.splice(index,1);
     }

     cloned_obj = angular.copy(user_obj);
        return user_obj;
});
