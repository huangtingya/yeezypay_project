$(function(){
	// menu_fixed
	$(window).bind('scroll resize',function(){
		var $this = $(this);
		var $this_Top = $this.scrollTop();
		if ($this_Top < 10) {
			$('#menu_fixed').stop().animate({top:'85px'});
			$('#menu_fixed').css({
				'box-shadow':''
			});
			$('.logo_s').fadeOut();
			$('.login_nav_down').fadeOut();
		}else{
			$('#menu_fixed').stop().animate({top:'-1px'});
			$('#menu_fixed').css({
				'box-shadow' : '0 0px 1px rgba(0,0,0,.1)'
			});
			$('.logo_s').fadeIn();
			$('.login_nav_down').fadeIn();
		}
	});
	// language-change
	$('.hide_lan_nav').hide();
	$('ul.lan_nav li a').click(function(){
		$('.hide_lan_nav').slideToggle(500);
	});
	// account-change
	$('.account_action').hide();
	$('.signout .account_info a').click(function(){
		$('.account_action').slideToggle(500);
	});
	// New Settlement
	$('.new_settlement .accordion_content').hide();
	$('.new_settlement .sttlement_btn').click(function(){
		$('.accordion_content').slideToggle(500);
	});
	// global-menu
	$('.hide_merchant_nav').hide();
	$('#nav_slidetoggle').find('.supervisor_menu li a').click(function(){
		$(this).next().slideToggle(500);
		$('.hide_merchant_nav').not($(this).next()).slideUp('fast');
	});

	// Merchant menu_fixed// global-menu
	$('.hide_globalnav').hide();
	$('#nav_slidetoggle').find('.global_menu li a').click(function(){
		$(this).next().slideToggle(500);
		$('.hide_globalnav').not($(this).next()).slideUp('fast');
	});

	// Input Value For IE
	$('[placeholder]').parents('form').submit(function() {
  	$(this).find('[placeholder]').each(function() {
    	var input = $(this);
    	if (input.val() == input.attr('placeholder')) {
      		input.val('');
    	}
  	})
	});

	// Merchant added new setting
	$('.added_new_container').hide();
	var $thisDown = $('.added_block .new_btn, .added_block .edtails_btn, .added_block .detail_btn');
		$addContent = $('.added_new_container')
	$('.detail_list').find($thisDown).click(function(){
		$addContent.eq($(this).index()).slideToggle().siblings('.added_new_container').hide();
		// console.log($addContent);
	});

	// Merchant information edit
	$('.information_edit').hide();
	var $editContent = $('.information_edit');
	var $editBtn = $('.merchant_information_content .merchant_info_edit');
	$editBtn.click(function(){
		$editContent.slideToggle();
	}); 


	// select top up / bank account / deposit list
	 var dropdownSelect = $('.dropdown_select');
	 dropdownSelect.change(function(){
	  var dropdonwOptionSelected = $('.dropdown_select option:selected');
	  $('.dropdown_title').text(dropdonwOptionSelected.text());
	 });
	 var currencySelect = $('.currency_select');
	 currencySelect.change(function(){
	 	var currencyOptionSelected = $('.currency_select option:selected');
	 	$('.currency_title').text(currencyOptionSelected.text());
	 });
	 var statusSelect = $('.status_select');
	 statusSelect.change(function(){
	 	var statusOptionSelected = $('.status_select option:selected');
	 	$('.status_title').text(statusOptionSelected.text());
	 });
	 var bankSelect = $('.bank_select');
	 bankSelect.change(function(){
	 	var bankOptionSelected = $('.bank_select option:selected');
	 	$('.bank_title').text(bankOptionSelected.text());
	 });
	  var yearSelect = $('.year_select');
	  yearSelect.change(function(){
	 	var yearOptionSelected = $('.year_select option:selected');
	 	$('.year_title').text(yearOptionSelected.text());
	 });
});








