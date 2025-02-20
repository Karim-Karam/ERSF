import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { getFirestore, collection, addDoc, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";


async function initFirebase() {
    try {

        const firebaseConfig = {
            apiKey: "AIzaSyD3K5SjhGah5Kg6FPCUCNC1swuRoXIFri4",
            authDomain: "errcsf-6c6f8.firebaseapp.com",
            projectId: "errcsf-6c6f8",
            storageBucket: "errcsf-6c6f8.appspot.com",
            messagingSenderId: "886725785884",
            appId: "1:886725785884:web:949360db65975e564b22d9",
            measurementId: "G-HBJZ34YW9Q"
        };

        console.log("Initializing Firebase...");
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        const db = getFirestore(app);

        console.log("Firebase initialized successfully!");

        // Store globally for debugging
        window.firebaseAuth = auth;
        window.firebaseDB = db;
    } catch (error) {
        console.error("Error initializing Firebase:", error);
    }
}

// Initialize Firebase
initFirebase();
let isSubmitting = false;
export async function submitForm(type) {
    if (isSubmitting) return; // Prevent multiple calls
    isSubmitting = true;
    if (type === 'register') {
        console.log('Registering user...');
        const email = document.getElementById('email').value; // Ensure email is retrieved from the form
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        const firstName = document.getElementById('firstName').value;
        const middleName = document.getElementById('middleName').value;
        const lastName = document.getElementById('lastName').value;
        const dateOfBirth = document.getElementById('dateOfBirth').value;
        const gender = document.getElementById('gender').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const emergencyPhoneNumber = document.getElementById('emergencyPhoneNumber').value;
        const country = document.getElementById('country').value;
        const nationality = document.getElementById('nationality').value;
        const address = document.getElementById('address').value;
        const photo = document.getElementById('photo').value;



        // Check if passwords match
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // Check password length
        if (password.length < 8) {
            alert('Password must be at least 8 characters long!');
            return;
        }

        // Check for special character using regex
        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
        if (!specialCharRegex.test(password)) {
            alert('Password must contain at least one special character!');
            return;
        }

        // Store form data
        formData.email = email;
        formData.password = password;

        // console.log('Form Data:', formData);

        try {
            // Create user with email and password
            const userCredential = await createUserWithEmailAndPassword(window.firebaseAuth, email, password);
            const user = userCredential.user;

            // Ensure all required fields are defined
            const profileData = {
                id: user.uid,
                firstName,
                middleName,
                lastName,
                dateOfBirth,
                gender,
                phoneNumber,
                email,
                emergencyPhoneNumber,
                country,
                nationality,
                address,
                photo,
                createdAt: new Date()
            };

            console.log(profileData);

            // Save user profile data to Firestore
            await setDoc(doc(window.firebaseDB, 'profile', user.uid), profileData);

            // Clear form data by setting individual properties to null
            Object.keys(formData).forEach(key => {
                formData[key] = null;
            });

            alert("Registration successful!");
            hideForm('register');
        } catch (error) {
            console.log("Error during registration:", error);
            alert(error.message);
        } finally {
            isSubmitting = false; // Reset flag after completion (success or error)
        }
    } else if (type === 'login') {
        isSubmitting = true;
        const email = document.getElementById('LoginEmail').value;
        const password = document.getElementById('LoginPassword').value;

        if (!email || !password) {
            alert('Please enter both email and password.');
            return;
        }

        try {
            // Log in the user with Firebase Authentication
            const userCredential = await signInWithEmailAndPassword(window.firebaseAuth, email, password);
            const user = userCredential.user;

            alert('Login successful!');

            console.log('User Logged In:', user);


        } catch (error) {
            console.error("Error during login:", error);
            alert(error.message);
        } finally {
            isSubmitting = false; // Reset flag after completion (success or error)
        }
    }
}

