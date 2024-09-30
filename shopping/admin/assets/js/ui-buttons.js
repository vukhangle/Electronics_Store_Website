var UIButtons = function () {
   // chức năng khởi tạo LaddaButtons
    var runLeddaButtons = function () {
        // Bind normal buttons
        Ladda.bind('.ladda-button', {
            timeout: 2000
        });
        // Liên kết các nút tiến trình và mô phỏng tiến trình tải
        Ladda.bind('.progress-demo button', {
            callback: function (instance) {
                var progress = 0;
                var interval = setInterval(function () {
                    progress = Math.min(progress + Math.random() * 0.1, 1);
                    instance.setProgress(progress);
                    if (progress === 1) {
                        instance.stop();
                        clearInterval(interval);
                    }
                }, 200);
            }
        });
        // Bạn có thể kiểm soát việc tải một cách rõ ràng bằng API JavaScript
         // như được nêu dưới đây:
         // var l = Ladda.create( document.querySelector( 'button' ) );
         // l.start();
         // l.stop();
         // l.toggle();
         // l.isLoading();
         // l.setProgress( 0-1 );
    };
    return {
       //chức năng chính để khởi tạo các trang mẫu
        init: function () {
            runLeddaButtons();
        }
    };
}();