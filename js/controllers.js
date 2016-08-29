var globalfunction = {};
angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal, $state, $filter) {
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

    NavigationService.getSlider(function(data) {
        console.log('getSlider', data);
        $scope.mySlides = data.data;
        var i = 1;
        _.each($scope.mySlides, function(n) {

            n.ordering = i;
            i++;
        });
        console.log("$scope.mySlides", $scope.mySlides);

    });


    var attraction = [];
    var whatsnew = [];
    var hostParty = [];
    var deals = [];
    var events = [];
    var foodBeverages = [];





    NavigationService.getHomeContent(function(data) {
        $scope.homeContent = data.data;
        console.log("$scope.dataByCity", $scope.dataByCity);
        if (data.value) {
            $scope.homeContent = data.data;
            console.log("$scope.homeContentsdfg", $scope.homeContent);
            $scope.content = _.groupBy($scope.homeContent, "type.name");
            $scope.attraction = $scope.content.Attraction;

            console.log($scope.myAttratcionId);
            console.log("$scope.attraction", $scope.attraction);
            $scope.whatsnew = $scope.content["What's new"];
            console.log("$scope.whatsnew", $scope.whatsnew);
            $scope.hostParty = $scope.content["Host a party"];
            console.log("  $scope.hostParty", $scope.hostParty);
            $scope.deals = $scope.content["Deals and Packages"];
            console.log("$scope.deals", $scope.deals);
            $scope.events = $scope.content["Events"];
            console.log("  $scope.events", $scope.events);
            $scope.foodBeverages = $scope.content["Food and Beverages"];
            console.log("$scope.foodBeverages", $scope.foodBeverages);
        } else {

        }
    });



    NavigationService.getHomeBanner(function(data) {
        $scope.banner = data.data;

        console.log("$scope.banner", $scope.banner[0].homebanner);
        $scope.banner[0].homebanner = $filter('uploadpath')($scope.banner[0].homebanner);
        console.log("$scope.banner555555555555555", $scope.banner[0].homebanner);

    })
    $scope.subscribeFormComplete = false;
    $scope.subscribeData = {};
    $scope.duplicate = false;
    $scope.subscribeLogin = function(subscribeData) {
        if ($scope.subscribeData) {
            NavigationService.subscribe($scope.subscribeData, function(data) {

                if (data.data.value == false) {
                    console.log("data.valueIf", data.data.value);
                    $scope.duplicate = true;
                    $scope.subscribeFormComplete = false;

                } else {
                    console.log("data.valueElse", data.data.value);

                    $scope.duplicate = false;
                    $scope.subscribeFormComplete = true;
                    $timeout(function() {
                        $scope.subscribeFormComplete = false;
                        $scope.subscribeData = {};
                    }, 2000);
                }
            })
        }

    }









    $scope.formComplete = false;
    $scope.userData = {};
    $scope.valid = false;
    $scope.userLogin = function(userData) {
        if ($scope.userData) {
            console.log("$scope.userData", $scope.userData);
            NavigationService.login($scope.userData, function(data) {
                console.log("data", data);
                if (data.value == true) {
                    $.jStorage.set("loginDetail", data);
                    $scope.valid = false;
                    $scope.formComplete = true;
                    $timeout(function() {
                        $scope.formComplete = false;
                        $scope.userData = {};
                    }, 2000);
                } else {
                    $scope.valid = true;
                }
                $.jStorage.set("loginInfo", data);
                $scope.userName = $.jStorage.get("loginInfo").data.name;
                console.log("  $scope.userName", $scope.userName);

            })


        }

    }

    $scope.formCompleteSignup = false;

    $scope.signupData = {};
    $scope.pass = true;
    $scope.emailExist = false;

    $scope.signupLogin = function(signupData) {
        console.log("$scope.signupData ", $scope.signupData);
        if ($scope.signupData) {
            if ($scope.signupData.password == $scope.signupData.confirmPassword) {
                console.log('m true');
                $scope.pass = true;
                NavigationService.signup($scope.signupData, function(data) {
                    console.log("$scope.signupData", $scope.signupData);

                    if (data.value) {




                        $scope.emailExist = false;
                        $scope.formCompleteSignup = true;
                        $timeout(function() {
                            $scope.formCompleteSignup = false;
                            $scope.signupData = {};
                        }, 2000);

                    } else {
                        $scope.emailExist = true;
                    }

                })
            } else {
                console.log('m false');
                $scope.pass = false;
            }
        }



    }








    $scope.viewMore = function() {
        $uibModal.open({
            animation: true,
            templateUrl: "views/modal/login.html",
            scope: $scope
        });
    };

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
    $scope.mySlides4 = [
        'img/karting/blue.png',
        'img/karting/sonakshi.png',
        'img/karting/salman.png',
        'img/karting/shikar.png',
        'img/karting/blue.png'
    ];
    $scope.mySlides5 = [
        'img/beverage.png',
        'img/beverage1.png',
        'img/beverage2.png'
    ];
    $scope.mySlides6 = [
        'img/beverage.png',
        'img/beverage1.png',
        'img/beverage.png',
        'img/beverage1.png',
        'img/beverage2.png'
    ];

    $scope.mySlides7 = [
        'img/explore/explore5.png',
        'img/explore/explore2.png',
        'img/explore/explore3.png',
        'img/explore/explore4.png',
        'img/explore/explore5.png'
    ];

    $scope.mySlides8 = [
        'img/cakey.png',
        'img/cakey.png',
        'img/cakey.png',
        'img/cakey.png',
        'img/cakey.png'
    ];
    $scope.animationsEnabled = true;
    $scope.menu = "menu-out";
    $scope.getMenu = function() {
        if ($scope.menu == "menu-out") {
            $scope.menu = "menu-in";
        } else {
            $scope.menu = "menu-out";
        }
    };

    // $scope.menu = "menu-out";
    // $scope.getMenu = function() {
    //     $(".side-menu").addClass("menu-in");
    //     $(".side-menu").removeClass("menu-out");
    // };
    // $scope.closeMenu = function() {
    //     $(".side-menu").removeClass("menu-in");
    //     $(".side-menu").addClass("menu-out");
    // };
    //
    // $(".template.content").click(function() {
    //     $(".side-menu").removeClass("menu-in");
    //     $(".side-menu").addClass("menu-out");
    // });
    // $scope.opening = function(size) {
    //
    //     // var modalInstance = $uibModal.opening({
    //     //     animation: $scope.animationsEnabled,
    //     //     templateUrl: 'views/modal/login.html',
    //     //     controller: 'HomeCtrl',
    //     //     size: size,
    //     //     resolve: {
    //     //         items: function() {
    //     //             return $scope.items;
    //     //         }
    //     //     }
    //     // });
    //
    // };


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

.controller('StarsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("stars");
    $scope.menutitle = NavigationService.makeactive("Stars");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    // $scope.menu = "menu-out";
    // $scope.getMenu = function() {
    //     $(".side-menu").addClass("menu-in");
    //     $(".side-menu").removeClass("menu-out");
    // };
    // $scope.closeMenu = function() {
    //     $(".side-menu").removeClass("menu-in");
    //     $(".side-menu").addClass("menu-out");
    // };
    //
    // $(".template.content").click(function() {
    //     $(".side-menu").removeClass("menu-in");
    //     $(".side-menu").addClass("menu-out");
    // });
    $scope.menu = "menu-out";
    $scope.getMenu = function() {
        if ($scope.menu == "menu-out") {
            $scope.menu = "menu-in";
        } else {
            $scope.menu = "menu-out";
        }
    };

    $scope.objectfilter = {};
    $scope.objectfilter.pagenumber = "";
    $scope.objectfilter.pagesize = 6;
    $scope.objectfilter.city = $.jStorage.get("cityid");

    $scope.noviewmore = true;

    // if ($.jStorage.get("city")) {
    //     $scope.objectfilter.city = $.jStorage.get("city")._id;
    // }


    $scope.loadMore = function(input) {
        $scope.objectfilter.pagenumber++;
        NavigationService.getStars($scope.objectfilter, function(data) {
            if (data.value) {
                $scope.stars = _.chunk(data.data.data, 3);
                console.log("$scope.stars", $scope.stars);

                $scope.lastpage = data.data.totalpages;
                if ($scope.lastpage <= $scope.objectfilter.pagenumber) {
                    $scope.noviewmore = false;
                }
            }


        })

    };
    $scope.loadMore($scope.objectfilter);
    // NavigationService.getStars(function(data){
    //   $scope.stars=_.chunk(data.data,3);
    //   console.log("$scope.stars",$scope.stars);
    // })

})

