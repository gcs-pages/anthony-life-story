    var d = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById("copyright-1").innerHTML = "<strong><mark>© Copyright " + d.getFullYear() + " <br>Family Tree Creations</mark></strong>.";

    $(document).ready(function() {
    
        $("#sticker").sticky({ topSpacing: 0, bottomSpacing: 65, center:true, className:"is-sticky" });    
    /*  $("#color-schemes").delay(4000).fadeOut(2000).fadeIn(2000);  */

        var siblingAge = getAge("09/08/1928", "06/05/2004");
        document.getElementById("gertrude-age").innerHTML= siblingAge ;
        
        var siblingAge = getAge("01/15/1946", "04/11/2025");
        document.getElementById("catherine-age").innerHTML= siblingAge ;
        
        var siblingAge = getAge("01/06/1948", "00/00/0000");
        document.getElementById("peggy-age").innerHTML= siblingAge ;
        
        var siblingAge = getAge("03/05/1950", "06/08/2013");
        document.getElementById("butchie-age").innerHTML= siblingAge ;
        
        var siblingAge = getAge("11/22/1952", "00/00/0000");
        document.getElementById("mary-age").innerHTML= siblingAge ;
        
        var siblingAge = getAge("06/15/1953", "02/08/1974");
        document.getElementById("larry-age").innerHTML= siblingAge ;
        
        var siblingAge = getAge("01/18/1958", "00/00/0000");
        document.getElementById("gregory-age").innerHTML= siblingAge ;
        
        var siblingAge = getAge("10/02/1959", "07/15/2025");
        document.getElementById("anthony-age").innerHTML= siblingAge ;
        
        var siblingAge = getAge("12/13/1960", "08/11/2022");
        document.getElementById("kathleen-age").innerHTML= siblingAge ;
        
        var siblingAge = getAge("05/27/1963", "00/00/0000");
        document.getElementById("laura-age").innerHTML= siblingAge ;
        
        var siblingAge = getAge("02/19/1969", "00/00/0000");
        document.getElementById("carolyn-age").innerHTML= siblingAge ;
        
        $("header").toggle(1000);      
        $("#gertrude-sidebar-1").toggle(2000);
        $("#gertrude-sidebar-2").toggle(2000);  
        $("#gertrude-main-content").toggle(3000);
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

        $(".tribute").hover(function() {
            $( this ).addClass   ( "highlight-tribute" );             
            }, function() {
            $( this ).removeClass   ( 
                "highlight-tribute" );
        });
 
        $(".tribute").click(function() {       
            var $bgimage       = $(this).closest("[class^=row]").find(".sibling-bg-image");
            var $maincontent   = $(this).closest("[class^=row]").find(".sibling-main-content");
            
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
 
            if ($body5.is(":hidden")) {
               $body5.show(1500);
            } else {
               $body5.hide(1500);
            }
            
            if ($body12.is(":hidden")) {
               $body12.show(1500);
            } else {
               $body12.hide(1500);
            }                    
         });
         
        $(".readmorebtn").click(function() {       
            var $readmore       = $(this).closest("[class^=row]").find("#what-should-i-include-readmore");
            
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
            var path = $(this).data("path");
            $("#color-switcher").attr("href", path);
         });

/*
          $("#gertrude-footer-2").hover(function() {
            $( "#life-story-banner" ).effect("shake");
            $( "#life-story-banner" ).addClass   ( "life-story-banner" );            
            $( "#life-story-banner" ).html       ( "<strong>Our Life Stories . . .</strong>" );
            }, function() {
            $( "#life-story-banner" ).effect("shake");
            $( "#life-story-banner" ).removeClass   ( "life-story-banner" );
            $( "#life-story-banner" ).html       ( "<strong>We Must Write . . .</strong>" );             
          });
*/

         $("#myCarousel").carousel({interval: 5000});

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
         
        $(".toggle-all-children").click();

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
        }, 10 * 1000 + delay); 

    //    delay = delay + 5;

    }); // each loop

        setTimeout(() => {
            $(".tribute").off("click");
            $(".tribute").off("hover");
            $(".tribute").removeClass("tribute");
        }, 10 * 1000);

} // end app_demo


        
/*      $("#sticker").unstick();    */

        function getAge(DOB, DOD) {
            var today       = new Date();
            var birthDate   = new Date(DOB);
            var deathDate   = new Date(DOD);
            
            if  (deathDate.getFullYear () > 0) {
                var age = deathDate.getFullYear() - birthDate.getFullYear();
                var m = deathDate.getMonth() - birthDate.getMonth();
                var comment = "&nbsp;&nbsp;&nbsp;&nbsp;(time-of-death)";
            }
            else {
                var age = today.getFullYear() - birthDate.getFullYear();
                var m = today.getMonth() - birthDate.getMonth();
                var comment = "";
            }
            
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age = age - 1;
            }
            return "<strong><mark>" + age + "</mark></strong>"  + comment ;
        }
        
    });
