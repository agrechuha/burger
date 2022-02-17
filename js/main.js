$(document).ready(() => {

    $('.category').click((e) => {
        let CurrentElement = $(e.target);
        $('.products-container').hide();
        let id = CurrentElement.data('id');
        $('#' + id).show();

        $('.category').removeClass('active');
        CurrentElement.addClass('active');

        $('#' + id + ' .products').slick('refresh');
        $('#' + id + ' .products-nav').slick('refresh');
    });

    $('#burgers-container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#burgers-container .products-nav',
        infinite: true
    });

    $('#burgers-container .products-nav').slick({
        slidesToShow: 7,
        slidesToScroll: 7,
        asNavFor: '#burgers-container .products',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        infinite: false,
        arrows: false
    });

    $('#fries-container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#fries-container .products-nav',
        infinite: true
    });

    $('#fries-container .products-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '#fries-container .products',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        infinite: false,
        arrows: false
    });

    $('#sauces-container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#sauces-container .products-nav',
        infinite: true
    });

    $('#sauces-container .products-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '#sauces-container .products',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        infinite: false,
        arrows: false
    });

    $('#drinks-container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#drinks-container .products-nav',
        infinite: true
    });

    $('#drinks-container .products-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '#drinks-container .products',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        infinite: false,
        arrows: false
    });

    $('#reviews').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 579,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $('.open-modal').click(() => {
        $('#reservation-container').css('display', 'flex')
    });

    $('#reservation-cancel-close, #reservation-container').click((e) => {
        if (e.target.id === 'reservation-container' || e.target.id === 'reservation-cancel-close') {
            $('#reservation-container').hide();
        }
    });

    $('#reserve-button > button').click(() => {
        let name = $('#name');
        let count = $('#count');
        let phone = $('#phone');
        let time = $('#time');

        if (name.val() && count.val() && phone.val() && time.val()) {
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name=' + name.val() + '&count=' + count.val() + '&phone=' + phone.val() + '&time=' + time.val(),
                success: () => {
                    $('#reservation-sent').show();
                    $('#reservation-content').hide();
                },
                error: () => {
                    $('#reservation-container').hide();
                    alert('Ошибка бронирования. Просим связаться с нами по номеру телефона')
                }
            });
        } else {
            $('#reserve-error').css('opacity', '1');
        }
    });

    $('#burger').click(() => {
        $('header').toggleClass('menu-open');
        $('#close-button').show()
    });

    $('#close-button').click(() => {
        $('header').removeClass('menu-open');
        $('#close-button').hide()
    });

    $('header #menu ul li a').click(() => {
        $('header').removeClass('menu-open');
        $('#close-button').hide()
    });

});
