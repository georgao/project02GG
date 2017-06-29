/************* animation for the top bar*************/
 $(window).scroll(function(){
	 var yPos=$(window).scrollTop();
	  if($(window).width()>=417){
	     if(yPos>0){
	     	$(".head-content").css({"position":"fixed","box-shadow":"0px 3px 10px #444444"});
	        $(".logo-holder img").css("width","130px");
	        $(".main-nav ul").css("margin-top","0");
	        $(".se-nav ul").css("margin-top","0");
	     }
	     else{
			  $(".head-content").css({"position":"absolute","box-shadow":"none"});
			  $(".logo-holder img").css("width","170px");
			  $(".main-nav ul").css("margin-top","0.3em");
			  $(".se-nav ul").css("margin-top","0.3em");
	     } 

     	 }
     	 else{
     	 	  $(".logo-holder img").css("width","70px");
     	 }
  });
    

 $(window).scroll(function(){
  var yPos=$(window).scrollTop();
  if(yPos>10){
     	  $(".moveUp").css({"display":"block", "opacity": "1"});
     }
     else{
 		  $(".moveUp").css({"display":"none","opacity": "0"});
     }

     $(".moveUp").click(function(){
     if(yPos>0){
         $("body,html").animate({scrollTop:0},500);
       }
     });/*----html for firefox.*/
 });

/*************  button for scrolling back top *************/
function videoGalley(){
	var lSelector=$(".selector-dot li");
	var lVideo=$(".videoGalley iframe").attr("src","aa");
	console.log(lVideo);
		lSelector.each(function(){
			$(this).click(function() {
				lSelector.removeClass("focus");
				$(this).addClass("focus");
			});
		});
};

function animeControl(){
	$(window).scroll(function(){
	    var eTop=$("#video-selector").offset().top;
		var eTopCollect=$("#collect-section").offset().top;
		var eTopNew=$("#nr-section").offset().top;
		var dTop = $(document).scrollTop();
		var wTop=$(window).height();
		$(window).resize(function(){
			var wTop=$(window).height();
		});
		/*console.log("mouse Scroll:" + dTop);
		console.log("element from top of screen:" + eTop);
		console.log("window screen height:" + wTop);*/
		 //video animation
		if(dTop+wTop>eTop+20){
			$(".video-galley iframe").css("display","block");
	    }     
        else if(dTop+wTop>eTopCollect+20){
	  	   $("#collect-content").css("display","block");
	    }else if(dTop+wTop>eTopNew+20){
	    	$(".slider-image").css("display","block");
	    }
	});
};
	videoGalley();
	animeControl();
