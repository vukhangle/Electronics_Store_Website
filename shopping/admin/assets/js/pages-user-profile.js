var PagesUserProfile = function () {
    //fchức năng khởi tạo Pulsate
    var runPulsate = function () {
        $('.pulsate').pulsate({
            color: '#C43C35', // set the color of the pulse
            reach: 20, // how far the pulse goes in px
            speed: 1000, // how long one pulse takes in ms
            pause: 0, // how long the pause between pulses is in ms
            glow: true, // if the glow should be shown too
            repeat: 3, // sẽ lặp lại mãi mãi nếu đúng, nếu được cho một số sẽ lặp lại nhiều lần
            onHover: false // nếu đúng chỉ rung nếu người dùng di chuột qua phần tử
        });
    };
    return {
        //chức năng chính để bắt đầu các trang mẫu
        init: function () {
            runPulsate();
        }
    };
}();