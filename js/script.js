
  //backToTop
  $('#backToTop').on('click', function() {
    $('body,html').animate({
      scrollTop: 0
    }, 300);
    return false;
  });

 //nav
  var $nav = $('#gnav');
  var offset = $nav.offset();
  var navHeight = $nav.innerHeight();
  $('.section').css('padding-top', navHeight / 2);

  $(window).on('resize', function() {
    var currentWidth = window.innerWidth;
    if (currentWidth == window.innerWidth) {
      // ウインドウ横幅が変わっていないため処理をキャンセル
      return;
    }
    $nav = $('#gnav');
    offset = $nav.offset();
    navHeight = $nav.innerHeight();
    $('.section').css('padding-top', navHeight / 2);
  });


  $(window).scroll(function() {
    if ($(window).scrollTop() >= offset.top) {
      $nav.addClass('fixed');
      $("#contents").css("margin-top", navHeight);
    } else {
      $nav.removeClass('fixed');
      $("#contents").css("margin-top", "0");
    }
  });


 //graf
	$(function() {
    $('.chart').easyPieChart({
        //your configuration goes here
		easing:'easeOutQuart',
		barColor:'#00b1c9',
		trackColor:'#ccc',
		lineCap:'butt',
		lineWidth: 10,
		trackWidth: 10,
		size:140,
		scaleLength:10,
		scaleColor:false,
		animate:{ duration: 5000, enabled: true },
		rotate:0,
		onStep: function(from, to, percent) {
			$(this.el).find('.data-percent').text(Math.round(percent));
			}
    });
});
	window.addEventListener('DOMContentLoaded', function() {
  var charts = [];
  [].forEach.call(document.querySelectorAll('.chart'),  function(el) {
    charts.push(new EasyPieChart(el, options));
  });
});


$(function() {
  $('.slick-box').slick({
    autoplay:true,
    autoplaySpeed:3000,
    centerMode: false, //センターモード
    arrows: true, // 前後の矢印非表示
    dots: false, // スライダー下部に表示される、ドット状のページネーションです
    infinite: true, // 無限ループ
    speed: 300, // 切り替わりのスピード
    slidesToShow: 1, //通常 1024px以上の領域では4画像表示
    slidesToScroll: 1, 
    responsive: [{
      breakpoint: 1024,settings: { //601px～1024pxでは3画像表示
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,settings: { //481px～600pxでは2画像表示
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,settings: {//480px以下では1画像表示
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
});