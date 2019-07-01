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