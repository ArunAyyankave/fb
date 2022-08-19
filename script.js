$(document).ready(function(){
    $("#signUp").validate({
        emailAd:{
            required:true,
            email:true
        },
        psWord:{
            required:true,
            password:true
        },
        messages:{
            psWord:"Enter password"
        }
    })
})