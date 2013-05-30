$(document).ready(function(){
                $(".p2").hide();
                $(".p3").hide();
                $(".p4").hide();

                $(".wincaja").click(function(){
                    $(".p2").fadeOut(1000);
                    $(".p2").hide();
                     $(".p3").fadeOut(1000);
                    $(".p3").hide();
                     $(".p4").fadeOut(1000);
                    $(".p4").hide();


                    $(".p").fadeIn(2000);
                });
                $(".winmenu").click(function(){
                    $(".p").fadeOut(1000);
                    $(".p").hide();
                     $(".p3").fadeOut(1000);
                    $(".p3").hide();
                     $(".p4").fadeOut(1000);
                    $(".p4").hide()

                    $(".p2").fadeIn(2000);
   
                });

                $(".winconta").click(function(){
                    $(".p").fadeOut(1000);
                    $(".p").hide();
                     $(".p2").fadeOut(1000);
                    $(".p2").hide();
                     $(".p4").fadeOut(1000);
                    $(".p4").hide()

                    $(".p3").fadeIn(2000);
   
                });

                $(".winconsolida").click(function(){
                    $(".p").fadeOut(1000);
                    $(".p").hide();
                     $(".p2").fadeOut(1000);
                    $(".p2").hide();
                     $(".p3").fadeOut(1000);
                    $(".p3").hide()

                    $(".p4").fadeIn(2000);
   
                });
            });