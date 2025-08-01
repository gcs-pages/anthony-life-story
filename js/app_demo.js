
app_demo();

function app_demo() {
    /*-----------------*/
    /*- Hide Sections -*/
    /*-----------------*/
    $("#color-schemes").addClass("display-none");
//    $("#header-section").addClass("display-none");
    $("#photo-section").addClass("display-none");
    $("#sidebar-1-section").addClass("display-none");
    $("#sidebar-2-section").addClass("display-none");
    $("#gertrude-note-1").addClass("display-none");
    $("#gertrude-note-2").addClass("display-none");
    $("#scott-family-carousel").addClass("display-none");        
    $("#call-to-action").addClass("display-none");
    $("#as-you-write").addClass("display-none");        
    $("#what-should-you-include").addClass("display-none");
    $("#why-write-life-story").addClass("display-none");
    $(".toggle-all-children").off("click");

    let delay = 0;

    /*-----------------*/
    /*- Click Sibling -*/
    /*-----------------*/
    $(".tribute").each(function(index, element) {

        let sibling_id = "#" + this.closest('div.ptr').id;

        setTimeout(() => {
            this.click();
        }, 5 * 1000 + delay);

        setTimeout(() => {
            $("html, body").animate({
            scrollTop: $(sibling_id).offset().top
            }, 5 * 1000);
        }, 5 * 1000 + delay); 

        delay = delay + 5;

    }); // each loop

        setTimeout(() => {
            $(".tribute").off("click");
            $(".tribute").off("hover");
            $(".tribute").removeClass("tribute");
        }, 10 * 1000);

} // end app_demo