.controller('WeddingCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("wedding-parties");
    $scope.menutitle = NavigationService.makeactive("PreWedding Parties");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.wedding = function() {
        $uibModal.open({
            animation: true,
            templateUrl: "views/modal/enquiry.html",
            scope: $scope
        });
    };

})

.controller('NewCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("whats-new");
    $scope.menutitle = NavigationService.makeactive("Whats New");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.moreDesc = {};
    // $scope.menu = "menu-out";
    // $scope.getMenu = function() {
    //     $(".side-menu").addClass("menu-in");
    //     $(".side-menu").removeClass("menu-out");
    // };
    // $scope.closeMenu = function() {
    //     $(".side-menu").removeClass("menu-in");
    //     $(".side-menu").addClass("menu-out");
    // };
    //
    // $(".template.content").click(function() {
    //     $(".side-menu").removeClass("menu-in");
    //     $(".side-menu").addClass("menu-out");
    // });
    $scope.menu = "menu-out";
    $scope.getMenu = function() {
        if ($scope.menu == "menu-out") {
            $scope.menu = "menu-in";
        } else {
            $scope.menu = "menu-out";
        }
    };
    $scope.showMore = false;

    // if($.jStorage.get("city")){
    //   $scope.jstorageId=$.jStorage.get("city")._id;
    //   console.log("$scope.jstorageId",$scope.jstorageId);

    // $scope.moreDesc=false;
    NavigationService.getSingleExploreSmaaash($stateParams.id, function(data) {
        $scope.SingleExploreSmaaash10 = data.data;
        $scope.SingleExploreSmaaash = _.chunk(data.data, 3);
        console.log("$scope.SingleExploreSmaaash", $scope.SingleExploreSmaaash);
        $scope.readMore = function(id, indexid) {

            console.log(id);
            $scope.moreDesc[id] = ($scope.moreDesc[id] == true) ? false : true;
            console.log($scope.moreDesc);
            $scope.myDesc = _.find($scope.SingleExploreSmaaash10, function(n) {
                return n._id == id;
                // console.log($scope.myDesc);
            }).description;
        };
    });
    $scope.myWish = function(id) {
        console.log("idNews", id);
        NavigationService.wishList(id, function(data) {
            console.log("wishlist", data);
        })
    }





})


