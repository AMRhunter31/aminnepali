// For more, goto:
// https://www.mapbox.com/install/


function vanillaTilt(element) {
    VanillaTilt.init(document.querySelector(element), {
        max: 10,
        speed: 200,
        glare: true,
        "max-glare": 0.5,
    });
}

vanillaTilt(".info1");
vanillaTilt(".info2");
vanillaTilt(".info3");

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
});
let form_name = document.getElementById("fname");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
let submit = document.getElementById("submit");

submit.addEventListener("click", () => {
    if (
        form_name.value == "" &&
        email.value == "" &&
        subject.value == "" &&
        message.value == ""
    ) {
        alert("All fields are required");
        return;
    } else {
        submitEmail();
    }
});

function submitEmail() {
    let param = {
        method: "POST",
        from_name: form_name.value,
        from_email: email.value,
        to_name: "Amin!",
        subject: subject.value,
        message: message.value,
    };

    
    emailjs.send("service_name", "template_name", param).then(
        function (response) {
            alert("SUCCESS! " + response.status + " " + response.text);
        },
        function (error) {
            alert("FAILED... " + error);
        }
    );
}

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
});
