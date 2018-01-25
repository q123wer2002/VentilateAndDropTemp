//
yuJeng.controller('productController', function($scope,$rootScope){
	$rootScope.currentLink = "product";

	$scope.fnInit = function( nID ){
		var nTempID = ( nID == undefined ) ? 0: nID;
		$rootScope.fnAjax( "GET", "/product/" + nTempID + "/GET", function(err,objProduct){
			if(err) console.log(err);

			$scope.objProduct = objProduct.data;
		});
	}
});