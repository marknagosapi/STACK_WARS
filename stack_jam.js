$(document).ready(function(){


    setTimeout(fade_out, 6500);
    
    $("#header").css("background-image");
    function fade_out() {
        $("#fade_text").fadeOut().empty();
        
        //Fade in text-logo
        //setTimeout(fade_in,1000);
        //Fade in image-logo
        setTimeout(fade_in_image,1000);
    }

    //logo_text
    function fade_in(){
        $("#logo").fadeIn();
        $("#logo").animate({fontSize:"100px"},1500);
        setTimeout(fade_info,2000);
        console.log("here");
    }

    //logo_image
    function fade_in_image(){
        $("#logo_img").fadeIn();
        $("#logo_img").animate({width:"500px",height:"280px",marginTop:"0px"},1500);
        setTimeout(fade_info,2000);
    }

    function fade_info(){
        $(".stack_info").fadeIn();
    }


    $("#create_a_stack").click(function(){
        $(this).fadeOut();
        $(".stack_info").fadeOut();
        $("#show_stack").fadeIn();
        play();
        
    });

    $("#push").click(function(){
        f();
    });

     $("#push").hover(function(){
       $("#greenFade").css("display","block");
     }, function(){
       $("#greenFade").css("display","none");
     }
     );

  
    $("#pop").click(function(){
        f2();
    });

    $("#pop").hover(function(){
        $("#redFade").css("display","block");
      }, function(){
        $("#redFade").css("display","none");
      }
      );

    $("#top").click(function(){
        f3();
        
        console.log("TOP");
    });

    

    $("#top").hover(function(){
        $("#blueFade").css("display","block");
      }, function(){
        $("#blueFade").css("display","none");
      }
      );

      $("#deleteButton").hover(function(){
        $("#deleteButton").css("color","#feda4a");
        $(this).css("background-color","white");
      }, function(){
        $(this).css("color","white");
        $(this).css("background-color","transparent");
      }
      );

    $("#deleteButton").click(function(){
        $(".stack_info").css("display","block");
        $("#create_a_stack").css("display","block");
        $("#header").css("display","block");
        $("#show_stack").css("display","none");
        $("#stack_use").css("display","none");
        console.log(">Stack Successfully Deleted");
        while(!isEmpty()){
            f2();
        }
        pause2();
        MAXIMUM_SIZE = Math.floor(Math.random() * 5)+5;


    });

    $("#dialog").hover(function(){

        $("#dialog").css("display","block");
    
    }, function(){

        $("#dialog").css("display","none");
    });

    $("#pic").hover(function(){

        $("#dialog").css("display","block");
        play();
    
    }, function(){

        $("#dialog").css("display","none");
        stop();
    });



    function display_functions(){
    $(id).fadeOut().empty();
    $("#show_stack").fadeIn();
    
    }

        document.getElementById("stack").innerHTML = "The stack Is Empty!";
    
 });

 function showCap(){
    document.getElementById("stack").innerHTML = "Capacity: " + getCurrentCapacity();
}

var cantina = document.getElementById("cantina");
 
function play2() {
    cantina.play();
}
 
function pause2() {
    cantina.pause();
}

var MAXIMUM_SIZE = Math.floor(Math.random() * 5)+5;

 var size = 0;

 var stackArray = new Array();

 function isFull(){
     if(size >= MAXIMUM_SIZE){
         return true;
     }
     return false;
 };

 function isEmpty(){
     return size <= 0;
 };

 function push(variable){
    if(!(isFull())){
        stackArray.push(variable);
  
        addSize();
        showCap();
        const v = getVal();
        $("#result").prepend("<div id='stackContainer'> <h1 id='stack_value'>" + v + " </h1> </div>");
    } else {
        document.getElementById("stack").innerHTML = "The stack is FULL!";
    }
   
 };

 function pop(){
     if(!(isEmpty())){
         stackArray.pop();
         decreaseSize();
         showCap();
     } else {
        document.getElementById("stack").innerHTML = "The stack is Empty!";
     }
     
 };

 function addSize(){
     size+=1;
 }
 
 function decreaseSize(){
     size-=1;
 }

 function getCurrentCapacity(){
     return MAXIMUM_SIZE - size;
 }
 

 function f(){
     const v = getVal();
     if(v=="" || v.length > 25){

     } else {
     $("#stackContainer").css("background-color","transparent");
     $("#stack_value").css("color","#feda4a");
     push(v);
     }
   
     //document.getElementById("stack").innerHTML = stackArray;
     
 };

 

 function f3(){

     $("#stackContainer").css("background-color","gold");
     $("#stack_value").css("color","white");
 }

 function f2(){

    pop();
    $("#stackContainer").last().remove();
    //document.getElementById("stack").innerHTML = stackArray;
};

function getVal() {
    const val = document.querySelector('input').value;
    return val;
  }






