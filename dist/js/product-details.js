$(document).ready(function () {

    $(document).on('mouseover', '.leftSideImages img', function () {
        let hoverImg = $(this).attr('src');
        $('.rightSideImg').attr('src', hoverImg);
    })

    $(document).on('click', '.grabDealBtn', function () {
        $('.redirectionPopup').slideDown().css({display:'flex'})
    })
    $(document).on('click', '.closeRDPopup', function () {
        $('.redirectionPopup').slideUp();
    })
    

});  // jquery function end
