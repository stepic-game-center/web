$(function () {
    var gid = getUrlParam('gid')
    $('input[name=gid]').val(gid)

})

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return encodeURI(r[2]); return null;
}

function checkForm() {
    let version = $('input[name=version]').val()
    let game = $('input[name=game]').val()
    let d = $('.danger')
    if (version == '') {
        d.text('请填写新版本号')
        return false
    }
    if (game == '') {
        d.text('请选择游戏文件')
        return false
    }
    return true
}