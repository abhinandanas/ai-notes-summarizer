import { create } from "zustand";
import { auth } from "../app/lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

const useAuthStore = create((set) => ({
  user: null,
  loading: true,

  //Register
  register: async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      set({ user: userCredential.user });
    } catch (error) {
      throw error;
    }
  },

  //Login
  login: async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      set({ user: userCredential.user });
    } catch (error) {
      throw error;
    }
  },

  //Logout
  logout: async () => {
    await signOut(auth);
    set({ user: null });
  },

  // Listen to Firebase auth state
  listenToAuth: () => {
    onAuthStateChanged(auth, (user) => {
      set({ user, loading: false });
    });
  }
}));

export default useAuthStore;
