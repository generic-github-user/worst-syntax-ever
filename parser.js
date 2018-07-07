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
	"syntax": {
		"symbols": "%%use-symbols%%%",
		"spaces": "%%use-spaces%%%"
	},
	"symbols": {
		"main": {
			"opener": "~[`$*`'|,>{",
			"closer": "}<./`'$*'`]~~"
		},
		"italic": {
			"opening": "_-#(",
			"closing": ")-_#"
		}
	},
	"spaces": {
		"main": {
			"opener": 3,
			"closer": 5
		},
		"italic": {
			"opening": 6,
			"closing": 4
		}
	}
}

const parseSymbols = function () {
	console.log("Symbol syntax enabled.");
	const sym_c = [
		wse.symbols.main.opener,
		wse.symbols.main.closer,
		wse.symbols.italic.opening,
		wse.symbols.italic.closing
	];
	for (var i = 2; i < sym_c.length; i += 2) {
		sym_c[i] = sym_c[0] + sym_c[i];
		sym_c[i + 1] += sym_c[1];
	}

	page = replace(page, wse.syntax.symbols, "");

	page = replace(page, sym_c[2], "<span style='font-style: italic;'>");
	page = replace(page, sym_c[3], "</span>");
}
const parseSpaces = function () {
	console.log("Space syntax enabled.");
	const spa_c = [
		wse.spaces.main.opener,
		wse.spaces.main.closer,
		wse.spaces.italic.opening,
		wse.spaces.italic.closing
	];

	page = replace(page, wse.syntax.spaces, "");
}

const u_sym = page.indexOf(wse.syntax.symbols);
const u_spa = page.indexOf(wse.syntax.spaces);
if (u_sym !== -1) {
	parseSymbols();
}
else if (u_sym !== -1) {
	parseSpaces();
}
else {
	parseSymbols();
}

document.body.innerHTML = page;
