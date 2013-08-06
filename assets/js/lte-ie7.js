/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-linkedin' : '&#xe000;',
			'icon-facebook' : '&#xe001;',
			'icon-facebook-2' : '&#xe002;',
			'icon-apple' : '&#xe003;',
			'icon-windows8' : '&#xe004;',
			'icon-twitter' : '&#xe005;',
			'icon-twitter-2' : '&#xe006;',
			'icon-facebook-3' : '&#xe007;',
			'icon-twitter-3' : '&#xe008;',
			'icon-html5' : '&#xe009;',
			'icon-css3' : '&#xe00a;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};