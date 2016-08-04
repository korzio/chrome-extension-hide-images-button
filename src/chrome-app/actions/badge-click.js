module.exports = function () {
	document
		.querySelectorAll('img')
		.forEach(function (img) {
			img.style.display = 'none';
		});
}