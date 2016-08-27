// JavaScript Document
$.jStorage.set("city","Mumbai");
// if (!$.jStorage.get("city")) {
//     $.holdReady(false);
//
//     $.get("http://ip-api.com/json", function(data) {
//         console.log(data);
//         switch (data.regionName) {
//             case "Maharashtra":
//             $.jStorage.set("city","mumbai");
//             break;
//             case "Delhi":
//             $.jStorage.set("city","noida");
//             break;
//             case "Haryana":
//             $.jStorage.set("city","gurgoan");
//             break;
//             case "Karnataka":
//             $.jStorage.set("city","bengaluru");
//             break;
//             case "Andra Pradesh":
//             $.jStorage.set("city","hyderabad");
//             break;
//             case "Telangana":
//             $.jStorage.set("city","hyderabad");
//             break;
//             default:
//             $.jStorage.set("city","mumbai");
//         }
//         $.holdReady(false);
//     });
//
// }

var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "views/template-home.html",
            controller: 'HomeCtrl'
        })

    .state('corporate-parties', {
        url: "/corporate-parties",
        templateUrl: "views/template.html",
        controller: 'CorporateCtrl'
    })

    .state('drink-party', {
        url: "/drink-party/:id",
        templateUrl: "views/template.html",
        controller: 'DrinkCtrl'
    })

    .state('deals-packages', {
        url: "/deals-packages/:id",
        templateUrl: "views/template.html",
        controller: 'DealsCtrl'
    })

    .state('events-challenges', {
        url: "/events-challenges/:id",
        templateUrl: "views/template.html",
        controller: 'EventsCtrl'
    })

    .state('stars', {
        url: "/stars",
        templateUrl: "views/template.html",
        controller: 'StarsCtrl'
    })

    .state('wedding-parties', {
        url: "/wedding-parties",
        templateUrl: "views/template.html",
        controller: 'WeddingCtrl'
    })

    .state('kitty-parties', {
        url: "/kitty-parties",
        templateUrl: "views/template.html",
        controller: 'KittyCtrl'
    })

    .state('cart', {
        url: "/cart",
        templateUrl: "views/template.html",
        controller: 'CartsCtrl'
    })

    .state('whats-new', {
        url: "/whats-new/:id",
        templateUrl: "views/template.html",
        controller: 'NewCtrl'
    })

    .state('attractions', {
        url: "/attractions/:id",
        templateUrl: "views/template.html",
        controller: 'AttractionCtrl'
    })

    .state('account', {
        url: "/account",
        templateUrl: "views/template.html",
        controller: 'AccountCtrl'
    })

    .state('leader', {
        url: "/leader",
        templateUrl: "views/template.html",
        controller: 'LeaderCtrl'
    })


    .state('host-party', {
        url: "/host-party/:id",
        templateUrl: "views/template.html",
        controller: 'HostCtrl'
    })

    .state('birthday-parties', {
        url: "/birthday-parties",
        templateUrl: "views/template.html",
        controller: 'BirthdayCtrl'
    })

    .state('smaaash-cricket', {
        url: "/smaaash-cricket",
        templateUrl: "views/template.html",
        controller: 'SportsCtrl'
    })

    .state('cockpit', {
        url: "/cockpit",
        templateUrl: "views/template.html",
        controller: 'SportingCtrl'
    })

    .state('twilight', {
        url: "/twilight",
        templateUrl: "views/template.html",
        controller: 'TwilightCtrl'
    })

    .state('snow-rush', {
        url: "/snow-rush/:id",
        templateUrl: "views/template.html",
        controller: 'SnowCtrl'
    })


    .state('explore-smaaash', {
        url: "/explore-smaaash",
        templateUrl: "views/template.html",
        controller: 'ExploreSmaashCtrl'
    })


    .state('explore', {
        url: "/explore/:id",
        templateUrl: "views/template.html",
        controller: 'ExploreCtrl'
    })

    .state('about', {
        url: "/about",
        templateUrl: "views/template.html",
        controller: 'AboutCtrl'
    })


    .state('confirm-order', {
        url: "/confirm-order",
        templateUrl: "views/template.html",
        controller: 'ConfirmCtrl'
    });

    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(isproduction);
});



firstapp.directive('img', function($compile, $parse) {
    return {
        restrict: 'E',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);
            if (!attrs.noloading) {
                $element.after("<img src='img/loading.gif' class='loading' />");
                var $loading = $element.next(".loading");
                $element.load(function() {
                    $loading.remove();
                    $(this).addClass("doneLoading");
                });
            } else {
                $($element).addClass("doneLoading");
            }
        }
    };
});

firstapp.directive('fancyboxBox', function($document) {
    return {
        restrict: 'EA',
        replace: false,
        link: function(scope, element, attr) {
            var $element = $(element);
            var target;
            if (attr.rel) {
                target = $("[rel='" + attr.rel + "']");
            } else {
                target = element;
            }

            target.fancybox({
                openEffect: 'fade',
                closeEffect: 'fade',
                closeBtn: true,
                helpers: {
                    media: {}
                }
            });
        }
    };
});

firstapp.directive('autoHeight', function($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);
            var windowHeight = $(window).height();
            var addHeight = function() {
                $element.css("min-height", windowHeight);
            };
            addHeight();
        }
    };
});

firstapp.directive('noDrag', function($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);
            $element.context.draggable = false;
        }
    };
});
// firstapp.filter('serverimage', function() {
//     return function(input) {
//         if (input) {
//             return imgurl + input;
//         } else {
//             return "";
//         }
//     };
// });


firstapp.filter('uploadpath', function() {
    return function(input, width, height, style) {
        var other = "";
        if (width && width != "") {
            other += "&width=" + width;
        }
        if (height && height != "") {
            other += "&height=" + height;
        }
        if (style && style != "") {
            other += "&style=" + style;
        }
        if (input) {
            if (input.indexOf('https://') == -1) {
                return imgpath + "?file=" + input + other;

            } else {
                return input;
            }
        }
    };
});

firstapp.config(function($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});
firstapp.directive('onlyDigits', function() {
    return {
        require: 'ngModel',
        restrict: 'A',
        link: function(scope, element, attr, ctrl) {
            var digits;

            function inputValue(val) {
                if (val) {
                    if (attr.type == "tel") {
                        digits = val.replace(/[^0-9\+\\]/g, '');
                    } else {
                        digits = val.replace(/[^0-9\-\\]/g, '');
                    }


                    if (digits !== val) {
                        ctrl.$setViewValue(digits);
                        ctrl.$render();
                    }
                    return parseInt(digits, 10);
                }
                return undefined;
            }
            ctrl.$parsers.push(inputValue);
        }
    };
});
