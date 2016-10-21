var globalfunction = {};
angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ngDialog'])

.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal, $state, $filter, ngDialog) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    var openL = {};
    $scope.openpops = function () {
        openL = ngDialog.open({
            template: 'views/content/popup.html',
            className: 'smaaash-cities',
            scope: $scope,
            closeByEscape: true
        });

    };






    $scope.currentdate = new Date();
    $scope.showVideo = {};
    $scope.showVideo = false;
    $scope.showVid = function () {
        $scope.showVideo = true;

    };
    $scope.showVidFalse = function () {
        $scope.showVideo = false;
        $scope.$apply();
    };
    var fired = false;
    $scope.onScrollStopVideo = function () {
        window.addEventListener("scroll", function () {
            if (document.body.scrollTop >= 1000) {
                $timeout(function () {
                    $scope.showVidFalse();

                }, 5000);
                fired = true;
            }
        }, true)
    }
    $scope.onScrollStopVideo();


    $scope.$on('$viewContentLoaded', function () {
        if (!$.jStorage.get("popupShow")) {
            $scope.openpops();
        }
        $(window).scroll(function () {
            var scroller = $(document).scrollTop();
            var height = $(window).height() - 40;
            if (height <= scroller) {
                $('body').addClass('show-header');

            } else {
                $('body').removeClass('show-header');

            }
        });
    });
    $(window).scroll(function () {
        var scroller = $(document).scrollTop();
        var height = $(window).height() - 40;
        if (height <= scroller) {
            var vdo = document.getElementsByClassName('stopv');


            $scope.showVideo = false;
        }
    });

    $scope.scrollToHome = function () {
        $scope.showVideo = false;
        $('html, body').animate({
            scrollTop: $("#toHome").offset().top
        }, 500);

    };
    $scope.hostpartyId = "57bc4b10eb9c91f1025a3b54";
    NavigationService.getSlider(function (data) {
        $scope.mySlides = data.data;
        var i = 1;
        _.each($scope.mySlides, function (n) {

            n.ordering = i;
            i++;
        });

    });


    var attraction = [];
    var whatsnew = [];
    var hostParty = [];
    var deals = [];
    var events = [];
    var foodBeverages = [];

    $scope.getCities = {};
    NavigationService.getCity(function (data) {
        $scope.getCities = data.data;
    });

    $scope.getCityName = function (cityname) {
        console.log("cityname", cityname);
        console.log(cityname.name);
        $.jStorage.set("cityid", cityname._id);
        $.jStorage.set("city", cityname.name);
        $.jStorage.set("popupShow", true);
        console.log(openL);
        ngDialog.closeAll("Change");
        $(".ngdialog").remove();
        $scope.template.reFetchCity();
        $state.reload();
    };

    $scope.cityData = {
        _id: $.jStorage.get("cityid"),
        name: $.jStorage.get("city")
    };
    console.log("after cityData");
    console.log("  $scope.cityData", $scope.cityData);


    NavigationService.getHomeContent(function (data) {
        $scope.homeContent = data.data;

        if (data.value) {
            $scope.homeContent = data.data;
            $scope.content = _.groupBy($scope.homeContent, "type.name");
            $scope.attraction = $scope.content.Attraction;
            $scope.whatsnew = $scope.content["What's new"];
            $scope.hostParty = $scope.content["Host a party"];
            $scope.deals = $scope.content["Deals and Packages"];
            $scope.events = $scope.content["Events"];
            $scope.foodBeverages = $scope.content["Food and Beverages"];
            $scope.buyOnline = $scope.content["Buy Online"];
        } else {}
    });




    NavigationService.getHomeBanner(function (data) {
        if (data.value) {
            $scope.banner = data.data;

            if ($scope.banner != '') {
                $scope.banner[0].homebanner = $filter('uploadpath')($scope.banner[0].homebanner);
            }

        }


    });

    $scope.subscribeFormComplete = false;
    $scope.subscribeData = {};
    $scope.duplicate = false;
    $scope.subscribeLogin = function (subscribeData) {
        if ($scope.subscribeData) {
            NavigationService.subscribe($scope.subscribeData, function (data) {
                if (data.data.value == false) {
                    $scope.duplicate = true;
                    $scope.subscribeFormComplete = false;
                } else {
                    $scope.duplicate = false;
                    $scope.subscribeFormComplete = true;
                    $timeout(function () {
                        $scope.subscribeFormComplete = false;
                        $scope.subscribeData = {};
                    }, 2000);
                }
            })
        }

    }









    $scope.formCompleteSignup = false;
    $scope.signupData = {};
    $scope.pass = true;
    $scope.emailExist = false;
    $scope.validCity = false;
    $scope.signupLogin = function (signupData) {

        if ($scope.signupData) {
            if ($scope.signupData.city == $.jStorage.get("cityid")) {
                $scope.validCity = false;
                if ($scope.signupData.password == $scope.signupData.confirmPassword) {

                    $scope.pass = true;
                    NavigationService.signup($scope.signupData, function (data) {
                        if (data.value) {
                            $scope.emailExist = false;
                            $scope.formCompleteSignup = true;
                            $timeout(function () {
                                $scope.formCompleteSignup = false;
                                $scope.signupData = {};
                            }, 2000);

                        } else {
                            $scope.emailExist = true;
                        }

                    })
                } else {
                    $scope.pass = false;
                }
            } else {
                $scope.validCity = true;
            }
        }
    }








    $scope.viewMore = function () {
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
        'img/explore5.png',
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


    $scope.$on('$viewContentLoaded', function (event) {
        $timeout(function () {
            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=329228207248886";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));

            ! function (d, s, id) {
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

.controller('CorporateCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("corporate-parties");
    $scope.menutitle = NavigationService.makeactive("Corporate Parties");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    NavigationService.getDetailExploreSmaaash($stateParams.id, function (data) {
        $scope.corporate = data.data;
        console.log("$scope.corporate", $scope.corporate);

    });
    $scope.corporateParty = function () {
        $uibModal.open({
            animation: true,
            templateUrl: "views/modal/enquiry.html",
            scope: $scope

        })
    };
})

.controller('BenefitCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("benefit");
    $scope.menutitle = NavigationService.makeactive("Benefit");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

})

.controller('ContactCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("contact");
    $scope.menutitle = NavigationService.makeactive("Contact");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

})

.controller('SponsorCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("sponsor");
    $scope.menutitle = NavigationService.makeactive("Sponsor");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.moreDesc = {};
    NavigationService.getSponsors(function (data) {
        console.log("data", data.data);
        $scope.sponsor = data.data.sponsor;
        $scope.sponsor1 = _.chunk(data.data.sponsor, 3);
        $scope.esteem = data.data.esteem;
        $scope.contact = data.data.contact;
    });
    $scope.readMore = function (id) {
        console.log("id", id);
        $scope.moreDesc[id] = ($scope.moreDesc[id] == true) ? false : true;
        $scope.myDesc = _.find($scope.sponsor, function (n) {
            return n._id == id;
        }).content;
    };


})

.controller('EventCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("event");
    $scope.menutitle = NavigationService.makeactive("Events");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.moreDesc = {};
    NavigationService.getSingleExploreSmaaash($stateParams.id, function (data) {
        $scope.events = _.chunk(data.data, 3);
    });
})

.controller('DealspCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("dealsp");
    $scope.menutitle = NavigationService.makeactive("Deals and Packages");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    NavigationService.getSingleExploreSmaaash($stateParams.id, function (data) {
        $scope.SingleDealsPackages = _.chunk(data.data, 3);
    });
})

