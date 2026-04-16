import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

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
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}