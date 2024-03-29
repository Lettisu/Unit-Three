//Unit Three
$("#name").focus(); //select the Name input element to focus upon page load
$("#other-title").hide();
$("#title").on('change', function () //listening for a change on the title id
    {
        if ($(this).val() === "other") { //if 'other' is chosen show the text input field
            $("#other-title").show();
        } else { //if 'other' is not chosen then hide the text input field
            $("#other-title").hide();
        }
    });
//t-Shirt selection
$("#colors-js-puns").hide();
$("#design").on('change', function () {
    $("#color").html('');
    if ($(this).val() === "js puns") {
        $("#color").append(`<option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>`);
        $("#color").append(`<option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option>`);
        $("#color").append(`<option value="gold">Gold (JS Puns shirt only)</option>`);
        $("#colors-js-puns").show();
    } else if ($(this).val() === "heart js") {
        $("#color").append(`<option value="tomato">Tomato (I &#9829; JS shirt only)</option>`);
        $("#color").append(`<option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option>`);
        $("#color").append(`<option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>`);
        $("#colors-js-puns").show();
    } else
        $("#colors-js-puns").hide();
});

//Activities section
let totalActCost = 0;
$(".activities").append('<label id="total">Total Act Cost:$ </label>');
document.getElementById("total").innerHTML = "<p><strong>Total: $" + totalActCost + "</strong></p>"

$('[type = "checkbox"]').change((event) => {
    let totalActCost = 0;

    if ($(`input[name="all"]`).prop("checked")) {
        totalActCost += 200; //console.log(totalActCost);
    }

    if ($(`input[name="build-tools"]`).prop("checked")) {
        totalActCost += 100;
    }

    if ($(`input[name="npm"]`).prop("checked")) {
        totalActCost += 100;
    }

    if ($(`input[name="js-libs"]`).prop("checked")) {
        $(`input[name="node"]`).attr("disabled", true);
        totalActCost += 100;
    } else {
        $(`input[name="node"]`).removeAttr("disabled")
    }

    if ($(`input[name="node"]`).prop("checked")) {
        $(`input[name="js-libs"]`).attr("disabled", true);
        totalActCost += 100;
    } else {
        $(`input[name="js-libs"]`).removeAttr("disabled")
    }

    if ($(`input[name="js-frameworks"]`).prop("checked")) {
        $(`input[name="express"]`).attr("disabled", true);
        totalActCost += 100;
    } else {
        $(`input[name="express"]`).removeAttr("disabled")
    }

    if ($(`input[name="express"]`).prop("checked")) {
        $(`input[name="js-frameworks"]`).attr("disabled", true);
        totalActCost += 100;
    } else {
        $(`input[name="js-frameworks"]`).removeAttr("disabled")
    }

    $("#total").html("<p><strong>Total: $" + totalActCost + "</strong></p>")
});
//Payment Section
$("#credit-card").siblings().eq(3).addClass("paypal");
$("#credit-card").siblings().eq(4).addClass("bitcoin");
$('select option[value="credit card"]').attr("selected", true);
$('select option[value="select_method"]').attr("disabled", true);
$('select option[value="select_method"]').hide();
$(".paypal").hide();
$(".bitcoin").hide();



$("#payment").on('change', function () {
        if ($(this).val() === "credit card") {
            $("#credit-card").show();
            $(".paypal").hide();
            $(".bitcoin").hide();
        } else if ($(this).val() === "paypal") {
            $("#credit-card").hide();
            $(".paypal").show();
            $(".bitcoin").hide();
        } else if ($(this).val() === "bitcoin") {
            $("#credit-card").hide();
            $(".bitcoin").show();
            $(".paypal").hide();
        }


    }

);
//Error messages
$('label[for="name"]').before('<label class="error" id="name-error"><font color="red">Name field is empty</font ></label>');
$('label[for="mail"]').before('<label class="error" id="email-error"><font color="red">Please enter a valid email address</font></label>');
$('.activities legend').before('<label class="error" id="activity-error"><font color="red">Please select an activity</font></label>');
$('#credit-card').before('<label class="error" id="cc-empty-error"><font color="red">Credit Card Number needed</font></label>');
$('#credit-card').before('<label class="error" id="cc-number-error"><font color="red">Please enter a number between 13 and 16 digits</font></label>');
$('#credit-card').before('<label class="error" id="cc-zip-error"><font color="red">Please enter 5 digit Zip Code</font></label>');
$('#credit-card').before('<label class="error" id="cc-cvv-error"><font color="red">Please enter 3 digit CVV number</font></label>');
$('.error').hide();

//Validations

const isValidUserName = (username) => {
    const valid = /^\S/.test(username);
    if (valid) {
        $("#name-error").hide();
        return true;
    } else {
        $("#name-error").show();
        return false;
    }
}

const isValidEmail = (email) => {
    const valid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
    if (valid) {
        $("#email-error").hide();
        return true;
    } else {
        $("#email-error").show();
        return false;
    }

}

const isValidActivity = () => {
    if ($(".activities input:checked").length > 0) {
        $("#activity-error").hide();
        return true;
    } else {
        $("#activity-error").show();
        return false;
    }
}
$("#payment").on("change", function () {
    if ($("#payment").val() === "paypal" || $("#payment").val() === "bitcoin") {
        $("#cc-cvv-error").hide();
        $("cc-zip-error").hide();
        $("#cc-number-error").hide();
        $("#cc-empty-error").hide();


    }

});



const isValidCCNum = (cc) => {
    if ($("#payment").val() === "credit card") {
        const valid = /^\d{13,16}$/.test(cc);
        if (valid) {
            $("#cc-number-error").hide();
            $("#cc-empty-error").hide();
            return true;
        } else if (cc !== ' ') {
            $("#cc-empty-error").hide();
            $("#cc-number-error").show();

        } else {
            $("#cc-number-error").hide();
            $("#cc-empty-error").show();
            return false;
        }
    }

}
const validZC = (zip) => {
    if ($("#payment").val() === "credit card") {
        let valid = /^\d{5}$/.test(zip);
        if (valid) {
            $("#cc-zip-error").hide();
            return true;
        } else {
            $("#cc-zip-error").show();
            return false;
        }
    }
}


const isValidCVV = (cvv) => {
    if ($("#payment").val() === "credit card") {
        let valid = /^\d{3}$/.test(cvv);
        if (valid) {
            $("#cc-cvv-error").hide();
            return true;
        } else {
            $("#cc-cvv-error").show();
            return false;
        }

    }
}
//Form Vaildation
const formValid = () => {
    if ($("#payment").val() === "credit card") {
        if (isValidUserName($("#name").val()) && isValidEmail($("#mail").val()) &&
            isValidActivity() && isValidCCNum($("#cc-num").val()) &&
            validZC($("#zip").val()) && isValidCVV($("#cvv").val())) {
            return true;

        } else {
            isValidUserName($("#name").val());
            isValidEmail($("#mail").val());
            isValidActivity($());
            isValidCCNum($("#cc-num").val());
            validZC($("#zip").val());
            isValidCVV($("#cvv").val());
            return false;
        }
    } else {
        if (isValidUserName($("#name").val()) && isValidEmail($("#mail").val()) &&
            isValidActivity()) {
            return true;
        } else {
            isValidUserName($("#name").val());
            isValidEmail($("#mail").val());
            isValidActivity();
            return false;
        }
    }
}
//Totality
$("form").on("submit", (e) => {
    if (formValid() === true) {
        window.location.reload();
    } else {
        e.preventDefault();
    }
});