(function($){
    'use strict';

    var Timer = function (el) {
        this.nowDate = new Date();
        this.params = {
            countDownDiff: Math.ceil((24*60*60)-(this.nowDate.getHours() * 60 * 60 + this.nowDate.getMinutes() * 60 + this.nowDate.getSeconds())), //Количество секунд до конца таймера
            countDown: el
        };
        //Стартуем таймер
        this.initCountDown();
        //Заполняем обман
    };
    Timer.prototype.initCountDown = function() {
        var _this = this,
            endDate = new Date(this.nowDate.getTime() + this.params.countDownDiff * 1000);

        var countDownTimer = setInterval( function () {
            var diffDate = new Date(endDate.getTime() - Date.now()),
                h = (diffDate.getHours() > 9) ? diffDate.getHours() : '0'+diffDate.getHours(),
                m = (diffDate.getMinutes() > 9) ? diffDate.getMinutes() : '0'+diffDate.getMinutes(),
                s = (diffDate.getSeconds() > 9) ? diffDate.getSeconds() : '0'+diffDate.getSeconds();

            var el = _this.params.countDown;

           $(el).find('.timer-hour_num').html(h);
           $(el).find('.timer-minutes_num').html(m);
           $(el).find('.timer-seconds_num').html(s);
        }, 1000);
    };


    var timer = new Timer('.timer1');
   $('#slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1
    });
})(jQuery);
