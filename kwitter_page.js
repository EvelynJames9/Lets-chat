//YOUR FIREBASE LINKS
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
      
 user_name=localStorage.getItem("user_name");
 room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
 function send(){
       msg = document.getElementById("msg").value;
       firebase.database().ref(room_name).push({
             name:user_name,
             message:msg,
             like:0
       });
   document.getElementById("msg").value = ""; 
 }