.controller('StarsCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("stars");
    $scope.menutitle = NavigationService.makeactive("Stars");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.menu = "menu-out";
    $scope.getMenu = function () {
        if ($scope.menu == "menu-out") {
            $scope.menu = "menu-in";
        } else {
            $scope.menu = "menu-out";
        }
    };

    $scope.objectfilter = {};
    $scope.objectfilter.pagenumber = 0;
    $scope.objectfilter.pagesize = 6;
    $scope.objectfilter.city = $.jStorage.get("cityid");
    $scope.noviewmore = true;
    $scope.stars = [];
    $scope.notAvailable = false;
    $scope.fetchData = function () {
        $scope.objectfilter.pagenumber = $scope.objectfilter.pagenumber + 1;
        NavigationService.getStars($scope.objectfilter, function (data) {
            console.log(data.data.totalpages);
            console.log("getStars", data.data);
            if (data.data.data.length === 0) {
                $scope.notAvailable = true;
            } else {
                $scope.notAvailable = false;
            }
            if (data.value) {
                console.log($scope.objectfilter.pagenumber);
                if (data.data.totalpages >= $scope.objectfilter.pagenumber) {
                    _.each(data.data.data, function (n) {
                        // console.log(n);
                        $scope.stars.push(n)
                    });
                    if (data.data.totalpages === $scope.objectfilter.pagenumber) {
                        $scope.noviewmore = false;
                    }
                } else {
                    console.log("in else last array");
                    $scope.noviewmore = false;
                }
            }
        })
    };
    $scope.fetchData();
    $scope.message = false;
    $scope.fetchSearchedData = function () {
        $scope.objectfilter.pagenumber = 0;
        $scope.objectfilter.pagesize = 6;
        $scope.stars = [];
        $scope.noviewmore = true;
        $scope.objectfilter.city = $scope.objectfilter.city;

        $scope.objectfilter.pagenumber = $scope.objectfilter.pagenumber + 1;
        NavigationService.getStars($scope.objectfilter, function (data) {
            console.log(data.data.totalpages);

            if (data.data.data.length === 0) {
                $scope.message = true;
            } else {
                $scope.message = false;
            }
            if (data.value) {
                console.log($scope.objectfilter.pagenumber);
                if (data.data.totalpages >= $scope.objectfilter.pagenumber) {
                    _.each(data.data.data, function (n) {
                        // console.log(n);
                        $scope.stars.push(n)
                    });
                    if (data.data.totalpages === $scope.objectfilter.pagenumber) {
                        $scope.noviewmore = false;
                    }
                } else {
                    console.log("in else last array");
                    $scope.noviewmore = false;
                }
            }
        })
    };

    NavigationService.getMediaGallery(function (data) {
        $scope.mediagallery = data.data;
        console.log("$scope.mediagallery", $scope.mediagallery);
    });
    NavigationService.getCity(function (data) {
        $scope.allCity = data.data;
        console.log("allCity", $scope.allCity);
    })

})

.controller('WeddingCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal, $stateParams) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("wedding-parties");
    $scope.menutitle = NavigationService.makeactive("PreWedding Parties");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    NavigationService.getDetailExploreSmaaash($stateParams.id, function (data) {
        $scope.wedding = data.data;
    });
    $scope.weddingParty = function () {
        $uibModal.open({
            animation: true,
            templateUrl: "views/modal/enquiry.html",
            scope: $scope
        })
    };
})

