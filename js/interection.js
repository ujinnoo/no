const liItems = document.querySelectorAll('#vr-li li');
const img = document.querySelector('#vr-interection img');

liItems.forEach((li, index) => {
  li.addEventListener('click', () => {
    switch (index) {
      case 0:
        img.src = './img/VRImg1.gif';
        break;
      case 1:
        img.src = './img/VRImg2.gif';
        break;
      case 2:
        img.src = './img/VRImg3.gif';
        break;
      case 3:
        img.src = './img/VRImg4.gif';
        break;
      default:
        break;
    }
  });
});

const liItem = Array.from(document.querySelectorAll('#vr-li li'));

liItem.forEach(li => {
  li.addEventListener('click', () => {
    liItems.forEach(item => {
      item.classList.remove('active');
    });
    li.classList.add('active');
  });
});