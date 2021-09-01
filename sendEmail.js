const send=document.querySelector("#send");
 let yourEmail=document.querySelector("#yourEmail");
    let password=document.querySelector("#password");
    let subject=document.querySelector("#subject");
    let content=document.querySelector("#content");
send.addEventListener('click',() => {
    console.log(yourEmail.value);
    console.log(password.value);
    console.log(subject.value);
    console.log(content.value);

    sendEmail();
});
function sendEmail() {
    Email.send({
      Host: "smtp.gmail.com",
      Username: yourEmail.value,
      Password: password.value,
      To: 'balc_horia@yahoo.com',
      From: yourEmail.value,
      Subject: subject.value,
      Body: content.value,
      
    })
      .then(function (message) {
        alert("mail sent successfully")
      });
  }