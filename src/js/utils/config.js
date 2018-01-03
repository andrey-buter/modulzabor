const GLOBALS = {
	prolet: {
		size: 275,
		price: 45,
	},
	stolbs: {
		17: {
			// type : price
			normal: 65,
			reinforced: 75
		},
		20: {
			normal: 70,
			reinforced: 80
		}
	},
	vorotaPositions: [
		{
			label: 'Без ворот',
			id: 'without'
		},
		{
			label: 'Вместе',
			id: 'together',
		},
		{
			label: 'Раздельно',
			id: 'different'
		}
	],
	installation: [
		{
			id: 'without',
			label: 'Без установки',
			price: 0,
		},
		{
			id: 'with',
			label: 'С установкой',
			price: 22 // за м.п
		},
	],
	delivery: [
		{
			id: 'yourself',
			label: 'Без доставки',
		},
		{
			id: 'we',
			label: 'С доставкой',
		},
	]
}

export default GLOBALS;