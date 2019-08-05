let showLoading = function () {
    let m = document.getElementById("page-loader"), c = m.style;
    c.display = "block";
    //$('#page-loader').css("display", "block");
};

let hideLoading = function () {
    let m = document.getElementById("page-loader"), c = m.style;
    c.display = "none";
    //$('#page-loader').css("display", "none");
};