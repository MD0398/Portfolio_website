var config = {
    apiKey: "AIzaSyAHPWXdvinM4y8ziBp-uxN7E6IhH3fxSZk",
    authDomain: "porfoliowebsite-task5.firebaseapp.com",
    databaseURL: "https://porfoliowebsite-task5.firebaseio.com",
    projectId: "porfoliowebsite-task5",
    storageBucket: "porfoliowebsite-task5.appspot.com",
    messagingSenderId: "439114313910"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var budget = getInputVal('budget');
    var work = getInputVal('work');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, budget, email, work, message);
    
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }

  // Save message to firebase
  function saveMessage(name, budget, email, work, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      budget:budget,
      email:email,
      work:work,
      message:message
    });
    alert("contact form submited");
  }