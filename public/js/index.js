//
yuJeng.controller('indexController', function($scope,$rootScope){
	$rootScope.currentLink = "index";

	$scope.aryExhibitImgs = [
		"https://www.yasuda.com.tw/archive/images/196530.jpg",
		"https://www.yasuda.com.tw/archive/images/196531.jpg",
		"https://www.yasuda.com.tw/archive/images/52165.jpg",
		"https://www.yasuda.com.tw/archive/images/35016.jpg"
	];

	$scope.aryExhibitDetails = [
		{ "title":"PHOTO 101-DAY 19", "shortTxt":"nfortunately it wasn’t a double yolkier but that didn’t spoil my fun.Now how about a bit of rotation, here’s No. 1", "link":"", "img":"https://assets.entrepreneur.com/article/1413519079_unsplash-1024x682.jpg"},
		{ "title":"Free Online Photo Gallery", "shortTxt":"WOWSlider.com900 × 500以圖搜尋online photo galleries; free online photo gallery ...", "link":"", "img":"http://wowslider.com/sliders/demo-31/data1/images/bench560435.jpg"},
		{ "title":"Woman on Rock Platform Viewing City", "shortTxt":"he Perfect Upgrade for Pexels Users", "link":"", "img":"https://static.pexels.com/photos/196667/pexels-photo-196667.jpeg"},
		{ "title":"Amazingly Free Stock Photo", "shortTxt":"As a general rule, free stock photos are extremely difficult to find. A huge portion of the stock photo market is owned by professional companies like Shutterstock and 123RF, who charge $20 or more for a single photo. Even when you can find free stock photos, most are low resolution, watermarked, blurry and, at best, uninspired.", "link":"", "img":"https://assets.entrepreneur.com/article/1413519193_SXC-1024x682.jpg"}
	];
});