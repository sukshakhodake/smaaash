angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap','ngAnimate', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.mySlides = [{
    id: 1,
    url: 'img/home/slider1.png'
  },{
    id: 2,
    url: 'img/home/slider1.png'
  },{
    id: 3,
    url: 'img/home/slider1.png'
  }
  ];
  $scope.mySlides1 = [
    'img/home/blowing.png',
    'img/home/cockpit.png',
    'img/home/blowing.png'
  ];

  $scope.mySlides2 = [
    'img/home/prewedding.png',
    'img/home/coroporatespary.png',
      'img/home/prewedding.png'
  ];

  $scope.mySlides3 = [
    'img/home/sachins.png',
      'img/home/sachins.png',
      'img/home/sachins.png'

  ];


  $scope.$on('$viewContentLoaded', function(event) {
      $timeout(function() {
          (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s);
              js.id = id;
              js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=329228207248886";
              fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));

          ! function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0],
                  p = /^http:/.test(d.location) ? 'http' : 'https';
              if (!d.getElementById(id)) {
                  js = d.createElement(s);
                  js.id = id;
                  js.src = p + "://platform.twitter.com/widgets.js";
                  fjs.parentNode.insertBefore(js, fjs);
              }
          }(document, "script", "twitter-wjs");
      }, 100);
  });
})

.controller('CorporateCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("corporate-parties");
  $scope.menutitle = NavigationService.makeactive("Corporate Parties");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('ConfirmCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("confirm-order");
  $scope.menutitle = NavigationService.makeactive("ConfirmOrder");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.billingForm={};
  $scope.formSubmit=function(formData,formValid)
  {
    if(formData && formValid.$valid){
        // $scope.showform=true;
    }

  }
})

.controller('ExploreCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("explore-smaaash");
  $scope.menutitle = NavigationService.makeactive("ExploreSmaaash");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('AboutCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("about");
  $scope.menutitle = NavigationService.makeactive("About");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})


.controller('KartingCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("karting");
  $scope.menutitle = NavigationService.makeactive("Karting");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.mySlides4 = [
    'img/karting/blue.png',
    'img/karting/sonakshi.png',
    'img/karting/salman.png',
    'img/karting/shikar.png',
    'img/karting/blue.png'
  ];
})


.controller('headerctrl', function($scope, TemplateService) {
  $scope.template = TemplateService;
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $(window).scrollTop(0);
  });
  $scope.city = false;
  $scope.toggleCity = function () {
    console.log('Toggle City');
    $scope.city = !$scope.city;
  };

  $scope.menu = false;
  $scope.toggleMenu = function () {
    $scope.menu = !$scope.menu;
  };

})
.controller('footerctrl', function($scope, TemplateService) {
  $scope.template = TemplateService;
  $scope.footer = function(val){
    if(val == $scope.showFooter){
      $scope.showFooter = 0;
    }else {
      if (val == 1) {
        $scope.showFooter = 1;
      }else if(val == 2) {
        $scope.showFooter = 2;
      }else if(val == 3) {
        $scope.showFooter = 3;
      }else if(val == 4) {
        $scope.showFooter = 4;
      }else if(val == 5) {
        $scope.showFooter = 5;
      }else if(val == 6) {
        $scope.showFooter = 6;
      }else if(val == 7) {
        $scope.showFooter = 7;
      }else if(val == 8) {
        $scope.showFooter = 8;
      }else if(val == 9) {
        $scope.showFooter = 9;
      }else if(val == 10) {
        $scope.showFooter = 10;
      }else if(val == 11) {
        $scope.showFooter = 11;
      }else if(val == 12) {
        $scope.showFooter = 12;
      }else {
        $scope.showFooter = 0;
      }
    }
  }
})

.controller('languageCtrl', function($scope, TemplateService,$translate,$rootScope) {

    $scope.changeLanguage = function() {
      console.log("Language CLicked");

      if(!$.jStorage.get("language")){
        $translate.use("hi");
        $.jStorage.set("language","hi");
      }
      else {
        if($.jStorage.get("language") == "en")
        {
          $translate.use("hi");
          $.jStorage.set("language","hi");
        }
        else {
          $translate.use("en");
          $.jStorage.set("language","en");
        }
      }
    //  $rootScope.$apply();
    };


})

;
