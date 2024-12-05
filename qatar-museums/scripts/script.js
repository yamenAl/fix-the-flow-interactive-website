function approach1Fn(className) {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
      if (box.classList.contains(className)) {
          box.style.filter = 'none'; 
      } else {
          box.style.filter = 'brightness(50%)'; 
      }
  });
}

function showFn() {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
      box.style.filter = 'none'; 
  });
}

const scrollContainer = document.querySelector('.scroll-container');
const grid = document.querySelector('.grid');
let isDragging = false;
let startX, startY;
let scrollLeft, scrollTop;

function duplicateImages() {
  const images = document.querySelectorAll('.grid img');
  images.forEach(image => {
    const clone = image.cloneNode(true);
    grid.appendChild(clone);
  });
}

// Duplicate images 
for (let i = 0; i < 10; i++) {
  duplicateImages();
}

// Drag to scroll 
scrollContainer.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX - scrollContainer.offsetLeft;
  startY = e.pageY - scrollContainer.offsetTop;
  scrollLeft = scrollContainer.scrollLeft;
  scrollTop = scrollContainer.scrollTop;
  e.preventDefault();
});
scrollContainer.addEventListener('mouseleave', () => {
  isDragging = false;
});
scrollContainer.addEventListener('mouseup', () => {
  isDragging = false;
});
scrollContainer.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - scrollContainer.offsetLeft;
  const y = e.pageY - scrollContainer.offsetTop;
  const walkX = (x - startX) * 2; // Increase scroll speed 
  const walkY = (y - startY) * 2;
  scrollContainer.scrollLeft = scrollLeft - walkX;
  scrollContainer.scrollTop = scrollTop - walkY;
});
/*test*/
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.grid img'); // Select all images
  const popup = document.getElementById('popup'); // Popup container
  const popupImage = document.getElementById('popup-image'); // Popup image element
  const popupText = document.getElementById('popup-text'); // Popup description
  const closePopup = document.getElementById('close-popup'); // Close button

  // Hide popup initially
  popup.style.display = 'none';

  // Show popup when an image is clicked
  images.forEach(image => {
    image.addEventListener('click', () => {
      const description = image.getAttribute('data-description') || 'No description available';
      const imageUrl = image.getAttribute('src');

      popupImage.src = imageUrl; // Set popup image
      popupText.textContent = description; // Set popup description
      popup.style.display = 'flex';                       
    });
  });

  // Hide popup when clicking the close button
  closePopup.addEventListener('click', () => {
    popup.style.display = 'none'; 
  });


});
//workshop 4-12
let showMoreButton = document.querySelector('.all-objects');
showMoreButton.addEventListener('click', function() {
    alert('Het werkt!');
});