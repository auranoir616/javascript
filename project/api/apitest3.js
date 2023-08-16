fetch("https://api.kaltimprov.go.id/api/generate/berau/disdukcapil/penduduk-by-nik/", {
	"method": "GET",
	"headers": {
		"Accept": "application/json",
		"Content-Type": "application/json",
		"Authorization": "Bearer {api_key}",
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});