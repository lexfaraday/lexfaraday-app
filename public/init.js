window.fbAsyncInit = function () {
    FB.init({
        appId: '1125426534175163',
        xfbml: true,
        version: 'v2.6'
    });
};
/*
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));*/


(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-79899252-1', 'auto');
ga('send', 'pageview');

// TODO move to typescript
window.onload = function(){
    $('#subscribeOK').hide();

    $('#contactForm').submit(function () {
        Meteor.call('subscribeMe', $('#email').val());
        $('#subscribeOK').show();
        $('#subscribeOK').hide(1000);
        return false;
    });

    $('.loader-gif').fadeOut();
};