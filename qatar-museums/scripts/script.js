console.log('\n %cMade with %c♥%c by Yamen \n', 'font: 16px serif;', 'font: 13px serif; color: #f00;', 'font: 16px serif;')
function filterImages(category) {
  const images = document.querySelectorAll('#photo-gallery img');    
  images.forEach(img => {
    const imgCategory = img.getAttribute('data-category');
    console.log(`Image category: ${imgCategory}`);    
    if (category === 'all' || imgCategory === category) {
      img.style.filter = 'brightness(100%)';     
    } else {
      img.style.filter = 'brightness(50%)';     
    }
  });
}



document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('photo-gallery');

  const baseImages = [
    'assets/photos/qatar-mus-1.jpg',
    'assets/photos/qatar-mus-2.jpg',
    'assets/photos/qatar-mus-3.jpg',
    'assets/photos/qatar-mus-4.jpg',
    'assets/photos/qatar-mus-5.jpg',
    'assets/photos/qatar-mus-6.jpg',
    'assets/photos/qatar-mus-7.jpg',
    'assets/photos/qatar-mus-8.jpg',
    'assets/photos/qatar-mus-9.jpg',
    'assets/photos/qatar-mus-10.jpg'
  ];
        // random size
  function addImages(direction = 'all') {
    for (let i = 0; i < 30; i++) { 
      const img = document.createElement('img');
      img.src = baseImages[Math.floor(Math.random() * baseImages.length)];
      img.alt = `Image ${i + 1}`;
      img.style.gridRowEnd = `span ${Math.ceil(Math.random() * 2)}`;
      if (direction === 'top') {
        gallery.prepend(img); 
      } else if (direction === 'left') {
        const rows = gallery.querySelectorAll('.gallery-row');
        rows.forEach(row => {
          const newImg = img.cloneNode(true);
          row.prepend(newImg); 
        });
      } else if (direction === 'right') {
        const rows = gallery.querySelectorAll('.gallery-row');
        rows.forEach(row => {
          const newImg = img.cloneNode(true);
          row.appendChild(newImg);  
        });
      } else if (direction === 'bottom') {
        gallery.appendChild(img); 
      } else {
        gallery.appendChild(img); 
      }
    }
  }

  function initializeGallery() {
    for (let i = 0; i < 50; i++) {
      addImages();
    }
  }

  initializeGallery();

  const scrollContainer = document.querySelector('.scroll-container');
  setTimeout(() => {
    scrollContainer.scrollTo(
      scrollContainer.scrollWidth / 2 - scrollContainer.clientWidth / 2,
      scrollContainer.scrollHeight / 2 - scrollContainer.clientHeight / 2
    );
  }, 100);

  scrollContainer.addEventListener('scroll', () => {
    if (scrollContainer.scrollTop <= 200) {
      addImages('top');
    }
    if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight - 200) {
      addImages('bottom'); 
    }
    if (scrollContainer.scrollLeft <= 200) {
      addImages('left');  
    }
    if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 200) {
      addImages('right');     
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const sideMenu = document.getElementById('side-menu');

  hamburgerMenu.addEventListener('click', () => {
    sideMenu.classList.toggle('open');
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const sideMenu = document.getElementById('side-menu');
  const closeBtn = document.getElementById('close-btn');

  hamburgerMenu.addEventListener('click', () => {
    sideMenu.classList.add('open');
  });

  closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('open');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const ticketButton = document.getElementById('ticket-button');

  if (window.location.pathname.includes('tickets.html')) {
    ticketButton.style.backgroundColor = 'red';  
    ticketButton.style.color = 'white';    
  }
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

console.log('\n %cMade with %c♥%c by Yamen \n', 'font: 16px serif;', 'font: 13px serif; color: #f00;', 'font: 16px serif;')
