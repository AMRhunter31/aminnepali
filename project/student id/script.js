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
      phoneNumber: "98xxxxxxxx "
    },
    {
      rollNumber: 4,
      name: "abhishek khawas ",
      address: "Address of Student ",
      phoneNumber: "98xxxxxxxx "
    },
    {
      rollNumber: 5,
      name: "data not exist ",
      address: "data not exist ",
      phoneNumber: "98xxxxxxxx "
    },
    {
      rollNumber: 6,
      name: "Student ",
      address: "Address of Student ",
      phoneNumber: "98xxxxxxxx"
    },
    {
      rollNumber: 7,
      name: "Aliza Shrestha",
      address: "Address of Student ",
      phoneNumber: "98xxxxxxxx "
    },
    {
      rollNumber: 8,
      name: "Puja Shah ",
      address: "Address of Student ",
      phoneNumber: "98xxxxxxxx "
    },
    {
      rollNumber: 9,
      name: "Bandika Poudel ",
      address: "Bhaunne",
      phoneNumber: "98xxxxxxxx "
    },
    {
      rollNumber: 10,
      name: "Aaswasan Khadka ",
      address: "Address of Student ",
      phoneNumber: "98xxxxxxxx  "
    },
    {
      rollNumber: 11,
      name: "data not exist ",
      address: "data not exist",
      phoneNumber: "Phone Number  "
    },
    {
      rollNumber: 12,
      name: "Nirajan Subedi ",
      address: "data not exist ",
      phoneNumber: "98xxxxxxxx "
    },
    {
      rollNumber: 13,
      name: "Indira Baniya ",
      address: "Nalbari ",
      phoneNumber: "98xxxxxxxx "
    },
    {
      rollNumber: 14,
      name: "data not exist ",
      address: "data not exist ",
      phoneNumber: "data not exist "
    },
    {
      rollNumber: 15,
      name: "sujan khadka ",
      address: "data not exist ",
      phoneNumber: "98xxxxxxxx "
    },
    {
      rollNumber: 16,
      name: "Asish Ojha ",
      address: "data not exist ",
      phoneNumber: "98xxxxxxxx "
    },
    {
      rollNumber: 17,
      name: "Simran Tamang ",
      address: "data not exist ",
      phoneNumber: "98xxxxxxxx "
    },
    {
      rollNumber: 18,
      name: "Darpan Limbu",
      address: "Sankhuwasabha",
      phoneNumber: "9842221301"
    },
    {
      rollNumber: 19,
      name: "Ayush Thapa ",
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
      name: "Shankar Khawas ",
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
      name: "Nikhil Poudel ",
      address: "data not exist ",
      phoneNumber: "98xxxxxxxxx"
    },
    {
      rollNumber: 24,
      name: "data not exist ",
      address: "data not exist ",
      phoneNumber: "data not exist "
    },
    {
      rollNumber: 25,
      name: "data not exist ",
      address: "data not exist ",
      phoneNumber: "data not exist "
    },
    {
      rollNumber: 26,
      name: "data not exist ",
      address: "data not exist ",
      phoneNumber: "data not exist "
    },

    {
      rollNumber: 27,
      name: "Gayatri Bhagat ",
      address: "Kaseni ",
      phoneNumber: "9814331944 "
    },
    {
      rollNumber: 28,
      name: "Student ",
      address: "data not exist ",
      phoneNumber: "data not exist "
    },
    {
      rollNumber: 29,
      name: "Ajay  ",
      address: "data not exist ",
      phoneNumber: "data not exist "
    },
    {
      rollNumber: 30,
      name: "kamalmani Dahal ",
      address: "data not exist",
      phoneNumber: "data not exist "
    },
    {
      rollNumber: 31,
      name: "data not exist ",
      address: "data not exist ",
      phoneNumber: "data not exist "
    },
    {
      rollNumber: 32,
      name: "data not exist ",
      address: "Address of Student ",
      phoneNumber: "data not exist "
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