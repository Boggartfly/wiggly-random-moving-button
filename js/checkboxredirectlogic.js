function set_checked(checked,item) {
    $('input[name='+item+']').attr('checked', checked);
    if($('.box:checked').length == $('.box').length){
        window.location.href = "https://boggartfly.github.io/wiggly-random-moving-button/";
    }
}