var PagesGallery = function () {
    //function to initiate Colorbox
    var runColorBox = function () {
        $(".group1").colorbox({
            rel: 'group1',
            transition: "none",
            width: "100%",
            height: "100%",
            retinaImage: true
        });
    };

    //chức năng cho Bộ chọn hình ảnh
    var runImagePicker = function () {
        $('.wrap-image .chkbox').bind('click', function () {
            if ($(this).parent().hasClass('selected')) {
                $(this).parent().removeClass('selected').children('a').children('img').removeClass('selected');
            } else {
                $(this).parent().addClass('selected').children('a').children('img').addClass('selected');
            }
        });
    };

    return {
        //chức năng chính để bắt đầu các trang mẫu
        init: function () {
            runColorBox();
            runImagePicker();
        }
    };
}();