.controller('NewCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $uibModal, $location) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("whats-new");
    $scope.menutitle = NavigationService.makeactive("Whats New");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.moreDesc = {};
    $scope.menu = "menu-out";
    $scope.getMenu = function () {
        if ($scope.menu == "menu-out") {
            $scope.menu = "menu-in";
        } else {
            $scope.menu = "menu-out";
        }
    };


    $scope.showMore = false;

    $scope.myUrl = window.location.href;
    NavigationService.getSingleExploreSmaaash($stateParams.id, function (data) {
        $scope.SingleExploreSmaaash = data.data;
        $scope.SingleExploreSmaaash1 = _.chunk(data.data, 3);
        console.log("$scope.SingleExploreSmaaash", $scope.SingleExploreSmaaash);

    });
    $scope.readMore = function (id, indexid) {
        $scope.moreDesc[id] = ($scope.moreDesc[id] == true) ? false : true;
        console.log($scope.moreDesc);
        $scope.myDesc = _.find($scope.SingleExploreSmaaash, function (n) {
            return n._id == id;
        }).description;
    };
    $scope.isInWishlist = function (id) {
        var indexF = _.findIndex($scope.userwishlist, function (key) {
            return key.exploresmash._id == id;
        })
        if (indexF !== -1) {
            return true;
        } else {
            return false;
        }
    }
    if ($.jStorage.get("loginDetail") != null) {
        function showWishList() {
            NavigationService.showWishList(function (data) {
                $scope.userwishlist = data.data.wishList;
                console.log("$scope.userwishlist", $scope.userwishlist);
            })
        };
        showWishList();
    }

    $scope.addedToWishList = function (id) {
        console.log("id", id);
        if ($.jStorage.get("loginDetail") == null) {
            console.log("am in if");
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/wishlistsigup.html',
                scope: $scope
            });
        } else if ($.jStorage.get("loginDetail") != null) {
            var findIndex = _.findIndex($scope.userwishlist, function (key) {
                console.log(id, '////////');
                return key.exploresmash._id === id;
            });
            console.log("findIndex", findIndex);
            if (findIndex !== -1) {
                constraints = _.find($scope.userwishlist, function (key) {
                    return key.exploresmash._id === id;
                });
                console.log(constraints);
                NavigationService.removeFromWishList(constraints._id, function (data) {
                    console.log(data, 'removed data');
                    if (data.value) {
                        showWishList();
                        $uibModal.open({
                            animation: true,
                            templateUrl: 'views/modal/removeWishlist.html',
                            scope: $scope
                        });
                    };

                });
            } else {
                NavigationService.addToWishList(id, function (data) {
                    console.log("wishlist", data);
                    if (data.value) {
                        $uibModal.open({
                            animation: true,
                            templateUrl: 'views/modal/wishlist.html',
                            scope: $scope
                        });
                    }
                    showWishList();
                });
            }

        }

    };
})


.controller('LeaderCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("leader");
    $scope.menutitle = NavigationService.makeactive("Leadership");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.menu = "menu-out";
    $scope.getMenu = function () {
        if ($scope.menu == "menu-out") {
            $scope.menu = "menu-in";
        } else {
            $scope.menu = "menu-out";
        }
    };
    $scope.moreDesc = {};
    NavigationService.getLeader(function (data) {
        $scope.leadership = data.data;
        console.log("leadership", $scope.leadership);
        $scope.readMore = function (id, indexid) {

            console.log(id);
            $scope.moreDesc[id] = ($scope.moreDesc[id] == true) ? false : true;
            console.log($scope.moreDesc);
            $scope.myDesc = _.find($scope.leadership, function (n) {
                return n._id == id;

            }).description;
        };
    })


})

.controller('AttractionCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("attractions");
    $scope.menutitle = NavigationService.makeactive("Attractions");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.menu = "menu-out";
    $scope.getMenu = function () {
        if ($scope.menu == "menu-out") {
            $scope.menu = "menu-in";
        } else {
            $scope.menu = "menu-out";
        }
    };

    $scope.male = '';
    $scope.female = '';
    $scope.children = '';
    $scope.filter = {};
    $scope.filter._id = $stateParams.id;
    $scope.msg = false;
    $scope.goTOSearch = function (filter) {
        NavigationService.searchExploreSmaaash($scope.filter, function (data) {
            $scope.singleAttraction = data.data;
            if ($scope.singleAttraction.length === 0) {
                $scope.msg = true;
            } else {
                $scope.msg = false;
            }

            _.each($scope.singleAttraction, function (data) {
                data.gameforarray = [];
                _.each(data.gamefor, function (n) {
                    switch (n) {
                        case '1':
                            data.gameforarray.push('Male')
                            break;
                        case '2':
                            data.gameforarray.push('Female')
                            break;
                        case '3':
                            data.gameforarray.push('Children')
                            break;
                        default:
                    }
                });
            });
        });
    }
    $scope.goTOSearch($scope.filter);

    if ($.jStorage.get("loginDetail") != null) {
        function showWishList() {
            NavigationService.showWishList(function (data) {
                $scope.userwishlist = data.data.wishList;
                console.log("$scope.userwishlist", $scope.userwishlist);
            })
        };
        showWishList();
    }



    $scope.isInWishlist = function (id) {
        var indexF = _.findIndex($scope.userwishlist, function (key) {
            return key.exploresmash._id == id;
        })
        if (indexF !== -1) {
            return true;
        } else {
            return false;
        }
    }
    $scope.addedToWishList = function (id) {
        if ($.jStorage.get("loginDetail") == null) {
            console.log("am in if");
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/wishlistsigup.html',
                scope: $scope
            });
        } else if ($.jStorage.get("loginDetail") != null) {
            var findIndex = _.findIndex($scope.userwishlist, function (key) {
                console.log(id, '////////');
                return key.exploresmash._id === id;
            });
            console.log("findIndex", findIndex);
            if (findIndex !== -1) {
                console.log("findIndex", findIndex);
                constraints = _.find($scope.userwishlist, function (key) {
                    return key.exploresmash._id === id;
                });
                console.log(constraints);
                NavigationService.removeFromWishList(constraints._id, function (data) {
                    console.log(data, 'removed data');
                    if (data.value) {
                        showWishList();
                        $uibModal.open({
                            animation: true,
                            templateUrl: 'views/modal/removeWishlist.html',
                            scope: $scope
                        });
                    };

                });
            } else {
                NavigationService.addToWishList(id, function (data) {
                    console.log("wishlist", data);
                    if (data.value) {
                        $uibModal.open({
                            animation: true,
                            templateUrl: 'views/modal/wishlist.html',
                            scope: $scope
                        });
                    }
                    showWishList();
                });
            }
        }
    };
})

.controller('AccountCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("account");
    $scope.menutitle = NavigationService.makeactive("Account");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})


.controller('CartsCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("cart");
    $scope.menutitle = NavigationService.makeactive("Cart");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})


