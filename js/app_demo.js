
app_demo();

function app_demo() {
    hide_sections ();
    change_title ();
    click_siblings ();
    disable_app ();

function hide_sections () {
    $("#color-schemes").addClass("display-none");
//  $("#header-section").addClass("display-none");
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
} //end_hide

function change_title () {
    $(".header-font-style").html("Scott Family Tributes");
}

function click_siblings () {
    let delay = 0;

    $(".tribute").each(function(index, element) {
        let sibling_id = "#" + this.closest('div.ptr').id;

        setTimeout(() => {
            element.click();
        }, 5 * 1000 + delay);

        setTimeout(() => {
            $("html, body").animate({
            scrollTop: $(sibling_id).offset().top
            }, 5 * 1000);
        }, 5 * 1000 + delay); 

//         delay = delay + (5 * 1000);
    }); //end each loop
    
} //end click

function disable_app () {
    setTimeout(() => {
        $(".tribute").off("click");

    $(".tribute").hover(function() {
        $( this ).removeClass   ( "highlight-tribute" );             
        }, function() {
        $( this ).removeClass   ( 
            "highlight-tribute" );
    });
    
        $(".tribute").removeClass("tribute");
    }, 5 * 1000);
} //end disable
            
} //end app_demo
