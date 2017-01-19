$(document).ready(function () {
    var tagMaker = function (tag, x, y) {
        var i = 0;
        while (i < (x * y)) {

            $(".container").append("<" + tag + " class='pixel'></" + tag + ">");
            i++
        };

    };

    tagMaker("div", 16, 16);

    /* $(".pixel").mouseenter(function () {
         $("this").fadeTo("fast", 1);
     });*/

});