//ADD YOUR FIREBASE LINKS HERE
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

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirectToRoomName(this.id)' > #" + Room_names + " </div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}