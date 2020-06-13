$(document).ready( function(){
    $('#button').click(() => {
        $.get('http://numbersapi.com/' + $('#number').val(), (data, status) => {
            console.log(status);
            if($('#number').val() <= 100000 && $('#number').val() >= 0) $('#output').html(data); 
            else $('#output').html('Please enter a number between 0-100000')
        })
    })
})    