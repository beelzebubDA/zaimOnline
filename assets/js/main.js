$(document).ready(function () {

    // window.addEventListener('load', function () {
    //     let preloader = document.getElementById('preloader');
    //     preloader.classList.add("loaded");
    // });

    let loanBLockOpenBtns = $(".tarifs_item--btn");
    let loanBlock = $(".loan");
    let tarifsBlock = $(".tarifs_side");

    loanBLockOpenBtns.on("click", function(e) {
        e.preventDefault();
        loanBlock.addClass("active");
        loanBlock.parent().addClass("active");
        loanBlock.parent().parent().addClass("active");
        tarifsBlock.removeClass("active");
    });

    // Модальное окно
    let openModalBtn = $(".loan_btn");
    let modalBlock = $(".modal");
    let modalCloseBtn = $(".modal_btn");

    openModalBtn.on("click", function(e) {
        e.preventDefault();
        modalBlock.addClass("active");
    });

    modalCloseBtn.on("click", function(e) {
        e.preventDefault();
        modalBlock.removeClass("active");
    });

    let officeInfoOpenBtn = $(".ouroffices_item--name");

    officeInfoOpenBtn.on("click", function(e) {
        e.preventDefault();
        $(this).parent().toggleClass("active");
        $(this).parent().parent().parent().parent().parent().parent().parent().find(".mainsec_block").addClass("actived");
    });

    let consentBtn = $(".consent");
    let consentBlock = $(".consent_block");

    consentBtn.on("click", function(e) {
        e.preventDefault();
        $(this).parent().parent().parent().parent().find(".loan").removeClass("active");
        $(this).parent().parent().parent().parent().parent().parent().find(".mainsec_block").addClass("active");
        consentBlock.addClass("active");
        loanBlock.parent().parent().removeClass("active");
    });

    // маски

    $(".loan_input--tel").inputmask({"mask": "+7 (999) 999-99-99"});
    $(".loan_input--mail").inputmask("email");

    // кнопка назад

    let backBtn = $(".toback");

    backBtn.on("click", function(e) {
        e.preventDefault();
        $(this).parent().removeClass("active");
        $(this).parent().prev().addClass("active");
        loanBlock.parent().parent().addClass("active");
    });
});