function toggleMenu() {
    if (document.getElementById("menu").style.width > "0rem"){
        document.getElementById("menu").style.width = "0rem";
    } else{
        document.getElementById("menu").style.width = "15.5rem";
    }
}

var app = angular.module("ShoppingList", []); 
app.controller("myCtrl", function($scope) {
    $scope.products = [];
    $scope.addItem = function () {
        $scope.errortext = "";
        if (!$scope.addMe) {return;}
        if ($scope.products.indexOf($scope.addMe) == -1) {
            $scope.products.push($scope.addMe);
        } else {
            $scope.errortext = "The item is already in your shopping list.";
        }
    }
    $scope.removeItem = function (x) {
        $scope.errortext = "";    
        $scope.products.splice(x, 1);
    }
});