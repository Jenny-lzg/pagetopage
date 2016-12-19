/*
 *作者:pan 
 *时间:2016-06-21 17:11:20
 * 页面传参
 * */
(function($) {
	var defaults = {
		page: null,
		data: null
	};
	var F = {
		pinjie: function(str) {
			var strdata = '';
			for (var x in str.data) {
				strdata += x + '=' + str.data[x] + '&'
			}
			return str.page + '?' + strdata.substring(0, strdata.length - 1);
		},
		jiexi: function(str, dt1) {
			var cfg = {};
			if (str.split('?')[1]) {
				for (var x in str.split('?')[1].split('#')[0].split('&')) {
					cfg[str.split('?')[1].split('#')[0].split('&')[x].split('=')[0]] = str.split('?')[1].split('#')[0].split('&')[x].split('=')[1]
				}
				return cfg[dt1];
			}

		}
	}
	$.extend($.fn, {
		resData: function(options) {
			//这里需要编码  以防止中问传参数乱码
			options = $.extend(defaults, options);
			return encodeURI(F.pinjie(options));
		},
		repData: function(url, dt1) {
			return decodeURI(F.jiexi(url, dt1)?F.jiexi(url, dt1):'');
		}
	});
})(Zepto);
