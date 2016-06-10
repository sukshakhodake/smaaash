// JavaScript Document
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

  .state('explore-smaaash', {
      url: "/explore-smaaash",
      templateUrl: "views/template.html",
      controller: 'ExploreCtrl'
  })


  .state('karting', {
      url: "/karting",
      templateUrl: "views/template.html",
      controller: 'KartingCtrl'
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

firstapp.config(function ($translateProvider) {
  $translateProvider.translations('en', LanguageEnglish);
  $translateProvider.translations('hi', LanguageHindi);
  $translateProvider.preferredLanguage('en');
});
