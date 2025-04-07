


export interface UserData {
    aadhaar: string;
    name: string;
    mobile: string;
    email: string;
  }
  

  declare module '../firebase' {
    export function saveUserData(data: UserData): Promise<void>;
    export function uploadFile(file: File, userId: string, fieldName: string): Promise<string | undefined>;
  }
  