$(document).ready(function () {
    var grid = 50;
    var tagMaker = function (tag, x) {
        var i = 0;
        while (i < (x * x)) {

            $(".container").append("<" + tag + " class='pixel'></" + tag + ">");
            i++;
        }

        $(".pixel").css({
            "height": 500 / grid + "px",
            "width": 500 / grid + "px"
        });
    };

    var brush = function (tag) {
        $(tag).mouseenter(function () {
            $(this).css("background-color", "slateblue");
        });
    };

    tagMaker("div", grid);
    brush(".pixel");

    var reset = function () {
        $("input").click(function () {
            $(".pixel").remove();
            grid = window.prompt("How many pixels in the new grid?", "50");
            tagMaker("div", grid);
            brush(".pixel");
        });
    };
    reset();
});