	var screenWidth = $( window ).width();

function getUrlParams(dParam) {
    var dPageURL = window.location.search.substring(1),
        dURLVariables = dPageURL.split('&'),
        dParameterName,
        i;

    for (i = 0; i < dURLVariables.length; i++) {
        dParameterName = dURLVariables[i].split('=');

        if (dParameterName[0] === dParam) {
            return dParameterName[1] === undefined ? true : decodeURIComponent(dParameterName[1]);
        }
    }
}


jQuery(window).on("load", function() {
    $('#preloader').fadeOut(500);
    $('#main-wrapper').addClass('show');

    // if($('body').attr('data-sidebar-position') === "fixed") {
    //     $('.deznav-scroll').slimscroll({
    //         position: "right",
    //         size: "5px",
    //         height: "100%",
    //         color: "transparent"
    //     });
    // }
	$('select').selectpicker();
});

(function($) {
    "use strict";

    $("#menu").metisMenu();

    // $(function() {
    //     AOS.init({
    //         duration: 1500,
    //         easing: 'ease-in-out',
    //     });
    // });

    $("#checkAll").change(function() {
        $("td input:checkbox").prop('checked', $(this).prop("checked"));
    });





    /* $('.sidebar-right-inner').slimscroll({
        position: "left",
        size: "5px",
        height: "100%",
        color: "#c6c8c9"
    }); */

    $(".nav-control").on('click', function() {

        $('#main-wrapper').toggleClass("menu-toggle");

        $(".hamburger").toggleClass("is-active");
    });

    //to keep the current page active
    
	for (var nk = window.location,
			o = $("ul#menu a").filter(function() {
				return this.href == nk;
			})
			.addClass("mm-active")
			.parent()
			.addClass("mm-active");;) {
		// console.log(o)
		if (!o.is("li")) break;
		o = o.parent()
			.addClass("mm-show")
			.parent()
			.addClass("mm-active");
	}



	$("ul#menu>li").on('click', function() {
		const sidebarStyle = $('body').attr('data-sidebar-style');
		if (sidebarStyle === 'mini') {
			console.log($(this).find('ul'))
			$(this).find('ul').stop()
		}
	})
   

    
	// var win_w = window.outerWidth;
	var win_h = window.outerHeight;
	var win_h = window.outerHeight;
	if (win_h > 0 ? win_h : screen.height) {
		$(".content-body").css("min-height", (win_h + 60) + "px");
	};
    


    $('a[data-action="collapse"]').on("click", function(i) {
        i.preventDefault(),
            $(this).closest(".card").find('[data-action="collapse"] i').toggleClass("mdi-arrow-down mdi-arrow-up"),
            $(this).closest(".card").children(".card-body").collapse("toggle");
    });

    $('a[data-action="expand"]').on("click", function(i) {
        i.preventDefault(),
            $(this).closest(".card").find('[data-action="expand"] i').toggleClass("icon-size-actual icon-size-fullscreen"),
            $(this).closest(".card").toggleClass("card-fullscreen");
    });



    $('[data-action="close"]').on("click", function() {
        $(this).closest(".card").removeClass().slideUp("fast");
    });

    $('[data-action="reload"]').on("click", function() {
        var e = $(this);
        e.parents(".card").addClass("card-load"),
            e.parents(".card").append('<div class="card-loader"><i class=" ti-reload rotate-refresh"></div>'),
            setTimeout(function() {
                e.parents(".card").children(".card-loader").remove(),
                    e.parents(".card").removeClass("card-load")
            }, 2000)
    });

    const headerHight = $('.header').innerHeight();

    $(window).scroll(function() {
        if ($('body').attr('data-layout') === "horizontal" && $('body').attr('data-header-position') === "static" && $('body').attr('data-sidebar-position') === "fixed")
            $(this.window).scrollTop() >= headerHight ? $('.deznav').addClass('fixed') : $('.deznav').removeClass('fixed')
    });
	
	
	jQuery('.dz-scroll').each(function(){
		
		var scroolWidgetId = jQuery(this).attr('id');
		const ps = new PerfectScrollbar('#'+scroolWidgetId, {
		  wheelSpeed: 2,
		  wheelPropagation: true,
		  minScrollbarLength: 20
		});
	})
	
	jQuery('.metismenu > .mm-active ').each(function(){
		if(!jQuery(this).children('ul').length > 0)
		{
			jQuery(this).addClass('active-no-child');
		}
	});
	if(screenWidth <= 991 ){
		jQuery('.menu-tabs .nav-link').on('click',function(){
			if(jQuery(this).hasClass('open'))
			{
				jQuery(this).removeClass('open');
				jQuery('.fixed-content-box').removeClass('active');
				jQuery('.hamburger').show();
			}else{
				jQuery('.menu-tabs .nav-link').removeClass('open');
				jQuery(this).addClass('open');
				jQuery('.fixed-content-box').addClass('active');
				jQuery('.hamburger').hide();
			}
			//jQuery('.fixed-content-box').toggleClass('active');
		});
		jQuery('.close-fixed-content').on('click',function(){
			jQuery('.fixed-content-box').removeClass('active');
			jQuery('.hamburger').removeClass('is-active');
			jQuery('#main-wrapper').removeClass('menu-toggle');
			jQuery('.hamburger').show();
		});
	}
	jQuery('.right-sidebar .nav-link').on('click',function(){
		jQuery('.chatbox').addClass('active');
	});
	jQuery('.chatbox-close').on('click',function(){
		jQuery('.chatbox').removeClass('active');
	});
	
	const qs = new PerfectScrollbar('.deznav-scroll');
// const sr = new PerfectScrollbar('.sidebar-right-inner');


	//plugin bootstrap minus and plus
	$('.btn-number').on('click', function(e) {
		e.preventDefault();

		fieldName = $(this).attr('data-field');
		type = $(this).attr('data-type');
		var input = $("input[name='" + fieldName + "']");
		var currentVal = parseInt(input.val());
		if (!isNaN(currentVal)) {
			if (type == 'minus')
				input.val(currentVal - 1);
			else if (type == 'plus')
				input.val(currentVal + 1);
		} else {
			input.val(0);
		}
	});
	
	jQuery('.dz-chat-user-box .dz-chat-user').on('click',function(){
		 jQuery('.dz-chat-user-box').addClass('d-none');
		 jQuery('.dz-chat-history-box').removeClass('d-none');
	}); 
	
	jQuery('.dz-chat-history-back').on('click',function(){
		 jQuery('.dz-chat-user-box').removeClass('d-none');
		  jQuery('.dz-chat-history-box').addClass('d-none');
	}); 
	
	jQuery('.dz-fullscreen').on('click',function(){
		jQuery('.dz-fullscreen').toggleClass('active');
	});
	
	
	
	
	
	jQuery('.dz-fullscreen').on('click',function(e){
		if(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement) 
		{ /* Enter fullscreen */
		
		if(document.exitFullscreen) {
			document.exitFullscreen();
		} else if(document.msExitFullscreen) {
			document.msExitFullscreen(); /* IE/Edge */
		} else if(document.mozCancelFullScreen) {
			document.mozCancelFullScreen(); /* Firefox */
		} else if(document.webkitExitFullscreen) {
			document.webkitExitFullscreen(); /* Chrome, Safari & Opera */
		}
	} else { /* exit fullscreen */
		if(document.documentElement.requestFullscreen) {
			document.documentElement.requestFullscreen();
		} else if(document.documentElement.webkitRequestFullscreen) {
			document.documentElement.webkitRequestFullscreen();
		} else if(document.documentElement.mozRequestFullScreen) {
			document.documentElement.mozRequestFullScreen();
		} else if(document.documentElement.msRequestFullscreen) {
			document.documentElement.msRequestFullscreen();
		}
	}
		
		
	});
	
	// Chart All Pages
	
	//#dailySalesChart
	if(jQuery('#daily-sales-chart').length > 0 ){
    const dailySalesChart = document.getElementById("daily-sales-chart").getContext('2d');
    
    // dailySalesChart.height = 100;

    let barChartData = {
        defaultFontFamily: 'Poppins',
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Expense',
            backgroundColor: '#3a7afe',
            hoverBackgroundColor: '#3a7afe', 
            data: [
                '20',
                '14',
                '18',
                '25',
                '27',
                '22',
                '12', 
                '24', 
                '20', 
                '14', 
                '18', 
                '16'
            ]
        }, {
            label: 'Earning',
            backgroundColor: '#dfe3ec',
            hoverBackgroundColor: '#dfe3ec', 
            data: [
                '12',
                '18',
                '14',
                '7',
                '5',
                '10',
                '20', 
                '8', 
                '12', 
                '18', 
                '14', 
                '16'
            ]
        }]

    };

    new Chart(dailySalesChart, {
        type: 'bar',
        data: barChartData,
        options: {
            legend: {
                display: false
            }, 
            title: {
                display: false
            },
            tooltips: {
                mode: 'index',
                intersect: false
            },
            responsive: true,
            maintainAspectRatio: false, 
            scales: {
                xAxes: [{
                    display: false, 
                    stacked: true,
                    barPercentage: 0.5, 
                    ticks: {
                        display: false
                    }, 
                    gridLines: {
                        display: false, 
                        drawBorder: false
                    }
                }],
                yAxes: [{
                    display: false, 
                    stacked: true, 
                    gridLines: {
                        display: false, 
                        drawBorder: false
                    }, 
                    ticks: {
                        display: false
                    }
                }]
            }
        }
    });
	}
	
	if(jQuery('#ShareProfit').length > 0 ){
		//doughut chart
		const ShareProfit = document.getElementById("ShareProfit").getContext('2d');
		// ShareProfit.height = 100;
		new Chart(ShareProfit, {
			type: 'doughnut',
			data: {
				defaultFontFamily: 'Poppins',
				datasets: [{
					data: [45, 25, 20],
					borderWidth: 3, 
					borderColor: "rgba(255, 243, 224, 1)",
					backgroundColor: [
						"rgba(58, 122, 254, 1)",
						"rgba(255, 159, 0, 1)",
						"rgba(41, 200, 112, 1)"
					],
					hoverBackgroundColor: [
						"rgba(58, 122, 254, 0.9)",
						"rgba(255, 159, 0, .9)",
						"rgba(41, 200, 112, .9)"
					]

				}],
				
			},
			options: {
				weight: 1,	
				 cutoutPercentage: 65,
				responsive: true,
				maintainAspectRatio: false
			}
		});
	}
  
  if(jQuery('#lightgallery, .lightgallery').length>0) {
    $('#lightgallery, .lightgallery').lightGallery({
      thumbnail:true,
    });
  }
  
  jQuery('.show-pass').on('click',function(){
    jQuery(this).toggleClass('active');
    if(jQuery('#dz-password').attr('type') == 'password'){
      jQuery('#dz-password').attr('type','text');
    }else if(jQuery('#dz-password').attr('type') == 'text'){
      jQuery('#dz-password').attr('type','password');
    }
  });
  
	$('[data-toggle="popover"]').popover();
  
})(jQuery);