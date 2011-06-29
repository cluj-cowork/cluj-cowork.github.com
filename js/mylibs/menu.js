/*jslint white:false */
/*global document, window, setTimeout, clearTimeout, console, log, require, define */
(function ($) {
	
	//event namespace
	var NS = 'hiveMenu',
	
	Menu = function ($root, o) {
		
		var god = this;
		
		god.$branches = $root.find(o.sBranch);
		god.$trigs = god.$branches.find(o.sTrig);
		god.$items = god.$branches.find(o.sItems);
		
		god.currentBranch = false; // current open branch
		god.aiming = false; // delayed kill timer

		
		god.kill = function (args) {
			
			var p = god.currentBranch;
			
			args = $.extend({
				delay: false
			}, args);
			
			var exec = function () {
				p.$elem.removeClass('open');
				god.currentBranch = false;
			};
				
			if (args.delay === false) {
				exec();
			} else {
				god.aiming = setTimeout(function () {
					exec();
				}, args.delay);
			}
		};
		
		
		var setCurrent = function (index) {
			
			var pieces = {
				i: index,
				$elem: god.$branches.eq(index),
				$items: god.$items.eq(index)
			};
			
			god.currentBranch = pieces;
			return pieces;
		};
		
		
		god.open = function (index) {
			
			var p = god.currentBranch;

			if (p !== false) {
				if (p.i === index) { // bail when jumping the same branch 
					return false;
				}
				god.kill(); // kill current branch
			}
			
			p = setCurrent(index);

			p.$elem.addClass('open');
		};
		
		
		god.$trigs.bind('mouseenter.' + NS, function () {
			clearTimeout(god.aiming);
			god.open(god.$trigs.index(this));
		}).bind('mouseleave.' + NS, function () {
			god.kill({ delay: o.aimingSpeed });
		});
		
		god.$items.bind('mouseenter.' + NS, function () {
			clearTimeout(god.aiming); 
		}).bind('mouseleave.' + NS, function () {
			god.kill({ delay: o.aimingSpeed });
		});
		

		return god;
	};
	
	$.fn.menu = function (opts) {
	
		opts = $.extend({
			sBranch: '.branch',
			sTrig: '.trig',
			sItems: '.items',
			
			aimingSpeed: 1200
		}, opts);

		return this.length && new Menu(this, opts);
		
	};
	
	
	
}(window.jQuery));
