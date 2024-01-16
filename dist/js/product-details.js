$(document).ready(function () {

    $(document).on('mouseover', '.leftSideImages img', function () {
        let hoverImg = $(this).attr('src');
        $('.rightSideImg').attr('src', hoverImg);
    })

    

});  // jquery function end
