app.factory("validate", [
  "$localStorage",
  "$state",
  function($localStorage, $state) {
    var userObj = {
      isvalidate: false,
      hideform: false,
      is_admin: false,
      signIn_error: true,
      index: "",
      show_form: false,
      show_list: false,
      req_val: true,
      signin_form: {
        uname: "",
        pwd: ""
      },
      user_form: {
        uname: "",
        pwd: "",
        fname: "",
        lname: "",
        email: "",
        mob: ""
      },
      pre_form: [
        {
          uname: "admin",
          pwd: "admin",
          fname: "nisha",
          lname: "rathod",
          email: "nisha.rathod@solutelabs.com",
          mob: "9876567898"
        },
        {
          uname: "viewer",
          pwd: "viewer",
          fname: "nidhi",
          lname: "dave",
          email: "nidhi.dave@accenture.com",
          mob: "8238206206"
        }
      ],
      
      verifyData: function() {},
      clearMe: function() {},
      newUser: function() {},
      deleteMe: function() {},
      editMe: function() {},
      clearForm: function() {},
      resetFactory:function(){},
    };

    var clonedObj = {};
    userObj.verifyData = function() {
      console.log("im in");
     $localStorage.pre_form = userObj.pre_form;
      var values = $localStorage.pre_form;
      for (var i = 0; i < values.length; i++) {
        console.log("user form object uname",userObj.signin_form.uname)
        console.log("local store value at i uname",values[i].uname)
        if (
          userObj.signin_form.uname == values[i].uname &&
          userObj.signin_form.pwd == values[i].pwd
        ) {
          if (
            userObj.signin_form.uname == "admin" &&
            userObj.signin_form.pwd == "admin"
          ) {
            userObj.is_admin = true;
            $localStorage.is_admin=userObj.is_admin;
            console.log("value of is_admin", userObj.is_admin);
          
          }
          $state.go("appDetails");
          console.log("authorised user");
          userObj.isvalidate = userObj.isvalidate ? false : true;
          $localStorage.isvalidate=userObj.isvalidate;
          console.log("isvalidate in userObj",userObj.isvalidate);
          break;
        } else {
          console.log("something missing");
          userObj.signIn_error = userObj.signIn_error ? false : true;
          console.log("invalid pass", userObj.signIn_error);
        }
      }
    };
    userObj.newUser = function(){
    
        userObj.pre_form.push(userObj.user_form);
       // $localStorage.pre_form = userObj.pre_form;
        console.log(userObj.pre_form);
        window.alert("New user added successfully!");
        userObj.req_val = false;
        userObj.user_form = clonedObj.user_form;
        $state.go("viewUser");
    };
    userObj.editMe = function(currentObj, index) {
      userObj.index = index;
      userObj.user_form = currentObj;
      $state.go("addUser");
      userObj.pre_form.splice(index, 1);
    };
    userObj.clearMe = function() {
     // $localStorage.$reset();
      console.log("local storage deleted//");
      userObj.isvalidate = false;
      $localStorage.isvalidate=userObj.isvalidate;
      userObj.signin_form.uname = clonedObj.signin_form.uname;
       userObj.signin_form.pwd = clonedObj.signin_form.pwd;
      //userObj.pre_form = clonedObj.pre_form;
      userObj.is_admin=clonedObj.is_admin;
      $localStorage.is_admin=userObj.is_admin;
     // $localStorage.pre_form = clonedObj.pre_form;
      console.log("available pre_form",userObj.pre_form);
      $state.go("signIn");
    };
    userObj.deleteMe = function(index) {
      if (userObj.signin_form.uname == "admin") {
        userObj.pre_form.splice(index, 1);
      }
    };
    userObj.clearForm = function() {
      userObj.user_form = clonedObj.user_form;
      $state.go("appDetails");
      // window.alert("sure");
    };
    clonedObj = angular.copy(userObj);

    return userObj;
  }
]);
