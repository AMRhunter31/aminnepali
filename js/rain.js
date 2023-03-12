// Get the canvas element and 2D context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set the canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight / 2;

// Set the size of each column and the number of columns
const colSize = 14;
const numCols = canvas.width / colSize;

// Define the characters to use in the rain
const chars = "0123456789";

// Define an array to store the raindrops
const drops = [];

// Initialize the raindrops array with random values
for (let i = 0; i < numCols; i++) {
  drops[i] = Math.random() * (canvas.height / 2);
}

// Define the function to update the canvas
function update() {
  
  // Clear the canvas
  ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Set the font style and color for the raindrops
  ctx.fillStyle = "#0f0";
  ctx.font = "15px monospace";

  // Loop through the columns and draw the raindrops
  for (let i = 0; i < numCols; i++) {
    // Get the character to use for this raindrop
    const char = chars[Math.floor(Math.random() * chars.length)];

    // Calculate the position of the raindrop
    const x = i * colSize;
    const y = drops[i] * colSize;

    // Draw the raindrop
    ctx.fillText(char, x, y);

    // Increment the y position of the raindrop
drops[i] += 0.5; // change the value to 0.5 or 0.2 to slow down the speed

// Reset the y position of the raindrop if it goes off the screen
if (drops[i] * colSize > canvas.height / 2 && Math.random() > 0.95) {
  drops[i] = 0;
}
  }

  // Request another animation frame
  requestAnimationFrame(update);
}

// Call the update function to start the animation
update();

// Get the login form and profile container elements
const loginForm = document.getElementById("login-form");
const profileContainer = document.getElementById("profile-container");

// Add an event listener to the login form
loginForm.addEventListener("submit", (event) => {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the username and password from the form
  const username = loginForm.elements.username.value;
  const password = loginForm.elements.password.value;

  // Check if the username and password are correct
  if (username === "amin" && password === "nepali") {
    // Hide the login container and show the profile container
    document.getElementById("login-container").style.display = "none";
    profileContainer.style.display = "block";
  } else {
    // Display an error message
    alert("Incorrect username or password. Please try again.");
  }
});



const cvcontainer = document.getElementById("cv-container");
document.getElementById("see-cv").addEventListener("click", function() {
  
  document.getElementById("profile-container").style.display = "none";
    cvcontainer.style.display = "block";
});

var downloadButton = document.getElementById("download-button");
  var downloadFormat = document.getElementById("download-format");

  // Add a click event listener to the download button
  downloadButton.addEventListener("click", function() {
    // Get the "cv-container" element
    var cvContainer = document.getElementById("cv-container");

    // Use html2canvas to create a canvas from the "cv-container" element
    html2canvas(cvContainer).then(function(canvas) {
      // Create a new jsPDF instance based on the selected format
      var pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: downloadFormat.value
      });

      // Add the canvas image as a new page to the PDF document
      pdf.addImage(canvas.toDataURL("image/" + downloadFormat.value), "PNG", 0, 0);

      // Save the PDF or PNG file
      pdf.save("cv." + downloadFormat.value);
    });
  });