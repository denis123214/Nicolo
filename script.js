function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
        closeModal();
    }
}
const images = [
    'foto/20.png', 
    'foto/nen.png',
    'foto/20.png',
    'foto/nen.png',
    'foto/20.png'
];
let currentIndex = 0;


function showImage(index) {
    const mainImage = document.getElementById("mainImage");
    mainImage.src = images[index];
}


function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}


function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}
const toggleButton = document.getElementById('toggleButton');
  const content = document.getElementById('content');

  toggleButton.addEventListener('click', () => {
    const isHidden = content.style.display === 'none';

  
    content.style.display = isHidden ? 'block' : 'none';

   
    toggleButton.textContent = isHidden ? '-' : '+';
  });
 
