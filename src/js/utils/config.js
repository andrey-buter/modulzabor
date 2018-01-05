const GLOBALS = {
	zokolPlita: {
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
			id: 'without', // used for element id
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
	],
	zapolnenie: [
		{
			label: 'Ничего',
			price: 0,
		},
		{
			label: 'одностор верт штакетник',
			price: 105,
		},
		{
			label: 'двухстор верт штакетник',
			price: 165,
		},
		{
			label: 'одностор ранче',
			price: 125,
		},
		{
			label: 'двухстор ранчё',
			price: 185,
		},
		{
			label: 'оностр штакет полу круг',
			price: 135,
		},
		{
			label: 'двухстор штак полукруг',
			price: 195,
		},
		{
			label: 'плетёнка',
			price: 150,
		},
	]
}

export default GLOBALS;