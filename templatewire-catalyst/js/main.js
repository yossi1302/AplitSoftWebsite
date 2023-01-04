
function main() {

(function () {
   'use strict';
   
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
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
  $(".navbar-nav li a").click(function (event) {
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

function showPopup(){
  popup.classList.remove('hidden');
  document.getElementById("aboutA").innerHTML = "";
  document.getElementById("servicesA").innerHTML = "";
  document.getElementById("clientsA").innerHTML = "";
  document.getElementById("contactsA").innerHTML = "";
}

function closePopup(){
  popup.classList.add('hidden');
  document.getElementById("aboutA").innerHTML = "About";
  document.getElementById("servicesA").innerHTML = "Services";
  document.getElementById("clientsA").innerHTML = "Clients";
  document.getElementById("contactsA").innerHTML = "Contact";
}

function showPopup1(){
  popup1.classList.remove('hidden');
  document.getElementById("aboutA").innerHTML = "";
  document.getElementById("servicesA").innerHTML = "";
  document.getElementById("clientsA").innerHTML = "";
  document.getElementById("contactsA").innerHTML = "";
}

function closePopup1(){
  popup1.classList.add('hidden');
  document.getElementById("aboutA").innerHTML = "About";
  document.getElementById("servicesA").innerHTML = "Services";
  document.getElementById("clientsA").innerHTML = "Clients";
  document.getElementById("contactsA").innerHTML = "Contact";
}

function showPopup2(){
  popup2.classList.remove('hidden');
  document.getElementById("aboutA").innerHTML = "";
  document.getElementById("servicesA").innerHTML = "";
  document.getElementById("clientsA").innerHTML = "";
  document.getElementById("contactsA").innerHTML = "";
}

function closePopup2(){
  popup2.classList.add('hidden');
  document.getElementById("aboutA").innerHTML = "About";
  document.getElementById("servicesA").innerHTML = "Services";
  document.getElementById("clientsA").innerHTML = "Clients";
  document.getElementById("contactsA").innerHTML = "Contact";
}

function showPopup3(){
  popup3.classList.remove('hidden');
  document.getElementById("aboutA").innerHTML = "";
  document.getElementById("servicesA").innerHTML = "";
  document.getElementById("clientsA").innerHTML = "";
  document.getElementById("contactsA").innerHTML = "";
}

function closePopup3(){
  popup3.classList.add('hidden');
  document.getElementById("aboutA").innerHTML = "About";
  document.getElementById("servicesA").innerHTML = "Services";
  document.getElementById("clientsA").innerHTML = "Clients";
  document.getElementById("contactsA").innerHTML = "Contact";
}

const Mailjet = require('node-mailjet');

const mailjet = new Mailjet({
  apiKey: process.env.MJ_APIKEY_PUBLIC || 'd64116652c3d342f88ee0b559f988549',
  apiSecret: process.env.MJ_APIKEY_PRIVATE || '45bd6bd40733e6d8bb67333808f94710'
});



const request = mailjet
        .post('send', { version: 'v3.1' })
        .request({
          Messages: [
            {
              From: {
                Email: "pilot@mailjet.com",
                Name: "Mailjet Pilot"
              },
              To: [
                {
                  Email: "passenger1@mailjet.com",
                  Name: "passenger 1"
                }
              ],
              Subject: "Your email flight plan!",
              TextPart: "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
              HTMLPart: "<h3>Dear passenger 1, welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3><br />May the delivery force be with you!"
            }
          ]
        })

request
    .then((result) => {
        console.log(result.body)
    })
    .catch((err) => {
        console.log(err.statusCode)
    })