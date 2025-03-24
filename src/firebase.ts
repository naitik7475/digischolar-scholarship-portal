// src/firebase.ts

import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getFirestore, setDoc } from "firebase/firestore"; // Import doc and setDoc
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "PROJECT_ID",
  storageBucket: "STORAGE_BUCKET",
  messagingSenderId: "SENDERID",
  appId: "APPID",
  measurementId: "G-MEASUREMENTID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Storage
const db = getFirestore(app);
const storage = getStorage(app);

// Type definition for User Data (for registration - not directly related to document upload)
export interface UserData {
  aadhaar: string;
  name: string;
  mobile: string;
  email: string;
  district: string;
  school: string;
  pmsssId: string; // Although pmsssId is here, it's likely generated during document upload, not registration
}

// Function to save user data in Firestore (for registration - not directly related to document upload)
export const saveUserData = async (data: UserData): Promise<void> => {
  try {
    const docRef = await addDoc(collection(db, "users"), data); // Add document to Firestore
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e; // Re-throw the error to handle it in the calling function
  }
};

// Function to upload a file to Firebase Storage
export const uploadFile = async (
  file: File,
  userId: string,
  fieldName: string
): Promise<string | undefined> => { // Return type is string | undefined as in your original code
  const storageRef = ref(storage, `documents/${userId}/${fieldName}/${file.name}`); // Define the storage path

  try {
    const snapshot = await uploadBytes(storageRef, file); // Upload file to Firebase Storage
    console.log("Uploaded file successfully: ", snapshot);

    // Retrieve the file's URL
    const fileURL = await getDownloadURL(snapshot.ref);
    return fileURL; // Return the file URL after upload
  } catch (e) {
    console.error("Error uploading file: ", e);
    throw e; // Re-throw the error to handle it in the calling function
  }
};

// Function to save application data to Firestore (for document upload and confirmation)
export const saveApplicationData = async (userId: string, pmsssId: string, fileURLs: Record<string, string>): Promise<void> => {
  try {
    const applicationDocRef = doc(db, 'applications', userId); // Document path in Firestore - using 'applications' collection
    await setDoc(applicationDocRef, {
      pmsssId: pmsssId,
      fileURLs: fileURLs,
      userId: userId,
      submissionDate: new Date(),
      // ... you can add other application data here if needed
    });
    console.log("Application data saved to Firestore successfully!");
  } catch (error) {
    console.error("Error saving application data to Firestore:", error);
    throw error; // Re-throw error for handling in component
  }
};