const firebaseConfig = {
    apiKey: "AIzaSyBurbxvrhyAL8nRMTzuyky2wTT9PVwe440",
    authDomain: "let-s-chat-web-app-9106e.firebaseapp.com",
    projectId: "let-s-chat-web-app-9106e",
    storageBucket: "let-s-chat-web-app-9106e.appspot.com",
    messagingSenderId: "332569218586",
    appId: "1:332569218586:web:236002ea9a89f962464ba3",
    measurementId: "G-SBS3LHQSRB"
  };
  user_name=localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  function addRoom(){
    window.alert("You have successfully added a new room " + "named" + "'#" + document.getElementById("room_name").value + "'") 
}
  
  function logout(){
      window.location.replace("index.html");
      window.alert("Are You Sure you want to logout.Clicking on 'Ok' will delete your account,rooms created by you.But you can still login with your username as a new user.Let's Chat Team")
  }
  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code

//End code
});});}
getData();


