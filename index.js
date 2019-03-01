'use strict';

/**
 * Escapes special characters in a string for use in an SQL statement.
 * Prepends a backslash to backslash, percent, and double/single quotes
 *
 * @param	string
 * @return	string
 */
exports.escape_string = function( str ) {
	return str.replace( /[\0\x08\x09\x1a\n\r"'\\\%]/g, function ( char ) {
		switch (char) {
			case "\0":
				return "\\0";
			case "\x08":
				return "\\b";
			case "\x09":
				return "\\t";
			case "\x1a":
				return "\\z";
			case "\n":
				return "\\n";
			case "\r":
				return "\\r";
			case "\"":
			case "'":
			case "\\":
			case "%":
				return "\\" + char;
		}
	});
}
// --------------------------------------------------------------------

/**
 * Cross Site Scripting prevention filter, which looks for commonly used 
 * techniques to trigger JavaScript or other types of code that attempt 
 * to hijack cookies or do other malicious things. If anything disallowed 
 * is encountered it is rendered safe by converting the data to character 
 * entities.
 *
 * @param	string
 * @return	string
 */
exports.sanitizer = function( str ) {
	var map = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&#x27;',
		"/": '&#x2F;',
	};
	var reg = /[&<>"'/]/ig;
	return str.replace( reg, ( match ) =>( map[match] ) );
}
// --------------------------------------------------------------------