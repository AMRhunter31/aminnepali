const imageContainer = document.querySelector(".image-container");

for (let i = 1; i <= 10; i++) {
  const image = document.createElement("img");
  image.src = `assets/image${i}.jpg`;
  image.alt = `Image ${i}`;
  imageContainer.appendChild(image);

  image.addEventListener("mouseenter", () => {
    image.classList.add("image-hover");
  });

  image.addEventListener("mouseleave", () => {
    image.classList.remove("image-hover");
  });
}

const imagePaths = [
    "assets/image1.jpg",
    "assets/image2.jpg",
    "assets/image3.jpg",
    "assets/image4.jpg",
    "assets/image5.jpg",
    "assets/image6.jpg",
    "assets/image7.jpg",
    "assets/image8.jpg",
    "assets/image9.jpg",
    "assets/image10.jpg",
  ];
  
  const popupContainer = document.getElementById("popup-container");
  
  imagePaths.forEach((imageSrc) => {
    const image = document.createElement("img");
    image.setAttribute("src", imageSrc);
    imageContainer.appendChild(image);
  
    image.addEventListener("mouseenter", () => {
      image.classList.add("image-hover");
    });
  
    image.addEventListener("mouseleave", () => {
      image.classList.remove("image-hover");
    });
  
    // Add click event listener to each image
    image.addEventListener("click", () => {
      // Create popup element
      const popup = document.createElement("div");
      popup.classList.add("popup");
  
      // Create image element inside popup
      const popupImage = document.createElement("img");
      popupImage.setAttribute("src", imageSrc);
      popup.appendChild(popupImage);
  
      // Create close button inside popup
      const closeButton = document.createElement("button");
      closeButton.innerText = "Close";
      closeButton.addEventListener("click", () => {
        popupContainer.removeChild(popup);
      });
      popup.appendChild(closeButton);
  
      // Append popup to popup container
      popupContainer.appendChild(popup);
    });
  });


// Fetch list of images from server
fetch("path/to/image/list")
  .then((response) => response.json())
  .then((data) => {
    // Loop through each image URL
    data.forEach((imageSrc) => {
      // Create image element
      const image = document.createElement("img");
      image.setAttribute("src", imageSrc);
      imageContainer.appendChild(image);

      image.addEventListener("mouseenter", () => {
        image.classList.add("image-hover");
      });

      image.addEventListener("mouseleave", () => {
        image.classList.remove("image-hover");
      });

      // Add click event listener to each image
      image.addEventListener("click", () => {
        // Create popup element
        const popup = document.createElement("div");
        popup.classList.add("popup");

        // Create image element inside popup
        const popupImage = document.createElement("img");
        popupImage.setAttribute("src", imageSrc);
        popup.appendChild(popupImage);

        // Create close button inside popup
        const closeButton = document.createElement("button");
        closeButton.innerText = "Close";
        closeButton.addEventListener("click", () => {
          popupContainer.removeChild(popup);
        });
        popup.appendChild(closeButton);

        // Append popup to popup container
        popupContainer.appendChild(popup);
      });
    });
  })
  .catch((error) => console.error(error));

  