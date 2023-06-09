var studentData = [
    {
      rollNumber: 1,
      name: "Anu Bhandari",
      address: "Sundarharaincha,Biratchowk",
      phoneNumber: "98xxxxxxxx "
    },
    {
      rollNumber: 2,
      name: "Sugam Pokhrel",
      address: "Bhairahawa ",
      phoneNumber: "98xxxxxxxx"
    },
    {
      rollNumber: 3,
      name: "Aashutosh Khatiwada",
      address: "Address of Student ",
      phoneNumber: "Phone Number of Student "
    },
    {
      rollNumber: 4,
      name: "Student ",
      address: "Address of Student ",
      phoneNumber: "Phone Number of Student "
    },
    {
      rollNumber: 5,
      name: "Student ",
      address: "Address of Student ",
      phoneNumber: "Phone Number of Student "
    },
    {
      rollNumber: 6,
      name: "Student ",
      address: "Address of Student ",
      phoneNumber: "Phone Number of Student "
    },
    {
      rollNumber: 7,
      name: "Student ",
      address: "Address of Student ",
      phoneNumber: "Phone Number of Student "
    },
    {
      rollNumber: 8,
      name: "Student ",
      address: "Address of Student ",
      phoneNumber: "Phone Number of Student "
    },
    {
      rollNumber: 9,
      name: "Student ",
      address: "Address of Student ",
      phoneNumber: "Phone Number of Student "
    },
    {
      rollNumber: 10,
      name: "Student ",
      address: "Address of Student ",
      phoneNumber: "Phone Number of Student "
    },
    {
      rollNumber: 11,
      name: "Student ",
      address: "Address of Student ",
      phoneNumber: "Phone Number of Student "
    },
    {
      rollNumber: 12,
      name: "Student ",
      address: "Address of Student ",
      phoneNumber: "Phone Number of Student "
    },
    {
      rollNumber: 13,
      name: "Student ",
      address: "Address of Student ",
      phoneNumber: "Phone Number of Student "
    },
    {
      rollNumber: 14,
      name: "Student ",
      address: "Address of Student ",
      phoneNumber: "Phone Number of Student "
    },
    {
      rollNumber: 15,
      name: "Student ",
      address: "Address of Student ",
      phoneNumber: "Phone Number of Student "
    },
    {
      rollNumber: 16,
      name: "Student ",
      address: "Address of Student ",
      phoneNumber: "Phone Number of Student "
    },
    {
      rollNumber: 17,
      name: "Student ",
      address: "Address of Student ",
      phoneNumber: "Phone Number of Student "
    },
    {
      rollNumber: 18,
      name: "Darpan Limbu",
      address: "Sankhuwasabha",
      phoneNumber: "9842221301"
    },
    {
      rollNumber: 19,
      name: "Student ",
      address: "Address of Student ",
      phoneNumber: "Phone Number of Student "
    },
    {
      rollNumber: 20,
      name: "Subash Giri",
      address: "Bhojpur",
      phoneNumber: "9824997755"
    },
    {
      rollNumber: 21,
      name: "Student ",
      address: "Address of Student ",
      phoneNumber: "Phone Number of Student "
    },
    {
      rollNumber: 22,
      name: "Amin Nepali",
      address: "Belbari",
      phoneNumber: "9811003628"
    },
    {
      rollNumber: 23,
      name: "Student ",
      address: "Address of Student ",
      phoneNumber: "Phone Number of Student "
    },
    {
      rollNumber: 24,
      name: "Student ",
      address: "Address of Student ",
      phoneNumber: "Phone Number of Student "
    },
    {
      rollNumber: 25,
      name: "Student ",
      address: "Address of Student ",
      phoneNumber: "Phone Number of Student "
    },

    // Add the remaining student data here
  ];
  
  function searchStudent() {
    var rollNumber = parseInt(document.getElementById("rollNumber").value);
    var studentCard = document.getElementById("studentCard");
    studentCard.innerHTML = "";

    var student = studentData.find(function(student) {
      return student.rollNumber === rollNumber;
    });

    if (student) {
      var imgPath = "images/" + rollNumber + ".jpg";
      var name = student.name;
      var address = student.address;
      var phoneNumber = student.phoneNumber;

      var img = document.createElement("img");
      img.src = imgPath;
      
      var details = document.createElement("div");
      details.classList.add("details");
      
      var nameParagraph = document.createElement("p");
      nameParagraph.innerHTML = "<strong>Name:</strong> " + name;
      details.appendChild(nameParagraph);
      
      var addressParagraph = document.createElement("p");
      addressParagraph.innerHTML = "<strong>Address:</strong> " + address;
      details.appendChild(addressParagraph);
      
      var phoneNumberParagraph = document.createElement("p");
      phoneNumberParagraph.innerHTML = "<strong>Phone Number:</strong> " + phoneNumber;
      details.appendChild(phoneNumberParagraph);
      
      studentCard.appendChild(img);
      studentCard.appendChild(details);
    } else {
      var notFoundMsg = document.createElement("p");
      notFoundMsg.innerHTML = "Student not found!";
      studentCard.appendChild(notFoundMsg);
    }
  }