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
		}
	},
	"z": {
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
