window.setTimeout(function()
{
    $('#profile_photo').attr('src','img/arjun.png');
    $('#div_bottom').css('marginTop',-70);


    var interval=window.setInterval(function () {

        var margin=parseInt($('#div_bottom').css("marginTop"));
        margin=Number(margin)+35;
        $('#div_bottom').css('marginTop',margin);

        if(margin==0)
        {
            clearInterval(interval);
        }
    },1000);
},1000);