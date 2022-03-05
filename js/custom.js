$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	}; 
});


$(document).ready(function(){
    
    var ll = new LazyLoad({
            elements_selector: ".lazyload",
    });

    
    function showDiv() {
		if ($(window).scrollTop() > 50) {			
			$("#header").addClass('fixed');
			$("body").addClass('body-fixed');
		}else {
            $("#header").removeClass('fixed');	
            $("body").removeClass('body-fixed');
		}
        
	}
    showDiv();
	$(window).scroll(showDiv);
    
    $('.tabs-nav__item').on('click', function(event) {  
        $(this).parents('.tabs').find('.tabs-nav__item').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.tabs').find('.tabs-content').hide();
        $(this).parents('.tabs').find('.tabs-content[data-tab="'+$(this).attr('data-tab')+'"]').fadeIn();
        $('.js-slider-reviews').slick('setPosition');
        
        
        if($(this).parents('.tabs').find('.tabs-nav-title').length){
            $(this).parents('.tabs').find('.tabs-nav-title span').text($(this).text());
            
            if(window.innerWidth<992){
                $(this).parents('.tabs-nav').removeClass('active');  
                $(this).parents('.tabs').find('.tabs-nav-title').removeClass('active');  
            }
        }
        
        return false;
        
    });
    
    $('.tabs-nav-title').on('click', function(event) {  
        $(this).next('.tabs-nav').toggleClass('active');
        $(this).toggleClass('active');        
    });
    
    $('.js-slider-reviews').each(function() {  
        $(this).slick({
            infinite:true,
            arrows:true,
            dots:false,
            slidesToShow:5,
            slidesToScroll: 1,
            prevArrow:'<button type="button" class="slick-prev"><svg width="7" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.874 0 7 1.15 2.253 6 7 10.85 5.874 12 0 6l5.874-6Z" /></svg></button>',
            nextArrow:'<button type="button" class="slick-next"><svg width="7" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.126 0 0 1.15 4.747 6 0 10.85 1.126 12 7 6 1.126 0Z"/></svg></button>',
            appendArrows:$(this).parents('.slider-wrapper').find('.slider-nav'),
            swipeToSlide:true,
            responsive: [   
                {
                    breakpoint: 992,
                    settings: {
                        variableWidth:true
                    }
                }
            ]
        });
    }); 
    
     $('.faq-item__title').on('click', function(event) {          
        $(this).parent('.faq-item').toggleClass('active');       
        $(this).next('.faq-item__content').slideToggle();
        return false;
    });    
    
    $('.accordion-item__title').on('click', function(event) {          
        $(this).parent('.accordion-item').toggleClass('active');       
        $(this).next('.accordion-item__content').slideToggle();
        return false;
    });
    
    $.fn.setCursorPosition = function(pos) {
        if ($(this).get(0).setSelectionRange) {
          $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
          var range = $(this).get(0).createTextRange();
          range.collapse(true);
          range.moveEnd('character', pos);
          range.moveStart('character', pos);
          range.select();
        }
      };
    
    $(".input-phone").mask("+7 (999) 999-99-99").on('click', function () {
        if ($(this).val() === '+7 (___) ___-__-__') {
           $(this).setCursorPosition(4);
        }
    });
    
    $('.form-application').each(function() {  
        $(this).validate({       
             errorElement:'div',
             errorPlacement: function(error, element) {
                element.parent().append(error);
            },
            rules: {              
                name: { required: true},
                phone: { required: true}
            },
            messages: {                
                name: { required: "*Обязательное поле" },
                phone: { required: "*Обязательное поле" }
            },
            submitHandler: function(form){
                $(form).submit();
            }
         });
    });
    
    $('.js-menu-trigger').on('click', function(event) {
        if(!$('body').hasClass('menu-open')){
            event.preventDefault();		
            $('body').addClass('menu-open');
            $('.main-wrapper__before').fadeIn();
            $('.header__nav').addClass('active');
        }else{
            $('body').removeClass('menu-open');
            $('.main-wrapper__before').fadeOut();
            $('.header__nav').removeClass('active');
        }
        return false;
	});
    
    
     $(document).on('click', '.main-wrapper__before', function(event) {          
        $('body').removeClass('menu-open');
        $('.main-wrapper__before').fadeOut();
        $('.header__nav').removeClass('active');
        return false;
    });
    
    $('.nav-item_parent .nav-item__link').on('click', function(event) {
        if(window.innerWidth<1200){
            if($(this).parent('.nav-item_parent').hasClass('active')){
                $(this).parent('.nav-item_parent').removeClass('active');
                $(this).next('.subnav-wrapper').slideUp();
            }
            else{
                $(this).parent('.nav-item_parent').addClass('active');
                $(this).next('.subnav-wrapper').slideDown();
            }            
            return false;
        }
    });
    
     $('.footer-nav-title--parent a').on('click', function(event) {
        if(window.innerWidth<992){            
            $(this).parent('.footer-nav-title--parent').toggleClass('active');
            $(this).parent('.footer-nav-title--parent').next('.footer-nav').slideToggle();                    
            return false;
        }
    });
    
    $('.regions__more a').on('click', function(event) {
        $(this).parent('.regions__more').prev('.regions').toggleClass('active');
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            $(this).text($(this).attr('data-hide'));
        }else{
            $(this).text($(this).attr('data-show'));
        }
        
        return false;
    });
    
    
    $('.js-products-show').on('click', function(event) {
        $(this).parents('.products').find('.y-col').fadeIn();
        return false;
    });
    
    if($('.js-slider-products .y-row').length){
        $('.js-slider-products .y-row').each(function() {  
            $(this).slick({
                infinite: true,
                arrows:true,
                dots:false,
                slidesToShow: 1,
                slidesToScroll: 1,
                swipeToSlide:true,
                variableWidth:true,
                prevArrow:'<button type="button" class="slick-prev"><svg width="7" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.874 0 7 1.15 2.253 6 7 10.85 5.874 12 0 6l5.874-6Z" /></svg></button>',
                nextArrow:'<button type="button" class="slick-next"><svg width="7" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.126 0 0 1.15 4.747 6 0 10.85 1.126 12 7 6 1.126 0Z"/></svg></button>',
                appendArrows:$(this).parents('.slider-wrapper').find('.slider-nav'),
                responsive: [            
                    {
                        breakpoint: 9999,
                        settings: "unslick"
                    },
                    {
                        breakpoint: 992,
                        settings: {
                             variableWidth:true
                        }
                    }
                ]
            }); 
        })

        $(window).on('resize orientationchange', function() {
          $('.js-slider-products .y-row').slick('resize');
        });
        
    }
    
     if($('.js-slider-products-2 .y-row').length){
        $('.js-slider-products-2 .y-row').each(function() {  
            $(this).slick({
                infinite: true,
                arrows:true,
                dots:false,
                slidesToShow: 4,
                slidesToScroll: 1,
                swipeToSlide:true,                
                prevArrow:'<button type="button" class="slick-prev"><svg width="7" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.874 0 7 1.15 2.253 6 7 10.85 5.874 12 0 6l5.874-6Z" /></svg></button>',
                nextArrow:'<button type="button" class="slick-next"><svg width="7" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.126 0 0 1.15 4.747 6 0 10.85 1.126 12 7 6 1.126 0Z"/></svg></button>',
                appendArrows:$(this).parents('.slider-wrapper').find('.slider-nav'),
                responsive: [            
                    {
                        breakpoint:1200,
                        settings: {
                             slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                             variableWidth:true
                        }
                    }
                ]
            }); 
        })

        $(window).on('resize orientationchange', function() {
          $('.js-slider-products .y-row').slick('resize');
        });
        
    }
    
    
    $('.product-images-main').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.product-images-nav',
        prevArrow:'<button type="button" class="slick-prev"><svg width="7" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.874 0 7 1.15 2.253 6 7 10.85 5.874 12 0 6l5.874-6Z" /></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="7" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.126 0 0 1.15 4.747 6 0 10.85 1.126 12 7 6 1.126 0Z"/></svg></button>',
        
            swipeToSlide:true,
            responsive: [   
                {
                    breakpoint: 768,
                    settings: {
                        arrows:true,
                        appendArrows:$('.product-images').find('.slider-nav'),
                    }
                }
            ]
    });
    
    $('.product-images-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.product-images-main',
      arrows: true,
      focusOnSelect: true,
        variableWidth:true,
        prevArrow:'<button type="button" class="slick-prev"><svg width="7" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.874 0 7 1.15 2.253 6 7 10.85 5.874 12 0 6l5.874-6Z" /></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="7" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.126 0 0 1.15 4.747 6 0 10.85 1.126 12 7 6 1.126 0Z"/></svg></button>',
    });
    
    $('.product-tabs-nav__item').on('click', function(event) {  
        $(this).parents('.product-tabs').find('.product-tabs-nav__item').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.product-tabs').find('.product-tabs-content').hide();
        $(this).parents('.product-tabs').find('.product-tabs-content[data-tab="'+$(this).attr('data-tab')+'"]').fadeIn();
        return false;
        
    });
    
    $('.product-tabs-content__title').on('click', function(event) {  
        $(this).toggleClass('active');
        $(this).next('.product-tabs-content__content').slideToggle();
        return false;
    });
    
    
    $('.js-product-params').on('click', function(event) {  
        $('.product-tabs-nav__item[data-tab="product-tab-parameters"]').click();
        
        if(window.innerWidth<1200){
            
            $('.product-tabs-content[data-tab="product-tab-parameters"]').find('.product-tabs-content__title').addClass('active');
            $('.product-tabs-content[data-tab="product-tab-parameters"]').find('.product-tabs-content__content').slideToggle();
            
        }

        var target = $('#product-parameters');
        
            var tt=target.offset().top - $('#header').height();					 		 
			$('html, body').animate({
			  scrollTop: tt
			}, 1500);	

        return false;
    });

});

