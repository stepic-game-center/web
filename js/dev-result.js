$(function () {
    var res = getUrlParam('res')
    $('.display').text(decodeURI(decodeURI(res)))
})
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return encodeURI(r[2]); return null;
}