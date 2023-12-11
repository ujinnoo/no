// 로고 애니메이션
document.addEventListener("DOMContentLoaded", function() {
    // 로고 점점 작아는 애니메이션
    const img = document.querySelector("#loading img");
    img.style.transform = "scale(0.75)";
});

document.addEventListener("DOMContentLoaded", function () {
    const loading = document.querySelector("#loading");

    // 페이지 로드 시에 로딩 로고 걷히면서 올라감
    setTimeout(function () {
        loading.style.transform = "translateY(-100%)";
    }, 1800);
});

// 헤더 애니메이션
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");

    // 페이지 로드 시에 헤더가 내려옴 
    setTimeout(function () {
        header.style.transform = "translateY(0)";
    }, 2500);
});

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    let lastScrollPosition = 0;
    let isMouseOverHeader = false; // 마우스가 헤더 위에 있는지 여부를 저장할 변수

    // 스크롤에 따라 헤더가 들어가고 나옴
    window.addEventListener("scroll", function () {
        if (!isMouseOverHeader) {
            const currentScrollPosition = window.pageYOffset;

            if (currentScrollPosition > lastScrollPosition) {
                // 아래로 스크롤할 때, 헤더를 나타냄
                header.style.transform = "translateY(0)";
            } else {
                // 위로 스크롤할 때, 헤더를 숨김
                header.style.transform = "translateY(-300%)";
            }

            lastScrollPosition = currentScrollPosition;
        }
    });

    // 헤더에 마우스 호버 이벤트를 추가하여 isMouseOverHeader 값을 업데이트
    header.addEventListener("mouseenter", function () {
        isMouseOverHeader = true;
    });

    header.addEventListener("mouseleave", function () {
        isMouseOverHeader = false;
    });
});

