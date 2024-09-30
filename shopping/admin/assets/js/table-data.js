var TableData = function () {
    //hàm khởi tạo DataTable
     //DataTable là một công cụ rất linh hoạt, dựa trên nền tảng của việc nâng cao lũy tiến,
     // sẽ thêm các điều khiển tương tác nâng cao vào bất kỳ bảng HTML nào
     // Để biết thêm thông tin, vui lòng truy cập https://datatables.net/
    var runDataTable = function () {
        var oTable = $('#sample_1').dataTable({
            "aoColumnDefs": [{
                "aTargets": [0]
            }],
            "oLanguage": {
                "sLengthMenu": "Show _MENU_ Rows",
                "sSearch": "",
                "oPaginate": {
                    "sPrevious": "",
                    "sNext": ""
                }
            },
            "aaSorting": [
                [1, 'asc']
            ],
            "aLengthMenu": [
                [5, 10, 15, 20, -1],
                [5, 10, 15, 20, "All"] // thay đổi giá trị mỗi trang ở đây
            ],
            // giá trị ban đầu
            "iDisplayLength": 10,
        });
        $('#sample_1_wrapper .dataTables_filter input').addClass("form-control input-sm").attr("placeholder", "Search");
       // sửa đổi đầu vào tìm kiếm bảng
        $('#sample_1_wrapper .dataTables_length select').addClass("m-wrap small");
       // sửa đổi bảng thả xuống trên mỗi trang
        $('#sample_1_wrapper .dataTables_length select').select2();
       // khởi tạo menu thả xuống select2
        $('#sample_1_column_toggler input[type="checkbox"]').change(function () {
            /* Get the DataTables object again - this is not a recreation, just a get of the object */
            var iCol = parseInt($(this).attr("data-column"));
            var bVis = oTable.fnSettings().aoColumns[iCol].bVisible;
            oTable.fnSetColumnVis(iCol, (bVis ? false : true));
        });
    };
    return {
        //chức năng chính để khởi tạo các trang mẫu
        init: function () {
            runDataTable();
        }
    };
}();