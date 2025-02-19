// // Import Firebase modules
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
// import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

// // Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyD3K5SjhGah5Kg6FPCUCNC1swuRoXIFri4",
//     authDomain: "errcsf-6c6f8.firebaseapp.com",
//     projectId: "errcsf-6c6f8",
//     storageBucket: "errcsf-6c6f8.appspot.com",
//     messagingSenderId: "886725785884",
//     appId: "1:886725785884:web:949360db65975e564b22d9",
//     measurementId: "G-HBJZ34YW9Q"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// // Function to handle form submission
// async function submitForm(type) {
//     if (type === 'register') {
//         const password = document.getElementById('password').value;
//         const confirmPassword = document.getElementById('confirmPassword').value;

//         // Check if passwords match
//         if (password !== confirmPassword) {
//             alert('Passwords do not match!');
//             return;
//         }

//         // Check password length
//         if (password.length < 8) {
//             alert('Password must be at least 8 characters long!');
//             return;
//         }

//         // Check for special character using regex
//         const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
//         if (!specialCharRegex.test(password)) {
//             alert('Password must contain at least one special character!');
//             return;
//         }

//         // Store password if all validation passes
//         formData.password = password;

//         console.log('Form Data:', formData);

//         // Clear form data by setting individual properties to null
//         Object.keys(formData).forEach(key => {
//             formData[key] = null;
//         });
//         try {
//             // Create user with email and password
//             const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//             const user = userCredential.user;

//             // Save user profile data to Firestore
//             await addDoc(collection(db, 'profile'), {
//                 uid: user.uid,
//                 firstName: formData.firstName,
//                 middleName: formData.middleName,
//                 lastName: formData.lastName,
//                 dateOfBirth: formData.dateOfBirth,
//                 gender: formData.gender,
//                 phoneNumber: formData.phoneNumber,
//                 email: formData.email,
//                 emergencyPhoneNumber: formData.emergencyPhoneNumber,
//                 country: formData.country,
//                 nationality: formData.nationality,
//                 address: formData.address,
//                 createdAt: new Date()
//             });
//             // Clear form data by setting individual properties to null
//             Object.keys(formData).forEach(key => {
//                 formData[key] = null;
//             });
//             alert("Registration successful!");
//             hideForm('register'); // Hide the form after successful registration
//         } catch (error) {
//             console.error("Error during registration:", error);
//             alert(error.message);
//         }


//     }
//     else if (type === 'login') {
//         const email = document.getElementById('LoginEmail').value;
//         const password = document.getElementById('LoginPassword').value;

//         alert('Login successful!');

//         formData.email = email;
//         formData.password = password;

//         console.log('Form Data:', formData);

//     }

// }

