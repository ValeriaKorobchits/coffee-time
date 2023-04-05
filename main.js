(function(){
    const header = document.querySelector('.header');
    // const image = document.querySelector('.test');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
            // image.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/7728/7728306.png');
        } else {
            header.classList.remove('header_active');
            // image.setAttribute('src', 'img/logo2.png');
        }
    }



    const slides = document.querySelectorAll('.slide');
    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClasses()
            slide.classList.add('active')
        })
    }

    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
}
())



var app = angular.module('dessertsApp', ['ngRoute', 'ngAnimate']);
app.config(function($routeProvider){
    $routeProvider
    .when('/cupcakes', {
        templateUrl: "index7.html",
        controller: "cupcakesCtrl"
    })
    .when('/cheesecake', {
        templateUrl: "index7.html",
        controller: "cheesecakeCtrl"
    })
    .when('/redvelvet', {
        templateUrl: "index7.html",
        controller: "redvelvetCtrl"
    })
    .when('/macaron', {
        templateUrl: "index7.html",
        controller: "macaronCtrl"
    })
    .when('/tiramisu', {
        templateUrl: "index7.html",
        controller: "tiramisuCtrl"
    })
    .when('/pannacotta', {
        templateUrl: "index7.html",
        controller: "pannacottaCtrl"
    })
     .when('/pancakes', {
        templateUrl: "index7.html",
        controller: "pancakesCtrl"
    })
    .when('/icecream', {
        templateUrl: "index7.html",
        controller: "icecreamCtrl"
    }) 
});

app.controller("cupcakesCtrl", function($scope, $route){
    $scope.dessert = {
        info: 'Cupcake is a small cake meant to be eaten by one person, baked in thin paper or an aluminum baking dish. Often contains various elements of confectionery decorations.'
    }
});
app.controller("cheesecakeCtrl", function($scope, $route){
    $scope.dessert = {
        info: 'Cheesecake is a dish of European and American cuisine, which is a cheese-containing dessert from cottage cheese casserole to soufflé. Although this dish is called a cake or pie, cheesecake is not a biscuit dessert: its base is most often crushed shortbread cookies.'
    }
});
app.controller("redvelvetCtrl", function($scope, $route){
    $scope.dessert = {
        info: 'Red Velvet Cake is a dark red, bright red or reddish brown chocolate cake. Traditionally prepared as a layer cake with cream cheese frosting. To make the cake, use buttermilk, butter, flour, cocoa and beets or red food coloring.'
    }
});
app.controller("macaronCtrl", function($scope, $route){
    $scope.dessert = {
        info: 'Macaron is a French pastry made from egg whites, sugar and ground almonds. Usually made in the form of cookies; cream or jam is placed between the two layers.'
    }
});
app.controller("tiramisuCtrl", function($scope, $route){
    $scope.dessert = {
        info: 'Tiramisu is an Italian multi-layered dessert that includes mascarpone cheese, coffee, chicken eggs, sugar and savoiardi biscuits. As a rule, the dessert is powdered with cocoa powder. A variation with the addition of walnuts is possible.'
    }
});
app.controller("pannacottaCtrl", function($scope, $route){
    $scope.dessert = {
        info: 'Panna cotta is a northern Italian dessert made from cream, sugar, gelatin and vanilla. The homeland of the dessert is the Italian Piedmont. The literal translation of this delicacy from Italian sounds like “boiled cream”, but it is more like a creamy pudding or just a creamy jelly with the addition of various ingredients.'
    }
});
app.controller("pancakesCtrl", function($scope, $route){
    $scope.dessert = {
        info: 'Pancake is a flat-shaped flour product baked in a frying pan. The dough is prepared on the basis of milk with the addition of starch and melted butter. A traditional North American breakfast dish. It is also common in other countries, including as a dish of catering establishments.'
    }
});
app.controller("icecreamCtrl", function($scope, $route){
    $scope.dessert = {
        info: 'Ice cream is a food product-dessert, which is a mass frozen in the process of continuous whipping, containing basically nutritious, flavoring, aromatic and emulsifying substances. Ice cream is also often referred to as fruit ice, obtained by simply freezing fruit and berry juices and purees.'
    }
});