console.log("Worst Syntax Ever loaded.");

var substringIndex;
const replace = function (string, substring_f, substring_r) {
	do {
		substringIndex = string.indexOf(substring_f);
		string = string.replace(substring_f, substring_r);
	} while (substringIndex !== -1)
	return string;
}

// Store page text in a variable
var page = document.body.innerText;

// All WSE syntax is stored here
const wse = {
	"syntax": {
		"symbols": "%%use-symbols%%%",
		"z": "%%use-z%%%"
	},
	"symbols": {
		"main": {
			"opener": "~[`$*`'|,>{",
			"closer": "}<./`'$*'`]~~"
		},
		"italic": {
			"opening": "_-#(",
			"closing": ")-_#"
		},
		"bold": {
			"opening": "_-@(",
			"closing": ")-_@"
		},
		"underlined": {
			"opening": "_-$(",
			"closing": ")-_$"
			// Italic styling
		}
	},
	//
	"z": {
		//
		"main": {
			// The syntax for z mode is stored as the number of "z"s
			"opener": 3,
			"closer": 5
		},
		"italic": {
			"opening": 6,
			"closing": 4
			// Italic styling
		}
	}
}

const parseSymbols = function () {
	console.log("Symbol syntax enabled.");
	const sym_c = [
		wse.symbols.main.opener,
		wse.symbols.main.closer,
		wse.symbols.italic.opening,
		wse.symbols.italic.closing,
		wse.symbols.bold.opening,
		wse.symbols.bold.closing,
		wse.symbols.underlined.opening,
		wse.symbols.underlined.closing
	];
	for (var i = 2; i < sym_c.length; i += 2) {
		sym_c[i] = sym_c[0] + sym_c[i];
		sym_c[i + 1] += sym_c[1];
	}

	page = replace(page, wse.syntax.symbols, "");

	page = replace(page, sym_c[2], "<span style='font-style: italic;'>");
	page = replace(page, sym_c[3], "</span>");

	page = replace(page, sym_c[4], "<span style='font-weight: bold;'>");
	page = replace(page, sym_c[5], "</span>");

	page = replace(page, sym_c[6], "<span style='text-decoration: underline;'>");
	page = replace(page, sym_c[7], "</span>");
}
const parseZ = function () {
	console.log("z syntax enabled.");
	const z_c = [
		wse.z.main.opener,
		wse.z.main.closer,
		wse.z.italic.opening,
		wse.z.italic.closing
	];
	var symbol;
	for (var i = 0; i < z_c.length; i ++) {
		symbol = "";
		for (var j = 0; j < z_c[i]; j ++) {
			symbol += "z";
		}
		z_c[i] = symbol;
	}
	for (var i = 2; i < z_c.length; i += 2) {
		z_c[i] = z_c[0] + z_c[i];
		z_c[i + 1] += z_c[1];
	}

	page = replace(page, z_c[2], "<span style='font-style: italic;'>");
	page = replace(page, z_c[3], "</span>");
	console.log(z_c)

	page = replace(page, wse.syntax.z, "");
}

const u_sym = page.indexOf(wse.syntax.symbols);
const u_z = page.indexOf(wse.syntax.z);
if (u_sym !== -1) {
	parseSymbols();
}
else if (u_z !== -1) {
	parseZ();
}
else {
	parseSymbols();
}

document.body.innerHTML = page;
