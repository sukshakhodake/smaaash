angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.$on('$viewContentLoaded', function() {
        $(window).scroll(function() {
            var scroller = $(document).scrollTop();
            var height = $(window).height() - 40;
            if (height <= scroller) {
                $('body').addClass('show-header');
            } else {
                $('body').removeClass('show-header');
            }
        });
    });

    $scope.scrollToHome = function() {
        $('html, body').animate({
            scrollTop: $("#toHome").offset().top
        }, 500);
    };
    if ($.jStorage.get("city")) {
        NavigationService.getSlider($.jStorage.get("city")._id, function(data) {
            console.log('getSlider',data);
            $scope.mySlides = data.data;
            var i = 1;
            _.each($scope.mySlides, function(n) {

                n.ordering = i;
                i++;
            });
            console.log("$scope.mySlides", $scope.mySlides);

        });

    };
    var attraction = [];
    var whatsnew = [];
    var hostParty = [];
    NavigationService.getHomeContent(function(data) {
        if (data.value) {
            $scope.homeContent = data.data;
            $scope.content = _.groupBy($scope.homeContent, "type");
            $scope.attraction = $scope.content.Attraction;
            $scope.whatsnew = $scope.content["What's new"];
            $scope.hostParty = $scope.content["Host a Party"];
        } else {

        }


    })


    // $scope.mySlides = [{
    //     id: 1,
    //     url: 'img/home/slider1.png'
    // }, {
    //     id: 2,
    //     url: 'img/home/slider1.png'
    // }, {
    //     id: 3,
    //     url: 'img/home/slider1.png'
    // }];
    $scope.mySlides1 = [
        'img/explore-img/vertigo.png',
        'img/home/cockpit.png',
        'img/explore-img/coaster.png'
    ];

    $scope.mySlides2 = [
        'img/host/BirhdayParties.png',
        'img/host/CorpPart.png',
        'img/host/KittyParties.png',
        'img/host/PlayDates.png',
        'img/host/TeamEvents.png',
        'img/host/WeddingParties.png'
    ];

    $scope.mySlides3 = [
        'img/home/sachins.png',
        'img/home/sachins.png'
        // 'img/explore-img/coaster.png',
        //   'img/explore-img/vertigo.png',
        //   // 'img/explore-img/3.png'
        //   // 'img/explore-img/4.png',
        //   // 'img/explore-img/5.png',
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

.controller('WeddingCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("wedding-parties");
    $scope.menutitle = NavigationService.makeactive("PreWedding Parties");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('KittyCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("kitty-parties");
    $scope.menutitle = NavigationService.makeactive("Kitty Parties");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('BirthdayCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("birthday-parties");
    $scope.menutitle = NavigationService.makeactive("Birthday Parties");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('SportsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("smaaash-cricket");
    $scope.menutitle = NavigationService.makeactive("smaaash cricket");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.mySlides5 = [
        'img/karting/blue.png',
        'img/karting/sonakshi.png',
        'img/karting/salman.png',
        'img/karting/shikar.png',
        'img/karting/blue.png'
    ];
})

.controller('SportingCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("cockpit");
    $scope.menutitle = NavigationService.makeactive("cockpit");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.mySlides6 = [
        'img/karting/blue.png',
        'img/karting/sonakshi.png',
        'img/karting/salman.png',
        'img/karting/shikar.png',
        'img/karting/blue.png'
    ];
})

.controller('TwilightCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("twilight");
    $scope.menutitle = NavigationService.makeactive("twilight");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.mySlides7 = [
        'img/karting/blue.png',
        'img/karting/sonakshi.png',
        'img/karting/salman.png',
        'img/karting/shikar.png',
        'img/karting/blue.png'
    ];
})

.controller('SnowCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("snow-rush");
    $scope.menutitle = NavigationService.makeactive("Snow Rush");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.mySlides8 = [
        'img/karting/blue.png',
        'img/karting/sonakshi.png',
        'img/karting/salman.png',
        'img/karting/shikar.png',
        'img/karting/blue.png'
    ];
})



.controller('ConfirmCtrl', function($scope, $uibModal, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("confirm-order");
    $scope.menutitle = NavigationService.makeactive("Confirm Order");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.billingForm = {};
    console.log('in ctrl');
    $scope.formSubmit = function(formData, formValid) {
        console.log('cgfdfgdgfgfc');
        if (formData && formValid.$valid) {
            // $scope.showform=true;
            $scope.open();
            console.log('in fun');
        }

    }
    $scope.animationsEnabled = true;
    $scope.open = function(size) {

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/modal/form-success.html',
            controller: 'ConfirmCtrl',
            size: size,
            resolve: {
                items: function() {
                    return $scope.items;
                }
            }
        });

    };
})

