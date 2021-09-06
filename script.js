var email = document.getElementById('email')
var myText = document.getElementById('myText')

function sendMail() {
    var link = "mailto:killiandasneves4@gmail.com"
    + "?cc="
    + "&subject=" + encodeURIComponent("Demande Client")
    + "&body=" + encodeURIComponent(document.getElementById('myText').value)
    ;
    if(email.value < 1){
        alert('mettez votre email')
    }else{
        if(myText.value < 1){
            alert('mettez votre text !')
        }else{
            window.location.href = link;
        }
    } 
}

