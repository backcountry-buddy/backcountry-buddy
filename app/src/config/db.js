import firebase from "firebase/app";
import "firebase/firebase-firestore";

// firestore instance
export const db = firebase
  .initializeApp({ projectId: "backcountry-buddy" })
  .firestore();

// Export types that exists in Firestore
// export { TimeStamp, GeoPoint } = firebase.firestore;
