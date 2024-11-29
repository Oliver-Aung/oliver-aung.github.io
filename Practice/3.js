<<<<<<< HEAD
const $demo = document.querySelector('.demo');
let processing = false;

$demo.addEventListener('click', () => {
  if (processing) return;
  let reverting = false;
  processing = true;
  const $endListener = document.createElement('div');
  $endListener.classList.add('demo-transitionend-listener');
  $demo.appendChild($endListener);
  const layoutTrigger = $demo.offsetTop;
  $demo.classList.add('s--processing');
  
  $endListener.addEventListener('transitionend', () => {
    if (reverting) return;
    reverting = true;
    $demo.classList.add('s--reverting');
  });
  
  setTimeout(() => {
    $demo.removeChild($endListener);
    $demo.classList.remove('s--processing', 's--reverting');
    processing = false;
  }, 10000);
=======
const $demo = document.querySelector('.demo');
let processing = false;

$demo.addEventListener('click', () => {
  if (processing) return;
  let reverting = false;
  processing = true;
  const $endListener = document.createElement('div');
  $endListener.classList.add('demo-transitionend-listener');
  $demo.appendChild($endListener);
  const layoutTrigger = $demo.offsetTop;
  $demo.classList.add('s--processing');
  
  $endListener.addEventListener('transitionend', () => {
    if (reverting) return;
    reverting = true;
    $demo.classList.add('s--reverting');
  });
  
  setTimeout(() => {
    $demo.removeChild($endListener);
    $demo.classList.remove('s--processing', 's--reverting');
    processing = false;
  }, 10000);
>>>>>>> 150616ff7f1e2d8c6e80e0afd73697f0d6926200
});