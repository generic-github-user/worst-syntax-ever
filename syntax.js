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
				},
				{
					"name": "header_1",
					"opening": {
						"syntax": "=1/^[",
						"result": "<h1>"
					},
					"closing": {
						"syntax": "]^=1//",
						"result": "</h1>"
					}
				},
				{
					"name": "header_2",
					"opening": {
						"syntax": "=2/^^[",
						"result": "<h2>"
					},
					"closing": {
						"syntax": "]^^=2//",
						"result": "</h2>"
					}
				},
				{
					"name": "header_3",
					"opening": {
						"syntax": "=3/^^^[",
						"result": "<h3>"
					},
					"closing": {
						"syntax": "]^^^=3//",
						"result": "</h3>"
					}
				},
				{
					"name": "header_4",
					"opening": {
						"syntax": "=4/^^^^[",
						"result": "<h4>"
					},
					"closing": {
						"syntax": "]^^^^=4//",
						"result": "</h4>"
					}
				},
				{
					"name": "header_5",
					"opening": {
						"syntax": "=5/^^^^^[",
						"result": "<h5>"
					},
					"closing": {
						"syntax": "]^^^^^=5//",
						"result": "</h5>"
					}
				},
				{
					"name": "header_6",
					"opening": {
						"syntax": "=6/^^^^^^[",
						"result": "<h6>"
					},
					"closing": {
						"syntax": "]^^^^^^=6//",
						"result": "</h6>"
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
