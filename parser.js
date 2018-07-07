console.log("Worst Syntax Ever loaded.");

var substringIndex;
const replace = function (string, substring_f, substring_r) {
	do {
		substringIndex = string.indexOf(substring_f);
		string = string.replace(substring_f, substring_r);
	} while (substringIndex !== -1)
	return string;
}

var page = document.body.innerText;

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

const parseSymbols = function () {
	console.log("Symbol syntax enabled.");
	page = replace(page, wse_c[2], "");

	page = replace(page, wse_c[4], "<span style='font-style: italic;'>");
	page = replace(page, wse_c[5], "</span>");
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
document.body.innerHTML = page;
