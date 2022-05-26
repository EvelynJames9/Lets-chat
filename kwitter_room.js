
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyALFFtGroML7E8v8ruwDpP3InxIOsbIsws",
      authDomain: "lets-chat-web-app-2c21b.firebaseapp.com",
      databaseURL: "https://lets-chat-web-app-2c21b-default-rtdb.firebaseio.com",
      projectId: "lets-chat-web-app-2c21b",
      storageBucket: "lets-chat-web-app-2c21b.appspot.com",
      messagingSenderId: "514546984306",
      appId: "1:514546984306:web:9497579f80a00f8ed1e9eb"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
