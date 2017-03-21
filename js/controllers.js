var globalfunction = {};
globalfunction.index;
angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ngDialog', 'imageupload', 'infinite-scroll', 'rzModule'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal, $state, $filter, ngDialog, $http) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    var openL = {};
    TemplateService.removeLoaderOn(4);
    //
    //     function requestJSONP(url) {
    //       console.log('ddddddddddddd');
    //     var script = document.createElement('script');
    //
    //     script.type = 'text/javascript';
    //     script.src = url;
    //
    //     document.body.appendChild(script);
    //       console.log("script",script);
    //
    // }
    //
    // requestJSONP('http://api.db-ip.com/addrinfo?api_key=bc2ab711d740d7cfa6fcb0ca8822cb327e38844f&addr=27.106.57.155?format=jsonp');
    // $http.get("http://api.db-ip.com/addrinfo?api_key=bc2ab711d740d7cfa6fcb0ca8822cb327e38844f&addr=27.106.57.155")
    //     .then(function(response) {
    //         $scope.myWelcome = response.data;
    //         console.log("response",response);
    //     });


    $scope.goTo = function(name, id, statetogo) {
        if (name, id) {
            $scope.name = name.replace(/(?!\w|\s)./g, '').replace(/\s/g, '').replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2').toLowerCase();
            $state.go(statetogo, {
                name: $scope.name,
                id: id
            });
        }

    }


     $scope.mys=[{
img:"img/home/mbanner.png"
},{
img:"img/home/mbanner.png"
},,{
img:"img/home/mbanner.png"
}
];
var x = 1 ;
_.each($scope.mys,function(key){
  if (key) {
    key.order =x ;
    x++ ;
  }
})

    $scope.openpops = function() {
        openL = ngDialog.open({
            template: 'views/content/popup.html',
            className: 'smaaash-cities ',
            className: 'backdroped',
            scope: $scope,
            closeByEscape: true
        });

    };

    $scope.loyalty = function() {
        $uibModal.open({
            animation: true,
            templateUrl: "views/modal/loyalty.html",
            scope: $scope
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
        // $(window).scroll(function() {
        //     var scroller = $(document).scrollTop();
        //     var height = 500;
        //     if (height <= scroller) {
        //         $('body').addClass('show-header');

        //     } else {
        //         $('body').removeClass('show-header');

        //     }
        // });
    });
    // $(window).scroll(function() {
    //     var scroller = $(document).scrollTop();
    //     var height = $(window).height() - 40;
    //     if (height <= scroller) {
    //         var vdo = document.getElementsByClassName('stopv');
    //     }
    // });
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
        console.log("$scope.mySlides", $scope.mySlides);
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
        NavigationService.setCity(cityname);
        $.jStorage.set("popupShow", true);
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
            $scope.whatsnew = $scope.content["What's new"];
            console.log($scope.whatsnew,"$scope.whatsnew");
            $scope.hostParty = $scope.content["Host a party"];
            console.log(" *******", $scope.hostParty);
            $scope.deals = $scope.content["Deals and Packages"];
            console.log("  $scope.deals",  $scope.deals);
            $scope.events = $scope.content["Events"];
            $scope.foodBeverages = $scope.content["Food and Beverages"];
            console.log("$scope.foodBeverages", $scope.foodBeverages);
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
    // $scope.validCity = false;
    $scope.signupLogin = function(signupData) {

        if ($scope.signupData) {
            // if ($scope.signupData.city == $.jStorage.get("cityid")) {
                // $scope.validCity = false;
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
            // } else {
            //     $scope.validCity = true;
            // }
        }
    }








    $scope.viewMore = function() {
        $uibModal.open({
            animation: true,
            templateUrl: "views/modal/login.html",
            scope: $scope
        });
    };

    $scope.dealspCartParams = {};
    $scope.dealspCartParams.VisitDate = $filter('date')(new Date(), 'yyyy-MM-dd');
    $scope.dealspCartParams.NoOfAdults = '1';
    // $scope.dealspCartParams.NoOfAdults = '';
    if ($.jStorage.get("loginDetail") != null) {
        $scope.dealspCartParams.CustomerMobileNo = $.jStorage.get("loginDetail").CustomerMobile;
        $scope.dealspCartParams.CustomerID = $.jStorage.get("loginDetail").CustomerID;
    }

    // $scope.dealspCartParams.NoOfChild = '0';
    // $scope.dealspCartParams.NoOfSenior = '0';
    // $scope.dealspCartParams.AddonIDs = " ";
    // $scope.dealspCartParams.AddonQuantities = "";
    $scope.dealspCartParams.BranchID = $.jStorage.get("branchId");


    $scope.buyNowDealsp = function(BranchPackageID, price) {

        $scope.dealspCartParams.BranchPackageID = BranchPackageID;
          // $scope.dealspCartParams.BranchPackageID = "41";
          // $scope.dealspCartParams.TotalAmount = "222";
          $scope.dealspCartParams.TotalAmount = price;


        console.log("$scope.dealspCartParams", $scope.dealspCartParams);
        if ($.jStorage.get("loginDetail") === null) {
            $rootScope.getMenus();
        } else {
            NavigationService.addToCart($scope.dealspCartParams, function(data) {
                console.log("$scope.dealspCartParams", $scope.dealspCartParams);
                if (data.value) {

                    if (data.data.AddToCart[0].Status === 1) {
                        console.log("inif", data);
                        $scope.successCartModal = $uibModal.open({
                            animation: true,
                            templateUrl: 'views/modal/addtocart.html',
                            scope: $scope
                        });
                        $timeout(function() {
                            $scope.successCartModal.close();
                            $state.go('cart');
                        }, 1000);


                    } else if (data.data.AddToCart[0].Status === 0 && data.data.AddToCart[0].Message == "This Package Is Allready In Cart" ) {
                        console.log("in else", data);
                        $uibModal.open({
                            animation: true,
                            templateUrl: 'views/modal/alreadyCart.html',
                            scope: $scope
                        });

                    }else if (data.data.AddToCart[0].Status === 0 && data.data.AddToCart[0].Message == "Invalid Package") {
                      $uibModal.open({
                          animation: true,
                          templateUrl: 'views/modal/cartFail.html',
                          scope: $scope
                      });

                    }
                } else {
                    $uibModal.open({
                        animation: true,
                        templateUrl: 'views/modal/addtocartfail.html',
                        scope: $scope
                    });
                }

            })
        }
    }








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


// .controller('LandingCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
//     //Used to name the .html file
//     $scope.template = TemplateService.changecontent("landingform");
//     $scope.menutitle = NavigationService.makeactive("Landing Form");
//     TemplateService.title = $scope.menutitle;
//     $scope.navigation = NavigationService.getnav();
//         $scope.today = function() {
//         $scope.dt = new Date();
//     };
//     $scope.today();
//
//     $scope.clear = function() {
//         $scope.dt = null;
//     };
//
//     $scope.inlineOptions = {
//         customClass: getDayClass,
//         minDate: new Date(),
//         showWeeks: true
//     };
//
//     $scope.dateOptions = {
//         dateDisabled: disabled,
//         formatYear: 'yy',
//         maxDate: new Date(2020, 5, 22),
//         minDate: new Date(),
//         startingDay: 1
//     };
//
//     // Disable weekend selection
//     function disabled(data) {
//         var date = data.date,
//             mode = data.mode;
//         return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
//     }
//
//     $scope.toggleMin = function() {
//         $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
//         $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
//     };
//
//     $scope.toggleMin();
//
//     $scope.open1 = function() {
//         $scope.popup1.opened = true;
//     };
//
//     $scope.open2 = function() {
//         $scope.popup2.opened = true;
//     };
//
//     $scope.setDate = function(year, month, day) {
//         $scope.dt = new Date(year, month, day);
//     };
//
//     $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
//     $scope.format = $scope.formats[0];
//     $scope.altInputFormats = ['M!/d!/yyyy'];
//
//     $scope.popup1 = {
//         opened: false
//     };
//
//     $scope.popup2 = {
//         opened: false
//     };
//
//     var tomorrow = new Date();
//     tomorrow.setDate(tomorrow.getDate() + 1);
//     var afterTomorrow = new Date();
//     afterTomorrow.setDate(tomorrow.getDate() + 1);
//     $scope.events = [{
//         date: tomorrow,
//         status: 'full'
//     }, {
//         date: afterTomorrow,
//         status: 'partially'
//     }];
//
//     function getDayClass(data) {
//         var date = data.date,
//             mode = data.mode;
//         if (mode === 'day') {
//             var dayToCheck = new Date(date).setHours(0, 0, 0, 0);
//
//             for (var i = 0; i < $scope.events.length; i++) {
//                 var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);
//
//                 if (dayToCheck === currentDay) {
//                     return $scope.events[i].status;
//                 }
//             }
//         }
//
//         return '';
//     }
//
//     $scope.landingForm={};
//     $scope.formComplete=false;
//       $scope.alreadyExist=false;
//     $scope.formSubmit =function(landingForm){
//       console.log("im in");
//       console.log("landingForm",landingForm);
//       NavigationService.submitLandingForm(landingForm,function(data){
//         console.log("data",data);
//         if (data.value === true) {
//           $scope.formComplete =true;
//           $timeout(function() {
//               $scope.formComplete = false;
//                 $scope.alreadyExist=false;
//               $scope.landingForm = {};
//           }, 2000);
//
//           console.log("data",data);
//         }else if (data.value === false) {
//           console.log("data",data);
//           $scope.alreadyExist= true;
//             $scope.formComplete=false;
//         }
//       })
//     }
//
// })


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
    .controller('CareerCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $uibModal) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("career");
        $scope.menutitle = NavigationService.makeactive("Career");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.career = function() {
            $uibModal.open({
                animation: 'true',
                templateUrl: "views/modal/careers.html",
                scope: $scope
            });
        }


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

.controller('SkiesCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("sky-form");
    $scope.menutitle = NavigationService.makeactive("Sky karting Form");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.removeLoaderOn(1);

    //slider

    // $scope.slider = {
    //   minValue: 10,
    //   maxValue: 90,
    //   options: {
    //     floor: 0,
    //     ceil: 100,
    //     step: 10,
    //     showTicks: true
    //   }
    // };

    $scope.slider = {
        value: 10
    }


    //calender
    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function() {
        $scope.dt = null;
    };

    $scope.options = {
        customClass: getDayClass,
        minDate: new Date(),
        showWeeks: true
    };

    // Disable weekend selection
    function disabled(data) {
        var date = data.date,
            mode = data.mode;
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }

    $scope.toggleMin = function() {
        $scope.options.minDate = $scope.options.minDate ? null : new Date();
    };

    $scope.toggleMin();

    $scope.setDate = function(year, month, day) {
        $scope.dt = new Date(year, month, day);
    };

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date(tomorrow);
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
    //range

    var el, newPoint, newPlace, offset;

    // Select all range inputs, watch for change
    $("input[type='range']").change(function() {

            // Cache this for efficiency
            el = $(this);

            // Measure width of range input
            width = el.width();

            // Figure out placement percentage between left and right of input
            newPoint = (el.val() - el.attr("min")) / (el.attr("max") - el.attr("min"));

            offset = -1;

            // Prevent bubble from going beyond left or right (unsupported browsers)
            if (newPoint < 0) {
                newPlace = 0;
            } else if (newPoint > 1) {
                newPlace = width;
            } else {
                newPlace = width * newPoint + offset;
                offset -= newPoint;
            }

            // Move bubble
            el
                .next("output")
                .css({
                    left: newPlace,
                    marginLeft: offset + "%"
                })
                .text(el.val());
        })
        // Fake a change to position bubble at page load
        .trigger('change');
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
        _.each($scope.moreDesc, function(value, property) {
            if (id != property) {
                $scope.moreDesc[property] = false;
            }
        });
        $scope.moreDesc[id] = ($scope.moreDesc[id] == true) ? false : true;
        console.log($scope.moreDesc);
        $scope.myDesc = _.find($scope.sponsor, function(n) {
            return n._id == id;

        }).content;

    };



})

