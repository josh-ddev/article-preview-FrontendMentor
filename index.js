let shareIcon = document.getElementById('share-icon');
let tabHover = document.querySelector('.tab-hover');
let articleInfo = document.querySelector('.share');
let body = document.querySelector('body');
shareIcon.addEventListener('mouseover', e => {
  tabHover.classList.remove('hidden');
  tabHover.classList.add('hove');
});

shareIcon.addEventListener('mouseout', e => {
  tabHover.classList.add('hidden');
  tabHover.classList.remove('hove');
});

if (window.innerWidth < 767) {
  shareIcon.addEventListener('mouseover', e => {
    articleInfo.classList.add('hidden');
    tabHover.style.visibility = 'visible';
    tabHover.insertAdjacentHTML(
      'beforeend',
      '<li><img src="images/icon-share.svg" alt="" /></li>'
    );
    tabHover.classList.add('hove');
    shareIcon.style.padding = '2rem';
  });
}
