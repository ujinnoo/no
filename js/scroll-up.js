// 요소가 화면 안에 있는지 확인하는 함수
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// 스크롤 애니메이션을 처리하는 함수
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.scroll-animation');
    elements.forEach((el) => {
        if (isElementInViewport(el)) {
            el.style.transition = 'opacity 0.7s, transform 0.7s';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        } else {
            // 화면을 벗어날 때 다시 초기 상태로 돌아감
            el.style.transition = 'opacity 0.5s, transform 0.5s';
            el.style.opacity = '0';
            el.style.transform = 'translateY(70px)';
        }
    });
}

// 스크롤 애니메이션을 트리거하는 이벤트 리스너 추가
window.addEventListener('scroll', handleScrollAnimations);

