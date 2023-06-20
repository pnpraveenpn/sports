// Tab001
$(document).ready(function () {
    var news1 = $("#programLarge");
    var news2 = $("#programThumb");
    var slidesPerPage = 4;
    var syncedSecondary = true;

    var homeslider = $("#homeslider");
    homeslider.owlCarousel({
        loop: false,
        margin: 30,
        nav: true,
        dots: false,
        navText: ["<div class='nav-button owl-prev'><img src='./assets/images/arrow-prev.svg'/></div>", "<div class='nav-button owl-next'><img src='./assets/images/arrow-next.svg'/></div>"]
    })



    news1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: false,
        autoplay: false,
        dots: false,
        loop: true,
        touchDrag: true,
        mouseDrag: true,
        animateIn: "fadeIn",
        responsiveRefreshRate: 200
    }).
        on('changed.owl.carousel', syncPosition);

    news2.
        on('initialized.owl.carousel', function () {
            news2.find(".owl-item").eq(0).addClass("current");
        }).
        owlCarousel({
            items: slidesPerPage,
            dots: false,
            nav: false,
            smartSpeed: 200,
            slideSpeed: 500,
            margin: 20,
            touchDrag: true,
            mouseDrag: true,
            slideBy: slidesPerPage,
            responsiveRefreshRate: 100,
            navText: ["<div class='nav-button owl-prev'><img src='./assets/images/arrow-prev.svg'/></div>", "<div class='nav-button owl-next'><img src='./assets/images/arrow-next.svg'/></div>"]
        }).
        on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - el.item.count / 2 - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        news2.
            find(".owl-item").
            removeClass("current").
            eq(current).
            addClass("current");
        var onscreen = news2.find('.owl-item.active').length - 1;
        var start = news2.find('.owl-item.active').first().index();
        var end = news2.find('.owl-item.active').last().index();

        if (current > end) {
            news2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            news2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            news1.data('owl.carousel').to(number, 100, true);
        }
    }

    news2.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        news1.data('owl.carousel').to(number, 300, true);
    });
});

$(".dropdown-menu .dropdown-item").click(function () {
    var selText = $(this).text();
    $(this).parents('.dropdown').find('#dropdownmenu').html(selText + ' <span class="caret"></span>');
});


// document.getElementById("myButton").onclick = function () {
//     location.href = "kheloIndia.html";
//     $('.specialprice').find('.priceis').addClass('strike');
// }; 



$(document).ready(function () {
    $('#fitIndia').click(function () {
        window.location.pathname = 'kheloIndia.html';
        var get = document.getElementsByClassName("programThumb")
    })
    $('#websitePage').hide();
});

function OpenPage(pageid) {
    $('#home_page').hide();
    $('#inner_page').show();
    $('.owl-stage').find('.owl-item').removeClass('current');
    $('#page' + pageid).closest(".owl-item").addClass('current');
    $('#page' + pageid).trigger('click');
}

var siteurl = ['https://kheloindia.gov.in/', 'https://fitindia.gov.in/', 'https://sportsauthorityofindia.nic.in/sai/target-olympic-podium', 'https://sportsauthorityofindia.nic.in/sai/'];

function OpenWebPage(divid) {
    $('#home_page').hide();
    $('#inner_page').hide();   
    $('#website_url').attr('src', siteurl[divid]);
    $('#websitePage').show();
}

function GoBack(){
    $('#home_page').hide();
    $('#websitePage').hide();
    $('#inner_page').show();   
}