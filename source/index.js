const $sCarouselItems = document.querySelectorAll('.mini-car .content span');
let $index = 0;

const renderItems = () => {
  for (let i = 0; i < $sCarouselItems.length; i++) {
    $sCarouselItems[i].style.display = 'none';
  }
  $sCarouselItems[$index].style.display = 'block';
}

renderItems();

document.querySelector('.chevRight').addEventListener('click', ()=> {
  if ($index == $sCarouselItems.length - 1) {
    $index = 0;
  } else {
    $index++;
  }

  renderItems();
});

document.querySelector('.chevLeft').addEventListener('click', ()=> {
  if ($index == 0) {
    $index = $sCarouselItems.length - 1;
  } else {
    $index--;
  }

  renderItems()
});

