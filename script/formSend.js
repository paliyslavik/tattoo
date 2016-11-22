$(document).ready(function () {
        $("#menu").on("click", "a", function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                    top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });

        //Form send
        $('form[name="sendmessage"]').submit(function (e) {
            e.preventDefault();
            var name, email, message;
            name = $(this).find('input[name="name"]').val();
            email = $(this).find('input[name="email"]').val();
            message = $(this).find('textarea[name="comment"]').val();
            console.log(name, email, message);
            $.post("mail.php", {name: name, email: email, message: message}, function (status) {
                alert(status);
            });

        })
    });