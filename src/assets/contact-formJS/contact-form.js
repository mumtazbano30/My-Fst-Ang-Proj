// function initializeContactForm() {
    
//     function validateForm() {
//         const fullName = document.getElementById('fullName').value;
//         const email = document.getElementById('email').value;
//         const contactNumber = document.getElementById('contactNumber').value;
//         const gender = document.querySelector('input[name="gender"]:checked');
//         const address = document.getElementById('address').value;

//         const fullNamePattern = /^[^0-9].*$/;
//         const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

//         const fullNameValid = fullNamePattern.test(fullName);
//         const emailValid = emailPattern.test(email);
//         const contactNumberValid = /^\d{10}$/.test(contactNumber);
//         const genderValid = gender !== null;
//         const addressValid = address.length >= 10 && address.length <= 200;

//         if (!fullNameValid) {
//             alert('Please provide a valid full name.');
//             return false;
//         } else if (!emailValid) {
//             alert('Please provide a valid email address.');
//             return false;
//         } else if (!contactNumberValid) {
//             alert('Please provide a valid contact number.');
//             return false;
//         } else if (!genderValid) {
//             alert('Please select a valid gender.');
//             return false;
//         } else if (!addressValid) {
//             alert('Please provide a valid address.');
//             return false;
//         }

//         return true;
//     }

//     function validateAndSendEmail() {
//         if (validateForm()) {
//             sendEmail();
//         }
//     }
//     function sendEmail() {
//         const fullName = document.getElementById('fullName').value;
//         const email = document.getElementById('email').value;
//         const contactNumber = document.getElementById('contactNumber').value;
//         const gender = document.querySelector('input[name="gender"]:checked').value;
//         const address = document.getElementById('address').value;

//         const emailBody = `
//             <p> Full Name: ${fullName}</p>
//             <p> Email: ${email}</p>
//             <p> Contact Number: ${contactNumber}</p>
//             <p> Gender: ${gender}</p>
//             <p> Address: ${address}</p>
//         `;
//         Email.send({
//     SecureToken : "6f2cfc56-2b30-4ebe-8f11-44da11ba45f0",
//     To : 'mumtaz1995bano@gmail.com',
//     From : "mumtaz1995bano@gmail.com",
//     Subject : "Contact Form Submission",
//     Body : emailBody,
// })
//             .then(function (_message) {
//                 alert("Mail has been sent successfully");
//                 // Clear the form fields
//                 document.getElementById('fullName').value = '';
//                 document.getElementById('email').value = '';
//                 document.getElementById('contactNumber').value = '';
//                 document.querySelector('input[name="gender"]:checked').checked = false;
//                 document.getElementById('address').value = '';
//             })
//             .catch(function (error) {
//                 alert("Error sending mail: " + error);
//             });
//     }
// }