.controller('WishlistCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("wishlist");
    $scope.menutitle = NavigationService.makeactive("Wishlist");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.attraction = '';
    $scope.whatsnew = '';

    function getuserWishList() {
        if ($.jStorage.get("loginDetail") != null) {
            NavigationService.showWishList(function (data) {
                $scope.showWishList = data.data;
                _.each($scope.showWishList.wishList, function (data) {
                    data.pageName = [];
                    _.each(data.exploresmash, function (n) {
                        switch (n) {
                            case '57bc4b2aeb9c91f1025a3b55':
                                data.pageName.push("Attraction")
                                break;
                            case '57bc4af6eb9c91f1025a3b4f':
                                data.pageName.push("What's new")
                                break;
                            default:
                        }
                    });
                });
            });
        }
    };
    getuserWishList();


    $scope.removeFromWishList = function (id) {
        NavigationService.removeFromWishList(id, function (data) {
            getuserWishList();
        });
    };
})

.controller('KittyCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("kitty-parties");
    $scope.menutitle = NavigationService.makeactive("Kitty Parties");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    NavigationService.getDetailExploreSmaaash($stateParams.id, function (data) {
        $scope.kitty = data.data;
        console.log("$scope.kitty", $scope.kitty);

    });
    $scope.kittyParty = function () {
        $uibModal.open({
            animation: true,
            templateUrl: "views/modal/enquiry.html",
            scope: $scope

        })
    };
})

.controller('CustomizePackageCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("customizepackage");
    $scope.menutitle = NavigationService.makeactive("Customize Package");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.menu = "menu-out";
    $scope.getMenu = function () {
        if ($scope.menu == "menu-out") {
            $scope.menu = "menu-in";
        } else {
            $scope.menu = "menu-out";
        }
    };
    $scope.today = function () {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
    };

    $scope.inlineOptions = {
        customClass: getDayClass,
        minDate: new Date(),
        showWeeks: true
    };

    $scope.dateOptions = {
        dateDisabled: disabled,
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
    };

    // Disable weekend selection
    function disabled(data) {
        var date = data.date,
            mode = data.mode;
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }

    $scope.toggleMin = function () {
        $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
        $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
    };

    $scope.toggleMin();

    $scope.open1 = function () {
        $scope.popup1.opened = true;
    };

    $scope.open2 = function () {
        $scope.popup2.opened = true;
    };

    $scope.setDate = function (year, month, day) {
        $scope.dt = new Date(year, month, day);
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
    $scope.altInputFormats = ['M!/d!/yyyy'];

    $scope.popup1 = {
        opened: false
    };
    $scope.popup2 = {
        opened: false
    };
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    $scope.events = [{
        date: tomorrow,
        status: 'full'
    }, {
        date: afterTomorrow,
        status: 'partially'
    }];

    function getDayClass(data) {
        var date = data.date,
            mode = data.mode;
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

            for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }
        return '';
    }


    $scope.showEditForm = false;
    $scope.showForm = false;
    if ($.jStorage.get("loginDetail") != null) {
        $scope.showEditForm = true;
        $scope.showForm = false;

    } else if ($.jStorage.get("loginDetail") === null) {
        $scope.showForm = true;
        $scope.showEditForm = false;
    }
    // $scope.showDiv = false;
    $scope.showThank = false;
    $scope.emailExist = false;
    $scope.selectStarter = false;
    $scope.selectDessert = false;
    $scope.selectmainCourse = false;

    $scope.customizeformData = {};
    if ($.jStorage.get("loginDetail") != null) {
        $scope.customizeformData._id = $.jStorage.get("loginDetail").data._id
    }

    $scope.customizeformData.games = [];
    $scope.selectedIds = [];
    $scope.goToGames = function (val, data) {
        data.selected = !data.selected;
        $scope.customizeformData.games = _.map(_.filter($scope.customizepackage, "selected"), "_id");
        console.log($scope.customizeformData.games);

    };

    if ($.jStorage.get("loginDetail") != null) {
        NavigationService.getOne(function (data) {
            $scope.customizeformData = data.data;
            console.log(data.data.games);
        });
    }
    $scope.submitCustomizeForm = function (formData) {

        if (Object.keys($scope.customizeformData).length != 0) {

            if (!$scope.customizeformData.starter) {
                $scope.selectStarter = true;
                $scope.selectDessert = false;
                $scope.selectmainCourse = false;
            };
            if (!$scope.customizeformData.dessert) {
                $scope.selectDessert = true;
                $scope.selectStarter = false;
                $scope.selectmainCourse = false;
            };
            if (!$scope.customizeformData.mainCourse) {
                $scope.selectDessert = false;
                $scope.selectStarter = false;
                $scope.selectmainCourse = true;
            };
            if ($scope.customizeformData.starter && $scope.customizeformData.dessert && $scope.customizeformData.mainCourse && !$scope.customizeformData._id) {
                $scope.selectDessert = false;
                $scope.selectStarter = false;
                $scope.selectmainCourse = false;
                NavigationService.signup($scope.customizeformData, function (data) {
                    if (data.value === true) {
                        $scope.showThank = true;
                        $scope.emailExist = false;
                        console.log("datain if", data);
                        $scope.customizeformData = {};
                        $scope.customizeformData.games = [];
                        $timeout(function () {
                            $state.reload();

                        }, 2000);
                    } else if (data.value === false) {
                        console.log("im ijn else if ", data);
                        $scope.emailExist = true;
                    }
                })
            } else if ($scope.customizeformData.starter && $scope.customizeformData.dessert && $scope.customizeformData.mainCourse && $scope.customizeformData._id) {
                $scope.selectDessert = false;
                $scope.selectStarter = false;
                $scope.selectmainCourse = false;
                NavigationService.editUserData($scope.customizeformData, function (data) {
                    console.log("$scope.customizeformData in editUserData", $scope.customizeformData);
                    console.log("editUserData", data);
                    if (data.value === true) {
                        $scope.showThank = true;
                        $scope.emailExist = false;
                        $scope.customizeformData = {};
                        $scope.customizeformData.games = [];
                        $timeout(function () {
                            $state.reload();

                        }, 3000);

                    } else if (data.value === false) {}
                });
            }
        } else {}

    }
    NavigationService.getCity(function (data) {
        $scope.allCity = data.data;
    });
    var id = "57bc4b2aeb9c91f1025a3b55";
    $scope.male = '';
    $scope.female = '';
    $scope.children = '';
    NavigationService.getSingleExploreSmaaash(id, function (data) {
        $scope.customizepackage = data.data;
        // $scope.customizepackage1 = _.chunk(data.data, 4)
        console.log("$scope.customizepackage", $scope.customizepackage);
        _.each($scope.customizepackage, function (data) {
            data.gameforarray = [];
            var index = _.findIndex($scope.customizeformData.games, {
                _id: data._id
            });
            if (index >= 0) {
                data.selected = true;
            }
            _.each(data.gamefor, function (n) {
                switch (n) {
                    case '1':
                        data.gameforarray.push('Male')
                        break;
                    case '2':
                        data.gameforarray.push('Female')
                        break;
                    case '3':
                        data.gameforarray.push('Children')
                        break;
                    default:
                }
            });
        });
    });
})

