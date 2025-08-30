
app_demo();

async function app_demo() {
    let delay = 0;
    let first_tributee = "";
    set_screen_title();
    show_tributees_only();
    show_desired_panels();
    const promise = await click_tributees();
    position_screen(first_tributee, delay);

function show_tributees_only () {
    $(".no-tribute").off("click");
    $(".no-tribute").removeClass("hover-tribute-color");
    $(".no-tribute").addClass("no-hover-tribute-color");
    $(".no-tribute").removeClass("tribute");
}
function set_screen_title () {
    $("header").removeClass("header-bg-color");
    $("header").addClass("tribute-bg-color");
    $(".header-font-style").html("Scott Family Tributes . . .");
}
function show_desired_panels () {
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

async function click_tributees () {

    const elements = document.getElementsByClassName('tribute');

    for (let i = 0; i < elements.length; i++) {
        let sibling_id = "#" + elements[i].closest('div.ptr').id;

        if (i==0) {first_tributee = sibling_id;}

        const promise = await click_tributee (elements[i], sibling_id, delay);
        delay += 3000;  //set delay (advance to next tribute) . . .
    }//end for loop

    return "1";
} //end click participants

async function click_tributee (element, sibling, delay) {
    setTimeout( () => {
        $(element).click();
        $(element).off("click");
        $(element).removeClass("hover-tribute-color");
        $(element).addClass("no-hover-tribute-color");
        $(element).removeClass("tribute");
    }, 5 * 1000 + delay);

    setTimeout( () => { 
        $("html, body").animate({
        scrollTop: $(sibling).offset().top
        }, 1 * 1000);  //set delay (transition duration)
}, 5 * 1000 + delay);  //set delay (next tribute) . . .

return "2";
}
async function position_screen (first_tributee, delay) {
    
    setTimeout( () => {
        $("html, body").animate({
        scrollTop: $("html").offset().top
        }, 5 * 1000);  // set delay (return to top duration)
}, 5 * 1000 + delay);  // set delay (return to top)
}

} //end app_demo
