
 AOS.init();


$('.modal>div').click(function() {
  $('.modal').css('display','none');
})

// $('.content01').click(function(){
//   if($('.bg01').hasClass('swiper-slide-active')){
//     $('.swiper-button-prev, .swiper-button-next, .swiper-pagination').css('color','#fff');
//     console.log('hey');
//   } else {
//     $('.swiper-button-prev, .swiper-button-next, .swiper-pagination').css('color','#000');
//     console.log('by');
//   }
// })

// $('.swiper-wrapper').addEventListener("drag", function() {
//   if($('.bg01').hasClass('swiper-slide-active')){
//     $('.swiper-button-prev, .swiper-button-next, .swiper-pagination').css('color','#fff');
//     console.log('hey');
//   } else {
//     $('.swiper-button-prev, .swiper-button-next, .swiper-pagination').css('color','#000');
//     console.log('by');
//   }
// }, false);



// top move button

$(window).scroll(function(){

	if ($(this).scrollTop() > 300){
		$('.move-top').show();
	} else {
    $('.move-top').hide();
  }
  
  // if($(this).width() > 750){
  //   if ($(this).scrollTop() > 2600){
  //     $('.move-top').addClass('move-top-ab');
  //   } else {
  //     $('.move-top').removeClass('move-top-ab');
  //   }
  // } else {
  //   console.log('hey')
  //   if ($(this).scrollTop() > 2150){
  //     $('.move-top').addClass('move-top-ab');
  //   } else {
  //     $('.move-top').removeClass('move-top-ab');
  //   }
  // }

});

$('.move-top').click(function(){
	$('html, body').animate({
    scrollTop:0
  },400);
	return false;
});

// move top button end


$('.menu-btn').click(function(){
    $('.menu-nav').slideToggle();
})

var swiper = new Swiper(".mySwiper", {
    loop: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // on: {
    //   slideChange: function () {
    //     if($('.swiper-slide-active').hasClass('bg01')){
    //       $('.swiper-button-prev, .swiper-button-next, .swiper-pagination').addClass('bg01Active')
    //     } else if (!$('.swiper-slide-active').hasClass('bg01')) {
    //       $('.swiper-button-prev, .swiper-button-next, .swiper-pagination').removeClass('bg01Active')
    //     }
    //   }
    // }
  });

//   $('.bg01').on('classChange', function() {
//     console.log('do')
//     if($('.bg01').hasClass('swiper-slide-active')){
//       $('.swiper-button-prev, .swiper-button-next, .swiper-pagination').css('color','#fff');
//       console.log('hey');
//     } else {
//       $('.swiper-button-prev, .swiper-button-next, .swiper-pagination').css('color','#000');
//       console.log('by');
//     }
// });

// $(".swiper-slide-active").attrchange({
//   trackValues: true, // set to true so that the event object is updated with old & new values
//   callback: function(evnt) {
//       if(evnt.attributeName == "transform") { // which attribute you want to watch for changes
//         if($('.bg01').hasClass('swiper-slide-active')){
//           $('.swiper-button-prev, .swiper-button-next, .swiper-pagination').css('color','#fff');
//           console.log('hey');
//         } else {
//           $('.swiper-button-prev, .swiper-button-next, .swiper-pagination').css('color','#000');
//           console.log('by');
//         }
//       }
//   }
// });

$('body').mousedown(function(e){
  console.log(e.target)
  if($('.bg01').hasClass('swiper-slide-active')){
    // $('.swiper-button-prev, .swiper-button-next, .swiper-pagination').addClass('bg01Active');
    $('.swiper-button-prev, .swiper-button-next, .swiper-pagination').css('color','#fff')
    console.log('hey!')
  } else if (!$('.swiper-slide-active').hasClass('bg01')) {
    $('.swiper-button-prev, .swiper-button-next, .swiper-pagination').css('color','#000')
    console.log('bye')
  }
})