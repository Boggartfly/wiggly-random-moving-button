function iscat(){
    $('#result').html('<p>It\'s a cat!</p> \
    <br><a href="blindness-instruction.html">\
    Next, try with blindness simulation and without accessibility features</a>');
}
function notcat(){
    $('#result').html('<p>It\'s not a cat!</p>'); 
}
function iscatblind(){
    $('#result').html('<p>It\'s a cat!</p><br>');
}
function redirectToAccessible(){
    window.location.href = "./blindness-accessible.html";
}
function redirectFirst(){
    window.location.href = "./blindness-instruction.html";
}