$(document).ready(function() {

	
	var close_menu = $('.close_menu');
	var menu = $('.menu');
	var page = $('.page');
	var open_menu = $('.open_menu');
	open_menu.on('click', function(event) {
		event.preventDefault();
		menu.removeClass('closee');
		page.removeClass('up');
		open_menu.removeClass('in');
	});
	close_menu.on('click', function(event) {
		event.preventDefault();
		menu.addClass('closee');
		page.addClass('up');
		open_menu.addClass('in');
	});


	$('.content_CMLS.container .row .col-md-6 a').click(function(event) {
		event.preventDefault();
	});


	var next = $('span.next');
	var prev = $('span.prev');
	function click_next(){
		var one_slide = $('.one_slide');
		var slide_active = $('.one_slide.active');
		var index_active = slide_active.index();
		var btn  =  $('li.one_btn');
		for (var i = 0; i < one_slide.length; i++) {
			$(one_slide[i]).removeClass('il active ol or ir ');
			$(btn[i]).removeClass('white');
		}
		if(index_active < one_slide.length-1){
			$(one_slide[index_active+1]).addClass('il').addClass('active');
			$(one_slide[index_active]).addClass('ol');
			$(btn[index_active+1]).addClass('white');
		}
		else{
			$(one_slide[0]).addClass('il').addClass('active');
			$(one_slide[one_slide.length-1]).addClass('ol');
			$(btn[0]).addClass('white');
		}
	}

	function click_prev(){
		var one_slide = $('.one_slide');
		var slide_active = $('.one_slide.active');
		var index_active = slide_active.index();
		var btn  =  $('li.one_btn');
		for (var i = 0; i < one_slide.length; i++) {
			$(one_slide[i]).removeClass('il active ol or ir ');
			$(btn[i]).removeClass('white');
		}
		if(index_active > 0){
			$(one_slide[index_active-1]).addClass('ir').addClass('active');
			$(one_slide[index_active]).addClass('or');
			$(btn[index_active-1]).addClass('white');
		}
		else{
			$(one_slide[one_slide.length-1]).addClass('ir').addClass('active');
			$(one_slide[0]).addClass('or');
			$(btn[one_slide.length-1]).addClass('white');
		}
	}
	var btn = $('li.one_btn');

	btn.on('click', function(event) {
		clearInterval(auto_slide);
		var index_btn = $(this).index();
		var index_btn_active = $('li.one_btn.white').index();
		var one_slide = $('.one_slide');
		if (index_btn!=index_btn_active) {
			for (var i = 0; i < $(btn).length; i++) {
				$(one_slide[i]).removeClass('il active ol or ir ');
				$(btn[i]).removeClass('white');
			}
			if(index_btn>index_btn_active){
				$(one_slide[index_btn]).addClass('active');
				$(one_slide[index_btn]).addClass('il');
				$(btn[index_btn]).addClass('white');
				$(one_slide[index_btn_active]).addClass('ol');
			}
			else if (index_btn<index_btn_active) {
				$(one_slide[index_btn]).addClass('active');
				$(one_slide[index_btn]).addClass('ir');
				$(btn[index_btn]).addClass('white');
				$(one_slide[index_btn_active]).addClass('or');
			}
		}
		else{}
	});
	
	var auto_slide = setInterval(function(){
		click_next();
	}, 4000)
	next.on('click', function(event) {
		click_next();
		clearInterval(auto_slide);
	});
	prev.on('click', function(event) {
		click_prev();
		clearInterval(auto_slide);
	});






	var pos_CMLS =  Math.round($('.wrap_CMLS').offset().top);
	var pos_toiac =  Math.round($('.wrap_toiac').offset().top);
	var pos_AHDT =  Math.round($('.wrap_AHDT').offset().top);
	var pos_DANHNGON =  Math.round($('.wrap_dn').offset().top);
	var pos_CAUCHUYEN =  Math.round($('.wrap_cn').offset().top);
	var ALL_pos = [0 , pos_CMLS, pos_toiac, pos_AHDT, pos_DANHNGON, pos_CAUCHUYEN];

	
	$('ul.items li').on('click',  function(event) {
		event.preventDefault();
		var items_li_before = $('ul.items li.active').index();
		var index = $(this).index();
		if (items_li_before != index) {
			// $(this).addClass('active');
			$('ul.items li.active').removeClass('active');
			$('html, body').animate({scrollTop:ALL_pos[index]}, {duration: 1000, easing:"linear"});
			items_li_before = index;
		}
		else{}
		
	});
	var half_pos_01_down = pos_CMLS - 100;
	var half_pos_02_down = pos_toiac - 100;
	var half_pos_03_down = pos_AHDT - 100;
	var half_pos_04_down = pos_DANHNGON - 100;
	var half_pos_05_down = pos_CAUCHUYEN - 100;
	var all_half_down = [half_pos_01_down, half_pos_02_down, half_pos_03_down, half_pos_04_down, half_pos_05_down];

	var half_pos_01_up = pos_CMLS - 400;
	var half_pos_02_up = pos_toiac - 400;
	var half_pos_03_up = pos_AHDT - 400;
	var half_pos_04_up = pos_DANHNGON - 400;
	var half_pos_05_up = pos_CAUCHUYEN - 400;
	var all_half_up = [half_pos_01_up, half_pos_02_up, half_pos_03_up, half_pos_04_up, half_pos_05_up];


	var pos_body_before;
	var pos_body_after;
	$('html, body').scroll(function(event) {
		pos_body_after = $(this).scrollTop();
		if (typeof pos_body_before != "undefined") {
			if (pos_body_after > pos_body_before) {
				for (var i = 0; i < all_half_down.length; i++) {
					if (pos_body_after > all_half_down[i] && pos_body_after < all_half_down[i] + 200) {
						$('ul.items li.active').removeClass('active');
						$($('ul.items li')[i+1]).addClass('active');
						break;
					}
				}	
			}
			else if(pos_body_after < pos_body_before){
				// var index;
				for (var i = 0; i < all_half_up.length; i++) {
					if (pos_body_after < all_half_up[i]) {
						$('ul.items li.active').removeClass('active');
						$($('ul.items li')[i]).addClass('active');
						break;
					}
				}
			}
		}
		else{	
		}
		pos_body_before = pos_body_after;
	});

	$('.one_slide').on('click',function(event) {
		var index = $(this).index();
		console.log(index);
		$('html, body').animate({scrollTop:ALL_pos[index+1]}, {duration: 1000, easing:"linear"});
	});


	$('.backtotop').on('click', function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop:0}, {duration: 1000, easing:"linear"});
	});
	
	


	var defauft_height = $('.slide_CMLS').height();
	var count_load_more_info_before = 0;
	var height_p = $('p.load_more_info').height() - 70;
	$('.content_CMLS.container i.fa.fa-angle-down').on('click', function(event) {
		var id = $(this).attr('id');
		$(this).prev().toggleClass('load_more_info');
		$(this).toggleClass('flip');
		var now_height = $('.slide_CMLS').height();
		var load_height;
		count_load_more_info_after = 0;
		for (var i = 1; i <= $('p.load_more_info').length; i++) {
			count_load_more_info_after++;
		}
		if (count_load_more_info_after > count_load_more_info_before) {
			$('.content_CMLS.container .row .col-md-6 .bonus_img'+'#'+id).css('height', '650px');
			load_height = now_height + 230;
			pos_toiac += 230;
			pos_AHDT  += 230;
			pos_DANHNGON  += 230;
			pos_CAUCHUYEN += 230;
			half_pos_02_down += 230;
			half_pos_03_down += 230;
			half_pos_04_down += 230;
			half_pos_05_down += 230;
			half_pos_02_up += 230;
			half_pos_03_up += 230;
			half_pos_04_up += 230;
			half_pos_05_up += 230;
			ALL_pos = [0 , pos_CMLS, pos_toiac, pos_AHDT, pos_DANHNGON, pos_CAUCHUYEN];
			all_half_down = [half_pos_01_down, half_pos_02_down, half_pos_03_down, half_pos_04_down, half_pos_05_down];
			all_half_up = [half_pos_01_up, half_pos_02_up, half_pos_03_up, half_pos_04_up, half_pos_05_up];
		}
		else{		
			$('.content_CMLS.container .row .col-md-6 .bonus_img'+'#'+id).css('height', '0px');
			load_height = now_height - 230;
			pos_toiac -= 230;
			pos_AHDT  -= 230;
			pos_DANHNGON  -= 230;
			pos_CAUCHUYEN -= 230;
			half_pos_02_down -= 230;
			half_pos_03_down -= 230;
			half_pos_04_down -= 230;
			half_pos_05_down -= 230;
			half_pos_02_up -= 230;
			half_pos_03_up -= 230;
			half_pos_04_up -= 230;
			half_pos_05_up -= 230;
			ALL_pos = [0 , pos_CMLS, pos_toiac, pos_AHDT, pos_DANHNGON, pos_CAUCHUYEN];
			all_half_down = [half_pos_01_down, half_pos_02_down, half_pos_03_down, half_pos_04_down, half_pos_05_down];
			all_half_up = [half_pos_01_up, half_pos_02_up, half_pos_03_up, half_pos_04_up, half_pos_05_up];
		}	
		$('.slide_CMLS').css('height', load_height);
		count_load_more_info_before = count_load_more_info_after;
	});
	
	function fadeCLMS(){
		$('.content_CMLS.container .row .col-md-6 .bonus_img').css('height', '0px');
		var count_p = 0;
		for (var i = 0; i <  $('.one_slide_CMLS.active p.load_more_info').length; i++) {
			count_p++;
		}
		pos_toiac -= count_p*230;
		pos_AHDT  -=  count_p*230;
		pos_DANHNGON  -=  count_p*230;
		pos_CAUCHUYEN -=  count_p*230;
		half_pos_02_down -= count_p*230;
		half_pos_03_down -=  count_p*230;
		half_pos_04_down -=  count_p*230;
		half_pos_05_down -=  count_p*230;
		half_pos_02_up -=  count_p*230;
		half_pos_03_up -=  count_p*230;
		half_pos_04_up -= count_p*230;
		half_pos_05_up -=  count_p*230;
		ALL_pos = [0 , pos_CMLS, pos_toiac, pos_AHDT, pos_DANHNGON, pos_CAUCHUYEN];
		all_half_down = [half_pos_01_down, half_pos_02_down, half_pos_03_down, half_pos_04_down, half_pos_05_down];
		all_half_up = [half_pos_01_up, half_pos_02_up, half_pos_03_up, half_pos_04_up, half_pos_05_up];

		count_load_more_info_before = 0;
		var active = $('.one_slide_CMLS.active');
		var prev = $('.one_slide_CMLS.active').prev('.one_slide_CMLS');
		var next = $('.one_slide_CMLS.active').next('.one_slide_CMLS');
		$('.slide_CMLS').css('height', defauft_height);
		$('.one_slide_CMLS.active').removeClass('active');
		if (prev.length != 0) {
			prev.addClass('active');
		}
		if (next.length != 0) {
			next.addClass('active');
		}
		active>$('p').removeClass('load_more_info');
		active>$('i').removeClass('flip');
	}
	$('span.next_CMLS i').on('click', fadeCLMS);
	$('span.prev_CMLS i').on('click', fadeCLMS);



	$('.all_img_cn img').on('click', function(event) {
		var index = $(this).prevAll($('.all_img_cn img')).length;
		$('.one_content.active').removeClass('active');
		$($('.one_content')[index]).addClass('active');
		$('.all_img_cn img').removeClass('active');
		$(this).addClass('active');
	});




	$('.one_piece a').on('click',function(event) {
		event.preventDefault();
		$(this).addClass('flip_piece');
		$(this).prev($('img')).addClass('flip_piece');
		var href = $(this).attr('href');
		var full_href = "#"+href;
		$(full_href).addClass('active');
	});




	function close_tab() {
		$('.info_toiac.active').removeClass('active');
		$('.one_piece a.flip_piece').removeClass('flip_piece');
		$('.one_piece img.flip_piece').removeClass('flip_piece');
	}
	$('.close_tab i').on('click',close_tab);
	$(function(){
      $('*').keydown(function(e){
         if(e.keyCode=='27'){
           	close_tab();
        }       
      })
    })

	$('.AHDT.container-fluid .row .col-md-4').hover(function() {
		$(this).find('.wrap_up').addClass('out');
		$(this).find('.wrap_down').addClass('out');
	}, function() {
		
	});

})
