// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getDatabase, push, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "XXXXXXX",
  appId: "XXXXXXX"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

// helper to log actions
export const logAction = (action: string) => {
  const logRef = push(ref(db, "logs"));
  set(logRef, {
    action,
    timestamp: new Date().toISOString(),
  });
};

// helper to send command
export const sendCommand = (command: string) => {
  set(ref(db, "commands"), {
    type: command,
    timestamp: new Date().toISOString(),
  });
  logAction(`Command sent: ${command}`);
};
