document.getElementById("sampleForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // You can perform validation and further processing here
    // For example, send data to a server for processing
  
    // Display an alert with the form data
    alert(`Form submitted:\nName: ${name}\nEmail: ${email}\nPassword: ${password}`);
  });
  
