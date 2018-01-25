//
yuJeng.controller('contactUsController', function($scope,$rootScope){
	$rootScope.currentLink = "contact_us";

	$scope.aryContactInfos = [
		{"title":"您的名稱", "value":"", "isMust":true, "isNeedBigSize":false},
		{"title":"公司名稱", "value":"", "isMust":false, "isNeedBigSize":false},
		{"title":"聯絡地址", "value":"", "isMust":false, "isNeedBigSize":false},
		{"title":"連絡電話", "value":"", "isMust":true, "isNeedBigSize":false},
		{"title":"行動電話", "value":"", "isMust":false, "isNeedBigSize":false},
		{"title":"網站", "value":"", "isMust":false, "isNeedBigSize":false},
		{"title":"E-mail", "value":"", "isMust":true, "isNeedBigSize":false},
		{"title":"聯絡內容", "value":"", "isMust":true, "isNeedBigSize":true},
		{"title":"驗證碼", "value":"", "isMust":true, "isNeedBigSize":false},
	];
});