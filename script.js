document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".faq-question").forEach(item => {
        item.addEventListener("click", () => {
            const answer = item.nextElementSibling;
            const toggle = item.querySelector(".toggle");

            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                toggle.textContent = "+";
            } else {
                document.querySelectorAll(".faq-answer").forEach(ans => ans.style.maxHeight = null);
                document.querySelectorAll(".toggle").forEach(tog => tog.textContent = "+");

                answer.style.maxHeight = answer.scrollHeight + "px";
                toggle.textContent = "−";
            }
        });
    });
});

 const images = [
      'pfoto/20.png',
      'pfoto/vilca.png',
      'pfoto/pipel.png',
  ];

  let currentIndex = 0;

  function showImage(index) {
      // Перевірка меж
      if (index < 0) index = images.length - 1;
      if (index >= images.length) index = 0;

      // Оновлюємо зображення в основному вікні (якщо є)
      const mainImage = document.getElementById("mainImage");
      if (mainImage) mainImage.src = images[index];

      // Оновлюємо зображення в модальному вікні
      const modalImage = document.getElementById("modalImage");
      if (modalImage) modalImage.src = images[index];

      currentIndex = index;
  }

  function prevImage() {
      showImage(currentIndex - 1);
  }

  function nextImage() {
      showImage(currentIndex + 1);
  }

  function openModal() {
      document.getElementById("myModal").style.display = "flex";
      showImage(currentIndex); // Відображає поточне зображення
  }

  function closeModal() {
      document.getElementById("myModal").style.display = "none";
  }

  // Можеш додати обробку кліку за межами контенту
  window.onclick = function(event) {
      const modal = document.getElementById("myModal");
      if (event.target === modal) {
          closeModal();
      }
  }

function openModal() {
    document.getElementById("bookingModal").style.display = "block";
}

function closeModal() {
    document.getElementById("bookingModal").style.display = "none";
}

window.onclick = function(event) {
    let modal = document.getElementById("bookingModal");
    if (event.target === modal) {
        closeModal();
    }
}