$('.hide-password').click(function (){
    $('#password-singIn').attr('type', 'text');
    $(this).hide();
    $('#show-password').show();
});

$('.show-password').click(function (){
    $('#password-singIn').attr('type', 'password');
    $(this).hide();
    $('#hide-password').show();
});


