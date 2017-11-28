function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function checkCookie() {
    var theme = getCookie("theme");
    if (theme == "theme-day") {
        $('body').addClass('theme-day');
        document.getElementById("cb1").checked = true;
    } else {
        $('body').addClass('theme-night');
        document.getElementById("cb1").checked = false;
    }
}
checkCookie()

$(function(){

  $('#cb1').on('click', function () {
    if ( $('body').hasClass('theme-day') ) {
      $('body').removeClass('theme-day');
      document.cookie = "theme=theme-night;path=/";
    } else {
      $('body').addClass('theme-day');
      document.cookie = "theme=theme-day;path=/";
    }

   });

});
