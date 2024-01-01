function sendMail() { 
    (function(){
        emailjs.init("R17Dd3ANtpLCmO3hm");
    })();
    var param =
    {
         name : document.getElementById("#name").value,
         email : document.getElementById("#email").value,
         message : document.getElementById("#message").value,
    };



const serviceID = "service_womjpvy";
const templateID = "template_htlstuk"

emailjs.send(serviceID,templateID,param)
.then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Mail Sent");
    }
)
.catch((err) => console.log(err));
}

//onsubmit="sendMail(); //reset(); //return false;"