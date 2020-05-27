
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

	// affix the navbar after scroll below header
$('#nav').affix({
      offset: {
        top: $('header').height()
      }
});	

	// timeline
	$(document).ready(function(e) {
	//var windowBottom = $(window).height();
	var index=0;
	$(document).scroll(function(){
		var timelineBottom = $(document).height() - ($('#skills').height()*1.5);
        var currentPosition = $(window).scrollTop();
		if(currentPosition>timelineBottom){
			if(index==0){	
            
                $(document).ready(function() {
                    var appear, items, offline, online, timeline, timelineUl, toggleBottom, toggleTop;
                    timeline = $('#timeline');
                    toggleTop = $("#toggleTop");
                    toggleBottom = $("#toggleBottom");
                    online = $('.online');
                    offline = $('.offline');
                    toggleTop.change(function() {
                      if (this.checked) {
                        toggleBottom.prop('checked', true);
                        timeline.removeClass('showOnline', 300).removeClass('hideOffline', 300);
                        online.fadeOut(300, function() {
                          offline.fadeIn(300);
                          return timeline.addClass('showOffline', 300);
                        });
                        return timeline.addClass('hideOnline', 300);
                      } else {
                        toggleBottom.prop('checked', false);
                        timeline.removeClass('showOffline', 300).removeClass('hideOnline', 300);
                        offline.fadeOut(300, function() {
                          online.fadeIn(300);
                          return timeline.addClass('showOnline', 300);
                        });
                        return timeline.addClass('hideOffline', 300);
                      }
                    });
                    toggleBottom.change(function() {
                      if (this.checked) {
                        toggleTop.prop('checked', true);
                        timeline.removeClass('showOnline', 300).removeClass('hideOffline', 300);
                        online.fadeOut(300, function() {
                          offline.fadeIn(300);
                          return timeline.addClass('showOffline', 300);
                        });
                        return timeline.addClass('hideOnline', 300);
                      } else {
                        toggleTop.prop('checked', false);
                        timeline.removeClass('showOffline', 300).removeClass('hideOnline', 300);
                        offline.fadeOut(300, function() {
                          online.fadeIn(300);
                          return timeline.addClass('showOnline', 300);
                        });
                        return timeline.addClass('hideOffline', 300);
                      }
                    });
                    timelineUl = timeline.find('ul');
                    items = [];
                    $.getJSON("projects.json").done(function(data) {
                      $.each(data.items, function(i, item) {
                        items.push(item);
                        console.log(item);
                        console.log(i);
                        return console.log(items);
                      });
                      return $.each(items, function(i, item) {
                        var link, skill, _i, _j, _len, _len1, _ref, _ref1;
                        if (items[i].type === "event") {
                          timelineUl.append(console.log('event append'), '<li class="group item"> <!-- Event --> <section class="col-6 col-tab-12 col-ph-12 row event"> <div class="col-1 col-sm-2 col-ph-2 date"> <p>' + items[i].year + '</p> </div> <div class="col-11 col-sm-10 col-ph-10 eventText"> <h4 class="inlineBlock">' + items[i].title + '</h4> </div> </section> </li> <!-- event -->');
                        } else if (items[i].type === "project") {
                          timelineUl.append(console.log('project append'), '<li class="group item"> <!-- Project --> <section class="col-6 col-tab-12 col-ph-12 row project "> <div class="col-1 col-sm-2 col-ph-2 date"> <p>' + items[i].year + '</p> </div> <figure class="col-7 col-sm-9 col-ph-9 thumb"> <img src="' + items[i].img + '" alt="' + items[i].title + '"/> <figcaption> <h4>Project scope:</h4> <p>' + items[i].description + '</p> <h4>My roles:</h4> <ul></ul> </figcaption> </figure> <div class="col-4 col-sm-9 col-ph-9 info"> <h3>' + items[i].title + '</h3> <ul class="extlinks inlineList"></ul> <ul class="skills"></ul> </div> </section> </li> <!-- project -->');
                          _ref = items[i].extLinks;
                          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                            link = _ref[_i];
                            timelineUl.find('.extlinks:last').append('<li><a href="' + link.url + '" target="_blank"><i class="fa fa-' + link.icon + '"></i></a></li>');
                          }
                          _ref1 = items[i].skills;
                          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
                            skill = _ref1[_j];
                            timelineUl.find('.skills:last').append('<li><span>' + skill + '</span></li>');
                          }
                        }
                        if (items[i].scope === "online") {
                          return timelineUl.find('.item:last').addClass('online');
                        } else {
                          return timelineUl.find('.item:last').addClass('offline');
                        }
                      });
                    });
                    appear = function(elem) {
                      var elemFontSize;
                      elemFontSize = elem.css('fontSize');
                      return elem.animate({
                        opacity: 1,
                        fontSize: parseInt(elemFontSize) * 1.2
                      }, 300, (function(_this) {
                        return function() {
                          return elem.animate({
                            fontSize: elemFontSize
                          }, 100);
                        };
                      })(this));
                    };
                    setTimeout(function() {
                      return appear($('.fa-certificate'));
                    }, 400);
                    setTimeout(function() {
                      return appear($('.fa-bolt'));
                    }, 1000);
                    setTimeout(function() {
                      return $('.ribbon').animate({
                        opacity: 1,
                        top: 0
                      }, 250);
                    }, 2400);
                    setTimeout(function() {
                      $('#timeline').animate({
                        opacity: 1
                      }, 800);
                      return appear($('header .longLink'));
                    }, 3800);
                    $.fn.reverse = [].reverse;
                    setTimeout(function() {
                      var listItems;
                      listItems = $('#timeline > ul > li').reverse();
                      return listItems.each(function(i) {
                        console.log(i);
                        return $(this).hide().delay(i * 3400).slideDown(600);
                      });
                    }, 5600);
                    return $('.thumb').hover(function() {
                      $(this).find('img').css('opacity', '0.05').wrap('<div class="tint"></div>');
                      return $(this).find('figcaption').css('visibility', 'visible');
                    }, function() {
                      $(this).find('img').css('opacity', '1').unwrap();
                      return $(this).find('figcaption').css('visibility', 'hidden');
                    });
                  });
			
				}
			index++;
		}
	})
	//console.log(nagativeValue)
	});

	// skills chart
	$(document).ready(function(e) {
	//var windowBottom = $(window).height();
	var index=0;
	$(document).scroll(function(){
		var top = $('#skills').height()-$(window).scrollTop();
		console.log(top)
		if(top<-10){
			if(index==0){	
				$('.chart').easyPieChart({
					easing: 'easeOutBounce',
					onStep: function(from, to, percent) {
						$(this.el).find('.percent').text(Math.round(percent));
					}
				});
			
				}
			index++;
		}
	})
	//console.log(nagativeValue)
	});

  	// Portfolio isotope filter
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
	
	  	
    // CounterUp
	$(document).ready(function( $ ) {
		if($("span.count").length > 0){	
			$('span.count').counterUp({
					delay: 10, // the delay time in ms
			time: 1500 // the speed time in ms
			});
		}
	});
	
  	// Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});	

}());


}
main();