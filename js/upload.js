$(document).ready(function () {
    //file upload js start here
    $("#bankStatement").on("change", function (event) {
        var files = event.target.files;
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            $("<div class='file_value'><div class='file_value--text'>" + file.name + "</div><div class='file_value--remove' data-id='" + file.name + "' ></div></div>").insertAfter("#file_input1");
        }
    });
    $("#salarySlip").on("change", function (event) {
        var files = event.target.files;
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            $("<div class='file_value'><div class='file_value--text'>" + file.name + "</div><div class='file_value--remove' data-id='" + file.name + "' ></div></div>").insertAfter("#file_input2");
        }
    });
    $("#uploadAadhar").on("change", function (event) {
        var files = event.target.files;
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            $("<div class='file_value'><div class='file_value--text'>" + file.name + "</div><div class='file_value--remove' data-id='" + file.name + "' ></div></div>").insertAfter("#file_input3");
        }
    });
    $("#upload_CC_Statement").on("change", function (event) {
        var files = event.target.files;
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            $("<div class='file_value'><div class='file_value--text'>" + file.name + "</div><div class='file_value--remove' data-id='" + file.name + "' ></div></div>").insertAfter("#file_input4");
        }
    });
    $("#uploadPan").on("change", function (event) {
        var files = event.target.files;
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            $("<div class='file_value'><div class='file_value--text'>" + file.name + "</div><div class='file_value--remove' data-id='" + file.name + "' ></div></div>").insertAfter("#file_input5");
        }
    });

    $("body").on("click", ".file_value", function () {
        $(this).remove();
    });

    // selfie upload start
    $('#uploadSelfie').click(function () {
        $('#uploadSelfie').click();
    });

    $('#uploadSelfie').change(function () {
        var file = this.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#preview').attr('src', e.target.result);
        }
        reader.readAsDataURL(file);
    });
    // selfie upload end

    $('#bankStatement').change(function (e) {
        $(this).parent().parent().removeClass('has-error');
    });
    $('#salarySlip').change(function (e) {
        $(this).parent().parent().removeClass('has-error');
    });
    $('#uploadAadhar').change(function (e) {
        $(this).parent().parent().removeClass('has-error');
    });
    $('#upload_CC_Statement').change(function (e) {
        $(this).parent().parent().removeClass('has-error');
    });
    $('#uploadPan').change(function (e) {
        $(this).parent().parent().removeClass('has-error');
    });
    //file upload js end here

    $('.form-control').not('.fakeinput').on('keyup blur', function (e) {
        $(this).closest('.form-group').removeClass('has-error');
        $(this).removeClass("invalid");
    });

    $.validator.addMethod("extension", function (a, b, c) {
        return c = "string" == typeof c ? c.replace(/,/g, "|") : "tif|jpe?g|pdf", this.optional(b) || a.match(new RegExp("\\.(" + c + ")$", "i"))
    }, "Please enter a value with a valid extension.");


    $.validator.addMethod("filesize", (function (e, i, l) {
        var t, s = this.optional(i);
        return s || !("file" !== $(i).attr("type") || !i.files || !i.files.length) && ((t = i.files[0]).size && t.size <= l)
    }), "Max allowed file size is 2 MB");

    $("#upload_from").validate({
        ignore: [],
        errorClass: 'invalid',
        errorPlacement: function (error, element) {
            var errorText = error.text();
            if (element.closest('.form-group').find('.help-block').length < 1) {
                element.closest('.form-group').append('<span class="help-block">');
            }
            element.closest('.form-group').addClass('has-error');
            element.closest('.form-group').find('.help-block').html(errorText);
        },
        highlight: function (element, errorClass) {
            $(element).addClass(errorClass).parent().prev().children("select").addClass(errorClass);
            if ($(element).attr('type') == 'radio' || $(element).attr('type') == 'checkbox') {
                $(element).parent().parent().addClass(errorClass);
            }
        },
        rules: {
            bankStatement: {
                required: true,
                extension: "jpg|tif|jpeg|pdf",
                filesize: 2000012
            },
            salarySlip: {
                required: true,
                extension: "jpg|tif|jpeg|pdf",
                filesize: 2000012
            },
            uploadAadhar: {
                required: true,
                extension: "jpg|tif|jpeg|pdf",
                filesize: 2000012
            },
            upload_CC_Statement: {
                required: true,
                extension: "jpg|tif|jpeg|pdf",
                filesize: 2000012
            },
            uploadPan: {
                required: true,
                extension: "jpg|tif|jpeg|pdf",
                filesize: 2000012
            },
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});


