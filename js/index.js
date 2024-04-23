//show/hide password
$(document).ready(function() {
    $('.hide-password').click(function() {
        var passwordField = $(this).siblings('.password');
        var passwordInputType = passwordField.attr('type');
        if (passwordInputType === 'password') {
            passwordField.attr('type', 'text');
            $(this).attr('src', '../images/show-password.svg').attr('alt', 'Show password');
        } else {
            passwordField.attr('type', 'password');
            $(this).attr('src', '../images/hide-password.svg').attr('alt', 'Hide password');
        }
    });
});




