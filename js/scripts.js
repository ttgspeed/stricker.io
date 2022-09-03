(function($){
"use strict";
	$(window).on('load', function(){
		$('.fade-in').css({ position: 'relative', opacity: 0, top: -14 });
		setTimeout(function(){
			$('#preload-content').fadeOut(400, function(){
				$('#preload').fadeOut(800);
				setTimeout(function(){
					$('.fade-in').each(function(index) {
						$(this).delay(400*index).animate({ top : 0, opacity: 1 }, 800);
					});
				}, 800);
			});
		}, 400);
	});

	$(document).ready( function(){

		// Add YouTube video background
		var bgVideo = $('#bg-video');
		if ( !device.tablet() && !device.mobile() ) {
			bgVideo.YTPlayer();
			$('#bg-video-volume').click(function(e){
				var bgVideoVol = $(this);
				e.preventDefault();
				if( bgVideoVol.hasClass('fa-mute') ) {
					bgVideoVol.removeClass('fa-mute').addClass('fa-sound').attr('title', 'Mute');
					bgVideo.YTPUnmute();
				} else {
					bgVideoVol.removeClass('fa-sound').addClass('fa-mute').attr('title', 'Unmute');
					bgVideo.YTPMute();
				}
			});
			$('#bg-video-play').click(function(e){
				var bgVideoPlay= $(this);
				e.preventDefault();
				if( bgVideoPlay.hasClass('fa-pause') ) {
					bgVideoPlay.removeClass('fa-pause').addClass('fa-play').attr('title', 'Play');
					bgVideo.YTPPause();
				} else {
					bgVideoPlay.removeClass('fa-play').addClass('fa-pause').attr('title', 'Pause');
					bgVideo.YTPPlay();
				}
			});
		} else {
			var posterUrl = bgVideo.data('poster');
			if ( posterUrl )
				$.backstretch(posterUrl);
			$('#bg-video-controls').hide();
		}
	});

})(jQuery);
