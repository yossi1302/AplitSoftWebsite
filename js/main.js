function main() {

    (function() {
        'use strict';

        $('a.page-scroll').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 40
                    }, 900);
                    return false;
                }
            }
        });


        // Show Menu on Book
        $(window).bind('scroll', function() {
            var navHeight = $(window).height() - 500;
            if ($(window).scrollTop() > navHeight) {
                $('.navbar-default').addClass('on');
            } else {
                $('.navbar-default').removeClass('on');
            }
        });

        $('body').scrollspy({
            target: '.navbar-default',
            offset: 80
        });

        // Hide nav on click
        $(".navbar-nav li a").click(function(event) {
            // check if window is small enough so dropdown is created
            var toggle = $(".navbar-toggle").is(":visible");
            if (toggle) {
                $(".navbar-collapse").collapse('hide');
            }
        });



    }());


}
main();

const popup = document.querySelector('.full-screen');
const popup1 = document.querySelector('.full-screen1');
const popup2 = document.querySelector('.full-screen2');
const popup3 = document.querySelector('.full-screen3');

function showPopup() {
    popup.classList.remove('hidden');
    document.getElementById("aboutA").innerHTML = "";
    document.getElementById("servicesA").innerHTML = "";
    document.getElementById("clientsA").innerHTML = "";
    document.getElementById("contactsA").innerHTML = "";
    document.getElementById("logo").style.display = "none";
}

function closePopup() {
    popup.classList.add('hidden');
    document.getElementById("aboutA").innerHTML = "About";
    document.getElementById("servicesA").innerHTML = "Services";
    document.getElementById("clientsA").innerHTML = "Clients";
    document.getElementById("contactsA").innerHTML = "Contact";
    document.getElementById("logo").style.display = "inline";

}

function showPopup1() {
    popup1.classList.remove('hidden');
    document.getElementById("aboutA").innerHTML = "";
    document.getElementById("servicesA").innerHTML = "";
    document.getElementById("clientsA").innerHTML = "";
    document.getElementById("contactsA").innerHTML = "";
    document.getElementById("logo").style.display = "none";

}

function closePopup1() {
    popup1.classList.add('hidden');
    document.getElementById("aboutA").innerHTML = "About";
    document.getElementById("servicesA").innerHTML = "Services";
    document.getElementById("clientsA").innerHTML = "Clients";
    document.getElementById("contactsA").innerHTML = "Contact";
    document.getElementById("logo").style.display = "inline";

}

function showPopup2() {
    popup2.classList.remove('hidden');
    document.getElementById("aboutA").innerHTML = "";
    document.getElementById("servicesA").innerHTML = "";
    document.getElementById("clientsA").innerHTML = "";
    document.getElementById("contactsA").innerHTML = "";
    document.getElementById("logo").style.display = "none";

}

function closePopup2() {
    popup2.classList.add('hidden');
    document.getElementById("aboutA").innerHTML = "About";
    document.getElementById("servicesA").innerHTML = "Services";
    document.getElementById("clientsA").innerHTML = "Clients";
    document.getElementById("contactsA").innerHTML = "Contact";
    document.getElementById("logo").style.display = "inline";

}

function showPopup3() {
    popup3.classList.remove('hidden');
    document.getElementById("aboutA").innerHTML = "";
    document.getElementById("servicesA").innerHTML = "";
    document.getElementById("clientsA").innerHTML = "";
    document.getElementById("contactsA").innerHTML = "";
    document.getElementById("logo").style.display = "none";

}

function closePopup3() {
    popup3.classList.add('hidden');
    document.getElementById("aboutA").innerHTML = "About";
    document.getElementById("servicesA").innerHTML = "Services";
    document.getElementById("clientsA").innerHTML = "Clients";
    document.getElementById("contactsA").innerHTML = "Contact";
    document.getElementById("logo").style.display = "inline";

}

function alert() {
    var x = document.getElementById("alert");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

$("#Next").click(function(){
	$("#Slider").append($("#Slider img:first-of-type"));
});

$("#Prev").click(function(){
	$("#Slider").prepend($("#Slider img:last-of-type"));
});