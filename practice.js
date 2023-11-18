
var firebaseConfig = {
  apiKey: "AIzaSyBRMaKQuJ6cQBQABO16bHj5Xy71mq2Ry-M",
  authDomain: "kwitter-1829f.firebaseapp.com",
  databaseURL: "https://kwitter-1829f-default-rtdb.firebaseio.com",
  projectId: "kwitter-1829f",
  storageBucket: "kwitter-1829f.appspot.com",
  messagingSenderId: "901320169563",
  appId: "1:901320169563:web:73d00ae5fcd5f195ee077e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function addUser() {
    user_name = document.getElementById("user_name").ariaValueMax;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
}