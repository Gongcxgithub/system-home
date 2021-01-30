function statistics(o) {
    var e = 0;
    $(document).find(o).on("click",
    function() {
        1 != ++e && $(document).find(o).removeAttr("id")
    })
}
function scrollTop() {
    var o = $("#back-top");
    $(window).on("scroll",
    function() {
        $(this).scrollTop() < 400 ? o.hide() : o.show()
    }),
    o.on("click",
    function() {
        $("body,html").animate({
            scrollTop: 0
        },
        500)
    })
} !
function() {
    var o, e = $(window).height(),
    i = $(window).width();
    console.log("width:" + i + "-height:" + e),
    i <= 1100 && ("Microsoft Internet Explorer" == navigator.appName && "MSIE7.0" == navigator.appVersion.split(";")[1].replace(/[ ]/g, "") ? (console.log("ie7"), $("html").addClass("ie7")) : ($("html").addClass("html1024"), console.log("1024"), o = .82, console.log(o), document.body.style.zoom = o, document.getElementsByTagName("html")[0].style.cssText += "; -moz-transform: scale(" + o + ");-moz-transform-origin: 0 0;"), -1 < navigator.userAgent.indexOf("Chrome") && $("html").addClass("Chrome1024"))
} (),
$(".cho-v").click(function() {
    $(".version-choose,.shade").toggle(),
    $(".version-choose").toggleClass("zoomIn")
}),
$(".banner-index .choose-btn").hover(function() {
    $(".version-choose,.shade").show(),
    $(".version-choose").addClass("zoomIn")
}),
jQuery(".slide-box").slide({
    titCell: ".tit-cell span",
    mainCell: ".slidelist",
    effect: "left",
    autoPlay: !0,
    interTime: 3500,
    delayTime: 800,
    trigger: "click",
    easing: "easeOutCirc",
    endFun: function() {}
}),
jQuery("#imgsilde").slide({
    titCell: ".scircle span",
    mainCell: ".slide-imgbox",
    effect: "left",
    autoPlay: !0,
    interTime: 3500,
    delayTime: 800,
    trigger: "click",
    easing: "easeOutCirc",
    endFun: function() {}
}),
statistics(".download-removal"),
scrollTop(),
$(".ora-btn a").each(function(o) {
    $(this).hover(function() {
        $(".scircle span").eq(o).click()
    })
});