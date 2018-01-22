var yuJeng = angular.module('yuJeng', []);

//controller
yuJeng.controller('mainController', function($scope, $rootScope,$http){
	//server location
		$rootScope.server = {
			ip : "192.168.1.14",
			port : 8000
		};
	//header
		$rootScope.header = {
			title : "友證科技行",
			metas : [
				{name : "charset",content : "UTF-8"},
				{name : "description",content : "yuJeng, 友證科技行"},
				{name : "keywords",content : "yuJeng, 友證科技行, 友證"},
				{name : "viewport",content : "width=device-width, initial-scale=1, maximum-scale=1"}
			],
		};

		$rootScope.includePages = {
			top : "http://" + $rootScope.server["ip"] + ":" + $rootScope.server["port"] + "/templates/top",
			body : "", //depends on page
			footer : "http://" + $rootScope.server["ip"] + ":" + $rootScope.server["port"] + "/templates/footer",
		};

	//get api url
		var szApiServer = "http://" + $rootScope.server["ip"] + ":" + $rootScope.server["port"];
		var objApiList = {
			"USERIP" : "http://freegeoip.net/json/",
			"ROBOT" : szApiServer + "/robotapi/talk?question=",
			"DB" : szApiServer + "/awsapi/db/data",
			"SPEAK" : szApiServer + "/googleapi/tts?query=",
		};
		$rootScope.fnGetApiUrl = function( szApiType, szMessage ){
			if( szMessage == undefined || szMessage.length == 0 ){
				return objApiList[ szApiType.toUpperCase() ];
			}

			return objApiList[ szApiType.toUpperCase() ] + szMessage;
		}
	//menu list
		$rootScope.objMenuList = {
			//index : {name:"首頁", link:"index", isSelected:false, isShown:true},
			news : {name:"最新消息", link:"index", isSelected:false, isShown:true, style:{}},
			patent : {name:"專利認證", link:"patent", isSelected:false, isShown:true, style:{}},
			productInfo : {name:"產品資訊", link:"productInfo", isSelected:false, isShown:true, style:{}},
			realPerform : {name:"工程實績", link:"realPerform", isSelected:false, isShown:true, style:{}},
			aboutMe : {name:"關於友證", link:"aboutMe", isSelected:false, isShown:true, style:{}},
			download : {name:"型錄下載", link:"download", isSelected:false, isShown:true, style:{}},
			contactUs : {name:"聯絡我們", link:"contactUs", isSelected:false, isShown:true, style:{}},
		};

		$rootScope.StyleTargetMenu = function(objMenu){
			objMenu.isSelected = false;
			if( $rootScope.currentLink == objMenu.link ){
				objMenu.isSelected = true;
			}
		}
	//ajax
		$rootScope.fnAjax = function( szMethod, szUrl, objParam, fnResponse, isDebugMode=false ){
			if( fnResponse == undefined ){
				fnResponse = objParam;
			}

			var objNormalParam = {
				method: szMethod,
				url: szUrl,
			};

			var objPOSTParam = {
				header : { 'Content-Type':'application/json' },
				data : objParam
			};

			var objConnectParam = ( szMethod.toUpperCase() == "GET" ) ? objNormalParam : angular.extend({}, objNormalParam, objPOSTParam);
			//console.log(objConnectParam);
			$http( objConnectParam ).then(function successCallback(response) {
				if( isDebugMode == true ){
					console.log(response);
					console.log(status);
				}

				fnResponse( false, response );
			}, function errorCallback(response) {
				//do nothing
				fnResponse(response);
			});
		}
});

//directive
yuJeng.directive("scroll", function($window){
	return function(scope, element, attrs) {
		angular.element($window).bind("scroll", function() {
			if (this.pageYOffset >= 140) {
				scope.isChangeClass = true;
			}else{
				scope.isChangeClass = false;
			}
			scope.$apply();
		});
	};
});

yuJeng.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });
                event.preventDefault();
            }
        });
    };
});