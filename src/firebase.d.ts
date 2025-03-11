// src/firebase.d.ts

// Define types for user data
export interface UserData {
    aadhaar: string;
    name: string;
    mobile: string;
    email: string;
  }
  
  // Declare the module and its functions with specific types
  declare module '../firebase' {
    export function saveUserData(data: UserData): Promise<void>;
    export function uploadFile(file: File, userId: string, fieldName: string): Promise<string | undefined>;
  }
  