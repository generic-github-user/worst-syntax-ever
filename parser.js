console.log("Worst Syntax Ever loaded.");

var substringIndex;
function replace(string, substring_f, substring_r) {
	do {
		substringIndex = string.indexOf(substring_f);
		stringLength = string.length;
		string = string
			.slice(0, substringIndex)
			+
			substring_r
			+
			string.slice(substringIndex + substring_r.length - 1, stringLength - 1)
	} while (substringIndex !== -1)
	return string;
}

var page = document.body.innerHTML;

const wse = {
	"main": {
		"opener": "~[`$*`'|,>{",
		"closer": "}<.|`'$*']~~"
	},
	"system": {
		"symbols": "%%use-symbols%%%",
		"spaces": "%%use-spaces%%%"
	},
	"symbols": {
		"italic": {
			"opening": "_-#(",
			"closing": ")-_#"
		}
	}
}
const wse_c = [
	wse.main.opener,
	wse.main.closer,
	wse.system.symbols,
	wse.system.spaces,
	wse.symbols.italic.opening,
	wse.symbols.italic.closing
];
for (var i = 4; i < wse_c.length; i += 2) {
	wse_c[i] = wse.main.opener + wse_c[i];
	wse_c[i + 1] += wse.main.closer;
}
wse_c[2] = wse_c[0] + wse_c[2] + wse_c[1];
wse_c[3] = wse_c[0] + wse_c[3] + wse_c[1];
for (var i = 0; i < wse_c.length; i ++) {
	wse_c[i] = escapeHTML(wse_c[i]);
	wse_c[i] = escape(wse_c[i]);
}

const parseSymbols = function () {
	console.log("Symbol syntax enabled.");
	page = page.replace(new RegExp(wse_c[2], "g"), "");

	page = page.replace(new RegExp(wse_c[4], "g"), "<span style='font-style: italic;'>");
	page = page.replace(new RegExp(wse_c[5], "g"), "</span>");
}
const parseSpaces = function () {
	console.log("Space syntax enabled.");
	page = page.replace(new RegExp(wse_c[3], "g"), "");
}

const u_sym = page.indexOf(wse_c[2]);
const u_spa = page.indexOf(wse_c[3]);
if (u_sym !== -1) {
	parseSymbols();
}
else if (u_sym !== -1) {
	parseSpaces();
}
else {
	parseSymbols();
}

console.log(page);
console.log(unescape(page));
document.body.innerHTML = unescape(page);
