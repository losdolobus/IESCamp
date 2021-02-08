$(function () {


    function update() {
        $("h3").text("Viewport Size....." + $(window).width() + " x " + $(window).height() );
    }

    update();

    /* Window event. Resize browser window */
    $(window).resize(function () { update(); });


});




