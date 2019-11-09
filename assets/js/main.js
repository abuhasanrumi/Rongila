$(document).ready(function(){$(window).scroll(function(){if($(this).scrollTop()>0){$('.header').addClass('sticky');}
else{$('.header').removeClass('sticky');}});var $grid=$('.portfolio-item').isotope({});$('.port-nav').on('click','li',function(){var filterValue=$(this).attr('data-filter');$grid.isotope({filter:filterValue});});$('.port-nav ul li').on('click',function(){$('.port-nav ul li').removeClass('mactive');$(this).addClass('mactive');})
$("#myCarousel").carousel();$(".item").click(function(){$("#myCarousel").carousel(1);});})
$("#navSameID1,#navSameID2,#navSameID3,#navSameID4,#navSameID5,#navSameID6,#navSameID7").click(function(){$("#myNav").css("width","0%")});function openNav(){document.getElementById("myNav").style.width="100%"}
function closeNav(){document.getElementById("myNav").style.width="0%"}
wow.init()