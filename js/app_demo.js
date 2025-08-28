
app_demo();

async function app_demo() {
    let delay = 0;
    let first_sibling = "";

    set_title();
    hide_sections();
    const promise = await click_participants();
    position_screen(first_sibling, delay);

function set_title () {
    $("header").removeClass("header-bg-color");
    $("header").addClass("tribute-bg-color");
    $(".header-font-style").html("Scott Family Tributes");
}
function hide_sections () {
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

async function click_participants () {


    const elements = document.getElementsByClassName('tribute');

    for (let i = 0; i < elements.length; i++) {
        let sibling_id = "#" + elements[i].closest('div.ptr').id;

        if (i==0) {first_sibling = sibling_id;}

        const promise = await click_sibling (elements[i], sibling_id, delay);
        delay += 5000;
    }//end for loop

    return "1";
} //end click participants

async function click_sibling (element, sibling, delay) {
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
        }, 1 * 1000);
}, 5 * 1000 + delay);

return "2";
}
async function position_screen (first_sibling, delay) {
    
    setTimeout( () => {
        $("html, body").animate({
        scrollTop: $("html").offset().top
        }, 5 * 1000);
}, 5 * 1000 + delay);
}

} //end app_demo