.controller('ExploreSmaashCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("explore-smaaash");
    $scope.menutitle = NavigationService.makeactive("Explore Smaaash");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    // $scope.smaaash = [];
    // $scope.objfilter = {};
    // $scope.objfilter.pagenumber = 0;
    // $scope.objfilter.pagesize = 10;
    // $scope.show = true;

    // $scope.scrollMore = function(input) {
    //     $scope.objfilter.pagenumber++;
    //     NavigationService.getAllExploreSmashByCity($.jStorage.get("city")._id, function(data) {
    //         if (data.value) {
    //             $scope.exploresmash = _.chunk(data.data, 3);
    //             console.log("$scope.exploresmash", $scope.exploresmash);
    //             _.each($scope.exploresmash, function(value) {
    //                 $scope.smaaash.push(value);
    //             });
    //
    //
    //             $scope.lastpage = data.data.totalpages;
    //
    //         }
    //
    //
    //
    //     });
    //
    // }

    NavigationService.getAllExploreSmashByCity($.jStorage.get("city")._id, function(data) {
        if (data.value) {
            $scope.smaaash = _.chunk(data.data, 3);
            console.log("$scope.exploresmash", $scope.exploresmash);
        }
    });
    // $scope.scrollMore($scope.objfilter);
})









.controller('HostCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("host-party");
    $scope.menutitle = NavigationService.makeactive("Host Party");
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


.controller('ExploreCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("explore");
    $scope.menutitle = NavigationService.makeactive("Explore");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    // $scope.mySlides4 = [
    //     'img/karting/blue.png',
    //     'img/karting/sonakshi.png',
    //     'img/karting/salman.png',
    //     'img/karting/shikar.png',
    //     'img/karting/blue.png'
    // ];
    NavigationService.getOneExploresmash($stateParams.id, function(data) {
        $scope.mySlides4 = data.data;
        console.log("$scope.mySlides4", $scope.mySlides4);
        $scope.mySlides4.banner = $filter('uploadpath')($scope.mySlides4.banner);


    });


})




.controller('headerctrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
            $(window).scrollTop(0);
        });
        $scope.city = false;
        $scope.showCity = false;
        $scope.toggleCity = function() {
            console.log('Toggle City');
            $scope.city = !$scope.city;

        };
        $scope.getCityName = function(cityname) {
            console.log('mycityname',cityname);
            $.jStorage.set("city", cityname);
            $scope.cityName = $.jStorage.get("city").name;
            // $scope.citySlide = $.jStorage.get("city")._id;
            // console.log('$scope.cityName',$scope.cityName);

            $scope.showCity = true;
        }
        if ($.jStorage.get("city") !== null) {
            $scope.getCityName($.jStorage.get("city"))
        }
        NavigationService.getCity(function(data) {

            $scope.getCity = data.data;
            console.log('$scope.getCity', $scope.getCity);

        })









        $scope.menu = false;
        $scope.toggleMenu = function() {
            $scope.menu = !$scope.menu;
        };

    })
    .controller('footerctrl', function($scope, TemplateService) {
        $scope.template = TemplateService;
        $scope.footer = function(val) {
            if (val == $scope.showFooter) {
                $scope.showFooter = 0;
            } else {
                if (val == 1) {
                    $scope.showFooter = 1;
                } else if (val == 2) {
                    $scope.showFooter = 2;
                } else if (val == 3) {
                    $scope.showFooter = 3;
                } else if (val == 4) {
                    $scope.showFooter = 4;
                } else if (val == 5) {
                    $scope.showFooter = 5;
                } else if (val == 6) {
                    $scope.showFooter = 6;
                } else if (val == 7) {
                    $scope.showFooter = 7;
                } else if (val == 8) {
                    $scope.showFooter = 8;
                } else if (val == 9) {
                    $scope.showFooter = 9;
                } else if (val == 10) {
                    $scope.showFooter = 10;
                } else if (val == 11) {
                    $scope.showFooter = 11;
                } else if (val == 12) {
                    $scope.showFooter = 12;
                } else {
                    $scope.showFooter = 0;
                }
            }
        };
    })

.controller('languageCtrl', function($scope, TemplateService, $translate, $rootScope) {

    $scope.changeLanguage = function() {
        console.log("Language CLicked");

        if (!$.jStorage.get("language")) {
            $translate.use("hi");
            $.jStorage.set("language", "hi");
        } else {
            if ($.jStorage.get("language") == "en") {
                $translate.use("hi");
                $.jStorage.set("language", "hi");
            } else {
                $translate.use("en");
                $.jStorage.set("language", "en");
            }
        }
        //  $rootScope.$apply();
    };


})

;
