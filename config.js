import * as firebase from 'firebase';
const firebaseConfig = {
  databaseURL: "https://aconceptaday.firebaseio.com/"
};
export const firebaseApp = firebase.initializeApp(firebaseConfig);