.controller('LeaderCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("leader");
    $scope.menutitle = NavigationService.makeactive("Leadership");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.menu = "menu-out";
    $scope.getMenu = function() {
        if ($scope.menu == "menu-out") {
            $scope.menu = "menu-in";
        } else {
            $scope.menu = "menu-out";
        }
    };
})

.controller('AttractionCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("attractions");
    $scope.menutitle = NavigationService.makeactive("Attractions");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    // $scope.menu = "menu-out";
    // $scope.getMenu = function() {
    //     $(".side-menu").addClass("menu-in");
    //     $(".side-menu").removeClass("menu-out");
    // };
    // $scope.closeMenu = function() {
    //     $(".side-menu").removeClass("menu-in");
    //     $(".side-menu").addClass("menu-out");
    // };
    //
    // $(".template.content").click(function() {
    //     $(".side-menu").removeClass("menu-in");
    //     $(".side-menu").addClass("menu-out");
    // });
    $scope.menu = "menu-out";
    $scope.getMenu = function() {
        if ($scope.menu == "menu-out") {
            $scope.menu = "menu-in";
        } else {
            $scope.menu = "menu-out";
        }
    };

    NavigationService.getSingleExploreSmaaash($stateParams.id, function(data) {
        $scope.singleAttraction1 = data.data;
        $scope.singleAttraction = _.chunk(data.data, 3);
        console.log("$scope.singleAttraction", $scope.singleAttraction);

    });
    $scope.myWish = function(id) {

        if ($.jStorage.get("loginDetail") == null) {

            console.log("am in if");
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/wishlistsigup.html',
                scope: $scope
                    // backdropClass: 'backcolor'
            });
        } else {
            NavigationService.wishList(id, function(data) {

                console.log("wishlist", data);
            })
        }

    };
    $scope.addedToWishList = function() {
            if ($.jStorage.get("loginDetail") != null) {
                $uibModal.open({
                    animation: true,
                    templateUrl: 'views/modal/wishlist.html',
                    scope: $scope
                        // backdropClass: 'backcolor'
                });
            }

        }
        // $scope.myWish = function(id) {
        //     NavigationService.wishList(id, function(data) {
        //         console.log("wishlist", data);
        //     })
        // };
        // $scope.addedToWishList = function() {
        //
        //     $uibModal.open({
        //         animation: true,
        //         templateUrl: 'views/modal/wishlist.html',
        //         scope: $scope
        //             // backdropClass: 'backcolor'
        //     });
        // }

})

