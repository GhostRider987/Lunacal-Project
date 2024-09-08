 // Hide loader and show content once DOM is fully loaded
 document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");
  
    loader.style.display = "flex";
    content.style.display = "none";
  
    setTimeout(function() {
      loader.style.display = "none";  
      content.style.display = "block"; 
    }, 500); 
  });

const tabButtons = document.querySelectorAll('.tab-button');
const tabContent = document.querySelector('.tab-content');
  
    // Content for each tab
    const content = {
      "about-me": `
        <p>Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.</p>
        <p>I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4 year old twin daughters - Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM.</p>
      `,
      "experiences": `
        <p>I've worked in sales for over a decade. I started my career as a junior sales executive and slowly worked my way up. Over the years, I've gathered valuable experience working with large enterprises as well as small businesses.</p>
        <p>In Salesforce, I've specialized in cloud-based solutions for the last 3 years, helping clients optimize their CRM strategies.</p>
      `,
      "recommended": `
        <p>Here are some recommendations from my clients:</p>
        <ul>
          <li>"Dave helped us transition to Salesforce seamlessly.</li>
          <li>"Highly recommended!" - Client A"</li>
          <li>"Amazing support and guidance throughout the project."</li>
          <li> - Client B</li>
          <li>"Thanks to Dave, our sales have increased by 30%!" - Client C</li>
        </ul>
      `
    };
  
    // Load "About Me" content by default
    tabContent.innerHTML = content['about-me'];
  
    // Event listener for tab buttons
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
  
        // Add 'active' class to the clicked button
        button.classList.add('active');
  
        // Update the content in the .tab-content div
        const selectedTab = button.id;
        tabContent.innerHTML = content[selectedTab];
      });
    });


    const addImageButton = document.getElementById('add-image-button');
  const galleryImages = document.querySelector('.gallery-images');
  const imageModal = document.getElementById('image-modal');
  const uploadBtn = document.getElementById('upload-btn');
  const closeBtn = document.getElementById('close-btn');
  const imageUploadInput = document.getElementById('image-upload');
  
  const leftArrow = document.getElementById('left-arrow');
  const rightArrow = document.getElementById('right-arrow');
  const galleryImagesContainer = document.querySelector('.gallery-images-container');

  // Function to load images from localStorage
  const loadImagesFromStorage = () => {
    const storedImages = JSON.parse(localStorage.getItem('galleryImages')) || [];
    storedImages.forEach(src => {
      const newImage = document.createElement('img');
      newImage.src = src;
      newImage.alt = 'Gallery Image';
      newImage.className = 'gallery-item w-32 h-32 object-cover rounded';
      galleryImages.appendChild(newImage);
    });
  };

  // Show the image modal when "Add Image" button is clicked
  addImageButton.addEventListener('click', () => {
    imageModal.classList.remove('hidden');
  });

  // Add a new image when "Upload" button is clicked
  uploadBtn.addEventListener('click', () => {
    const file = imageUploadInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(event) {
        const newImageSrc = event.target.result;
        
        // Create new image element
        const newImage = document.createElement('img');
        newImage.src = newImageSrc;
        newImage.alt = 'New Gallery Image';
        newImage.className = 'gallery-item w-32 h-32 object-cover rounded';
        
        // Append the new image to the gallery
        galleryImages.appendChild(newImage);
        
        // Store the image in localStorage
        const storedImages = JSON.parse(localStorage.getItem('galleryImages')) || [];
        storedImages.push(newImageSrc);
        localStorage.setItem('galleryImages', JSON.stringify(storedImages));
        
        // Hide the modal after uploading
        imageModal.classList.add('hidden');
      };
      reader.readAsDataURL(file);
    }
  });

  // Close the modal
  closeBtn.addEventListener('click', () => {
    imageModal.classList.add('hidden');
  });

  // Function to scroll the gallery to the left
  leftArrow.addEventListener('click', () => {
    galleryImagesContainer.scrollBy({
      left: -150,  // Scroll 150px to the left
      behavior: 'smooth'
    });
  });

  // Function to scroll the gallery to the right
  rightArrow.addEventListener('click', () => {
    galleryImagesContainer.scrollBy({
      left: 150,  // Scroll 150px to the right
      behavior: 'smooth'
    });
  });

  // Load the gallery images from localStorage when the page loads
  window.addEventListener('DOMContentLoaded', loadImagesFromStorage);