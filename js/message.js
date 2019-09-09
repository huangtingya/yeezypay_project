$(function(){
 	// messageBox
 	$(window).scroll(function(){
 		var winTop = $(window).scrollTop();
 			messageTop = $('.main_content').offset().top;
 			if (winTop + 10 > messageTop) {
 				$('.message_01').delay(500).animate({ left :'20px'});
 				$('.message_02').delay(800).animate({ left :'50px'});
 				$('.message_03').delay(1000).animate({ left:'42px'});
 			};
 	});
});

