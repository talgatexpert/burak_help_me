
var btnPrev = document.querySelector('.prev-btn')
var btnNext = document.querySelector('.next-btn')

var btnPrevId = document.querySelector('#prev-btn')
var btnNextId = document.querySelector('#next-btn')
var btnPrevTabs = document.querySelector('#prev-btn-tabs')
var btnNextTabs = document.querySelector('#next-btn-tabs')



var rev = $('.rev_slider');
rev.on('init', function (event, slick, currentSlide) {
    var
        cur = $(slick.$slides[slick.currentSlide]),
        next = cur.next(),
        prev = cur.prev();
    prev.addClass('slick-sprev');
    next.addClass('slick-snext');
    cur.removeClass('slick-snext').removeClass('slick-sprev');
    slick.$prev = prev;
    slick.$next = next;
}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    console.log('beforeChange');
    var
        cur = $(slick.$slides[nextSlide]);
    console.log(slick.$prev, slick.$next);
    slick.$prev.removeClass('slick-sprev');
    slick.$next.removeClass('slick-snext');
    next = cur.next(),
        prev = cur.prev();
    prev.prev();
    prev.next();
    prev.addClass('slick-sprev');
    next.addClass('slick-snext');
    slick.$prev = prev;
    slick.$next = next;
    cur.removeClass('slick-next').removeClass('slick-sprev');
});

rev.slick({
    speed: 1000,
    arrows: true,
    dots: false,
    focusOnSelect: true,
    prevArrow: btnPrev,
    nextArrow: btnNext,
    infinite: true,
    slidesPerRow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    customPaging: function (slider, i) {
        return '';
    },
    /*infinite: false,*/
});



// $('.tabgroup > div').hide();
// $('.tabgroup > div:first-of-type').show();
// $('.tabs a').click(function (e) {

//     e.preventDefault();
//     var $this = $(this),
//         tabgroup = '#' + $this.parents('.tabs').data('tabgroup'),
//         others = $this.closest('div').siblings().children('a'),
//         target = $this.attr('href');
//     others.parent().removeClass('active');
//     $this.parent().addClass('active');
//     $(tabgroup).children('div').hide();
//     $(target).show();
// })

$(document).ready(function () {

    (function ($) {
        $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

        $('.tab ul.tabs li a').click(function (g) {
            var tab = $(this).closest('.tab'),
                index = $(this).closest('li').index();

            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');

            tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').hide();
            tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').show();

            g.preventDefault();
        });
    })(jQuery);

});

$('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: btnPrevId,
    nextArrow: btnNextId,
    focusOnSelect: true,
    centerMode: true
});
$('.slider-tab').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: btnPrevTabs,
    nextArrow: btnNextTabs,
    focusOnSelect: true,
    centerMode: true
});



