import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loaderContainer = document.querySelector('.loader-container');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img 
            class="gallery-image" 
            src="${webformatURL}" 
            alt="${tags}" 
          />
        </a>
        <div class="info">
          <div class="info-item">
            <h2>Likes</h2>
            <p>${likes}</p>
          </div>
          <div class="info-item">
            <h2>Views</h2>
            <p>${views}</p>
          </div>
          <div class="info-item">
            <h2>Comments</h2>
            <p>${comments}</p>
          </div>
          <div class="info-item">
            <h2>Downloads</h2>
            <p>${downloads}</p>
          </div>
        </div>
      </li>`
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  loaderContainer.classList.add('is-active');
}

export function hideLoader() {
  loaderContainer.classList.remove('is-active');
}
