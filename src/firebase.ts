// src/firebase.ts

import { initializeApp } from "firebase/app";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBhxm9igIyBCbuuA7MzDMdgrIsEdWI-EyA",
  authDomain: "digischolar-b7138.firebaseapp.com",
  projectId: "digischolar-b7138",
  storageBucket: "digischolar-b7138.firebasestorage.app",
  messagingSenderId: "897820565743",
  appId: "1:897820565743:web:a74398241dbaf483f63b1a",
  measurementId: "G-WH6ZZF3MQX"
};

const app = initializeApp(firebaseConfig);  // Initialize Firebase app
const db = getFirestore(app);
const storage = getStorage(app);

export { app }; // Export the Firebase app instance

export interface UserData {
  aadhaar: string;
  name: string;
  mobile: string;
  email: string;
  district: string;
  school: string;
  pmsssId: string;
  status: string;
}

export const saveUserData = async (data: UserData): Promise<void> => {
  try {
    const pmsssId = data.pmsssId;
    const docRef = doc(db, "users", pmsssId);

    // Create a copy where pmsssId is optional
    const dataWithoutPmsssId: Partial<UserData> = { ...data };

    // Now it's safe to delete
    delete dataWithoutPmsssId.pmsssId;

    const dataWithStatus = { ...dataWithoutPmsssId, status: "Application Submitted" };

    await setDoc(docRef, dataWithStatus);
    console.log("Document written with ID: ", pmsssId);
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
};

export const uploadFile = async (
  file: File,
  userId: string,
  fieldName: string
): Promise<string | undefined> => {
  const storageRef = ref(storage, `documents/${userId}/${fieldName}/${file.name}`);

  try {
    const snapshot = await uploadBytes(storageRef, file);
    console.log("Uploaded file successfully: ", snapshot);

    const fileURL = await getDownloadURL(snapshot.ref);
    return fileURL;
  } catch (e) {
    console.error("Error uploading file: ", e);
    throw e;
  }
};

export const saveApplicationData = async (userId: string, pmsssId: string, fileURLs: Record<string, string>): Promise<void> => {
  try {
    const applicationDocRef = doc(db, 'applications', userId);
    await setDoc(applicationDocRef, {
      pmsssId: pmsssId,
      fileURLs: fileURLs,
      userId: userId,
      submissionDate: new Date(),
    });
    console.log("Application data saved to Firestore successfully!");
  } catch (error) {
    console.error("Error saving application data to Firestore:", error);
    throw error;
  }
};