.controller('BirthdayCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("birthday-parties");
    $scope.menutitle = NavigationService.makeactive("Birthday Parties");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    NavigationService.getDetailExploreSmaaash($stateParams.id, function (data) {
        $scope.parties = data.data;
        console.log("$scope.parties", $scope.parties);

    });
    $scope.birthdayParty = function () {
        $uibModal.open({
            animation: true,
            templateUrl: "views/modal/enquiry.html",
            scope: $scope

        })
    };
})

.controller('SportsCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
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

.controller('SportingCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
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

.controller('TwilightCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
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

.controller('SnowCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $state, $filter, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("snow-rush");
    $scope.menutitle = NavigationService.makeactive("Snow Rush");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.$on('$viewContentLoaded', function () {
        $(window).scroll(function () {
            var scroller = $(document).scrollTop();
            var height = $(window).height() - 40;
            if (height <= scroller) {
                $('body').addClass('show-header');
            } else {
                $('body').removeClass('show-header');
            }
        });
    });

    $scope.scrollToSnow = function () {
        $('html, body').animate({
            scrollTop: $("#toSnow").offset().top
        }, 500);
    };

    $scope.mySlides12 = [
        'img/new/slid.png',
        'img/new/slid.png',
        'img/new/slid.png',
        'img/new/slid.png',
        'img/new/slid.png'
    ];

    NavigationService.getDetailExploreSmaaash($stateParams.id, function (data) {
            $scope.detailExploreSmaash = data.data;
            $scope.detailExploreSmaash.banner = $filter('uploadpath')($scope.detailExploreSmaash.banner);
            console.log($scope.detailExploreSmaash.multipleattraction);
            var attractions = [];
            _.each($scope.detailExploreSmaash.multipleattraction, function (multi) {
                _.each(multi.attraction, function (attr) {
                    attr.icon = multi.icon;
                    // attr.myid=attr._id;
                    attractions.push(attr);
                })
            })
            console.log(attractions);
            $scope.content = _.groupBy(attractions, 'type');
            $scope.event = $scope.content['57bd4e71a86ee9fa6770d4b2'];
            $scope.deals = $scope.content['57bc4b5aeb9c91f1025a3b58'];
            $scope.promotions = $scope.content['57bc4b36eb9c91f1025a3b56'];
            console.log("$scope.promotions", $scope.promotions)
            console.log("$scope.event", $scope.event);
            console.log("$scope.deals", $scope.deals);
        })
        // $scope.imagemodal = function () {
        //     $uibModal.open({
        //         animation: true,
        //         templateUrl: "views/modal/image.html",
        //         scope: $scope
        //     })
        // };



})

.controller('ConfirmCtrl', function ($scope, $uibModal, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("confirm-order");
    $scope.menutitle = NavigationService.makeactive("Confirm Order");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.billingForm = {};
    $scope.formComplete = false;

    $scope.formSubmit = function (formData) {
        if (formData) {
            if (Object.keys($scope.billingForm).length != 0) {
                // NavigationService.confirmOrder($scope.billingForm, function(data) {
                //     console.log("$scope.billingForm", data);
                // })
                $scope.formComplete = true;
                $scope.open();
                $timeout(function () {
                    $scope.formComplete = false;
                    $scope.billingForm = {};
                }, 2000);


            }


        }

    }

    $scope.animationsEnabled = true;
    $scope.open = function (size) {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/modal/form-success.html',
            controller: 'ConfirmCtrl',
            size: size,
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }
        });

    };
})

.controller('ExploreSmaashCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("explore-smaaash");
    $scope.menutitle = NavigationService.makeactive("Explore Smaaash");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

})









