angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap','ngAnimate', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file

  console.log("Testing Consoles");

  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.mySlides = [
    'img/home/slider1.png',
    // 'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
  ];
  $scope.mySlides1 = [
    'img/home/blowing.png',
    'img/home/cockpit.png',
    'img/home/blowing.png'
    // 'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
  ];
  $scope.mySlides2 = [
    'img/home/prewedding.png',
    'img/home/coroporatespary.png',
      'img/home/prewedding.png'
    // 'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
  ];
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
})

.controller('CityCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("city");
  $scope.menutitle = NavigationService.makeactive("City");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('MenuCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("menu");
  $scope.menutitle = NavigationService.makeactive("Menu");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})




.controller('headerctrl', function($scope, TemplateService) {
  $scope.template = TemplateService;
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $(window).scrollTop(0);
  });
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