.controller('MediaCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("media");
    $scope.menutitle = NavigationService.makeactive("Media");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.removeLoaderOn(2);

    // $scope.objectfilter = {};
    // $scope.objectfilter.pagenumber = 0;
    // $scope.objectfilter.pagesize = 6;
    // $scope.objectfilter.city = $.jStorage.get("cityid");
    // $scope.noviewmore = true;
    // $scope.stars = [];
    // $scope.notAvailable = false;
    //     $scope.busy = false;
    // $scope.fetchData = function() {
    //   if ($scope.busy) return;
    //     $scope.busy = true;
    //     $scope.objectfilter.pagenumber = $scope.objectfilter.pagenumber + 1;
    //     // NavigationService.getGallery($scope.objectfilter, function(data) {
    //     NavigationService.getStars($scope.objectfilter, function(data) {
    //         console.log(data.data.totalpages);
    //         console.log("getStars", data.data);
    //         if (data.data.data.length === 0) {
    //             $scope.notAvailable = true;
    //         } else {
    //             $scope.notAvailable = false;
    //         }
    //         if (data.value) {
    //             console.log($scope.objectfilter.pagenumber);
    //             if (data.data.totalpages >= $scope.objectfilter.pagenumber) {
    //                 _.each(data.data.data, function(n) {
    //                     // console.log(n);
    //                     $scope.stars.push(n);
    //                        $scope.busy = false;
    //                 });
    //                 if (data.data.totalpages === $scope.objectfilter.pagenumber) {
    //                     $scope.noviewmore = false;
    //                 }
    //             } else {
    //                 console.log("in else last array");
    //                 $scope.noviewmore = false;
    //             }
    //         }
    //         TemplateService.removeLoader();
    //     })
    // };
    // $scope.fetchData();



    $scope.moreDesc = {};
    $scope.mediaObject = {};
    $scope.mediaObject.pagenumber = 0;
    $scope.mediaObject.pagesize = 6;
    $scope.mediaObject.city = $.jStorage.get("cityid");
    $scope.noviewmore = true;
    $scope.mediagallery = [];
    $scope.mediagalleryDesc = [];
    $scope.notAvailable = false;
    $scope.busy = false;

    $scope.fetchData = function() {
        if ($scope.busy) return;
        $scope.busy = true;
        $scope.mediaObject.pagenumber = $scope.mediaObject.pagenumber + 1;
        NavigationService.getGallery($scope.mediaObject, function(data) {
            // NavigationService.getStars($scope.mediaObject, function(data) {

            console.log("mediaObject", data.data);
            console.log(data.data.totalpages);
            // console.log("getStars", data.data);
            if (data.data.data.length === 0) {
                $scope.notAvailable = true;
            } else {
                $scope.notAvailable = false;
            }
            if (data.value) {
                console.log($scope.mediaObject.pagenumber);
                if (data.data.totalpages >= $scope.mediaObject.pagenumber) {
                    if (data.data.data) {
                        _.each(data.data.data, function(val) {
                            $scope.mediagalleryDesc.push(val);
                        });
                        console.log("  $scope.mediagalleryDesc", $scope.mediagalleryDesc);
                        data.data.data = _.chunk(data.data.data, 3);
                        _.each(data.data.data, function(n) {
                            // console.log(n);
                            $scope.mediagallery.push(n);
                            $scope.busy = false;

                        });
                    }

                    if (data.data.totalpages === $scope.mediaObject.pagenumber) {
                        $scope.noviewmore = false;
                    }
                } else {
                    console.log("in else last array");
                    $scope.noviewmore = false;
                }
                TemplateService.removeLoader();
            }

        })
    };

    $scope.fetchData();
    // $scope.fetchSearchedData = function() {
    //   $scope.busy = false;
    //     $scope.mediaObject.pagenumber = 0;
    //       $scope.mediagallery=[];
    //        $scope.mediagalleryDesc = [];
    //        $scope.mediaObject.pagenumber = $scope.mediaObject.pagenumber + 1;
    //   NavigationService.getStars($scope.mediaObject, function(data) {

    //       console.log("mediaObject", data.data);
    //       console.log(data.data.totalpages);
    //       console.log("getStars", data.data);
    //       if (data.data.data.length === 0) {
    //           $scope.notAvailable = true;
    //       } else {
    //           $scope.notAvailable = false;
    //       }
    //       if (data.value) {
    //           console.log($scope.mediaObject.pagenumber);
    //           if (data.data.totalpages >= $scope.mediaObject.pagenumber) {
    //               if (data.data.data) {
    //                 $scope.mediagallery=[];
    //                     $scope.mediagalleryDesc = [];
    //               _.each(data.data.data,function(val){
    //                     $scope.mediagalleryDesc.push(val);
    //                 });
    //                 console.log("  $scope.mediagalleryDesc",  $scope.mediagalleryDesc);
    //                 data.data.data = _.chunk(data.data.data, 3);
    //                   _.each(data.data.data, function(n) {
    //                       // console.log(n);
    //                       $scope.mediagallery.push(n);
    //                             $scope.busy = false;

    //                   });
    //               }

    //               if (data.data.totalpages === $scope.mediaObject.pagenumber) {
    //                   $scope.noviewmore = false;
    //               }
    //           } else {
    //               console.log("in else last array");
    //               $scope.noviewmore = false;
    //           }
    //           TemplateService.removeLoader();
    //       }

    //   })

    // }

    // $scope.readMore = function(id) {
    //     console.log("id", id);
    //     _.each($scope.moreDesc, function(value, property) {
    //         console.log("property", property);
    //         if (id != property) {
    //             $scope.moreDesc[property] = false;
    //         }
    //     });
    //     $scope.moreDesc[id] = ($scope.moreDesc[id] == true) ? false : true;
    //     $scope.myDesc = _.find($scope.mediagalleryDesc, function(n) {
    //         return n._id == id;
    //     }).text;
    // };

    //
    //  NavigationService.getMediaGallery(function(data) {
    //     $scope.mediagallery = _.chunk(data.data,3);
    //
    //     console.log("$scope.mediagallery", $scope.mediagallery);
    //     TemplateService.removeLoader();
    // });

})