.controller('AccountCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("account");
    $scope.menutitle = NavigationService.makeactive("Account");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})


.controller('CartsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("cart");
    $scope.menutitle = NavigationService.makeactive("Cart");
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

.controller('SnowCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
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

    NavigationService.getDetailExploreSmaaash($stateParams.id, function(data) {
        $scope.detailExploreSmaash = data.data;
        console.log("$scope.detailExploreSmaash", $scope.detailExploreSmaash);
    })
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

.controller('ExploreSmaashCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
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

    // globalfunction.changeExplore = function() {
    //     if ($.jStorage.get("city") !== null) {
    //         NavigationService.getAllExploreSmashByCity($.jStorage.get("city")._id, function(data) {
    //             if (data.value) {
    //                 $scope.smaaash = _.chunk(data.data, 3);
    //                 console.log("$scope.smaaash", $scope.smaaash);
    //             }
    //         });
    //     } else {
    //         $state.go('home');
    //     }
    // };
    // globalfunction.changeExplore();
    // $scope.scrollMore($scope.objfilter);
})









.controller('HostCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
    $scope.template = TemplateService.changecontent("host-party");
    $scope.menutitle = NavigationService.makeactive("Host Party");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.mySlides9 = [
        'img/hosting.jpg',
        'img/hosting.jpg',
        'img/hosting.jpg',
        'img/hosting.jpg',
        'img/hosting.jpg'
    ];

    $scope.mySlides10 = [
        'img/Top-banner.jpg',
        'img/Top-banner.jpg',
        'img/Top-banner.jpg',
        'img/Top-banner.jpg',
        'img/Top-banner.jpg'
    ];
    // $scope.menu = "menu-out";
    // $scope.getMenu = function() {
    //     $(".side-menu").addClass("menu-in");
    //     $(".side-menu").removeClass("menu-out");
    // };
    // $scope.closeMenu = function() {
    //     $(".side-menu").removeClass("menu-in");
    //     $(".side-menu").addClass("menu-out");
    // };
    //
    // $(".template.content").click(function() {
    //     $(".side-menu").removeClass("menu-in");
    //     $(".side-menu").addClass("menu-out");
    // });
    $scope.menu = "menu-out";
    $scope.getMenu = function() {
        if ($scope.menu == "menu-out") {
            $scope.menu = "menu-in";
        } else {
            $scope.menu = "menu-out";
        }
    };

    $scope.formCompleteSignup = false;

    $scope.signupData = {};
    $scope.pass = true;
    $scope.emailExist = false;

    $scope.signupLogin = function(signupData) {
        console.log("$scope.signupData ", $scope.signupData);
        if ($scope.signupData) {
            if ($scope.signupData.password == $scope.signupData.confirmPassword) {
                console.log('m true');
                $scope.pass = true;
                NavigationService.signup($scope.signupData, function(data) {
                    console.log("$scope.signupData", $scope.signupData);
                    if (data.value) {
                        $scope.emailExist = false;
                        $scope.formCompleteSignup = true;
                        $timeout(function() {
                            $scope.formCompleteSignup = false;
                            $scope.signupData = {};
                        }, 2000);

                    } else {
                        $scope.emailExist = true;
                    }

                })
            } else {
                console.log('m false');
                $scope.pass = false;
            }
        }



    }
    $scope.formData = {};
    $scope.formCompleteAssistance = false;
    $scope.assistanceLogin = function(formData) {
        console.log("formData", formData);
        if ($scope.formData) {
            NavigationService.assistanceLoginSignup($scope.formData, function(data) {
                console.log("assistanceLogin", data);
                if (data.value == true) {
                    $scope.formCompleteAssistance = true;
                    $timeout(function() {
                        $scope.formCompleteAssistance = false;
                        $scope.formData = {};
                    }, 2000);

                } else {

                }
            })
        }

    }

    // if($.jStorage.get("city")){
    //   $scope.jstorageId=$.jStorage.get("city")._id;
    //   console.log("$scope.jstorageId",$scope.jstorageId);


    NavigationService.getSingleExploreSmaaash($stateParams.id, function(data) {
        // console.log("inNavigation",$scope.jstorageId)
        $scope.SingleHostParty = _.chunk(data.data, 3);
        console.log("$scope.SingleHostParty", $scope.SingleHostParty);

    });
    NavigationService.getAllHostPartySlider(function(data) {
        var i = 1;
        $scope.hostPartySlider = _.each(data.data, function(key) {
            key.order = i;
            i++;
        });

        console.log("$scope.hostPartySlider", $scope.hostPartySlider);
    })

    // _.each($scope.mySlides, function(n) {
    //
    //     n.ordering = i;
    //     i++;
    // });






})


