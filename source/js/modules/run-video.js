const videoContainer = document.querySelector('[data-tabs="video-container"]');
const videoPoster = document.querySelector('[data-tabs="video-poster"]');
const videoButton = document.querySelector('[data-tabs="video-button"]');

const createIframe = () => {
  const iframe = document.createElement('iframe');
  iframe.src = 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1';
  iframe.width = '482';
  iframe.height = '317';
  iframe.loading = 'lazy';
  iframe.title = 'Бесплатные интерактивные онлайн-курсы.';
  iframe.allow = 'fullscreen *';
  iframe.style.display = 'block';
  videoContainer.appendChild(iframe);
};

const onClickVideoButton = () => {
  createIframe();
  videoPoster.style.display = 'none';
  videoButton.style.display = 'none';
};

const addListnerToVideoButton = () => {
  videoButton.addEventListener('click', onClickVideoButton);
};

const runVideo = () => {
  addListnerToVideoButton();
};

export {runVideo};
