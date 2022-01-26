// активная ссылка меню
$('.menu li a').each(function () {
    var location = window.location.href;
    var link = this.href;
    if (location === link) {
        $(this).addClass('active');
    }
});
// end

// mobile menu
$('.btn-burger').on('click', function () {
    $('.mobile-menu').fadeToggle();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
});

$('[data-toggle="tooltip"]').tooltip();

// amount
$('.down').on("click", function () {
    let $input = $(this).parent().find('input');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});
$('.up').on("click", function () {
    let $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});

$('.home-slider').slick({
    slidesToShow: 1,
    fade: true,
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#right"></use></svg></button>',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#left"></use></svg></button>'
});

$('.user-feedback-slider').slick({
    slidesToShow: 3,
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#right"></use></svg></button>',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#left"></use></svg></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }

    ]
});

$('.blog-slider').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    dots: true
});