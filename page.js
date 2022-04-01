const firebaseConfig = {
    apiKey: "AIzaSyBurbxvrhyAL8nRMTzuyky2wTT9PVwe440",
    authDomain: "let-s-chat-web-app-9106e.firebaseapp.com",
    projectId: "let-s-chat-web-app-9106e",
    storageBucket: "let-s-chat-web-app-9106e.appspot.com",
    messagingSenderId: "332569218586",
    appId: "1:332569218586:web:236002ea9a89f962464ba3",
    measurementId: "G-SBS3LHQSRB"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");


function updateLike (message_id){
  console.log("clicked on the like button-" + message_id);
  button_id=message_id;
  likes=document.getElementById(button_id).value;
  updated_likes=Number(likes) + 1;
  console.log(updated_likes);

  firebase.database().ref(room_name).child(message_id).update({
      like : updated_likes 
  });
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="kwitter.html";

}