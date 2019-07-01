function iscat(){
    $('#result').html('<p>It\'s a cat!</p> \
    <br><a href="blindness-accessible.html">\
    Next, try with blindness simulation and accessibility features</a>');
}
function notcat(){
    $('#result').html('<p>It\'s not a cat!</p>'); 
}
function iscatblind(){
    $('#result').html('<p>It\'s a cat!</p><br>');
}