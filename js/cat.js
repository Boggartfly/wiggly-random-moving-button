function iscat(){
    $('#result').html('<p>It\'s a cat!</p> \
    <br><a href="blindness-inaccessible.html">\
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