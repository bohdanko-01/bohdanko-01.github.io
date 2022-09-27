/*
	Phantom by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {

			var path = window.location.pathname;
			var page = path.split("/").pop();
			console.log(page);
			if(page === "index.html"){  // if it is index file - no "back" button needed
				myBackButton.style.display = "none";
				myBackArrow.style.display = "none";
			}
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch?
		if (browser.mobile)
			$body.addClass('is-touch');

	// Forms.
		var $form = $('form');

		// Auto-resizing textareas.
			$form.find('textarea').each(function() {

				var $this = $(this),
					$wrapper = $('<div class="textarea-wrapper"></div>'),
					$submits = $this.find('input[type="submit"]');

				$this
					.wrap($wrapper)
					.attr('rows', 1)
					.css('overflow', 'hidden')
					.css('resize', 'none')
					.on('keydown', function(event) {

						if (event.keyCode == 13
						&&	event.ctrlKey) {

							event.preventDefault();
							event.stopPropagation();

							$(this).blur();

						}

					})
					.on('blur focus', function() {
						$this.val($.trim($this.val()));
					})
					.on('input blur focus --init', function() {

						$wrapper
							.css('height', $this.height());

						$this
							.css('height', 'auto')
							.css('height', $this.prop('scrollHeight') + 'px');

					})
					.on('keyup', function(event) {

						if (event.keyCode == 9)
							$this
								.select();

					})
					.triggerHandler('--init');

				// Fix.
					if (browser.name == 'ie'
					||	browser.mobile)
						$this
							.css('max-height', '10em')
							.css('overflow-y', 'auto');

			});

	// Menu.
		var $menu = $('#menu');

		$menu.wrapInner('<div class="inner"></div>');

		$menu._locked = false;

		$menu._lock = function() {

			if ($menu._locked)
				return false;

			$menu._locked = true;

			window.setTimeout(function() {
				$menu._locked = false;
			}, 350);

			return true;

		};

		$menu._show = function() {

			if ($menu._lock())
				$body.addClass('is-menu-visible');

		};

		$menu._hide = function() {

			if ($menu._lock())
				$body.removeClass('is-menu-visible');

		};

		$menu._toggle = function() {

			if ($menu._lock())
				$body.toggleClass('is-menu-visible');

		};

		$menu
			.appendTo($body)
			.on('click', function(event) {
				event.stopPropagation();
			})
			.on('click', 'a', function(event) {

				var href = $(this).attr('href');

				event.preventDefault();
				event.stopPropagation();

				// Hide.
					$menu._hide();

				// Redirect.
					if (href == '#menu')
						return;

					window.setTimeout(function() {
						window.location.href = href;
					}, 350);

			})
			.append('<a class="close" href="#menu">Close</a>');

		$body
			.on('click', 'a[href="#menu"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$menu._toggle();

			})
			.on('click', function(event) {

				// Hide.
					$menu._hide();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$menu._hide();

			});


			// Get the buttons and arrows
			let myTopButton = document.getElementById("arrow_top_outline");
			let myTopArrow = document.getElementById("arrow_top");

			let myBackButton = document.getElementById("arrow_back_outline");
			let myBackArrow = document.getElementById("arrow_back");

			// When the user scrolls down 20px from the top of the document, show the button
			window.onscroll = function() {scrollFunction()};
			
			function scrollFunction() 
			{
				var path = window.location.pathname;
				var page = path.split("/").pop();			// Checking which page is now open
				if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
				{
					myTopButton.style.display = "block";
					myTopArrow.style.display = "block";
					myBackButton.style.display = "none";
					myBackArrow.style.display = "none";
				} 
				else           // if document wasn't scrolled enough
				{
					myTopButton.style.display = "none";
					myTopArrow.style.display = "none";
					myBackButton.style.display = "block";
					myBackArrow.style.display = "block";
					if(page === "index.html"){				// if it is index file - no "back" button needed
						myBackButton.style.display = "none";
						myBackArrow.style.display = "none";
					}
				}
			}

})(jQuery);





// When the user clicks on the button, scroll to the top of the document

function topFunction() 
{
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
