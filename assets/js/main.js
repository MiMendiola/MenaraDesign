// creating the app
let menara = angular.module('Menara_App', ['ngRoute']);

let dataProd = [{"id":1,"name":"la passion","price":79.99, 'src':'../src/img/perfume/product-1.png', 'qyn':1, "description":"Launched by the design house of Elizabeth Taylor in 1987, PASSION is classified as a refined, oriental, woody fragrance."}, {"id":2,"name":"calvin klaine","price":30.5, 'src':'../src/img/perfume/product-2.png', "description":"Fresh and fruity top notes of clean lavender and juicy mandarin orange leave you feeling invigorated from the first whiff, leading into a floral heart of lush magnolia and refreshing freesia that swirls around you as you move throughout your day."},{"id":3,"name":"gean jaul gaultier","price":158, 'src':'../src/img/perfume/product-3.png', "description":"In the secret, colourful garden of her metal tin, the new La Belle Fleur Terrible nymph lives life naked with just a drop of aquatic amber floral fragrance on the neck of her blue lagoon bottle."}, {"id":4,"name":"alghabra","price":74.39, 'src':'../src/img/perfume/product-4.png', "description":"The fragrance begins with cheerful hints from Kumquat and Lime as its top notes. The heart consists of pleasant mix of notes from Violet, Lily-of-the-valley, Jasmine and Orris."}];

// configurating our navigation panel and his controllers
menara.config(function($routeProvider){
    $routeProvider
    .when("/", {templateUrl:"./assets/pages/prinpaMenaraHome.html", controller:"prinPage_ctrl", styleUrls:['./css/style.css']})
    .when("/home", {templateUrl:"./assets/pages/home.html", controller:"home_ctrl", styleUrls:['./css/style.css']})
    .when("/about", {templateUrl:"./assets/pages/about.html", controller:"about_ctrl", styleUrls:['./css/style.css']})
    // .when("/services", {templateUrl:"./assets/pages/services.html", controller:"services_ctrl", styleUrls:['./css/style.css']})
    .when("/servicios", {templateUrl:"./assets/pages/proyectos.html", controller:"proyectos_ctrl", styleUrls:['./css/style.css']})
    // .when("/proyectos", {templateUrl:"./assets/pages/proyectos.html", controller:"proyectos_ctrl", styleUrls:['./css/style.css']})
    .otherwise({templateUrl:"404.html"});
});

// $(document).ready(function(){
//     $(".menu-icon").click(function(){
//         $(".nav").slideToggle();
//         $(".banner-heading").slideToggle();
//     });
// });
