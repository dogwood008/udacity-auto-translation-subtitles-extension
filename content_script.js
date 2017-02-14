(function() {
    (function($) {
        var delay = 5000;
        console.log(delay / 1000 + '秒後に日本語字幕（翻訳）へ切り替えます');
        setTimeout(function() {
            var delayInMenuSelect = 100;
            $('.ytp-settings-button').click();
            setTimeout(function() {
                $('div.ytp-popup.ytp-settings-menu > div > div > div:nth-child(2)').click();
            }, delayInMenuSelect * 1);
            setTimeout(function() {
                $('div.ytp-popup.ytp-settings-menu > div > div.ytp-panel-menu > div:last-child').click();
            }, delayInMenuSelect * 2);
            setTimeout(function() {
                $('div.ytp-popup.ytp-settings-menu > div > div.ytp-panel-menu > div:last-child').click();
            }, delayInMenuSelect * 3);
        }, delay);
    })(jQuery)
}());