.controller('HostCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $uibModal) {
    $scope.template = TemplateService.changecontent("host-party");
    $scope.menutitle = NavigationService.makeactive("Host Party");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.myUrl = window.location.href;

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


    $scope.menu = "menu-out";
    $scope.getMenu = function () {
        if ($scope.menu == "menu-out") {
            $scope.menu = "menu-in";
        } else {
            $scope.menu = "menu-out";
        }
    };
    $scope.moreDesc = {};
    $scope.formCompleteSignup = false;

    $scope.signupData = {};
    $scope.pass = true;
    $scope.emailExist = false;

    $scope.signupLogin = function (signupData) {
        console.log("$scope.signupData ", $scope.signupData);
        if ($scope.signupData) {


            if ($scope.signupData.password == $scope.signupData.confirmPassword) {
                console.log('m true');
                $scope.pass = true;
                NavigationService.signup($scope.signupData, function (data) {
                    console.log("$scope.signupData", $scope.signupData);
                    if (data.value) {
                        $scope.emailExist = false;
                        $scope.formCompleteSignup = true;
                        $timeout(function () {
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
    $scope.assistanceLogin = function (formData) {
        console.log("formData", formData);
        if ($scope.formData) {
            NavigationService.assistanceLoginSignup($scope.formData, function (data) {
                console.log("assistanceLogin", data);
                if (data.value == true) {
                    $scope.formCompleteAssistance = true;
                    $timeout(function () {
                        $scope.formCompleteAssistance = false;
                        $scope.formData = {};
                    }, 2000);

                } else {

                }
            })
        }

    }

    NavigationService.getSingleExploreSmaaash($stateParams.id, function (data) {
        $scope.SingleHostParty1 = data.data;
        $scope.SingleHostParty = _.chunk(data.data, 3);
        $scope.content = _.groupBy($scope.SingleHostParty, 'hostAPartyType');
        $scope.birthday = $scope.content['57d6a09dbd5eb9846074b419'];
        $scope.kittyparties = $scope.content['57e1429c3da62fae1dfc560c'];
        $scope.wedding = $scope.content['57d6a027bd5eb9846074b418'];
        $scope.corporate = $scope.content['57e142483da62fae1dfc55f2'];
    });

    // $scope.moreDesc = {};
    // NavigationService.getSingleExploreSmaaash($stateParams.id, function (data) {
    //     $scope.events10 = data.data;
    //     $scope.events = _.chunk(data.data, 3);
    //     console.log("$scope.events", $scope.events);
    //     $scope.readMore = function (id) {
    //
    //         console.log("3333333", id);
    //         $scope.moreDesc[id] = ($scope.moreDesc[id] == true) ? false : true;
    //         console.log($scope.moreDesc);
    //         $scope.myDesc = _.find($scope.events10, function (n) {
    //             return n._id == id;
    //
    //         }).description;
    //     };
    // });
    $scope.readMore = function (id) {
        console.log(id);
        $scope.moreDesc[id] = ($scope.moreDesc[id] == true) ? false : true;
        $scope.myDesc = _.find($scope.SingleHostParty1, function (n) {
            return n._id == id;
        }).description;
    };
    NavigationService.getAllHostPartySlider(function (data) {
        var i = 1;
        $scope.hostPartySlider = _.each(data.data, function (key) {
            key.order = i;
            i++;
        });


    })


    $scope.today = function () {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
    };

    $scope.inlineOptions = {
        customClass: getDayClass,
        minDate: new Date(),
        showWeeks: true
    };

    $scope.dateOptions = {
        dateDisabled: disabled,
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
    };

    // Disable weekend selection
    function disabled(data) {
        var date = data.date,
            mode = data.mode;
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }

    $scope.toggleMin = function () {
        $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
        $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
    };

    $scope.toggleMin();

    $scope.open1 = function () {
        $scope.popup1.opened = true;
    };

    $scope.open2 = function () {
        $scope.popup2.opened = true;
    };

    $scope.setDate = function (year, month, day) {
        $scope.dt = new Date(year, month, day);
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
    $scope.altInputFormats = ['M!/d!/yyyy'];

    $scope.popup1 = {
        opened: false
    };

    $scope.popup2 = {
        opened: false
    };

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    $scope.events = [{
        date: tomorrow,
        status: 'full'
    }, {
        date: afterTomorrow,
        status: 'partially'
    }];

    function getDayClass(data) {
        var date = data.date,
            mode = data.mode;
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

            for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }

        return '';
    }

    $scope.direct = function () {
        $uibModal.open({
            animation: true,
            templateUrl: "views/modal/host-popup.html",
            scope: $scope,
            controller: 'HostCtrl',
            windowClass: "no-white-bg"
        });

    };

    $scope.direction = function () {

        $uibModal.open({
            animation: true,
            templateUrl: "views/modal/hosts-popup.html",
            scope: $scope,

            windowClass: "no-white-bg"
        })
    };
    $scope.formData = {};
    $scope.submitform = false;
    $scope.formData.city = $.jStorage.get("cityid");
    $scope.submitHostPopup = function () {
        console.log("$scope.formData", $scope.formData);
        if ($scope.formData) {
            NavigationService.hostGetCall($scope.formData, function (data) {
                console.log("data", data);
                if (data.value === true) {

                    $scope.submitform = true;

                }
            })
        }
    }

})


.controller('AboutCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("about");
    $scope.menutitle = NavigationService.makeactive("About");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('ProfileCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("profile");
    $scope.menutitle = NavigationService.makeactive("Profile");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.avatar = function () {
        $uibModal.open({
            animation: true,
            templateUrl: "views/modal/avatar.html",
            scope: $scope,
        })
    };

    $scope.tab = "design";
    $scope.classa = 'active';
    $scope.classb = '';
    $scope.classc = '';
    $scope.classd = '';
    $scope.classe = '';

    $scope.tabchange = function (tab, a) {
        $scope.tab = tab;
        if (a == 1) {
            $scope.classa = 'active-tab';
            $scope.classb = '';
            $scope.classc = '';
            $scope.classd = '';
            $scope.classe = '';

        }
        if (a == 2) {
            $scope.classb = 'active-tab';
            $scope.classa = '';
            $scope.classc = '';
            $scope.classd = '';
            $scope.classe = '';

        }
        if (a == 3) {
            $scope.classc = 'active-tab';
            $scope.classb = '';
            $scope.classa = '';
            $scope.classd = '';
            $scope.classe = '';

        }

    };


})

.controller('EventsCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("events-challenges");
    $scope.menutitle = NavigationService.makeactive("Events and Challengest");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.menu = "menu-out";
    $scope.getMenu = function () {
        if ($scope.menu == "menu-out") {
            $scope.menu = "menu-in";
        } else {
            $scope.menu = "menu-out";
        }
    };

    $scope.moreDesc = {};
    NavigationService.getSingleExploreSmaaash($stateParams.id, function (data) {
        $scope.events10 = data.data;
        $scope.events = _.chunk(data.data, 3);
        console.log("$scope.events", $scope.events);
        $scope.readMore = function (id) {

            console.log("3333333", id);
            $scope.moreDesc[id] = ($scope.moreDesc[id] == true) ? false : true;
            console.log($scope.moreDesc);
            $scope.myDesc = _.find($scope.events10, function (n) {
                return n._id == id;

            }).description;
        };
    });
})

.controller('DrinkCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("drink-party");
    $scope.menutitle = NavigationService.makeactive("Drink Party");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.myUrl = window.location.href;
    $scope.menu = "menu-out";
    $scope.getMenu = function () {
        if ($scope.menu == "menu-out") {
            $scope.menu = "menu-in";
        } else {
            $scope.menu = "menu-out";
        }
    };
    $scope.moreDesc = {};
    NavigationService.getSingleExploreSmaaash($stateParams.id, function (data) {
        $scope.drinkParty1 = data.data;
        $scope.drinkParty = _.chunk(data.data, 3);

        console.log("$scope.drinkParty", $scope.drinkParty);
        $scope.readMore = function (id) {

            console.log(id);
            $scope.moreDesc[id] = ($scope.moreDesc[id] == true) ? false : true;
            console.log($scope.moreDesc);
            console.log("  $scope.moreDesc[id]", $scope.moreDesc[id]);
            $scope.myDesc = _.find($scope.drinkParty1, function (n) {
                return n._id == id;

            }).description;
        };

    });
    $scope.mySlides = [
        'img/beverage.png',
        'img/beverage1.png',
        'img/beverage2.png',
    ];
    $scope.mySlidess = [
        'img/beverage.png',
        'img/beverage1.png',
    ];



    $scope.imagesmodal = function () {
        $uibModal.open({
            animation: true,
            templateUrl: "views/modal/party.html",
            scope: $scope
        })
    };

    $scope.showimg = false;
    $scope.showVid = function () {
        $scope.showimg = true;

    };
})

.controller('DealsCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("deals-packages");
    $scope.menutitle = NavigationService.makeactive("Deals Packages");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.menu = "menu-out";
    $scope.getMenu = function () {
        if ($scope.menu == "menu-out") {
            $scope.menu = "menu-in";
        } else {
            $scope.menu = "menu-out";
        }
    };

    $scope.moreDesc = {};
    NavigationService.getSingleExploreSmaaash($stateParams.id, function (data) {
        $scope.SingleDealsPackages = data.data;
        console.log("$scope.SingleDealsPackages", $scope.SingleDealsPackages);
        $scope.readMore = function (id, indexid) {

            console.log(id);
            $scope.moreDesc[id] = ($scope.moreDesc[id] == true) ? false : true;
            console.log($scope.moreDesc);
            $scope.myDesc = _.find($scope.SingleDealsPackages, function (n) {
                return n._id == id;
                // console.log($scope.myDesc);
            }).description;
        };

    });
    $scope.myWish = function (id) {

        if ($.jStorage.get("loginDetail") == null) {

            console.log("am in if");
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/wishlistsigup.html',
                scope: $scope
                    // backdropClass: 'backcolor'
            });
        } else {
            NavigationService.wishList(id, function (data) {

                console.log("wishlist", data);
            })
        }

    };
    $scope.addedToWishList = function () {
        if ($.jStorage.get("loginDetail") != null) {
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/wishlist.html',
                scope: $scope
                    // backdropClass: 'backcolor'
            });
        }

    }
    $scope.buy = function (id) {
        if ($.jStorage.get("loginDetail") == null) {

            console.log("am in if");
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/wishlistsigup.html',
                scope: $scope

            });
        } else {
            // NavigationService.buyOnline(id, function(data) {
            //
            //     console.log("buyOnline", data);
            // })
        }
    }


})

