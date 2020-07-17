$(document).ready(function() {
	$('a').on('click', function(event) {
	event.preventDefault();
		/* Act on the event */
	});

	


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






	// console.log();

	var pos_CMLS =  Math.round($('.wrap_CMLS').offset().top);
	var pos_toiac =  Math.round($('.wrap_toiac').offset().top);
	var pos_AHDT =  Math.round($('.wrap_AHDT').offset().top);
	var pos_DANHNGON =  Math.round($('.wrap_dn').offset().top);
	// var pos_CAUCHUYEN =  pos_DANHNGON + Math.round($('.wrap_dn').height());
	console.log(pos_CMLS);
	console.log(pos_toiac);
	console.log(pos_AHDT);
	console.log(pos_DANHNGON);
	// // console.log(pos_CAUCHUYEN);
	var ALL_pos = [0 , pos_CMLS, pos_toiac, pos_AHDT, pos_DANHNGON];

	var items_li_before = 0;
	$('ul.items li').on('click',  function(event) {
		// $('ul.items li.active').removeClass('active');
		// $(this).addClass('active');

		var index = $(this).index();
		if (items_li_before != index) {
			$('html, body').animate({scrollTop:ALL_pos[index]}, {duration: 1000, easing:"linear"});
			items_li_before = index;
		}
		else{}
		
	});
	var half_pos_01_down = pos_CMLS - 100;
	var half_pos_02_down = pos_toiac - 100;
	var half_pos_03_down = pos_AHDT - 100;
	var half_pos_04_down = pos_DANHNGON - 100;
	// var half_pos_01_down = pos_CMLS - (($('.wrap_slide').height())/100)*20;
	// var half_pos_02_down = pos_toiac - (($('.wrap_CMLS').height())/100)*20;
	// var half_pos_03_down = pos_AHDT - 100;
	// var half_pos_04_down = pos_DANHNGON - 100;
	var all_half_down = [half_pos_01_down, half_pos_02_down, half_pos_03_down, half_pos_04_down];

	var half_pos_01_up = pos_CMLS - 400;
	var half_pos_02_up = pos_toiac - 400;
	var half_pos_03_up = pos_AHDT - 400;
	var half_pos_04_up = pos_DANHNGON - 400;
	// var half_pos_01_up = 0 +100;
	// var half_pos_02_up = pos_CMLS + 100;
	// var half_pos_03_up = pos_toiac + 100;
	// var half_pos_04_up = pos_AHDT +100;
	var all_half_up = [half_pos_01_up, half_pos_02_up, half_pos_03_up, half_pos_04_up];


	var pos_body_before;
	var pos_body_after;
	$('html, body').scroll(function(event) {
		pos_body_after = $(this).scrollTop();
		if (typeof pos_body_before != "undefined") {
			if (pos_body_after > pos_body_before) {
				var index;
				for (var i = 0; i < all_half_down.length; i++) {
					if (pos_body_after > all_half_down[i] && pos_body_after < all_half_down[i] + 100) {
						index = i+1;
						break;
					}
				}
				if (index > 0) {
					$('ul.items li').removeClass('active');
					$($('ul.items li')[index]).addClass('active');
				}
					
			}
			else if(pos_body_after < pos_body_before){
				var index;
				for (var i = 0; i < all_half_up.length; i++) {
					if (pos_body_after < all_half_up[i]) {
						index = i;
						break;
					}
				}
				if (index > -1) {
					$('ul.items li').removeClass('active');
					$($('ul.items li')[index]).addClass('active');
				}
			}
		}
		else{	
		}
		pos_body_before = pos_body_after;
	});



	$('.backtotop').on('click', function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop:0}, {duration: 1000, easing:"linear"});
	});
	
	


	var defauft_height = $('.slide_CMLS').height();
	var count_load_more_info_before = 0;
	$('.content_CMLS.container i.fa.fa-angle-down').on('click', function(event) {
		$(this).prev().toggleClass('load_more_info');
		$(this).toggleClass('flip');
		var now_height = $('.slide_CMLS').height();
		var load_height;
		count_load_more_info_after = 0;
		for (var i = 1; i <= $('p.load_more_info').length; i++) {
			count_load_more_info_after++;
		}
		if (count_load_more_info_after > count_load_more_info_before) {
			load_height = now_height + 230;
		}
		else{		
			load_height = now_height - 230;
		}	
		$('.slide_CMLS').css('height', load_height);
		count_load_more_info_before = count_load_more_info_after;
	});
	
	function fadeCLMS(){
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


})
