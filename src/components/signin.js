import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth } from '@/firebase';
import { getDatabase, ref, set } from 'firebase/database';


// 🔧 Google Sign-In Config
GoogleSignin.configure({
  webClientId: '824998733194-l7gimd0ku97b19msqdo8ni3f4chqeb1e.apps.googleusercontent.com',
  scopes: ['profile', 'email'],
  offlineAccess: true,
});

export const signInWithGoogle = async () => {
  try {
    console.log("🧪 Checking Google Play Services...");
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

    console.log("🔄 Signing out previous session...");
    await GoogleSignin.signOut();

    console.log("🟢 Initiating Sign-In...");
    const userInfo = await GoogleSignin.signIn();

    const idToken = userInfo.data?.idToken;

    if (!idToken) {
      throw new Error("Google Sign-In failed: No ID Token returned.");
    }

    const googleCredential = GoogleAuthProvider.credential(idToken);
    const userCredential = await signInWithCredential(auth, googleCredential);


    // ✅ Return user details
    return {
      uid: userCredential.user.uid,
      displayName: userCredential.user.displayName || userInfo.user.name,
      email: userCredential.user.email || userInfo.user.email,
      photoURL: userCredential.user.photoURL || userInfo.user.photo,
    };

  } catch (error) {
    console.error("❌ Google Sign-In Error:", error.code, error.message);
    throw error;
  }
};