.controller('EventCtrl', function($scope, $uibModal, TemplateService, NavigationService, $timeout, $stateParams, $state,$filter, $rootScope) {
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
            $scope.name = name.replace(/(?!\w|\s)./g, '').replace(/\s/g, '').replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2').toLowerCase();
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

    $scope.eventsCartParams = {};
    $scope.eventsCartParams.VisitDate = $filter('date')(new Date(), 'yyyy-MM-dd');
    $scope.eventsCartParams.NoOfAdults = '1';
    // $scope.eventsCartParams.NoOfAdults = '';
    if ($.jStorage.get("loginDetail") != null) {
        $scope.eventsCartParams.CustomerMobileNo = $.jStorage.get("loginDetail").CustomerMobile;
        $scope.eventsCartParams.CustomerID = $.jStorage.get("loginDetail").CustomerID;
    }

    // $scope.eventsCartParams.NoOfChild = '0';
    // $scope.eventsCartParams.NoOfSenior = '0';
    // $scope.eventsCartParams.AddonIDs = " ";
    // $scope.eventsCartParams.AddonQuantities = "";
    $scope.eventsCartParams.BranchID = $.jStorage.get("branchId");


    $scope.buyNowEvent = function(BranchPackageID, price) {
      console.log("BranchPackageID",BranchPackageID);
      console.log("$scope.eventsCartParams", $scope.eventsCartParams);
        if ($.jStorage.get("loginDetail") === null) {
            $rootScope.getMenus();
        } else {
          if (BranchPackageID !=undefined && price!=undefined) {
            $scope.eventsCartParams.BranchPackageID = BranchPackageID;
              // $scope.eventsCartParams.BranchPackageID = "41";
              // $scope.eventsCartParams.TotalAmount = "222";
              $scope.eventsCartParams.TotalAmount = price;
              NavigationService.addToCart($scope.eventsCartParams, function(data) {
                  console.log("$scope.eventsCartParams", $scope.eventsCartParams);
                  if (data.value) {

                      if (data.data.AddToCart[0].Status === 1) {
                          console.log("inif", data);
                          $scope.successCartModal = $uibModal.open({
                              animation: true,
                              templateUrl: 'views/modal/addtocart.html',
                              scope: $scope
                          });
                          $timeout(function() {
                              $scope.successCartModal.close();
                              $state.go('cart');
                          }, 1000);


                      } else if (data.data.AddToCart[0].Status === 0 && data.data.AddToCart[0].Message == "This Package Is Allready In Cart" ) {
                          console.log("in else", data);
                          $uibModal.open({
                              animation: true,
                              templateUrl: 'views/modal/alreadyCart.html',
                              scope: $scope
                          });

                      }else if (data.data.AddToCart[0].Status === 0 && data.data.AddToCart[0].Message == "Invalid Package") {
                        $uibModal.open({
                            animation: true,
                            templateUrl: 'views/modal/cartFail.html',
                            scope: $scope
                        });

                      }
                  } else {
                      $uibModal.open({
                          animation: true,
                          templateUrl: 'views/modal/addtocartfail.html',
                          scope: $scope
                      });
                  }

              })
          }


        }
    }


})

