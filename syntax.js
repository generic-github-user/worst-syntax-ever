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
		"styles": {
			"divided": [
				{
					"name": "italic",
					"opening": {
						"syntax": "_-#(",
						"result": "<span style='font-style: italic;'>"
					},
					"closing": {
						"syntax": ")-_#",
						"result": "</span>"
					}
				},
				{
					"name": "bold",
					"opening": {
						"syntax": "_-@(",
						"result": "<span style='font-weight: bold;'>"
					},
					"closing": {
						"syntax": ")-_@",
						"result": "</span>"
					}
				},
				{
					"name": "underlined",
					"opening": {
						"syntax": "_-$(",
						"result": "<span style='text-decoration: underline;'>"
					},
					"closing": {
						"syntax": ")-_$",
						"result": "</span>"
					}
				}
			],
			"full": [
				{
					"name": "line_break",
					"syntax": "__*-?",
					"result": "<br />"
				}
			]
		}
	},
	"z": {
		"main": {
			"opener": 3,
			"closer": 5
		},
		"styles": {
			"italic": {
				"opening": 6,
				"closing": 4
			}
		}
	}
}
