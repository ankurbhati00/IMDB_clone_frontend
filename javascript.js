const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '08ea465befmsh8ad2171b9c00af1p14f9eajsnfe886a65f2d1',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};
async function checkApi()
{try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}
};
checkApi();
