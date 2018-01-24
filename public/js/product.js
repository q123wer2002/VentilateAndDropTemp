//
yuJeng.controller('productController', function($scope,$rootScope){
	$rootScope.currentLink = "product";

	$scope.objTrace = {
		1 : {
			"link" : "1",
			"name" : "1",
		},
		2 : {
			"link" : "2",
			"name" : "2",
		},
		3 : {
			"link" : "3",
			"name" : "3",
		},
	};

	$scope.aryNodes = [
		{"id":1, "name":"工業營業用變頻水冷扇", "parentId":0, "childId":[2,3], "pics":["https://www.yasuda.com.tw/archive/product_type/thumb/5bel5qWt5rC05Ya35omH57O75YiXXzE2MTAxMjAxMTE0Ng==.jpg"], "details":[] },
		{"id":2, "name":"工業排風扇", "parentId":0, "childId":[], "pics":["https://www.yasuda.com.tw/archive/product_type/thumb/5bel5qWt5o6S6aKo5omHXzE2MTAxMjAxMDg0Ng==.jpg"], "details":[] },
		{"id":3, "name":"溫室專用通風設備", "parentId":0, "childId":[4,5], "pics":["https://www.yasuda.com.tw/archive/product_type/thumb/5rqr5a6k5bCI55So6YCa6aKo6Kit5YKZXzE2MTAxMjAxMTAwNw==.jpg"], "details":[] },
		{"id":4, "name":"畜牧專用通風設備", "parentId":0, "childId":[], "pics":["https://www.yasuda.com.tw/archive/product_type/thumb/55Wc54mn5bCI55So6YCa6aKo6Kit5YKZXzE2MTAxMjAxMTA0MA==.jpg"], "details":[] },
		{"id":5, "name":"輕鋼架循環扇", "parentId":0, "childId":[6], "pics":["https://www.yasuda.com.tw/archive/product_type/thumb/6LyV6Yu85p625b6q55Kw5omHXzE2MTAxMjAxMTA1Mg==.jpg"], "details":[] },
		{"id":6, "name":"強力送風機", "parentId":0, "childId":[], "pics":["https://www.yasuda.com.tw/archive/product_type/thumb/5by35Yqb6YCB6aKo5qmfXzE2MTExODA1MDY0Mg==.jpg"], "details":[] },
	];

	$scope.fnIsLastOne = function( nIndex ){
		return !( (nIndex+1) == Object.keys($scope.objTrace).length );
	}
	$scope.fnGetAryRoot = function(){
		var aryRootNodes = [];

		for( var i=0; i<$scope.aryNodes.length; i++){
			if( $scope.aryNodes[i].parentId !== 0 ){
				continue;
			}

			aryRootNodes.push( $scope.aryNodes[i] );
		}

		return aryRootNodes;
	}
	$scope.fnGetSpecficNode = function( nNodeId ){
		var objNode = $scope.aryNodes.find( obj => obj.id === nNodeId );
		return objNode;
	}
});