$(function(){
    $('.chapter-slide').slick({
        dots: true, //페이지 네비게이션
        arrows:true, // next, prev 이동 버튼
        autoplay: false, // 자동 넘김 여부
        infinite: true, //반복설정
        prevArrow : "<button type='button' class='slick-prev'>Previous</button>",        
        nextArrow : "<button type='button' class='slick-next'>Next</button>", //화살표 커스텀
        slidesToShow: 1, //보여질 슬라이드 수
        slidesToScroll: 1, //넘겨질 슬라이드 수
    });
    
    $('.center').slick({
        centerMode: true,
        arrows: false,
        autoplay: true, // 자동 넘김 여부
        infinite: true, //반복설정
        pauseOnHover : false,// 마우스 hover시 슬라이드 멈춤
        speed: 500, //슬라이드 속도
        autoplaySpeed : 2500,   // 자동 넘김시 슬라이드 시간
        centerPadding: '10px',
        slidesToShow: 3,
        responsive: [
        {
            breakpoint: 768,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
            }
        }
        ]
    });
});
