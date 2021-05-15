let app = angular.module('myApp', []);
app.controller('appController', function($scope){
    $scope.usd = 4.06;
    $scope.eur = 0.82;
    $scope.coinMarketValueUSD = 0.3134;
    $scope.resultHere = 0;
    $scope.coinValue = 0;
    $scope.selectedValue = '';

    $scope.calcRON = function(){
        $scope.coinMarketValueRON = $scope.coinMarketValueUSD * $scope.usd;
        $scope.howManyCoins = $scope.coinValue;
        $scope.cashValue = $scope.coinMarketValueRON * $scope.howManyCoins;
        $scope.resultHere = $scope.cashValue.toFixed(6);
    };

    $scope.calcEUR = function(){
        $scope.coinMarketValueEUR = $scope.coinMarketValueUSD * $scope.eur;
        $scope.howManyCoins = $scope.coinValue;
        $scope.cashValue = $scope.coinMarketValueEUR * $scope.howManyCoins;
        $scope.resultHere = $scope.cashValue.toFixed(6);
    };

    $scope.calcUSD = function(){
        $scope.howManyCoins = $scope.coinValue;
        $scope.cashValue = $scope.coinMarketValueUSD * $scope.howManyCoins;
        $scope.resultHere = $scope.cashValue.toFixed(6);
    };

    $scope.values = ["RON", "EUR", "USD"];

    $scope.calculate = function(){
        if($scope.selectedValue === "RON"){
            $scope.calcRON();
        }
        if($scope.selectedValue === "EUR"){
            $scope.calcEUR();
        }
        if($scope.selectedValue === "USD"){
            $scope.calcUSD();
        }
    }
});