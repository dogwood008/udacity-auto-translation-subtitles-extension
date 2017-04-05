(function() {
    (function($) {
        var delay = 3000;
        console.log(delay / 1000 + '秒後に日本語字幕（翻訳）へ切り替えます');
        console.log($);
        setTimeout(function() {
            var delayInMenuSelect = 100;
            $('.ytp-settings-button').click();
            setTimeout(function() {
                $('.ytp-menuitem:contains("字幕")').click();
            }, delayInMenuSelect * 1);
            setTimeout(function() {
                $($.map($('.ytp-menuitem:contains("英語")'), function(val) {
                    return $(val).text().match(/自動生成/) ? null : val;
                })[0]).click();
            }, delayInMenuSelect * 2);
            setTimeout(function() {
                $('.ytp-menuitem:contains("字幕")').click();
            }, delayInMenuSelect * 9);
            setTimeout(function() {
                $('.ytp-menuitem:contains("自動翻訳")').click();
            }, delayInMenuSelect * 9);
            setTimeout(function() {
                $('.ytp-menuitem:contains("日本語")').click();
		$('.ytp-settings-button').click();
            }, delayInMenuSelect * 9);
        }, delay);
    })(jQuery)

}());