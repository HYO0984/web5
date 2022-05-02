(function($){

//네비게이션
/*  $('.main-btn').mouseenter(function(){
    $('.sub').stop().slideUp(0);
    $(this).next().stop().slideDown(300);
    
    $('.main-btn').removeClass('on');
    $(this).addClass('on');

  });

  $('#nav').mouseleave(function(){
    $('.sub').stop().slideUp(300);
      $('.main-btn').removeClass('on');
    
  });
*/

//부드럽게 보이고 (fadeIn(300))
//부드럽게 사라지고(fadOut(0))

  $('.main-btn').mouseenter(function(){
    $('.sub').stop().fadeOut(0);
    $(this).next().stop().fadeIn(300);
    
    $('.main-btn').removeClass('on');
    $(this).addClass('on');

  });

  $('#nav').mouseleave(function(){
    $('.sub').stop().fadeOut(300);
    $('.main-btn').removeClass('on');
    
  });
//메인 슬라이드

let cnt=0;
const slideWrap = $('.slide-wrap');
const n = 3; //전체슬라이드 갯수
//1. 메인슬라이드 함수
function mainSlide(){
 $('.slide-wrap').animate({left: `${-100*cnt}%` }, 600, function(){
   cnt>n-1?cnt=0:cnt;
   slideWrap.animate({left: `${-100*cnt}%`}, 0);
 });
}

//2. 다음카운트 함수
function nextCount(){
  cnt++;
 mainSlide();
}


//3. 자동타이머 함수
function autoTimer(){
  setInterval(nextCount, 3000);
}
autoTimer();

//공지사항&갤러리 탭 메뉴 클릭이벤트

//갤러리버튼 클릭
$('.gallery-btn').click(function(){
  $('.notice-btn').addClass('on')
  $('.gallery-btn').addClass('on')
  $('.gallery-box').addClass('on')
  $('.notice-box').addClass('on')
});
//공지사항버튼 클릭
$('.notice-btn').click(function(){
  $('.gallery-btn').removeClass('on')
  $('.notice-btn').removeClass('on')
  $('.gallery-box').removeClass('on')
  $('.notice-box').removeClass('on')
});


//레이어팝업창
$('.link-btn').click(function(){
  $('#modal').stop().fadeIn(300)
});


$('.close-btn').click(function(){
  $('#modal').stop().fadeOut(300)
});


$('.main-btn').on({
  focusin:function(){
    $('.sub').stop().fadeOut(0);
    $(this).next().stop().fadeIn(300);

    $('.main-btn').removeClass('on');
    $(this).addClass('on');
  }
});

})(jQuery);