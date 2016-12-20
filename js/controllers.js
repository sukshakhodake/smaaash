var globalfunction = {};
angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ngDialog', 'imageupload'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal, $state, $filter, ngDialog) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    var openL = {};
    TemplateService.removeLoaderOn(4);
    $scope.openpops = function() {
        openL = ngDialog.open({
            template: 'views/content/popup.html',
            className: 'smaaash-cities ',
            className: 'backdroped',
            scope: $scope,
            closeByEscape: true
        });

    };
    $scope.currentdate = new Date();
    $scope.funToStopVid = function() {
        console.log("in im");
        $scope.showVideo = false;
    }
    var fired = false;
    $scope.onScrollStopVideo = function() {
        window.addEventListener("scroll", function() {
            if (document.body.scrollTop >= 700) {
                $scope.showVideo = true;
                $timeout(function() {
                    $scope.showVideo = true;
                }, 2000);
                fired = true;
            }
        }, true)
    }
    $scope.onScrollStopVideo();


    $scope.$on('$viewContentLoaded', function() {
        if (!$.jStorage.get("popupShow")) {
            $scope.openpops();
        }
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
    $(window).scroll(function() {
        var scroller = $(document).scrollTop();
        var height = $(window).height() - 40;
        if (height <= scroller) {
            var vdo = document.getElementsByClassName('stopv');
        }
    });
    $scope.showVideo = false;
    $scope.scrollToHome = function() {
        $scope.showVideo = true;
        $('html, body').animate({
            scrollTop: $("#toHome").offset().top
        }, 500);
    };
    $scope.hostpartyId = "57bc4b10eb9c91f1025a3b54";
    NavigationService.getSlider(function(data) {
        $scope.mySlides = data.data;
        // console.log("$scope.mySlides", $scope.mySlides);
        var i = 1;
        _.each($scope.mySlides, function(n) {
            if (n.image) {
                n.ordering = i;
                i++;
            }

        });
        TemplateService.removeLoader();
    });


    var attraction = [];
    var whatsnew = [];
    var hostParty = [];
    var deals = [];
    var events = [];
    var foodBeverages = [];

    $scope.getCities = {};
    NavigationService.getCity(function(data) {
        $scope.getCities = data.data;
        TemplateService.removeLoader();
    });
    $scope.nameOfCity = $.jStorage.get("city");

    $scope.getCityName = function(cityname) {
        console.log("cityname", cityname);
        console.log(cityname.name);
        $.jStorage.set("cityid", cityname._id);
        $.jStorage.set("city", cityname.name);
        $.jStorage.set("popupShow", true);
        $.jStorage.set("logos", cityname.logo);
        $.jStorage.set("branchId", cityname.BranchID);

        console.log(openL);
        ngDialog.closeAll("Change");
        $(".ngdialog").remove();
        $scope.template.reFetchCity();
        $state.reload();
    };





    NavigationService.getHomeContent(function(data) {
        $scope.homeContent = data.data;
        if (data.value) {
            $scope.homeContent = data.data;
            $scope.content = _.groupBy($scope.homeContent, "type.name");
            $scope.attraction = $scope.content.Attraction;
            console.log("$scope.attraction ", $scope.attraction);
            $scope.whatsnew = $scope.content["What's new"];
            $scope.hostParty = $scope.content["Host a party"];
            $scope.deals = $scope.content["Deals and Packages"];
            $scope.events = $scope.content["Events"];
            $scope.foodBeverages = $scope.content["Food and Beverages"];
            $scope.buyOnline = $scope.content["Buy Online"];
            $scope.promotion = $scope.content["Promotions"];

            TemplateService.removeLoader();
        } else {}

    });




    NavigationService.getHomeBanner(function(data) {
        if (data.value) {
            $scope.banner = data.data;
            console.log("  $scope.bannerDFDSFSD", $scope.banner);

            if ($scope.banner != '') {
                $scope.banner[0].homebanner = $filter('uploadpath')($scope.banner[0].homebanner);
            }
        }
        TemplateService.removeLoader();

    });

    $scope.subscribeFormComplete = false;
    $scope.subscribeData = {};
    $scope.duplicate = false;
    $scope.subscribeLogin = function(subscribeData) {
        if ($scope.subscribeData) {
            NavigationService.subscribe($scope.subscribeData, function(data) {
                if (data.data.value == false) {
                    $scope.duplicate = true;
                    $scope.subscribeFormComplete = false;
                } else {
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









    $scope.formCompleteSignup = false;
    $scope.signupData = {};
    $scope.pass = true;
    $scope.emailExist = false;
    $scope.validCity = false;
    $scope.signupLogin = function(signupData) {

        if ($scope.signupData) {
            if ($scope.signupData.city == $.jStorage.get("cityid")) {
                $scope.validCity = false;
                if ($scope.signupData.password == $scope.signupData.confirmPassword) {

                    $scope.pass = true;
                    NavigationService.signup($scope.signupData, function(data) {
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
                    $scope.pass = false;
                }
            } else {
                $scope.validCity = true;
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









    $scope.animationsEnabled = true;


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


.controller('LandingCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("landingform");
    $scope.menutitle = NavigationService.makeactive("Landing Form");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
        $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function() {
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

    $scope.toggleMin = function() {
        $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
        $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
    };

    $scope.toggleMin();

    $scope.open1 = function() {
        $scope.popup1.opened = true;
    };

    $scope.open2 = function() {
        $scope.popup2.opened = true;
    };

    $scope.setDate = function(year, month, day) {
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
})


.controller('CorporateCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("corporate-parties");
    $scope.menutitle = NavigationService.makeactive("Corporate Parties");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    NavigationService.getDetailExploreSmaaash($stateParams.id, function(data) {
        $scope.corporate = data.data;
    });
    $scope.corporateParty = function() {
        $uibModal.open({
            animation: true,
            templateUrl: "views/modal/enquiry.html",
            scope: $scope

        })
    };
})

.controller('BenefitCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("benefit");
    $scope.menutitle = NavigationService.makeactive("Benefit");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.removeLoaderOn(1);
    NavigationService.getBenefit(function(data) {
        $scope.benefits = data.data;
        TemplateService.removeLoader();
    });

})

.controller('ContactCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("contact");
    $scope.menutitle = NavigationService.makeactive("Contact");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

})

.controller('SponsorCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("sponsor");
    $scope.menutitle = NavigationService.makeactive("Sponsor");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    TemplateService.removeLoaderOn(1);

    $scope.moreDesc = {};
    NavigationService.getSponsors(function(data) {
        console.log("data", data.data);
        $scope.sponsor = data.data.sponsor;
        $scope.sponsor1 = _.chunk(data.data.sponsor, 3);
        $scope.esteem = data.data.esteem;
        $scope.contact = data.data.contact;
        TemplateService.removeLoader();
    });
    $scope.readMore = function(id) {
        console.log("id", id);
        $scope.moreDesc[id] = ($scope.moreDesc[id] == true) ? false : true;
        $scope.myDesc = _.find($scope.sponsor, function(n) {
            return n._id == id;
        }).content;
    };


})

.controller('EventCtrl', function($scope, $uibModal, TemplateService, NavigationService, $timeout, $stateParams,$state) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("event");
    $scope.menutitle = NavigationService.makeactive("Events");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.removeLoaderOn(1);
    $scope.moreDesc = {};
    NavigationService.getSingleExploreSmaaash($stateParams.id, function(data) {
        $scope.events = _.chunk(data.data, 3);
        TemplateService.removeLoader();
    });
    $scope.goTo = function(name, id) {
        if (name, id) {
            $scope.name = name.replace(/\s/g, '').toLowerCase();
            $state.go('event-inner', {
                name: $scope.name,
                id: id
            });
        }

    }
    $scope.isInWishlist = function(id) {
        var indexF = _.findIndex($scope.userwishlist, function(key) {
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
            NavigationService.showWishList(function(data) {
                $scope.userwishlist = data.data.wishList;
                console.log("$scope.userwishlist", $scope.userwishlist);
            })
        };
        showWishList();
    }

    $scope.addedToWishList = function(id) {
        console.log("id", id);
        if ($.jStorage.get("loginDetail") == null) {
            console.log("am in if");
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/wishlistsigup.html',
                scope: $scope
            });
        } else if ($.jStorage.get("loginDetail") != null) {
            var findIndex = _.findIndex($scope.userwishlist, function(key) {
                console.log(id, '////////');
                return key.exploresmash._id === id;
            });
            console.log("findIndex", findIndex);
            if (findIndex !== -1) {
                constraints = _.find($scope.userwishlist, function(key) {
                    return key.exploresmash._id === id;
                });
                console.log(constraints);
                NavigationService.removeFromWishList(constraints._id, function(data) {
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
                NavigationService.addToWishList(id, function(data) {
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

.controller('DealspCtrl', function($scope, $uibModal, TemplateService, NavigationService, $timeout,$state, $stateParams, $filter) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("dealsp");
    $scope.menutitle = NavigationService.makeactive("Deals and Packages");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.removeLoaderOn(1);
    $scope.goTo = function(name, id) {
        if (name, id) {
            $scope.name = name.replace(/\s/g, '').toLowerCase();
            $state.go('deals-inner', {
                name: $scope.name,
                id: id
            });
        }

    }
    NavigationService.getSingleExploreSmaaash($stateParams.id, function(data) {
        $scope.SingleDealsPackages = _.chunk(data.data, 3);
        TemplateService.removeLoader();
    });

    if ($.jStorage.get("loginDetail") != null) {
        function showWishList() {
            NavigationService.showWishList(function(data) {
                $scope.userwishlist = data.data.wishList;
                console.log("$scope.userwishlist", $scope.userwishlist);
            })
        };
        showWishList();
    }
    $scope.isInWishlist = function(id) {
        var indexF = _.findIndex($scope.userwishlist, function(key) {
            return key.exploresmash._id == id;
        })
        if (indexF !== -1) {
            return true;
        } else {
            return false;
        }
    }

    $scope.addedToWishList = function(id) {
        console.log("id", id);
        if ($.jStorage.get("loginDetail") == null) {
            console.log("am in if");
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/wishlistsigup.html',
                scope: $scope
            });
        } else if ($.jStorage.get("loginDetail") != null) {
            var findIndex = _.findIndex($scope.userwishlist, function(key) {
                console.log(id, '////////');
                return key.exploresmash._id === id;
            });
            console.log("findIndex", findIndex);
            if (findIndex !== -1) {
                constraints = _.find($scope.userwishlist, function(key) {
                    return key.exploresmash._id === id;
                });
                console.log(constraints);
                NavigationService.removeFromWishList(constraints._id, function(data) {
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
                NavigationService.addToWishList(id, function(data) {
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
    $scope.addToCartParams = {};
    $scope.addToCartParams.VisitDate = $filter('date')(new Date(), 'yyyy-MM-dd');
    $scope.addToCartParams.NoOfAdults = '1';
    if ($.jStorage.get("loginDetail")!=null) {
      $scope.addToCartParams.CustomerMobileNo = $.jStorage.get("loginDetail").data.CustomerMobile;
      $scope.addToCartParams.CustomerID = $.jStorage.get("loginDetail").data.CustomerID;
    }

    $scope.addToCartParams.NoOfChild = '0';
    $scope.addToCartParams.NoOfSenior = '0';
    $scope.addToCartParams.AddonIDs = " ";
    $scope.addToCartParams.AddonQuantities = "";
    $scope.addToCartParams.BranchID = $.jStorage.get("branchId");


        $scope.buyNow = function(BranchPackageID, price) {
                console.log("im in");
                console.log("price", price);
                console.log("BranchPackageID", BranchPackageID);
                $scope.addToCartParams.BranchPackageID = BranchPackageID;
                $scope.addToCartParams.TotalAmount = price;
                console.log("$scope.addToCartParams", $scope.addToCartParams);
                if ($.jStorage.get("loginDetail") == null) {
                  $uibModal.open({
                             animation: true,
                             templateUrl: 'views/modal/wishlistsigup.html',
                             scope: $scope
                         });
                }else {
                  NavigationService.addToCart($scope.addToCartParams, function(data) {
                      console.log("$scope.addToCartParams", $scope.addToCartParams);
                      if (data.value === true && data.data.AddToCart[0].Status === '1') {
                          console.log("inif", data);
                          $uibModal.open({
                              animation: true,
                              templateUrl: 'views/modal/addtocart.html',
                              scope: $scope
                          });
                      } else if (data.value === true && data.data.AddToCart[0].Status === '0') {
                          console.log("in else", data);
                          $uibModal.open({
                              animation: true,
                              templateUrl: 'views/modal/alreadyCart.html',
                              scope: $scope
                          });
                      }else {
                        $uibModal.open({
                            animation: true,
                            templateUrl: 'views/modal/addtocartfail.html',
                            scope: $scope
                        });
                      }


                  })
                }



            }
})

.controller('StarsCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("stars");
    $scope.menutitle = NavigationService.makeactive("Stars");
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
    TemplateService.removeLoaderOn(2);
    $scope.objectfilter = {};
    $scope.objectfilter.pagenumber = 0;
    $scope.objectfilter.pagesize = 6;
    $scope.objectfilter.city = $.jStorage.get("cityid");
    $scope.noviewmore = true;
    $scope.stars = [];
    $scope.notAvailable = false;
    $scope.fetchData = function() {
        $scope.objectfilter.pagenumber = $scope.objectfilter.pagenumber + 1;
        NavigationService.getStars($scope.objectfilter, function(data) {
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
                    _.each(data.data.data, function(n) {
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
            TemplateService.removeLoader();
        })
    };
    $scope.fetchData();
    $scope.message = false;
    $scope.fetchSearchedData = function() {
        $scope.objectfilter.pagenumber = 0;
        $scope.objectfilter.pagesize = 6;
        $scope.stars = [];
        $scope.noviewmore = true;
        $scope.objectfilter.city = $scope.objectfilter.city;

        $scope.objectfilter.pagenumber = $scope.objectfilter.pagenumber + 1;
        NavigationService.getStars($scope.objectfilter, function(data) {
            console.log("$scope.objectfilter", $scope.objectfilter);
            console.log(data.data.totalpages);

            if (data.data.data.length === 0) {
                $scope.message = true;
            } else {
                $scope.message = false;
            }
            // if (data.value) {
            //     console.log($scope.objectfilter.pagenumber);
            //     if (data.data.totalpages >= $scope.objectfilter.pagenumber) {
            //         _.each(data.data.data, function(n) {
            //             // console.log(n);
            //             $scope.stars.push(n)
            //         });
            //         if (data.data.totalpages === $scope.objectfilter.pagenumber) {
            //             $scope.noviewmore = false;
            //         }
            //     } else {
            //         console.log("in else last array");
            //         $scope.noviewmore = false;
            //     }
            // }
            // TemplateService.removeLoader();
            $scope.stars = data.data.data
        })
    };

    NavigationService.getMediaGallery(function(data) {
        $scope.mediagallery = data.data;
        console.log("$scope.mediagallery", $scope.mediagallery);
        TemplateService.removeLoader();
    });
    NavigationService.getCity(function(data) {
        $scope.allCity = data.data;
        console.log("allCity", $scope.allCity);
        // TemplateService.removeLoader();
    });
    $scope.showMediaGal = false;
    $scope.selectFun = function(value) {
        console.log("value", value);

    }

})

.controller('WeddingCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal, $stateParams) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("wedding-parties");
    $scope.menutitle = NavigationService.makeactive("PreWedding Parties");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.removeLoaderOn(1);
    NavigationService.getDetailExploreSmaaash($stateParams.id, function(data) {
        $scope.wedding = data.data;
        TemplateService.removeLoader();
    });
    $scope.weddingParty = function() {
        $uibModal.open({
            animation: true,
            templateUrl: "views/modal/enquiry.html",
            scope: $scope
        })
    };
})

.controller('NewCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $uibModal, $location) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("whats-new");
    $scope.menutitle = NavigationService.makeactive("Whats New");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.removeLoaderOn(1);
    $scope.moreDesc = {};
    $scope.menu = "menu-out";
    $scope.getMenu = function() {
        if ($scope.menu == "menu-out") {
            $scope.menu = "menu-in";
        } else {
            $scope.menu = "menu-out";
        }
    };


    $scope.showMore = false;

    $scope.myUrl = window.location.href;
    NavigationService.getSingleExploreSmaaash($stateParams.id, function(data) {
        $scope.SingleExploreSmaaash = data.data;
        $scope.SingleExploreSmaaash1 = _.chunk(data.data, 3);
        // console.log("$scope.SingleExploreSmaaash", $scope.SingleExploreSmaaash);
        TemplateService.removeLoader();
    });
    $scope.readMore = function(id, indexid) {
        $scope.moreDesc[id] = ($scope.moreDesc[id] == true) ? false : true;
        console.log($scope.moreDesc);
        $scope.myDesc = _.find($scope.SingleExploreSmaaash, function(n) {
            return n._id == id;
        }).description;
    };
    $scope.isInWishlist = function(id) {
        var indexF = _.findIndex($scope.userwishlist, function(key) {
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
            NavigationService.showWishList(function(data) {
                $scope.userwishlist = data.data.wishList;
                console.log("$scope.userwishlist", $scope.userwishlist);
            })
        };
        showWishList();
    }

    $scope.addedToWishList = function(id) {
        console.log("id", id);
        if ($.jStorage.get("loginDetail") == null) {
            console.log("am in if");
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/wishlistsigup.html',
                scope: $scope
            });
        } else if ($.jStorage.get("loginDetail") != null) {
            var findIndex = _.findIndex($scope.userwishlist, function(key) {
                console.log(id, '////////');
                return key.exploresmash._id === id;
            });
            console.log("findIndex", findIndex);
            if (findIndex !== -1) {
                constraints = _.find($scope.userwishlist, function(key) {
                    return key.exploresmash._id === id;
                });
                console.log(constraints);
                NavigationService.removeFromWishList(constraints._id, function(data) {
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
                NavigationService.addToWishList(id, function(data) {
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


.controller('LeaderCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("leader");
    $scope.menutitle = NavigationService.makeactive("Leadership");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.menu = "menu-out";
    TemplateService.removeLoaderOn(1);
    $scope.getMenu = function() {
        if ($scope.menu == "menu-out") {
            $scope.menu = "menu-in";
        } else {
            $scope.menu = "menu-out";
        }
    };
    $scope.moreDesc = {};
    NavigationService.getLeader(function(data) {
        $scope.leadership = data.data;
        console.log("leadership", $scope.leadership);
        $scope.readMore = function(id, indexid) {

            console.log(id);
            $scope.moreDesc[id] = ($scope.moreDesc[id] == true) ? false : true;
            console.log($scope.moreDesc);
            $scope.myDesc = _.find($scope.leadership, function(n) {
                return n._id == id;

            }).description;
        };
        TemplateService.removeLoader();
    })


})

.controller('AttractionCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $uibModal, $filter,$state) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("attractions");
    $scope.menutitle = NavigationService.makeactive("Attractions");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.removeLoaderOn(1);
    $scope.menu = "menu-out";
    $scope.getMenu = function() {
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
    $scope.singleAttraction1 = [];
    $scope.singleAttraction = [];
    $scope.goTOSearch = function(filter) {
        NavigationService.searchExploreSmaaash($scope.filter, function(data) {
            $scope.singleAttraction = data.data;
            console.log("$scope.singleAttraction", $scope.singleAttraction);
            $scope.singleAttraction1 = _.chunk(data.data, 3);

            if ($scope.singleAttraction1.length === 0) {
                console.log("imin");
                $scope.msg = true;
            } else {
                $scope.msg = false;
            }

            _.each($scope.singleAttraction, function(data) {
                data.gameforarray = [];
                _.each(data.gamefor, function(n) {
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
            TemplateService.removeLoader();

        });
    }
    $scope.goTOSearch($scope.filter);

    if ($.jStorage.get("loginDetail") != null) {
        function showWishList() {
            NavigationService.showWishList(function(data) {
                $scope.userwishlist = data.data.wishList;
                console.log("$scope.userwishlist", $scope.userwishlist);
            })
        };
        showWishList();
    }



    $scope.isInWishlist = function(id) {
        var indexF = _.findIndex($scope.userwishlist, function(key) {
            return key.exploresmash._id == id;
        })
        if (indexF !== -1) {
            return true;
        } else {
            return false;
        }
    }
    $scope.addedToWishList = function(id) {
        if ($.jStorage.get("loginDetail") == null) {
            console.log("am in if");
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/wishlistsigup.html',
                scope: $scope
            });
        } else if ($.jStorage.get("loginDetail") != null) {
            var findIndex = _.findIndex($scope.userwishlist, function(key) {
                console.log(id, '////////');
                return key.exploresmash._id === id;
            });
            console.log("findIndex", findIndex);
            if (findIndex !== -1) {
                console.log("findIndex", findIndex);
                constraints = _.find($scope.userwishlist, function(key) {
                    return key.exploresmash._id === id;
                });
                console.log(constraints);
                NavigationService.removeFromWishList(constraints._id, function(data) {
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
                NavigationService.addToWishList(id, function(data) {
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
    $scope.goTo = function(name, id) {
        if (name, id) {
            $scope.name = name.replace(/\s/g, '').toLowerCase();
            $state.go('snow-rush', {
                name: $scope.name,
                id: id
            });
        }

    }
    //   "BranchID": 12,
    // "BranchPackageID": 70,
    // "TotalAmount": 999,
    // "VisitDate": "2016-12-16",
    // "NoOfAdults": 1,
    // "NoOfChild": 0,
    // "NoOfSenior": 0,
    // "AddonIDs": "",
    // "AddonQuantities": "",
    // "CustomerMobileNo": "8082495670",
    // "CustomerID": 327

    $scope.addToCartParams = {};
    $scope.addToCartParams.VisitDate = $filter('date')(new Date(), 'yyyy-MM-dd');
    $scope.addToCartParams.NoOfAdults = '1';
    if ($.jStorage.get("loginDetail")!=null) {
      $scope.addToCartParams.CustomerMobileNo = $.jStorage.get("loginDetail").data.CustomerMobile;
      $scope.addToCartParams.CustomerID = $.jStorage.get("loginDetail").data.CustomerID;
    }

    $scope.addToCartParams.NoOfChild = '0';
    $scope.addToCartParams.NoOfSenior = '0';
    $scope.addToCartParams.AddonIDs = " ";
    $scope.addToCartParams.AddonQuantities = "";
    $scope.addToCartParams.BranchID = $.jStorage.get("branchId");







    $scope.buyNow = function(BranchPackageID, price) {
            console.log("im in");
            console.log("price", price);
            console.log("BranchPackageID", BranchPackageID);
            $scope.addToCartParams.BranchPackageID = BranchPackageID;
            $scope.addToCartParams.TotalAmount = price;
            console.log("$scope.addToCartParams", $scope.addToCartParams);
            if ($.jStorage.get("loginDetail") == null) {
              $uibModal.open({
                         animation: true,
                         templateUrl: 'views/modal/wishlistsigup.html',
                         scope: $scope
                     });
            }else {
              NavigationService.addToCart($scope.addToCartParams, function(data) {
                  console.log("$scope.addToCartParams", $scope.addToCartParams);
                  if (data.value === true && data.data.AddToCart[0].Status === '1') {
                      console.log("inif", data);
                      $uibModal.open({
                          animation: true,
                          templateUrl: 'views/modal/addtocart.html',
                          scope: $scope
                      });
                  } else if (data.value === true && data.data.AddToCart[0].Status === '0') {
                      console.log("in else", data);
                      $uibModal.open({
                          animation: true,
                          templateUrl: 'views/modal/alreadyCart.html',
                          scope: $scope
                      });
                  }else {
                    $uibModal.open({
                        animation: true,
                        templateUrl: 'views/modal/addtocartfail.html',
                        scope: $scope
                    });
                  }


              })
            }



        }

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


.controller('WishlistCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("wishlist");
    $scope.menutitle = NavigationService.makeactive("Wishlist");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.removeLoaderOn(1);

})

.controller('KittyCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("parties");
    $scope.menutitle = NavigationService.makeactive("Parties");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.removeLoaderOn(1);
    NavigationService.getPartyInside($stateParams.id, function(data) {
        $scope.party = data.data;
        console.log("$scope.party", $scope.party);
        TemplateService.removeLoader();

    });
    $scope.kittyParty = function() {
        $scope.modalInstance = $uibModal.open({
            animation: true,
            templateUrl: "views/modal/enquiry.html",
            scope: $scope

        })
    };
    $scope.enquiryData = {};
    $scope.formSubmit = function(enquiryData) {
        if (enquiryData) {
            enquiryData.city = $.jStorage.get("cityid");
            NavigationService.eventInnerForm(enquiryData, function(data) {
                if (data.value === true) {
                    $scope.formComplete = true;
                    console.log("in in if ");
                    $timeout(function() {
                        $scope.modalInstance.close();
                        $scope.formComplete = false;
                        $scope.enquiryData = {};

                    }, 2000);
                } else {
                    console.log("in else");
                }
            })

        }
    }
})

.controller('CustomizePackageCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("customizepackage");
    $scope.menutitle = NavigationService.makeactive("Customize Package");
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
    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function() {
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

    $scope.toggleMin = function() {
        $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
        $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
    };

    $scope.toggleMin();

    $scope.open1 = function() {
        $scope.popup1.opened = true;
    };

    $scope.open2 = function() {
        $scope.popup2.opened = true;
    };

    $scope.setDate = function(year, month, day) {
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
    TemplateService.removeLoaderOn(2);

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
    $scope.customizeformData.city = $.jStorage.get("cityid");

    // if ($.jStorage.get("loginDetail") != null) {
    //     $scope.customizeformData._id = $.jStorage.get("loginDetail").data._id
    // }

    $scope.customizeformData.games = [];
    $scope.selectedIds = [];
    $scope.goToGames = function(val, data) {
        data.selected = !data.selected;
        $scope.customizeformData.games = _.map(_.filter($scope.customizepackage, "selected"), "_id");
        console.log("wdehjhwd", $scope.customizeformData.games);

    };

    if ($.jStorage.get("loginDetail") != null && $.jStorage.get("customizeobj") === null) {
        NavigationService.getOne(function(data) {
            // delete data.data._id;
            // console.log("data", data.data);
            $scope.customizeformData.mobile = data.data.CustomerMobile;
            $scope.customizeformData.email = data.data.CustomerEmail;
            // console.log("data.data", data.data);
        });
    }

    if ($.jStorage.get("customizeobj") != null) {
        $scope.customizeformData.email = $.jStorage.get("customizeobj").email;
        $scope.customizeformData.mobile = $.jStorage.get("customizeobj").mobile;
    }
    $scope.submitCustomizeForm = function(formData) {

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
            if ($scope.customizeformData.starter && $scope.customizeformData.dessert && $scope.customizeformData.mainCourse) {
                $scope.selectDessert = false;
                $scope.selectStarter = false;
                $scope.selectmainCourse = false;
                NavigationService.custom($scope.customizeformData, function(data) {
                    if (data.value === true) {
                        console.log("customizeformDataNormal", data);
                        $scope.showThank = true;
                        $scope.emailExist = false;
                        console.log("datain if", data);
                        $.jStorage.set("customizeobj", data.data);
                        $scope.customizeformData = {};
                        $scope.customizeformData.games = [];
                        $timeout(function() {
                            // $state.reload();

                        }, 2000);
                    } else if (data.value === false) {
                        console.log("im ijn else if ", data);
                        $scope.emailExist = true;
                    }
                })
            }
            //  else if ($scope.customizeformData.starter && $scope.customizeformData.dessert && $scope.customizeformData.mainCourse ) {
            //     $scope.selectDessert = false;
            //     $scope.selectStarter = false;
            //     $scope.selectmainCourse = false;
            //     NavigationService.custom($scope.customizeformData, function(data) {
            //         console.log("$scope.customizeformData in editUserData", $scope.customizeformData);
            //         console.log("customeditUserData", data);
            //         if (data.value === true) {
            //             $scope.showThank = true;
            //             $scope.hideDiv=true
            //             $scope.emailExist = false;
            //             $scope.customizeformData = {};
            //             $scope.customizeformData.games = [];
            //             $timeout(function() {
            //                 $scope.hideDiv=true
            //                 $state.reload();
            //
            //             }, 3000);
            //
            //         } else if (data.value === false) {}
            //     });
            // }
        } else {}

    }
    NavigationService.getCity(function(data) {
        $scope.allCity = data.data;
        TemplateService.removeLoader();
    });
    var id = "57bc4b2aeb9c91f1025a3b55";
    $scope.male = '';
    $scope.female = '';
    $scope.children = '';
    $scope.customizeExploreSmaaash = function() {
        NavigationService.getSingleExploreSmaaash(id, function(data) {
            $scope.customizepackage = data.data;

            console.log("$scope.customizepackage", $scope.customizepackage);
            _.each($scope.customizepackage, function(data) {
                data.gameforarray = [];
                var index = _.findIndex($scope.customizeformData.games, {
                    _id: data._id
                });
                if (index >= 0) {
                    data.selected = true;
                }
                _.each(data.gamefor, function(n) {
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
            TemplateService.removeLoader();
        });
    }
    $scope.customizeExploreSmaaash();
    $scope.customizeCityFun = function(custCityId) {
        console.log("custCityId", custCityId);
        NavigationService.getcustomizeCityFun(id, custCityId, function(data) {
            $scope.customizepackage = data.data;

            console.log("$scope.customizepackage", $scope.customizepackage);
            _.each($scope.customizepackage, function(data) {
                data.gameforarray = [];
                var index = _.findIndex($scope.customizeformData.games, {
                    _id: data._id
                });
                if (index >= 0) {
                    data.selected = true;
                }
                _.each(data.gamefor, function(n) {
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
            TemplateService.removeLoader();
        });
    }



})

.controller('BirthdayCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("birthday-parties");
    $scope.menutitle = NavigationService.makeactive("Birthday Parties");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.removeLoaderOn(1);
    NavigationService.getDetailExploreSmaaash($stateParams.id, function(data) {
        $scope.parties = data.data;
        console.log("$scope.parties", $scope.parties);
        TemplateService.removeLoader();
    });
    $scope.birthdayParty = function() {
        $uibModal.open({
            animation: true,
            templateUrl: "views/modal/enquiry.html",
            scope: $scope

        })
    };
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

.controller('SnowCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state, $filter, $uibModal) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("snow-rush");
        $scope.menutitle = $stateParams.name.charAt(0).toUpperCase() + $stateParams.name.substring(1)
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

        $scope.scrollToSnow = function() {
            $('html, body').animate({
                scrollTop: $("#toSnow").offset().top
            }, 500);
        };
        TemplateService.removeLoaderOn(1);
        var fired = false;
        $scope.onScrollStopVideo = function() {
            window.addEventListener("scroll", function() {
                if (document.body.scrollTop >= 700) {
                    // $scope.showVideo = true;
                    $timeout(function() {
                        $scope.showVideo = true;
                    }, 2000);
                    fired = true;
                }
            }, true)
        }
        $scope.onScrollStopVideo();



        $scope.startVid = function() {

            $scope.startVideo = !$scope.startVideo;
            console.log($scope.startVideo, "  console.log($scope.startVideo);");
        }
        NavigationService.getDetailExploreSmaaash($stateParams.id, function(data) {
            $scope.detailExploreSmaash = data.data;
            console.log("$scope.detailExploreSmaash", $scope.detailExploreSmaash);
            $scope.detailExploreSmaash.banner = $filter('uploadpath')($scope.detailExploreSmaash.banner);
            console.log($scope.detailExploreSmaash.multipleattraction);
            var attractions = [];
            _.each($scope.detailExploreSmaash.multipleattraction, function(multi) {
                _.each(multi.attraction, function(attr) {
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

            TemplateService.removeLoader();
        })




    })
    .controller('ConfirmCtrl', function($scope, $uibModal, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("confirm-order");
        $scope.menutitle = NavigationService.makeactive("Confirm Order");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.billingForm = {};
        $scope.formComplete = false;

        $scope.formSubmit = function(formData) {
            if (formData) {
                if (Object.keys($scope.billingForm).length != 0) {
                    // NavigationService.confirmOrder($scope.billingForm, function(data) {
                    //     console.log("$scope.billingForm", data);
                    // })
                    $scope.formComplete = true;
                    $scope.open();
                    $timeout(function() {
                        $scope.formComplete = false;
                        $scope.billingForm = {};
                    }, 2000);


                }


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

})









.controller('HostCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $uibModal) {
    $scope.template = TemplateService.changecontent("host-party");
    $scope.menutitle = NavigationService.makeactive("Host Party");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.myUrl = window.location.href;



    $scope.mySlides10 = [
        'img/Top-banner.jpg',
        'img/Top-banner.jpg',
        'img/Top-banner.jpg',
        'img/Top-banner.jpg',
        'img/Top-banner.jpg'
    ];


    $scope.menu = "menu-out";
    $scope.getMenu = function() {
        if ($scope.menu == "menu-out") {
            $scope.menu = "menu-in";
        } else {
            $scope.menu = "menu-out";
        }
    };
    TemplateService.removeLoaderOn(2);
    $scope.moreDesc = {};

    $scope.formData = {};

    $scope.formCompleteAssistance = false;
    $scope.assistanceLogin = function(formData) {
        console.log("formData in fun", formData);
        if (formData) {
            $scope.formCompleteAssistance = true;
            formData.city = $.jStorage.get("cityid");
            NavigationService.assistanceLoginSignup(formData, function(data) {
                console.log("in nav", formData);
                console.log("assistanceLogin", data);
                if (data.value == true) {
                    $scope.formCompleteAssistanceThank = true;
                    $timeout(function() {
                        $scope.formCompleteAssistance = false;
                        $scope.formCompleteAssistanceThank = false;
                        $scope.formData = {};
                    }, 2000);

                } else {

                }
            })
        }

    }

    NavigationService.getSingleExploreSmaaash($stateParams.id, function(data) {
        $scope.SingleHostParty1 = data.data;
        $scope.SingleHostParty = _.chunk(data.data, 3);
        $scope.content = _.groupBy($scope.SingleHostParty, 'hostAPartyType');
        $scope.birthday = $scope.content['57d6a09dbd5eb9846074b419'];
        $scope.kittyparties = $scope.content['57e1429c3da62fae1dfc560c'];
        $scope.wedding = $scope.content['57d6a027bd5eb9846074b418'];
        $scope.corporate = $scope.content['57e142483da62fae1dfc55f2'];
        TemplateService.removeLoader();
    });


    $scope.readMore = function(id) {
        console.log(id);
        $scope.moreDesc[id] = ($scope.moreDesc[id] == true) ? false : true;
        $scope.myDesc = _.find($scope.SingleHostParty1, function(n) {
            return n._id == id;
        }).description;
    };
    NavigationService.getAllHostPartySlider(function(data) {
        var i = 1;
        $scope.hostPartySlider = _.each(data.data, function(key) {
            key.order = i;
            i++;
        });
        TemplateService.removeLoader();

    })


    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function() {
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

    $scope.toggleMin = function() {
        $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
        $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
    };

    $scope.toggleMin();

    $scope.open1 = function() {
        $scope.popup1.opened = true;
    };

    $scope.open2 = function() {
        $scope.popup2.opened = true;
    };

    $scope.setDate = function(year, month, day) {
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

    $scope.direct = function() {
        $scope.modalInstance1 = $uibModal.open({
            animation: true,
            templateUrl: "views/modal/host-popup.html",
            scope: $scope,
            windowClass: "no-white-bg"
        });

    };




    $scope.formDatapopup = {};
    $scope.submitHostPopup = function(formDatapop) {
        console.log("imin");
        if (formDatapop) {
            $scope.modalInstance1.close();
            formDatapop.city = $.jStorage.get("cityid");
            NavigationService.hostGetCall(formDatapop, function(data) {
                console.log("data", data);
                if (data.value === true) {
                    $scope.modalInstance2 = $uibModal.open({
                        animation: true,
                        templateUrl: "views/modal/hosts-popup.html",
                        scope: $scope,

                        windowClass: "no-white-bg"
                    });
                    $timeout(function() {
                        $scope.modalInstance2.close();
                        $scope.formDatapopup = {};
                    }, 3000);
                }
            })

        }
    }

})

.controller('RechargeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("online");
    $scope.menutitle = NavigationService.makeactive("Recharge");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.rechargeOnline = {};
    if ($.jStorage.get("loginDetail") != null) {
        $scope.rechargeOnline.CustomerID = $.jStorage.get("loginDetail").data.CustomerID;
        $scope.rechargeOnline.BranchID = $.jStorage.get("branchId");
    }

    $scope.rechargeOnline.PGReturnURL = "http://104.155.129.33:82/signup/returnUrlFunction";

    $scope.submitRecharge = function(rechargeOnline) {
        console.log("rechargeOnline", rechargeOnline);
        NavigationService.rechargeCard(rechargeOnline, function(data) {
            console.log("data", data);
        })

    }





})


.controller('AboutCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("about");
    $scope.menutitle = NavigationService.makeactive("About");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('ProfileCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("profile");
    $scope.menutitle = NavigationService.makeactive("Profile");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.avatar = function() {
        $uibModal.open({
            animation: true,
            templateUrl: "views/modal/avatar.html",
            scope: $scope,
            windowClass: 'widths'
        })
    };

    $scope.userprofile = {};
    NavigationService.signupProfile(function(data) {
        console.log("data", data);
        $scope.userprofile = data.data;
        console.log("data.data.dob", data.data.dob);
        $scope.userprofile.dob = new Date(data.data.dob);
    });

    $scope.getAvtar = function(avtar) {
        if (avtar) {
            $scope.userprofile.profilePic = avtar;
        }
    }
    $scope.formComplete = false;
    $scope.submitUserProfile = function(userprofile) {
        console.log("im in");
        console.log("userprofile", userprofile);
        NavigationService.updateProfile(userprofile, function(data) {
            console.log("data", data);
            if (data.value === true) {
                $scope.formComplete = true;
                $timeout(function() {
                    $scope.formComplete = false;
                }, 2000);
            }
        })
    }



    $scope.CustID = "202";
    $scope.customerBookingDetails = {
        "GetCustomerBookingDetails": {
            "CustomerBooking": [{
                "Status": 1,
                "Message": "Get Booking Data",
                "BranchName": "Mumbai",
                "PackageName": "Travel Agents - WeekDay",
                "PackagePhoto": "http://192.168.0.41/Smaaash/Upload/ImageNotFound.jpg",
                "BookingDate": "22-11-2016",
                "VisitDate": "30-11-2016",
                "CNRNo": 511,
                "PayableAmount": 999,
                "IsCustomerCard": 1
            }, {
                "Status": 1,
                "Message": "Get Booking Data",
                "BranchName": "Mumbai",
                "PackageName": "Travel Agents - WeekDay",
                "PackagePhoto": "http://192.168.0.41/Smaaash/Upload/ImageNotFound.jpg",
                "BookingDate": "22-11-2016",
                "VisitDate": "01-12-2016",
                "CNRNo": 510,
                "PayableAmount": 999,
                "IsCustomerCard": 1
            }],
            "CustomerCardRecharge": [{
                "Status": 1,
                "Message": "Get Card Recharge Data",
                "BranchName": "Mumbai",
                "CustomerName": "piyush",
                "RechargeDate": "26-11-2016",
                "RechargeID": 3,
                "RechargeAmt": 2000
            }, {
                "Status": 1,
                "Message": "Get Card Recharge Data",
                "BranchName": "Mumbai",
                "CustomerName": "piyush",
                "RechargeDate": "26-11-2016",
                "RechargeID": 2,
                "RechargeAmt": 100
            }, {
                "Status": 1,
                "Message": "Get Card Recharge Data",
                "BranchName": "Mumbai",
                "CustomerName": "piyush",
                "RechargeDate": "26-11-2016",
                "RechargeID": 1,
                "RechargeAmt": 500
            }]
        }
    }


    $scope.bookingDetails = [];
    $scope.custBooking = $scope.customerBookingDetails.GetCustomerBookingDetails.CustomerBooking;
    $scope.CustCardRecharge = $scope.customerBookingDetails.GetCustomerBookingDetails.CustomerCardRecharge;
    $scope.bookingDetails = $scope.custBooking.concat($scope.CustCardRecharge);
    _.each($scope.bookingDetails, function(value) {
        if (value.Message === "Get Booking Data") {
            value.objtype = "Booking";
        } else if (value.Message === "Get Card Recharge Data") {
            value.objtype = "Recharge";
        };

    });
    $scope.msg = false;
    $scope.CustID = $.jStorage.get("loginDetail").data.CustomerID;
    NavigationService.GetCustomerBookingDetails($scope.CustID, function(data) {
        if (data.value === true) {
            $scope.custBooking = data.GetCustomerBookingDetails.CustomerBooking;
            $scope.CustCardRecharge = data.GetCustomerBookingDetails.CustomerCardRecharge;
            $scope.bookingDetails = $scope.custBooking.concat($scope.CustCardRecharge);
            _.each($scope.bookingDetails, function(value) {
                if (value.Message === "Get Booking Data") {
                    value.objtype = "Booking";
                } else if (value.Message === "Get Card Recharge Data") {
                    value.objtype = "Recharge";
                };

            });
        } else if (data.value === false) {
            $scope.msg = true;
        }
    })
    $scope.tab = "design";
    $scope.classa = 'active';
    $scope.classb = '';
    $scope.classc = '';
    $scope.classd = '';
    $scope.classe = '';

    $scope.tabchange = function(tab, a) {
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
        if (a == 4) {
            $scope.classd = 'active-tab';
            $scope.classb = '';
            $scope.classa = '';
            $scope.classc = '';
            $scope.classe = '';

        }

    };
    $scope.attraction = '';
    $scope.whatsnew = '';

    function getuserWishList() {
        if ($.jStorage.get("loginDetail") != null) {
            NavigationService.showWishList(function(data) {
                $scope.showWishList = data.data;
                _.each($scope.showWishList.wishList, function(data) {
                    data.pageName = [];
                    _.each(data.exploresmash, function(n) {
                        switch (n) {
                            case '57bc4b2aeb9c91f1025a3b55':
                                data.pageName.push("Attraction")
                                break;
                            case '57bc4af6eb9c91f1025a3b4f':
                                data.pageName.push("What's new")
                                break;
                            case '57bc4b36eb9c91f1025a3b56':
                                data.pageName.push("Promotions")
                                break;
                            case '57bd4e71a86ee9fa6770d4b2':
                                data.pageName.push("Events")
                                break;
                            case '57bc4b5aeb9c91f1025a3b58':
                                data.pageName.push("Deals and Packages")
                                break;
                            default:
                        }
                    });
                });
                TemplateService.removeLoader();

            });
        }
    };
    getuserWishList();


    $scope.removeFromWishList = function(id) {
        NavigationService.removeFromWishList(id, function(data) {
            getuserWishList();
        });
    };
    // $scope.click=false;
    $scope.takePic = function() {
        // $scope.click=!$scope.click;
        console.log("inim");
        $uibModal.open({
            animation: true,
            templateUrl: "views/modal/profilepic.html",
            scope: $scope
        });
    }

    var _video = null,
        patData = null;

    $scope.patOpts = {
        x: 0,
        y: 0,
        w: 25,
        h: 25
    };

    // Setup a channel to receive a video property
    // with a reference to the video element
    // See the HTML binding in main.html
    $scope.channel = {};

    $scope.webcamError = false;
    $scope.onError = function(err) {
        $scope.$apply(
            function() {
                $scope.webcamError = err;
            }
        );
    };

    $scope.onSuccess = function() {
        // The video element contains the captured camera data
        _video = $scope.channel.video;
        $scope.$apply(function() {
            $scope.patOpts.w = _video.width;
            $scope.patOpts.h = _video.height;
            //$scope.showDemos = true;
        });
    };

    $scope.onStream = function(stream) {
        // You could do something manually with the stream.
    };

    $scope.makeSnapshot = function(data) {
        if (_video) {
            console.log("_videosrc", _video);
            var patCanvas = document.querySelector('#snapshot');
            if (!patCanvas) return;

            patCanvas.width = _video.width;
            patCanvas.height = _video.height;
            var ctxPat = patCanvas.getContext('2d');

            var idata = getVideoData($scope.patOpts.x, $scope.patOpts.y, $scope.patOpts.w, $scope.patOpts.h);
            ctxPat.putImageData(idata, 0, 0);

            sendSnapshotToServer(patCanvas.toDataURL());

            patData = idata;
            console.log("patData", patData);


            // $scope.downloadSnapshot();
        }
    };

    /**
     * Redirect the browser to the URL given.
     * Used to download the image by passing a dataURL string
     */
    $scope.downloadSnapshot = function downloadSnapshot(dataURL) {
        window.location.href = dataURL;
    };

    var getVideoData = function getVideoData(x, y, w, h) {
        var hiddenCanvas = document.createElement('canvas');
        hiddenCanvas.width = _video.width;
        hiddenCanvas.height = _video.height;
        var ctx = hiddenCanvas.getContext('2d');
        ctx.drawImage(_video, 0, 0, _video.width, _video.height);
        return ctx.getImageData(x, y, w, h);
    };


    /**
     * This function could be used to send the image data
     * to a backend server that expects base64 encoded images.
     *
     * In this example, we simply store it in the scope for display.
     */
    var sendSnapshotToServer = function sendSnapshotToServer(imgBase64) {
        $scope.snapshotData = imgBase64;
        console.log("$scope.snapshotData", $scope.snapshotData);
    };

    //calender

    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function() {
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

    $scope.toggleMin = function() {
        $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
        $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
    };

    $scope.toggleMin();

    $scope.open1 = function() {
        $scope.popup1.opened = true;
    };

    $scope.open2 = function() {
        $scope.popup2.opened = true;
    };

    $scope.setDate = function(year, month, day) {
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
    TemplateService.removeLoaderOn(1);
    $scope.moreDesc = {};
    NavigationService.getSingleExploreSmaaash($stateParams.id, function(data) {
        $scope.events10 = data.data;
        $scope.events = _.chunk(data.data, 3);
        console.log("$scope.events", $scope.events);
        $scope.readMore = function(id) {

            console.log("3333333", id);
            $scope.moreDesc[id] = ($scope.moreDesc[id] == true) ? false : true;
            console.log($scope.moreDesc);
            $scope.myDesc = _.find($scope.events10, function(n) {
                return n._id == id;

            }).description;
        };
        TemplateService.removeLoader();
    });
})

.controller('DrinkCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("drink-party");
    $scope.menutitle = NavigationService.makeactive("Drink Party");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.myUrl = window.location.href;
    $scope.menu = "menu-out";
    TemplateService.removeLoaderOn(1);
    $scope.pdfpath = "http://104.155.129.33:82/upload/readFile?file";
    $scope.getMenu = function() {
        if ($scope.menu == "menu-out") {
            $scope.menu = "menu-in";
        } else {
            $scope.menu = "menu-out";
        }
    };
    $scope.moreDesc = {};
    NavigationService.getSingleExploreSmaaash($stateParams.id, function(data) {
        $scope.drinkParty1 = data.data;
        console.log("data", data.data);
        $scope.drinkParty = _.chunk(data.data, 3);
        $scope.readMore = function(id) {

            console.log(id);
            $scope.moreDesc[id] = ($scope.moreDesc[id] == true) ? false : true;
            console.log($scope.moreDesc);
            console.log("  $scope.moreDesc[id]", $scope.moreDesc[id]);
            $scope.myDesc = _.find($scope.drinkParty1, function(n) {
                return n._id == id;

            }).description;
        };
        TemplateService.removeLoader();
    });
    $scope.imagesmodal = function() {
        $uibModal.open({
            animation: true,
            templateUrl: "views/modal/party.html",
            scope: $scope
        });

    };

    $scope.pdfmodal = function(pdf) {
        $scope.pdfdata = pdf;
        if ($scope.pdfdata) {
            $uibModal.open({
                animation: true,
                templateUrl: "views/modal/menu.html",
                scope: $scope,
            })
        }
    };
    $scope.bookings = function() {
        console.log("in in");
        $uibModal.open({
            animation: true,
            templateUrl: "views/modal/bookings.html",
            scope: $scope,
            windowClass: "no-white-bg"
        })
    };
    // $scope.mySlides = [
    //     'img/beverage.png',
    //     'img/beverage1.png',
    //     'img/beverage2.png',
    // ];
    // $scope.mySlidess = [
    //     'img/beverage.png',
    //     'img/beverage1.png',
    //     'img/beverage2.png',
    // ];
    // NavigationService.getFoodGallery(id,function(data){
    //
    // })

    $scope.getGallery = function(gid) {
        console.log("aaa", gid);
        NavigationService.getFoodGallery(gid, function(data) {
            if (data.value) {
                $scope.mySlides = data.data.gallery;
                console.log("$scope.galleryData", $scope.mySlides);
                if ($scope.mySlides.length > 0) {
                    $uibModal.open({
                        animation: true,
                        templateUrl: "views/modal/party.html",
                        scope: $scope
                    });
                } else {
                    console.log("no data");
                }


            }
        });
    }
    $scope.showimg = false;
    $scope.showVid = function() {
        $scope.showimg = true;

    };
})

.controller('DealsCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("deals-packages");
    $scope.menutitle = NavigationService.makeactive("Deals Packages");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.removeLoaderOn(1);
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
        $scope.SingleDealsPackages = data.data;
        console.log("$scope.SingleDealsPackages", $scope.SingleDealsPackages);
        $scope.readMore = function(id, indexid) {

            console.log(id);
            $scope.moreDesc[id] = ($scope.moreDesc[id] == true) ? false : true;
            console.log($scope.moreDesc);
            $scope.myDesc = _.find($scope.SingleDealsPackages, function(n) {
                return n._id == id;
                // console.log($scope.myDesc);
            }).description;
        };
        TemplateService.removeLoader();
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
    $scope.buy = function(id) {
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

.controller('DealsInnerCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter,$state) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("deals-inner");
    $scope.menutitle = $stateParams.name.charAt(0).toUpperCase() + $stateParams.name.substring(1) ;
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.removeLoaderOn(1);
    $scope.myUrl = window.location.href;
    NavigationService.getDetailExploreSmaaash($stateParams.id, function(data) {
        $scope.detailDealsInner = data.data;
        console.log("$scope.detailDealsInner", $scope.detailDealsInner);
        $scope.detailDealsInner.banner = $filter('uploadpath')($scope.detailDealsInner.banner);
        TemplateService.removeLoader();
    });
    $scope.addToCartParams = {};
    $scope.addToCartParams.VisitDate = $filter('date')(new Date(), 'yyyy-MM-dd');
    $scope.addToCartParams.NoOfAdults = '1';
    if ($.jStorage.get("loginDetail")!=null) {
      $scope.addToCartParams.CustomerMobileNo = $.jStorage.get("loginDetail").data.CustomerMobile;
      $scope.addToCartParams.CustomerID = $.jStorage.get("loginDetail").data.CustomerID;
    }

    $scope.addToCartParams.NoOfChild = '0';
    $scope.addToCartParams.NoOfSenior = '0';
    $scope.addToCartParams.AddonIDs = " ";
    $scope.addToCartParams.AddonQuantities = "";
    $scope.addToCartParams.BranchID = $.jStorage.get("branchId");


        $scope.buyNow = function(BranchPackageID, price) {
                console.log("im in");
                console.log("price", price);
                console.log("BranchPackageID", BranchPackageID);
                $scope.addToCartParams.BranchPackageID = BranchPackageID;
                $scope.addToCartParams.TotalAmount = price;
                console.log("$scope.addToCartParams", $scope.addToCartParams);
                if ($.jStorage.get("loginDetail") == null) {
                  $uibModal.open({
                             animation: true,
                             templateUrl: 'views/modal/wishlistsigup.html',
                             scope: $scope
                         });
                }else {
                  NavigationService.addToCart($scope.addToCartParams, function(data) {
                      console.log("$scope.addToCartParams", $scope.addToCartParams);
                      if (data.value === true && data.data.AddToCart[0].Status === '1') {
                          console.log("inif", data);
                          $uibModal.open({
                              animation: true,
                              templateUrl: 'views/modal/addtocart.html',
                              scope: $scope
                          });
                      } else if (data.value === true && data.data.AddToCart[0].Status === '0') {
                          console.log("in else", data);
                          $uibModal.open({
                              animation: true,
                              templateUrl: 'views/modal/alreadyCart.html',
                              scope: $scope
                          });
                      }else {
                        $uibModal.open({
                            animation: true,
                            templateUrl: 'views/modal/addtocartfail.html',
                            scope: $scope
                        });
                      }


                  })
                }



            }

})

.controller('EventInnerCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("event-inner");
    $scope.menutitle =$stateParams.name.charAt(0).toUpperCase() + $stateParams.name.substring(1) ;
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.myUrl = window.location.href;
    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function() {
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

    $scope.toggleMin = function() {
        $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
        $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
    };

    $scope.toggleMin();

    $scope.open1 = function() {
        $scope.popup1.opened = true;
    };

    $scope.open2 = function() {
        $scope.popup2.opened = true;
    };

    $scope.setDate = function(year, month, day) {
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
    TemplateService.removeLoaderOn(1);
    $scope.formData = {};
    $scope.formData.city = $.jStorage.get("cityid");
    $scope.formComplete = false;
    $scope.exist = false;
    $scope.formData.varstatus = "eventRegistration";
    $scope.formSubmit = function() {
        console.log("formData", $scope.formData);
        if ($scope.formData) {
            NavigationService.eventInnerForm($scope.formData, function(data) {

                if (data.data.value === false) {
                    $scope.exist = true;
                    $scope.formComplete = false;
                    console.log("iminelseif", data);
                } else {
                    console.log("iminif", data);
                    $scope.formComplete = true;
                    $scope.exist = false;
                    $timeout(function() {
                        $scope.formComplete = false;
                        $scope.exist = false;
                        $scope.formData = {};
                    }, 2000);
                }
            })
        }
    }
    NavigationService.getDetailExploreSmaaash($stateParams.id, function(data) {
        $scope.detailEventsInner = data.data;
        console.log("$scope.detailEventsInner", $scope.detailEventsInner);
        $scope.detailEventsInner.banner = $filter('uploadpath')($scope.detailEventsInner.banner);
        TemplateService.removeLoader();
        console.log("$scope.detailEventsInner.banner ", $scope.detailEventsInner.banner);
    })
    $scope.pdfmodal = function(pdf) {
        console.log("im in");
        $scope.pdfdata = pdf;
        if ($scope.pdfdata) {
            $uibModal.open({
                animation: true,
                templateUrl: "views/modal/menu.html",
                scope: $scope,
            })
        }
    };
    $scope.addToCartParams = {};
    $scope.addToCartParams.VisitDate = $filter('date')(new Date(), 'yyyy-MM-dd');
    $scope.addToCartParams.NoOfAdults = '1';
    if ($.jStorage.get("loginDetail")!=null) {
      $scope.addToCartParams.CustomerMobileNo = $.jStorage.get("loginDetail").data.CustomerMobile;
      $scope.addToCartParams.CustomerID = $.jStorage.get("loginDetail").data.CustomerID;
    }

    $scope.addToCartParams.NoOfChild = '0';
    $scope.addToCartParams.NoOfSenior = '0';
    $scope.addToCartParams.AddonIDs = " ";
    $scope.addToCartParams.AddonQuantities = "";
    $scope.addToCartParams.BranchID = $.jStorage.get("branchId");


        $scope.buyNow = function(BranchPackageID, price) {
                console.log("im in");
                console.log("price", price);
                console.log("BranchPackageID", BranchPackageID);
                $scope.addToCartParams.BranchPackageID = BranchPackageID;
                $scope.addToCartParams.TotalAmount = price;
                console.log("$scope.addToCartParams", $scope.addToCartParams);
                if ($.jStorage.get("loginDetail") == null) {
                  $uibModal.open({
                             animation: true,
                             templateUrl: 'views/modal/wishlistsigup.html',
                             scope: $scope
                         });
                }else {
                  NavigationService.addToCart($scope.addToCartParams, function(data) {
                      console.log("$scope.addToCartParams", $scope.addToCartParams);
                      if (data.value === true && data.data.AddToCart[0].Status === '1') {
                          console.log("inif", data);
                          $uibModal.open({
                              animation: true,
                              templateUrl: 'views/modal/addtocart.html',
                              scope: $scope
                          });
                      } else if (data.value === true && data.data.AddToCart[0].Status === '0') {
                          console.log("in else", data);
                          $uibModal.open({
                              animation: true,
                              templateUrl: 'views/modal/alreadyCart.html',
                              scope: $scope
                          });
                      }else {
                        $uibModal.open({
                            animation: true,
                            templateUrl: 'views/modal/addtocartfail.html',
                            scope: $scope
                        });
                      }


                  })
                }



            }
})


.controller('ResetCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("reset");
    $scope.menutitle = NavigationService.makeactive("Reset");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.credentials = {};
    $scope.wrongPass = false;
    $scope.passUpdated = false;
    if ($.jStorage.get("loginDetail") != null) {
        $scope.credentials.CustomerID = $.jStorage.get("loginDetail").data.CustomerID;
        $scope.loggedInUser = $.jStorage.get("loginDetail").data.CustomerName;
    }
    $scope.formSubmit = function(credentials) {
        console.log("credentials", credentials);
        NavigationService.CustomerResetPassword(credentials, function(data) {
            console.log("credentials", credentials);
            console.log("data", data);
            if (data.value === true) {
                $scope.passUpdated = true;
                $timeout(function() {
                    $scope.credentials = {};
                    $scope.passUpdated = false;
                    $scope.wrongPass = false;
                }, 2000);
            } else if (data.value === false) {
                $scope.wrongPass = true;
            }
        });
    }

})


.controller('ThankCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("thank");
    $scope.menutitle = NavigationService.makeactive("Thank");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('PromotionCtrl', function($scope, $uibModal, TemplateService, NavigationService, $timeout, $stateParams, $filter,  $state) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("promotions");
    $scope.menutitle = NavigationService.makeactive("Promotion");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.removeLoaderOn(1);
    $scope.goTo = function(name, id) {
        if (name, id) {
            $scope.name = name.replace(/\s/g, '').toLowerCase();
            $state.go('promotion-inner', {
                name: $scope.name,
                id: id
            });
        }

    }
    NavigationService.getSingleExploreSmaaash($stateParams.id, function(data) {
        console.log("data", data);
        $scope.promotion = _.chunk(data.data, 3);
        TemplateService.removeLoader();
    });
    $scope.isInWishlist = function(id) {
        var indexF = _.findIndex($scope.userwishlist, function(key) {
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
            NavigationService.showWishList(function(data) {
                $scope.userwishlist = data.data.wishList;
                console.log("$scope.userwishlist", $scope.userwishlist);
            })
        };
        showWishList();
    }


    $scope.addedToWishList = function(id) {
        console.log("id", id);
        if ($.jStorage.get("loginDetail") == null) {
            console.log("am in if");
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/wishlistsigup.html',
                scope: $scope
            });
        } else if ($.jStorage.get("loginDetail") != null) {
            var findIndex = _.findIndex($scope.userwishlist, function(key) {
                console.log(id, '////////');
                return key.exploresmash._id === id;
            });
            console.log("findIndex", findIndex);
            if (findIndex !== -1) {
                constraints = _.find($scope.userwishlist, function(key) {
                    return key.exploresmash._id === id;
                });
                console.log(constraints);
                NavigationService.removeFromWishList(constraints._id, function(data) {
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
                NavigationService.addToWishList(id, function(data) {
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
    $scope.addToCartParams = {};
    $scope.addToCartParams.VisitDate = $filter('date')(new Date(), 'yyyy-MM-dd');
    $scope.addToCartParams.NoOfAdults = '1';
    if ($.jStorage.get("loginDetail")!=null) {
      $scope.addToCartParams.CustomerMobileNo = $.jStorage.get("loginDetail").data.CustomerMobile;
      $scope.addToCartParams.CustomerID = $.jStorage.get("loginDetail").data.CustomerID;
    }

    $scope.addToCartParams.NoOfChild = '0';
    $scope.addToCartParams.NoOfSenior = '0';
    $scope.addToCartParams.AddonIDs = " ";
    $scope.addToCartParams.AddonQuantities = "";
    $scope.addToCartParams.BranchID = $.jStorage.get("branchId");


        $scope.buyNow = function(BranchPackageID, price) {
                console.log("im in");
                console.log("price", price);
                console.log("BranchPackageID", BranchPackageID);
                $scope.addToCartParams.BranchPackageID = BranchPackageID;
                $scope.addToCartParams.TotalAmount = price;
                console.log("$scope.addToCartParams", $scope.addToCartParams);
                if ($.jStorage.get("loginDetail") == null) {
                  $uibModal.open({
                             animation: true,
                             templateUrl: 'views/modal/wishlistsigup.html',
                             scope: $scope
                         });
                }else {
                  NavigationService.addToCart($scope.addToCartParams, function(data) {
                      console.log("$scope.addToCartParams", $scope.addToCartParams);
                      if (data.value === true && data.data.AddToCart[0].Status === '1') {
                          console.log("inif", data);
                          $uibModal.open({
                              animation: true,
                              templateUrl: 'views/modal/addtocart.html',
                              scope: $scope
                          });
                      } else if (data.value === true && data.data.AddToCart[0].Status === '0') {
                          console.log("in else", data);
                          $uibModal.open({
                              animation: true,
                              templateUrl: 'views/modal/alreadyCart.html',
                              scope: $scope
                          });
                      }else {
                        $uibModal.open({
                            animation: true,
                            templateUrl: 'views/modal/addtocartfail.html',
                            scope: $scope
                        });
                      }


                  })
                }



            }

})

.controller('PromotionInnerCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("promotion");
    $scope.menutitle =  $stateParams.name.charAt(0).toUpperCase() + $stateParams.name.substring(1) ;
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.removeLoaderOn(1);

    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function() {
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

    $scope.toggleMin = function() {
        $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
        $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
    };

    $scope.toggleMin();

    $scope.open1 = function() {
        $scope.popup1.opened = true;
    };

    $scope.open2 = function() {
        $scope.popup2.opened = true;
    };

    $scope.setDate = function(year, month, day) {
        $scope.dt = new Date(year, month, day);
    };
    $scope.pdfmodal = function(pdf) {
        $scope.pdfdata = pdf;
        if ($scope.pdfdata) {
            $uibModal.open({
                animation: true,
                templateUrl: "views/modal/menu.html",
                scope: $scope,
            })
        }
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



    $scope.myUrl = window.location.href;
    NavigationService.getDetailExploreSmaaash($stateParams.id, function(data) {
        $scope.detailPromotionsInner = data.data;
        console.log("$scope.detailPromotionsInner", $scope.detailPromotionsInner);
        $scope.detailPromotionsInner.banner = $filter('uploadpath')($scope.detailPromotionsInner.banner);
        TemplateService.removeLoader();
    });
    $scope.formData = {};
    $scope.formData.city = $.jStorage.get("cityid");
    $scope.formComplete = false;
    $scope.exist = false;
    $scope.formData.varstatus = "promotionRegistration";
    $scope.formSubmit = function(formData) {
        console.log("formData", formData);
        if (formData) {
            NavigationService.eventInnerForm(formData, function(data) {

                if (data.data.value === false) {
                    $scope.exist = true;
                    $scope.formComplete = false;
                    console.log("iminelseif", data);
                } else {
                    console.log("iminif", data);
                    $scope.formComplete = true;
                    $scope.exist = false;
                    $timeout(function() {
                        $scope.formComplete = false;
                        $scope.exist = false;
                        $scope.formData = {};
                    }, 2000);
                }
            })
        }
    }
    $scope.addToCartParams = {};
    $scope.addToCartParams.VisitDate = $filter('date')(new Date(), 'yyyy-MM-dd');
    $scope.addToCartParams.NoOfAdults = '1';
    if ($.jStorage.get("loginDetail")!=null) {
      $scope.addToCartParams.CustomerMobileNo = $.jStorage.get("loginDetail").data.CustomerMobile;
      $scope.addToCartParams.CustomerID = $.jStorage.get("loginDetail").data.CustomerID;
    }

    $scope.addToCartParams.NoOfChild = '0';
    $scope.addToCartParams.NoOfSenior = '0';
    $scope.addToCartParams.AddonIDs = " ";
    $scope.addToCartParams.AddonQuantities = "";
    $scope.addToCartParams.BranchID = $.jStorage.get("branchId");


        $scope.buyNow = function(BranchPackageID, price) {
                console.log("im in");
                console.log("price", price);
                console.log("BranchPackageID", BranchPackageID);
                $scope.addToCartParams.BranchPackageID = BranchPackageID;
                $scope.addToCartParams.TotalAmount = price;
                console.log("$scope.addToCartParams", $scope.addToCartParams);
                if ($.jStorage.get("loginDetail") == null) {
                  $uibModal.open({
                             animation: true,
                             templateUrl: 'views/modal/wishlistsigup.html',
                             scope: $scope
                         });
                }else {
                  NavigationService.addToCart($scope.addToCartParams, function(data) {
                      console.log("$scope.addToCartParams", $scope.addToCartParams);
                      if (data.value === true && data.data.AddToCart[0].Status === '1') {
                          console.log("inif", data);
                          $uibModal.open({
                              animation: true,
                              templateUrl: 'views/modal/addtocart.html',
                              scope: $scope
                          });
                      } else if (data.value === true && data.data.AddToCart[0].Status === '0') {
                          console.log("in else", data);
                          $uibModal.open({
                              animation: true,
                              templateUrl: 'views/modal/alreadyCart.html',
                              scope: $scope
                          });
                      }else {
                        $uibModal.open({
                            animation: true,
                            templateUrl: 'views/modal/addtocartfail.html',
                            scope: $scope
                        });
                      }


                  })
                }



            }
})

.controller('BlogCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter, $uibModal, $state) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("blog");
    $scope.menutitle = NavigationService.makeactive("Blog");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.myUrl = window.location.href;
    TemplateService.removeLoaderOn(3);

    // $scope.goto=function(data._id){
    //   console.log("im in");
    // $state.go('blog-inside',{id:data._id});
    // }
    NavigationService.getPopularBlog(function(data) {
        console.log("data", data);
        $scope.popularblogs = data.data;
        TemplateService.removeLoader();
    });

    $scope.objectfilter = {};
    $scope.objectfilter.pagenumber = 0;
    $scope.objectfilter.pagesize = 6;
    $scope.objectfilter._id = $.jStorage.get("cityid");
    $scope.noviewmore = true;
    $scope.noviewmore1 = false;
    $scope.blogs = [];
    $scope.notAvailable = false;
    if ($stateParams.search) {
        $scope.objectfilter.search = $stateParams.search;
    } else {
        $stateParams.search = {};
    }
    $scope.fetchData = function() {

        $scope.objectfilter.pagenumber = $scope.objectfilter.pagenumber + 1;
        NavigationService.getBlog($scope.objectfilter, function(data) {
            console.log(data.data.totalpages);
            console.log("getStars", data.data);
            if (data.data.data.length === 0) {
                $scope.noviewmore = false;
                $scope.noviewmore1 = true;
                $scope.notAvailable = true;
            } else {
                $scope.notAvailable = false;
            }
            if (data.value) {
                console.log($scope.objectfilter.pagenumber);
                if (data.data.totalpages >= $scope.objectfilter.pagenumber) {
                    _.each(data.data.data, function(n) {
                        // console.log(n);
                        $scope.blogs.push(n);
                    });
                    if (data.data.totalpages === $scope.objectfilter.pagenumber) {
                        $scope.noviewmore = false;
                    }
                } else {
                    console.log("in else last array");
                    $scope.noviewmore = false;
                }
            }
            console.log("blogs", $scope.blogs);
            TemplateService.removeLoader();
        })
    };
    $scope.fetchData();

    $scope.message = false;
    $scope.fetchSearchedData = function() {
        $scope.objectfilter.pagenumber = 0;
        $scope.objectfilter.pagesize = 6;
        $scope.blogs = [];
        $scope.noviewmore = true;
        $scope.objectfilter.city = $scope.objectfilter._id;
        $scope.objectfilter.pagenumber = $scope.objectfilter.pagenumber + 1;
        NavigationService.getBlog($scope.objectfilter, function(data) {
            console.log("$scope.objectfilter", $scope.objectfilter);
            console.log(data.data.totalpages);
            if (data.data.data.length === 0) {
                $scope.message = true;
            } else {
                $scope.message = false;
            }
            $scope.blogs = data.data.data;
            console.log("blogs", $scope.blogs);
            TemplateService.removeLoader();
        })
    };

    if ($.jStorage.get("loginDetail") != null) {
        function showWishList() {
            NavigationService.showWishList(function(data) {
                $scope.userwishlist = data.data.wishList;
                console.log("$scope.userwishlist", $scope.userwishlist);
            })
        };
        showWishList();
    }
    $scope.isInWishlist = function(id) {
        var indexF = _.findIndex($scope.userwishlist, function(key) {
            return key.exploresmash._id == id;
        })
        if (indexF !== -1) {
            return true;
        } else {
            return false;
        }
    }
    $scope.addedToWishList = function(id) {
        console.log("id", id);
        if ($.jStorage.get("loginDetail") == null) {
            console.log("am in if");
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/wishlistsigup.html',
                scope: $scope
            });
        } else if ($.jStorage.get("loginDetail") != null) {
            var findIndex = _.findIndex($scope.userwishlist, function(key) {
                console.log(id, '////////');
                return key.exploresmash._id === id;
            });
            console.log("findIndex", findIndex);
            if (findIndex !== -1) {
                constraints = _.find($scope.userwishlist, function(key) {
                    return key.exploresmash._id === id;
                });
                console.log(constraints);
                NavigationService.removeFromWishList(constraints._id, function(data) {
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
                NavigationService.addToWishList(id, function(data) {
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

.controller('BlogInsideCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("blog-inside");
    $scope.menutitle = NavigationService.makeactive("Blog Inside");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.removeLoaderOn(1);
    $scope.myUrl = window.location.href;
    $scope.myBlogslides = [
        'img/karting/blue.png',
        // 'img/karting/star.png',
        'img/karting/sonakshi.png',
        // 'img/karting/fidelis.png',
        'img/karting/salman.png',
        'img/karting/shikar.png'
    ];

    NavigationService.getDetailBlog($stateParams.id, function(data) {
        $scope.blogInside = data.data;
        var findIndex = _.findIndex($scope.blogInside.popularBlog, function(val) {
            return val._id === $stateParams.id;
        });
        if (findIndex >= 0) {
            $scope.blogInside.popularBlog.splice(findIndex, 1);
        } else {
            $scope.blogInside.popularBlog = data.data.popularBlog;
        }
        TemplateService.removeLoader();
    });

})


.controller('PracticeCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("practice");
    $scope.menutitle = NavigationService.makeactive("Practice");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();


})

.controller('BuyCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("buy");
    $scope.menutitle = NavigationService.makeactive("Buy");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();


})

.controller('ExploreCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("explore");
    $scope.menutitle = NavigationService.makeactive("Explore");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    TemplateService.removeLoaderOn(1);


    NavigationService.getOneExploresmash($stateParams.id, function(data) {
        $scope.mySlides4 = data.data;
        $scope.mySlides4.banner = $filter('uploadpath')($scope.mySlides4.banner);
        TemplateService.removeLoader();

    });


})




.controller('headerctrl', function($scope, TemplateService, NavigationService, $state, $timeout, $uibModal) {
        $scope.attraId = "57bc4b2aeb9c91f1025a3b55";
        $scope.dealsId = "57bc4b5aeb9c91f1025a3b58";
        $scope.hostpartyId = "57bc4b10eb9c91f1025a3b54";
        $scope.whatsnewId = "57bc4af6eb9c91f1025a3b4f";
        $scope.foodBeveragesId = "57bc4b48eb9c91f1025a3b57";
        $scope.eventId = "57bd4e71a86ee9fa6770d4b2";
        $scope.promotionId = "57bc4b36eb9c91f1025a3b56";
        $scope.template = TemplateService;
        $scope.city = true;
        if ($.jStorage.get("city") === 'Mumbai') {
            $scope.showlogo = true;
        }
        $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
            $(window).scrollTop(0);
        });
        TemplateService.removeLoaderOn(1);
        $scope.getCity = function() {
            NavigationService.getCity(function(data) {
                if (data.value) {
                    $scope.getCity = data.data;
                    if ($.jStorage.get("city") === null || $.jStorage.get('city') === '') {
                        var mumbai = _.find($scope.getCity, function(key) {
                            if (key.name.toLowerCase() == "mumbai") {
                                return key;
                            }
                        });
                        $scope.getCityName(mumbai);
                    }
                }
                TemplateService.removeLoader();
            });
        }
        $scope.getCity();


        $scope.currentdate = new Date();
        $scope.userLoginDetails = $.jStorage.get("loginDetail");

        $scope.city = false;
        $scope.flag = {};
        $scope.flag.showCity = false;
        $scope.toggleCity = function() {
            $scope.city = !$scope.city;
        };
        $scope.getCityName = function(cityname) {
            console.log("cityname", cityname);
            $.jStorage.set("cityid", cityname._id);
            $.jStorage.set("city", cityname.name);
            $.jStorage.set("logos", cityname.logo);
            $.jStorage.set("branchId", cityname.BranchID);

            $state.reload();
        }

        $scope.template.reFetchCity = function() {
            $scope.cityData = {
                _id: $.jStorage.get("cityid"),
                name: $.jStorage.get("city"),
                smaaashLogo: $.jStorage.get("logos"),
                branchid: $.jStorage.get("branchId")
            };
        };
        $scope.template.reFetchCity();


        $scope.menu = false;
        $scope.toggleMenu = function() {
            $scope.menu = !$scope.menu;
        };

        $scope.menus = "menu-out";
        $scope.showAunty = false;
        $scope.getMenus = function() {
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
        $scope.signupData.city = $.jStorage.get("cityid");
        $scope.signupData.BranchID = $.jStorage.get("branchId");
        $scope.pass = true;
        $scope.emailExist = false;
        $scope.validCity = false;
        $scope.getOtp = {};
        $scope.getOtp.CustomerMobileNo = $scope.signupData.CustomerMobile;
        $scope.getOtp.OTPFor = "1";
        $scope.wrongOtp = false;


        $scope.signupGenerateOtp = function(signupData) {
            console.log("signupData ", signupData);
            if (signupData) {
                if (signupData.CustomerAddress === $.jStorage.get("cityid")) {
                    $scope.validCity = false;
                    if (signupData.CustomerPassword === signupData.confirmPassword) {
                        console.log('m true');
                        $scope.pass = true;
                        console.log("signupDataotp", signupData);
                        // $scope.otp();

                        $scope.getOtp.CustomerMobileNo = signupData.CustomerMobile;
                        console.log("$scope.getOtp", $scope.getOtp);
                        NavigationService.generateOtp($scope.getOtp, function(data) {
                            console.log("data", data);
                            if (data.value === true) {
                                $scope.otp();
                            } else {
                                console.log("data in false", data);
                                $scope.customerEXist = true;
                            }
                        });
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
        $scope.GenrateOneTimePass = function(signupData) {
            $scope.modalOtp.close();
            $scope.signupData.OTP = "";
            $scope.signupGenerateOtp(signupData);
        }
        $scope.customerSignup = function(signupData) {

            console.log("signupData", signupData);
            NavigationService.CustomerRegistration(signupData, function(data) {
                console.log("signupData", signupData);
                console.log("signupDataforData", data);
                if (data.value === true) {
                    $.jStorage.set("loginDetail", data);
                    $scope.emailExist = false;
                    $scope.formCompleteSignup = true;
                    $timeout(function() {
                        $scope.formCompleteSignup = false;
                        $scope.signupData = {};
                    }, 2000);
                    location.reload();
                } else if (data.value === false && data.data === "Customer Already Exists") {
                    $scope.custExist = true;
                    $scope.wrongOtp = false;
                } else {
                    $scope.emailExist = true;
                    $scope.wrongOtp = true;

                }
            })

        }

        $scope.formComplete = false;
        $scope.userData = {};
        $scope.userData.IsOTPValidation = "0";
        $scope.userData.OTP = "";
        $scope.valid = false;
        $scope.userLogin = function(userData) {
            if (userData) {
                console.log("userData", userData);
                NavigationService.VerifyCustomerLogin(userData, function(data) {
                    console.log("data", data);
                    if (data.value == true) {
                        $.jStorage.set("loginDetail", data);
                        $scope.valid = false;
                        $scope.formComplete = true;
                        $timeout(function() {
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
        $scope.hidelogout = false;
        $scope.logout = function() {
            console.log("im in logout");
            if ($.jStorage.get("loginDetail") != null) {
                NavigationService.logout(function(data) {
                    console.log("im in nav logout");
                    console.log("data", data);
                    if (data.value === true) {
                        $scope.hidelogout = true;
                    }
                    console.log("im in nav logout");
                    location.reload();
                    $state.go("home");
                })
            } else {

            }

        };
        $scope.myCart = function() {
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

        $scope.myAccount = function() {
            if ($.jStorage.get("loginDetail") != null) {
                $state.go("profile");
            };
            // $state.go("profile");
        }


        $scope.closing = function() {
            console.log('inside closing')
            setTimeout(function() {
                $scope.menu = false;
            }, 500);
            $scope.menu = true;
        };


        $scope.otp = function() {
            $scope.modalOtp = $uibModal.open({
                animation: true,
                templateUrl: "views/modal/otp.html",
                scope: $scope,
                windowClass: "no-white-bg"
            })
        };
        $scope.incorrect = false;

        $scope.resets = function() {
            $scope.modal1 = $uibModal.open({
                animation: true,
                templateUrl: "views/modal/forgot.html",
                scope: $scope
            })
        }

        $scope.closeModal1 = function() {
            $scope.modal1.close();
        }



        $scope.closeModal = function() {
            $scope.asd.close();
        }

        $scope.credentialstoReset = {};
        $scope.invalidEmail = false;
        $scope.formSubmit = function(credentials) {
            console.log("credentials", credentials);
            NavigationService.CustomerForgetPassword(credentials, function(data) {
                console.log("data", data);
                if (data.value === true) {
                    $scope.asd = $uibModal.open({
                        animation: true,
                        templateUrl: "views/modal/resetpassword.html",
                        scope: $scope,
                    });
                    $scope.closeModal();
                    $scope.closeModal1();
                    $scope.credentialstoReset = {};
                } else if (data.value === false) {
                    $scope.invalidEmail = true;

                }
            })
        }




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
        TemplateService.removeLoaderOn(1);
        NavigationService.getTypes(function(data) {
            $scope.types = data.data;
            _.each($scope.types, function(n) {
                if (n.name == 'Whats new') {
                    console.log('here');
                }
            })
            TemplateService.removeLoader();
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