.controller('DealspCtrl', function($scope, $uibModal, TemplateService, NavigationService, $timeout, $state, $stateParams, $filter, $rootScope) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("dealsp");
    $scope.menutitle = NavigationService.makeactive("Deals and Packages");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.removeLoaderOn(1);

    $scope.goTo = function(name, id) {
        if (name, id) {
            $scope.name = name.replace(/(?!\w|\s)./g, '').replace(/\s/g, '').replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2').toLowerCase();
            $state.go('deals-inner', {
                name: $scope.name,
                id: id
            });
        }

    }

    NavigationService.getSingleExploreSmaaash($stateParams.id, function(data) {
        $scope.SingleDealsPackages = _.chunk(data.data, 3);
        console.log("SingleDealsPackages", $scope.SingleDealsPackages);
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
    // $scope.addToCartParams.NoOfAdults = '';
    if ($.jStorage.get("loginDetail") != null) {
        $scope.addToCartParams.CustomerMobileNo = $.jStorage.get("loginDetail").CustomerMobile;
        $scope.addToCartParams.CustomerID = $.jStorage.get("loginDetail").CustomerID;
    }

    // $scope.addToCartParams.NoOfChild = '0';
    // $scope.addToCartParams.NoOfSenior = '0';
    // $scope.addToCartParams.AddonIDs = " ";
    // $scope.addToCartParams.AddonQuantities = "";
    $scope.addToCartParams.BranchID = $.jStorage.get("branchId");


    $scope.buyNow = function(BranchPackageID, price) {

        $scope.addToCartParams.BranchPackageID = BranchPackageID;
          // $scope.addToCartParams.BranchPackageID = "41";
          // $scope.addToCartParams.TotalAmount = "222";
          $scope.addToCartParams.TotalAmount = price;


        console.log("$scope.addToCartParams", $scope.addToCartParams);
        if ($.jStorage.get("loginDetail") === null) {
            $rootScope.getMenus();
        } else {
            NavigationService.addToCart($scope.addToCartParams, function(data) {
                console.log("$scope.addToCartParams", $scope.addToCartParams);
                if (data.value) {

                    if (data.data.AddToCart[0].Status === 1) {
                        console.log("inif", data);
                        $scope.successCartModal = $uibModal.open({
                            animation: true,
                            templateUrl: 'views/modal/addtocart.html',
                            scope: $scope
                        });
                        $timeout(function() {
                            $scope.successCartModal.close();
                            $state.go('cart');
                        }, 1000);


                    } else if (data.data.AddToCart[0].Status === 0 && data.data.AddToCart[0].Message == "This Package Is Allready In Cart" ) {
                        console.log("in else", data);
                        $uibModal.open({
                            animation: true,
                            templateUrl: 'views/modal/alreadyCart.html',
                            scope: $scope
                        });

                    }else if (data.data.AddToCart[0].Status === 0 && data.data.AddToCart[0].Message == "Invalid Package") {
                      $uibModal.open({
                          animation: true,
                          templateUrl: 'views/modal/cartFail.html',
                          scope: $scope
                      });

                    }
                } else {
                    $uibModal.open({
                        animation: true,
                        templateUrl: 'views/modal/addtocartfail.html',
                        scope: $scope
                    });
                }
                // if (data.value === true && data.data.AddToCart[0].Status === '1') {
                //     console.log("inif", data);
                //     $uibModal.open({
                //         animation: true,
                //         templateUrl: 'views/modal/addtocart.html',
                //         scope: $scope
                //     });
                // } else if (data.value === true && data.data.AddToCart[0].Status === '0') {
                //     console.log("in else", data);
                //     $uibModal.open({
                //         animation: true,
                //         templateUrl: 'views/modal/alreadyCart.html',
                //         scope: $scope
                //     });
                // } else {
                //     $uibModal.open({
                //         animation: true,
                //         templateUrl: 'views/modal/addtocartfail.html',
                //         scope: $scope
                //     });
                // }
            })
        }
    }



})

.controller('StarsCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("stars");
    $scope.menutitle = NavigationService.makeactive("Gallery");
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
    $scope.busy = false;
    $scope.fetchData = function() {
        if ($scope.busy) return;
        $scope.busy = true;
        $scope.objectfilter.pagenumber = $scope.objectfilter.pagenumber + 1;
        // NavigationService.getGallery($scope.objectfilter, function(data) {
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
                        $scope.stars.push(n);
                        $scope.busy = false;
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
        NavigationService.getGallery($scope.objectfilter, function(data) {
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

    $scope.mediagallerys = [{
        image: 'img/new/13.png'
    }]

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

    $scope.date = new Date();

    $scope.showMore = false;

    $scope.myUrl = $location.absUrl();
    NavigationService.getSingleExploreSmaaash($stateParams.id, function(data) {
        $scope.SingleExploreSmaaash = data.data;
        $scope.SingleExploreSmaaash1 = _.chunk(data.data, 3);
        // console.log("$scope.SingleExploreSmaaash", $scope.SingleExploreSmaaash);
        TemplateService.removeLoader();
    });

    $scope.readMore = function(id, indexid) {

        console.log(id);
        _.each($scope.moreDesc, function(value, property) {
            // console.log("property",property);
            console.log("value", value);
            if (id != property) {
                $scope.moreDesc[property] = false;
            }
        });
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

        TemplateService.removeLoader();
    })

    $scope.readMore = function(id, indexid) {

        console.log(id);
        _.each($scope.moreDesc, function(value, property) {
            // console.log("property",property);
            console.log("value", value);
            if (id != property) {
                $scope.moreDesc[property] = false;
            }
        });
        $scope.moreDesc[id] = ($scope.moreDesc[id] == true) ? false : true;
        console.log($scope.moreDesc);
        $scope.myDesc = _.find($scope.leadership, function(n) {
            return n._id == id;

        }).description;
    };


})

.controller('AttractionCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $uibModal, $filter, $state, $rootScope) {
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
    $scope.moreDesc = {};
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
    $scope.readMore = function(id, indexid) {

        console.log(id);
        _.each($scope.moreDesc, function(value, property) {
            console.log("property", property);
            if (id != property) {
                $scope.moreDesc[property] = false;
            }
        });
        $scope.moreDesc[id] = ($scope.moreDesc[id] == true) ? false : true;
        console.log($scope.moreDesc);
        $scope.myDesc = _.find($scope.singleAttraction, function(n) {
            return n._id == id;

        }).description;
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
                $scope.name = name.replace(/(?!\w|\s)./g, '').replace(/\s/g, '').replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2').toLowerCase();
                $state.go('snow-rush', {
                    name: $scope.name,
                    id: id
                });
            }

        }

    $scope.gamesParams = {};
    $scope.gamesParams = {};
    $scope.gamesParams = {};
    $scope.gamesParams.VisitDate = $filter('date')(new Date(), 'yyyy-MM-dd');
    $scope.gamesParams.NoOfAdults = '1';
    // $scope.gamesParams.NoOfAdults = '';
    if ($.jStorage.get("loginDetail") != null) {
        $scope.gamesParams.CustomerMobileNo = $.jStorage.get("loginDetail").CustomerMobile;
        $scope.gamesParams.CustomerID = $.jStorage.get("loginDetail").CustomerID;
    }

    // $scope.gamesParams.NoOfChild = '0';
    // $scope.gamesParams.NoOfSenior = '0';
    // $scope.gamesParams.AddonIDs = " ";
    // $scope.gamesParams.AddonQuantities = "";
    $scope.gamesParams.BranchID = $.jStorage.get("branchId");


    $scope.buyNowGames = function(BranchPackageID, price) {

        $scope.gamesParams.BranchPackageID = BranchPackageID;
          // $scope.gamesParams.BranchPackageID = "41";
          // $scope.gamesParams.TotalAmount = "222";
          $scope.gamesParams.TotalAmount = price;


        console.log("$scope.gamesParams", $scope.gamesParams);
        if ($.jStorage.get("loginDetail") === null) {
            $rootScope.getMenus();
        } else {
            NavigationService.addToCart($scope.gamesParams, function(data) {
                console.log("$scope.gamesParams", $scope.gamesParams);
                if (data.value) {

                    if (data.data.AddToCart[0].Status === 1) {
                        console.log("inif", data);
                        $scope.successCartModal = $uibModal.open({
                            animation: true,
                            templateUrl: 'views/modal/addtocart.html',
                            scope: $scope
                        });
                        $timeout(function() {
                            $scope.successCartModal.close();
                            $state.go('cart');
                        }, 1000);


                    } else if (data.data.AddToCart[0].Status === 0 && data.data.AddToCart[0].Message == "This Package Is Allready In Cart" ) {
                        console.log("in else", data);
                        $uibModal.open({
                            animation: true,
                            templateUrl: 'views/modal/alreadyCart.html',
                            scope: $scope
                        });

                    }else if (data.data.AddToCart[0].Status === 0 && data.data.AddToCart[0].Message == "Invalid Package") {
                      $uibModal.open({
                          animation: true,
                          templateUrl: 'views/modal/cartFail.html',
                          scope: $scope
                      });

                    }
                } else {
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


.controller('CartsCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal, $rootScope) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("cart");
    $scope.menutitle = NavigationService.makeactive("Cart");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.onlyNumbers= "^[1-9][0-9]*$" ;
    $scope.isDisabledCheckOut=false;
    $scope.editcartDetails = {};
    $scope.removeCartParams = {};
    $scope.showCartParams = {};
    $scope.cartDetails = [];
    $scope.noofQuantity = "";
    $scope.checkoutParams = {};
    $scope.checkoutParams.CustomerMobileNo = $.jStorage.get("loginDetail").CustomerMobile;
    $scope.checkoutParams.CustomerID = $.jStorage.get("loginDetail").CustomerID;;

    $scope.checkoutParams.CartItemIDs = "";
    $scope.checkoutParams.CouponCode = ""
    $scope.checkoutParams.Remarks = ""
    $scope.isLoading=false;






    $scope.showCartParams.CustomerMobileNo = $.jStorage.get("loginDetail").CustomerMobile;
    $scope.showCartParams.CustomerID = $.jStorage.get("loginDetail").CustomerID;
    console.log("$scope.showCartParams", $scope.showCartParams);
    $scope.showCartFunction = function() {
        NavigationService.showCartPackage($scope.showCartParams, function(data) {
            console.log("data", data);
            // console.log("$scope.showCartParams", $scope.showCartParams);
            // console.log("data", data.data.CustomerCartItem);
            if (data.value) {
                $scope.cartDetails = data.data;
                console.log("  $scope.cartDetails", $scope.cartDetails);

                if ($scope.cartDetails.length > 0) {
                  $scope.isLoading=true;
                    _.each($scope.cartDetails, function(val) {
                        val.subTotal = val.TotalAmount * val.NoOfAdult;
                    });
                    // =============CheckOutPackage===========
                    var result = $scope.cartDetails.map(function(a) {
                        return a.CartItemID;
                    });
                    $scope.checkoutParams.CartItemIDs = result.join();
                    console.log($scope.checkoutParams, "$scope.checkoutParams");
                    $scope.checkOutFunction = function() {
                      console.log("im in checkout function");
                      $scope.isDisabledCheckOut=true;
                            NavigationService.CheckOutCart($scope.checkoutParams, function(data) {
                                console.log($scope.checkoutParams, "$scope.checkoutParams");
                                console.log("in CheckOutCart", data);
                                if (data.value && data.data.CheckOutCartPackage[0].Status == 1) {
                                window.location =  data.data.CheckOutCartPackage[0].Link;
                                }else if (data.data.ErrorStatus[0].Status == 0) {
                                  console.log("im in",data);
                                  console.log(data.data.ErrorStatus[0].Status == 0);
                                  console.log("im in");
                                  $uibModal.open({
                                      animation: true,
                                      templateUrl: 'views/modal/cartFail.html',
                                      scope: $scope
                                  });

                                }
                            });
                        }
                        // =============End oF CheckOutPackage===========

                }



                // ===========EditCartFuntion==============
                $scope.editMyCart = function(cartItem, custid, noOfAdults, noOfsenior, noofChild, index) {
                    console.log("$index", index);
                    $scope.editcartDetails.NoOfAdults = noOfAdults;
                    // $scope.editcartDetails.NoOfChild = noofChild;
                    // $scope.editcartDetails.NoOfSenior = noOfsenior;
                    // $scope.editcartDetails.APIKey = 'afa35e6d32a54d64962a78ccf28c140017636054922421850805185';
                    $scope.editcartDetails.CartItemID = cartItem;
                    $scope.editcartDetails.CustomerID = custid;
                    $scope.editcartDetails.CustomerMobileNo = $.jStorage.get("loginDetail").CustomerMobile;

                    console.log("$scope.editcartDetails", $scope.editcartDetails);
                    if ($scope.editcartDetails.NoOfAdults === undefined || $scope.editcartDetails.NoOfAdults == null) {
                      console.log("im undefined");
                      $scope.unDefined = true
                    }else {
                      $scope.unDefined =false;
                    }

                    $scope.cartDetails[index].subTotal = $scope.editcartDetails.NoOfAdults * $scope.cartDetails[index].TotalAmount;

                    if ($scope.editcartDetails.NoOfAdults) {
                        NavigationService.editCartPackage($scope.editcartDetails, function(data) {
                            console.log("$scope.editcartDetails", $scope.editcartDetails);
                            console.log("data", data);
                            if (data.value && data.data.EditCartPackage[0].Status===1) {
                              $uibModal.open({
                                  animation: true,
                                  templateUrl: 'views/modal/cartupdated.html',
                                  scope: $scope
                              });
                            }
                        });
                    }
                }

            } else if (!data.value) {
                console.log("im in false");
                  $scope.isCartEmty=true;
                    $scope.isLoading=true;
                  $scope.cartDetails = [];
                $scope.CartIsEmpty = data.data.SelectCartError[0].Message;

                console.log("  $scope.CartIsEmpty", $scope.CartIsEmpty);
            }
        })
    }
    $scope.showCartFunction();


    // ============RemoveCartFunction=============
    $scope.removePackage = function(CartItemID) {
        $scope.removeCartParams.CustomerMobileNo = $.jStorage.get("loginDetail").CustomerMobile;
        $scope.removeCartParams.CustomerID = $.jStorage.get("loginDetail").CustomerID;;
        $scope.removeCartParams.CartItemID = CartItemID;
        NavigationService.removeCartPackage($scope.removeCartParams, function(data) {
            console.log("data", data);
            if (data.value) {
                  $scope.showCartFunction();
                if (data.data.RemoveFromCart[0].Status === 1) {
                    $uibModal.open({
                        animation: true,
                        templateUrl: 'views/modal/removeCart.html',
                        scope: $scope
                    });

                }
            }
        })
    }



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
            $scope.detailExploreSmaash.mobileBanner = $filter('uploadpath')($scope.detailExploreSmaash.mobileBanner);
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
        });


        $scope.gamesParams = {};
        $scope.gamesParams = {};
        $scope.gamesParams = {};
        $scope.gamesParams.VisitDate = $filter('date')(new Date(), 'yyyy-MM-dd');
        $scope.gamesParams.NoOfAdults = '1';
        // $scope.gamesParams.NoOfAdults = '';
        if ($.jStorage.get("loginDetail") != null) {
            $scope.gamesParams.CustomerMobileNo = $.jStorage.get("loginDetail").CustomerMobile;
            $scope.gamesParams.CustomerID = $.jStorage.get("loginDetail").CustomerID;
        }

        // $scope.gamesParams.NoOfChild = '0';
        // $scope.gamesParams.NoOfSenior = '0';
        // $scope.gamesParams.AddonIDs = " ";
        // $scope.gamesParams.AddonQuantities = "";
        $scope.gamesParams.BranchID = $.jStorage.get("branchId");


        $scope.buyNowGamesInner = function(BranchPackageID, price) {

            $scope.gamesParams.BranchPackageID = BranchPackageID;
              // $scope.gamesParams.BranchPackageID = "41";
              // $scope.gamesParams.TotalAmount = "222";
              $scope.gamesParams.TotalAmount = price;


            console.log("$scope.gamesParams", $scope.gamesParams);
            if ($.jStorage.get("loginDetail") === null) {
                $rootScope.getMenus();
            } else {
                NavigationService.addToCart($scope.gamesParams, function(data) {
                    console.log("$scope.gamesParams", $scope.gamesParams);
                    if (data.value) {

                        if (data.data.AddToCart[0].Status === 1) {
                            console.log("inif", data);
                            $scope.successCartModal = $uibModal.open({
                                animation: true,
                                templateUrl: 'views/modal/addtocart.html',
                                scope: $scope
                            });
                            $timeout(function() {
                                $scope.successCartModal.close();
                                $state.go('cart');
                            }, 1000);


                        } else if (data.data.AddToCart[0].Status === 0 && data.data.AddToCart[0].Message == "This Package Is Allready In Cart" ) {
                            console.log("in else", data);
                            $uibModal.open({
                                animation: true,
                                templateUrl: 'views/modal/alreadyCart.html',
                                scope: $scope
                            });

                        }else if (data.data.AddToCart[0].Status === 0 && data.data.AddToCart[0].Message == "Invalid Package") {
                          $uibModal.open({
                              animation: true,
                              templateUrl: 'views/modal/cartFail.html',
                              scope: $scope
                          });

                        }
                    } else {
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
        NavigationService.signupProfile(function(data) {
            $scope.userprofile = data.data;
            console.log("  $scope.userprofile", $scope.userprofile);
        });
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









.controller('HostCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $uibModal, $location) {
    $scope.template = TemplateService.changecontent("host-party");
    $scope.menutitle = NavigationService.makeactive("Host Party");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.myUrl = $location.absUrl();



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
            // $scope.formCompleteAssistance = true;
            formData.city = $.jStorage.get("cityid");
            NavigationService.assistanceLoginSignup(formData, function(data) {
                console.log("in nav", formData);
                console.log("assistanceLogin", data);
                if (data.value == true) {
                  $scope.formCompleteAssistance = true;
                    $timeout(function() {
                        $scope.formCompleteAssistance = false;
                        // $scope.formCompleteAssistanceThank = false;
                        $scope.formData = {};
                    }, 2000);

                } else {

                }
            })
        }

    }
$scope.myfun = function(){
  console.log("im in");
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



    $scope.readMore = function(id, indexid) {

        console.log(id);
        _.each($scope.moreDesc, function(value, property) {
            console.log("property", property);
            if (id != property) {
                $scope.moreDesc[property] = false;
            }
        });
        $scope.moreDesc[id] = ($scope.moreDesc[id] == true) ? false : true;
        console.log($scope.moreDesc);
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

.controller('RechargeCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal, $window) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("online");
    $scope.menutitle = NavigationService.makeactive("Recharge");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.rechargeOnline = {};
    if ($.jStorage.get("loginDetail") != null) {
        $scope.rechargeOnline.CustomerID = $.jStorage.get("loginDetail").CustomerID;
        $scope.rechargeOnline.BranchID = $.jStorage.get("branchId");
    }

    $scope.rechargeOnline.PGReturnURL = "http://104.155.129.33:82/signup/returnUrlFunction";

    $scope.incorrect = false;
    $scope.isRecharge =false;
    $scope.submitRecharge = function(rechargeOnline) {

        if (rechargeOnline && $.jStorage.get("loginDetail") === null) {
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/wishlistsigup.html',
                scope: $scope
            });
        } else if (rechargeOnline && $.jStorage.get("loginDetail") != null) {
            $scope.isRecharge =true;

            NavigationService.rechargeCard(rechargeOnline, function(data) {
                console.log("data", data);
                if (data.value === true) {
                    $scope.newWindow = data.data.RechargeCard[0].Link;
                    $window.location.href = $scope.newWindow;
                } else if (data.value === false) {
                    $scope.incorrect = true;
                      $scope.isRecharge =false;
                }
            })

        }

    }





})
.controller('SorryCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("sorry");
    $scope.menutitle = NavigationService.makeactive("Sorry");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

})
.controller('sorrieCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("sorrie");
    $scope.menutitle = NavigationService.makeactive("Sorry");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.orderNo = $stateParams.orderno;
    $scope.amount = $stateParams.amount;
    $scope.cnrNo = $stateParams.cnrno;
    $scope.paymentFor = $stateParams.paymentfor;
    console.log("$stateParams", $stateParams);
    console.log("im in");

})



.controller('AboutCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("about");
    $scope.menutitle = NavigationService.makeactive("About");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('ProfileCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal, $state,$window) {
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
    $scope.rechargeOnline = {};
    if ($.jStorage.get("loginDetail") != null) {
        $scope.rechargeOnline.CustomerID = $.jStorage.get("loginDetail").CustomerID;
        $scope.rechargeOnline.BranchID = $.jStorage.get("branchId");
    }

    $scope.rechargeOnline.PGReturnURL = "http://104.155.129.33:82/signup/returnUrlFunction";

    $scope.incorrect = false;
    $scope.isRecharge =false;
    $scope.submitRecharge = function(rechargeOnline) {

        if (rechargeOnline && $.jStorage.get("loginDetail") === null) {
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/wishlistsigup.html',
                scope: $scope
            });
        } else if (rechargeOnline && $.jStorage.get("loginDetail") != null) {
            $scope.isRecharge =true;

            NavigationService.rechargeCard(rechargeOnline, function(data) {
                console.log("data", data);
                if (data.value === true) {
                    $scope.newWindow = data.data.RechargeCard[0].Link;
                    $window.location.href = $scope.newWindow;
                } else if (data.value === false) {
                    $scope.incorrect = true;
                      $scope.isRecharge =false;
                }
            })

        }

    }




    $scope.detailsForBal = {};
    $scope.detailsForBal.CardNo = "C68C765B";
    $scope.detailsForBal.MobileNo = $.jStorage.get("loginDetail").CustomerMobile;
    NavigationService.getCustomerBalance($scope.detailsForBal, function(data) {
        console.log("redemablePoints data", data);
        if (data.value) {


            $scope.redemablePoints = data.data.CustomerBalance[0].RedemablePoints;
            console.log("redemablePoints", $scope.redemablePoints);
        } else {}
    })


    $scope.userprofile = {};
    NavigationService.signupProfile(function(data) {
        $scope.userprofile = data.data;
        NavigationService.setUser(data.data);
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
                NavigationService.setUser(data.data);
                $scope.formComplete = true;
                $timeout(function() {
                    $scope.formComplete = false;
                }, 2000);
            }
        })
    }


    //
    // $scope.CustID = "202";
    // $scope.customerBookingDetails = {
    //     "GetCustomerBookingDetails": {
    //         "CustomerBooking": [{
    //             "Status": 1,
    //             "Message": "Get Booking Data",
    //             "BranchName": "Mumbai",
    //             "PackageName": "Travel Agents - WeekDay",
    //             "PackagePhoto": "http://192.168.0.41/Smaaash/Upload/ImageNotFound.jpg",
    //             "BookingDate": "22-11-2016",
    //             "VisitDate": "30-11-2016",
    //             "CNRNo": 511,
    //             "PayableAmount": 999,
    //             "IsCustomerCard": 1
    //         }, {
    //             "Status": 1,
    //             "Message": "Get Booking Data",
    //             "BranchName": "Mumbai",
    //             "PackageName": "Travel Agents - WeekDay",
    //             "PackagePhoto": "http://192.168.0.41/Smaaash/Upload/ImageNotFound.jpg",
    //             "BookingDate": "22-11-2016",
    //             "VisitDate": "01-12-2016",
    //             "CNRNo": 510,
    //             "PayableAmount": 999,
    //             "IsCustomerCard": 1
    //         }],
    //         "CustomerCardRecharge": [{
    //             "Status": 1,
    //             "Message": "Get Card Recharge Data",
    //             "BranchName": "Mumbai",
    //             "CustomerName": "piyush",
    //             "RechargeDate": "26-11-2016",
    //             "RechargeID": 3,
    //             "RechargeAmt": 2000
    //         }, {
    //             "Status": 1,
    //             "Message": "Get Card Recharge Data",
    //             "BranchName": "Mumbai",
    //             "CustomerName": "piyush",
    //             "RechargeDate": "26-11-2016",
    //             "RechargeID": 2,
    //             "RechargeAmt": 100
    //         }, {
    //             "Status": 1,
    //             "Message": "Get Card Recharge Data",
    //             "BranchName": "Mumbai",
    //             "CustomerName": "piyush",
    //             "RechargeDate": "26-11-2016",
    //             "RechargeID": 1,
    //             "RechargeAmt": 500
    //         }]
    //     }
    // }
    //
    //
    // $scope.bookingDetails = [];
    // $scope.custBooking = $scope.customerBookingDetails.GetCustomerBookingDetails.CustomerBooking;
    // $scope.CustCardRecharge = $scope.customerBookingDetails.GetCustomerBookingDetails.CustomerCardRecharge;
    // $scope.bookingDetails = $scope.custBooking.concat($scope.CustCardRecharge);
    // _.each($scope.bookingDetails, function(value) {
    //     if (value.Message === "Get Booking Data") {
    //         value.objtype = "Booking";
    //     } else if (value.Message === "Get Card Recharge Data") {
    //         value.objtype = "Recharge";
    //     };
    //
    // });
    //
    $scope.msg = false;
    $scope.isBooking = false ;
    $scope.CustID = $.jStorage.get("loginDetail").CustomerID;
    NavigationService.GetCustomerBookingDetails($scope.CustID, function(data) {
      console.log("data.data",data.data);
        console.log("CustomerBooking*********", data.data.CustomerBooking);
        if (data.value === true) {
          $scope.isBooking = true ;
            $scope.custBooking = data.data.CustomerBooking;
            // $scope.custBooking = data.GetCustomerBookingDetails.CustomerBooking;
            $scope.CustCardRecharge = data.data.CustomerCardRecharge;
            // $scope.CustCardRecharge = data.GetCustomerBookingDetails.CustomerCardRecharge;
            $scope.bookingDetails = $scope.custBooking.concat($scope.CustCardRecharge);
            console.log("$scope.bookingDetails",$scope.bookingDetails);
            _.each($scope.bookingDetails, function(value) {
                if (value.Message === "Get Booking Data") {
                    value.objtype = "Booking";
                } else if (value.Message === "Get Card Recharge Data") {
                    value.objtype = "Recharge";
                };

            });
        } else if (data.value === false) {
            $scope.msg = true;
            $scope.isBooking =true;
        }
    })

     $scope.tab = "design";
    $scope.classb = 'active-tab';
    $scope.classa = '';
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
         if (a == 5) {
            $scope.classe = 'active-tab';
            $scope.classb = '';
            $scope.classa = '';
            $scope.classc = '';
            $scope.classd = '';

        }
    };

//log out//
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
//log out//

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

.controller('EventsCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams,$rootScope) {
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

.controller('DrinkCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $uibModal, $location, $filter, $sce) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("drink-party");
    $scope.menutitle = NavigationService.makeactive("Drink Party");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.myUrl = $location.absUrl();
    $scope.menu = "menu-out";
    TemplateService.removeLoaderOn(1);
    // $scope.pdfpath = "http://104.155.129.33:82/upload/readFile?file";
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
        TemplateService.removeLoader();
    });
    $scope.readMore = function(id) {
        _.each($scope.moreDesc, function(value, property) {
            if (id != property) {
                $scope.moreDesc[property] = false;
            }
        });
        $scope.moreDesc[id] = ($scope.moreDesc[id] == true) ? false : true;
        console.log($scope.moreDesc);
        $scope.myDesc = _.find($scope.drinkParty1, function(n) {
            return n._id == id;

        }).description;
    };
    $scope.imagesmodal = function() {
        $uibModal.open({
            animation: true,
            templateUrl: "views/modal/party.html",
            scope: $scope
        });

    };

    // $scope.pdfmodal = function(pdf) {
    //     $scope.pdfdata = pdf;
    //     if ($scope.pdfdata) {
    //         $uibModal.open({
    //             animation: true,
    //             templateUrl: "views/modal/menu.html",
    //             scope: $scope,
    //         })
    //     }
    // };
    $scope.pdfmodal = function(pdf) {
        console.log("im in");
        $scope.pdfdata = pdf;
        $scope.pdfURL = $filter('uploadpath')($scope.pdfdata);
        $scope.finalURL = 'http://docs.google.com/gview?url=' + $scope.pdfURL + '&embedded=true';
        $scope.trustedURL = $sce.trustAsResourceUrl($scope.finalURL);
        console.log("  $scope.finalURL", $scope.finalURL);

        if ($scope.pdfdata) {
            $uibModal.open({
                animation: true,
                templateUrl: "views/modal/menu.html",
                scope: $scope,
                //  windowClass: "modal-lg"
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

    $scope.drinkParties = [{
        img: 'img/food/restro.jpg',
        title: 'food',
        info: 'SMAAASH has created a unique dining area with a locally sourced and sustainable menu. Delectable eats will satiate your hunger adrenaline, after all that physical exertion. You could also stomach some scrumptious foods, before you set out for the games.'
    }, {
        img: 'img/food/restro.jpg',
        title: 'drink',
        info: 'SMAAASH has created a unique dining area with a locally sourced and sustainable menu. Delectable eats will satiate your hunger adrenaline, after all that physical exertion. You could also stomach some scrumptious foods, before you set out for the games.'

    }, {
        img: 'img/food/restro.jpg',
        title: 'party',
        info: 'SMAAASH has created a unique dining area with a locally sourced and sustainable menu. Delectable eats will satiate your hunger adrenaline, after all that physical exertion. You could also stomach some scrumptious foods, before you set out for the games.'

    }];
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
            _.each($scope.moreDesc, function(value, property) {
                console.log("property", property);
                if (id != property) {
                    $scope.moreDesc[property] = false;
                }
            });
            $scope.moreDesc[id] = ($scope.moreDesc[id] == true) ? false : true;
            console.log($scope.moreDesc);
            $scope.myDesc = _.find($scope.SingleDealsPackages, function(n) {
                return n._id == id;

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

.controller('DealsInnerCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter, $state, $location,  $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("deals-inner");
    $scope.menutitle = $stateParams.name.charAt(0).toUpperCase() + $stateParams.name.substring(1);
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.removeLoaderOn(1);
    $scope.myUrl = $location.absUrl();
    if ($stateParams.image) {
  $scope.homeimage = $filter('uploadpath')($stateParams.image);

    }
    NavigationService.getDetailExploreSmaaash($stateParams.id, function(data) {
        $scope.detailDealsInner = data.data;
        console.log("$scope.detailDealsInner", $scope.detailDealsInner);
        $scope.detailDealsInner.banner = $filter('uploadpath')($scope.detailDealsInner.banner);
        $scope.detailDealsInner.homeimage = $filter('uploadpath')($scope.detailDealsInner.homeimage);
        $scope.detailDealsInner.mobileBanner = $filter('uploadpath')($scope.detailDealsInner.mobileBanner);

        TemplateService.removeLoader();
    });
    $scope.addToCartParams = {};
    $scope.addToCartParams.VisitDate = $filter('date')(new Date(), 'yyyy-MM-dd');
    $scope.addToCartParams.NoOfAdults = '1';
    // $scope.addToCartParams.NoOfAdults = '';
    if ($.jStorage.get("loginDetail") != null) {
        $scope.addToCartParams.CustomerMobileNo = $.jStorage.get("loginDetail").CustomerMobile;
        $scope.addToCartParams.CustomerID = $.jStorage.get("loginDetail").CustomerID;
    }

    // $scope.addToCartParams.NoOfChild = '0';
    // $scope.addToCartParams.NoOfSenior = '0';
    // $scope.addToCartParams.AddonIDs = " ";
    // $scope.addToCartParams.AddonQuantities = "";
    $scope.addToCartParams.BranchID = $.jStorage.get("branchId");


    $scope.buyNow = function(BranchPackageID, price) {

        $scope.addToCartParams.BranchPackageID = BranchPackageID;
          // $scope.addToCartParams.BranchPackageID = "41";
          // $scope.addToCartParams.TotalAmount = "222";
          $scope.addToCartParams.TotalAmount = price;


        console.log("$scope.addToCartParams", $scope.addToCartParams);
        if ($.jStorage.get("loginDetail") === null) {
            $rootScope.getMenus();
        } else {
            NavigationService.addToCart($scope.addToCartParams, function(data) {
                console.log("$scope.addToCartParams", $scope.addToCartParams);
                if (data.value) {

                    if (data.data.AddToCart[0].Status === 1) {
                        console.log("inif", data);
                        $scope.successCartModal = $uibModal.open({
                            animation: true,
                            templateUrl: 'views/modal/addtocart.html',
                            scope: $scope
                        });
                        $timeout(function() {
                            $scope.successCartModal.close();
                            $state.go('cart');
                        }, 1000);


                    } else if (data.data.AddToCart[0].Status === 0 && data.data.AddToCart[0].Message == "This Package Is Allready In Cart" ) {
                        console.log("in else", data);
                        $uibModal.open({
                            animation: true,
                            templateUrl: 'views/modal/alreadyCart.html',
                            scope: $scope
                        });

                    }else if (data.data.AddToCart[0].Status === 0 && data.data.AddToCart[0].Message == "Invalid Package") {
                      $uibModal.open({
                          animation: true,
                          templateUrl: 'views/modal/cartFail.html',
                          scope: $scope
                      });

                    }
                } else {
                    $uibModal.open({
                        animation: true,
                        templateUrl: 'views/modal/addtocartfail.html',
                        scope: $scope
                    });
                }
                // if (data.value === true && data.data.AddToCart[0].Status === '1') {
                //     console.log("inif", data);
                //     $uibModal.open({
                //         animation: true,
                //         templateUrl: 'views/modal/addtocart.html',
                //         scope: $scope
                //     });
                // } else if (data.value === true && data.data.AddToCart[0].Status === '0') {
                //     console.log("in else", data);
                //     $uibModal.open({
                //         animation: true,
                //         templateUrl: 'views/modal/alreadyCart.html',
                //         scope: $scope
                //     });
                // } else {
                //     $uibModal.open({
                //         animation: true,
                //         templateUrl: 'views/modal/addtocartfail.html',
                //         scope: $scope
                //     });
                // }
            })
        }
    }


})

.controller('EventInnerCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter, $uibModal, $location, $rootScope) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("event-inner");
    $scope.menutitle = $stateParams.name.charAt(0).toUpperCase() + $stateParams.name.substring(1);
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.myUrl = $location.absUrl();
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
    $scope.eventInnerCartParams = {};
    $scope.eventInnerCartParams.VisitDate = $filter('date')(new Date(), 'yyyy-MM-dd');
    $scope.eventInnerCartParams.NoOfAdults = '1';
    // $scope.eventInnerCartParams.NoOfAdults = '';
    if ($.jStorage.get("loginDetail") != null) {
        $scope.eventInnerCartParams.CustomerMobileNo = $.jStorage.get("loginDetail").CustomerMobile;
        $scope.eventInnerCartParams.CustomerID = $.jStorage.get("loginDetail").CustomerID;
    }

    // $scope.eventInnerCartParams.NoOfChild = '0';
    // $scope.eventInnerCartParams.NoOfSenior = '0';
    // $scope.eventInnerCartParams.AddonIDs = " ";
    // $scope.eventInnerCartParams.AddonQuantities = "";
    $scope.eventInnerCartParams.BranchID = $.jStorage.get("branchId");


    $scope.buyNowEventInner = function(BranchPackageID, price) {

        $scope.eventInnerCartParams.BranchPackageID = BranchPackageID;
          // $scope.eventInnerCartParams.BranchPackageID = "41";
          // $scope.eventInnerCartParams.TotalAmount = "222";
          $scope.eventInnerCartParams.TotalAmount = price;
          // if (BranchPackageID !=undefined && price!=undefined) {
          //
          // }


        console.log("$scope.eventInnerCartParams", $scope.eventInnerCartParams);
        if ($.jStorage.get("loginDetail") === null) {
            $rootScope.getMenus();
        } else {
            NavigationService.addToCart($scope.eventInnerCartParams, function(data) {
                console.log("$scope.eventInnerCartParams", $scope.eventInnerCartParams);
                if (data.value) {

                    if (data.data.AddToCart[0].Status === 1) {
                        console.log("inif", data);
                        $scope.successCartModal = $uibModal.open({
                            animation: true,
                            templateUrl: 'views/modal/addtocart.html',
                            scope: $scope
                        });
                        $timeout(function() {
                            $scope.successCartModal.close();
                            $state.go('cart');
                        }, 1000);


                    } else if (data.data.AddToCart[0].Status === 0 && data.data.AddToCart[0].Message == "This Package Is Allready In Cart" ) {
                        console.log("in else", data);
                        $uibModal.open({
                            animation: true,
                            templateUrl: 'views/modal/alreadyCart.html',
                            scope: $scope
                        });

                    }else if (data.data.AddToCart[0].Status === 0 && data.data.AddToCart[0].Message == "Invalid Package") {
                      $uibModal.open({
                          animation: true,
                          templateUrl: 'views/modal/cartFail.html',
                          scope: $scope
                      });

                    }
                } else {
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


.controller('ResetCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter,  $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("reset");
    $scope.menutitle = NavigationService.makeactive("Reset");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.credentials = {};
    $scope.wrongPass = false;
    $scope.passUpdated = false;
    $scope.isResetDisabled = false;
    if ($.jStorage.get("loginDetail") != null) {
        $scope.credentials.CustomerID = $.jStorage.get("loginDetail").CustomerID;
        $scope.loggedInUser = $.jStorage.get("loginDetail").CustomerName;
    }
    $scope.formSubmit = function(credentials) {
        console.log("credentials", credentials);
          $scope.wrongPass = false;
        if (credentials) {

            $scope.isResetDisabled = true;
        }
        NavigationService.CustomerResetPassword(credentials, function(data) {
            console.log("credentials", credentials);
            console.log("data", data);
            if (data.value === true) {
                $scope.passUpdated = true;
                $uibModal.open({
                    animation: true,
                    templateUrl: 'views/modal/passwordUpdated.html',
                    scope: $scope
                });

                $timeout(function() {
                    $scope.credentials = {};
                    $scope.passUpdated = false;
                    $scope.wrongPass = false;
                      $scope.isResetDisabled = false;
                }, 2000);
            } else if (data.value === false) {
                $scope.wrongPass = true;
                  $scope.isResetDisabled =false;
            }
        });
    }

})


.controller('ThankCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("thankyou");
    $scope.menutitle = NavigationService.makeactive("Thank");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})
.controller('ThankssCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("thanksss");
    $scope.menutitle = NavigationService.makeactive("Thank");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.orderNo = $stateParams.orderno;
    $scope.amount = $stateParams.amount;
    $scope.cnrNo = $stateParams.cnrno;
    $scope.paymentFor = $stateParams.paymentfor;
})

.controller('PromotionCtrl', function($scope, $uibModal, TemplateService, NavigationService, $timeout, $stateParams, $filter, $state, $rootScope) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("promotions");
    $scope.menutitle = NavigationService.makeactive("Promotion");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.removeLoaderOn(1);


    $scope.goTo = function(name, id) {
        if (name, id) {
            $scope.name = name.replace(/(?!\w|\s)./g, '').replace(/\s/g, '').replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2').toLowerCase();
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
    // $scope.addToCartParams.NoOfAdults = '';
    if ($.jStorage.get("loginDetail") != null) {
        $scope.addToCartParams.CustomerMobileNo = $.jStorage.get("loginDetail").CustomerMobile;
        $scope.addToCartParams.CustomerID = $.jStorage.get("loginDetail").CustomerID;
    }

    // $scope.addToCartParams.NoOfChild = '0';
    // $scope.addToCartParams.NoOfSenior = '0';
    // $scope.addToCartParams.AddonIDs = " ";
    // $scope.addToCartParams.AddonQuantities = "";
    $scope.addToCartParams.BranchID = $.jStorage.get("branchId");


    $scope.buyNowPromotion = function(BranchPackageID, price) {

        $scope.addToCartParams.BranchPackageID = BranchPackageID;
          // $scope.addToCartParams.BranchPackageID = "29";
          // $scope.addToCartParams.TotalAmount = "222";
          $scope.addToCartParams.TotalAmount = price;


        console.log("$scope.addToCartParams", $scope.addToCartParams);
        if ($.jStorage.get("loginDetail") === null) {
            $rootScope.getMenus();
        } else {
            NavigationService.addToCart($scope.addToCartParams, function(data) {
                console.log("$scope.addToCartParams", $scope.addToCartParams);
                if (data.value) {

                    if (data.data.AddToCart[0].Status === 1) {
                        console.log("inif", data);
                        $scope.successCartModal = $uibModal.open({
                            animation: true,
                            templateUrl: 'views/modal/addtocart.html',
                            scope: $scope
                        });
                        $timeout(function() {
                            $scope.successCartModal.close();
                            $state.go('cart');
                        }, 1000);


                    } else if (data.data.AddToCart[0].Status === 0 && data.data.AddToCart[0].Message == "This Package Is Allready In Cart" ) {
                        console.log("in else", data);
                        $uibModal.open({
                            animation: true,
                            templateUrl: 'views/modal/alreadyCart.html',
                            scope: $scope
                        });

                    }else if (data.data.AddToCart[0].Status === 0 && data.data.AddToCart[0].Message == "Invalid Package") {
                      $uibModal.open({
                          animation: true,
                          templateUrl: 'views/modal/cartFail.html',
                          scope: $scope
                      });

                    }
                } else {
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

.controller('PromotionInnerCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter, $uibModal, $location, $rootScope) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("promotion");
    $scope.menutitle = $stateParams.name.charAt(0).toUpperCase() + $stateParams.name.substring(1);
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



    $scope.myUrl = $location.absUrl();
    NavigationService.getDetailExploreSmaaash($stateParams.id, function(data) {
        $scope.detailPromotionsInner = data.data;
        console.log("$scope.detailPromotionsInner", $scope.detailPromotionsInner);
        if ($scope.detailPromotionsInner.banner) {
            $scope.detailPromotionsInner.banner = $filter('uploadpath')($scope.detailPromotionsInner.banner);
        }

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
    $scope.promotionInnerParams = {};
    $scope.promotionInnerParams.VisitDate = $filter('date')(new Date(), 'yyyy-MM-dd');
    $scope.promotionInnerParams.NoOfAdults = '1';
    // $scope.promotionInnerParams.NoOfAdults = '';
    if ($.jStorage.get("loginDetail") != null) {
        $scope.promotionInnerParams.CustomerMobileNo = $.jStorage.get("loginDetail").CustomerMobile;
        $scope.promotionInnerParams.CustomerID = $.jStorage.get("loginDetail").CustomerID;
    }

    // $scope.promotionInnerParams.NoOfChild = '0';
    // $scope.promotionInnerParams.NoOfSenior = '0';
    // $scope.promotionInnerParams.AddonIDs = " ";
    // $scope.promotionInnerParams.AddonQuantities = "";
    $scope.promotionInnerParams.BranchID = $.jStorage.get("branchId");


    $scope.buyNowPromotionInner = function(BranchPackageID, price) {

        $scope.promotionInnerParams.BranchPackageID = BranchPackageID;
          // $scope.promotionInnerParams.BranchPackageID = "41";
          // $scope.promotionInnerParams.TotalAmount = "222";
          $scope.promotionInnerParams.TotalAmount = price;


        console.log("$scope.promotionInnerParams", $scope.promotionInnerParams);
        if ($.jStorage.get("loginDetail") === null) {
            $rootScope.getMenus();
        } else {
            NavigationService.addToCart($scope.promotionInnerParams, function(data) {
                console.log("$scope.promotionInnerParams", $scope.promotionInnerParams);
                if (data.value) {

                    if (data.data.AddToCart[0].Status === 1) {
                        console.log("inif", data);
                        $scope.successCartModal = $uibModal.open({
                            animation: true,
                            templateUrl: 'views/modal/addtocart.html',
                            scope: $scope
                        });
                        $timeout(function() {
                            $scope.successCartModal.close();
                            $state.go('cart');
                        }, 1000);


                    } else if (data.data.AddToCart[0].Status === 0 && data.data.AddToCart[0].Message == "This Package Is Allready In Cart" ) {
                        console.log("in else", data);
                        $uibModal.open({
                            animation: true,
                            templateUrl: 'views/modal/alreadyCart.html',
                            scope: $scope
                        });

                    }else if (data.data.AddToCart[0].Status === 0 && data.data.AddToCart[0].Message == "Invalid Package") {
                      $uibModal.open({
                          animation: true,
                          templateUrl: 'views/modal/cartFail.html',
                          scope: $scope
                      });

                    }
                } else {
                    $uibModal.open({
                        animation: true,
                        templateUrl: 'views/modal/addtocartfail.html',
                        scope: $scope
                    });
                }
                // if (data.value === true && data.data.AddToCart[0].Status === '1') {
                //     console.log("inif", data);
                //     $uibModal.open({
                //         animation: true,
                //         templateUrl: 'views/modal/addtocart.html',
                //         scope: $scope
                //     });
                // } else if (data.value === true && data.data.AddToCart[0].Status === '0') {
                //     console.log("in else", data);
                //     $uibModal.open({
                //         animation: true,
                //         templateUrl: 'views/modal/alreadyCart.html',
                //         scope: $scope
                //     });
                // } else {
                //     $uibModal.open({
                //         animation: true,
                //         templateUrl: 'views/modal/addtocartfail.html',
                //         scope: $scope
                //     });
                // }
            })
        }
    }

})

.controller('BlogCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter, $uibModal, $state, $location) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("blog");
    $scope.menutitle = NavigationService.makeactive("Blog");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.myUrl = $location.absUrl();
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

.controller('BlogInsideCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter, $location) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("blog-inside");
    $scope.menutitle = NavigationService.makeactive("Blog Inside");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.removeLoaderOn(1);
    $scope.myUrl = $location.absUrl();
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




.controller('headerctrl', function($scope, TemplateService, NavigationService, $state, $timeout, $uibModal, $rootScope) {
        $scope.attraId = "57bc4b2aeb9c91f1025a3b55";
        $scope.dealsId = "57bc4b5aeb9c91f1025a3b58";
        $scope.hostpartyId = "57bc4b10eb9c91f1025a3b54";
        $scope.whatsnewId = "57bc4af6eb9c91f1025a3b4f";
        $scope.foodBeveragesId = "57bc4b48eb9c91f1025a3b57";
        $scope.eventId = "57bd4e71a86ee9fa6770d4b2";
        $scope.promotionId = "57bc4b36eb9c91f1025a3b56";
        $scope.template = TemplateService;
        $("#target").val($("#target option:first").val());
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
        console.log("userLoginDetails", $scope.userLoginDetails);

        $scope.city = false;
        $scope.flag = {};
        $scope.flag.showCity = false;
        $scope.toggleCity = function() {
            $scope.city = !$scope.city;
        };
        $scope.getCityName = function(cityname) {
            NavigationService.setCity(cityname);
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
        // $scope.showAunty = false;
        //   $scope.menus = "menu-out";
        //     $scope.template.getMenus = function() {
        //       if ($scope.menus == "menu-out") {
        //           $scope.menus = "menu-in";
        //           $scope.showAunty = true;
        //       } else {
        //           $scope.menus = "menu-out";
        //           $scope.showAunty = false;
        //       }
        //     };
        //     $scope.template.getMenus();

        // $scope.menus = "menu-out";
        $rootScope.menus = "menu-out";
        // $scope.showAunty = false;
        $rootScope.showAunty = false
        $rootScope.getMenus = function() {
            if ($rootScope.menus == "menu-out") {
                $rootScope.menus = "menu-in";
                $rootScope.showAunty = true;
            } else {
                $rootScope.menus = "menu-out";
                $rootScope.showAunty = false;
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
        // $scope.getOtp.CustomerMobileNo =$scope.signupData.CustomerMobile;
        $scope.getOtp.OTPFor = "1";
        $scope.getOtp.OTPSendFrom = "1";
        // $scope.getOtp.APIKey = "afa35e6d32a54d64962a78ccf28c140017636054922421850805185";
        $scope.getOtp.OTPValidMinute = 5;
        $scope.wrongOtp = false;
        $scope.isDisabled = false;
        $scope.isDisabled2 = false;





        $scope.signupGenerateOtp = function(signupData) {
            console.log("signupData ", signupData);
            $scope.customerEXist = false;

            if (signupData) {
                if (signupData.CustomerAddress) {
                    $scope.validCity = false;
                    if (signupData.CustomerPassword === signupData.confirmPassword) {
                        console.log('m true');
                        $scope.pass = true;
                        // console.log("signupDataotp", signupData);
                        // $scope.otp();

                        $scope.getOtp.CustomerMobileNo = signupData.CustomerMobile;
                        console.log("$scope.getOtp", $scope.getOtp);
                        $scope.isDisabled = true;
                        NavigationService.generateOtp($scope.getOtp, function(data) {
                            console.log("$scope.getOtp", $scope.getOtp);
                            console.log("data", data);
                            if (data.value === true) {
                                $scope.otp();
                            } else if (!data.value && data.data.GenerateOTPTable[0].Message === "Invalid Data")  {
                                console.log("data in false", data);

                                $scope.customerEXist = true;
                                $scope.isDisabled = false;
                            }else {
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
            $scope.wrongOtp = false;
            $scope.signupGenerateOtp(signupData);
        }
        $scope.customerSignup = function(signupData) {
            console.log("signupData", signupData);
            if (signupData) {
                $scope.isDisabled2 = true;
                NavigationService.CustomerRegistration(signupData, function(data) {
                    console.log("signupData", signupData);
                    console.log("signupDataforData", data);
                    if (data.value === true) {
                        $scope.modalOtp.close();
                        // $.jStorage.set("loginDetail", data);
                        NavigationService.setUser(data.data);
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
                        $scope.isDisabled2 = false;

                    } else {
                        $scope.isDisabled2 = false;
                        $scope.emailExist = true;
                        $scope.wrongOtp = true;

                    }
                })
            }
        }

        $scope.formComplete = false;
        $scope.userData = {};
        $scope.userData.IsOTPValidation = "0";
        $scope.userData.OTP = "";
        $scope.valid = false;
        $scope.isUserLoggedIn =false;
        $scope.userLogin = function(userData) {
          console.log("im in user login");
            if (userData) {
                console.log("userData", userData);
                $scope.isUserLoggedIn =true;
                  $scope.valid = false;
                NavigationService.VerifyCustomerLogin(userData, function(data) {
                    console.log("data", data);
                    if (data.value == true) {
                        // $.jStorage.set("loginDetail", data);
                        NavigationService.setUser(data.data);
                        $scope.valid = false;
                        $scope.formComplete = true;
                        $timeout(function() {
                            $scope.formComplete = false;
                            $scope.userData = {};
                        }, 2000);
                        location.reload();
                    } else {
                        $scope.valid = true;
                        $scope.isUserLoggedIn =false;
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
                $rootScope.getMenus();
            } else if ($.jStorage.get("loginDetail") != null) {
                console.log("im in else");
                $state.go("cart");
            }
        };

        $scope.myAccount = function() {
            if ($.jStorage.get("loginDetail") != null) {
                $state.go("profile");
            };
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
          $scope.isDisabledForgot =false;
        $scope.formSubmit = function(credentials) {
          if (credentials) {
            $scope.isDisabledForgot = true ;
              $scope.invalidEmail = false;
          }
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
                      $scope.isDisabledForgot =false;

                }
            })
        }




    })
    .controller('footerctrl', function($scope, TemplateService, NavigationService, $uibModal) {
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

          $scope.loyalty = function() {
        $uibModal.open({
            animation: true,
            templateUrl: "views/modal/loyalty.html",
            scope: $scope
        });
    };

        $scope.attrctionId = "57bc4b2aeb9c91f1025a3b55";
        $scope.drinkandPartyId = "57bc4b48eb9c91f1025a3b57";
        $scope.dealsandpackagesId = "57bc4b5aeb9c91f1025a3b58";
        $scope.eventId = "57bd4e71a86ee9fa6770d4b2";
        $scope.id = '57bc4b10eb9c91f1025a3b54';
          $scope.promotionId = "57bc4b36eb9c91f1025a3b56";

        NavigationService.getSingleExploreSmaaash($scope.id, function(data) {
            $scope.SingleHostParty1 = data.data;
            // console.log(".SingleHostParty1",.SingleHostParty1);

        });
        if ($.jStorage.get("weekdays") != null) {
            $scope.weekdays = $.jStorage.get("weekdays");
            $scope.weekend = $.jStorage.get("weekend");
        }



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
