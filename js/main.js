(function() {
    "use strict";
    var input = $('#timeInput')[0];
    var time;
    $('#button').click(function() {
        time = input.value;
        if (time) {
            var intervalID = setInterval(function() {
                time--;
                var second = time % 60,
                    minute = (Math.floor(time / 60)) % 60,
                    hour = (Math.floor(time / 60 / 60)) % 24,
                    day = (Math.floor(time / 60 / 60 / 24)) % 365;
                second < 10 ? second = "0" + second : second;
                minute < 10 ? minute = "0" + minute : minute;
                hour < 10 ? hour = "0" + hour : hour;
                day < 10 ? day = "0" + day : day;
                $('.hour').text(hour);
                $('.minute').text(minute);
                $('.second').text(second);
                $('.day').text(day);
                if (time === 0) {
                    clearInterval(intervalID);
                    alert('Time is out');
                }
            }, 1000);


                var stop = $('#stop');
                $('#button').css('display', 'none');
                $('#message').text('timer is running');
                stop.css('display', 'inline');
                input.value = "";
                
               
            stop.click(function() {
                clearInterval(intervalID);
                stop.css('display', 'none');
                $('#button').css('display', 'inline');
                $('#message').text('Please type time in seconds!');
            })
        }
    })
})();