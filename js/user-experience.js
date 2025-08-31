    "use strict";

    let d = new Date();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById("copyright-1").innerHTML = "<strong><mark>© Copyright " + d.getFullYear() + " <br>Family Tree Creations</mark></strong>.";
    let siblingAge = "";

    $(document).ready(function() {  
        $("#sticker").sticky({ topSpacing: 0, bottomSpacing: 65, center:true, className:"is-sticky" });

        siblingAge = getAge("09/08/1928", "06/05/2004");
        document.getElementById("gertrude-age").innerHTML= siblingAge ;
        
        siblingAge = getAge("01/15/1946", "04/11/2025");
        document.getElementById("catherine-age").innerHTML= siblingAge ;
        
        siblingAge = getAge("01/06/1948", "00/00/0000");
        document.getElementById("peggy-age").innerHTML= siblingAge ;
        
        siblingAge = getAge("03/05/1950", "06/08/2013");
        document.getElementById("butchie-age").innerHTML= siblingAge ;
        
        siblingAge = getAge("11/22/1952", "00/00/0000");
        document.getElementById("mary-age").innerHTML= siblingAge ;
        
        siblingAge = getAge("06/15/1953", "02/08/1974");
        document.getElementById("larry-age").innerHTML= siblingAge ;
        
        siblingAge = getAge("01/18/1958", "00/00/0000");
        document.getElementById("gregory-age").innerHTML= siblingAge ;
        
        siblingAge = getAge("10/02/1959", "07/15/2025");
        document.getElementById("anthony-age").innerHTML= siblingAge ;
        
        siblingAge = getAge("12/13/1960", "08/11/2022");
        document.getElementById("kathleen-age").innerHTML= siblingAge ;
        
        siblingAge = getAge("05/27/1963", "00/00/0000");
        document.getElementById("laura-age").innerHTML= siblingAge ;
        
        siblingAge = getAge("02/19/1969", "00/00/0000");
        document.getElementById("carolyn-age").innerHTML= siblingAge ;
        
        $("header").toggle(1000);      
        $("#gertrude-sidebar-1").toggle(2000);
        $("#gertrude-sidebar-2").toggle(2000);  
        $("#gertrude-main-content").toggle(3000);
        $("#gertrude-footer-1").toggle(3000);        
        $("#gertrude-footer-2").toggle(3000);
        $("#what-should-i-include").toggle(3500);
        $("#what-should-i-include-main-content").toggle(3500);
  
        $("#catherine").toggle(4000);
        $("#catherine-main-content").toggle(4500);
        
        $("#peggy").toggle (4000);
        $("#peggy-main-content").toggle(4500);              
        $("#butchie").toggle (4000);
        $("#butchie-main-content").toggle(4500);        
        $("#mary").toggle (4000);
        $("#mary-main-content").toggle(4500);        

        $("#larry").toggle (4000);
        $("#larry-main-content").toggle(4500);
        $("#gregory").toggle (4000);
        $("#gregory-main-content").toggle(4500);            
        $("#anthony").toggle(4000);
        $("#anthony-main-content").toggle(4500);                
        $("#kathleen").toggle(4000);
        $("#kathleen-main-content").toggle(4500);        
        
        $("#laura").toggle(4000);       
        $("#laura-main-content").toggle(4500);  
        $("#carolyn").toggle(4000);
        $("#carolyn-main-content").toggle(4500); 
        $("footer").toggle(4000);
        $("#copyright-1").toggle(4000);
        $("#copyright-2").toggle(4500);
        $("#email-contact-us").toggle(4500);

//--------------------//
//- Set Browser Keys -//
//--------------------//
    $(document).on("contextmenu", ()=> {return false;});

    document.body.addEventListener('keydown', event => {
        if (event.ctrlKey && 'cfnjvxspwuatyz'.indexOf(event.key) !== -1) {
          event.preventDefault()
        }

        if (event.ctrlKey && event.shiftKey && 'CIJKPNV'.indexOf(event.key) !== -1) {
            event.preventDefault()
        }

        if (event.altlKey && 'EF'.indexOf(event.key) !== -1) {
            event.preventDefault()
        }

        if (event.shiftKey && event.code == "F10") {
            event.preventDefault()
        }

        if (event.code == "F12") {
            event.preventDefault()
        }
    })
                    
        $("footer").hover(function() {
            $("#copyright-1").effect("shake");
            }, function() {
            $("#email-contact-us").effect("shake");
        });

        $("td").hover(function() {
            $( this ).children("span").addClass   ( "text-on-background-1" );             
            }, function() {
            $( this ).children("span").removeClass   ( "text-on-background-1" );
        });

        $(".no-tribute").addClass("tribute"); //if no demo all in . . .

        $(".tribute").hover(function() {
            $( this ).addClass   ( "hover-tribute-color" );             
            }, function() {
            $( this ).removeClass   ( 
                "hover-tribute-color" );
        });
 
        $(".tribute").click(function() {       
            let $bgimage       = $(this).closest("[class^=row]").find(".sibling-bg-image");
            let $maincontent   = $(this).closest("[class^=row]").find(".sibling-main-content");
            
            if ($bgimage.is(":hidden")) {
               $bgimage.show(1500);
            } else {
               $bgimage.hide(1500);
            }
            if ($maincontent.is(":hidden")) {
               $maincontent.show(1500);
            } else {
               $maincontent.hide(1500);
            }
         });
         
        $(".readmorebtn").click(function() {       
            let $readmore       = $(this).closest("[class^=row]").find("#what-should-i-include-readmore");
            
            if ($readmore.is(":hidden")) {
               $readmore.show(1500);
               $( "#readmorebtn" ).html       ( "Hide List" );     
            } else {
               $readmore.hide(1500);
               $( "#readmorebtn" ).html       ( "Show List" );     
            }            
         });

        $("#readmorebtn").effect("shake");
            setInterval(() => {
                $("#readmorebtn").effect("shake");
            }, 5000);
                
          $("#color-schemes ul li").on("click", function(){
            let path = $(this).data("path");
            $("#color-switcher").attr("href", path);
         });

         $("#myCarousel").carousel({interval: 5000});

        $(".descendant-wife-photo").hover(function() {
            $( this ).children("figure").addClass      ( "enlarge-descendant-wife-photo" );             
            }, function() {
            $( this ).children("figure").removeClass   ( "enlarge-descendant-wife-photo" );
        });
        
        $(".descendant-photo").hover(function() {
            $( this ).children("figure").addClass      ( "enlarge-descendant-photo" );             
            }, function() {
            $( this ).children("figure").removeClass   ( "enlarge-descendant-photo" );
        });
        
        $(".toggle-all-children").click(function() {       
            $("#catherine-bg-image").toggle();
            $("#catherine-main-content").toggle();
            
            $("#peggy-bg-image").toggle();
            $("#peggy-main-content").toggle();
            
            $("#butchie-bg-image").toggle();
            $("#butchie-main-content").toggle();       

            $("#mary-bg-image").toggle();
            $("#mary-main-content").toggle();   

            $("#larry-bg-image").toggle();
            $("#larry-main-content").toggle();       

            $("#gregory-bg-image").toggle();
            $("#gregory-main-content").toggle();
           
            $("#anthony-bg-image").toggle();
            $("#anthony-main-content").toggle();
            
            $("#kathleen-bg-image").toggle();
            $("#kathleen-main-content").toggle();
            
            $("#laura-bg-image").toggle();
            $("#laura-main-content").toggle();
           
            $("#carolyn-bg-image").toggle();
            $("#carolyn-main-content").toggle();           
        });

        $("#color-schemes").addClass("display-none");         
        $(".toggle-all-children").click();

/* $("#sticker").unstick(); */

app_demo();

async function app_demo() {
    let delay = 0;
    let first_tributee = "";

    change_title();
    hide_panels();
    remove_non_tributees();
    
    const promise = await click_tributees();

    position_screen(first_tributee, delay);

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

        const promise = await click_tributee (elements[i], sibling_id, delay);
        delay += 3000;  //set delay (advance to next tribute) . . .
    }//end for loop

    return "1";
} //end click tributees

async function click_tributee (element, sibling, delay) {
    setTimeout( () => {
        $(element).click();
        $(element).off("click");
        $(element).removeClass("hover-tribute-color");
        $(element).addClass("no-hover-tribute-color");
        $(element).removeClass("tribute");
    }, 5 * 1000 + delay); //set click (delay) . . .

    setTimeout( () => { 
        $("html, body").animate({
        scrollTop: $(sibling).offset().top
        }, 1 * 1000);  //set delay (transition duration) . . .
}, 5 * 1000 + delay);  //set delay (transition delay) . . .

return "2";
} //end click tributee

async function position_screen (first_tributee, delay) {
    setTimeout( () => {
        $("html, body").animate({
        scrollTop: $("html").offset().top
        }, 5 * 1000);  // set delay (return to top duration)
}, 5 * 1000 + delay);  // set delay (return to top)
} //end position screen

} //end app_demo

function getAge(DOB, DOD) {
    let today       = new Date();
    let birthDate   = new Date(DOB);
    let deathDate   = new Date(DOD);
    let age = "";
    let m   = "";
    let comment = "";
    
    if  (deathDate.getFullYear () > 0) {
        age = deathDate.getFullYear() - birthDate.getFullYear();
        m = deathDate.getMonth() - birthDate.getMonth();
        comment = "&nbsp;&nbsp;&nbsp;&nbsp;(time-of-death)";
    }
    else {
        age = today.getFullYear() - birthDate.getFullYear();
        m = today.getMonth() - birthDate.getMonth();
        comment = "";
    }
    
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }
    return "<strong><mark>" + age + "</mark></strong>"  + comment ;
} //end getAge

}); //end (document).ready