.controller('AboutCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("about");
    $scope.menutitle = NavigationService.makeactive("About");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('EventsCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("events-challenges");
    $scope.menutitle = NavigationService.makeactive("Events and Challengest");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.menu = "menu-out";
    $scope.getMenu = function() {
        if ($scope.menu == "menu-out") {
            $scope.menu = "menu-in";
        } else {
            $scope.menu = "menu-out";
        }
    };

    $scope.moreDesc = {};
    NavigationService.getSingleExploreSmaaash($stateParams.id, function(data) {
        $scope.events10 = data.data;
        $scope.events = _.chunk(data.data, 3);
        console.log("$scope.events", $scope.events);
        $scope.readMore = function(id, indexid) {

            console.log("3333333", id);
            $scope.moreDesc[id] = ($scope.moreDesc[id] == true) ? false : true;
            console.log($scope.moreDesc);
            $scope.myDesc = _.find($scope.events10, function(n) {
                return n._id == id;
                // console.log($scope.myDesc);
            }).description;
        };
    });
})

.controller('DrinkCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("drink-party");
    $scope.menutitle = NavigationService.makeactive("Drink Party");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.menu = "menu-out";
    $scope.getMenu = function() {
        if ($scope.menu == "menu-out") {
            $scope.menu = "menu-in";
        } else {
            $scope.menu = "menu-out";
        }
    };
    $scope.moreDesc = {};
    NavigationService.getSingleExploreSmaaash($stateParams.id, function(data) {
        $scope.drinkParty10 = data.data;
        $scope.drinkParty = _.chunk(data.data, 3);
        console.log("$scope.drinkParty", $scope.drinkParty);
        $scope.readMore = function(id, indexid) {

            console.log(id);
            $scope.moreDesc[id] = ($scope.moreDesc[id] == true) ? false : true;
            console.log($scope.moreDesc);
            $scope.myDesc = _.find($scope.drinkParty10, function(n) {
                return n._id == id;
                // console.log($scope.myDesc);
            }).description;
        };

    });


})

.controller('DealsCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("deals-packages");
    $scope.menutitle = NavigationService.makeactive("Deals Packages");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.menu = "menu-out";
    $scope.getMenu = function() {
        if ($scope.menu == "menu-out") {
            $scope.menu = "menu-in";
        } else {
            $scope.menu = "menu-out";
        }
    };

    $scope.moreDesc = {};
    NavigationService.getSingleExploreSmaaash($stateParams.id, function(data) {
        $scope.SingleDealsPackages10 = data.data;
        $scope.SingleDealsPackages = _.chunk(data.data, 3);
        console.log("$scope.SingleDealsPackages", $scope.SingleDealsPackages);
        $scope.readMore = function(id, indexid) {

            console.log(id);
            $scope.moreDesc[id] = ($scope.moreDesc[id] == true) ? false : true;
            console.log($scope.moreDesc);
            $scope.myDesc = _.find($scope.SingleDealsPackages10, function(n) {
                return n._id == id;
                // console.log($scope.myDesc);
            }).description;
        };

    });
    $scope.myWish = function(id) {

        if ($.jStorage.get("loginDetail") == null) {

            console.log("am in if");
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/wishlistsigup.html',
                scope: $scope
                    // backdropClass: 'backcolor'
            });
        } else {
            NavigationService.wishList(id, function(data) {

                console.log("wishlist", data);
            })
        }

    };
    $scope.addedToWishList = function() {
        if ($.jStorage.get("loginDetail") != null) {
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/wishlist.html',
                scope: $scope
                    // backdropClass: 'backcolor'
            });
        }

    }


})



