
import { initializeApp } from "firebase/app";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { app };

export interface UserData {
  aadhaar: string;
  name: string;
  mobile: string;
  email: string;
  district: string;
  school: string;
  pmsssId: string;
  status: string;
  gender: string; 
  dob: string;     
}

export const saveUserData = async (data: UserData): Promise<void> => {
  try {
    const pmsssId = data.pmsssId;
    const docRef = doc(db, "users", pmsssId);

   
    const dataWithoutPmsssId: Partial<UserData> = { ...data };

    
    delete dataWithoutPmsssId.pmsssId;

    

    await setDoc(docRef, dataWithoutPmsssId); 
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