console.log("Worst Syntax Ever loaded.");
var page = document.body.innerHTML;

const parseSymbols = function () {
	console.log("Symbol syntax enabled.");

	page = page.replace("-#(", "<span style='font-style: italic;'>");
	page = page.replace(")-#", "<span style='font-style: italic;'>");
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
