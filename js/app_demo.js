
/*--------------------*/
/*- Application Demo -*/
/*--------------------*/
let demo  = "yes";

switch ( demo ) {
    case "yes":
        delay = 0;
        app_demo();
        break;
    case "no":
        delay = 0;
        position_app_screen();
        break;
    default:
        $("body").addClass("error-message");
        $("body").html("<div><p id='err-msg'><span >*** Unknown Runtime Parameter ***</span></p></div>");
        break;
}

async function app_demo() {
    change_title();
    hide_panels();
    remove_non_tributees();   
    const promise = await click_tributees();
    position_demo_screen(first_tributee, delay);

function change_title () {
    $("header").removeClass("header-bg-color");
    $("header").addClass("tribute-bg-color");
    $(".header-font-style").html("Scott Family Tributes . . .");
} //end change title

function hide_panels () {
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
} //end hide panels

function remove_non_tributees () {
    $(".no-tribute").off("click");
    $(".no-tribute").removeClass("hover-tribute-color");
    $(".no-tribute").addClass("no-hover-tribute-color");
    $(".no-tribute").removeClass("tribute");
} // end remove non tributees

async function click_tributees () {
    const elements = document.getElementsByClassName('tribute');

    for (let i = 0; i < elements.length; i++) {
        let sibling_id = "#" + elements[i].closest('div.ptr').id;

        if (i==0) {first_tributee = sibling_id;}

        const promise = await click_scroll_tributee (elements[i], sibling_id, delay);
        delay += 3000;  //set delay (advance to next tribute) . . .
    }//end for loop

    return "1";
} //end click tributees

async function click_scroll_tributee (element, sibling, delay) {
    
    setTimeout( () => {
        $(element).click();
        $(element).off("click");
        $(element).removeClass("hover-tribute-color");
        $(element).addClass("no-hover-tribute-color");
        $(element).removeClass("tribute");
    }, 4 * 1000 + delay); //set click (delay) . . .
 
    setTimeout( () => { 
        $("html, body").animate({
        scrollTop: $(sibling).offset().top
        }, 2.0 * 1000);  //set delay (transition duration) . . .
    }, 5 * 1000 + delay);  //set delay (transition delay) . . .

return "2";
} //end click tributee

} //end app_demo

async function position_demo_screen (first_tributee, delay) {
    setTimeout( () => {
        $("html, body").animate({
        scrollTop: $("html").offset().top
        }, 5 * 1000);  // set delay (return to top duration)
}, 5 * 1000 + delay);  // set delay (return to top)
} //end position demo screen

async function position_app_screen () {
    setTimeout( () => {
        $("html, body").animate({
        scrollTop: $("html").offset().top
        }, .5 * 1000);  // set delay (return to top duration)
}, 0 * 1000 + delay);  // set delay (return to top)
} //end position app screen

/*--------------------*/
/*- Application Demo -*/
/*--------------------*/
