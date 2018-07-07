console.log("Worst Syntax Ever loaded.");
var page = document.body.innerHTML;

const wse = {
	"main": {
		"opener": "~[`$*`'|{",
		"closer": "}/`'$*']~~"
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
	wse.symbols.italic.opening,
	wse.symbols.italic.closing
];
for (var i = 2; i < wse_c.length; i += 2) {
	wse_c[i] = wse.main.opener + wse_c[i];
	wse_c[i + 1] += wse.main.closer;
}

const parseSymbols = function () {
	console.log("Symbol syntax enabled.");

	page = page.replace(wse_c[2], "<span style='font-style: italic;'>");
	page = page.replace(wse_c[3], "<span style='font-style: italic;'>");
}
const parseSpaces = function () {
	console.log("Space syntax enabled.");
}

const u_sym = page.indexOf("%use-symbols%");
const u_spa = page.indexOf("%use-spaces%");
if (u_sym !== -1) {
	parseSymbols();
}
else if (u_sym !== -1) {
	parseSpaces();
}
else {
	parseSymbols();
}

page = page.replace(/%use-symbols%/g, "");
page = page.replace(/%use-spaces%/g, "");

document.body.innerHTML = page;
