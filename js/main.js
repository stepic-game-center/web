$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    
    $(window).scroll(function() {
        let top = $('.page-head').offset().top
        top -= 100
        if (top <= 0) {
            headTransform('flex', 100, 80)
        } else if (top > 100) {
            headTransform('none', 50, 50)
        } else {
            headTransform('none', 100 - top*0.5, 80 - top*0.3)
        }

        if (top <= 150) {
            $(".game-1").css({
                opacity: 0
            })
        } else {
            $('.game-1').css({
                opacity: (top-150) / 120
            })
        }

        if (top <= 200) {
            $(".game-4").css({
                opacity: 0
            })
        } else {
            $('.game-4').css({
                opacity: (top-200) / 100
            })
        }

        if (top <= 350) {
            $(".game-3").css({
                opacity: 0
            })
        } else {
            $('.game-3').css({
                opacity: (top-350) / 100
            })
        }

        if (top <= 400) {
            $(".game-2").css({
                opacity: 0
            })
        } else {
            $('.game-2').css({
                opacity: (top-400) / 80
            })
        }
    })
})

function headTransform(login, head, bottom) {
    $('.login').css({
        display: login
    })
    $('.page-head').css({
        height: head + 'px'
    })
    $('.head-bottom').css({
        height: bottom + 'px'
    })
}