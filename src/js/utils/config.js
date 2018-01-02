const GLOBALS = {
	prolet: {
		size: 275,
		price: 5,
	},
	stolbs: {
		17: {
			// type : price
			normal: 10,
			reinforced: 12
		},
		20: {
			normal: 14,
			reinforced: 16
		}
	},
	vorotaPositions: [
		{
			label: 'Без ворот',
			id: 'without'
		},
		{
			label: 'Ворота и калитка вместе',
			id: 'together',
		},
		{
			label: 'Ворота и калитка раздельно',
			id: 'different'
		}
	]
}

export default GLOBALS;