app.filter('removeCom',function(){
    return function(mail){
        var newMail=mail.slice(0, -4);
        return newMail;
    }
    
});