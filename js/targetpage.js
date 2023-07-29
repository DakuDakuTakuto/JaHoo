$(function () {
    $.ajax({
                url: './html/targetpage.html', // includeしたいファイルのパスを指定
                dataType: 'html',
        // 読み込み成功時の処理
        success: function (data) {
            $('body').prepend(data);
        },
        // 読み込み失敗時の処理
        error: function () {
            alert('header error!');
        },
    });
});