$(document).ready(function(){
                $(".p2").hide();
                $(".p3").hide();
                $(".p4").hide();

                $(".wincaja").click(function(){
                
                    $(".p2").hide();
                  
                    $(".p3").hide();
              
                    $(".p4").hide();


                    $(".p").fadeIn(1100);
                });
                $(".winmenu").click(function(){
         
                    $(".p").hide();
                
                    $(".p3").hide();
                 
                    $(".p4").hide()

                    $(".p2").fadeIn(1100);
   
                });

                $(".winconta").click(function(){
           
                    $(".p").hide();
          
                    $(".p2").hide();
               
                    $(".p4").hide()

                    $(".p3").fadeIn(1100);
   
                });

                $(".winconsolida").click(function(){
                 
                    $(".p").hide();
               
                    $(".p2").hide();
              
                    $(".p3").hide()

                    $(".p4").fadeIn(1100);
   
                });
            });