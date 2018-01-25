//
yuJeng.controller('downloadController', function($scope,$rootScope){
	$rootScope.currentLink = "download";

	$scope.aryDownloads = [
		{"name":"2017雅速達中文型錄", "dw_link":"https://www.yasuda.com.tw/download/?mode=dl&id=23"},
		{"name":"2017雅速達工廠單張DM", "dw_link":"https://www.yasuda.com.tw/download/?mode=dl&id=20"},
		{"name":"2017雅速達變頻水冷扇DM", "dw_link":"https://www.yasuda.com.tw/download/?mode=dl&id=21"},
		{"name":"2017雅速達溫室單張DM", "dw_link":"https://www.yasuda.com.tw/download/?mode=dl&id=18"},
		{"name":"2017雅速達畜牧單張DM", "dw_link":"https://www.yasuda.com.tw/download/?mode=dl&id=19"},
		{"name":"2017雅速達輕鋼架循環扇DM", "dw_link":"https://www.yasuda.com.tw/download/?mode=dl&id=22"},
		{"name":"輕鋼架循環扇-使用說明書(通用)", "dw_link":"https://www.yasuda.com.tw/download/?mode=dl&id=4"},
		{"name":"54吋 排風扇壁面外合式安裝圖", "dw_link":"https://www.yasuda.com.tw/download/?mode=dl&id=12"},
		{"name":"46吋 D700D壁面外合式安裝圖", "dw_link":"https://www.yasuda.com.tw/download/?mode=dl&id=13"},
		{"name":"42吋 L700D壁面外合式安裝圖", "dw_link":"https://www.yasuda.com.tw/download/?mode=dl&id=14"},
		{"name":"34吋 S301D壁面外合式安裝圖", "dw_link":"https://www.yasuda.com.tw/download/?mode=dl&id=15"},
		{"name":"28吋 F024D壁面外合式安裝圖", "dw_link":"https://www.yasuda.com.tw/download/?mode=dl&id=24"},
		{"name":"D22-FNA送風範圍示意圖", "dw_link":"https://www.yasuda.com.tw/download/?mode=dl&id=17"},
		{"name":"D24-FAN送風範圍示意圖", "dw_link":"https://www.yasuda.com.tw/download/?mode=dl&id=16"},
	];
});