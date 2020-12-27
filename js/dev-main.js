$(function () {
    var username = getUrlParam('username')
    $('.dev-info-btn').text('欢迎你，开发者：' + username)

    $('input[name=dname]').val(username)
    $('.link-game').attr('href', './devMain.html?username='+username)
    $('.link-info').attr('href', './devInfo.html?username='+username)

    $.ajax({
        type: 'post',
        url: 'https://stepic-api.redcountry.top/api/game/query_upload',
        data: {
            dname: username
        },
        success: function (e) {
            if (e != 'empty') {
                var games = e
                $('.dev-game').empty()
                for (let i = 0; i < games.length; i++) {
                    let game = games[i]
                    $(".dev-game").append(getDevItem(game['image'], game['gname'], game['note'], game['version'], game['status'], game['gid']))
                }
            }
        }
    })

    $('.dev-upload-logo').click(function () {
        $('.dev-upload-logo').css({
            left: '-100%',
            opacity: 0
        })
        $('.dev-upload-area').css({
            left: 0,
            opacity: 1
        })
    })

    $('.back-logo').click(function () {
        $('.dev-upload-logo').css({
            left: 0,
            opacity: 1
        })
        $('.dev-upload-area').css({
            left: '100%',
            opacity: 0
        })
    })

})

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return encodeURI(r[2]); return null;
}

function getDevItem(image, gname, note, version, status, gid) {
    let cl = null
    if (status == '审核通过') cl = 'pass'
    else if (status == '未审核') cl = 'wait'
    else if (status == '审核中') cl = 'doing'
    else cl = 'failed'
    dom = `<li class="dev-item">\
        <img src="${image}" alt="" class="dev-img">\
        <span class="dev-gname">${gname}</span>\
        <span class="dev-note">${note}</span>\
        <span class="dev-version">${version}</span>\
        <span class="dev-status ${cl}">${status}</span>\
        <span class="dev-update" onclick="window.location.href='./devUpdate.html?gid=${gid}'">更新</span>
    </li>`
    return dom
}

function checkForm() {
    let gname = $('input[name=gname]').val()
    let name = $('input[name=name]').val()
    let image = $('input[name=image]').val()
    let game = $('input[name=game]').val()
    let d = $('.danger')
    if (gname == '') {
        d.text('请填写游戏名')
        return false
    }
    if (name == '') {
        d.text('请填写游戏逻辑名。请注意：游戏逻辑名必须为英文字母组成，且不可重复')
        return false
    }
    if (image == '') {
        d.text('请选择游戏封面图片')
        return false
    }
    if (game == '') {
        d.text('请选择游戏文件')
        return false
    }
    return true
}