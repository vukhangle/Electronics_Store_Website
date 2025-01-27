var UINestable = function () {
    //hàm khởi tạo jquery.nestable
    var updateOutput = function (e) {
        var list = e.length ? e : $(e.target),
            output = list.data('output');
        if (window.JSON) {
            output.val(window.JSON.stringify(list.nestable('serialize')));
            //, null, 2));
        } else {
            output.val('JSON browser support required for this demo.');
        }
    };
    var runNestable = function () {
 // kích hoạt Nestable cho danh sách 1
        $('#nestable').nestable({
            group: 1
        }).on('change', updateOutput);
     // kích hoạt Nestable cho danh sách 2
        $('#nestable2').nestable({
            group: 1
        }).on('change', updateOutput);
        // xuất dữ liệu tuần tự ban đầu
        updateOutput($('#nestable').data('output', $('#nestable-output')));
        updateOutput($('#nestable2').data('output', $('#nestable2-output')));
        $('#nestable-menu').on('click', function (e) {
            var target = $(e.target),
                action = target.data('action');
            if (action === 'expand-all') {
                $('.dd').nestable('expandAll');
            }
            if (action === 'collapse-all') {
                $('.dd').nestable('collapseAll');
            }
        });
        $('#nestable3').nestable();
    };
    return {
       //chức năng chính để khởi tạo các trang mẫu
        init: function () {
            runNestable();
        }
    };
}();