.controller('ExploreCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("explore");
    $scope.menutitle = NavigationService.makeactive("Explore");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();




    NavigationService.getOneExploresmash($stateParams.id, function(data) {
        $scope.mySlides4 = data.data;
        console.log("$scope.mySlides4", $scope.mySlides4);
        $scope.mySlides4.banner = $filter('uploadpath')($scope.mySlides4.banner);


    });


})




.controller('headerctrl', function($scope, TemplateService, NavigationService, $state) {
        $scope.attraId = "57bc4b2aeb9c91f1025a3b55";
        $scope.dealsId = "57bc4b5aeb9c91f1025a3b58";
        $scope.hostpartyId = "57bc4b10eb9c91f1025a3b54";
        $scope.whatsnewId = "57bc4af6eb9c91f1025a3b4f";
        $scope.foodBeveragesId = "57bc4b48eb9c91f1025a3b57";
        $scope.eventId = "57bd4e71a86ee9fa6770d4b2";
        $scope.template = TemplateService;
        $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
            $(window).scrollTop(0);
        });
        $scope.cityData = {
            _id: $.jStorage.get("cityid"),
            name: $.jStorage.get("city")
        }


        $scope.userLoginDetails = $.jStorage.get("loginDetail");
        console.log("$scope.userLoginDetails", $scope.userLoginDetails);

        $scope.city = false;
        $scope.flag = {};
        $scope.flag.showCity = false;
        $scope.toggleCity = function() {
            console.log('Toggle City');
            $scope.city = !$scope.city;

        };
        $scope.getCityName = function(cityname) {
            console.log(cityname);
            $.jStorage.set("cityid", cityname._id);
            $.jStorage.set("city", cityname.name);

            $scope.cityData = {
                _id: $.jStorage.get("cityid"),
                name: $.jStorage.get("city")
            };

            $state.reload();


        }
        $scope.getCity = function() {
            NavigationService.getCity(function(data) {

                if (data.value) {
                    $scope.getCity = data.data;
                    if ($.jStorage.get("city") == null || $.jStorage.get('city') === '') {


                        var mumbai = _.find($scope.getCity, function(key) {
                            if (key.name.toLowerCase() == "mumbai") {
                                return key;
                            }
                        });
                        $scope.getCityName(mumbai);

                    }
                }

            });
        }
        $scope.getCity();









        $scope.myName = $.jStorage.get("loginInfo");
        console.log("$scope.myName", $scope.myName);








        $scope.menu = false;
        $scope.toggleMenu = function() {
            $scope.menu = !$scope.menu;
        };
        $scope.menu = "menu-out";
        $scope.getMenu = function() {
            if ($scope.menu == "menu-out") {
                $scope.menu = "menu-in";
            } else {
                $scope.menu = "menu-out";
            }
        };



    })
    .controller('footerctrl', function($scope, TemplateService, NavigationService) {
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
        NavigationService.getTypes(function(data) {
            $scope.types = data.data;
            // if($scope.types)
            _.each($scope.types, function(n) {
                if (n.name == 'Whats new') {
                    console.log('here');
                }
            })
            console.log("$scope.types", $scope.types);
        });
        $scope.attrctionId = "57bc4b2aeb9c91f1025a3b55";
        $scope.drinkandPartyId = "57bc4b48eb9c91f1025a3b57";
        $scope.dealsandpackagesId = "57bc4b5aeb9c91f1025a3b58";
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