.controller('DealsInnerCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("deals-inner");
    $scope.menutitle = NavigationService.makeactive("Deals Inner");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.myUrl = window.location.href;
    NavigationService.getDetailExploreSmaaash($stateParams.id, function (data) {
        $scope.detailDealsInner = data.data;
        console.log("$scope.detailDealsInner", $scope.detailDealsInner);
        $scope.detailDealsInner.banner = $filter('uploadpath')($scope.detailDealsInner.banner);

    })

})

.controller('EventInnerCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("event-inner");
    $scope.menutitle = NavigationService.makeactive("Events Inner");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.myUrl = window.location.href;
    $scope.today = function () {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
    };

    $scope.inlineOptions = {
        customClass: getDayClass,
        minDate: new Date(),
        showWeeks: true
    };

    $scope.dateOptions = {
        dateDisabled: disabled,
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
    };

    // Disable weekend selection
    function disabled(data) {
        var date = data.date,
            mode = data.mode;
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }

    $scope.toggleMin = function () {
        $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
        $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
    };

    $scope.toggleMin();

    $scope.open1 = function () {
        $scope.popup1.opened = true;
    };

    $scope.open2 = function () {
        $scope.popup2.opened = true;
    };

    $scope.setDate = function (year, month, day) {
        $scope.dt = new Date(year, month, day);
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
    $scope.altInputFormats = ['M!/d!/yyyy'];

    $scope.popup1 = {
        opened: false
    };

    $scope.popup2 = {
        opened: false
    };

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    $scope.events = [{
        date: tomorrow,
        status: 'full'
    }, {
        date: afterTomorrow,
        status: 'partially'
    }];

    function getDayClass(data) {
        var date = data.date,
            mode = data.mode;
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

            for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }

        return '';
    }

    $scope.formData = {};
    $scope.formComplete = false;
    $scope.exist = false;
    $scope.formData.varstatus = "eventRegistration";
    $scope.formSubmit = function () {
        console.log("formData", $scope.formData);
        if ($scope.formData) {
            NavigationService.eventInnerForm($scope.formData, function (data) {

                if (data.data.value === false) {
                    $scope.exist = true;
                    $scope.formComplete = false;
                    console.log("iminelseif", data);
                } else {
                    console.log("iminif", data);
                    $scope.formComplete = true;
                    $scope.exist = false;
                    $timeout(function () {
                        $scope.formComplete = false;
                        $scope.exist = false;
                        $scope.formData = {};
                    }, 2000);
                }
            })
        }
    }
    NavigationService.getDetailExploreSmaaash($stateParams.id, function (data) {
        $scope.detailEventsInner = data.data;
        console.log("$scope.detailEventsInner", $scope.detailEventsInner);
        $scope.detailEventsInner.banner = $filter('uploadpath')($scope.detailEventsInner.banner);
    })
    $scope.pdfmodal = function () {
        $uibModal.open({
            animation: true,
            templateUrl: "views/modal/pdf.html",
            scope: $scope,
        })
    };
})





