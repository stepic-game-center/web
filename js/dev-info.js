$(function () {
    var username = getUrlParam('username')
    $('.dev-info-btn').text('欢迎你，开发者：' + username)

    $('input[name=dname]').val(username)
    $('.link-game').attr('href', './devMain.html?username='+username)
    $('.link-info').attr('href', './devInfo.html?username='+username)

    $.ajax({
        type: 'post',
        url: 'https://stepic-api.redcountry.top/api/developer/query_info',
        data: {
            dname: username
        },
        success: function (dev) {
            $('input[name=dnick]').val(dev['dnick'])
            $('input[name=dphone]').val(dev['dphone'])
        }
    })

    $('.upload-btn').click(function() {
        let dname = $('input[name=dname]').val()
        let dnick = $('input[name=dnick]').val()
        let dphone = $('input[name=dphone]').val()
        $.ajax({
            type: 'post',
            url: 'https://stepic-api.redcountry.top/api/developer/update_info',
            data: {
                dname: dname,
                dnick: dnick,
                dphone: dphone
            },
            success: function(e) {
                if (e == 'success') {
                    window.location.reload()
                } else {
                    $('.danger').text('修改失败！')
                }
            }
        })
    })

})

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return encodeURI(r[2]); return null;
}