var frm = $('#cform');
    frm.submit(function (ev) {
        $.ajax({
            type: frm.attr('method'),
            url: frm.attr('action'),
            data: frm.serialize(),
            success: function (data) {
                $('#cform').append("<div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><i class='fa fa-thumbs-o-up'></i><strong>Well done!</strong> Your Message Submitted!</div>")
            }
        });

        ev.preventDefault();
});		