.controller('ExploreCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("explore");
    $scope.menutitle = NavigationService.makeactive("Explore");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();




    NavigationService.getOneExploresmash($stateParams.id, function (data) {
        $scope.mySlides4 = data.data;
        $scope.mySlides4.banner = $filter('uploadpath')($scope.mySlides4.banner);


    });


})




.controller('headerctrl', function ($scope, TemplateService, NavigationService, $state, $timeout, $uibModal) {
        $scope.attraId = "57bc4b2aeb9c91f1025a3b55";
        $scope.dealsId = "57bc4b5aeb9c91f1025a3b58";
        $scope.hostpartyId = "57bc4b10eb9c91f1025a3b54";
        $scope.whatsnewId = "57bc4af6eb9c91f1025a3b4f";
        $scope.foodBeveragesId = "57bc4b48eb9c91f1025a3b57";
        $scope.eventId = "57bd4e71a86ee9fa6770d4b2";
        $scope.template = TemplateService;
        $scope.city = true;

        $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $(window).scrollTop(0);
        });

        $scope.getCity = function () {
            NavigationService.getCity(function (data) {
                if (data.value) {
                    $scope.getCity = data.data;
                    if ($.jStorage.get("city") === null || $.jStorage.get('city') === '') {
                        var mumbai = _.find($scope.getCity, function (key) {
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


        $scope.currentdate = new Date();
        $scope.userLoginDetails = $.jStorage.get("loginDetail");

        $scope.city = false;
        $scope.flag = {};
        $scope.flag.showCity = false;
        $scope.toggleCity = function () {
            $scope.city = !$scope.city;
        };
        $scope.getCityName = function (cityname) {
            console.log(cityname);
            $.jStorage.set("cityid", cityname._id);
            $.jStorage.set("city", cityname.name);

            $state.reload();
        }

        $scope.template.reFetchCity = function () {
            $scope.cityData = {
                _id: $.jStorage.get("cityid"),
                name: $.jStorage.get("city")
            };
        };
        $scope.template.reFetchCity();


        $scope.menu = false;
        $scope.toggleMenu = function () {
            $scope.menu = !$scope.menu;
        };

        $scope.menus = "menu-out";
        $scope.showAunty = false;
        $scope.getMenus = function () {
            if ($scope.menus == "menu-out") {
                $scope.menus = "menu-in";
                $scope.showAunty = true;
            } else {
                $scope.menus = "menu-out";
                $scope.showAunty = false;
            }
        };
        $scope.showConnect = false;
        if ($.jStorage.get("loginDetail") != null) {
            $scope.showConnect = true;
        } else {
            $scope.showConnect = false;
        }

        $scope.formCompleteSignup = false;
        $scope.signupData = {};
        $scope.pass = true;
        $scope.emailExist = false;
        $scope.validCity = false;

        $scope.signupLogin = function (signupData) {
            console.log("$scope.signupData ", $scope.signupData);
            if ($scope.signupData) {
                if ($scope.signupData.city == $.jStorage.get("cityid")) {
                    $scope.validCity = false;
                    if ($scope.signupData.password == $scope.signupData.confirmPassword) {
                        console.log('m true');
                        $scope.pass = true;
                        NavigationService.signup($scope.signupData, function (data) {
                            console.log("$scope.signupData", $scope.signupData);
                            console.log("$scope.signupDataforData", data);
                            if (data.value === true) {
                                $.jStorage.set("loginDetail", data);
                                $scope.emailExist = false;
                                $scope.formCompleteSignup = true;
                                $timeout(function () {
                                    $scope.formCompleteSignup = false;
                                    $scope.signupData = {};
                                }, 2000);
                                location.reload();

                                // $state.go("account");
                            } else {
                                $scope.emailExist = true;
                            }
                        })
                    } else {
                        console.log('m false');
                        $scope.pass = false;
                    }
                } else {
                    console.log("im in else");
                    $scope.validCity = true;
                }
            }
        }


        $scope.formComplete = false;
        $scope.userData = {};
        $scope.valid = false;
        $scope.userLogin = function (userData) {
            if ($scope.userData) {
                console.log("$scope.userData", $scope.userData);
                NavigationService.login($scope.userData, function (data) {
                    console.log("data", data);
                    if (data.value == true) {
                        $.jStorage.set("loginDetail", data);
                        $scope.valid = false;
                        $scope.formComplete = true;
                        $timeout(function () {
                            $scope.formComplete = false;
                            $scope.userData = {};
                        }, 2000);
                        location.reload();
                    } else {
                        $scope.valid = true;
                    }


                })


            }

        };

        $scope.logout = function () {
            if ($.jStorage.get("loginDetail") != null) {
                NavigationService.logout(function (data) {
                    location.reload();
                    $state.go("home");
                })
            } else {

            }

        };
        $scope.myCart = function () {
            if ($.jStorage.get("loginDetail") === null) {
                console.log("am in if");
                $uibModal.open({
                    animation: true,
                    templateUrl: 'views/modal/wishlistsigup.html',
                    scope: $scope
                });
            } else if ($.jStorage.get("loginDetail") != null) {
                console.log("im in else");
                $state.go("cart");
            }
        };

        $scope.myAccount = function () {
            if ($.jStorage.get("loginDetail") != null) {
                $state.go("account");
            };
        }






    })
    .controller('footerctrl', function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.footer = function (val) {
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
        NavigationService.getTypes(function (data) {
            $scope.types = data.data;
            _.each($scope.types, function (n) {
                if (n.name == 'Whats new') {
                    console.log('here');
                }
            })

        });
        $scope.attrctionId = "57bc4b2aeb9c91f1025a3b55";
        $scope.drinkandPartyId = "57bc4b48eb9c91f1025a3b57";
        $scope.dealsandpackagesId = "57bc4b5aeb9c91f1025a3b58";
    })

.controller('languageCtrl', function ($scope, TemplateService, $translate, $rootScope) {

    $scope.changeLanguage = function () {
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