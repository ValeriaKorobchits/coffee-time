var app = angular.module('coffeeApp', ['ngRoute', 'ngAnimate']);
app.config(function($routeProvider){
    $routeProvider
    .when('/cappucino', {
        templateUrl: "index6.html",
        controller: "cappucinoCtrl"
    })
    .when('/latte', {
        templateUrl: "index6.html",
        controller: "latteCtrl"
    })
    .when('/espresso', {
        templateUrl: "index6.html",
        controller: "espressoCtrl"
    })
    .when('/americano', {
        templateUrl: "index6.html",
        controller: "americanoCtrl"
    })
    .when('/flatwhite', {
        templateUrl: "index6.html",
        controller: "flatwhiteCtrl"
    })
    .when('/moccachino', {
        templateUrl: "index6.html",
        controller: "moccachinoCtrl"
    })
     .when('/macchiato', {
        templateUrl: "index6.html",
        controller: "macchiatoCtrl"
    })
    .when('/raffcoffee', {
        templateUrl: "index6.html",
        controller: "raffcoffeeCtrl"
    }) 
});

app.controller("cappucinoCtrl", function($scope, $route){
    $scope.coffee = {
        info: 'Cappuccino is an Italian coffee drink based on espresso with the addition of heated frothed milk.'
    }
});
app.controller("latteCtrl", function($scope, $route){
    $scope.coffee = {
        info: 'Latte is a coffee drink based on milk, which is a three-layer mixture of foam, milk and espresso coffee. Was invented in Italy.'
    }
});
app.controller("espressoCtrl", function($scope, $route){
    $scope.coffee = {
        info: 'Espresso is a method of preparing coffee by passing hot water under pressure through a filter with ground coffee. Traditionally served with one cube of sugar, without a spoon.'
    }
});
app.controller("americanoCtrl", function($scope, $route){
    $scope.coffee = {
        info: 'Americano is a method of preparing coffee, which consists in combining a certain amount of hot water and espresso.'
    }
});
app.controller("flatwhiteCtrl", function($scope, $route){
    $scope.coffee = {
        info: 'Flat white is a double espresso-based coffee drink with the addition of milk, created in the 1980s.'
    }
});
app.controller("moccachinoCtrl", function($scope, $route){
    $scope.coffee = {
        info: 'Moccachino is a coffee drink created in America and is a kind of latte with the addition of chocolate. The name "moccachino" is used in Europe. In North America, this drink is known as "mocha".'
    }
});
app.controller("macchiatoCtrl", function($scope, $route){
    $scope.coffee = {
        info: 'Macchiato is a coffee drink made by adding a minimum amount of milk, usually frothed, to espresso.'
    }
});
app.controller("raffcoffeeCtrl", function($scope, $route){
    $scope.coffee = {
        info: 'Raf coffee is a coffee drink prepared by adding steam-heated cream with a small amount of foam to a single shot of espresso. Often served with syrup.'
    }
});