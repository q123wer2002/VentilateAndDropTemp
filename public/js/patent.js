//
yuJeng.controller('patentController', function($scope,$rootScope){
	$rootScope.currentLink = "patent";

	$scope.szSelectPatent = "";
	$scope.nSelectPatent = 0;
	$scope.aryPatentList = [
		{"title":"ISO9001(2008)品質管理系統", "imgs":[
			"https://www.yasuda.com.tw/archive/images/018.jpg",
			"https://www.yasuda.com.tw/archive/images/019.jpg"
		]},
		{"title":"美國UL認證", "imgs":[
			"https://www.yasuda.com.tw/archive/images/010.jpg",
			"https://www.yasuda.com.tw/archive/images/011.jpg",
		]},
		{"title":"歐盟CE認證", "imgs":[
			"https://www.yasuda.com.tw/archive/images/014.jpg",
			"https://www.yasuda.com.tw/archive/images/015.jpg",
			"https://www.yasuda.com.tw/archive/images/016.jpg",
			"https://www.yasuda.com.tw/archive/images/017.jpg",
		]},
		{"title":"各項專利認證", "imgs":[
			"https://www.yasuda.com.tw/archive/images/001.jpg",
			"https://www.yasuda.com.tw/archive/images/002.jpg",
			"https://www.yasuda.com.tw/archive/images/003.jpg",
			"https://www.yasuda.com.tw/archive/images/004.jpg",
			"https://www.yasuda.com.tw/archive/images/005.jpg",
			"https://www.yasuda.com.tw/archive/images/006.jpg",
		]},
		{"title":"輕鋼架循環扇相關認證", "imgs":[
			"https://www.yasuda.com.tw/archive/images/product%20certificate(1).jpg",
			"https://www.yasuda.com.tw/archive/images/power%20saving%20crtificate.jpg",
			"https://www.yasuda.com.tw/archive/images/green%20mark.jpg",
			"https://www.yasuda.com.tw/archive/images/mit%20certificate.jpg"
		]},
	];

	$scope.fnSelectPatent = function( objPatent ){
		var nIndex = $scope.aryPatentList.findIndex( obj => obj.title === objPatent.title );
		
		if( nIndex == -1 ){
			return;
		}

		$scope.nSelectPatent = nIndex;
	}
	$scope.IsSelected = function( nIndex ){
		return ( nIndex == $scope.nSelectPatent ) ? true : false;
	}
});