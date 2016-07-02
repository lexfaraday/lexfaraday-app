/**
 * Created by lexfa on 18/06/2016.
 */


window.fbAsyncInit = function () {
    FB.init({
        appId: '1125426534175163',
        status: true,
        xfbml: true
    });
};

// TODO move to typescript
window.onload = function(){

    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');

        function updateClock() {
            var t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }

    var date  = new Date(Date.UTC(2016, 6, 10, 12, 0, 0));
    var now   = new Date();
    var diff  = date.getTime() - now.getTime();
    // 15 * 24 * 60 * 60 * 1000
    var deadline = new Date(Date.parse(new Date()) + diff);
    initializeClock('clockdiv', deadline);

    $('#subscribeOK').hide();

    $('#contactForm').submit(function () {
        Meteor.call('subscribeMe', $('#email').val());
        $('#subscribeOK').show();
        $('#subscribeOK').hide(1000);
        return false;
    });

    $('.loader-gif').fadeOut();
};


