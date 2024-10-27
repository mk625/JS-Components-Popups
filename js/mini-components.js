

function toggle_dropdown(dropdown_btn, option_ele) {
    if (dropdown_btn) {
        $(dropdown_btn).closest(".dropdown-container").toggleClass("dropdown-opened");
    } else if (option_ele) {
        $(option_ele).closest(".dropdown-container").find(".btn-value").text($(option_ele).attr("data-value"));
        $(option_ele).closest(".dropdown-container").toggleClass("dropdown-opened");
    }
}


