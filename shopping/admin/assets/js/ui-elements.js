var UIElements = function () {
    // hàm khởi tạo trình phân trang bootstrap
    var runPaginator = function () {
        $('#paginator-example-1').bootstrapPaginator({
            bootstrapMajorVersion: 3,
            currentPage: 3,
            totalPages: 10,
            onPageClicked: function (e, originalEvent, type, page) {
                $('#paginator-content-1').text("Page item clicked, type: " + type + " page: " + page);
            }
        });
        $('#paginator-example-2').bootstrapPaginator({
            bootstrapMajorVersion: 3,
            currentPage: 3,
            totalPages: 10,
            onPageChanged: function (e, oldPage, newPage) {
                $('#paginator-content-2').text("Current page changed, old: " + oldPage + " new: " + newPage);
            }
        });
        $('#paginator-changed-select').change(function () {
            var page = $(this).val();
            $('#paginator-example-2').bootstrapPaginator("show", page);
        });
    };
    //function to initiate jQuery.pulsate
    var runPulsate = function () {
        $('#pulsate-regular').pulsate({
            color: '#C43C35', // đặt màu của xung
            reach: 20, // xung đi được bao xa tính bằng px
            speed: 1000, // một xung mất bao lâu tính bằng ms
            pause: 0, // thời gian tạm dừng giữa các xung tính bằng ms
            glow: true, // nếu ánh sáng cũng được hiển thị
            repeat: true, // sẽ lặp lại mãi mãi nếu đúng, nếu cho trước một số sẽ lặp lại nhiều lần
            onHover: false // nếu đúng chỉ dao động nếu người dùng di chuột qua phần tử
        });
    };
    //function to initiate jquery.gritter
    var runGritterNotification = function () {
        $.extend($.gritter.options, {
            class_name: 'gritter-light', // cho các thông báo nhẹ (có thể được thêm trực tiếp vào $.gritter.add)
            position: 'top-right', // khả năng: dưới cùng bên trái, dưới cùng bên phải, trên cùng bên trái, trên cùng bên phải
            fade_in_speed: 100, // // tốc độ mờ dần của thông báo (chuỗi hoặc int)
            fade_out_speed: 100, // tốc độ mờ đi của thông báo
            time: 3000 // treo trên màn hình cho...
        });
        $('#add-sticky').click(function () {
            var unique_id = $.gritter.add({
                // (chuỗi | bắt buộc) tiêu đề của thông báo
                title: 'This is a sticky notice!',
              // (chuỗi | bắt buộc) văn bản bên trong thông báo
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.',
              // (chuỗi | tùy chọn) hình ảnh hiển thị bên trái
                image: 'assets/images/avatar-1.jpg',
               // (bool | tùy chọn) nếu bạn muốn nó tự mờ đi hoặc chỉ ngồi đó
                sticky: true,
                // (int | tùy chọn) thời gian bạn muốn nó tồn tại trước khi tắt dần
                time: '',
               // (chuỗi | tùy chọn) tên lớp bạn muốn áp dụng cho thông báo cụ thể đó
                class_name: 'my-sticky-class'
            });
            // Bạn có thể yêu cầu nó trả về một id duy nhất, cái này có thể được sử dụng để xóa nó theo cách thủ công sau này bằng cách sử dụng
             /*
                    setTimeout(function(){
                    $.gritter.remove(unique_id, {
                    mờ dần: đúng,
                    tốc độ: 'chậm'
                    });
                    }, 6000)
                    */
            return false;
        });
        $('#add-regular').click(function () {
            $.gritter.add({
               // (chuỗi | bắt buộc) tiêu đề của thông báo
                title: 'This is a regular notice!',
             // (chuỗi | bắt buộc) văn bản bên trong thông báo
                text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.',
                // (chuỗi | tùy chọn) hình ảnh hiển thị bên trái
                image: 'assets/images/avatar-2.jpg',
                // (bool | tùy chọn) nếu bạn muốn nó tự mờ đi hoặc chỉ ngồi đó
                sticky: false,
                // (int | tùy chọn) thời gian bạn muốn nó tồn tại trước khi tắt dần
                time: ''
            });
            return false;
        });
        $('#add-max').click(function () {
            $.gritter.add({
                // (string | mandatory) tiêu đề thông báo
                title: 'This is a notice with a max of 3 on screen at one time!',
              // (chuỗi | bắt buộc) văn bản bên trong thông báo
                text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.',
               // (chuỗi | tùy chọn) hình ảnh hiển thị bên trái
                image: 'http://a0.twimg.com/profile_images/59268975/jquery_avatar_bigger.png',
                // (bool | optional) if you want it to fade out on its own or just sit there
                sticky: false,
                // (function) before the gritter notice is opened
                before_open: function () {
                    if ($('.gritter-item-wrapper').length == 3) {
                        // Returning false prevents a new gritter from opening
                        return false;
                    }
                }
            });
            return false;
        });
        $('#add-without-image').click(function () {
            $.gritter.add({
                // (string | mandatory) the heading of the notification
                title: 'This is a notice without an image!',
                // (string | mandatory)văn bản bên trong thông báo
                text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.'
            });
            return false;
        });
        $('#add-gritter-light').click(function () {
            $.gritter.add({
                // (string | mandatory) the heading of the notification
                title: 'This is a light notification',
                // (string | mandatory) the text inside the notification
                text: 'Just add a "gritter-light" class_name to your $.gritter.add or globally to $.gritter.options.class_name',
                class_name: 'gritter-light'
            });
            return false;
        });
        $('#add-with-callbacks').click(function () {
            $.gritter.add({
                // (string | mandatory) the heading of the notification
                title: 'This is a notice with callbacks!',
                // (string | mandatory) the text inside the notification
                text: 'The callback is...',
                // (function | optional) function called before it opens
                before_open: function () {
                    alert('I am called before it opens');
                },
                // (function | optional) function called after it opens
                after_open: function (e) {
                    alert("I am called after it opens: \nI am passed the jQuery object for the created Gritter element...\n" + e);
                },
                // (function | optional) function called before it closes
                before_close: function (e, manual_close) {
                    var manually = (manual_close) ? 'The "X" was clicked to close me!' : '';
                    alert("I am called before it closes: I am passed the jQuery object for the Gritter element... \n" + manually);
                },
                // (function | optional) function called after it closes
                after_close: function (e, manual_close) {
                    var manually = (manual_close) ? 'The "X" was clicked to close me!' : '';
                    alert('I am called after it closes. ' + manually);
                }
            });
            return false;
        });
        $('#add-sticky-with-callbacks').click(function () {
            $.gritter.add({
                // (string | mandatory) the heading of the notification
                title: 'This is a sticky notice with callbacks!',
                // (string | mandatory) the text inside the notification
                text: 'Sticky sticky notice.. sticky sticky notice...',
                // Stickeh!
                sticky: true,
                // (function | optional) function called before it opens
                before_open: function () {
                    alert('I am a sticky called before it opens');
                },
                // (function | optional) function called after it opens
                after_open: function (e) {
                    alert("I am a sticky called after it opens: \nI am passed the jQuery object for the created Gritter element...\n" + e);
                },
                // (function | optional) function called before it closes
                before_close: function (e) {
                    alert("I am a sticky called before it closes: I am passed the jQuery object for the Gritter element... \n" + e);
                },
                // (function | optional) function called after it closes
                after_close: function () {
                    alert('I am a sticky called after it closes');
                }
            });
            return false;
        });
        $("#remove-all").click(function () {
            $.gritter.removeAll();
            return false;
        });
        $("#remove-all-with-callbacks").click(function () {
            $.gritter.removeAll({
                before_close: function (e) {
                    alert("I am called before all notifications are closed.  I am passed the jQuery object containing all  of Gritter notifications.\n" + e);
                },
                after_close: function () {
                    alert('I am called after everything has been closed.');
                }
            });
            return false;
        });
    };
    return {
        //main function to initiate template pages
        init: function () {
            runPaginator();
            runPulsate();
            runGritterNotification();
        }
    };
}();