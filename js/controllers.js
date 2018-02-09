var globalfunction = {};
globalfunction.index;
angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ngDialog', 'imageupload', 'infinite-scroll', 'rzModule'])

    .controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal, $state, $filter, ngDialog, $http, $rootScope,$stateParams) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("home");
        // $scope.menutitle = NavigationService.makeactive("Smaaash – Look no More For The Perfect Entertainment Arena");
        $scope.menutitle = NavigationService.makeactive("Smaaash");
        TemplateService.title = $scope.menutitle;
        TemplateService.description = "We're glad to tell you that Smaaash is safe and all our structures conform to approvals and plans sanctioned by the MCGM. So visit us soon and take advantage of our daily offers!"
        TemplateService.keywords = "Birthday Parties, Corporate Parties, Game Zones, Kitty Parties, Play Area for Kids, Virtual Reality Games, Go Karting, Pre - wedding Party, Team Building Events";
        $scope.navigation = NavigationService.getnav();
        var openL = {};
        TemplateService.removeLoaderOn(4);
        $scope.attraId = "57bc4b2aeb9c91f1025a3b55";
        $scope.hostpartyId = "57bc4b10eb9c91f1025a3b54";
        $scope.drinkandPartyId = "57bc4b48eb9c91f1025a3b57";
        $scope.dealsandpackagesId = "57bc4b5aeb9c91f1025a3b58";

        if ($.jStorage.get("cityid") == '587366fa7309110c7de34906' || $.jStorage.get("city") == 'Gurgaon - Sector 29') {
            $scope.showHomeBanner = true;
        } else {
            $scope.showHomeBanner = false;
        }
        $scope.showIframe = false;
        $scope.showIframeVid = function () {
            console.log("imnshowIframeVid");
            $scope.showIframe = !$scope.showIframe;
        }
        $scope.goTo = function (name, id, statetogo) {
            if (name, id) {
                $scope.name = name.replace(/(?!\w|\s)./g, '').replace(/\s/g, '').replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2').toLowerCase();
                $state.go(statetogo, {
                    name: $scope.name,
                    id: id
                });
            }

        }
        $scope.mys = [{
            img: "img/home/mbanner.png"
        }, {
            img: "img/home/mbanner.png"
        }, , {
            img: "img/home/mbanner.png"
        }];
        var x = 1;
        _.each($scope.mys, function (key) {
            if (key) {
                key.order = x;
                x++;
            }
        })


        NavigationService.getCity(function (data) {
            $scope.getCities1 = data.data;
            console.log("$scope.getCities1", $scope.getCities1);
        });

        // $scope.getCities1 = [{
        //     "_id": "577f4d106b78e0bc03724800",
        //     "__v": 0,
        //     "myslug": "mumbai",
        //     "weekend": "Fri-Sun   11am - 1 am",
        //     "weekdays": "Mon-Thurs   12:30pm - 1am",
        //     "pdf": "",
        //     "logo": "590da160f7a66a33414b4567.png",
        //     "Photo": "http://ent.itspl.net/Upload/Branch/521641720_Mumbai.jpg",
        //     "BranchName": "Smaaash Mumbai",
        //     "BranchID": "12",
        //     "twitter": "twi hashtag",
        //     "facebook": "fb hashtag",
        //     "instagram": "insta hashtag",
        //     "image": "img/nav/mumbai.png",
        //     "order": "7",
        //     "name": "Mumbai"
        // }, {
        //     "_id": "577f4d246b78e0bc03724802",
        //     "__v": 0,
        //     "myslug": "gurgaon-cyber-hub",
        //     "weekend": "Fri-Sun   11am - 12am",
        //     "weekdays": "Mon-Thurs   11am - 12am",
        //     "pdf": "",
        //     "logo": "590da46bf7a66a33414b4eb9.png",
        //     "Photo": "http://ent.itspl.net/Upload/Branch/678165973_Gurgaon.jpg",
        //     "BranchName": "Smaaash Gurgaon Cyber Hub",
        //     "BranchID": "14",
        //     "twitter": "twi hashtag",
        //     "facebook": "fb hashtag",
        //     "instagram": "insta hashtag",
        //     "image": "img/nav/gurgoan-cyber.png",
        //     "order": "6",
        //     "name": "Gurgaon - Cyber Hub"
        // }, {
        //     "_id": "579b0d74fa72c24405ee0818",
        //     "__v": 0,
        //     "myslug": "hyderabad",
        //     "weekend": "Fri-Sun   11am - 12am",
        //     "weekdays": "Mon-Thurs   12pm - 12am",
        //     "pdf": "",
        //     "logo": "590da4aef7a66a33414b4f69.png",
        //     "Photo": "http://ent.itspl.net/Upload/Branch/1982363119_Hyderabad.jpg",
        //     "BranchName": "Smaaash Hyderabad",
        //     "BranchID": "13",
        //     "twitter": "",
        //     "facebook": "",
        //     "instagram": "",
        //     "image": "img/nav/hyderabad.png",
        //     "order": "5",
        //     "name": "Hyderabad"
        // }, {
        //     "_id": "577f4d1c6b78e0bc03724801",
        //     "__v": 0,
        //     "myslug": "bengaluru",
        //     "weekend": "Fri-Sat   11am - 1am",
        //     "weekdays": "Sun-Thurs   11am - 11pm",
        //     "pdf": "",
        //     "logo": "590da18ef7a66a33414b45f6.png",
        //     "Photo": "http://ent.itspl.net/Upload/Branch/143438502_Bengaluru.jpg",
        //     "BranchName": "Smaaash Bengaluru",
        //     "BranchID": "15",
        //     "twitter": "twi hashtag",
        //     "facebook": "fb hashtag",
        //     "instagram": "insta hashtag",
        //     "image": "img/nav/bengaluru.png",
        //     "order": "4",
        //     "name": "Bengaluru"
        // }, {
        //     "_id": "57808c9032b1d30b046dd48c",
        //     "__v": 0,
        //     "myslug": "noida",
        //     "weekend": "Fri-Sun   11am - 11pm",
        //     "weekdays": "Mon-Thurs   11am - 11pm",
        //     "pdf": "",
        //     "logo": "590da47df7a66a33414b4efb.png",
        //     "Photo": "http://ent.itspl.net/Upload/Branch/1131451159_Noida.jpg",
        //     "BranchName": "Smaaash Noida",
        //     "BranchID": "17",
        //     "twitter": "twi shimla",
        //     "facebook": "fb shimla",
        //     "instagram": "insta shimla",
        //     "image": "img/nav/noida.png",
        //     "order": "3",
        //     "name": "Noida"
        // }, {
        //     "_id": "58808e0e94082f1ed90f06a0",
        //     "__v": 0,
        //     "myslug": "ludhiana",
        //     "weekend": "Fri-Sun   11am - 11pm",
        //     "weekdays": "Mon-Thurs   11am - 11pm",
        //     "pdf": "",
        //     "logo": "590da4c2f7a66a33414b4fb7.png",
        //     "Photo": "",
        //     "BranchName": "",
        //     "BranchID": "",
        //     "twitter": "",
        //     "facebook": "",
        //     "instagram": "",
        //     "image": "img/nav/ludhiana.png",
        //     "order": "2",
        //     "name": "Ludhiana"
        // }, {
        //     "_id": "587366fa7309110c7de34906",
        //     "__v": 0,
        //     "myslug": "gurgaon-sector-29",
        //     "weekend": "Fri-Sun   12pm - 11.30pm",
        //     "weekdays": "Mon-Thurs   12pm - 11.30pm",
        //     "pdf": "",
        //     "logo": "59106cb9d86cf206d96dde0a.png",
        //     "Photo": "",
        //     "BranchName": "Smaaash Gurgaon - Sector 29",
        //     "BranchID": "",
        //     "twitter": "",
        //     "facebook": "",
        //     "instagram": "",
        //     "image": "img/nav/gurgaon-sector.png",
        //     "order": "1",
        //     "name": "Gurgaon - Sector 29"
        // }, {
        //     "_id": "5a0ab43bb7e6ab63e3ae6cfa",
        //     "__v": 0,
        //     "myslug": "delhi",
        //     "weekend": "Fri-Sun   11 am to 12 am",
        //     "weekdays": "Mon-Thurs   11 am to 12 am",
        //     "pdf": "",
        //     "logo": "5a0ab405b7e6ab63e3ae6c53.png",
        //     "Photo": "",
        //     "BranchName": "Smaaash Delhi",
        //     "BranchID": "12",
        //     "twitter": "twi hashtag",
        //     "facebook": "fb hashtag",
        //     "instagram": "insta hashtag",
        //     "image": "img/nav/delhi.png",
        //     "order": "8",
        //     "name": "Delhi"
        // }, {
        //     "_id": "5a16b85263ed4158867bb141",
        //     "__v": 0,
        //     "myslug": "gurgaon-ambience-mall",
        //     "weekend": "Fri-Sun   11 am to 12 am",
        //     "weekdays": "Mon-Thurs   11am - 12 am",
        //     "pdf": "",
        //     "logo": "5a16b84863ed4158867bb126.png",
        //     "Photo": "",
        //     "BranchName": "Smaaash Gurgaon Ambience Mall",
        //     "BranchID": "12",
        //     "twitter": "twi hashtag",
        //     "facebook": "https://www.facebook.com/SmaaashAmbienceMallGurgaon/",
        //     "instagram": "insta hashtag",
        //     "image": "img/nav/gurgaonAmbianceMall.png",
        //     "order": "9",
        //     "name": "Gurgaon Ambience Mall"
        // }, {
        //     "BranchID": "17",
        //     "BranchName": "Smaaash Pune",
        //     "Photo": "",
        //     "facebook": "https://www.facebook.com/SmaaashPune/",
        //     "image": "5885c903d0e83a29f610e94a.png",
        //     "instagram": "",
        //     "logo": "5a311c5b443b8113be3d33a4.png",
        //     "myslug": "pune",
        //     "name": "Pune",
        //     "order": "10",
        //     "pdf": "",
        //     "twitter": "",
        //     "weekdays": "Mon-Thurs   11 am to 11 pm",
        //     "weekend": "Fri-Sun   11 am to 11 pm",
        //     "__v": 0,
        //     "_id": "5a2f81f1a41b1d20ca8c58d7",
        // }, {
        //     "BranchID": "18",
        //     "BranchName": "Smaaash Chandigarh",
        //     "Photo": "",
        //     "facebook": "https://www.facebook.com/SmaaashChandigarh/",
        //     "image": "5885c903d0e83a29f610e94a.png",
        //     "instagram": "",
        //     "logo": "5a3125a3740f9b151eb9781b.png",
        //     "myslug": "chandigarh",
        //     "name": "Chandigarh",
        //     "order": "11",
        //     "pdf": "",
        //     "twitter": "",
        //     "weekdays": "Mon-Thurs   11 am to 12 am",
        //     "weekend": "Fri-Sun   11 am to 12 am",
        //     "__v": 0,
        //     "_id": "5a3123e1ee2ab36f8785c797",
        // }];
        $scope.openpops = function () {
            openL = ngDialog.open({
                template: 'views/content/popup.html',
                className: 'smaaash-cities ',
                className: 'backdroped',
                scope: $scope,
                closeByEscape: true
            });

        };

        $scope.loyalty = function () {
            $uibModal.open({
                animation: true,
                templateUrl: "views/modal/loyalty.html",
                scope: $scope,
                windowClass: 'app-modal-window'
            });
        };

        $scope.currentdate = new Date();
        $scope.funToStopVid = function () {
            console.log("in im");
            $scope.showVideo = false;
        }
        var fired = false;
        $scope.onScrollStopVideo = function () {
            window.addEventListener("scroll", function () {
                if (document.body.scrollTop >= 700) {
                    $scope.showVideo = true;
                    $timeout(function () {
                        $scope.showVideo = true;
                    }, 2000);
                    fired = true;
                }
            }, true)
        }
        $scope.onScrollStopVideo();


        $scope.$on('$viewContentLoaded', function () {
            if (!$.jStorage.get("popupShow")) {
                $scope.openpops();
            }

        });

        $scope.showVideo = false;
        $scope.scrollToHome = function () {
            $scope.showVideo = true;
            $('html, body').animate({
                scrollTop: $("#toHome").offset().top
            }, 500);
        };
        $scope.hostpartyId = "57bc4b10eb9c91f1025a3b54";
        NavigationService.getSlider(function (data) {
            $scope.mySlides = data.data;
            var i = 1;
            var x = 1;
            _.each($scope.mySlides, function (n) {
                if (n.image) {
                    n.ordering = i;
                    i++;

                };
                if (n.mobileImage) {
                    n.mobileorder = x;
                    x++;
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
        NavigationService.getCity(function (data) {
            $scope.getCities = data.data;
            $rootScope.smaaashCities = data.data;
            TemplateService.removeLoader();
        });


        $scope.getCityName = function (cityname) {
            console.log("im click");
            NavigationService.setCity(cityname);
            $.jStorage.set("popupShow", true);
            console.log(openL);
            ngDialog.closeAll("Change");
            $(".ngdialog").remove();
            $scope.template.reFetchCity();
            if ($state.current.name == 'home') {
                $state.go('home', {
                    homepageCity: cityname.myslug
                })
            }
        }

        $scope.nameOfCity = $.jStorage.get("city");
        if ($state.current.name == 'home') {
            $state.go('home', {
                homepageCity: $.jStorage.get("citySlug")
            })
        }



        NavigationService.getHomeContent(function (data) {
            $scope.homeContent = data.data;
            if (data.value) {
                $scope.hostParty = [];
                $scope.attraction1 = [];
                $scope.attraction2 = [];
                $scope.attraction = [];
                $scope.buyNowdeals = [];
                $scope.homeContent = data.data;
                $scope.content = _.groupBy($scope.homeContent, "type.name");
                _.each($scope.content.Attraction, function (key) {
                    if (key.order == null) {
                        if (key.status) {
                            $scope.attraction1.push(key);
                        }

                    } else {
                        if (key.status) {
                            $scope.attraction2.push(key);
                        }
                    }
                })
                $scope.attraction2 = $filter('orderBy')($scope.attraction2, '-order');
                $scope.attraction = $scope.attraction2.concat($scope.attraction1);
                // $scope.attraction = $scope.content.Attraction;
                $scope.whatsnew = $scope.content["What's new"];
                $scope.hostParty1 = $scope.content["Host a party"];
                _.each($scope.hostParty1, function (key) {
                    if (key.status) {
                        $scope.hostParty.push(key);
                    }
                })

                $scope.deals = [];
                $scope.events = [];
                $scope.dealsp = $scope.content["Deals and Packages"];
                $scope.dealsp = $filter('orderBy')($scope.dealsp, '-order');
                _.each($scope.dealsp, function (key) {
                    if (key.status) {
                        $scope.deals.push(key);
                        if (key.showBuyNow) {
                            $scope.buyNowdeals.push(key);
                        }
                    }
                })
                $scope.eventss = $scope.content["Events"];
                _.each($scope.eventss, function (key) {
                    if (key.status) {
                        $scope.events.push(key);
                    }
                })
                $scope.foodBeverages = $scope.content["Food and Beverages"];
                $scope.buyOnline = $scope.content["Buy Online"];
                $scope.promotion = $scope.content["Promotions"];
                TemplateService.removeLoader();
            } else { }

        });




        NavigationService.getHomeBanner(function (data) {
            if (data.value) {
                $scope.banner = data.data;
                if ($scope.banner != '') {
                    $scope.banner[0].homebanner = $filter('uploadpath')($scope.banner[0].homebanner);
                }
            }
            TemplateService.removeLoader();

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
        $scope.signupLogin = function (signupData) {
            if ($scope.signupData) {
                // if ($scope.signupData.city == $.jStorage.get("cityid")) {
                // $scope.validCity = false;
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
                // } else {
                //     $scope.validCity = true;
                // }
            }
        }








        $scope.viewMore = function () {
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


        $scope.buyNowDealsp = function (BranchPackageID, price, mobile) {

            $scope.dealspCartParams.BranchPackageID = BranchPackageID;
            // $scope.dealspCartParams.BranchPackageID = "41";
            // $scope.dealspCartParams.TotalAmount = "222";
            $scope.dealspCartParams.TotalAmount = price;


            console.log("$scope.dealspCartParams", $scope.dealspCartParams);
            if ($.jStorage.get("loginDetail") == null) {

                if (mobile == 'mobile') {
                    $rootScope.signinModal();
                    console.log("imin");
                }
                $rootScope.getMenus();
            } else {
                NavigationService.addToCart($scope.dealspCartParams, function (data) {
                    console.log("$scope.dealspCartParams", $scope.dealspCartParams);
                    if (data.value) {

                        if (data.data.AddToCart[0].Status === 1) {
                            console.log("inif", data);
                            $scope.successCartModal = $uibModal.open({
                                animation: true,
                                templateUrl: 'views/modal/addtocart.html',
                                scope: $scope
                            });
                            $timeout(function () {
                                $scope.successCartModal.close();
                                $state.go('cart', {
                                    cartCity: $rootScope.citySpecific
                                });
                            }, 1000);


                        } else if (data.data.AddToCart[0].Status === 0 && data.data.AddToCart[0].Message == "This Package Is Allready In Cart") {
                            console.log("in else", data);
                            $uibModal.open({
                                animation: true,
                                templateUrl: 'views/modal/alreadyCart.html',
                                scope: $scope
                            });

                        } else if (data.data.AddToCart[0].Status === 0 && data.data.AddToCart[0].Message == "Invalid Package") {
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
        //seo
         if ($stateParams.homepageCity === "bengaluru") {
            TemplateService.title = "Everything You Will Love To Do All Under One Roof At Smaaash!";
            TemplateService.description = "A team that works together succeeds together. Play competitive games, sip on your drinks and savour the delicacies with you comrades by planning a team outing at Smaaash.";
            TemplateService.keywords = "team outing places";
        }
           if ($stateParams.homepageCity === "delhi") {
            TemplateService.title = " Everything You Will Love To Do All Under One Roof At Smaaash!";
            TemplateService.description = " From virtual reality games, bowling to hosting extravagant parties. Smaaash is just the place for you. Unleash the gamer within, Delhi!";
            TemplateService.keywords = "virtual reality games, bowling";
        }
          if ($stateParams.homepageCity === "gurgaon-ambience-mall") {
            TemplateService.title = "Everything You Will Love To Do All Under One Roof At Smaaash!";
            TemplateService.description = "From virtual reality games, bowling to hosting extravagant parties. Smaaash is just the place for you. Unleash the gamer within, Gurgaon!";
            TemplateService.keywords = "virtual reality games, bowling";
        }
           if ($stateParams.homepageCity === "mumbai") {
            TemplateService.title = " Everything You Will Love To Do All Under One Roof At Smaaash!";
            TemplateService.description = "From virtual reality games, bowling, go-karting and to hosting extravagant parties. Smaaash is just the place for you. Unleash the gamer within, Mumbai!";
            TemplateService.keywords = "virtual reality games, bowling";
        }

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

    .controller('CorporateCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $uibModal) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("corporate-parties");
        $scope.menutitle = NavigationService.makeactive("Corporate Parties");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        NavigationService.getDetailExploreSmaaash($stateParams.id, function (data) {
            $scope.corporate = data.data;
        });
        $scope.corporateParty = function () {
            $uibModal.open({
                animation: true,
                templateUrl: "views/modal/enquiry.html",
                scope: $scope

            })
        };
    })
    .controller('CareerCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $uibModal, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("career");
        $scope.menutitle = NavigationService.makeactive("Career");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.career = function () {
            $uibModal.open({
                animation: 'true',
                templateUrl: "views/modal/careers.html",
                scope: $scope
            });
        }
        // if ($stateParams.careerCity) {
        //     $stateParams.careerCity = $.jStorage.get("city");
        //     $state.go("career", {
        //         careerCity: $stateParams.careerCity
        //     });
        // }

    })

    .controller('BenefitCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("benefit");
        $scope.menutitle = NavigationService.makeactive("Benefit");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.removeLoaderOn(1);
        NavigationService.getBenefit(function (data) {
            $scope.benefits = data.data;
            TemplateService.removeLoader();
        });
        // if ($stateParams.benefitCity) {
        //     $stateParams.benefitCity = $.jStorage.get("city");
        //     $state.go("benefit", {
        //         benefitCity: $stateParams.benefitCity
        //     });
        // }


    })

    .controller('SkiesCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams) {
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
        $scope.today = function () {
            $scope.dt = new Date();
        };
        $scope.today();

        $scope.clear = function () {
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

        $scope.toggleMin = function () {
            $scope.options.minDate = $scope.options.minDate ? null : new Date();
        };

        $scope.toggleMin();

        $scope.setDate = function (year, month, day) {
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
        $("input[type='range']").change(function () {

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

    .controller('ContactCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $rootScope, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("contact");
        $scope.menutitle = NavigationService.makeactive("Contact");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        console.log("$rootScope.citySpecific", $rootScope.citySpecific);
        // if ($stateParams.contactCity) {
        //     $stateParams.contactCity = $.jStorage.get("city");
        //     $state.go("contact", {
        //         contactCity: $stateParams.contactCity
        //     });
        // }
        // if ($.jStorage.get("cityid")!=null) {
        //   $scope.contactCityId =$.jStorage.get("cityid") ;
        //   switch ($scope.contactCityId) {
        //     case '577f4d106b78e0bc03724800':
        //     $scope.Mum =true;
        //
        //       break;
        //       case '577f4d246b78e0bc03724802':
        //         $scope.GurgaonHub=true;
        //         break;
        //         case '579b0d74fa72c24405ee0818':
        //           $scope.Hyderabad  =true;
        //           break;
        //           case '577f4d1c6b78e0bc03724801':
        //           $scope.Bengaluru =true;
        //
        //             break;
        //             case '57808c9032b1d30b046dd48c':
        //             $scope.Noida=true;
        //
        //               break;
        //               case '58808e0e94082f1ed90f06a0':
        //                 $scope.Ludhiana=true;
        //                 break;
        //                 case '587366fa7309110c7de34906':
        //                   $scope.GurgaonSec29 =true;
        //                   break;
        //     default:
        //     case '577f4d106b78e0bc03724800':
        //     $scope.Mum =true;
        //   }
        // }
//seo
if ($stateParams.contactCity === "bengaluru") {
            TemplateService.title = "Get In Touch With Us To Know More";
            TemplateService.description = "We are here to clear all your doubts regarding packages at Smaaash Bengaluru. Contact us directly on our number and we would be happy to help.";
            TemplateService.keywords = "";
        }
 if ($stateParams.contactCity === "gurgaon-ambience-mall") {
            TemplateService.title = "Get In Touch With Us To Know More";
            TemplateService.description = " We are here to clear all your doubts regarding packages at Smaaash Gurgaon. Contact us directly on our number and we would be happy to help.";
            TemplateService.keywords = "";
        }
 if ($stateParams.contactCity === "mumbai") {
            TemplateService.title = "Get In Touch With Us To Know More";
            TemplateService.description = "We are here to clear all your doubts regarding packages at Smaaash Mumbai. Contact us directly on our number and we would be happy to help.";
            TemplateService.keywords = "";
        }
         if ($stateParams.contactCity === "gurgaon-cyber-hub") {
            TemplateService.title = "Get In Touch With Us To Know More";
            TemplateService.description = "We are here to clear all your doubts regarding packages at Smaaash Gurgaon Cyberhub. Contact us directly on our number and we would be happy to help.";
            TemplateService.keywords = "";
        }
             if ($stateParams.contactCity === "delhi") {
            TemplateService.title = "Get In Touch With Us To Know More";
            TemplateService.description = "We are here to clear all your doubts regarding packages at Smaaash Delhi. Contact us directly on our number and we would be happy to help.";
            TemplateService.keywords = "";
        }
 
    })

    .controller('termsCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("terms");
        $scope.menutitle = NavigationService.makeactive("Terms Of Use");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        // if ($stateParams.contactCity) {
        //     $stateParams.contactCity = $.jStorage.get("city");
        //     $state.go("contact", {
        //         contactCity: $stateParams.contactCity
        //     });
        // }
        //



    })
    .controller('securityCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("security");
        $scope.menutitle = NavigationService.makeactive("Security");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        // if ($stateParams.contactCity) {
        //     $stateParams.contactCity = $.jStorage.get("city");
        //     $state.go("contact", {
        //         contactCity: $stateParams.contactCity
        //     });
        // }
        //



    })
    .controller('policyCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("policy");
        $scope.menutitle = NavigationService.makeactive("Policy");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        // if ($stateParams.contactCity) {
        //     $stateParams.contactCity = $.jStorage.get("city");
        //     $state.go("contact", {
        //         contactCity: $stateParams.contactCity
        //     });
        // }
        //



    })

    .controller('SponsorCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("sponsor");
        $scope.menutitle = NavigationService.makeactive("Sponsor");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        TemplateService.removeLoaderOn(1);
        // if ($stateParams.sponsorCity) {
        //     $stateParams.sponsorCity = $.jStorage.get("city");
        //     $state.go("sponsor", {
        //         sponsorCity: $stateParams.sponsorCity
        //     });
        // }


        $scope.moreDesc = {};
        NavigationService.getSponsors(function (data) {
            console.log("data", data.data);
            $scope.sponsor = data.data.sponsor;
            $scope.sponsor1 = _.chunk(data.data.sponsor, 3);

            $scope.esteem = data.data.esteem;
            $scope.contact = data.data.contact;
            console.log("  $scope.contact", $scope.contact);

            TemplateService.removeLoader();
        });
        $scope.readMore = function (id) {
            _.each($scope.moreDesc, function (value, property) {
                if (id != property) {
                    $scope.moreDesc[property] = false;
                }
            });
            $scope.moreDesc[id] = ($scope.moreDesc[id] == true) ? false : true;
            console.log($scope.moreDesc);
            $scope.myDesc = _.find($scope.sponsor, function (n) {
                return n._id == id;

            }).content;

        };



    })

    .controller('MediaCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("media");
        $scope.menutitle = NavigationService.makeactive("Media");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.removeLoaderOn(2);


        // if ($stateParams.mediasCity) {
        //     $stateParams.mediasCity = $.jStorage.get("city");
        //     $state.go("media", {
        //         mediasCity: $stateParams.mediasCity
        //     });
        // }


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

        if ($stateParams.mediasCity) {
            NavigationService.getCity(function (data) {
                $scope.getCities = _.cloneDeep(data.data);
                console.log("$scope.getCities ", $scope.getCities);
                $scope.tempCity = _.find($scope.getCities, function (obj) {
                    return obj.name == $stateParams.mediasCity;
                });
                $scope.moreDesc = {};
                $scope.mediaObject = {};
                $scope.mediaObject.pagenumber = 0;
                $scope.mediaObject.pagesize = 6;
                // $scope.mediaObject.city = $scope.tempCity._id;
                // $scope.mediaObject.city = $.jStorage.get("cityid");
                $scope.noviewmore = true;
                $scope.mediagallery = [];
                $scope.mediagalleryDesc = [];
                $scope.notAvailable = false;
                $scope.busy = false;

                $scope.fetchData = function () {
                    if ($scope.busy) return;
                    $scope.busy = true;
                    $scope.mediaObject.pagenumber = $scope.mediaObject.pagenumber + 1;
                    NavigationService.getGallery($scope.mediaObject, function (data) {
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
                            $scope.nullMedia = [];
                            $scope.orderMedia = [];

                            console.log($scope.mediaObject.pagenumber);
                            if (data.data.totalpages >= $scope.mediaObject.pagenumber) {
                                if (data.data.data) {
                                    _.each(data.data.data, function (val) {
                                        $scope.mediagalleryDesc.push(val);
                                        if (val.order == null) {
                                            if (val.status) {
                                                $scope.nullMedia.push(val);
                                            }
                                        } else {
                                            if (val.status) {
                                                $scope.orderMedia.push(val);
                                            }
                                        }
                                    });
                                    $scope.orderMedia1 = $filter('orderBy')($scope.orderMedia, '-order');
                                    $scope.finalMedia = $scope.orderMedia1.concat($scope.nullMedia);

                                    console.log("  $scope.mediagalleryDesc", $scope.mediagalleryDesc);

                                    $scope.finalMedia = _.chunk($scope.finalMedia, 3);
                                    _.each($scope.finalMedia, function (n) {
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
            });

        }




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
//seo
    if ($stateParams.mediasCity === "gurgaon-ambience-mall") {
            TemplateService.title = " Smaaash As The Talk Of The Town!";
            TemplateService.description = " When it comes to Smaaash, media coverage is always there. With a lot of fun things to do in its kitty, Smaaash Gurgaon never fails to amaze.";
            TemplateService.keywords = "";
        }
            if ($stateParams.mediasCity === "bengaluru") {
            TemplateService.title = "Smaaash As The Talk Of The Town! ";
            TemplateService.description = "When it comes to Smaaash, media coverage is always there. With a lot of fun things to do in its kitty, Smaaash Bengaluru never fails to amaze.";
            TemplateService.keywords = "";
        }
            if ($stateParams.mediasCity === "mumbai") {
            TemplateService.title = "Smaaash As The Talk Of The Town!";
            TemplateService.description = "When it comes to Smaaash, media coverage is always there. With a lot of fun things to do in its kitty, Smaaash Mumbai never fails to amaze.";
            TemplateService.keywords = "";
        }
            if ($stateParams.mediasCity === "delhi") {
            TemplateService.title = "Smaaash As The Talk Of The Town !";
            TemplateService.description = "When it comes to Smaaash, media coverage is always there. With a lot of fun things to do in its kitty, Smaaash Delhi never fails to amaze.";
            TemplateService.keywords = "";
        }
    })

    .controller('EventCtrl', function ($scope, $uibModal, TemplateService, NavigationService, $timeout, $stateParams, $state, $filter, $rootScope) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("event");
        $scope.menutitle = NavigationService.makeactive("Events");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.removeLoaderOn(1);
        $scope.moreDesc = {};

        if ($stateParams.eventcity) {
            NavigationService.getCity(function (data) {
                $scope.getCities = _.cloneDeep(data.data);
                console.log("$scope.getCities ", $scope.getCities);
                $scope.tempCity = _.find($scope.getCities, function (obj) {
                    return obj.myslug == $stateParams.eventcity;
                });
                console.log("$scope.tempCity._id", $scope.tempCity._id);
                NavigationService.getSingleExploreSmaaashByUrl($stateParams.id, $scope.tempCity._id, function (data) {
                    $scope.temparr = [];
                    $scope.temparr1 = [];
                    _.each(data.data, function (key) {
                        if (key.order === null) {
                            if (key.status) {
                                $scope.temparr1.push(key);
                            }


                            console.log("$scope.temparr", $scope.temparr);
                        } else {
                            if (key.status) {
                                $scope.temparr.push(key);
                            }

                            console.log("$scope.temparr", $scope.temparr1);
                        }

                    })
                    $scope.events = $filter('orderBy')($scope.temparr, '-order');
                    $scope.events = $scope.events.concat($scope.temparr1);
                    $scope.events = _.chunk($scope.events, 3);
                    TemplateService.removeLoader();
                });
            })
        }


        //seo


        console.log("$stateParams.eventcity", $stateParams.eventcity);
 if ($stateParams.eventcity === "gurgaon-ambience-mall") {
            TemplateService.title = "Rocking events at Smaaash ";
            TemplateService.description = "Check out what’s brewing at Smaaash; the most thrilling place to chill out and win mammoth prizes at Ambience Mall, Gurgaon.";
            TemplateService.keywords = "event at smaaash";
        }
        if ($stateParams.eventcity === "gurgaon-cyber-hub") {
            TemplateService.title = "Rocking Events at Smaaash ";
            TemplateService.description = "Check out what’s brewing at Smaaash; the most thrilling place to chill out and win mammoth prizes at Cyberhub, Gurgaon.";
            TemplateService.keywords = "event at smaaash";
        }
        if ($stateParams.eventcity === "ludhiana") {
            TemplateService.title = "Sports Related Events and Challenges in Ludhiana| SMAAASH";
            TemplateService.description = "Don’t just hang out, but also play to succeed in sports challenges to win exciting prizes. Moreover, watch live screenings of T20 matches	";
            TemplateService.keywords = "smaaash events, events at smaaash, smaaash events ludhiana, events at smaaash ludhiana";
        }
        if ($stateParams.eventcity === "hyderabad") {
            TemplateService.title = "SMAAASH | Participate in Fun Sport Activities Hyderabad ";
            TemplateService.description = "Sport a prize you win from accomplishing a challenge activity. Win exciting prizes or offers by participating in sports gaming events	";
            TemplateService.keywords = "cricket bowling games,cricket simulator games,play cricket,net cricket in malls ,cricket simulator,game zone in hyderabad,game zone 	";
        }
        if ($stateParams.eventcity === "bengaluru") {
            TemplateService.title = "Mind Blasting Events at Bengaluru";
            TemplateService.description = "Amazing events await you at Smaaash, Bengaluru; a fascinating place where something new is brewing all the time, with respect to games and entertainment.";
            TemplateService.keywords = "Smaaash events ,events at smaaash";
        }

        if ($stateParams.eventcity === "gurgaon-sector-29") {
            TemplateService.title = "The Most Happening Events in Gurgaon";
            TemplateService.description = "Enjoy the most happening go karting events in Gurgaon and the most exciting bands in Gurgaon at Smaaash Sky Karting and Pitstop Brewpub respectively.";
            TemplateService.keywords = " smaaash events , events at smaaash";
        }
        //snehal
        if ($stateParams.eventcity === "mumbai") {
            TemplateService.title = " Rocking Events at Smaaash ";
            TemplateService.description = " Check out what’s brewing at Smaaash; the most thrilling place to chill out and win mammoth prizes at Mumbai.";
            TemplateService.keywords = "Event at smaaash";
        }
        if ($stateParams.eventcity === "noida") {
            TemplateService.title = "Hair Raising Events Coming up For You at Smaaash";
            TemplateService.description = "Keep track of the mesmerizing events coming up at Smaaash, to enthrall you. You could win exciting prizes and revel in the entertainment.";
            TemplateService.keywords = "smaaash events , events at smaaash";
        }
 if ($stateParams.eventcity === "delhi") {
            TemplateService.title = "Rocking Events at Smaaash ";
            TemplateService.description = "Check out what’s brewing at Smaaash; the most thrilling place to chill out and win mammoth prizes at Delhi.";
            TemplateService.keywords = "event at smaaash";
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


        $scope.buyNowEvent = function (BranchPackageID, price, mobile) {
            console.log("BranchPackageID", BranchPackageID);
            console.log("$scope.eventsCartParams", $scope.eventsCartParams);
            if ($.jStorage.get("loginDetail") === null) {
                $rootScope.getMenus();
                if (mobile == 'mobile') {
                    $rootScope.signinModal();
                }

            } else {
                if (BranchPackageID != undefined && price != undefined) {
                    $scope.eventsCartParams.BranchPackageID = BranchPackageID;
                    // $scope.eventsCartParams.BranchPackageID = "41";
                    // $scope.eventsCartParams.TotalAmount = "222";
                    $scope.eventsCartParams.TotalAmount = price;
                    NavigationService.addToCart($scope.eventsCartParams, function (data) {
                        console.log("$scope.eventsCartParams", $scope.eventsCartParams);
                        if (data.value) {

                            if (data.data.AddToCart[0].Status === 1) {
                                console.log("inif", data);
                                $scope.successCartModal = $uibModal.open({
                                    animation: true,
                                    templateUrl: 'views/modal/addtocart.html',
                                    scope: $scope
                                });
                                $timeout(function () {
                                    $scope.successCartModal.close();
                                    $state.go('cart', {
                                        cartCity: $rootScope.citySpecific
                                    });
                                }, 1000);


                            } else if (data.data.AddToCart[0].Status === 0 && data.data.AddToCart[0].Message == "This Package Is Allready In Cart") {
                                console.log("in else", data);
                                $uibModal.open({
                                    animation: true,
                                    templateUrl: 'views/modal/alreadyCart.html',
                                    scope: $scope
                                });

                            } else if (data.data.AddToCart[0].Status === 0 && data.data.AddToCart[0].Message == "Invalid Package") {
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

    .controller('DealspCtrl', function ($scope, $uibModal, TemplateService, NavigationService, $timeout, $state, $stateParams, $filter, $rootScope) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("dealsp");
        $scope.menutitle = NavigationService.makeactive("Deals and Packages");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.removeLoaderOn(1);
        // if ($stateParams.dealspcity) {
        //     $stateParams.dealspcity = $.jStorage.get("city");
        //     $state.go('dealsp', {
        //         dealspcity: $stateParams.dealspcity,
        //         id: $stateParams.id,
        //         name: $stateParams.name,
        //     });
        // }



        $scope.goTo = function (id) {
            console.log("im in");
            if (id) {
                console.log("im in");
                // $scope.name = name.replace(/(?!\w|\s)./g, '').replace(/\s/g, '').replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2').toLowerCase();
                $state.go('deals-inner', {
                    id: id,
                    dealsinnercity: $rootScope.citySpecific

                });
            }

        }
        if ($stateParams.dealspcity) {
            NavigationService.getCity(function (data) {
                $scope.getCities = _.cloneDeep(data.data);
                console.log("$scope.getCities ", $scope.getCities);
                $scope.tempCity = _.find($scope.getCities, function (obj) {
                    return obj.myslug == $stateParams.dealspcity;
                });
                NavigationService.getSingleExploreSmaaashByUrlDeals($stateParams.id, $scope.tempCity._id, function (data) {
                    $scope.tempDealsp = [];
                    $scope.tempDealsp1 = [];
                    _.each(data.data, function (key) {
                        if (key.order == null) {
                            if (key.status) {
                                $scope.tempDealsp.push(key);
                            }

                        } else {
                            if (key.status) {
                                $scope.tempDealsp1.push(key);
                            }

                        }
                    })


                    $scope.SingleDealsPackages = _.cloneDeep($scope.tempDealsp1);
                    $scope.SingleDealsPackages = $filter('orderBy')($scope.SingleDealsPackages, '-order');
                    $scope.SingleDealsPackages = $scope.SingleDealsPackages.concat($scope.tempDealsp);

                    $scope.SingleDealsPackages = _.chunk($scope.SingleDealsPackages, 3);
                    TemplateService.removeLoader();
                });
            })

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


        $scope.buyNow = function (BranchPackageID, price, mobile) {

            $scope.addToCartParams.BranchPackageID = BranchPackageID;
            // $scope.addToCartParams.BranchPackageID = "41";
            // $scope.addToCartParams.TotalAmount = "222";
            $scope.addToCartParams.TotalAmount = price;


            console.log("$scope.addToCartParams", $scope.addToCartParams);
            if ($.jStorage.get("loginDetail") === null) {
                $rootScope.getMenus();
                if (mobile == 'mobile') {
                    $rootScope.signinModal();
                }
            } else {
                NavigationService.addToCart($scope.addToCartParams, function (data) {
                    console.log("$scope.addToCartParams", $scope.addToCartParams);
                    if (data.value) {

                        if (data.data.AddToCart[0].Status === 1) {
                            console.log("inif", data);
                            $scope.successCartModal = $uibModal.open({
                                animation: true,
                                templateUrl: 'views/modal/addtocart.html',
                                scope: $scope
                            });
                            $timeout(function () {
                                $scope.successCartModal.close();
                                $state.go('cart', {
                                    cartCity: $rootScope.citySpecific
                                });
                            }, 1000);


                        } else if (data.data.AddToCart[0].Status === 0 && data.data.AddToCart[0].Message == "This Package Is Allready In Cart") {
                            console.log("in else", data);
                            $uibModal.open({
                                animation: true,
                                templateUrl: 'views/modal/alreadyCart.html',
                                scope: $scope
                            });

                        } else if (data.data.AddToCart[0].Status === 0 && data.data.AddToCart[0].Message == "Invalid Package") {
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
        //seo
        console.log("$stateParams.dealspcity", $stateParams.dealspcity);

        if ($stateParams.dealspcity === "mumbai") {
            TemplateService.title = "Awesome Deals And Packages At Smaaash";
            TemplateService.description = "Great gaming and food deals clubbed at discounted prices. Have a whale of a time at Smaaash, Mumbai.";
            TemplateService.keywords = "deals and packages ";
        }
        if ($stateParams.dealspcity === "gurgaon-cyber-hub") {
            TemplateService.title = "Awesome Deals And Packages at Smaaash";
            TemplateService.description = "Great gaming and food deals clubbed at discounted prices. Have a whale of a time at Smaaash, Cyberhub, Gurgaon.";
            TemplateService.keywords = "gaming and food deals";
        }
        if ($stateParams.dealspcity === "ludhiana") {
            TemplateService.title = "Student Deals and Arcade Package at Ludhiana Adventure Arena";
            TemplateService.description = "Easy access with student college ID to top grade virtual reality games and zesty arcade gaming in Ludhiana with the most affordable deals, only at SMAAASH";
            TemplateService.keywords = "deal and packages, virtual reality games, virtual reality gaming, arcade gaming, games zones	";
        }
        if ($stateParams.dealspcity === "hyderabad") {
            TemplateService.title = "SMAAASH | A Lot More Than Just the Hub of Virtual Reality Gaming";
            TemplateService.description = "SMAAASH puts your convenience as its first priority and offers you best entertainment deals and packages in Hyderabad";
            TemplateService.keywords = "virtual reality gaming, deals and packages in Hyderabad, deal and packages, virtual reality games, virtual reality, virtual reality gaming";
        }
        if ($stateParams.dealspcity === "bengaluru") {
            TemplateService.title = "Awesome Deals And Packages At Smaaash";
            TemplateService.description = "Great gaming and food deals clubbed at discounted prices. Have a whale of a time at Smaaash, Bengaluru.";
            TemplateService.keywords = "gaming and food deals , deals and packages";
        }

        if ($stateParams.dealspcity === "gurgaon-sector-29") {
            TemplateService.title = "Great Deals on Go Karting at Gurgaon";
            TemplateService.description = "Enjoy enticing deals on go karting and food at Smaaash Sky Karting and the adjoining Pitstop Brewpub restaurant.";
            TemplateService.keywords = "go kart gurgaon, go kart racing, gokarting";
        }
        if ($stateParams.dealspcity === "noida") {
            TemplateService.title = "Lap up, Enticing Offers on Food and Games at Smaaash";
            TemplateService.description = "With mouthwatering offers on food and drinks, teamed up with smashing offers on virtual reality and other games, we  offer you the best you could crave for. ";
            TemplateService.keywords = "vr games, virtual reality games, virtual reality,virtual reality gaming";
        }
  if ($stateParams.dealspcity === "delhi") {
            TemplateService.title = "Awesome Deals And Packages at Smaaash";
            TemplateService.description = "gaming and food deals clubbed at discounted prices. Have a whale of a time at Smaaash, Delhi.";
            TemplateService.keywords = "gaming and food deals";
        }


    })

    .controller('StarsCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state, $stateParams, $uibModal) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("stars");
        $scope.menutitle = NavigationService.makeactive("Gallery");
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


        console.log('$stateParams.city', $stateParams.city);
        TemplateService.removeLoaderOn(2);
        $scope.objectfilter = {};
        $scope.objectfilter.pagenumber = 0;
        $scope.objectfilter.pagesize = 6;
        $scope.objectfilter.city = $.jStorage.get("cityid");
        $scope.noviewmore = true;
        $scope.stars = [];
        $scope.notAvailable = false;
        $scope.busy = false;
        $scope.fetchData = function () {
            if ($scope.busy) return;
            $scope.busy = true;
            $scope.objectfilter.pagenumber = $scope.objectfilter.pagenumber + 1;
            // NavigationService.getGallery($scope.objectfilter, function(data) {
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
        $scope.fetchSearchedData = function () {
            $scope.objectfilter.pagenumber = 0;
            $scope.objectfilter.pagesize = 6;
            $scope.stars = [];
            $scope.noviewmore = true;
            $scope.objectfilter.city = $scope.objectfilter.city;

            $scope.objectfilter.pagenumber = $scope.objectfilter.pagenumber + 1;
            NavigationService.getGallery($scope.objectfilter, function (data) {
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

        NavigationService.getMediaGallery(function (data) {
            $scope.mediagallery = data.data;
            console.log("$scope.mediagallery", $scope.mediagallery);
            TemplateService.removeLoader();
        });
        NavigationService.getCity(function (data) {
            $scope.allCity = data.data;
            console.log("allCity", $scope.allCity);
            // TemplateService.removeLoader();
        });
        $scope.showMediaGal = false;
        $scope.selectFun = function (value) {
            console.log("value", value);

        }

        $scope.mediagallerys = [
            // {
            //       image: 'img/new/13.png'
            //   },
            {
                image: 'img/sports/1 (1).jpg'
            }, {
                image: 'img/sports/1 (2).jpg'
            }, {
                image: 'img/sports/1 (3).jpg'
            }, {
                image: 'img/sports/1 (4).jpg'
            }, {
                image: 'img/sports/1 (5).jpg'
            }, {
                image: 'img/sports/1 (6).jpg'
            }, {
                image: 'img/sports/1 (7).jpg'
            }, {
                image: 'img/sports/1 (8).jpg'
            },
            //  {
            //     image: 'img/sports/1 (9).jpg'
            // },
            {
                image: 'img/sports/1 (10).jpg'
            }, {
                image: 'img/sports/1 (11).jpg'
            }, {
                image: 'img/sports/1 (12).jpg'
            }, {
                image: 'img/sports/1 (13).jpg'
            }, {
                image: 'img/sports/1.jpg'
            }, {
                image: 'img/sports/2 (1).jpg'
            }, {
                image: 'img/sports/2 (2).jpg'
            }, {
                image: 'img/sports/2 (3).jpg'
            }, {
                image: 'img/sports/2 (4).jpg'
            }, {
                image: 'img/sports/2 (5).jpg'
            }, {
                image: 'img/sports/2 (6).jpg'
            }, {
                image: 'img/sports/2 (7).jpg'
            },
            //  {
            //     image: 'img/sports/2 (8).jpg'
            // },
            {
                image: 'img/sports/2 (9).jpg'
            }, {
                image: 'img/sports/2 (10).jpg'
            }, {
                image: 'img/sports/2 (11).jpg'
            }, {
                image: 'img/sports/2 (12).jpg'
            }, {
                image: 'img/sports/2.jpg'
            }, {
                image: 'img/sports/3 (1).jpg'
            }, {
                image: 'img/sports/3 (2).jpg'
            }, {
                image: 'img/sports/3 (3).jpg'
            }, {
                image: 'img/sports/3 (4).jpg'
            }, {
                image: 'img/sports/3 (5).jpg'
            }, {
                image: 'img/sports/3 (6).jpg'
            }, {
                image: 'img/sports/3 (7).jpg'
            }, {
                image: 'img/sports/3.jpg'
            }, {
                image: 'img/sports/4 (1).jpg'
            }, {
                image: 'img/sports/4 (2).jpg'
            }, {
                image: 'img/sports/4 (3).jpg'
            }, {
                image: 'img/sports/4 (4).jpg'
            }, {
                image: 'img/sports/4 (5).jpg'
            }, {
                image: 'img/sports/4.jpg'
            }, {
                image: 'img/sports/5 (1).jpg'
            }, {
                image: 'img/sports/5 (2).jpg'
            }, {
                image: 'img/sports/5.jpg'
            }


        ];

        $scope.getEventGal = function (gallery) {
            console.log(gallery);
            $scope.galleryEvent = gallery;
            $uibModal.open({
                animation: true,
                templateUrl: "views/modal/event-smaash.html",
                scope: $scope
            });
        }

        $scope.eventsAtSmaaash = [{
            "event": "timetraialchampionship",
            "image": "img/timetraialchampionship/2.jpg",
            "title": "Time trial karting championship - Gurgaon Sec -29",
            "imgArr": ['img/timetraialchampionship/1.jpg', 'img/timetraialchampionship/2.jpg', 'img/timetraialchampionship/3.jpg', 'img/timetraialchampionship/10.jpg']
        }, {
            "event": "viratBenguluru",
            "image": "img/viratBenguluru/5K1B4238.jpg",
            "title": "Virat at Bengaluru",

            "imgArr": [
                'img/viratBenguluru/5K1B4283.jpg',
                'img/viratBenguluru/5K1B4288.jpg',
                'img/viratBenguluru/5K1B4290.jpg'
                // 'img/viratBenguluru/5K1B4384.jpg'
            ]
        }, {
            "event": "viratLudhiana",
            "image": "img/viratLudhiana/Virat In Ludhiana Smaaash (1).jpg",
            "title": "Virat at Ludhiana",

            "imgArr": [
                'img/viratLudhiana/image.jpeg',
                'img/viratLudhiana/Virat In Ludhiana Smaaash (3).jpg',
                'img/viratLudhiana/Virat In Ludhiana Smaaash (4).jpg',
                'img/viratLudhiana/Virat In Ludhiana Smaaash (5).jpg',
                'img/viratLudhiana/Virat In Ludhiana Smaaash (7).jpg'
            ]
        }]




        //seo

        console.log("$stateParams.city", $stateParams.city);
if ($stateParams.city === "delhi") {
            TemplateService.title = "Find Out What’s Brewing At Smaaash On Our Gallery";
            TemplateService.description = "See what’s hot at Smaaash, all the celebrity visits and events at Smaaash, Delhi.";
            TemplateService.keywords = "";
        }
        if ($stateParams.city === "gurgaon-ambience-mall") {
            TemplateService.title = "Find Out What’s Brewing At Smaaash On Our Gallery";
            TemplateService.description = "See what’s hot at Smaaash, all the celebrity visits and events at Smaaash, Ambience Mall, Gurgaon.";
            TemplateService.keywords = "";
        }
        if ($stateParams.city === "mumbai") {
            TemplateService.title = " Find Out What’s Brewing At Smaaash On Our Gallery";
            TemplateService.description = "See what’s hot at Smaaash, all the celebrity visits and events at Smaaash, Mumbai.";
            TemplateService.keywords = "";
        }
        if ($stateParams.city === "gurgaon-cyber-hub") {
            TemplateService.title = "Find Out What’s Brewing At Smaaash On Our Gallery";
            TemplateService.description = "See what’s hot at Smaaash, all the celebrity visits and events at Smaaash, Cyberhub, Gurgaon.";
            TemplateService.keywords = "";
        }
        if ($stateParams.city === "ludhiana") {
            TemplateService.title = "See for Yourself why SMAAASH is the Place Stars Visit";
            TemplateService.description = "Extraordinary virtual reality gaming experience and a celebrity-filled adventure arena captured. Visit, play, eat, drink, everything";
            TemplateService.keywords = "vr games, virtual reality games, virtual reality, virtual reality gaming, games zones";
        }
        if ($stateParams.city === "hyderabad") {
            TemplateService.title = "SMAAASH | Photos Tell our Star-Studded Stories of Fun Gaming ";
            TemplateService.description = "Leave behind your conception of a mainstream adventure arena and enter the future world with virtual reality gaming	";
            TemplateService.keywords = "fun gaming,game zone , game zone in hyderbad, virtual reality gaming, virtual reality";
        }
        if ($stateParams.city === "bengaluru") {
            TemplateService.title = "Find Out What’s New at Smaaash Bengaluru";
            TemplateService.description = "Check out the stars who have visited Smaaash Bengaluru, and gaze through the games that are hot in action.";
            TemplateService.keywords = "smaaash Bengaluru , Bengaluru smaaash";
        }

        if ($stateParams.city === "gurgaon-sector-29") {
            TemplateService.title = "A ThrowBack at the Go Karting Memories";
            TemplateService.description = "View all the action at Smaaash Sky Karting and Pitstop Brewpub, checkout which stars have visited and a lot more.";
            TemplateService.keywords = "go kart gurgaon, go kart racing, gokarting, things to do in Gurgaon";
        }
        if ($stateParams.city === "noida") {
            TemplateService.title = "What’s Hot at Smaaash Noida";
            TemplateService.description = "Check out what’s happening, the superstars who have visited Smaaash, Noida; pictures of the iconic virtual reality games, simulated sport etc. ";
            TemplateService.keywords = "vr games, virtual reality games, virtual reality, virtual reality gaming";
        }
        //seo


    })

    .controller('WeddingCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal, $stateParams) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("wedding-parties");
        $scope.menutitle = NavigationService.makeactive("PreWedding Parties");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.removeLoaderOn(1);
        NavigationService.getDetailExploreSmaaash($stateParams.id, function (data) {
            $scope.wedding = data.data;
            TemplateService.removeLoader();
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
        TemplateService.removeLoaderOn(1);
        $scope.moreDesc = {};
        $scope.menu = "menu-out";
        $scope.getMenu = function () {
            if ($scope.menu == "menu-out") {
                $scope.menu = "menu-in";
            } else {
                $scope.menu = "menu-out";
            }
        };

        $scope.date = new Date();

        $scope.showMore = false;

        $scope.myUrl = $location.absUrl();
        NavigationService.getSingleExploreSmaaash($stateParams.id, function (data) {
            $scope.SingleExploreSmaaash = data.data;
            $scope.SingleExploreSmaaash1 = _.chunk(data.data, 3);
            // console.log("$scope.SingleExploreSmaaash", $scope.SingleExploreSmaaash);
            TemplateService.removeLoader();
        });

        $scope.readMore = function (id, indexid) {

            console.log(id);
            _.each($scope.moreDesc, function (value, property) {
                // console.log("property",property);
                console.log("value", value);
                if (id != property) {
                    $scope.moreDesc[property] = false;
                }
            });
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


    .controller('LeaderCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("leader");
        $scope.menutitle = NavigationService.makeactive("Leadership");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.menu = "menu-out";
        TemplateService.removeLoaderOn(1);
        $scope.getMenu = function () {
            if ($scope.menu == "menu-out") {
                $scope.menu = "menu-in";
            } else {
                $scope.menu = "menu-out";
            }
        };
        // if ($stateParams.leaderCity) {
        //     $stateParams.leaderCity = $.jStorage.get("city");
        //     $state.go("leader", {
        //         leaderCity: $stateParams.leaderCity
        //     });
        // }

        $scope.moreDesc = {};
        NavigationService.getLeader(function (data) {
            $scope.leadership = data.data;
            console.log("leadership", $scope.leadership);

            TemplateService.removeLoader();
        })

        $scope.readMore = function (id, indexid) {

            console.log(id);
            _.each($scope.moreDesc, function (value, property) {
                // console.log("property",property);
                console.log("value", value);
                if (id != property) {
                    $scope.moreDesc[property] = false;
                }
            });
            $scope.moreDesc[id] = ($scope.moreDesc[id] == true) ? false : true;
            console.log($scope.moreDesc);
            $scope.myDesc = _.find($scope.leadership, function (n) {
                return n._id == id;

            }).description;
        };


    })

    .controller('AttractionCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $uibModal, $filter, $state, $rootScope) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("attractions");
        $scope.menutitle = NavigationService.makeactive("Attractions");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.removeLoaderOn(1);
        $scope.menu = "menu-out";
        console.log("window.location.href", window.location.href.split('/').slice(-1)[0]);
        $scope.getMenu = function () {
            if ($scope.menu == "menu-out") {
                $scope.menu = "menu-in";
            } else {
                $scope.menu = "menu-out";
            }
        };
        //seo

        console.log("$stateParams.gamesCity", $stateParams.gamesCity);

        if ($stateParams.gamesCity === "mumbai") {
            TemplateService.title = "Awesome Games and Attractions Grip You at Smaaash";
            TemplateService.description = "Experience out of the box entertainment with dreamlike virtual reality attractions, engaging simulative sports and other games, only at Smaaash, Mumbai.";
            TemplateService.keywords = "go karting,  bowling in Mumbai , cricket simulator games";
        }
        if ($stateParams.gamesCity === "gurgaon-cyber-hub") {
            TemplateService.title = "Awesome Games and Attractions Grip You at Smaaash";
            TemplateService.description = "Experience out of the box entertainment with dreamlike virtual reality attractions, engaging simulative sports and other games, at Smaaash, Cyberhub, Gurgaon.";
            TemplateService.keywords = "VR game, virtual reality, Play cricket , Bowling Gurgaon ,VR games, bowling in  Gurgaon";
        }
        if ($stateParams.gamesCity === "ludhiana") {
            TemplateService.title = "Engage in Virtual Reality Gaming and More| SMAAASH Ludhiana";
            TemplateService.description = "Experience a gaming dimension like you have never before with virtual reality, while alongside exploring advanced technology";
            TemplateService.keywords = "vr games, virtual reality games, virtual reality, virtual reality gaming, games zones";
        }
        if ($stateParams.gamesCity === "hyderabad") {
            TemplateService.title = "Next on Your List of Top Hyderabad Gaming Zones";
            TemplateService.description = "Extend your to-do list for Hyderabad. Introducing SMAAASH, a one-stop destination for gaming, food, drinks, and parties";
            TemplateService.keywords = "top Hyderabad gaming zones, Hyderabad gaming zones, gaming zones,game zone";
        }
        if ($stateParams.gamesCity === "bengaluru") {
            TemplateService.title = "Awesome Games and Attractions Grip You at Smaaash";
            TemplateService.description = "Experience out of the box entertainment with dreamlike virtual reality attractions, engaging simulative sports and other games, only at Smaaash, Bengaluru.";
            TemplateService.keywords = "virtual reality games,virtual reality gaming";
        }
        //snehal changes
        //    console.log("$stateParams.gamesCity",$stateParams.gamesCity);
        if ($stateParams.gamesCity === "gurgaon-sector-29") {
            TemplateService.title = "Go Karting Paradise and Pool Topped with Great Food";
            TemplateService.description = "Enjoy Sky Karting, race your opponents, let them smell the rubber from your tires, play pool and later cool off with some sumptuous food and drinks.";
            TemplateService.keywords = "go kart racing, gokarting";
        }
        if ($stateParams.gamesCity === "gurgaon-ambience-mall") {
            TemplateService.title = "Awesome Games and Attractions Grip You at Smaaash";
            TemplateService.description = "Experience out of the box entertainment with dreamlike virtual reality attractions, engaging simulative sports and games, at Smaaash, Ambience Mall,Gurgaon.";
            TemplateService.keywords = "VR game, virtual reality";
        }
        if ($stateParams.gamesCity === "noida") {
            TemplateService.title = "Next-generation VR games, Get Your Act, On at Smaaash";
            TemplateService.description = "Go berserk on some awesome futuristic virtual reality games along with intensive cricket simulators, bowling in Noida and much more. ";
            TemplateService.keywords = "VR games, Virtual reality games, Cricket Simulators , Bowling in Noida	";
        }
        if ($stateParams.gamesCity === "delhi") {
            TemplateService.title = "Awesome Games and Attractions Grip You at Smaaash";
            TemplateService.description = "Experience out of the box entertainment with dreamlike virtual reality attractions, engaging simulative sports and other games, only at Smaaash, Delhi.";
            TemplateService.keywords = "VR game, virtual reality";
        }

        //seo


        console.log("$stateParams.id", $stateParams.id);


        if ($stateParams.gamesCity) {
            $scope.filter = {};
            NavigationService.getCity(function (data) {
                $scope.getCities = _.cloneDeep(data.data);
                console.log("$scope.getCities ", $scope.getCities);
                $scope.tempCity = _.find($scope.getCities, function (obj) {
                    return obj.myslug == $stateParams.gamesCity;
                });


                $scope.male = '';
                $scope.female = '';
                $scope.children = '';

                $scope.filter.city = $scope.tempCity._id;
                $scope.filter._id = $stateParams.id;
                $scope.filter.myslug = $stateParams.id;
                $scope.msg = false;
                $scope.singleAttraction1 = [];
                $scope.singleAttraction = [];
                $scope.goTOSearch = function (filter) {

                    NavigationService.searchExploreSmaaash($scope.filter, function (data) {
                        $scope.singleAttraction = $filter('orderBy')(data.data, '-order');
                        $scope.temparr = [];
                        $scope.temparr1 = [];

                        _.each(data.data, function (key) {
                            console.log("key", key);
                            if (key.order === null) {
                                if (key.status) {
                                    $scope.temparr1.push(key);
                                }


                                console.log("$scope.temparr", $scope.temparr);
                            } else {
                                if (key.status) {
                                    $scope.temparr.push(key);
                                    console.log("$scope.temparr", $scope.temparr1);
                                }

                            }
                            // if (key.order) {
                            //
                            //   $scope.temparr.push(key);
                            //   console.log("$scope.temparr",$scope.temparr);
                            // }else if (key.order === null) {
                            //     $scope.temparr1.push(key);
                            //     console.log("$scope.temparr",$scope.temparr1);
                            // }

                            $scope.singleAttraction1 = $filter('orderBy')($scope.temparr, '-order');
                            $scope.singleAttraction1 = $scope.singleAttraction1.concat($scope.temparr1);
                            $scope.singleAttraction1 = _.chunk($scope.singleAttraction1, 3);
                            if ($scope.singleAttraction1.length === 0) {
                                console.log("imin");
                                $scope.msg = true;
                            } else {
                                $scope.msg = false;
                            }


                        })


                        // _.each($scope.singleAttraction1, function(data) {
                        //   console.log("data",data);
                        //   _.each(data,function(n){
                        //     console.log("n",n);
                        //     n.gameforarray = [];
                        //     _.each(data.gamefor, function(n) {
                        //         switch (n) {
                        //             case '1':
                        //                 n.gameforarray.push('Adult')
                        //                     // data.gameforarray.push('Male')
                        //                 break;
                        //                 // case '2':
                        //                 //     data.gameforarray.push('Female')
                        //                 //     break;
                        //             case '3':
                        //                 n.gameforarray.push('Kids')
                        //                     // data.gameforarray.push('Children')
                        //                 break;
                        //             default:
                        //         }
                        //     });
                        //   })
                        //
                        // });
                        _.each($scope.singleAttraction, function (data) {
                            data.gameforarray = [];
                            _.each(data.gamefor, function (n) {
                                switch (n) {
                                    case '1':
                                        data.gameforarray.push('Adult')
                                        // data.gameforarray.push('Male')
                                        break;
                                    // case '2':
                                    //     data.gameforarray.push('Female')
                                    //     break;
                                    case '3':
                                        data.gameforarray.push('Kids')
                                        // data.gameforarray.push('Children')
                                        break;
                                    default:
                                }
                            });
                        });
                        TemplateService.removeLoader();

                    });
                }
                $scope.goTOSearch($scope.filter);
            });


        } else {
            $scope.filter.city = $.jStorage.get("cityid");
        }






        $scope.moreDesc = {};
        // $scope.male = '';
        // $scope.female = '';
        // $scope.children = '';
        // $scope.filter = {};
        // // $scope.filter._id = $stateParams.id;
        // $scope.filter.myslug = $stateParams.id;
        // $scope.msg = false;
        // $scope.singleAttraction1 = [];
        // $scope.singleAttraction = [];
        // $scope.goTOSearch = function(filter) {
        //
        //     NavigationService.searchExploreSmaaash($scope.filter, function(data) {
        //         $scope.singleAttraction = $filter('orderBy')(data.data, '-order');
        //         $scope.singleAttraction = data.data;
        //         $scope.singleAttraction1 = $filter('orderBy')(data.data, '-order');
        //         $scope.singleAttraction1 = _.chunk($scope.singleAttraction1, 3);
        //         if ($scope.singleAttraction1.length === 0) {
        //             console.log("imin");
        //             $scope.msg = true;
        //         } else {
        //             $scope.msg = false;
        //         }
        //
        //         _.each($scope.singleAttraction, function(data) {
        //             data.gameforarray = [];
        //             _.each(data.gamefor, function(n) {
        //                 switch (n) {
        //                     case '1':
        //                         data.gameforarray.push('Adult')
        //                             // data.gameforarray.push('Male')
        //                         break;
        //                         // case '2':
        //                         //     data.gameforarray.push('Female')
        //                         //     break;
        //                     case '3':
        //                         data.gameforarray.push('Kids')
        //                             // data.gameforarray.push('Children')
        //                         break;
        //                     default:
        //                 }
        //             });
        //         });
        //         TemplateService.removeLoader();
        //
        //     });
        // }
        // $scope.goTOSearch($scope.filter);
        $scope.readMore = function (id, indexid) {

            console.log(id);
            _.each($scope.moreDesc, function (value, property) {
                console.log("property", property);
                if (id != property) {
                    $scope.moreDesc[property] = false;
                }
            });
            $scope.moreDesc[id] = ($scope.moreDesc[id] == true) ? false : true;
            console.log($scope.moreDesc);
            $scope.myDesc = _.find($scope.singleAttraction, function (n) {
                return n._id == id;

            }).description;
        };

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

        $scope.goTo = function (id) {

            if (id) {
                // $scope.name = name.replace(/(?!\w|\s)./g, '').replace(/\s/g, '').replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2').toLowerCase();
                $state.go('snow-rush', {
                    // name: $scope.name,
                    id: id,
                    snowrushCity: $rootScope.citySpecific
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


        $scope.buyNowGames = function (BranchPackageID, price, mobile) {

            $scope.gamesParams.BranchPackageID = BranchPackageID;
            // $scope.gamesParams.BranchPackageID = "41";
            // $scope.gamesParams.TotalAmount = "222";
            $scope.gamesParams.TotalAmount = price;


            console.log("$scope.gamesParams", $scope.gamesParams);
            if ($.jStorage.get("loginDetail") === null) {
                $rootScope.getMenus();
                if (mobile) {
                    $rootScope.signinModal();
                }
            } else {
                NavigationService.addToCart($scope.gamesParams, function (data) {
                    console.log("$scope.gamesParams", $scope.gamesParams);
                    if (data.value) {

                        if (data.data.AddToCart[0].Status === 1) {
                            console.log("inif", data);
                            $scope.successCartModal = $uibModal.open({
                                animation: true,
                                templateUrl: 'views/modal/addtocart.html',
                                scope: $scope
                            });
                            $timeout(function () {
                                $scope.successCartModal.close();
                                $state.go('cart', {
                                    cartCity: $rootScope.citySpecific
                                });
                            }, 1000);


                        } else if (data.data.AddToCart[0].Status === 0 && data.data.AddToCart[0].Message == "This Package Is Allready In Cart") {
                            console.log("in else", data);
                            $uibModal.open({
                                animation: true,
                                templateUrl: 'views/modal/alreadyCart.html',
                                scope: $scope
                            });

                        } else if (data.data.AddToCart[0].Status === 0 && data.data.AddToCart[0].Message == "Invalid Package") {
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

    .controller('AccountCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("account");
        $scope.menutitle = NavigationService.makeactive("Account");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })


    .controller('CartsCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal, $rootScope, $stateParams, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("cart");
        $scope.menutitle = NavigationService.makeactive("Cart");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        // if ($stateParams.cartCity) {
        //     $stateParams.cartCity = $.jStorage.get("city");
        //     $state.go("cart", {
        //         cartCity: $stateParams.cartCity
        //     });
        // }

        $scope.onlyNumbers = "^[1-9][0-9]*$";
        $scope.isDisabledCheckOut = false;
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
        $scope.isLoading = false;






        $scope.showCartParams.CustomerMobileNo = $.jStorage.get("loginDetail").CustomerMobile;
        $scope.showCartParams.CustomerID = $.jStorage.get("loginDetail").CustomerID;
        console.log("$scope.showCartParams", $scope.showCartParams);
        $scope.showCartFunction = function () {
            $scope.cartDetails = [];
            NavigationService.showCartPackage($scope.showCartParams, function (data) {
                console.log("data", data);
                // console.log("$scope.showCartParams", $scope.showCartParams);
                // console.log("data", data.data.CustomerCartItem);
                if (data.value) {
                    _.each(data.data, function (key) {
                        if (key.Status == '1') {
                            $scope.cartDetails.push(key);
                        } else {
                            $scope.showMsg = key.Message;
                            $scope.isLoading = true;
                        }
                    })
                    if ($scope.cartDetails.length > 0) {
                        $scope.isLoading = true;
                        _.each($scope.cartDetails, function (val) {
                            val.subTotal = val.TotalAmount * val.NoOfAdult;
                        });
                        // =============CheckOutPackage===========
                        var result = $scope.cartDetails.map(function (a) {
                            return a.CartItemID;
                        });
                        $scope.checkoutParams.CartItemIDs = result.join();
                        console.log($scope.checkoutParams, "$scope.checkoutParams");
                        $scope.checkOutFunction = function () {
                            console.log("im in checkout function");
                            $scope.isDisabledCheckOut = true;
                            NavigationService.CheckOutCart($scope.checkoutParams, function (data) {
                                console.log($scope.checkoutParams, "$scope.checkoutParams");
                                console.log("in CheckOutCart", data);
                                if (data.value && data.data.CheckOutCartPackage[0].Status == 1) {
                                    window.location = data.data.CheckOutCartPackage[0].Link;
                                } else if (data.data.ErrorStatus[0].Status == 0) {
                                    console.log("im in", data);
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
                    $scope.editMyCart = function (cartItem, custid, noOfAdults, noOfsenior, noofChild, index) {
                        $scope.editcartDetails.NoOfAdults = noOfAdults;
                        // $scope.editcartDetails.NoOfChild = noofChild;
                        // $scope.editcartDetails.NoOfSenior = noOfsenior;
                        // $scope.editcartDetails.APIKey = 'afa35e6d32a54d64962a78ccf28c140017636054922421850805185';
                        $scope.editcartDetails.CartItemID = cartItem;
                        $scope.editcartDetails.CustomerID = custid;
                        $scope.editcartDetails.CustomerMobileNo = $.jStorage.get("loginDetail").CustomerMobile;
                        if ($scope.editcartDetails.NoOfAdults === undefined || $scope.editcartDetails.NoOfAdults == null) {
                            console.log("im undefined");
                            $scope.unDefined = true
                        } else {
                            $scope.unDefined = false;
                        }
                        $scope.cartDetails[index].subTotal = $scope.editcartDetails.NoOfAdults * $scope.cartDetails[index].TotalAmount;
                        if ($scope.editcartDetails.NoOfAdults) {
                            NavigationService.editCartPackage($scope.editcartDetails, function (data) {
                                if (data.value && data.data.EditCartPackage[0].Status === 1) {
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
                    $scope.isCartEmty = true;
                    $scope.isLoading = true;
                    $scope.cartDetails = [];
                    $scope.CartIsEmpty = data.data.SelectCartError[0].Message;
                }
            })
        }
        $scope.showCartFunction();


        // ============RemoveCartFunction=============
        $scope.removePackage = function (CartItemID) {
            $scope.removeCartParams.CustomerMobileNo = $.jStorage.get("loginDetail").CustomerMobile;
            $scope.removeCartParams.CustomerID = $.jStorage.get("loginDetail").CustomerID;;
            $scope.removeCartParams.CartItemID = CartItemID;
            NavigationService.removeCartPackage($scope.removeCartParams, function (data) {
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


    .controller('WishlistCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("wishlist");
        $scope.menutitle = NavigationService.makeactive("Wishlist");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.removeLoaderOn(1);

    })

    .controller('KittyCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $rootScope, $uibModal, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("parties");
        $scope.menutitle = NavigationService.makeactive("Parties");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.removeLoaderOn(1);
        NavigationService.getCity(function (data) {
            $scope.getCities = data.data;
            if ($stateParams.partyCity) {
                $scope.tempCity = _.find($scope.getCities, function (key) {
                    return key.myslug === $stateParams.partyCity;
                })
                NavigationService.getPartyInside($stateParams.id, $scope.tempCity._id, function (data) {
                    $scope.party = data.data;
                    if (_.isEmpty($scope.party) || Object.keys($scope.party).length == 0) {
                        console.log("im true");
                        $state.go('home');
                    }
                    console.log("$scope.party", $scope.party);
                    TemplateService.removeLoader();

                });
            }

        });

        // if ($stateParams.partyCity) {
        //     $stateParams.partyCity = $.jStorage.get("city");
        //     $state.go("parties", {
        //         partyCity: $stateParams.partyCity
        //     });
        // };
        console.log("citySpecific", $rootScope.citySpecificName);
        $scope.kittyParty = function (value) {
            console.log("value", value);
            if (value) {
                switch (value) {
                    case 'Birthday Party':
                        $scope.partyName = 'Birthday or Anniversary';
                        break;
                    case 'Corporate Parties':
                        $scope.partyName = 'Corporate';
                        break;
                    case 'Pre - wedding  Party':
                        $scope.partyName = 'Engagement, Wedding or Reception';
                        break;
                    case 'Kitty Parties':
                        $scope.partyName = 'Social';
                        break;

                    case 'Team Building Events':
                        console.log("im in team building");
                        $scope.partyName = 'Corporate';
                        break;
                    default:

                }


            }

            $scope.modalInstance = $uibModal.open({
                animation: true,
                templateUrl: "views/modal/enquiry.html",
                scope: $scope

            })
        };
        $scope.enquiryData = {};
        $scope.formSubmit = function (enquiryData) {
            if (enquiryData) {
                enquiryData.city = $.jStorage.get("cityid");
                NavigationService.eventInnerForm(enquiryData, function (data) {
                    if (data.value === true) {
                        $scope.formComplete = true;
                        console.log("in in if ");
                        $timeout(function () {
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



        //seo
            //corporate-2
              if ($stateParams.partyCity === "mumbai" && $stateParams.id === "corporate-parties-2") {
            TemplateService.title = "Get Out Of Cubicle & Let Loose With Smaaash ";
            TemplateService.description = "Break the monotony and get ready to have a blast with your work buddies. Host corporate parties with Smaaash & have a fun beating your boss, at the game.";
            TemplateService.keywords = "corporate events, corporate parties";
        }
             //corporate-3
              if ($stateParams.partyCity === "gurgaon-ambience-mall" && $stateParams.id === "corporate-parties-3") {
            TemplateService.title = " Get Out Of Cubicle & Let Loose With Smaaash";
            TemplateService.description = "Break the monotony and get ready to have a blast with your work buddies. Host corporate parties in Gurgaon with Smaaash & enjoy beating your boss, at the game.";
            TemplateService.keywords = "corporate parties in Gurgaon, corporate parties";
        }   
         //corporate-4
              if ($stateParams.partyCity === "delhi" && $stateParams.id === "corporate-parties-4") {
            TemplateService.title = "Get Out Of Cubicle & Let Loose With Smaaash ";
            TemplateService.description = "Break the monotony and get ready to have a blast with your work buddies. Host corporate parties in Delhi with Smaaash & have fun beating your boss, at the game.";
            TemplateService.keywords = "corporate parties in Delhi, corporate parties";
        }
        //corporate
        console.log("$stateParams.partyCity", $stateParams.partyCity);

        if ($stateParams.partyCity === "mumbai" && $stateParams.id === "corporate-parties") {
            TemplateService.title = "Uncork August Corporate Parties ";
            TemplateService.description = "Smaaash has plug and play facilities for uncanny corporate parties, right from corporate events, company offsites, team outings and team building activities. ";
            TemplateService.keywords = "corporate party,corporate parties,corporate event venues,corporate events,venue for corporate events";
        }
        if ($stateParams.partyCity === "gurgaon-cyber-hub" && $stateParams.id === "corporate-parties") {
            TemplateService.title =  "Get Out Of Cubicle & Let Loose With Smaaash";
            TemplateService.description = "aBreak the monotony and get ready to have a blast with your work buddies. Host corporate events & parties with Smaaash & have fun beating your boss, at the game. ";
            TemplateService.keywords = "corporate events, corporate parties";
        }
        if ($stateParams.partyCity === "ludhiana" && $stateParams.id === "corporate-parties") {
            TemplateService.title = "Boring Corporate Events are Now only an Oxymoron| SMAAASH";
            TemplateService.description = "You can have fun with your office colleagues outside the office as well. Host/attend corporate parties and exhaust yourself with enjoyment	";
            TemplateService.keywords = "corporate party, corporate parties, corporate event venues, corporate events, venue for corporate events	";
        }
        if ($stateParams.partyCity === "hyderabad" && $stateParams.id === "corporate-parties") {
            TemplateService.title = "SMAAASH | End Your Hunt for a Suitable Corporate Events Venue ";
            TemplateService.description = "Dynamic corporate party venue now in your city, Hyderabad. Remove ‘boring’ from your dictionary";
            TemplateService.keywords = "corporate party, corporate parties, corporate event venues, corporate events, venue for corporate events, corporate party venues";
        }
        if ($stateParams.partyCity === "bengaluru" && $stateParams.id === "corporate-parties") {
            TemplateService.title = "Host Fun Filled Corporate Parties";
            TemplateService.description = "Get out of cubicle & let loose with Smaaash- Break the monotony and get ready to have a blast with your work buddies. Host parties with Smaaash & have fun beating your boss, at the game.";
            TemplateService.keywords = "corporate parties";
        }

        if ($stateParams.partyCity === "gurgaon-sector-29" && $stateParams.id === "corporate-parties") {
            TemplateService.title = "Corporate Parties, the Zippy Style";
            TemplateService.description = "Company offsite, corporate event or team building activities and a lot more could be hosted at Smaaash Sky Karting and Pitstop Brewpub.";
            TemplateService.keywords = "Corporate parties, company offsite, corporate events, team building activities";
        }
 
        //corporate
         //birthday-2

 if ($stateParams.partyCity === "gurgaon-ambience-mall" && $stateParams.id === "birthday-party-2") {
            TemplateService.title = "Make Your Special Day Even More Special";
            TemplateService.description = "With Smaaash you get to host some of the best birthday parties in Gurgaon. So put on your party caps and gear up to have a grand birthday party, Gurgaon!";
            TemplateService.keywords = "birthday parties in Gurgaon, birthday party";
        }
        //birthday

        console.log("$stateParams.partyCity", $stateParams.partyCity);
      
        if ($stateParams.partyCity === "mumbai" && $stateParams.id === "birthday-party") {
            TemplateService.title = "Make Your Special Day Even More Special";
            TemplateService.description = "With Smaaash you get to host some of the best birthday parties in Mumbai. So put on your party caps and gear up to have a grand birthday party, Mumbai!";
            TemplateService.keywords = "birthday party, birthday parties in Mumbai";
        }
        if ($stateParams.partyCity === "gurgaon-cyber-hub" && $stateParams.id === "birthday-party") {
            TemplateService.title = "Make Your Special Day Even More Special";
            TemplateService.description = "With Smaaash you get to host some of the best birthday party place in Gurgaon. So put on your party caps and gear up to have a great birthday party!";
            TemplateService.keywords = "party place in Gurgaon, birthday party";
        }
        if ($stateParams.partyCity === "ludhiana" && $stateParams.id === "birthday-party") {
            TemplateService.title = "Perfect Place and Packages for a Birthday Party| SMAAASH";
            TemplateService.description = "SMAAASH makes your special day even more special with offers and deals only for you. Throw the most vibrant birthday party here";
            TemplateService.keywords = "Birthday parties, birthday party, Birthday parties venues, Birthday parties venue, venues for birthday parties , venues for birthday party, Birthday party venues, birthday celebration places";
        }
        if ($stateParams.partyCity === "hyderabad" && $stateParams.id === "birthday-party") {
            TemplateService.title = "Throw Your Birthday Party in Hyderabad with SMAAASH";
            TemplateService.description = "Try a new birthday party venue in Hyderabad and have a smashing time with your friends and family";
            TemplateService.keywords = "birthday party in Hyderabad, birthday party venue in Hyderabad , party places, party places in hyderabad	";
        }
        if ($stateParams.partyCity === "bengaluru" && $stateParams.id === "birthday-party") {
            TemplateService.title = "Make Your Special Day Even More Special";
            TemplateService.description = "With Smaaash you get to host some of the best birthday parties in Bengaluru. So put on your party  caps and gear up to have a grand birthday party, Bengaluru!";
            TemplateService.keywords = "birthday parties in Bengaluru, birthday party";
        }

        if ($stateParams.partyCity === "gurgaon-sector-29" && $stateParams.id === "birthday-party") {
            TemplateService.title = "Birthday Party on the Fast Track";
            TemplateService.description = "Birthday parties never got this happening as you go kart  with your friends and enjoy scrumptious food and drinks at Smaaash Sky Karting and Pitstop Brewpub.";
            TemplateService.keywords = "Birthday parties,birthday party,Birthday parties venues,Birthday parties venue,venues for birthday parties ,venues for birthday party,Birthday party venues, birthday celebration places";
        }
        if ($stateParams.partyCity === "noida" && $stateParams.id === "birthday-party") {
            TemplateService.title = "Birthday Parties, Noida Get a Twist at Smaaash, Noida";
            TemplateService.description = "Birthday parties, Noida get a whacky makeover at Smaaash, with all the exciting virtual reality games, simulated sport, food and drinks to enjoy.";
            TemplateService.keywords = "Birthday parties Noida, Birthday parties Noida, virtual reality games";
        }
         if ($stateParams.partyCity === "delhi" && $stateParams.id === "birthday-parties") {
            TemplateService.title = "Host A Party Like Never Before";
            TemplateService.description = "Make your special day even more special- With Smaaash you get to host some of the best birthday parties in Delhi. So put on your party caps and gear up to have a grand birthday party, Delhi!";
            TemplateService.keywords = "birthday parties in Delhi , birthday parties ";
        }
        //birthday

        //pre-wedding-party

        // console.log("$stateParams.partyCity", $stateParams.partyCity);


        if ($stateParams.partyCity === "hyderabad" && $stateParams.id === "pre-wedding-party") {
            TemplateService.title = "SMAAASH | Make Your Pre Wedding Party Memorable ";
            TemplateService.description = "Let your last night as a free man/woman turn into the most smashing pre wedding party that other bachelor(ettes) would envy";
            TemplateService.keywords = "pre wedding party, prewedding party , prewedding parties";
        }

        if ($stateParams.partyCity === "bengaluru" && $stateParams.id === "pre-wedding-parties") {
            TemplateService.title = "Pre-Wedding Parties Get Naughty at Smaaash ";
            TemplateService.description = "Enjoy your last days of freedom with crazy excitement. Play VR games, simulated sport and treat your friends and families to sumptuous delicacies and drinks.";
            TemplateService.keywords = "Pre-wedding parties, VR games , pre wedding party, prewedding party";
        }
        if ($stateParams.partyCity === "noida" && $stateParams.id === "pre-wedding-party") {
            TemplateService.title = " The Excitement Never Stops at Smaaash Pre-Wedding Parties";
            TemplateService.description = "Your pre-wedding party should boast of great memories which you can hold for lifetime. At Smaaash you get exactly that, great VR games, sports, food and drinks.";
            TemplateService.keywords = "Pre-wedding parties,  pre-wedding party";
        }
        if ($stateParams.partyCity === "ludhiana" && $stateParams.id === "pre-wedding-party") {
            TemplateService.title = "Cut Loose at Your Pre-Wedding Party at Smaaash";
            TemplateService.description = "VR games like Finger Coaster, simulated sport like cricket will keep your pre-wedding party, action packed. There’s sumptuous food and drinks to top it off. ";
            TemplateService.keywords = "Pre-wedding parties,  pre-wedding party,  VR games";
        }
        if ($stateParams.partyCity === "mumbai" && $stateParams.id === "pre-wedding-party") {
            TemplateService.title = "Host the Most Happening Pre-Wedding Parties at Smaaash";
            TemplateService.description = "Enjoy your last days of freedom with some verve and excitement. Pool in with friends play games, eat, drink and make your pre-wedding party a hit. ";
            TemplateService.keywords = "pre wedding party, prewedding party , prewedding parties";
        }
        if ($stateParams.partyCity === "gurgaon-cyber-hub" && $stateParams.id === "pre-wedding-party") {
            TemplateService.title = "Host Sinful Pre-Wedding Parties at Smaaash, Gurgaon";
            TemplateService.description = "Bring in your friends for one of the most memorable times of your life. Host your pre-wedding party with awesome games, food and drinks. ";
            TemplateService.keywords = "pre wedding party, prewedding parties";
        }
        //pre-wedding-party


        //corprate

        // console.log("$stateParams.partyCity", $stateParams.partyCity);


        if ($stateParams.partyCity === "gurgaon-cyber-hub" && $stateParams.id === "corporate-party") {
            TemplateService.title = "Loosen Your Ties, Corporate Events Uncorked at Smaaash ";
            TemplateService.description = "A sizzling venue for corporate events, this is a place you go all out on food, drinks, games and thrills, with your office buddies.  ";
            TemplateService.keywords = "corporate party,corporate parties,corporate event venues,corporate events,venue for corporate events";
        }

        if ($stateParams.partyCity === "noida" && $stateParams.id === "corporate-parties") {
            TemplateService.title = "Rocking Corporate Parties UnFurled at Smaaash, Noida";
            TemplateService.description = "Corporate parties take a detour at Smaaash as you enjoy in the most unconventional fashion. Look no more for team outing places or venue for corporate events.";
            TemplateService.keywords = "corporate parties, corporate parties, team outing places, venue for corporate events";
        }

        //corprate


        //kitty-parties

        // console.log("$stateParams.partyCity", $stateParams.partyCity);


        if ($stateParams.partyCity === "hyderabad" && $stateParams.id === "kitty-parties") {
            TemplateService.title = "SMAAASH | Don’t Adhere to a Typical Kitty Party Format ";
            TemplateService.description = "Who said women only gossip at kitty parties? Whoever did has certainly not seen a real one. Right back at them, at SMAAASH Hyderabad ladies special";
            TemplateService.keywords = "kitty party, kitty parties, kitty party venues in hyderabad	";
        }
        //snehal
        if ($stateParams.partyCity === "mumbai" && $stateParams.id === "kitty-parties") {
            TemplateService.title = "Kitty Parties are Now Exciting at Smaaash";
            TemplateService.description = "Gals, host your kitty parties with a twist at Smaaash. Play virtual reality games, simulated sport and then chill and gossip over food and drinks.";
            TemplateService.keywords = "Kitty parties, virtual reality games , kitty party";
        }
        if ($stateParams.partyCity === "noida" && $stateParams.id === "kitty-parties") {
            TemplateService.title = "Kitty Parties Rock at Smaaash, Noida  ";
            TemplateService.description = " Your girl gang will be the talk of town when you host your kitty parties in unconventional style at Smaaash with VR games, sports, great food and ambience. ";
            TemplateService.keywords = "Kitty parties, kitty parties,  VR games";
        }
        //  console.log("$stateParams.partyCity", $stateParams.partyCity);
        if ($stateParams.partyCity === "ludhiana" && $stateParams.id === "kitty-parties") {
            TemplateService.title = "All Gals Jovial Kitty Parties at Smaaash, Ludhiana";
            TemplateService.description = "Gals put your party hats on and come down to Smaaash for some awesome kitty party fun. You could always gossip over sumptuous food and drinks to chill.";
            TemplateService.keywords = "kitty parties,  kitty party";
        }
        if ($stateParams.partyCity === "gurgaon-cyber-hub" && $stateParams.id === "kitty-party") {
            TemplateService.title = "Get Your Girl Gang And Set The Mood For A Kitty Party Night!";
            TemplateService.description = "Unlimited gossip while you sip on your favourite drinks with your favourite ladies.  Host amazing kitty parties with Smaaash and have a splendid night!";
            TemplateService.keywords = "kitty party, kitty parties";
        }
        if ($stateParams.partyCity === "bengaluru" && $stateParams.id === "kitty-party") {
            TemplateService.title = " Host a party-Kitty party";
            TemplateService.description = "Get your girl gang and set the mood for a kitty party night!- Unlimited gossip while you sip on your favourite drinks with your favourite ladies.  Host kitty parties in Bengaluru with Smaaash and have a splendid night!";
            TemplateService.keywords = "kitty party";
        }
        //kitty-parties
     //kitty-parties-2
       if ($stateParams.partyCity === "gurgaon-ambience-mall" && $stateParams.id === "kitty-party-2") {
            TemplateService.title = "Get Your Girl Gang And Set The Mood For A Kitty Party Night!";
            TemplateService.description = "Unlimited gossip while you sip on your favourite drinks with your favourite ladies.  Host kitty parties with Smaaash and have a splendid night!";
            TemplateService.keywords = "kitty parties, kitty party";
        }
          //kitty-parties-3
       if ($stateParams.partyCity === "delhi" && $stateParams.id === "kitty-party-3") {
            TemplateService.title = "Get Your Girl Gang And Set The Mood For A Kitty Party Night!";
            TemplateService.description = "Unlimited gossip while you sip on your favourite drinks with your favourite ladies.  Host kitty parties in Delhi with Smaaash and have a splendid night!";
            TemplateService.keywords = "kitty party, kitty parties in Delhi";
        }
        //pre-wedding-parties
           if ($stateParams.partyCity === "bengaluru" && $stateParams.id === "pre-wedding-parties") {
            TemplateService.title = "Pre-Wedding Parties- Have A Cool Pre-Wedding Party & Have A Smaaashing Night! ";
            TemplateService.description = "  Celebrate your last night as a bachelor with your buddies and make the most of it. Smaaash helps you host an extravagant pre-wedding party!";
            TemplateService.keywords = "pre-wedding party, pre-wedding parties";
        }  
          if ($stateParams.partyCity === "mumbai" && $stateParams.id === "pre-wedding-Party") {
            TemplateService.title = "Have A Cool Pre-Wedding Party & Have A Smaaashing Night!";
            TemplateService.description = "Celebrate your last night as a bachelor with your buddies and make the most of it. Smaaash helps you host an extravagant pre-wedding party in Mumbai!";
            TemplateService.keywords = "pre-wedding party, pre-wedding parties";
        }
         if ($stateParams.partyCity === "gurgaon-cyber-hub" && $stateParams.id === "pre-wedding-party") {
            TemplateService.title = "Have A Cool Pre-Wedding Party & Have A Smaaashing Night!";
            TemplateService.description = "Celebrate your last night as a bachelor with your buddies and make the most of it. Smaaash helps you host an extravagant pre-wedding party!";
            TemplateService.keywords = "pre-wedding party, pre-wedding parties";
        }
        //pre-wedding-parties-2
           if ($stateParams.partyCity === "gurgaon-ambience-mall" && $stateParams.id === "pre-wedding-parties-2") {
            TemplateService.title = "Have A Cool Pre-Wedding Party & Have A Smaaashing Night! ";
            TemplateService.description = "Celebrate your last night as a bachelor with your buddies and make the most of it. Smaaash helps you host an extravagant pre-wedding party in Gurgaon!";
            TemplateService.keywords = "pre-wedding party, pre-wedding parties";
        }
           if ($stateParams.partyCity === "delhi" && $stateParams.id === "pre-wedding-parties-2") {
            TemplateService.title = "Have A Cool Pre-Wedding Party & Have A Smaaashing Night!";
            TemplateService.description = "Celebrate your last night as a bachelor with your buddies and make the most of it. Smaaash helps you host an extravagant pre-wedding party, Delhi!";
            TemplateService.keywords = "pre-wedding party, pre-wedding parties";
        }
        //team-building-events-2
          if ($stateParams.partyCity === "gurgaon-ambience-mall" && $stateParams.id === "team-building-event-2") {
            TemplateService.title = "Strengthen Bond As You Build Team Spirit With Smaaash!";
            TemplateService.description ="A team that works together succeeds together. Play competitive games, gulp drinks & relish delicacies with your comrades in a team outing event at Smaaash.";
            TemplateService.keywords = "a team outing event";
        }
          //team-building-events-3
          if ($stateParams.partyCity === "gurgaon-ambience-mall" && $stateParams.id === "team-building-event-3") {
            TemplateService.title = "Strengthen Bond As You Build Team Spirit With Smaaash!";
            TemplateService.description ="A team that works together succeeds together. Play competitive games, gulp drinks & relish delicacies with your comrades at one of the best team outing places.";
            TemplateService.keywords = "team outing places";
        }
        //team-building-events

        // console.log("$stateParams.partyCity", $stateParams.partyCity);


        if ($stateParams.partyCity === "hyderabad" && $stateParams.id === "team-building-events") {
            TemplateService.title = "SMAAASH | Team Building Activities at a Non-Boring Venue	";
            TemplateService.description = "Bonding with colleagues over fun activities, delicious food and beverages, in a zestful ambience. One for all, only at SMAAASH	";
            TemplateService.keywords = "team outing places, team outing hyderabad, team building activities, company offsite	";
        }
        if ($stateParams.partyCity === "mumbai" && $stateParams.id === "team-building-events") {
            TemplateService.title = "Strengthen Bond As You Build Team Spirit With Smaaash!";
            TemplateService.description = "A team that works together succeeds together. Play competitive games, sip on your drinks and savour the delicacies with you comrades by planning a team outing at Smaaash.";
            TemplateService.keywords = "team outing";
        }
        if ($stateParams.partyCity === "gurgaon-cyber-hub" && $stateParams.id === "team-building-events") {
            TemplateService.title = "Strengthen Bond As You Build Team Spirit With Smaaash!";
            TemplateService.description = "A team that works together succeeds together. Play competitive games as team building activities with delectable food and drinks at Smaaash.";
            TemplateService.keywords = "team building activities";
        }
        if ($stateParams.partyCity === "bengaluru" && $stateParams.id === "team-building-events") {
            TemplateService.title = "Strengthen Bond As You Build Team Spirit With Smaaash!";
            TemplateService.description = "A team that works together succeeds together. Play competitive games, sip on your drinks and savour the delicacies with you comrades by planning a team outing at Smaaash.";
            TemplateService.keywords = "team outing places";
        }
        if ($stateParams.partyCity === "noida" && $stateParams.id === "team-building-events") {
            TemplateService.title = " Exciting Team Building Events for Your Office at Smaaash";
            TemplateService.description = "With a host of exciting VR games, simulated sport, great food and drinks, you have a lot to choose from, to make your team building event a memorable one. ";
            TemplateService.keywords = "team building events, VR games, team building event";
        }
        if ($stateParams.partyCity === "ludhiana" && $stateParams.id === "team-building-events") {
            TemplateService.title = "Team Building Events are a Cut Above the Rest at Smaaash";
            TemplateService.description = "Host team building events that give you goose bumps as you enjoy the spirit of winning, with great VR games, simulated sport, food and drinks.  ";
            TemplateService.keywords = "Team building events,   team building in ludhiana";
        }
        //team-building-events

        //seo
    })

    .controller('CustomizePackageCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state, $stateParams, $filter) {
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
        // if ($stateParams.customizeCity) {
        //     $stateParams.customizeCity = $.jStorage.get("city");
        //     $state.go('customizepackage', {
        //         customizeCity: $stateParams.customizeCity
        //     })
        // }
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
        $scope.goToGames = function (val, data) {
            data.selected = !data.selected;
            $scope.customizeformData.games = _.map(_.filter($scope.customizepackage, "selected"), "_id");
        };

        if ($.jStorage.get("loginDetail") != null && $.jStorage.get("customizeobj") === null) {
            NavigationService.getOne(function (data) {
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
                if ($scope.customizeformData.starter && $scope.customizeformData.dessert && $scope.customizeformData.mainCourse) {
                    $scope.selectDessert = false;
                    $scope.selectStarter = false;
                    $scope.selectmainCourse = false;
                    NavigationService.custom($scope.customizeformData, function (data) {
                        if (data.value === true) {
                            console.log("customizeformDataNormal", data);
                            $scope.showThank = true;
                            $scope.emailExist = false;
                            console.log("datain if", data);
                            $.jStorage.set("customizeobj", data.data);
                            $scope.customizeformData = {};
                            $scope.customizeformData.games = [];
                            $timeout(function () {
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
            } else { }

        }
        // NavigationService.getCity(function(data) {
        //     $scope.allCity = data.data;
        //     if ($stateParams.customizeCity) {
        //       $scope.tempCity = _.find($scope.allCity, function(obj) {
        //           return obj.name == $stateParams.customizeCity;
        //       });
        //     }
        //
        //     TemplateService.removeLoader();
        // });
        var id = "attraction";
        // var id = "57bc4b2aeb9c91f1025a3b55";
        $scope.male = '';
        $scope.female = '';
        $scope.children = '';
        $scope.customizeExploreSmaaash = function () {
            NavigationService.getCity(function (data) {
                $scope.allCity = data.data;
                if ($stateParams.customizeCity) {
                    $scope.tempCity = _.find($scope.allCity, function (obj) {
                        return obj.name == $stateParams.customizeCity;
                    });
                    console.log("$scope.tempCity", $scope.tempCity);
                }
                NavigationService.getSingleExploreSmaaashByUrl(id, $scope.tempCity._id, function (data) {
                    $scope.customizepackage = data.data;
                    $scope.temparr = [];
                    $scope.temparr1 = [];
                    _.each($scope.customizepackage, function (n) {
                        if (n.order == null) {
                            $scope.temparr.push(n);
                        } else {
                            $scope.temparr1.push(n);
                        }
                    })

                    $scope.customizepackage = $filter('orderBy')($scope.temparr1, '-order');
                    $scope.customizepackage = $scope.customizepackage.concat($scope.temparr);
                    // $scope.customizepackage=_.chunk($scope.customizepackage,4);
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
                                    data.gameforarray.push('Adult')
                                    // data.gameforarray.push('Male')
                                    break;
                                // case '2':
                                //     data.gameforarray.push('Female')
                                //     break;
                                case '3':
                                    data.gameforarray.push('Kids')
                                    // data.gameforarray.push('Children')
                                    break;
                                default:
                            }
                        });
                    });
                    TemplateService.removeLoader();
                });

            });


        }
        $scope.customizeExploreSmaaash();
        $scope.customizeCityFun = function (custCityId) {
            console.log("custCityId", custCityId);
            NavigationService.getcustomizeCityFun(id, custCityId, function (data) {
                $scope.customizepackage = data.data;

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
                                data.gameforarray.push('Adult')
                                // data.gameforarray.push('Male')
                                break;
                            // case '2':
                            //     data.gameforarray.push('Female')
                            //     break;
                            case '3':
                                data.gameforarray.push('Kids')
                                // data.gameforarray.push('Children')
                                break;
                            default:
                        }
                    });
                });
                TemplateService.removeLoader();
            });
        }
         

        //seo
        //customizepackage
       if ($stateParams.partyCity === "bengaluru") {
            TemplateService.title = "Customize Your Experience At Smaaash";
            TemplateService.description = " Customize your package according to the number of people, games you’d love to play and food, only at the game zone at Smaaash, Bengaluru. ";
            TemplateService.keywords = "game zone, game zone in bengaluru";
        }
        if ($stateParams.partyCity === "mumbai") {
            TemplateService.title = "Customize Your Experience At Smaaash";
            TemplateService.description = "Customize your package according to the number of people, games you’d love to play and food, only at the game zone at Smaaash, Mumbai. ";
            TemplateService.keywords = "game zone , game zone in mumbai";
        }
         if ($stateParams.partyCity === "delhi") {
            TemplateService.title = "Customize Your Experience At Smaaash";
            TemplateService.description = " Customize your package according to the number of people, games you’d love to play and food, only at the game zone at Smaaash, Delhi. ";
            TemplateService.keywords = "game zone, game zone in Delhi";
        }
          if ($stateParams.partyCity === "gurgaon-ambience-mall") {
            TemplateService.title = " Customize Your Experience At Smaaash";
            TemplateService.description = "  Customize your package according to the number of people, games you’d love to play and food, only at the game zone at Smaaash, Ambience Mall, Gurgaon. ";
            TemplateService.keywords = "game zone, game zone in gurgaon";
        }


    })

    .controller('BirthdayCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $uibModal) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("birthday-parties");
        $scope.menutitle = NavigationService.makeactive("Birthday Parties");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.removeLoaderOn(1);
        NavigationService.getDetailExploreSmaaash($stateParams.id, function (data) {
            $scope.parties = data.data;
            console.log("$scope.parties", $scope.parties);
            TemplateService.removeLoader();
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
        $scope.menutitle = $stateParams.id.charAt(0).toUpperCase() + $stateParams.id.substring(1)
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        // if ($stateParams.snowrushCity) {
        //     $stateParams.snowrushCity = $.jStorage.get("city");
        //     $state.go("snow-rush", {
        //         snowrushCity: $stateParams.snowrushCity
        //     });
        // }
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
        TemplateService.removeLoaderOn(1);
        var fired = false;
        $scope.onScrollStopVideo = function () {
            window.addEventListener("scroll", function () {
                if (document.body.scrollTop >= 700) {
                    // $scope.showVideo = true;
                    $timeout(function () {
                        $scope.showVideo = true;
                    }, 2000);
                    fired = true;
                }
            }, true)
        }
        $scope.onScrollStopVideo();



        $scope.startVid = function () {

            $scope.startVideo = !$scope.startVideo;
            console.log($scope.startVideo, "  console.log($scope.startVideo);");
        }

        if ($stateParams.snowrushCity) {
            NavigationService.getCity(function (data) {
                $scope.getCities = _.cloneDeep(data.data);
                console.log("$scope.getCities ", $scope.getCities);
                $scope.tempCity = _.find($scope.getCities, function (obj) {
                    return obj.myslug == $stateParams.snowrushCity;
                });

                NavigationService.getDetailExploreSmaaashByUrl($stateParams.id, $scope.tempCity._id, function (data) {
                    $scope.detailExploreSmaash = data.data;
                    console.log("$scope.detailExploreSmaash", $scope.detailExploreSmaash);
                    if (_.isEmpty($scope.detailExploreSmaash) || Object.keys($scope.detailExploreSmaash).length == 0) {
                        console.log("im true");
                        $state.go('home');
                    }
                    $scope.detailExploreSmaash.banner = $filter('uploadpath')($scope.detailExploreSmaash.banner);
                    $scope.detailExploreSmaash.image = $filter('uploadpath')($scope.detailExploreSmaash.image);
                    $scope.detailExploreSmaash.mobileBanner = $filter('uploadpath')($scope.detailExploreSmaash.mobileBanner);
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

                    TemplateService.removeLoader();
                });

            });
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


        $scope.buyNowGamesInner = function (BranchPackageID, price) {

            $scope.gamesParams.BranchPackageID = BranchPackageID;
            // $scope.gamesParams.BranchPackageID = "41";
            // $scope.gamesParams.TotalAmount = "222";
            $scope.gamesParams.TotalAmount = price;


            console.log("$scope.gamesParams", $scope.gamesParams);
            if ($.jStorage.get("loginDetail") === null) {
                $rootScope.getMenus();
            } else {
                NavigationService.addToCart($scope.gamesParams, function (data) {
                    console.log("$scope.gamesParams", $scope.gamesParams);
                    if (data.value) {

                        if (data.data.AddToCart[0].Status === 1) {
                            console.log("inif", data);
                            $scope.successCartModal = $uibModal.open({
                                animation: true,
                                templateUrl: 'views/modal/addtocart.html',
                                scope: $scope
                            });
                            $timeout(function () {
                                $scope.successCartModal.close();
                                $state.go('cart', {
                                    cartCity: $rootScope.citySpecific
                                });
                            }, 1000);


                        } else if (data.data.AddToCart[0].Status === 0 && data.data.AddToCart[0].Message == "This Package Is Allready In Cart") {
                            console.log("in else", data);
                            $uibModal.open({
                                animation: true,
                                templateUrl: 'views/modal/alreadyCart.html',
                                scope: $scope
                            });

                        } else if (data.data.AddToCart[0].Status === 0 && data.data.AddToCart[0].Message == "Invalid Package") {
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

        //seo
        //quick jump
   if ($stateParams.snowrushCity === "mumbai" && $stateParams.id === "quikjump") {
            TemplateService.title = "Get Airborne, Dive From 45 Ft. At Quickjump, At Smaaash";
            TemplateService.description = "Get evil, push your friends from the third floor and give them the scare of their lives at the game zone in Mumbai. Don’t worry, we’ll keep them safe.";
            TemplateService.keywords = "game zone in Mumbai ";
        }
 //smart-arcade-2
  if ($stateParams.snowrushCity === "delhi" && $stateParams.id === "smart-arcade-2") {
            TemplateService.title = "Arcade Games That’ll Freeze Time At Smaaash, Delhi";
            TemplateService.description = "Arcade games in Delhi never got this nostalgic, with classics like Pacman to woo you; we also have modern games that’ll get you hooked. ";
            TemplateService.keywords = "Arcade games,  Arcade games in delhi ";
        }
          if ($stateParams.snowrushCity === "bengaluru" && $stateParams.id === "smart-arcade-2") {
            TemplateService.title = "The Ball Kissing The Net, Sweet; Super Keeper At Smaaash";
            TemplateService.description = " The mind and the foot need to marry to create footballing magic in this penalty shoot guarded by our robotic keeper, at the football simulator in Bengaluru.";
            TemplateService.keywords = "football simulator in Bengaluru game zone in bengaluru";
        }
         //smart-arcade-3
  if ($stateParams.snowrushCity === "gurgaon-ambience-mall" && $stateParams.id === "smart-arcade-3") {
            TemplateService.title = "Arcade Games That’ll Freeze Time At Smaaash, Ambience Mall";
            TemplateService.description = "Arcade games in Ambience Mall, Gurgaon, never got this nostalgic, with classics like Pacman to woo you; we also have modern games that’ll get you hooked. . ";
            TemplateService.keywords = "Arcade Games , Arcade games in Gurgaon";
        } 
        if ($stateParams.snowrushCity === "gurgaon-cyber-hub" && $stateParams.id === "smart-arcade-3") {
            TemplateService.title = "The Ball Kissing The Net, Sweet; Super Keeper At Smaaash";
            TemplateService.description = "The mind and the foot need to marry to create footballing magic in this penalty shoot guarded by our robotic keeper, at Cyberhub, Gurgaon. ";
            TemplateService.keywords = "game zone in gurgaon";
        }
         //smart-arcade-7
  if ($stateParams.snowrushCity === "delhi" && $stateParams.id === "smart-arcade-7") {
            TemplateService.title = "The Ball Kissing The Net, Sweet; Super Keeper At Smaaash";
            TemplateService.description = "The mind and the foot need to marry to create footballing magic in this penalty shoot guarded by our robotic keeper, at the game zone in Delhi.";
            TemplateService.keywords = "game zone in Delhi";
        }
           //twilight-bowling-2//
        if ($stateParams.snowrushCity === "gurgaon-cyber-hub" && $stateParams.id === "twilight-bowling-2") {
            TemplateService.title = "Twilight Bowling, Fall In Love At Smaaash";
            TemplateService.description = "Single, dating, never mind, the perfect ambience for you to knock off the pins and stress, alike, awaits you at bowling Gurgaon at Smaaash.";
            TemplateService.keywords = "bowling Gurgaon, bowling in  Gurgaon";
        }
              //twilight-bowling-5//
        if ($stateParams.snowrushCity === "delhi" && $stateParams.id === "twilight-bowling-5") {
            TemplateService.title = "Twilight Bowling, Fall In Love At Smaaash";
            TemplateService.description = "Single, dating, never mind, the perfect ambience for you to knock off the pins and stress, alike, awaits you at bowling Delhi at Smaaash.";
            TemplateService.keywords = "bowling Delhi, bowling in Delhi";
        }
               //twilight-bowling-6//
        if ($stateParams.snowrushCity === "gurgaon-ambience-mall" && $stateParams.id === "twilight-bowling-6") {
            TemplateService.title = "Twilight Bowling, Fall In Love At Smaaash";
            TemplateService.description = " Single, dating, never mind, the perfect ambience for you to knock off the pins and stress, alike, awaits you at bowling Gurgaon at Smaaash.";
            TemplateService.keywords = "bowling Gurgaon, bowling in  Gurgaon";
        }
        //cricket started//
        if ($stateParams.snowrushCity === "mumbai" && $stateParams.id === "cricket") {
            TemplateService.title = "Play Cricket with the Legends at Smaaash Cricket";
            TemplateService.description = "Net cricket that raises your hair on end. Playing with legends, in a lifelike, stadium like ambience at Smaaash, Mumbai is definitely out of the ordinary.";
            TemplateService.keywords = "Net cricket , Play cricket";
        }
        if ($stateParams.snowrushCity === "gurgaon-cyber-hub" && $stateParams.id === "cricket-4") {
            TemplateService.title = "Play cricket With the Legends at Smaaash Cricket";
            TemplateService.description = "Net cricket that raises your hair on end. Playing with legends, in a stadium like ambience at Smaaash, Cyberhub, Gurgaon, is definitely out of the ordinary.";
            TemplateService.keywords = "cricket bowling games , cricket simulator games, play cricket, net cricket in malls ,cricket simulator";
        }
        if ($stateParams.snowrushCity === "gurgaon-ambience-mall" && $stateParams.id === "cricket-9") {
            TemplateService.title = "Play cricket With the Legends at Smaaash Cricket";
            TemplateService.description = "Net cricket that raises your hair on end. Playing with legends, in a stadium like ambience at Smaaash, Ambience Mall, Gurgaon is definitely out of the ordinary.";
            TemplateService.keywords = "Net cricket ,Play cricket";
        }
        if ($stateParams.snowrushCity === "ludhiana" && $stateParams.id === "cricket") {
            TemplateService.title = "Inspired by Captain Cool? Play cricket Indoors at SMAAASH ";
            TemplateService.description = "Put your cricket skills to test with the cricket simulator game. A machine bowling versus your batting. Who wins?";
            TemplateService.keywords = "cricket bowling games, cricket simulator games, play cricket, net cricket in malls , cricket simulator, games zones	";
        }
        if ($stateParams.snowrushCity === "hyderabad" && $stateParams.id === "cricket") {
            TemplateService.title = "Smaaash |Escape the Hyderabad Heat and Play Cricket Indoors 	";
            TemplateService.description = "Learn and enjoy just as much in indoors cricket bowling games as on the field, along with experiencing virtual reality games";
            TemplateService.keywords = "play cricket indoors, indoors cricket bowling games , cricket bowling games, cricket simulator games, play cricket,net cricket in malls , cricket simulator, game zone in hyderabad, game zone ";
        }
        if ($stateParams.snowrushCity === "bengaluru" && $stateParams.id === "cricket") {
            TemplateService.title = "Play cricket with the Legends at Smaaash Cricket";
            TemplateService.description = "Net cricket that raises your hair on end. Playing with legends, in a lifelike, stadium like ambience at Smaaash, Bengaluru is definitely out of the ordinary.";
            TemplateService.keywords = "cricket bowling games ,cricket simulator games,cricket simulator";
        }
        if ($stateParams.snowrushCity === "noida" && $stateParams.id === "cricket") {
            TemplateService.title = "Cricket Simulator that’ll Give You Goose Bumps at Smaaash";
            TemplateService.description = "Net cricket in malls just got the edge at Smaaash. Now, play cricket with gusto; facing mapped deliveries of real legends.";
            TemplateService.keywords = "Cricket simulator, Net cricket in malls, play cricket";
        }
        if ($stateParams.snowrushCity === "delhi" && $stateParams.id === "cricket-8") {
            TemplateService.title = "Play Cricket with the Legends at Smaaash Cricket";
            TemplateService.description = "Net cricket that raises your hair on end. Playing with legends, in a lifelike, stadium like ambience at Smaaash, Delhi is definitely out of the ordinary.";
            TemplateService.keywords = "Play cricket , Net cricket";
        }

        //cricket ended//
        //twilight-bowling//
        if ($stateParams.snowrushCity === "mumbai" && $stateParams.id === "twilight-bowling") {
            TemplateService.title = "Twilight Bowling, Fall In Love At Smaaash";
            TemplateService.description = "Single, dating, never mind, the perfect ambience for you to knock off the pins and stress, alike, awaits you at bowling in Mumbai at Smaaash.";
            TemplateService.keywords = " Twilight Bowling, Bowling,bowling in Mumbai";
        }
        if ($stateParams.snowrushCity === "gurgaon-cyber-hub" && $stateParams.id === "twilight-bowling") {
            TemplateService.title = "Enjoy Twilight Bowling with Friends and Family at Smaaash";
            TemplateService.description = "Teaming up with your partner or stepping up the ante with friends and family, Twilight Bowling Gurgaon is the perfect place for you to lap up some fun.";
            TemplateService.keywords = "Bowling in Gurgaon, Bowling Gurgaon , game zones in Gurgaon ";
        }

        if ($stateParams.snowrushCity === "hyderabad" && $stateParams.id === "twilight-bowling") {
            TemplateService.title = "Smaaash | Bewitched Bowling in Hyderabad ";
            TemplateService.description = "Get enchanted by the twilight ambience at the bowling arena and make your bowling in Hyderabad experience memorable";
            TemplateService.keywords = "bowling in Hyderabad, bowling , bowling Hyderabad";
        }
        if ($stateParams.snowrushCity === "bengaluru" && $stateParams.id === "twilight-bowling") {
            TemplateService.title = "Bowling in Bengaluru, Time to Get Awestruck ";
            TemplateService.description = "The twilight ambiance will thrill you to the core, as you strike away at Smaaash bowling Bengaluru. You can order food and drinks as well.";
            TemplateService.keywords = "Bowling in Bengaluru,  bowling Bengaluru, games zone in Bengaluru,  game zone in Bengaluru";
        }
        if ($stateParams.snowrushCity === "noida" && $stateParams.id === "twilight-bowling") {
            TemplateService.title = "Bowling at Smaaash Now Comes With an Exciting Twist";
            TemplateService.description = "Bowling in Noida gets exciting, when it’s being played at Smaaash; with charismatic twilight ambience enveloping the alley and great food to accompany it.";
            TemplateService.keywords = "Bowling in Noida , bowling Noida, game zones in noida";
        }

        //twilight-bowling//
        //finger-coaster//
        if ($stateParams.snowrushCity === "mumbai" && $stateParams.id === "finger-coaster") {
            TemplateService.title = "Finger Coaster, Design Your Wildest Ride at Smaaash";
            TemplateService.description = "Design your own roller coaster ride and let the simulator give you the jitters. This roller coaster virtual reality attraction in Smaaash, Mumbai is special.";
            TemplateService.keywords = "Finger coaster, virtual reality";
        }
        if ($stateParams.snowrushCity === "gurgaon-cyber-hub" && $stateParams.id === "finger-coaster-3") {
            TemplateService.title = "Finger Coaster, Design Your Wildest Ride at Smaaash";
            TemplateService.description = "Design your own roller coaster ride and let the simulator give you the jitters. This virtual reality attraction in Smaaash, Cyberhub, Gurgaon, is special.";
            TemplateService.keywords = "virtual reality, Finger coaster";
        }
        if ($stateParams.snowrushCity === "gurgaon-ambience-mall" && $stateParams.id === "finger-coaster-8") {
            TemplateService.title = "Finger Coaster, Design Your Wildest Ride at Smaaash";
            TemplateService.description = "Design your own roller coaster ride and let the simulator give you the jitters. This virtual reality attraction in Smaaash, Ambience Mall, Gurgaon, is special.";
            TemplateService.keywords = "virtual reality, Finger coaster";
        }
        if ($stateParams.snowrushCity === "ludhiana" && $stateParams.id === "finger-coaster") {
            TemplateService.title = "Finger Coaster - Virtual Reality Coaster Designed by You";
            TemplateService.description = "You can finally put your scribbling abilities to use. Draw any pattern for your virtual reality coaster ride to follow, and get thrilled with Finger Coaster";
            TemplateService.keywords = "vr games, virtual reality games, virtual reality, virtual reality gaming, games zones";
        }
        if ($stateParams.snowrushCity === "hyderabad" && $stateParams.id === "finger-coaster") {
            TemplateService.title = "Smaaash | Design Your Roller Coaster Ride as well as Fun";
            TemplateService.description = "Do you have what it takes to challenge yourself to accomplish your own challenge? Confirm it yourself with these VR games	";
            TemplateService.keywords = "roller coaster ride, VR games, virtual reality games, virtual reality, virtual reality gaming";
        }
        if ($stateParams.snowrushCity === "bengaluru" && $stateParams.id === "finger-coaster") {
            TemplateService.title = "Finger Coaster, Design Your Wildest Ride at Smaaash";
            TemplateService.description = "Design your own roller coaster ride and let the simulator give you the jitters. This roller coaster virtual reality attraction in Smaaash, Bengaluru is special.";
            TemplateService.keywords = "virtual reality, Finger coaster";
        }
        if ($stateParams.snowrushCity === "bengaluru" && $stateParams.id === "finger-coaster-2") {
            TemplateService.title = " Finger Coaster, Design Your Wildest Ride at Smaaash";
            TemplateService.description = "Design your own roller coaster ride and let the simulator give you the jitters. This roller coaster virtual reality attraction in Smaaash, Bengaluru is special.";
            TemplateService.keywords = "virtual reality, Finger coaster";
        }
        if ($stateParams.snowrushCity === "noida" && $stateParams.id === "finger-coaster") {
            TemplateService.title = "A Roller Coaster VR Game that Comes Alive on Sketching it";
            TemplateService.description = "A virtual reality game where the moment of epiphany is when the roller coaster you draw, comes alive in the form of an actual real life simulator ride.";
            TemplateService.keywords = "vr games, virtual reality games, virtual reality, virtual reality gaming";
        }
        if ($stateParams.snowrushCity === "delhi" && $stateParams.id === "finger-coaster-7") {
            TemplateService.title = "Finger Coaster, Design Your Wildest Ride at Smaaash";
            TemplateService.description = "Design your own roller coaster ride and let the simulator give you the jitters. This roller coaster virtual reality attraction in Smaaash, Delhi is special.";
            TemplateService.keywords = "virtual reality, Finger coaster";
        }

        //finger-coaster//
        //super-keeper//
        if ($stateParams.snowrushCity === "mumbai" && $stateParams.id === "super-keeper") {
            TemplateService.title = "The Ball Kissing The Net, Sweet; Super Keeper At Smaaash";
            TemplateService.description = "The mind and the foot need to marry to create footballing magic in this penalty shoot guarded by our robotic keeper, at indoor football, Mumbai.";
            TemplateService.keywords = "indoor football, Mumbai , game zone in Mumbai";
        }
        if ($stateParams.snowrushCity === "gurgaon-cyber-hub" && $stateParams.id === "super-keeper") {
            TemplateService.title = "Super Keeper is an Automated Indoor Football Game at Smaaash";
            TemplateService.description = "Our ferocious automated goalkeeper will thwart your attempts, but you need to penetrate with skill, with your penalty kicks at Smaaash’s indoor football, Gurgaon";
            TemplateService.keywords = "Indoor football Gurgaon , game zones in gurgaon";
        }
        if ($stateParams.snowrushCity === "ludhiana" && $stateParams.id === "super-keeper") {
            TemplateService.title = "Play Indoor Football with Supersonic, Machinable Goal Keeper";
            TemplateService.description = "There certainly is keeping in football, but will technological Super Keeper keep you from shooting a goal or not? Play indoor football and find out yourself";
            TemplateService.keywords = "indoor football, game zone, games zone, games zones";
        }
        if ($stateParams.snowrushCity === "hyderabad" && $stateParams.id === "super-keeper") {
            TemplateService.title = "Smaaash | Test Yourself at Indoor Football in Hyderabad ";
            TemplateService.description = "If you think you are the best at Football, defeat the supersonic Super Keeper at the SMAAASH indoor football arena";
            TemplateService.keywords = "indoor football in Hyderabad,indoor football ,indoor football arena,game zones,games zones in Hyderabad	";
        }
        if ($stateParams.snowrushCity === "bengaluru" && $stateParams.id === "super-keeper") {
            TemplateService.title = "Give Your Best Shot at this Football Simulator in Bengaluru";
            TemplateService.description = "Our automated goalkeeper will do its best to stop your goals, but if  you can penetrate through, you’ll be considered legend at this football simulator game.";
            TemplateService.keywords = "football simulator in Bengaluru , games zone in Bengaluru,  game zone in Bengaluru";
        }
        if ($stateParams.snowrushCity === "noida" && $stateParams.id === "super-keeper") {
            TemplateService.title = "Football Simulator that Tests Your Penalty Skills at Smaaash";
            TemplateService.description = "Crack a goal or two at indoor football Noida. We challenge you to beat our automated goalkeeper who is equipped with nippy reflexes.";
            TemplateService.keywords = "indoor football Noida, game zones in Noida";
        }

        //super-keeper//
        //walk-the-plank-2//
        if ($stateParams.snowrushCity === "gurgaon-cyber-hub" && $stateParams.id === "walk-the-plank-2") {
            TemplateService.title = "Walk The Plank At Smaaash; Walk Between Sky Scrapers";
            TemplateService.description = "This virtual reality game will give you the chills as you walk on a thin strip of wood, balancing between two tall sky scrapers at Smaaash, Cyberhub, Gurgaon.";
            TemplateService.keywords = "virtual reality, virtual reality games";
        }
           //walk-the-plank-3//
        if ($stateParams.snowrushCity === "bengaluru" && $stateParams.id === "walk-the-plank-3") {
            TemplateService.title = "Walk The Plank At Smaaash; Walk Between Sky Scrapers";
            TemplateService.description = "This virtual reality game will give you the chills as you walk on a thin strip of wood, balancing between two tall sky scrapers at Smaaash, Bengaluru.";
            TemplateService.keywords = "virtual reality, virtual reality games";
        }
             //walk-the-plank-7//
        if ($stateParams.snowrushCity === "delhi" && $stateParams.id === "walk-the-plank-7") {
            TemplateService.title = "Walk The Plank At Smaaash; Walk Between Sky Scrapers";
            TemplateService.description = "This virtual reality game will give you the chills as you walk on a thin strip of wood, balancing between two tall sky scrapers at Smaaash, Delhi.";
            TemplateService.keywords = " virtual reality, virtual reality games";
        }
        //walk-the-plank//
        if ($stateParams.snowrushCity === "mumbai" && $stateParams.id === "walk-the-plank") {
            TemplateService.title = "Walk The Plank At Smaaash; Walk Between Sky Scrapers";
            TemplateService.description = "This virtual reality game will give you the chills as you walk on a thin strip of wood, balancing between two tall sky scrapers at Smaaash, Mumbai.";
            TemplateService.keywords = "virtual reality game, virtual reality ";
        }
        if ($stateParams.snowrushCity === "gurgaon-cyber-hub" && $stateParams.id === "walk-the-plank") {
            TemplateService.title = "Battle Dizzying Heights in This Gripping VR Game";
            TemplateService.description = "Dangling between two skyscrapers is frightening for sure, how about completing a task on top of that, yes, that’s what this thrilling VR game is all about.";
            TemplateService.keywords = "vr games,virtual reality games,virtual reality,virtual reality gaming";
        }

        if ($stateParams.snowrushCity === "hyderabad" && $stateParams.id === "walk-the-plank") {
            TemplateService.title = "Thrilling Virtual Reality Game at SMAAASH, Hyderabad";
            TemplateService.description = "Among some of the most innovative VR games, walk the plank is a daring virtual reality game challenging your physical and mental balance";
            TemplateService.keywords = "vr games, virtual reality games, virtual reality, virtual reality gaming, virtual reality games in Hyderabad	";
        }
        if ($stateParams.snowrushCity === "bengaluru" && $stateParams.id === "walk-the-plank") {
            TemplateService.title = "This VR Game Proves to be the Height of Excitement";
            TemplateService.description = "Dizzying heights will thrill you as you take on this virtual reality game. You need to balance yourself on a narrow plank dangling between two tall skyscrapers.";
            TemplateService.keywords = "vr games, virtual reality games, virtual reality, virtual reality gaming";
        }


        //walk-the-plank//
        //x-2-motor-racing-simulator
        if ($stateParams.snowrushCity === "mumbai" && $stateParams.id === "x-2-motor-racing-simulator") {
            TemplateService.title = "Fast and Furious with the Best Driving Simulation Game";
            TemplateService.description = "Formula 1 racing experienced through simulation gaming that replicates the experience as it is. Enjoy high speed driving and experience the Gs.";
            TemplateService.keywords = "driving simulation game , game zone in Mumbai, game zones in Mumbai";
        }
        if ($stateParams.snowrushCity === "gurgaon-cyber-hub" && $stateParams.id === "x-2-motor-racing-simulator") {
            TemplateService.title = "Burn Some Rubber in this Car Racing Game";
            TemplateService.description = "No time for fuel breaks, this high intensity racing game is all about the throttle and how you use it with steering skills. All the best for your date with speed.";
            TemplateService.keywords = "game zones in Gurgaon , arcade game in gurgaon";
        }

        if ($stateParams.snowrushCity === "hyderabad" && $stateParams.id === "x-2-motor-racing-simulator") {
            TemplateService.title = "SMAAASH | Feel your Heart Race at the Racing Arcade ";
            TemplateService.description = "X2 motor racing simulator at SMAAASH, succeeding in making you feel like you are actually on the tracks";
            TemplateService.keywords = "racing arcade, driving simulation games, game zone, game zone in hyderabad";
        }
        if ($stateParams.snowrushCity === "bengaluru" && $stateParams.id === "x-2-motor-racing-simulator") {
            TemplateService.title = "Rush Hour on Wheels Begins, with This Car Racing Simulator";
            TemplateService.description = "Do the burn out, let your wheels spin, enjoy this car racing game that’ll have the wind blowing through your face as you race.";
            TemplateService.keywords = "arcade games, arcade games in Bengaluru , games zone in Bengaluru,  game zone in Bengaluru";
        }
        //x-2-motor-racing-simulator
        //smart-arcade

        if ($stateParams.snowrushCity === "mumbai" && $stateParams.id === "smart-arcade") {
            TemplateService.title = "Arcade games of the Future in Mumbai";
            TemplateService.description = "Find the most innovative arcade games and let time fly as you get engrossed in innovative gaming scenarios and enjoy with family and friends.";
            TemplateService.keywords = "Arcade games , game zone in Mumbai, game zones in Mumbai";
        }
        if ($stateParams.snowrushCity === "gurgaon-cyber-hub" && $stateParams.id === "smart-arcade") {
            TemplateService.title = "Arcade Games that are a Reflection of the Future";
            TemplateService.description = "Hi-tech arcade games will fuel your passion for gaming. Also, the conventional ones also exist to give you that shot of nostalgia.";
            TemplateService.keywords = "game zones in Gurgaon , arcade game in gurgaon";
        }
        if ($stateParams.snowrushCity === "ludhiana" && $stateParams.id === "smart-arcade") {
            TemplateService.title = "Arcade Gaming given a Completely New Conception | SMAAASH	";
            TemplateService.description = "Not your regular gaming arcade in Ludhiana. Encounter an out of the world experience at Smart Arcade	";
            TemplateService.keywords = "gaming arcade, arcade game,gaming zone, gaming zones, games zones";
        }
        if ($stateParams.snowrushCity === "hyderabad" && $stateParams.id === "smart-arcade") {
            TemplateService.title = "SMAAASH Hyderabad | Top - Grade Gaming Arcade";
            TemplateService.description = "Make a smart choice by playing at the SMAAASH smart arcade and move on to experience the all new virtual reality world";
            TemplateService.keywords = "racing arcade, driving simulation games, game zone, game zone in Hyderabad";
        }
        if ($stateParams.snowrushCity === "bengaluru" && $stateParams.id === "smart-arcade") {
            TemplateService.title = "Arcade Games That’ll Freeze Time At Smaaash, Bengaluru ";
            TemplateService.description = "Arcade games in Bengaluru never got this nostalgic, with classics like Pacman to woo you; we also have modern games that’ll get you hooked. ";
            TemplateService.keywords = "Arcade games in Bengaluru, Arcade games";
        }
        if ($stateParams.snowrushCity === "noida" && $stateParams.id === "smart-arcade") {
            TemplateService.title = "Smart Arcade Gives Your Gaming Passion, Wings";
            TemplateService.description = "Rock the game floor as you enjoy futuristic  arcade games with conventional all time classics and have a whale of a time.";
            TemplateService.keywords = "arcade games , game zone in Noida, game zone Noida";
        }
        //smart-arcade
        //cockpit-360//

        if ($stateParams.snowrushCity === "mumbai" && $stateParams.id === "cockpit-360") {
            TemplateService.title = "A Real Fighter Plane Game that Makes You Fly";
            TemplateService.description = "Take the pilot’s seat, get into the dogfight, bring down enemies from the sky like a pro fighter pilot. This virtual reality game imparts 360 degree movements. ";
            TemplateService.keywords = " virtual reality game , game zone in Mumbai ,game zones in Mumbai";
        }
        //cockpit-360//

        //sky-karting//
        if ($stateParams.snowrushCity === "mumbai" && $stateParams.id === "sky-karting") {
            TemplateService.title = "Karts As Fast As Darts At Sky Karting In Smaaash";
            TemplateService.description = "Where Go kart racing is a race of ego and the thirst to be the fastest, our speedy karts will give you the power, but you need the skill to be the champion. ";
            TemplateService.keywords = "Go kart racing, game zone in Mumbai";
        }
        if ($stateParams.snowrushCity === "gurgaon-cyber-hub" && $stateParams.id === "sky-karting") {
            TemplateService.title = "Unwind With an Exciting Host of VR Games & Indoor Sports";
            TemplateService.description = "Play cricket with swag, strike them all at Bowling Gurgaon, dangle between skyscrapers, create your own roller coaster, take on futuristic gaming with gusto.";
            TemplateService.keywords = "Play cricket , Bowling Gurgaon ,VR games, bowling in  Gurgaon";
        }

        if ($stateParams.snowrushCity === "hyderabad" && $stateParams.id === "sky-karting") {
            TemplateService.title = "Next on Your List of Top Hyderabad Gaming Zones";
            TemplateService.description = "Extend your to-do list for Hyderabad. Introducing SMAAASH, a one-stop destination for gaming, food, drinks, and parties";
            TemplateService.keywords = "top Hyderabad gaming zones, Hyderabad gaming zones, gaming zones,game zone";
        }


        if ($stateParams.snowrushCity === "gurgaon-sector-29" && $stateParams.id === "sky-karting") {
            TemplateService.title = "Go karting in Gurgaon Just Got More Zippy";
            TemplateService.description = "Strap in your seatbelts, rev the throttle and let your tires roll, Smaaash Sky Karting has got the upper hand with swifter karts and multi-level track.";
            TemplateService.keywords = "sky karting , go kart gurgaon, go kart racing, gokarting";
        }
        //sky-karting//
        //trampoline-park//
        if ($stateParams.snowrushCity === "mumbai" && $stateParams.id === "trampoline-park") {
            TemplateService.title = "Get Wings At The Trampoline Park At Smaaash";
            TemplateService.description = "Bounce with every ounce of strength. The trampoline park at in Mumbai is an aerial fiesta where you just keep having fun. ";
            TemplateService.keywords = "game zone in mumbai";
        }
        if ($stateParams.snowrushCity === "gurgaon-cyber-hub" && $stateParams.id === "trampoline-park") {
            TemplateService.title = "Unwind With an Exciting Host of VR Games & Indoor Sports";
            TemplateService.description = "Play cricket with swag, strike them all at Bowling Gurgaon, dangle between skyscrapers, create your own roller coaster, take on futuristic gaming with gusto.";
            TemplateService.keywords = "Play cricket , Bowling Gurgaon ,VR games, bowling in  Gurgaon";
        }

        if ($stateParams.snowrushCity === "hyderabad" && $stateParams.id === "trampoline-park") {
            TemplateService.title = "SMAAASH | Indoor Trampoline Park for Kids and Adults 	";
            TemplateService.description = "Who said trampolines are only for kids? Come visit SMAAASH, trampolines for adults in Hyderabad will spring some childhood memories for you	";
            TemplateService.keywords = "Indoor trampoline park, game zone, kids play area, game zone in Hyderabad, children play area	";
        }
        //trampoline-park//

//climbamax
if ($stateParams.snowrushCity === "mumbai" && $stateParams.id === "climbamax") {
    TemplateService.title = "Breath-Taking Rock Climbing at the Climbamax Game in Smaaash";
    TemplateService.description = "Let the climber in you rise such that you reach the peak. This little mountain is the ultimate challenge at the game zone in Mumbai.";
    TemplateService.keywords = "game zone in Mumbai , Climbamax game";
}
//climbamax

//bowlin-2
if ($stateParams.snowrushCity === "bengaluru" && $stateParams.id === "bowling-2") {
    TemplateService.title = "Twilight Bowling, Fall in Love at Smaaash";
    TemplateService.description = "Single, dating, never mind, the perfect ambience for you to knock off the pins and stress, alike, awaits you at bowling Bengaluru at Smaaash.";
    TemplateService.keywords = "game zone in Mumbai , Climbamax game";
}
//bowling-2

if ($stateParams.snowrushCity === "bengaluru" && $stateParams.id === "cricket-3") {
    TemplateService.title = "Play cricket with the Legends at Smaaash Cricket";
    TemplateService.description = "Net cricket that raises your hair on end. Playing with legends, in a lifelike, stadium like ambience at Smaaash, Bengaluru is definitely out of the ordinary.";
    TemplateService.keywords = "Net cricket, Play cricket";
}

        //dodge-ball//
        if ($stateParams.snowrushCity === "mumbai" && $stateParams.id === "dodge-ball") {
            TemplateService.title = "Test Your Reflexes – Dodge Ball";
            TemplateService.description = "They are fired fast and they are fired at you. Duck, jump, sway, somersault, do whatever it takes to dodge the balls in this fantastic amusement game.";
            TemplateService.keywords = "amusement game, Dodge Ball";
        }
        if ($stateParams.snowrushCity === "gurgaon-cyber-hub" && $stateParams.id === "dodge-ball") {
            TemplateService.title = "Unwind With an Exciting Host of VR Games & Indoor Sports";
            TemplateService.description = "Play cricket with swag, strike them all at Bowling Gurgaon, dangle between skyscrapers, create your own roller coaster, take on futuristic gaming with gusto.";
            TemplateService.keywords = "Play cricket , Bowling Gurgaon ,VR games, bowling in  Gurgaon";
        }

        if ($stateParams.snowrushCity === "hyderabad" && $stateParams.id === "dodge-ball") {
            TemplateService.title = "SMAAASH  | Engaging, Indoor Dodge Ball Game in Hyderabad 	";
            TemplateService.description = "Time to partner up with your reflexes. Can you outdo the multiple ball-firing machines at the indoor dodge ball zone?";
            TemplateService.keywords = "indoor dodge ball game in Hyderabad, indoor dodge ball game, dodge ball game, game zone in hyderabad, indoor dodge ball";
        }
        //dodge-ball//

        //fly-max//
        if ($stateParams.snowrushCity === "gurgaon-cyber-hub" && $stateParams.id === "flymax-2") {
            TemplateService.title = "Flymax, Hover Over Heaven at Smaaash";
            TemplateService.description = "Take the aerial route to bliss in this hang glider simulated virtual reality game, as you watch sceneries glide beneath you at Smaaash, Cyberhub, Gurgaon.";
            TemplateService.keywords = "virtual reality game , Flymax";
        }
        if ($stateParams.snowrushCity === "bengaluru" && $stateParams.id === "flymax") {
            TemplateService.title = "Flymax, Hover Over Heaven at Smaaash";
            TemplateService.description = "Take the aerial route to bliss in this hang glider simulated virtual reality game, as you watch sceneries glide beneath you at Smaaash, Bengaluru. ";
            TemplateService.keywords = "virtual reality game , Flymax";
        }
        if ($stateParams.snowrushCity === "hyderabad" && $stateParams.id === "fly-max") {
            TemplateService.title = "Glide in Virtual Reality at Smaaash Hyderabad	";
            TemplateService.description = "Fly Max at SMAAASH will bring virtual reality to your imagination of being able to fly like a bird";
            TemplateService.keywords = "vr games, virtual reality games, virtual reality, virtual reality gaming, virtual reality games in Hyderabad";
        }
        if ($stateParams.snowrushCity === "mumbai" && $stateParams.id === "fly-max") {
            TemplateService.title = "Flymax, Hover Over Heaven at Smaaash";
            TemplateService.description = "Take the aerial route to bliss in this hang glider simulated virtual reality game, as you watch sceneries glide beneath you at Smaaash, Mumbai.";
            TemplateService.keywords = "virtual reality game , Flymax";
        }
        if ($stateParams.snowrushCity === "noida" && $stateParams.id === "fly-max") {
            TemplateService.title = "Flymax is A VR Game that Makes you Soar at Smaaash";
            TemplateService.description = "Flymax is a dreamlike virtual reality game that makes you glide like a bird in the skies, and enjoy a panorama of the beautiful scenery on Earth. ";
            TemplateService.keywords = "vr games, virtual reality games, virtual reality, virtual reality gaming";
        }

        //fly-max//

        //nitro-wheelie//
        if ($stateParams.snowrushCity === "gurgaon-cyber-hub" && $stateParams.id === "nitro-wheelie") {
            TemplateService.title = "Nitro-Wheelie is a Fantastic Dirt Bike Game at Smaaash";
            TemplateService.description = "This game spins dirt out of the earth, suspending you into motion as you maneuver through the ups and downs on your super bike.";
            TemplateService.keywords = "game zones in Gurgaon , arcade game in gurgaon";
        }
        if ($stateParams.snowrushCity === "bengaluru" && $stateParams.id === "nitro-wheelie") {
            TemplateService.title = " Dexterous Dirt Biking On Nitro Wheelie At Smaaash";
            TemplateService.description = "Get down and dirty on the racetrack with this arcade game that’ll test the biker-mettle in you at Smaaash, Bengaluru.";
            TemplateService.keywords = "arcade game, arcade game in bengaluru";
        }
        if ($stateParams.snowrushCity === "hyderabad" && $stateParams.id === "nitro-wheelie") {
            TemplateService.title = "Smaaash | Clean Dirt Bike Gaming in Hyderabad ";
            TemplateService.description = "Experience dirt bike stimulation indoors at the unconventional virtual reality gaming arcade in Hyderabad- SMAAASH	";
            TemplateService.keywords = "dirt bike gaming in Hyderabad, dirt bike gaming , game zone in Hyderabad, dirt bike stimulation , driving simulation games	";
        }
        if ($stateParams.snowrushCity === "noida" && $stateParams.id === "nitro-wheelie") {
            TemplateService.title = "Puff up Some Dust, Ride Like a Pro with Nitro Wheelie";
            TemplateService.description = "Nitro Wheelie is one of the best biking simulator games you’ll experience ever. Throttle up, burn some rubber and enjoy an almost real life dirt bike experience.";
            TemplateService.keywords = "biking simulator, biking simulator games  ,  arcade games";
        }


        //nitro-wheelie//
        //nitro-wheelie-2//
            if ($stateParams.snowrushCity === "gurgaon-cyber-hub" && $stateParams.id === "nitro-wheelie-2") {
            TemplateService.title = "Dexterous Dirt Biking On Nitro Wheelie At Smaaash";
            TemplateService.description = " Get down and dirty on the racetrack with this arcade game that’ll test the biker-mettle in you at Smaaash, Cyberhub, Gurgaon. ";
            TemplateService.keywords = "arcade game, arcade game in gurgoan";
        }
        //war-on-wheels//
        if ($stateParams.snowrushCity === "gurgaon-cyber-hub" && $stateParams.id === "war-on-wheels") {
            TemplateService.title = "Team up to Roast the Enemy in this VR Game";
            TemplateService.description = "This two player virtual reality game is for hardcore gamers, wherein one player takes the wheel and the other bombs the enemy relentlessly. ";
            TemplateService.keywords = "vr games,virtual reality games,virtual reality,virtual reality gaming";
        }
        if ($stateParams.snowrushCity === "noida" && $stateParams.id === "war-on-wheels") {
            TemplateService.title = "Pair up and Blast Your Enemies with War On Wheels";
            TemplateService.description = "This virtual reality game tops the charts in entertainment value. One of you got to destroy enemies as the other drives. ";
            TemplateService.keywords = "vr games, virtual reality games, virtual reality, virtual reality gaming";
        }
         if ($stateParams.snowrushCity === "bengaluru" && $stateParams.id === "war-on-wheels") {
            TemplateService.title = "War On Wheels, The Ultimate Team Game In A Tank At Smaaash";
            TemplateService.description = "This arcade game takes virtual reality to another level, wherein you and your partner team up to gun down zombies while driving, at Smaaash Bengaluru.";
            TemplateService.keywords = "arcade game, arcade game in bengaluru";
        }
        //war-on-wheels-2//
  if ($stateParams.snowrushCity === "gurgaon-cyber-hub" && $stateParams.id === "war-on-wheels-2") {
            TemplateService.title = "War On Wheels, The Ultimate Team Game In A Tank At Smaaash";
            TemplateService.description = "This arcade game takes virtual reality to another level, wherein you and your partner team up to gun down zombies while driving, at Smaaash, Cyberhub, Gurgaon.";
            TemplateService.keywords = "arcade game, arcade game in gurgaon";
        }
        //war-on-wheels/
        //snehal
        //trampoline-park
        if ($stateParams.snowrushCity === "mumbai" && $stateParams.id === "trampoline-park") {
            TemplateService.title = "Jump, Rise, Somersault  at the Smaaash Trampoline Park";
            TemplateService.description = "The ultimate kids’ party venue awaits you at Smaaash. The trampoline park is a fun place to unwind after all that homework. Adults can have a gala time too. ";
            TemplateService.keywords = "Kids’ party venue, games zone in Mumbai, kids play area";
        }
        if ($stateParams.snowrushCity === "hyderabad" && $stateParams.id === "trampoline-park") {
            TemplateService.title = "Smaaash | Indoor Trampoline Park for Kids and Adults ";
            TemplateService.description = "Who said trampolines are only for kids? Come visit SMAAASH, trampolines for adults in Hyderabad will spring some childhood memories for you";
            TemplateService.keywords = "Indoor trampoline park, game zone, kids play area, game zone in Hyderabad, children play area";
        }
        //trampoline-park
        //vulcan-force
        if ($stateParams.snowrushCity === "gurgaon-cyber-hub" && $stateParams.id === "vulcan-force") {
            TemplateService.title = "Vulcan force is a fighter pilot VR Game at Smaaash";
            TemplateService.description = "Virtual reality gaming taken to another level, this ride is for hardcore fighter pilots who shoot down enemy aircraft using Oculus gear. ";
            TemplateService.keywords = "vr games, virtual reality games, virtual reality ,virtual reality gaming";
        }
        if ($stateParams.snowrushCity === "hyderabad" && $stateParams.id === "vulcan-force") {
            TemplateService.title = "Vulcan force is an engaging VR game at Smaaash";
            TemplateService.description = "Vulcan Force is an aerial battle that puts you in a fighter helicopter cockpit and tests your skills in bringing down the enemy aircraft. It’s a great VR game.";
            TemplateService.keywords = "vr games, virtual reality games, virtual reality, virtual reality gaming";
        }
        if ($stateParams.snowrushCity === "gurgaon-cyber-hub" && $stateParams.id === "vulcan-force") {
            TemplateService.title = "Vulcan Force is a Thrilling VR Game at Smaaash ";
            TemplateService.description = "Vulcan Force is a virtual reality game that allows you to shoot 3000 bullets per minute and bring down enemy aircraft in killer style.";
            TemplateService.keywords = "vr games,virtual reality games,virtual reality,virtual reality gaming";
        }
        //vulcan-force
        //air-rider-2
        if ($stateParams.snowrushCity === "gurgaon-cyber-hub" && $stateParams.id === "air-rider-2") {
            TemplateService.title = "Bump Into the Friends, Drive Rashly at Smaaash";
            TemplateService.description = "Bumper cars were never this exciting as one drives like crazy and jolts the others for some literally bumper to bumper fun.";
            TemplateService.keywords = "";
        }
        //air-rider-2
        //hot-shot-2
        //    console.log("$stateParams.snowrushCity ",$stateParams.snowrushCity );
        if ($stateParams.snowrushCity === "gurgaon-cyber-hub" && $stateParams.id === "hot-shot-2") {
            TemplateService.title = "Hot Shot Game At Smaaash, Trigger The Marksman In You";
            TemplateService.description = "A game that comes close to professional shooting, you can calibrate your gun, choose a light or heavy weapon and unleash bullets in 14 different scenarios. 	 ";
            TemplateService.keywords = "arcade games, arcade games in gurgaon";
        }
        //hot-shot-2
        //jurassic-escape-2
        if ($stateParams.snowrushCity === "gurgaon-cyber-hub" && $stateParams.id === "jurassic-escape-2") {
            TemplateService.title = "Eye-To-Eye With Dinosaurs At Jurassic Escape At Smaaash";
            TemplateService.description = "You’ll feel like an ant when mammoth size dinosaurs at hand’s reach intimidate you, in this virtual reality attraction coupled with simulative movements.";
            TemplateService.keywords = "virtual reality, virtual reality games";
        }
        //jurassic-escape-2
        //smart-arcade
        if ($stateParams.snowrushCity === "hyderabad" && $stateParams.id === "smart-arcade") {
            TemplateService.title = "Smaaash Hyderabad | Top - Grade Gaming Arcade ";
            TemplateService.description = "Make a smart choice by playing at the SMAAASH smart arcade and move on to experience the all new virtual reality world	 ";
            TemplateService.keywords = "racing arcade, driving simulation games, game zone, game zone in Hyderabad";
        }
        if ($stateParams.snowrushCity === "gurgaon-cyber-hub" && $stateParams.id === "smart-arcade") {
            TemplateService.title = "Arcade Games at Smaaash that are a Reflection of the Future ";
            TemplateService.description = "Hi-tech arcade games will fuel your passion for gaming. Also, the conventional ones also exist to give you that shot of nostalgia.";
            TemplateService.keywords = "game zones in Gurgaon , arcade game in gurgaon";
        }
        //smart-arcade
        //magic-carpet
        if ($stateParams.snowrushCity === "bengaluru" && $stateParams.id === "magic-carpet") {
            TemplateService.title = "Magic Carpet is A VR game That Makes You Hover at Smaaash";
            TemplateService.description = "Magic Carpet is a virtual reality game that makes you levitate and take to the skies, over scenic expanses giving you the ultimate thrill.";
            TemplateService.keywords = "vr games,virtual reality games,virtual reality,virtual reality gaming";
        }
        //magic-carpet
        //art-of-attack
        if ($stateParams.snowrushCity === "bengaluru" && $stateParams.id === "art-of-attack") {
            TemplateService.title = "Choose Your Weapon, Blow the Enemy into Pieces at Smaaash";
            TemplateService.description = "This virtual reality game will test your tact, aiming skills, vigilance and speed as you wield a weapon of your choice and turn the enemy into dust.";
            TemplateService.keywords = "";
        }
        if ($stateParams.snowrushCity === "ludhiana" && $stateParams.id === "art-of-attack") {
            TemplateService.title = "A VR Game at Smaaash Where you Choose your Weapon  ";
            TemplateService.description = "Don your Oculus gear, opt for the deadliest weapons and begin the damage. This virtual reality game is made for fighters who never say die.";
            TemplateService.keywords = "vr games, virtual reality games, virtual reality, virtual reality gaming";
        }
        //art-of-attack
        //war-on-wheels
        if ($stateParams.snowrushCity === "bengaluru" && $stateParams.id === "war-on-wheels") {
            TemplateService.title = "War on Wheels is A Virtual Reality that rocks at Smaaash";
            TemplateService.description = "Engage in a war with zombies, one of you will drive the tank while the other will blast enemies. A VR game perfected for team hunting.";
            TemplateService.keywords = "vr games, virtual reality games, virtual reality, virtual reality gaming";
        }
        if ($stateParams.snowrushCity === "gurgaon-cyber-hub" && $stateParams.id === "war-on-wheels") {
            TemplateService.title = "Roast the Enemy in War On Wheels a VR Game at Smaaash";
            TemplateService.description = "This two player virtual reality game is for hardcore gamers, wherein one player takes the wheel and the other bombs the enemy relentlessly. ";
            TemplateService.keywords = "vr games,virtual reality games,virtual reality,virtual reality gaming";
        }
        //war-on-wheels
        //x-2-motor-racing-simulator
        if ($stateParams.snowrushCity === "noida" && $stateParams.id === "x-2-motor-racing-simulator") {
            TemplateService.title = "X2 Racing Simulator is a Crazy Car Racing Game at Smaaash";
            TemplateService.description = "X2 Motor Racing is an extreme car racing game that tests your racetrack maneuvering skills. Come for a racing showdown, that’s crafted for the best.";
            TemplateService.keywords = " games zone in noida, arcade games";
        }
        if ($stateParams.snowrushCity === "ludhiana" && $stateParams.id === "x-2-motor-racing-simulator") {
            TemplateService.title = "A Car Racing Game that’ll Test Your Mettle";
            TemplateService.description = "Get into the cockpit of this racing car and blast off. This car racing game gives you a fast lifelike driving experience topped with loads of zippy thrills.";
            TemplateService.keywords = " games zone in ludhiana, arcade games";
        }
        if ($stateParams.snowrushCity === "hyderabad" && $stateParams.id === "x-2-motor-racing-simulator") {
            TemplateService.title = "Smaaash | Feel your Heart Race at the Racing Arcade ";
            TemplateService.description = "X2 motor racing simulator at SMAAASH, succeeding in making you feel like you are actually on the tracks	";
            TemplateService.keywords = "racing arcade, driving simulation games, game zone, game zone in hyderabad	";
        }
        if ($stateParams.snowrushCity === "bengaluru" && $stateParams.id === "x-2-motor-racing-simulator") {
            TemplateService.title = "X2 Motor Racing Simulator At Smaaash, Fast And Furious";
            TemplateService.description = "The arcade game that gives you a dose of insane speed. Take the wheel in this racer’s delight at Smaaash, Bengaluru.";
            TemplateService.keywords = " arcade game, arcade game in bengaluru";
        }
   
           //x-2-motor-racing-simulator-2
             if ($stateParams.snowrushCity === "gurgaon-cyber-hub" && $stateParams.id === "x-2-motor-racing-simulator-2") {
            TemplateService.title = "X2 Motor Racing Simulator At Smaaash, Fast And Furious";
            TemplateService.description = "The arcade game that gives you a dose of insane speed. Take the wheel in this racer’s delight at Smaaash, Cyberhub, Gurgaon.";
            TemplateService.keywords = " arcade game, arcade game in gurgaon";
        }
        //walk-the-plank
        if ($stateParams.snowrushCity === "ludhiana" && $stateParams.id === "walk-the-plank") {
            TemplateService.title = "Walk the Plank is an Adrenaline Pumping VR Game ";
            TemplateService.description = "If you’re scared of heights, this virtual reality game is going to give you scarier thrills. Dangling between two skyscrapers, you need to complete a challenge.";
            TemplateService.keywords = "vr games, virtual reality games, virtual reality, virtual reality gaming";
        }
        if ($stateParams.snowrushCity === "gurgaon-cyber-hub" && $stateParams.id === "walk-the-plank") {
            TemplateService.title = "Battle Dizzying Heights in This Gripping VR Game ";
            TemplateService.description = "Dangling between two skyscrapers is frightening for sure, how about completing a task on top of that, yes, that’s what this thrilling VR game is all about.";
            TemplateService.keywords = "vr games,virtual reality games,virtual reality,virtual reality gaming";
        }
        if ($stateParams.snowrushCity === "hyderabad" && $stateParams.id === "walk-the-plank") {
            TemplateService.title = "Thrilling Virtual Reality Game at SMAAASH, Hyderabad";
            TemplateService.description = "Among some of the most innovative VR games, walk the plank is a daring virtual reality game challenging your physical and mental balance	";
            TemplateService.keywords = "vr games, virtual reality games, virtual reality, virtual reality gaming, virtual reality games in Hyderabad";
        }
        if ($stateParams.snowrushCity === "noida" && $stateParams.id === "walk-the-plank") {
            TemplateService.title = "It’s no Stroll, this VR Game is Like Walking Towards Death";
            TemplateService.description = "Walk the plank is a dreaded virtual reality game, wherein you have to balance on a narrow plank that bridges two tall skyscrapers and complete a task.";
            TemplateService.keywords = "vr games, virtual reality games, virtual reality, virtual reality gaming";
        }
        //walk-the-plank
        //pool-jack
        console.log("$stateParams.snowrushCity ", $stateParams.snowrushCity);
        if ($stateParams.snowrushCity === " gurgaon-sector-29" && $stateParams.id === "pool-jack") {
            TemplateService.title = "A Game of Pool Always Adds to the Party Verve at Smaaash";
            TemplateService.description = "Enjoy a great game of pool with your friends, as you cool off from the Sky Karting frenzy and enjoy great food and drinks by the side.";
            TemplateService.keywords = "games zone , game zones in gurgaon";
        }
        //pool-jack

        //9-d-xtreme-interactive-theatre
        if ($stateParams.snowrushCity === "mumbai" && $stateParams.id === "9-d-xtreme-interactive-theatre") {
            TemplateService.title = "Lifelike 9D Extreme Interactive Theatre at Smaaash";
            TemplateService.description = "Goosebumps guaranteed; this virtual reality attraction transforms illusion into a lifelike experience as you scream in your roller coaster, at Smaaash, Mumbai.";
            TemplateService.keywords = "vr games,virtual reality games,virtual reality,virtual reality gaming";
        }
        if ($stateParams.snowrushCity === "delhi" && $stateParams.id === "9d-xtreme-interactive-theatre") {
            TemplateService.title = "Lifelike 9D Extreme Interactive Theatre at Smaaash";
            TemplateService.description = "Goosebumps guaranteed; this virtual reality attraction transforms illusion into a lifelike experience as you scream in your roller coaster, at Smaaash, Delhi.";
            TemplateService.keywords = "VR game, virtual reality";
        }
        if ($stateParams.snowrushCity === "gurgaon-ambience-mall" && $stateParams.id === "9d-xtreme-interactive-theatre-2") {
            TemplateService.title = " Lifelike 9D Extreme Interactive Theatre at Smaaash";
            TemplateService.description = "Goosebumps guaranteed; this VR game transforms illusion into a lifelike experience as you scream in your roller coaster, at Smaaash, Ambience Mall, Gurgaon. ";
            TemplateService.keywords = "VR game, virtual reality";
        }
        //9-d-xtreme-interactive-theatre
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
        NavigationService.signupProfile(function (data) {
            $scope.userprofile = data.data;
            console.log("  $scope.userprofile", $scope.userprofile);
        });
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


    .controller('HostCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $uibModal, $location, $state) {
        $scope.template = TemplateService.changecontent("host-party");
        $scope.menutitle = NavigationService.makeactive("Host Party");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.myUrl = $location.absUrl();


        $scope.goTOPartyFor = function (partyFor) {
            if (partyFor) {
                $scope.partyName = partyFor;

            }
        }


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
        TemplateService.removeLoaderOn(2);
        $scope.moreDesc = {};

        $scope.formData = {};

        $scope.formCompleteAssistance = false;
        $scope.assistanceLogin = function (formData) {
            console.log("formData in fun", formData);
            if (formData) {
                // $scope.formCompleteAssistance = true;
                formData.city = $.jStorage.get("cityid");
                NavigationService.assistanceLoginSignup(formData, function (data) {
                    console.log("in nav", formData);
                    console.log("assistanceLogin", data);
                    if (data.value == true) {
                        $scope.formCompleteAssistance = true;
                        $timeout(function () {
                            $scope.formCompleteAssistance = false;
                            // $scope.formCompleteAssistanceThank = false;
                            $scope.formData = {};
                        }, 2000);

                    } else {

                    }
                })
            }

        }
        $scope.myfun = function () {
            console.log("im in");

        }
        if ($stateParams.hostCity) {

            NavigationService.getCity(function (data) {
                $scope.getCities = _.cloneDeep(data.data);
                console.log("$scope.getCities ", $scope.getCities);
                $scope.tempCity = _.find($scope.getCities, function (obj) {
                    return obj.myslug == $stateParams.hostCity;
                });
                NavigationService.getSingleExploreSmaaashByUrl($stateParams.id, $scope.tempCity._id, function (data) {
                    $scope.SingleHostParty1 = [];
                    $scope.SingleHostParty2 = [];
                    _.each(data.data, function (value) {
                        if (value.status) {
                            $scope.SingleHostParty2.push(value);
                            $scope.SingleHostParty1.push(value);
                        }
                    })


                    $scope.SingleHostParty = _.chunk($scope.SingleHostParty2, 3);
                    $scope.content = _.groupBy($scope.SingleHostParty, 'hostAPartyType');
                    $scope.birthday = $scope.content['57d6a09dbd5eb9846074b419'];
                    $scope.kittyparties = $scope.content['57e1429c3da62fae1dfc560c'];
                    $scope.wedding = $scope.content['57d6a027bd5eb9846074b418'];
                    $scope.corporate = $scope.content['57e142483da62fae1dfc55f2'];
                    TemplateService.removeLoader();
                });

            });
        }



        $scope.readMore = function (id, indexid) {

            console.log(id);
            _.each($scope.moreDesc, function (value, property) {
                console.log("property", property);
                if (id != property) {
                    $scope.moreDesc[property] = false;
                }
            });
            $scope.moreDesc[id] = ($scope.moreDesc[id] == true) ? false : true;
            console.log($scope.moreDesc);
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
            TemplateService.removeLoader();

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
            $scope.modalInstance1 = $uibModal.open({
                animation: true,
                templateUrl: "views/modal/host-popup.html",
                scope: $scope,
                windowClass: "no-white-bg"
            });

        };

        NavigationService.getCity(function (data) {
            $scope.getCities1 = data.data;
            console.log("$scope.getCities1###", $scope.getCities1);
        });

        // $scope.getCities1 = [{
        //     "_id": "577f4d106b78e0bc03724800",
        //     "__v": 0,
        //     "myslug": "mumbai",
        //     "weekend": "Fri-Sun   11am - 1 am",
        //     "weekdays": "Mon-Thurs   12:30pm - 1am",
        //     "pdf": "",
        //     "logo": "590da160f7a66a33414b4567.png",
        //     "Photo": "http://ent.itspl.net/Upload/Branch/521641720_Mumbai.jpg",
        //     "BranchName": "Smaaash Mumbai",
        //     "BranchID": "12",
        //     "twitter": "twi hashtag",
        //     "facebook": "fb hashtag",
        //     "instagram": "insta hashtag",
        //     "image": "img/nav/mumbai.png",
        //     "order": "7",
        //     "name": "Mumbai"
        // }, {
        //     "_id": "577f4d246b78e0bc03724802",
        //     "__v": 0,
        //     "myslug": "gurgaon-cyber-hub",
        //     "weekend": "Fri-Sun   11am - 12am",
        //     "weekdays": "Mon-Thurs   11am - 12am",
        //     "pdf": "",
        //     "logo": "590da46bf7a66a33414b4eb9.png",
        //     "Photo": "http://ent.itspl.net/Upload/Branch/678165973_Gurgaon.jpg",
        //     "BranchName": "Smaaash Gurgaon Cyber Hub",
        //     "BranchID": "14",
        //     "twitter": "twi hashtag",
        //     "facebook": "fb hashtag",
        //     "instagram": "insta hashtag",
        //     "image": "img/nav/gurgoan-cyber.png",
        //     "order": "6",
        //     "name": "Gurgaon - Cyber Hub"
        // }, {
        //     "_id": "579b0d74fa72c24405ee0818",
        //     "__v": 0,
        //     "myslug": "hyderabad",
        //     "weekend": "Fri-Sun   11am - 12am",
        //     "weekdays": "Mon-Thurs   12pm - 12am",
        //     "pdf": "",
        //     "logo": "590da4aef7a66a33414b4f69.png",
        //     "Photo": "http://ent.itspl.net/Upload/Branch/1982363119_Hyderabad.jpg",
        //     "BranchName": "Smaaash Hyderabad",
        //     "BranchID": "13",
        //     "twitter": "",
        //     "facebook": "",
        //     "instagram": "",
        //     "image": "img/nav/hyderabad.png",
        //     "order": "5",
        //     "name": "Hyderabad"
        // }, {
        //     "_id": "577f4d1c6b78e0bc03724801",
        //     "__v": 0,
        //     "myslug": "bengaluru",
        //     "weekend": "Fri-Sat   11am - 1am",
        //     "weekdays": "Sun-Thurs   11am - 11pm",
        //     "pdf": "",
        //     "logo": "590da18ef7a66a33414b45f6.png",
        //     "Photo": "http://ent.itspl.net/Upload/Branch/143438502_Bengaluru.jpg",
        //     "BranchName": "Smaaash Bengaluru",
        //     "BranchID": "15",
        //     "twitter": "twi hashtag",
        //     "facebook": "fb hashtag",
        //     "instagram": "insta hashtag",
        //     "image": "img/nav/bengaluru.png",
        //     "order": "4",
        //     "name": "Bengaluru"
        // }, {
        //     "_id": "57808c9032b1d30b046dd48c",
        //     "__v": 0,
        //     "myslug": "noida",
        //     "weekend": "Fri-Sun   11am - 11pm",
        //     "weekdays": "Mon-Thurs   11am - 11pm",
        //     "pdf": "",
        //     "logo": "590da47df7a66a33414b4efb.png",
        //     "Photo": "http://ent.itspl.net/Upload/Branch/1131451159_Noida.jpg",
        //     "BranchName": "Smaaash Noida",
        //     "BranchID": "17",
        //     "twitter": "twi shimla",
        //     "facebook": "fb shimla",
        //     "instagram": "insta shimla",
        //     "image": "img/nav/noida.png",
        //     "order": "3",
        //     "name": "Noida"
        // }, {
        //     "_id": "58808e0e94082f1ed90f06a0",
        //     "__v": 0,
        //     "myslug": "ludhiana",
        //     "weekend": "Fri-Sun   11am - 11pm",
        //     "weekdays": "Mon-Thurs   11am - 11pm",
        //     "pdf": "",
        //     "logo": "590da4c2f7a66a33414b4fb7.png",
        //     "Photo": "",
        //     "BranchName": "",
        //     "BranchID": "",
        //     "twitter": "",
        //     "facebook": "",
        //     "instagram": "",
        //     "image": "img/nav/ludhiana.png",
        //     "order": "2",
        //     "name": "Ludhiana"
        // }, {
        //     "_id": "587366fa7309110c7de34906",
        //     "__v": 0,
        //     "myslug": "gurgaon-sector-29",
        //     "weekend": "Fri-Sun   12pm - 11.30pm",
        //     "weekdays": "Mon-Thurs   12pm - 11.30pm",
        //     "pdf": "",
        //     "logo": "59106cb9d86cf206d96dde0a.png",
        //     "Photo": "",
        //     "BranchName": "Smaaash Gurgaon - Sector 29",
        //     "BranchID": "",
        //     "twitter": "",
        //     "facebook": "",
        //     "instagram": "",
        //     "image": "img/nav/gurgaon-sector.png",
        //     "order": "1",
        //     "name": "Gurgaon - Sector 29"
        // }, {
        //     "_id": "5a0ab43bb7e6ab63e3ae6cfa",
        //     "__v": 0,
        //     "myslug": "delhi",
        //     "weekend": "Fri-Sun   11 am to 12 am",
        //     "weekdays": "Mon-Thurs   11 am to 12 am",
        //     "pdf": "",
        //     "logo": "5a0ab405b7e6ab63e3ae6c53.png",
        //     "Photo": "",
        //     "BranchName": "Smaaash Delhi",
        //     "BranchID": "12",
        //     "twitter": "twi hashtag",
        //     "facebook": "fb hashtag",
        //     "instagram": "insta hashtag",
        //     "image": "img/nav/delhi.png",
        //     "order": "8",
        //     "name": "Delhi"
        // }, {
        //     "_id": "5a16b85263ed4158867bb141",
        //     "__v": 0,
        //     "myslug": "gurgaon-ambience-mall",
        //     "weekend": "Fri-Sun   11 am to 12 am",
        //     "weekdays": "Mon-Thurs   11am - 12 am",
        //     "pdf": "",
        //     "logo": "5a16b84863ed4158867bb126.png",
        //     "Photo": "",
        //     "BranchName": "Smaaash Gurgaon Ambience Mall",
        //     "BranchID": "12",
        //     "twitter": "twi hashtag",
        //     "facebook": "https://www.facebook.com/SmaaashAmbienceMallGurgaon/",
        //     "instagram": "insta hashtag",
        //     "image": "img/nav/gurgaonAmbianceMall.png",
        //     "order": "9",
        //     "name": "Gurgaon Ambience Mall"
        // }, {
        //     "BranchID": "17",
        //     "BranchName": "Smaaash Pune",
        //     "Photo": "",
        //     "facebook": "https://www.facebook.com/SmaaashPune/",
        //     "image": "5885c903d0e83a29f610e94a.png",
        //     "instagram": "",
        //     "logo": "5a311c5b443b8113be3d33a4.png",
        //     "myslug": "pune",
        //     "name": "Pune",
        //     "order": "10",
        //     "pdf": "",
        //     "twitter": "",
        //     "weekdays": "Mon-Thurs    11 am to 11 pm",
        //     "weekend": "Fri-Sun   11 am to 11 pm",
        //     "__v": 0,
        //     "_id": "5a2f81f1a41b1d20ca8c58d7",
        // }, {
        //     "BranchID": "18",
        //     "BranchName": "Smaaash Chandigarh",
        //     "Photo": "",
        //     "facebook": "https://www.facebook.com/SmaaashChandigarh/",
        //     "image": "5885c903d0e83a29f610e94a.png",
        //     "instagram": "",
        //     "logo": "5a3125a3740f9b151eb9781b.png",
        //     "myslug": "chandigarh",
        //     "name": "Chandigarh",
        //     "order": "11",
        //     "pdf": "",
        //     "twitter": "",
        //     "weekdays": "Mon-Thurs   11 am to 12 am",
        //     "weekend": "Fri-Sun   11 am to 12 am",
        //     "__v": 0,
        //     "_id": "5a3123e1ee2ab36f8785c797",
        // }];
        $scope.formDatapopup = {};
        $scope.submitHostPopup = function (formDatapop) {
            console.log("imin");
            if (formDatapop) {
                $scope.modalInstance1.close();
                formDatapop.city = $.jStorage.get("cityid");
                NavigationService.hostGetCall(formDatapop, function (data) {
                    console.log("data", data);
                    if (data.value === true) {
                        $scope.modalInstance2 = $uibModal.open({
                            animation: true,
                            templateUrl: "views/modal/hosts-popup.html",
                            scope: $scope,

                            windowClass: "no-white-bg"
                        });
                        $timeout(function () {
                            $scope.modalInstance2.close();
                            $scope.formDatapopup = {};
                        }, 3000);
                    }
                })

            }
        }


        //seo



        console.log("$stateParams.hostCity", $stateParams.hostCity);

        if ($stateParams.hostCity === "mumbai") {
            TemplateService.title = "Host A Party With Extravagance At Smaaash";
            TemplateService.description = "Host a sports themed party wherein you can eat, drink, play games, sport and a lot more at Smaaash, the party place in Mumbai.";
            TemplateService.keywords = "party place in Mumbai";
        }
        if ($stateParams.hostCity === "gurgaon-cyber-hub") {
            TemplateService.title = "Host A Party With Extravagance At Smaaash";
            TemplateService.description = "Host a sports themed party wherein you can eat, drink, play games, sport and a lot more at Smaaash, the party place in Gurgaon.";
            TemplateService.keywords = "party place in Gurgaon";
        }
        if ($stateParams.hostCity === "ludhiana") {
            TemplateService.title = "Looking for Party Places? Don’t. Smaaash is THE Party Place";
            TemplateService.description = "All in one place to host a range of parties from team building activities to kitty parties, that too with offers on special occasions and customization possible";
            TemplateService.keywords = "party places,  team building activities, kitty parties";
        }
        if ($stateParams.hostCity === "hyderabad") {
            TemplateService.title = "All New Party Hosting Venue in Hyderabad | Smaaash";
            TemplateService.description = "Show them all how real parties are done at one of the best party places in Hyderabad with SMAAASH";
            TemplateService.keywords = "party hosting venue in Hyderabad, party places in Hyderabad";
        }
        if ($stateParams.hostCity === "bengaluru") {
            TemplateService.title = "Host A Party With Extravagance At Smaaash";
            TemplateService.description = "Host a sports themed party wherein you can eat, drink, play games, sport and a lot more at Smaaash, the party place in Bengaluru.";
            TemplateService.keywords = "party place in Bengaluru,";
        }

        if ($stateParams.hostCity === "gurgaon-sector-29") {
            TemplateService.title = "Fast and Furious Party Place in Gurgaon";
            TemplateService.description = "Be it a corporate party, birthday party or kitty party, do it in speedy style at Smaaash Sky Karting and Pitstop Brewpub.";
            TemplateService.keywords = "party place in Gurgaon ,corporate party, birthday party,  kitty party";
        }
        if ($stateParams.hostCity === "noida") {
            TemplateService.title = "Throw a Bash, at One of the Sizzling Party Places, Smaaash";
            TemplateService.description = "Corporate parties, pre wedding parties, kitty parties, birthday parties and a lot more; bashes at Smaaash are high energy, vibrant detours from the usual boring parties.";
            TemplateService.keywords = "party places, Corporate parties, pre wedding parties ,kitty parties, birthday parties";
        }
         if ($stateParams.hostCity === "delhi") {
            TemplateService.title = "Host A Party With Extravagance At Smaaash";
            TemplateService.description = "Host a sports themed party wherein you can eat, drink, play games, sport and a lot more at Smaaash, the party place in Delhi.";
            TemplateService.keywords = "party place in Delhi";
        }
           if ($stateParams.hostCity === "gurgaon-ambience-mall") {
            TemplateService.title = "Host A Party With Extravagance At Smaaash";
            TemplateService.description = "Host a sports themed party wherein you can eat, drink, play games, sport and a lot more at Smaaash, the party place in Gurgaon.";
            TemplateService.keywords = "party place in Gurgaon";
        }
    })

    .controller('RechargeCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal, $window) {
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
        $scope.isRecharge = false;
        $scope.submitRecharge = function (rechargeOnline) {

            if (rechargeOnline && $.jStorage.get("loginDetail") === null) {
                $uibModal.open({
                    animation: true,
                    templateUrl: 'views/modal/wishlistsigup.html',
                    scope: $scope
                });
            } else if (rechargeOnline && $.jStorage.get("loginDetail") != null) {
                $scope.isRecharge = true;

                NavigationService.rechargeCard(rechargeOnline, function (data) {
                    console.log("data", data);
                    if (data.value === true) {
                        $scope.newWindow = data.data.RechargeCard[0].Link;
                        $window.location.href = $scope.newWindow;
                    } else if (data.value === false) {
                        $scope.incorrect = true;
                        $scope.isRecharge = false;
                    }
                })

            }

        }





    })
    .controller('SorryCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("fail");
        $scope.menutitle = NavigationService.makeactive("Sorry");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        //  $stateParams.orderNo;
        //  $stateParams.CNR_No;
        //     $stateParams.PayAmount;
        // var google_conversion_value = 300.00; value should be dynamic.
        // $scope.PaymentFor=$stateParams.PayAmount;
        // console.log("$stateParams.PaymentFor",$stateParams.PaymentFor);
        //   console.log("$stateParams.CNR_No",$stateParams.CNR_No);
        //     console.log("$stateParams.PayAmount",$stateParams.PayAmount);
        // $scope.checkoutAmount=$stateParams.PayAmount;
        $scope.checkoutAmount = $stateParams.PayAmount;
        console.log("$stateParams.PaymentFor", $stateParams.PaymentFor);
    })


    .controller('sorrieCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter) {
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



    .controller('AboutCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("about");
        $scope.menutitle = NavigationService.makeactive("About");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

    })

    .controller('ProfileCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal, $state, $window, $stateParams, $filter) {
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
                windowClass: 'widths'
            })
        };

        $scope.custBooking = [];
        $scope.CustCardRecharge = [];
        $scope.rechargeOnline = {};
        if ($.jStorage.get("loginDetail") != null) {
            $scope.rechargeOnline.CustomerID = $.jStorage.get("loginDetail").CustomerID;
            $scope.rechargeOnline.BranchID = $.jStorage.get("branchId");
        }

        $scope.rechargeOnline.PGReturnURL = "http://104.155.129.33:82/signup/returnUrlFunction";

        $scope.incorrect = false;
        $scope.isRecharge = false;
        $scope.submitRecharge = function (rechargeOnline) {
            $scope.invalidCardNO = "";
            if (rechargeOnline && $.jStorage.get("loginDetail") === null) {
                $uibModal.open({
                    animation: true,
                    templateUrl: 'views/modal/wishlistsigup.html',
                    scope: $scope
                });
            } else if (rechargeOnline && $.jStorage.get("loginDetail") != null) {
                $scope.isRecharge = true;

                NavigationService.rechargeCard(rechargeOnline, function (data) {
                    console.log("data", data);
                    if (data.value == true) {
                        $scope.newWindow = data.data.RechargeCard[0].Link;
                        $window.location.href = $scope.newWindow;
                    } else if (data.value == false) {
                        $scope.incorrect = true;
                        $scope.isRecharge = false;
                        console.log("im false");
                        console.log("data", data);
                        $scope.invalidCardNO = data.data.RechargeCard[0].Message;
                        console.log("  $scope.invalidCardNO", $scope.invalidCardNO);
                    }
                })

            }

        }

        $scope.detailsForBal = {};
        // $scope.detailsForBal.CardNo = "C68C765B";
        $scope.detailsForBal.CardNo = $.jStorage.get("loginDetail").CardNo;
        $scope.detailsForBal.MobileNo = $.jStorage.get("loginDetail").CustomerMobile;
        NavigationService.getCustomerBalance($scope.detailsForBal, function (data) {
            console.log("redemablePoints data", data);
            if (data.value) {
                $scope.redemablePoints = data.data.CustomerBalance[0].RedemablePoints;
                $scope.cardBalance = data.data.CustomerBalance[0].CardBalance;
                console.log("redemablePoints", $scope.redemablePoints);
            } else { }
        })


        $scope.userprofile = {};

        console.log("$scope.userprofile", $scope.userprofile);

        NavigationService.signupProfile(function (data) {
            console.log("  data.data", data.data);
            $scope.userprofile = data.data;
            $scope.userprofile.CustomerPhoneNo = data.data.CustomerMobile;
            $scope.userprofile.BranchID = $.jStorage.get("branchId");
            $scope.userprofile.CustomerPassword = " ";
            $scope.userprofile.CustomerPhotoPath = " ";
            $scope.userprofile.OTP = " ";
            NavigationService.setUser(data.data);
            $scope.userprofile.dob = new Date(data.data.dob);
        });

        $scope.getAvtar = function (avtar) {
            if (avtar) {
                $scope.userprofile.profilePic = avtar;
            }
        }
        $scope.formComplete = false;
        $scope.isUpdate = false;
        $scope.submitUserProfile = function (userprofile) {
            console.log("im in");
            console.log("userprofile", userprofile);
            $scope.isUpdate = true;
            NavigationService.updateProfile(userprofile, function (data) {
                console.log("data", data);
                if (data.value === true) {
                    $scope.isUpdate = false;
                    NavigationService.setUser(data.data);
                    $scope.formComplete = true;
                    $timeout(function () {
                        $scope.formComplete = false;
                        $scope.isUpdate = false;
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
        $scope.isBooking = false;
        $scope.CustID = $.jStorage.get("loginDetail").CustomerID;
        NavigationService.GetCustomerBookingDetails($scope.CustID, function (data) {
            console.log("data.data", data.data);
            console.log("CustomerBooking*********", data.data.CustomerBooking);

            if (data.value) {
                if (data.data.ErrorStatus) {
                    $scope.msg = true;
                    $scope.isBooking = true;
                } else {
                    $scope.isBooking = true;
                    $scope.custBooking = data.data.CustomerBooking;
                    // $scope.custBooking = data.GetCustomerBookingDetails.CustomerBooking;
                    $scope.CustCardRecharge = data.data.CustomerCardRecharge;
                    // $scope.CustCardRecharge = data.GetCustomerBookingDetails.CustomerCardRecharge;
                    $scope.bookingDetails = $scope.custBooking.concat($scope.CustCardRecharge);
                    console.log("$scope.bookingDetails", $scope.bookingDetails);
                    if ($scope.bookingDetails[0].Status == '0' && $scope.bookingDetails[0].Message == 'Data Not Available') {
                        $scope.msg = true;
                    } else {
                        $scope.msg = false;
                    }
                    _.each($scope.bookingDetails, function (value) {
                        if (value.Message === "Get Booking Data") {
                            value.objtype = "Booking";
                        } else if (value.Message === "Get Card Recharge Data") {
                            value.objtype = "Recharge";
                        };

                    });
                }


            } else if (data.value === false) {
                $scope.msg = true;
                $scope.isBooking = true;
            }
        })

        $scope.tab = "design";
        $scope.classb = 'active-tab';
        $scope.classa = '';
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
        $scope.logout = function () {
            console.log("im in logout");
            $state.go("home");
            if ($.jStorage.get("loginDetail") != null) {

                NavigationService.logout(function (data) {
                    console.log("im in nav logout");
                    console.log("data", data);

                    $state.go("home");
                    if (data.value === true) {
                        $scope.hidelogout = true;
                        location.reload();
                    }
                    console.log("im in nav logout");

                })
            } else {

            }

        };
        //log out//

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


        $scope.removeFromWishList = function (id) {
            NavigationService.removeFromWishList(id, function (data) {
                getuserWishList();
            });
        };
        // $scope.click=false;
        $scope.takePic = function () {
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
        $scope.onError = function (err) {
            $scope.$apply(
                function () {
                    $scope.webcamError = err;
                }
            );
        };

        $scope.onSuccess = function () {
            // The video element contains the captured camera data
            _video = $scope.channel.video;
            $scope.$apply(function () {
                $scope.patOpts.w = _video.width;
                $scope.patOpts.h = _video.height;
                //$scope.showDemos = true;
            });
        };

        $scope.onStream = function (stream) {
            // You could do something manually with the stream.
        };

        $scope.makeSnapshot = function (data) {
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



    })

    .controller('EventsCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $rootScope) {
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
        TemplateService.removeLoaderOn(1);
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
            TemplateService.removeLoader();
        });
        if ($stateParams.city) {
            $stateParams.city = $.jStorage.get("citySlug");
            $state.go("stars", {
                city: $stateParams.city
            });
        }


    })

    .controller('DrinkCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $uibModal, $location, $filter, $sce, $state, $rootScope) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("drink-party");
        $scope.menutitle = NavigationService.makeactive("Drink Party");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.myUrl = $location.absUrl();
        $scope.menu = "menu-out";
        TemplateService.removeLoaderOn(1);
        // $scope.pdfpath = "http://104.155.129.33:82/upload/readFile?file";
        $scope.getMenu = function () {
            if ($scope.menu == "menu-out") {
                $scope.menu = "menu-in";
            } else {
                $scope.menu = "menu-out";
            }
        };

        //seo

        console.log("$stateParams.drinkCity", $stateParams.drinkCity);

        if ($stateParams.drinkCity === "mumbai") {
            TemplateService.title = "Food And Beverages At Smaaash, Eat Some, Play Some";
            TemplateService.description = "Mouth-watering restaurants lace the Smaaash playground so that you nourish yourself with delicious cuisine, as you play at Smaaash, Mumbai.";
            TemplateService.keywords = "event at smaaash";
        }
        if ($stateParams.drinkCity === "gurgaon-cyber-hub") {
            TemplateService.title = "Food And Beverages At Smaaash, Eat Some, Play Some";
            TemplateService.description = "Mouth-watering restaurants lace the Smaaash playground so that you nourish yourself with delicious cuisine, as you play at Smaaash, Cyberhub, Gurgaon.";
            TemplateService.keywords = "";
        }
        if ($stateParams.drinkCity === "ludhiana") {
            TemplateService.title = "Sports Bar and a Perky Café to Hang Out at | Smaaash  Ludhiana";
            TemplateService.description = "Themed after the country’s favourite sport, cricket, Cricket Café & Brewpub are a must experience, after Mighty Small Café, the perfect chill place to eat";
            TemplateService.keywords = "food and beverages";
        }
        if ($stateParams.drinkCity === "hyderabad") {
            TemplateService.title = "Eat. Drink. Play. Repeat. At Smaaash Hyderabad";
            TemplateService.description = "Not just your regular entertainment arena, but also an all time favourite, fun place to eat and drink in Hyderabad";
            TemplateService.keywords = "fun place to eat and drink in Hyderabad, fun place, fun place to eat and drink";
        }
        if ($stateParams.drinkCity === "bengaluru") {
            TemplateService.title = "Food And Beverages At Smaaash, Eat Some, Play Some";
            TemplateService.description = "Mouth-watering restaurants lace the Smaaash playground so that you nourish yourself with delicious cuisine, as you play at Smaaash, Bengaluru.";
            TemplateService.keywords = "";
        }

        if ($stateParams.drinkCity === "gurgaon-sector-29") {
            TemplateService.title = "Eating Out in Gurgaon is Now Eating in a Truck";
            TemplateService.description = "Enjoy scrumptious food and drinks in the truck shaped restaurant, Pitstop Brewpub after some serious Go Karting action at Smaaash Sky Karting. ";
            TemplateService.keywords = "Food and beverages";
        }

        if ($stateParams.drinkCity === "noida") {
            TemplateService.title = "The Best Place to Party With Scrumptious Food And Beverages";
            TemplateService.description = "Drool over awesome food and gorge on delicacies from the Mighty small restaurant as you go out to party at one of the most happening places in Noida.";
            TemplateService.keywords = "Food And Beverages ";
        }
          if ($stateParams.drinkCity === "delhi") {
            TemplateService.title = "Food And Beverages At Smaaash, Eat Some, Play Some";
            TemplateService.description = "Mouth-watering restaurants lace the Smaaash playground so that you nourish yourself with delicious cuisine, as you play at Smaaash, Delhi.";
            TemplateService.keywords = "event at smaaash";
        }
          if ($stateParams.drinkCity === "gurgaon-ambience-mall") {
            TemplateService.title = "Food And Beverages At Smaaash, Eat Some, Play Some";
            TemplateService.description = "Mouth-watering restaurants lace the Smaaash playground so that you nourish yourself with delicious cuisine, as you play at Smaaash, Ambience Mall, Gurgaon.";
            TemplateService.keywords = "";
        }
        //seo

        $scope.moreDesc = {};

        if ($stateParams.drinkCity) {
            NavigationService.getCity(function (data) {
                $scope.getCities = _.cloneDeep(data.data);
                console.log("$scope.getCities ", $scope.getCities);
                $scope.tempCity = _.find($scope.getCities, function (obj) {
                    return obj.myslug == $stateParams.drinkCity;
                });
                NavigationService.getSingleExploreSmaaashByUrl($stateParams.id, $scope.tempCity._id, function (data) {
                    $scope.drinkParty1 = data.data;
                    console.log("data", data.data);
                    if (_.isEmpty($scope.drinkParty1)) {
                        $state.go('home');
                    }
                    $scope.drinkParty = _.chunk(data.data, 3);
                    TemplateService.removeLoader();
                });

            });
        }


        $scope.readMore = function (id) {
            _.each($scope.moreDesc, function (value, property) {
                if (id != property) {
                    $scope.moreDesc[property] = false;
                }
            });
            $scope.moreDesc[id] = ($scope.moreDesc[id] == true) ? false : true;
            console.log($scope.moreDesc);
            $scope.myDesc = _.find($scope.drinkParty1, function (n) {
                return n._id == id;

            }).description;
        };
        $scope.imagesmodal = function () {
            $uibModal.open({
                animation: true,
                templateUrl: "views/modal/party.html",
                scope: $scope
            });

        };


        $scope.pdfmodal = function (pdf) {
            console.log("im in");
            $scope.pdfdata = pdf;
            $scope.pdfURL = $filter('uploadpath')($scope.pdfdata);
            $scope.finalURL = 'https://docs.google.com/gview?url=' + $scope.pdfURL + '&embedded=true';
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
        if ($stateParams.drinkCity) {
            $scope.bookingCity = $stateParams.drinkCity
        }
        $scope.bookings = function () {
            console.log("in in");
            $uibModal.open({
                animation: true,
                templateUrl: "views/modal/bookings.html",
                scope: $scope,
                windowClass: "no-white-bg"
            })
        };


        $scope.getGallery = function (gid) {
            console.log("aaa", gid);
            NavigationService.getFoodGallery(gid, function (data) {
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
        TemplateService.removeLoaderOn(1);
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
                _.each($scope.moreDesc, function (value, property) {
                    console.log("property", property);
                    if (id != property) {
                        $scope.moreDesc[property] = false;
                    }
                });
                $scope.moreDesc[id] = ($scope.moreDesc[id] == true) ? false : true;
                console.log($scope.moreDesc);
                $scope.myDesc = _.find($scope.SingleDealsPackages, function (n) {
                    return n._id == id;

                }).description;
            };
            TemplateService.removeLoader();
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

    .controller('DealsInnerCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter, $state, $location, $uibModal, $rootScope) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("deals-inner");
        $scope.menutitle = $stateParams.id.charAt(0).toUpperCase() + $stateParams.id.substring(1);
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.removeLoaderOn(1);
        $scope.myUrl = $location.absUrl();
        $scope.showTermsCondition = false;
        $scope.showTermsConditionfun = function () {
            $scope.showTermsCondition = !$scope.showTermsCondition;
        }
        // if ($stateParams.dealsinnercity) {
        //     console.log("im in city");
        //     $stateParams.dealsinnercity = $.jStorage.get("city");
        //     $state.go("deals-inner", {
        //         dealsinnercity: $stateParams.dealsinnercity,
        //         id: $stateParams.id
        //     });
        // }
        NavigationService.getCity(function (data) {
            $rootScope.smaaashCities = data.data;
        });
        if ($stateParams.image) {
            $scope.homeimage = $filter('uploadpath')($stateParams.image);

        }
        if ($stateParams.dealsinnercity) {
            NavigationService.getCity(function (data) {
                $scope.getCities = _.cloneDeep(data.data);
                console.log("$scope.getCities ", $scope.getCities);
                $scope.tempCity = _.find($scope.getCities, function (obj) {
                    return obj.myslug == $stateParams.dealsinnercity;
                });
                NavigationService.getDetailExploreSmaaashByUrl($stateParams.id, $scope.tempCity._id, function (data) {
                    $scope.detailDealsInner = data.data;
                    console.log("$scope.detailDealsInner", $scope.detailDealsInner);
                    if (_.isEmpty($scope.detailDealsInner) || Object.keys($scope.detailDealsInner).length == 0) {
                        console.log("im true");
                        $state.go('home');
                    }
                    $scope.detailDealsInner.banner = $filter('uploadpath')($scope.detailDealsInner.banner);
                    $scope.detailDealsInner.homeimage = $filter('uploadpath')($scope.detailDealsInner.homeimage);
                    $scope.detailDealsInner.image = $filter('uploadpath')($scope.detailDealsInner.image);
                    $scope.detailDealsInner.mobileBanner = $filter('uploadpath')($scope.detailDealsInner.mobileBanner);

                    TemplateService.removeLoader();
                });

            })
        }


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


        $scope.buyNow = function (BranchPackageID, price, mobile) {

            $scope.addToCartParams.BranchPackageID = BranchPackageID;
            // $scope.addToCartParams.BranchPackageID = "41";
            // $scope.addToCartParams.TotalAmount = "222";
            $scope.addToCartParams.TotalAmount = price;


            console.log("$scope.addToCartParams", $scope.addToCartParams);
            if ($.jStorage.get("loginDetail") === null) {
                $rootScope.getMenus();
                if (mobile == 'mobile') {
                    $rootScope.signinModal();
                }
            } else {
                NavigationService.addToCart($scope.addToCartParams, function (data) {
                    console.log("$scope.addToCartParams", $scope.addToCartParams);
                    if (data.value) {

                        if (data.data.AddToCart[0].Status === 1) {
                            console.log("inif", data);
                            $scope.successCartModal = $uibModal.open({
                                animation: true,
                                templateUrl: 'views/modal/addtocart.html',
                                scope: $scope
                            });
                            $timeout(function () {
                                $scope.successCartModal.close();
                                $state.go('cart', {
                                    cartCity: $rootScope.citySpecific
                                });
                            }, 1000);


                        } else if (data.data.AddToCart[0].Status === 0 && data.data.AddToCart[0].Message == "This Package Is Allready In Cart") {
                            console.log("in else", data);
                            $uibModal.open({
                                animation: true,
                                templateUrl: 'views/modal/alreadyCart.html',
                                scope: $scope
                            });

                        } else if (data.data.AddToCart[0].Status === 0 && data.data.AddToCart[0].Message == "Invalid Package") {
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



        //seo
      
               if ($stateParams.dealsinnercity === "bengaluru" && $stateParams.id === "2-x-tuesdays") {
            TemplateService.title = "2X Fun Tuesdays, get BOGO offer on all games at Smaaash";
            TemplateService.description = "Great deals and packages. Tuesdays are freebie days, have double the fun with one game free on purchase of the other only at Smaaash, Bengaluru.";
            TemplateService.keywords = "deals and packages";
        }
                    if ($stateParams.dealsinnercity === "gurgaon-ambience-mall" && $stateParams.id === "baller-bowler-deal-2") {
            TemplateService.title = "Baller Bowler Deal Only at Smaaash";
            TemplateService.description = "Twilight bowling with free shoe rentals and Pepsi, what else do you need to knock off stress and some pins at Ambience Mall, Gurgaon? Super deals and packages!";
            TemplateService.keywords = "Twilight bowling, bowling gurgaon";
        }
                     if ($stateParams.dealsinnercity === "bengaluru" && $stateParams.id === "beer-at-49") {
            TemplateService.title = "Cheers To Cheap Beers at Smaaash";
            TemplateService.description = "Beer at Rs. 49 on weekdays is a steal deal, tipsy is old-school, drunk is the new high at Smaaash Bengaluru. Find more great deals and packages.";
            TemplateService.keywords = "deals and packages";
        }
                        if ($stateParams.dealsinnercity === "mumbai" && $stateParams.id === "bowling-mashup") {
            TemplateService.title = "Bowling Mashup The Ultimate Deal at Smaaash!";
            TemplateService.description = "Karting, bowling, arcade and redemption games what a concoction of fun. Find more exciting deals and packages at Smaaash, Mumbai.";
            TemplateService.keywords = "deals and packages";
        }
                     if ($stateParams.dealsinnercity === "bengaluru" && $stateParams.id === "cheap-thrill-weekdays") {
            TemplateService.title = "Cheap Thrill Weekdays Only at Smaaash";
            TemplateService.description = "Get all games at Rs. 499 on weekdays until you huff and puff after playing. Find more great deals and packages at Smaaash, Bengaluru.";
            TemplateService.keywords = "deals and packages";
        }
                 
         if ($stateParams.dealsinnercity === "mumbai" && $stateParams.id === "crazy-twosday") {
            TemplateService.title = "Crazy Twosdays Offer at Smaaash";
            TemplateService.description = "Buy one game and get the other free, on all games on Tuesdays. Find more crazy deals and packages at Smaaash Mumbai.";
            TemplateService.keywords = "deals and packages";
        }        
           if ($stateParams.dealsinnercity === "bengaluru" && $stateParams.id === "game-nights-999") {
            TemplateService.title = "Exciting Game Nights at Smaaash ";
            TemplateService.description = "Now watch live match screenings and get to play all Smaaash games at Rs. 999 on Saturdays at Bengaluru. Look for more deals and packages.";
            TemplateService.keywords = "deals and packages";
        }
          if ($stateParams.dealsinnercity === "mumbai" && $stateParams.id === "game-on-mondays") {
            TemplateService.title = "It’s Game On Mondays at Smaaash";
            TemplateService.description = "Get all games for just Rs. 1200 on Mondays at Smaaash, Mumbai. More exciting deals and packages await you at Smaaash. ";
            TemplateService.keywords = "deals and packages";
        }
         if ($stateParams.dealsinnercity === "mumbai" && $stateParams.id === "game-on-mondays-2") {
            TemplateService.title = "It’s Game On Mondays at Smaaash";
            TemplateService.description = "Get all games for just Rs. 1200 on Mondays at Smaaash, Bengaluru. More exciting deals and packages await you at Smaaash. ";
            TemplateService.keywords = "deals and packages";
        }
          if ($stateParams.dealsinnercity === "gurgaon-ambience-mall" && $stateParams.id === "gaming-delight") {
            TemplateService.title = "Gaming Delight Only at Smaaash";
            TemplateService.description = " Get a VR game, a game of bowling, 5 arcade games  and a soft beverage at Rs. 499. More exciting deals and packages at Smaaash, Ambience Mall, Gurgaon.";
            TemplateService.keywords = "deals and packages";
        }
         if ($stateParams.dealsinnercity === "mumbai" && $stateParams.id === "girl-power-wednesday") {
            TemplateService.title = "Girl Power Wednesday at Smaaash";
            TemplateService.description = "Buy one drink and get two free, also, savour on unlimited Sangria. Girls, find more exciting deals and packages at Smaaash, Mumbai.";
            TemplateService.keywords = "deals and packages";
        }
           if ($stateParams.dealsinnercity === "gurgaon-ambience-mall" && $stateParams.id === "gotta-golf") {
            TemplateService.title = "Gotta Golf package at Smaaash";
            TemplateService.description = "Putt like a golfing star in Jungle Mini Golf, get one arcade game and a glass of Pepsi at Rs. 275. Great deals and packages only at Smaaash, Gurgaon.";
            TemplateService.keywords = "deals and packages";
        }
           if ($stateParams.dealsinnercity === "mumbai" && $stateParams.id === "maximum-smaaash") {
            TemplateService.title = "Maximum Smaaash, a great deal to explore";
            TemplateService.description = "Bowling, Cricket, Sky Karting and one virtual reality game, all for Rs. 999. More exciting deals and packages only at Smaaash, Mumbai.";
            TemplateService.keywords = "deals and packages";
        }
           if ($stateParams.dealsinnercity === "bengaluru" && $stateParams.id === "monday-buffet") {
            TemplateService.title = "Mega Monday Motivation only at Smaaash";
            TemplateService.description = "Get all games and a china box meal only for just Rs. 1500. Great Monday deals and packages at Smaaash, Bengaluru.";
            TemplateService.keywords = "deals and packages";
        }
           if ($stateParams.dealsinnercity === "gurgaon-ambience-mall" && $stateParams.id === "rollin-weekends-2") {
            TemplateService.title = "Rolling Weekends only at Smaaash";
            TemplateService.description = "Enjoy a weekend twilight date with a game of bowling, shoe rental and a glass of Pepsi at Rs. 349 only. More deals and packages at Ambience Mall, Gurgaon.";
            TemplateService.keywords = "deals and packages";
        }
          if ($stateParams.dealsinnercity === "mumbai" && $stateParams.id === "sky-karting-offer") {
            TemplateService.title = "Sky Karting offer only at Smaaash";
            TemplateService.description = "Sizzling prizes await you every month at the scorching Sky Karting track. Find more deals and packages at Smaaash, Mumbai.";
            TemplateService.keywords = "Sky Karting, Sky Karting in mumbai";
        }
          if ($stateParams.dealsinnercity === "mumbai" && $stateParams.id === "smaaash-junior-kids-play-area-90") {
            TemplateService.title = "Smaaash Junior Kids Play Area 90; exciting deal.";
            TemplateService.description = " Children turn topsy-turvy with excitement, because you get 90 minutes of Smaaash Junior only at Rs. 499 on weekdays. Great deals and packages at Smaaash, Mumbai.";
            TemplateService.keywords = "kids play area";
        }
         if ($stateParams.dealsinnercity === "mumbai" && $stateParams.id === "smaaash-junior-kids-play-area-day-pass") {
            TemplateService.title = "Smaaash Junior kids play area day pass ";
            TemplateService.description = "Children, let out all your pent up energy because access to Smaaash Junior, Trampoline Park and all arcade games for just Rs. 800 on weekdays at Smaaash, Mumbai";
            TemplateService.keywords = "kids play area";
        }
           if ($stateParams.dealsinnercity === "mumbai" && $stateParams.id === "smaaash-junior-kids-play-arena-90") {
            TemplateService.title = "Smaaash Junior Kids Play Area 90, weekends";
            TemplateService.description = "Children roar in excitement as you get 90 minutes of Smaaash Junior in weekends for Rs. 599. Great deals and packages at Smaaash, Mumbai.";
            TemplateService.keywords = "deals and packages";
        }
        if ($stateParams.dealsinnercity === "mumbai" && $stateParams.id === "sporty-delight") {
            TemplateService.title = "Sporty Delight Package Only at Smaaash";
            TemplateService.description = "Karting, Cricket, Arcade and Redemption games all at Rs. 1599 on weekends that too. Find nice deals and packages at Smaaash, Mumbai.";
            TemplateService.keywords = "deals and packages";
        }
           if ($stateParams.dealsinnercity === "gurgaon-ambience-mall" && $stateParams.id === "swinger-s-dream-2") {
            TemplateService.title = "Swinger’s Dream package at Smaaash";
            TemplateService.description = "Jungle Mini Golf, any 5 arcade games and a mug of draught beer just for Rs. 475. Putt like a pro; find more awesome deals and packages at Smaaash, Gurgaon.";
            TemplateService.keywords = "deals and packages";
        }
         if ($stateParams.dealsinnercity === "gurgaon-ambience-mall" && $stateParams.id === "the-funtastic-feast") {
            TemplateService.title = "The Funtastic Feast at Smaaash";
            TemplateService.description = " Gorge on 1 veg or non-veg pizza or biryani and burn those calories with 2 arcade and 2 VR games. Find great deals and packages at Smaaash, Gurgaon.";
            TemplateService.keywords = "deals and packages";
        }
          if ($stateParams.dealsinnercity === "gurgaon-ambience-mall" && $stateParams.id === "weekend-game-on") {
            TemplateService.title = "Weekend Game On at Smaaash";
            TemplateService.description = " Get 1 VR game, 1 game of bowling, 5 arcade games and 1 soft beverage on weekends for Rs. 599. Great deals and packages at Smaaash, Ambience Mall, Gurgaon. ";
            TemplateService.keywords = "deals and packages";
        }
  if ($stateParams.dealsinnercity === "ludhiana" && $stateParams.id === "student-offer") {
            TemplateService.title = "Students, Enjoy All Games and Free Movie Tickets at Smaaash.";
            TemplateService.description = "All that students dream about- inexpensive food, drinks, games made possible at SMAAASH with the special student offer, helping you save your pocket money";
            TemplateService.keywords = "virtual reality gaming, game, gaming zone, gaming zones, games zones";
        }
        if ($stateParams.dealsinnercity === "ludhiana" && $stateParams.id === "all-arcade-299") {
            TemplateService.title = "Budget Gaming Arcade in Ludhiana | SMAAASH	";
            TemplateService.description = "Arcade gaming starting as low as Rs. 299. No need to worry about blowing off money at a game zone in Ludhiana	";
            TemplateService.keywords = "game zone in Ludhiana , gaming zone, gaming zones, games zones	";
        }
        if ($stateParams.dealsinnercity === "mumbai" && $stateParams.id === "student-offer-2") {
            TemplateService.title = "Exciting Student Offer only at Smaaash";
            TemplateService.description = "College students, here’s an offer you can’t resist, get all games at Rs. 799. Find more deals and packages at Smaaash, Mumbai.";
            TemplateService.keywords = "deals and packages";
        }

        if ($stateParams.dealsinnercity === "gurgaon-cyber-hub" && $stateParams.id === "student-offer") {
            TemplateService.title = "All Games and Free Movie Tickets for Students at Smaaash";
        }
        if ($stateParams.dealsinnercity === "hyderabad" && $stateParams.id === "student-offer-3") {
            TemplateService.title = "Smaaash Gives Students All Games and Free Movie Tickets";
        }
        if ($stateParams.dealsinnercity === "bengaluru" && $stateParams.id === "super-student-offer") {
            TemplateService.title = " Exciting Student Offer only at Smaaash";
            TemplateService.description = "College students, here’s an offer you can’t resist, get all games at Rs. 699. Find more deals and packages at Smaaash, Bengaluru.";
            TemplateService.keywords = "deals and packages";
        }
        if ($stateParams.dealsinnercity === "noida" && $stateParams.id === "student-special") {
            TemplateService.title = "Students Enjoy All Games and Free Movie Tickets At Smaaash";
        }

        if ($stateParams.dealsinnercity === "gurgaon-sector-29" && $stateParams.id === "student-special-offer-2") {
            TemplateService.title = "Students, Enjoy Smaaash Sky Karting at Rs. 350";
        }



    })

    .controller('EventInnerCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter, $uibModal, $location, $rootScope, $sce, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("event-inner");
        $scope.menutitle = $stateParams.id.charAt(0).toUpperCase() + $stateParams.id.substring(1);
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.myUrl = $location.absUrl();
        $scope.today = function () {
            $scope.dt = new Date();
        };
        $scope.today();

        $scope.clear = function () {
            $scope.dt = null;
        };
        // if ($stateParams.eventsInnercity) {
        //     $stateParams.eventsInnercity = $.jStorage.get("city");
        //     $state.go("event-inner", {
        //         eventsInnercity: $stateParams.eventsInnercity,
        //         name: $stateParams.name,
        //         id: $stateParams.id
        //     });
        // }
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
        TemplateService.removeLoaderOn(1);
        $scope.formData = {};
        $scope.formData.city = $.jStorage.get("cityid");
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

        if ($stateParams.eventsInnercity) {
            NavigationService.getCity(function (data) {
                $scope.getCities = _.cloneDeep(data.data);
                console.log("$scope.getCities ", $scope.getCities);
                $scope.tempCity = _.find($scope.getCities, function (obj) {
                    return obj.myslug == $stateParams.eventsInnercity;
                });
                NavigationService.getDetailExploreSmaaashByUrl($stateParams.id, $scope.tempCity._id, function (data) {
                    $scope.detailEventsInner = data.data;
                    console.log("$scope.detailEventsInner", $scope.detailEventsInner);
                    if ($scope.detailEventsInner.description == '' && $scope.detailEventsInner.hometext == 'No Events') {
                        $state.go('home');
                    }
                    if (_.isEmpty($scope.detailEventsInner) || Object.keys($scope.detailEventsInner).length == 0) {
                        console.log("im true");
                        $state.go('home');
                    }

                    if ($scope.detailEventsInner.banner) {
                        $scope.detailEventsInner.banner = $filter('uploadpath')($scope.detailEventsInner.banner);
                    };
                    if ($scope.detailEventsInner.image) {
                        $scope.detailEventsInner.image = $filter('uploadpath')($scope.detailEventsInner.image);
                    }


                    TemplateService.removeLoader();
                    console.log("$scope.detailEventsInner.banner ", $scope.detailEventsInner.banner);
                })

            })
        }
        $scope.pdfmodal = function (pdf) {
            console.log("im in");
            $scope.pdfdata = pdf;
            $scope.pdfURL = $filter('uploadpath')($scope.pdfdata);
            $scope.finalURL = 'https://docs.google.com/gview?url=' + $scope.pdfURL + '&embedded=true';
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


        $scope.buyNowEventInner = function (BranchPackageID, price, mobile) {

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
                if (mobile == 'mobile') {
                    $rootScope.signinModal();
                }
            } else {
                NavigationService.addToCart($scope.eventInnerCartParams, function (data) {
                    console.log("$scope.eventInnerCartParams", $scope.eventInnerCartParams);
                    if (data.value) {

                        if (data.data.AddToCart[0].Status === 1) {
                            console.log("inif", data);
                            $scope.successCartModal = $uibModal.open({
                                animation: true,
                                templateUrl: 'views/modal/addtocart.html',
                                scope: $scope
                            });
                            $timeout(function () {
                                $scope.successCartModal.close();
                                $state.go('cart', {
                                    cartCity: $rootScope.citySpecific
                                });
                            }, 1000);


                        } else if (data.data.AddToCart[0].Status === 0 && data.data.AddToCart[0].Message == "This Package Is Allready In Cart") {
                            console.log("in else", data);
                            $uibModal.open({
                                animation: true,
                                templateUrl: 'views/modal/alreadyCart.html',
                                scope: $scope
                            });

                        } else if (data.data.AddToCart[0].Status === 0 && data.data.AddToCart[0].Message == "Invalid Package") {
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



        //seo
        if ($stateParams.eventsInnercity === "ludhiana" && $stateParams.id === "the-harley-challenge") {
            TemplateService.title = "Hit it to win it. Play a Sports Challenge and win a Harley	";
            TemplateService.description = "Dreams could come true. You can now possess a Harley Davidson. All made possible by playing a cricket challenge to win it at SMAAASH";
            TemplateService.keywords = "gaming challenge , gaming zone, gaming zones, games zones	";
        }

        if ($stateParams.eventsInnercity === "ludhiana" && $stateParams.id === "kings-xi-punjab") {
            TemplateService.title = "Cheer your favourite T20 team at live match screening";
            TemplateService.description = "What is better than watching live match screening at a sports pub with tasty food spirited beverages?";
            TemplateService.keywords = "smaaash events, events at smaaash";
        }
           if ($stateParams.eventsInnercity === "bengaluru" && $stateParams.id === "-1005") {
            TemplateService.title = "Rocking Events at Smaaash ";
            TemplateService.description = "Check out what’s brewing at Smaaash; the most thrilling place to chill out and win mammoth prizes at Bengaluru.";
            TemplateService.keywords = "event at smaaash";
        }
           if ($stateParams.eventsInnercity === "mumbai" && $stateParams.id === "bowl-for-bevarage") {
            TemplateService.title = "Bowl For Beverage Event at Smaaash";
            TemplateService.description = "Score 160 or more in Twilight Bowling Mumbai and win a free beverage to relish.";
            TemplateService.keywords = "Bowling Mumbai, Bowling in  Mumbai ";
        } 
           if ($stateParams.eventsInnercity === "bengaluru" && $stateParams.id === "friday-karaoke-nights") {
            TemplateService.title = "Friday Karaoke Night Event at Smaaash";
            TemplateService.description = "Get a free VR game on performing a song and enjoy beer at Rs. 49 on Fridays at Smaaash, Bengaluru.";
            TemplateService.keywords = "event at smaaash ";
        }
     if ($stateParams.eventsInnercity === "mumbai" && $stateParams.id === "missed-call-harley-davidson") {
            TemplateService.title = "Win A Harley Event at Smaaash";
            TemplateService.description = "Give a missed call and one lucky person gets to win a Harley Davidson at Smaaash Mumbai.";
            TemplateService.keywords = "event at smaaash ";
        }
          if ($stateParams.eventsInnercity === "mumbai" && $stateParams.id === "sixes-contest") {
            TemplateService.title = "Sixes Contest at Smaaash";
            TemplateService.description = "Net cricket in malls was never this exciting. Win a beverage if you have it in you, to hit a six at Smaaash, Mumbai. ";
            TemplateService.keywords = "Net cricket in malls,";
        }
            if ($stateParams.eventsInnercity === "mumbai" && $stateParams.id === "smaaash-junior-2") {
            TemplateService.title = "Smaaash Junior; Where Children Have A Smashing Time";
            TemplateService.description = "This play area for kids is a crazy haven wherein kids can enjoy a plethora of games and lose track of time.";
            TemplateService.keywords = " play area for kids,";
        }
            if ($stateParams.eventsInnercity === "mumbai" && $stateParams.id === "strike-to-win") {
            TemplateService.title = "Strike To Win Event at Smaaash";
            TemplateService.description = " Super Keeper game at Smaaash, Mumbai lures you to score a goal for a beverage and score three consecutive goals for Messi shoes.";
            TemplateService.keywords = " event at smaaash";
        }
    })


    .controller('ResetCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter, $uibModal) {
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
        $scope.formSubmit = function (credentials) {
            console.log("credentials", credentials);
            $scope.wrongPass = false;
            if (credentials) {

                $scope.isResetDisabled = true;
            }
            NavigationService.CustomerResetPassword(credentials, function (data) {
                console.log("credentials", credentials);
                console.log("data", data);
                if (data.value === true) {
                    $scope.passUpdated = true;
                    $uibModal.open({
                        animation: true,
                        templateUrl: 'views/modal/passwordUpdated.html',
                        scope: $scope
                    });

                    $timeout(function () {
                        $scope.credentials = {};
                        $scope.passUpdated = false;
                        $scope.wrongPass = false;
                        $scope.isResetDisabled = false;
                    }, 2000);
                } else if (data.value === false) {
                    $scope.wrongPass = true;
                    $scope.isResetDisabled = false;
                }
            });
        }

    })


    .controller('ThankCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("success");
        $scope.menutitle = NavigationService.makeactive("Thank");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.checkoutAmount = $stateParams.PayAmount;
        $scope.orderNum = $stateParams.orderNo;

        $scope.imgSrc = "https://affiliates.adsplay.in/trackingcode_sale_new.php?pgmid=62250&sale=" + $stateParams.PayAmount + "&orderId=" +
            $stateParams.orderNo;

        $scope.iframeSrc = "https://couponraja.go2cloud.org/aff_l?offer_id=1442&adv_sub=" + $stateParams.orderNo + "&amount=" + $stateParams.PayAmount;


        ga('require', 'ecommerce');
        ga('ecommerce:addTransaction', {
            'id': $stateParams.orderNo, // Transaction ID. Required.
            'affiliation': 'Smaaash India', // Affiliation or store name.
            'revenue': $stateParams.PayAmount, // Grand Total.
            'shipping': '', // Shipping.
            'tax': '' // Tax.
        });
        ga('ecommerce:send');
        // fbq('track', 'Purchase');

        // $scope.constraints = {};
        // $scope.constraints.orderid = $stateParams.orderNo;
        // NavigationService.getOrderDetail($scope.constraints, function (data) {
        //     console.log(data.data.orderno);
        //     if (data.value) {

        //     } else {
        //         console.log('Something Went Wrong');
        //     }

        // });

        // //to add items to the shopping cart, you use the ecommerce:addItem command:
        // ga('ecommerce:addItem', {
        //     'id': '1234', // Transaction ID. Required.
        //     'name': 'Fluffy Pink Bunnies', // Product name. Required.
        //     'sku': 'DD23444', // SKU/code.
        //     'category': 'Party Toys', // Category or variation.
        //     'price': '11.99', // Unit price.
        //     'quantity': '1' // Quantity.
        // });

        


    })
    .controller('Thank2Ctrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("thank2");
        $scope.menutitle = NavigationService.makeactive("Thank");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

    })
    .controller('ThankssCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("thanksss");
        $scope.menutitle = NavigationService.makeactive("Thank");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.orderNo = $stateParams.orderno;
        $scope.amount = $stateParams.amount;
        $scope.cnrNo = $stateParams.cnrno;
        $scope.paymentFor = $stateParams.paymentfor;
        if ($stateParams.orderno && $stateParams.amount) {
            $scope.iframeSrc = "https://couponraja.go2cloud.org/aff_l?offer_id=1442&adv_sub=" + $stateParams.orderno + "&amount=" + $stateParams.amount;
        }

    })

    .controller('PromotionCtrl', function ($scope, $uibModal, TemplateService, NavigationService, $timeout, $stateParams, $filter, $state, $rootScope) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("promotions");
        $scope.menutitle = NavigationService.makeactive("Promotion");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.removeLoaderOn(1);



        if ($stateParams.promotionCity) {
            $stateParams.promotionCity = $.jStorage.get("city");
            $state.go("promotion", {
                promotionCity: $stateParams.promotionCity
            });
        }

        NavigationService.getSingleExploreSmaaashByUrl($stateParams.id, function (data) {
            console.log("data", data);
            $scope.promotion = _.chunk(data.data, 3);
            TemplateService.removeLoader();
        });
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


        $scope.buyNowPromotion = function (BranchPackageID, price) {

            $scope.addToCartParams.BranchPackageID = BranchPackageID;
            // $scope.addToCartParams.BranchPackageID = "29";
            // $scope.addToCartParams.TotalAmount = "222";
            $scope.addToCartParams.TotalAmount = price;


            console.log("$scope.addToCartParams", $scope.addToCartParams);
            if ($.jStorage.get("loginDetail") === null) {
                $rootScope.getMenus();
            } else {
                NavigationService.addToCart($scope.addToCartParams, function (data) {
                    console.log("$scope.addToCartParams", $scope.addToCartParams);
                    if (data.value) {

                        if (data.data.AddToCart[0].Status === 1) {
                            console.log("inif", data);
                            $scope.successCartModal = $uibModal.open({
                                animation: true,
                                templateUrl: 'views/modal/addtocart.html',
                                scope: $scope
                            });
                            $timeout(function () {
                                $scope.successCartModal.close();
                                $state.go('cart', {
                                    cartCity: $rootScope.citySpecific
                                });
                            }, 1000);


                        } else if (data.data.AddToCart[0].Status === 0 && data.data.AddToCart[0].Message == "This Package Is Allready In Cart") {
                            console.log("in else", data);
                            $uibModal.open({
                                animation: true,
                                templateUrl: 'views/modal/alreadyCart.html',
                                scope: $scope
                            });

                        } else if (data.data.AddToCart[0].Status === 0 && data.data.AddToCart[0].Message == "Invalid Package") {
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

    .controller('PromotionInnerCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter, $sce, $uibModal, $location, $rootScope) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("promotion");
        $scope.menutitle = $stateParams.id.charAt(0).toUpperCase() + $stateParams.id.substring(1);
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.removeLoaderOn(1);

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
        $scope.pdfmodal = function (pdf) {
            console.log("im in");
            $scope.pdfdata = pdf;
            $scope.pdfURL = $filter('uploadpath')($scope.pdfdata);
            $scope.finalURL = 'https://docs.google.com/gview?url=' + $scope.pdfURL + '&embedded=true';
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
        NavigationService.getDetailExploreSmaaashByUrl($stateParams.id, function (data) {
            $scope.detailPromotionsInner = data.data;
            console.log("$scope.detailPromotionsInner", $scope.detailPromotionsInner);
            if ($scope.detailPromotionsInner.banner) {
                $scope.detailPromotionsInner.banner = $filter('uploadpath')($scope.detailPromotionsInner.banner);

            }
            if ($scope.detailPromotionsInner.image) {
                $scope.detailPromotionsInner.image = $filter('uploadpath')($scope.detailPromotionsInner.image);
            }
            TemplateService.removeLoader();
        });
        $scope.formData = {};
        $scope.formData.city = $.jStorage.get("cityid");
        $scope.formComplete = false;
        $scope.exist = false;
        $scope.formData.varstatus = "promotionRegistration";
        $scope.formSubmit = function (formData) {
            console.log("formData", formData);
            if (formData) {
                NavigationService.eventInnerForm(formData, function (data) {

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


        $scope.buyNowPromotionInner = function (BranchPackageID, price) {

            $scope.promotionInnerParams.BranchPackageID = BranchPackageID;
            // $scope.promotionInnerParams.BranchPackageID = "41";
            // $scope.promotionInnerParams.TotalAmount = "222";
            $scope.promotionInnerParams.TotalAmount = price;


            console.log("$scope.promotionInnerParams", $scope.promotionInnerParams);
            if ($.jStorage.get("loginDetail") === null) {
                $rootScope.getMenus();
            } else {
                NavigationService.addToCart($scope.promotionInnerParams, function (data) {
                    console.log("$scope.promotionInnerParams", $scope.promotionInnerParams);
                    if (data.value) {

                        if (data.data.AddToCart[0].Status === 1) {
                            console.log("inif", data);
                            $scope.successCartModal = $uibModal.open({
                                animation: true,
                                templateUrl: 'views/modal/addtocart.html',
                                scope: $scope
                            });
                            $timeout(function () {
                                $scope.successCartModal.close();
                                $state.go('cart', {
                                    cartCity: $rootScope.citySpecific
                                });
                            }, 1000);


                        } else if (data.data.AddToCart[0].Status === 0 && data.data.AddToCart[0].Message == "This Package Is Allready In Cart") {
                            console.log("in else", data);
                            $uibModal.open({
                                animation: true,
                                templateUrl: 'views/modal/alreadyCart.html',
                                scope: $scope
                            });

                        } else if (data.data.AddToCart[0].Status === 0 && data.data.AddToCart[0].Message == "Invalid Package") {
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

    .controller('BlogCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter, $uibModal, $state, $location) {
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
        NavigationService.getPopularBlog(function (data) {
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
        $scope.fetchData = function () {

            $scope.objectfilter.pagenumber = $scope.objectfilter.pagenumber + 1;
            NavigationService.getBlog($scope.objectfilter, function (data) {
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
                        _.each(data.data.data, function (n) {
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
        $scope.fetchSearchedData = function () {
            $scope.objectfilter.pagenumber = 0;
            $scope.objectfilter.pagesize = 6;
            $scope.blogs = [];
            $scope.noviewmore = true;
            $scope.objectfilter.city = $scope.objectfilter._id;
            $scope.objectfilter.pagenumber = $scope.objectfilter.pagenumber + 1;
            NavigationService.getBlog($scope.objectfilter, function (data) {
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

    .controller('BlogInsideCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter, $location) {
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

        NavigationService.getDetailBlog($stateParams.id, function (data) {
            $scope.blogInside = data.data;
            var findIndex = _.findIndex($scope.blogInside.popularBlog, function (val) {
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


    .controller('PracticeCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("practice");
        $scope.menutitle = NavigationService.makeactive("Practice");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();


    })

    .controller('BuyCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("buy");
        $scope.menutitle = NavigationService.makeactive("Buy");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();


    })

    .controller('ExploreCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("explore");
        $scope.menutitle = NavigationService.makeactive("Explore");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        TemplateService.removeLoaderOn(1);


        NavigationService.getOneExploresmash($stateParams.id, function (data) {
            $scope.mySlides4 = data.data;
            $scope.mySlides4.banner = $filter('uploadpath')($scope.mySlides4.banner);
            TemplateService.removeLoader();

        });


    })




    .controller('headerctrl', function ($scope, TemplateService, NavigationService, $state, $timeout, $uibModal, $rootScope, $stateParams, $location) {
        $scope.attraId = "57bc4b2aeb9c91f1025a3b55";
        $scope.dealsId = "57bc4b5aeb9c91f1025a3b58";
        $scope.hostpartyId = "57bc4b10eb9c91f1025a3b54";
        $scope.whatsnewId = "57bc4af6eb9c91f1025a3b4f";
        $scope.foodBeveragesId = "57bc4b48eb9c91f1025a3b57";
        $scope.eventId = "57bd4e71a86ee9fa6770d4b2";
        $scope.promotionId = "57bc4b36eb9c91f1025a3b56";
        $rootScope.citySpecific = $.jStorage.get("citySlug");
        $rootScope.citySpecificName = $.jStorage.get("city");
        $scope.template = TemplateService;
        $("#target").val($("#target option:first").val());
        $scope.city = true;



        $rootScope.openSignupModal = function () {
            console.log("im in");
        }

        $scope.addClass = function () {

        }


        if ($.jStorage.get("city") === 'Mumbai') {
            $scope.showlogo = true;
        }
        $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $(window).scrollTop(0);
        });
        TemplateService.removeLoaderOn(1);
        $scope.getHomeCity = [];
        if ($state.current.name == "terms") {
            $state.go('terms');
        }
        if ($state.current.name == "security") {
            $state.go('security');
        }
        if ($state.current.name == "policy") {
            $state.go('policy');
        }

        NavigationService.getCity(function (data) {
            $scope.getHomeCity1 = data.data;
            console.log("$scope.getHomeCity1true", $scope.getHomeCity1);
        });
        // $scope.getHomeCity1 = [{
        //     "_id": "577f4d106b78e0bc03724800",
        //     "__v": 0,
        //     "myslug": "mumbai",
        //     "weekend": "Fri-Sun   11am - 1 am",
        //     "weekdays": "Mon-Thurs   12:30pm - 1am",
        //     "pdf": "",
        //     "logo": "590da160f7a66a33414b4567.png",
        //     "Photo": "http://ent.itspl.net/Upload/Branch/521641720_Mumbai.jpg",
        //     "BranchName": "Smaaash Mumbai",
        //     "BranchID": "12",
        //     "twitter": "twi hashtag",
        //     "facebook": "fb hashtag",
        //     "instagram": "insta hashtag",
        //     "image": "img/nav/mumbai.png",
        //     "order": "7",
        //     "name": "Mumbai"
        // }, {
        //     "_id": "577f4d246b78e0bc03724802",
        //     "__v": 0,
        //     "myslug": "gurgaon-cyber-hub",
        //     "weekend": "Fri-Sun   11am - 12am",
        //     "weekdays": "Mon-Thurs   11am - 12am",
        //     "pdf": "",
        //     "logo": "590da46bf7a66a33414b4eb9.png",
        //     "Photo": "http://ent.itspl.net/Upload/Branch/678165973_Gurgaon.jpg",
        //     "BranchName": "Smaaash Gurgaon Cyber Hub",
        //     "BranchID": "14",
        //     "twitter": "twi hashtag",
        //     "facebook": "fb hashtag",
        //     "instagram": "insta hashtag",
        //     "image": "img/nav/gurgoan-cyber.png",
        //     "order": "6",
        //     "name": "Gurgaon - Cyber Hub"
        // }, {
        //     "_id": "579b0d74fa72c24405ee0818",
        //     "__v": 0,
        //     "myslug": "hyderabad",
        //     "weekend": "Fri-Sun   11am - 12am",
        //     "weekdays": "Mon-Thurs   12pm - 12am",
        //     "pdf": "",
        //     "logo": "590da4aef7a66a33414b4f69.png",
        //     "Photo": "http://ent.itspl.net/Upload/Branch/1982363119_Hyderabad.jpg",
        //     "BranchName": "Smaaash Hyderabad",
        //     "BranchID": "13",
        //     "twitter": "",
        //     "facebook": "",
        //     "instagram": "",
        //     "image": "img/nav/hyderabad.png",
        //     "order": "5",
        //     "name": "Hyderabad"
        // }, {
        //     "_id": "577f4d1c6b78e0bc03724801",
        //     "__v": 0,
        //     "myslug": "bengaluru",
        //     "weekend": "Fri-Sat   11am - 1am",
        //     "weekdays": "Sun-Thurs   11am - 11pm",
        //     "pdf": "",
        //     "logo": "590da18ef7a66a33414b45f6.png",
        //     "Photo": "http://ent.itspl.net/Upload/Branch/143438502_Bengaluru.jpg",
        //     "BranchName": "Smaaash Bengaluru",
        //     "BranchID": "15",
        //     "twitter": "twi hashtag",
        //     "facebook": "fb hashtag",
        //     "instagram": "insta hashtag",
        //     "image": "img/nav/bengaluru.png",
        //     "order": "4",
        //     "name": "Bengaluru"
        // }, {
        //     "_id": "57808c9032b1d30b046dd48c",
        //     "__v": 0,
        //     "myslug": "noida",
        //     "weekend": "Fri-Sun   11am - 11pm",
        //     "weekdays": "Mon-Thurs   11am - 11pm",
        //     "pdf": "",
        //     "logo": "590da47df7a66a33414b4efb.png",
        //     "Photo": "http://ent.itspl.net/Upload/Branch/1131451159_Noida.jpg",
        //     "BranchName": "Smaaash Noida",
        //     "BranchID": "17",
        //     "twitter": "twi shimla",
        //     "facebook": "fb shimla",
        //     "instagram": "insta shimla",
        //     "image": "img/nav/noida.png",
        //     "order": "3",
        //     "name": "Noida"
        // }, {
        //     "_id": "58808e0e94082f1ed90f06a0",
        //     "__v": 0,
        //     "myslug": "ludhiana",
        //     "weekend": "Fri-Sun   11am - 11pm",
        //     "weekdays": "Mon-Thurs   11am - 11pm",
        //     "pdf": "",
        //     "logo": "590da4c2f7a66a33414b4fb7.png",
        //     "Photo": "",
        //     "BranchName": "",
        //     "BranchID": "",
        //     "twitter": "",
        //     "facebook": "",
        //     "instagram": "",
        //     "image": "img/nav/ludhiana.png",
        //     "order": "2",
        //     "name": "Ludhiana"
        // },{
        //     "_id": "587366fa7309110c7de34906",
        //     "__v": 0,
        //     "myslug": "gurgaon-sector-29",
        //     "weekend": "Fri-Sun   12pm - 11.30pm",
        //     "weekdays": "Mon-Thurs   12pm - 11.30pm",
        //     "pdf": "",
        //     "logo": "59106cb9d86cf206d96dde0a.png",
        //     "Photo": "",
        //     "BranchName": "Smaaash Gurgaon - Sector 29",
        //     "BranchID": "",
        //     "twitter": "",
        //     "facebook": "",
        //     "instagram": "",
        //     "image": "img/nav/gurgaon-sector.png",
        //     "order": "1",
        //     "name": "Gurgaon - Sector 29"
        // }, {
        //     "_id": "5a0ab43bb7e6ab63e3ae6cfa",
        //     "__v": 0,
        //     "myslug": "delhi",
        //     "weekend": "Fri-Sun   11 am to 12 am",
        //     "weekdays": "Mon-Thurs   11 am to 12 am",
        //     "pdf": "",
        //     "logo": "5a0ab405b7e6ab63e3ae6c53.png",
        //     "Photo": "",
        //     "BranchName": "Smaaash Delhi",
        //     "BranchID": "12",
        //     "twitter": "twi hashtag",
        //     "facebook": "fb hashtag",
        //     "instagram": "insta hashtag",
        //     "image": "img/nav/delhi.png",
        //     "order": "8",
        //     "name": "Delhi"
        // }, {
        //     "_id": "5a16b85263ed4158867bb141",
        //     "__v": 0,
        //     "myslug": "gurgaon-ambience-mall",
        //     "weekend": "Fri-Sun   11 am to 12 am",
        //     "weekdays": "Mon-Thurs   11am - 12 am",
        //     "pdf": "",
        //     "logo": "5a16b84863ed4158867bb126.png",
        //     "Photo": "",
        //     "BranchName": "Smaaash Gurgaon Ambience Mall",
        //     "BranchID": "12",
        //     "twitter": "twi hashtag",
        //     "facebook": "https://www.facebook.com/SmaaashAmbienceMallGurgaon/",
        //     "instagram": "insta hashtag",
        //     "image": "img/nav/gurgaonAmbianceMall.png",
        //     "order": "9",
        //     "name": "Gurgaon Ambience Mall"
        // }, {
        //     "BranchID": "17",
        //     "BranchName": "Smaaash Pune",
        //     "Photo": "",
        //     "facebook": "https://www.facebook.com/SmaaashPune/",
        //     "image": "5885c903d0e83a29f610e94a.png",
        //     "instagram": "",
        //     "logo": "5a311c5b443b8113be3d33a4.png",
        //     "myslug": "pune",
        //     "name": "Pune",
        //     "order": "10",
        //     "pdf": "",
        //     "twitter": "",
        //     "weekdays": "Mon-Thurs   11 am to 11 pm",
        //     "weekend": "Fri-Sun   11 am to 11 pm",
        //     "__v": 0,
        //     "_id": "5a2f81f1a41b1d20ca8c58d7",
        // }, {
        //     "BranchID": "18",
        //     "BranchName": "Smaaash Chandigarh",
        //     "Photo": "",
        //     "facebook": "https://www.facebook.com/SmaaashChandigarh/",
        //     "image": "5885c903d0e83a29f610e94a.png",
        //     "instagram": "",
        //     "logo": "5a3125a3740f9b151eb9781b.png",
        //     "myslug": "chandigarh",
        //     "name": "Chandigarh",
        //     "order": "11",
        //     "pdf": "",
        //     "twitter": "",
        //     "weekdays": "Mon-Thurs   11 am to 12 am",
        //     "weekend": "Fri-Sun   11 am to 12 am",
        //     "__v": 0,
        //     "_id": "5a3123e1ee2ab36f8785c797",
        // }];
        // NavigationService.getCity(function (data) {
        //     $scope.getHomeCity1 = data.data;
        //     console.log("$scope.getCities1",$scope.getHomeCity1);
        // });


        NavigationService.getCity(function (data) {
            if (data.value) {
                $scope.getHomeCity = _.cloneDeep(data.data);
                if ($state.current.name) {
                    if ($.jStorage.get("city") === null || $.jStorage.get('city') === '') {
                        var mumbai = _.find($scope.getHomeCity, function (key) {
                            if (key.name.toLowerCase() == "mumbai") {
                                return key;
                            }
                        });

                        $scope.getCityName(mumbai);

                    }
                    switch ($state.current.name) {
                        case 'home':
                            if ($stateParams.homepageCity) {
                                console.log("$stateParams.homepageCity", $stateParams.homepageCity);

                                console.log("$stateParams.homepageCity", $stateParams.homepageCity);
                                console.log("$scope.getHomeCity", $scope.getHomeCity);
                                $scope.changeCityParams = _.find($scope.getHomeCity, function (key) {
                                    if (key.myslug == $stateParams.homepageCity) {
                                        return key;
                                    } else {
                                        $state.go('home');
                                    }
                                });
                                console.log("$scope.changeCityParams", $scope.changeCityParams);
                                NavigationService.setCity($scope.changeCityParams);
                                // $state.go('home', {
                                //     homepageCity: $scope.changeCityParams.name

                                // });
                                $scope.template.reFetchCity();
                            }
                            break;
                        case 'attractions':
                            if ($stateParams.gamesCity) {
                                $scope.changeCityParams = _.find($scope.getHomeCity, function (key) {
                                    if (key.myslug == $stateParams.gamesCity) {
                                        return key;
                                    } else {
                                        $state.go('home');
                                    }
                                });
                                NavigationService.setCity($scope.changeCityParams);
                                $state.go('attractions', {
                                    gamesCity: $scope.changeCityParams.myslug,
                                    id: $stateParams.id
                                });
                                $scope.template.reFetchCity();
                            }
                            break;
                        case 'dealsp':
                            if ($stateParams.dealspcity) {
                                $scope.changeCityParams = _.find($scope.getHomeCity, function (key) {
                                    if (key.myslug == $stateParams.dealspcity) {
                                        return key;
                                    } else {
                                        $state.go('home');
                                    }
                                });
                                NavigationService.setCity($scope.changeCityParams);
                                $state.go('dealsp', {
                                    dealspcity: $scope.changeCityParams.myslug,
                                    id: $stateParams.id
                                });
                                $scope.template.reFetchCity();
                            }
                            break;
                        case 'event':
                            if ($stateParams.eventcity) {
                                $scope.changeCityParams = _.find($scope.getHomeCity, function (key) {
                                    if (key.myslug == $stateParams.eventcity) {
                                        return key;
                                    } else {
                                        $state.go('home');
                                    }
                                });
                                NavigationService.setCity($scope.changeCityParams);
                                $state.go('event', {
                                    eventcity: $scope.changeCityParams.myslug,
                                    id: $stateParams.id
                                });
                                $scope.template.reFetchCity();
                            }
                            break;
                        case 'hostparty':
                            console.log("$stateParams.hostCity", $stateParams.hostCity)
                            console.log("$scope.getHomeCity", $scope.getHomeCity)
                            if ($stateParams.hostCity) {
                                $scope.changeCityParams = _.find($scope.getHomeCity, function (key) {
                                    if (key.myslug == $stateParams.hostCity) {
                                        return key;
                                    } else {
                                        $state.go('home');
                                    }
                                });
                                NavigationService.setCity($scope.changeCityParams);
                                $state.go('hostparty', {
                                    hostCity: $scope.changeCityParams.myslug,
                                    id: $stateParams.id
                                });
                                $scope.template.reFetchCity();
                            }
                            break;
                        case 'drink-party':
                            if ($stateParams.drinkCity) {
                                $scope.changeCityParams = _.find($scope.getHomeCity, function (key) {
                                    if (key.myslug == $stateParams.drinkCity) {
                                        return key;
                                    } else {
                                        $state.go('home');
                                    }
                                });
                                NavigationService.setCity($scope.changeCityParams);
                                $state.go('drink-party', {
                                    drinkCity: $scope.changeCityParams.myslug,
                                    id: $stateParams.id
                                });
                                $scope.template.reFetchCity();
                            }
                            break;
                        case 'snow-rush':
                            if ($stateParams.snowrushCity) {
                                $scope.changeCityParams = _.find($scope.getHomeCity, function (key) {
                                    if (key.myslug == $stateParams.snowrushCity) {
                                        return key;
                                    } else {
                                        $state.go('home');
                                    }
                                });
                                NavigationService.setCity($scope.changeCityParams);
                                $state.go('snow-rush', {
                                    snowrushCity: $scope.changeCityParams.myslug,
                                    id: $stateParams.id
                                });
                                $scope.template.reFetchCity();
                            }
                            break;
                        case 'event-inner':
                            if ($stateParams.eventsInnercity) {
                                $scope.changeCityParams = _.find($scope.getHomeCity, function (key) {
                                    if (key.myslug == $stateParams.eventsInnercity) {
                                        return key;
                                    } else {
                                        $state.go('home');
                                    }
                                });
                                NavigationService.setCity($scope.changeCityParams);
                                $state.go('event-inner', {
                                    eventsInnercity: $scope.changeCityParams.myslug,
                                    id: $stateParams.id
                                });
                                $scope.template.reFetchCity();
                            }
                            break;
                        case 'deals-inner':
                            if ($stateParams.dealsinnercity) {
                                $scope.changeCityParams = _.find($scope.getHomeCity, function (key) {
                                    if (key.myslug == $stateParams.dealsinnercity) {
                                        return key;
                                    } else {
                                        $state.go('home');
                                    }
                                });
                                NavigationService.setCity($scope.changeCityParams);
                                $state.go('deals-inner', {
                                    dealsinnercity: $scope.changeCityParams.myslug,
                                    id: $stateParams.id
                                });
                                $scope.template.reFetchCity();
                            }
                            break;
                        case 'stars':
                            if ($stateParams.city) {
                                $scope.changeCityParams = _.find($scope.getHomeCity, function (key) {
                                    if (key.myslug == $stateParams.city) {
                                        return key;
                                    } else {
                                        $state.go('home');
                                    }
                                });
                                NavigationService.setCity($scope.changeCityParams);
                                $state.go('stars', {
                                    city: $scope.changeCityParams.myslug
                                });
                                $scope.template.reFetchCity();
                            }
                            break;
                        case 'media':
                            if ($stateParams.mediasCity) {
                                $scope.changeCityParams = _.find($scope.getHomeCity, function (key) {
                                    if (key.myslug == $stateParams.mediasCity) {
                                        return key;
                                    } else {
                                        $state.go('home');
                                    }
                                });
                                NavigationService.setCity($scope.changeCityParams);
                                $state.go('media', {
                                    mediasCity: $scope.changeCityParams.myslug,
                                });
                                $scope.template.reFetchCity();
                            }
                            break;
                        case 'parties':
                            if ($stateParams.partyCity) {
                                $scope.changeCityParams = _.find($scope.getHomeCity, function (key) {
                                    if (key.myslug == $stateParams.partyCity) {
                                        return key;
                                    } else {
                                        $state.go('home');
                                    }
                                });
                                NavigationService.setCity($scope.changeCityParams);
                                $state.go('parties', {
                                    partyCity: $scope.changeCityParams.myslug,
                                    id: $stateParams.id
                                });
                                $scope.template.reFetchCity();
                            }
                            break;
                        case 'about':
                            if ($stateParams.aboutCity) {
                                $scope.changeCityParams = _.find($scope.getHomeCity, function (key) {
                                    if (key.myslug == $stateParams.aboutCity) {
                                        return key;
                                    } else {
                                        $state.go('home');
                                    }
                                });
                                NavigationService.setCity($scope.changeCityParams);
                                $state.go('about', {
                                    aboutCity: $scope.changeCityParams.myslug
                                });
                                $scope.template.reFetchCity();
                            }
                            break;
                        case 'leader':
                            if ($stateParams.leaderCity) {
                                $scope.changeCityParams = _.find($scope.getHomeCity, function (key) {
                                    if (key.myslug == $stateParams.leaderCity) {
                                        return key;
                                    } else {
                                        $state.go('home');
                                    }
                                });
                                NavigationService.setCity($scope.changeCityParams);
                                console.log("$scope.changeCityParams.name", $scope.changeCityParams.name);
                                $state.go('leader', {
                                    leaderCity: $scope.changeCityParams.myslug,
                                });
                                console.log("after stateParams");
                                $scope.template.reFetchCity();


                            }

                            break;
                        case 'benefit':
                            if ($stateParams.benefitCity) {
                                $scope.changeCityParams = _.find($scope.getHomeCity, function (key) {
                                    if (key.myslug == $stateParams.benefitCity) {
                                        return key;
                                    } else {
                                        $state.go('home');
                                    }
                                });
                                NavigationService.setCity($scope.changeCityParams);
                                $state.go('benefit', {
                                    benefitCity: $scope.changeCityParams.myslug,
                                    id: $stateParams.id

                                });
                                $scope.template.reFetchCity();
                            }

                            break;
                             case 'times-prime-offers':
                            if ($stateParams.timescity) {
                                $scope.changeCityParams = _.find($scope.getHomeCity, function (key) {
                                    if (key.myslug == $stateParams.timescity) {
                                        return key;
                                    } else {
                                        $state.go('home');
                                    }
                                });
                                NavigationService.setCity($scope.changeCityParams);
                                $state.go('times-prime-offers', {
                                    timescity: $scope.changeCityParams.myslug

                                });
                                $scope.template.reFetchCity();
                            }

                            break;
                        case 'sponsor':
                            if ($stateParams.sponsorCity) {
                                $scope.changeCityParams = _.find($scope.getHomeCity, function (key) {
                                    if (key.myslug == $stateParams.sponsorCity) {
                                        return key;
                                    } else {
                                        $state.go('home');
                                    }
                                });
                                NavigationService.setCity($scope.changeCityParams);
                                $state.go('sponsor', {
                                    sponsorCity: $scope.changeCityParams.myslug

                                });
                                $scope.template.reFetchCity();
                            }

                            break;
                        case 'career':
                            if ($stateParams.careerCity) {
                                $scope.changeCityParams = _.find($scope.getHomeCity, function (key) {
                                    if (key.myslug == $stateParams.careerCity) {
                                        return key;
                                    } else {
                                        $state.go('home');
                                    }
                                });
                                NavigationService.setCity($scope.changeCityParams);
                                $state.go('career', {
                                    careerCity: $scope.changeCityParams.myslug,
                                    id: $stateParams.id

                                });
                                $scope.template.reFetchCity();
                            }

                            break;
                        case 'contact':
                            console.log("im in contact");
                            if ($stateParams.contactCity) {
                                console.log("$stateParams.contactCity", $stateParams.contactCity);
                                $scope.changeCityParams = _.find($scope.getHomeCity, function (key) {
                                    if (key.myslug == $stateParams.contactCity) {
                                        return key;
                                    } else {
                                        $state.go('home');
                                    }
                                });
                                NavigationService.setCity($scope.changeCityParams);
                                $state.go('contact', {
                                    contactCity: $scope.changeCityParams.myslug


                                });
                                $scope.template.reFetchCity();
                            }

                            break;
                        case 'customizepackage':
                            if ($stateParams.customizeCity) {
                                $scope.changeCityParams = _.find($scope.getHomeCity, function (key) {
                                    if (key.myslug == $stateParams.customizeCity) {
                                        return key;
                                    } else {
                                        $state.go('home');
                                    }
                                });
                                NavigationService.setCity($scope.changeCityParams);
                                $state.go('customizepackage', {
                                    customizeCity: $scope.changeCityParams.myslug
                                });
                                $scope.template.reFetchCity();
                            }
                            break;


                    }
                }
            }


        })









        $scope.template.reFetchCity = function () {
            $scope.cityData = {
                _id: $.jStorage.get("cityid"),
                name: $.jStorage.get("city"),
                smaaashLogo: $.jStorage.get("logos"),
                branchid: $.jStorage.get("branchId"),
                cityslug: $.jStorage.get("citySlug")
            };
        };
        $scope.template.reFetchCity();


        $scope.getCityName = function (cityname) {

            NavigationService.setCity(cityname);
            switch ($state.current.name) {
                case 'home':
                    $state.go('home', {
                        homepageCity: cityname.myslug

                    })
                    break;
                case 'attractions':
                    $state.go('attractions', {
                        gamesCity: cityname.myslug,
                        id: $stateParams.id
                    })
                    break;
                case 'snow-rush':
                    $state.go('snow-rush', {
                        snowrushCity: cityname.myslug,
                        id: $stateParams.id
                    })
                    break;
                case 'event-inner':
                    $state.go('event-inner', {
                        eventsInnercity: cityname.myslug,
                        id: $stateParams.id
                    })
                    break;
                case 'event':
                    $state.go('event', {
                        eventcity: cityname.myslug,
                        id: $stateParams.id
                    })
                    break;
                case 'hostparty':
                    $state.go('hostparty', {
                        hostCity: cityname.myslug,
                        id: $stateParams.id
                    })
                    break;
                case 'drink-party':
                    $state.go('drink-party', {
                        drinkCity: cityname.myslug,
                        id: $stateParams.id
                    })
                    break;
                case 'deals-inner':
                    $state.go('deals-inner', {
                        dealsinnercity: cityname.myslug,
                        id: $stateParams.id
                    })
                    break;
                case 'dealsp':
                    $state.go('dealsp', {
                        dealspcity: cityname.myslug,
                        id: $stateParams.id
                    })
                    break;
                case 'stars':
                    $state.go('stars', {
                        city: cityname.myslug
                    })
                    break;
                case 'media':
                    $state.go('media', {
                        mediasCity: cityname.myslug

                    })
                    break;
                case 'parties':
                    $state.go('parties', {
                        partyCity: cityname.myslug,
                        id: $stateParams.id
                    })
                    break;
                case 'about':
                    $state.go('about', {
                        aboutCity: cityname.myslug

                    })
                    break;
                case 'leader':
                    $state.go('leader', {
                        leaderCity: cityname.myslug

                    })
                    break;
                case 'benefit':
                    $state.go('benefit', {
                        benefitCity: cityname.myslug

                    })
                    break;
                case 'sponsor':
                    $state.go('sponsor', {
                        sponsorCity: cityname.myslug

                    })
                    break;
                case 'career':
                    $state.go('career', {
                        careerCity: cityname.myslug

                    })
                    break;
                case 'profile':
                    $state.go('profile', {
                        profileCity: cityname.myslug,

                    })
                    break;
                case 'cart':
                    $state.go('cart', {
                        cartCity: cityname.myslug

                    })
                    break;
                case 'customizepackage':
                    $state.go('customizepackage', {
                        customizeCity: cityname.myslug

                    })

                    break;
                case 'contact':
                    $state.go('contact', {
                        contactCity: cityname.myslug

                    })

                    break;

                default:

            }
            $scope.template.reFetchCity();
        }

        $scope.openMenu = true;
        $scope.opens = function () {
            console.log("im in", $scope.openMenu);
            $scope.openMenu = !$scope.openMenu;

        }
        $scope.getslide = "closeSidemenu";
        $scope.closeSidemenu = function () {
            if ($scope.getslide == "openSidemenu") {
                $scope.getslide = "closeSidemenu";

            } else {

                $scope.getslide = "openSidemenu";
            }
        };


        $scope.status = {
            isCustomHeaderOpen: false,
            isFirstOpen: true,
            isFirstDisabled: false
        };


        $scope.currentdate = new Date();
        $scope.userLoginDetails = $.jStorage.get("loginDetail");


        $scope.city = false;
        $scope.flag = {};
        $scope.flag.showCity = false;
        $scope.toggleCity = function () {
            $scope.city = !$scope.city;
        };


        $scope.menu = false;
        $scope.toggleMenu = function () {
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
        $rootScope.getMenus = function () {
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
        $scope.signupData.CustomerPhoneNo = $scope.signupData.CustomerPhoneNo;
        $scope.signupData.IsSendDiscountCode = '1';

        $scope.signupData.CardNo = '';
        $scope.signupData.CustomerPhotoPath = '';

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

        $scope.selectCityFun = function (val) {
            console.log("val", val);
            $scope.cityValue = val.toLowerCase();
            console.log("$scope.cityValue", $scope.cityValue);
            switch ($scope.cityValue) {
                case 'mumbai':
                    $scope.signupData.CustomerAddressId = '577f4d106b78e0bc03724800';
                    break;
                case 'gurgaon - cyber hub':
                    $scope.signupData.CustomerAddressId = '577f4d246b78e0bc03724802';
                    break;
                case 'hyderabad':
                    $scope.signupData.CustomerAddressId = '579b0d74fa72c24405ee0818';
                    break;
                case 'bengaluru':
                    $scope.signupData.CustomerAddressId = '577f4d1c6b78e0bc03724801';
                    break;
                case 'noida':
                    $scope.signupData.CustomerAddressId = '57808c9032b1d30b046dd48c';
                    break;
                case 'ludhiana':
                    $scope.signupData.CustomerAddressId = '58808e0e94082f1ed90f06a0';
                    break;
                case 'gurgaon - sector 29':
                    $scope.signupData.CustomerAddressId = '587366fa7309110c7de34906';
                    console.log("im in");
                    break;
                default:

            }
        }






        $scope.signupGenerateOtp = function (signupData) {
            signupData.CustomerPhoneNo = signupData.CustomerMobile;
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
                        $scope.getOtp.CustomerPhoneNo = signupData.CustomerMobile;
                        console.log("$scope.getOtp", $scope.getOtp);
                        $scope.isDisabled = true;
                        NavigationService.generateOtp($scope.getOtp, function (data) {
                            console.log("$scope.getOtp", $scope.getOtp);
                            console.log("data", data);
                            if (data.value) {
                                $scope.otp();
                            } else if (!data.value && data.data.GenerateOTPTable[0].Message === "Invalid Data") {
                                console.log("data in false", data);

                                $scope.customerEXist = true;
                                $scope.isDisabled = false;
                            } else {
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
        $scope.GenrateOneTimePass = function (signupData) {
            $scope.modalOtp.close();
            $scope.signupData.OTP = "";
            $scope.wrongOtp = false;
            $scope.signupGenerateOtp(signupData);
        }
        $scope.customerSignup = function (signupData) {
            console.log("signupData", signupData);
            if (signupData) {
                signupData.CustomerPhoneNo = signupData.CustomerMobile;
                // signupData.CustomerPhoneNo=signupData.CustomerMobileNo;
                console.log("signupData", signupData);
                $scope.isDisabled2 = true;
                NavigationService.CustomerRegistration(signupData, function (data) {
                    console.log("signupData", signupData);
                    console.log("signupDataforData", data);
                    if (data.value === true) {
                        $scope.modalOtp.close();
                        // $.jStorage.set("loginDetail", data);
                        NavigationService.setUser(data.data);
                        $scope.emailExist = false;
                        $scope.formCompleteSignup = true;
                        $timeout(function () {
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
        $scope.isUserLoggedIn = false;
        $scope.userLogin = function (userData) {
            console.log("im in user login");
            if (userData) {
                console.log("userData", userData);
                $scope.isUserLoggedIn = true;
                $scope.valid = false;
                NavigationService.VerifyCustomerLogin(userData, function (data) {
                    console.log("data", data);
                    if (data.value == true) {
                        // $.jStorage.set("loginDetail", data);
                        NavigationService.setUser(data.data);
                        $scope.valid = false;
                        $scope.formComplete = true;
                        $timeout(function () {
                            $scope.formComplete = false;
                            $scope.userData = {};
                        }, 2000);
                        location.reload();
                    } else {
                        $scope.valid = true;
                        $scope.isUserLoggedIn = false;
                    }


                })


            }

        };
        $scope.hidelogout = false;
        $scope.logout = function () {
            $state.go("home");
            console.log("im in logout");
            if ($.jStorage.get("loginDetail") != null) {
                NavigationService.logout(function (data) {
                    console.log("im in nav logout");
                    console.log("data", data);

                    if (data.value === true) {
                        $scope.hidelogout = true;

                    }
                    console.log("im in nav logout");
                    location.reload();

                })
            } else {

            }

        };
        $scope.myCart = function () {
            if ($.jStorage.get("loginDetail") === null) {
                console.log("am in if");
                $rootScope.getMenus();
            } else if ($.jStorage.get("loginDetail") != null) {
                console.log("im in else");
                $state.go("cart", {
                    cartCity: $rootScope.citySpecific
                });
            }
        };

        $scope.myAccount = function () {
            if ($.jStorage.get("loginDetail") != null) {
                $state.go("profile", {
                    profileCity: $rootScope.citySpecific
                });
            };
        }


        $scope.closing = function () {
            console.log('inside closing')
            setTimeout(function () {
                $scope.menu = false;
            }, 500);
            $scope.menu = true;
        };


        $scope.otp = function () {
            $scope.modalOtp = $uibModal.open({
                animation: true,
                templateUrl: "views/modal/otp.html",
                scope: $scope,
                windowClass: "no-white-bg"
            })
        };
        $scope.incorrect = false;

        $scope.resets = function () {
            $scope.modal1 = $uibModal.open({
                animation: true,
                templateUrl: "views/modal/forgot.html",
                scope: $scope
            })
        }

        $scope.closeModal1 = function () {
            $scope.modal1.close();
        }



        $scope.closeModal = function () {
            $scope.asd.close();
        }

        $scope.credentialstoReset = {};
        $scope.invalidEmail = false;
        $scope.isDisabledForgot = false;
        $scope.formSubmit = function (credentials) {
            if (credentials) {
                $scope.isDisabledForgot = true;
                $scope.invalidEmail = false;
            }
            console.log("credentials", credentials);
            NavigationService.CustomerForgetPassword(credentials, function (data) {
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
                    $scope.isDisabledForgot = false;

                }
            })
        }
        $rootScope.loginModal = function (num) {
            if (num == '1') {
                $rootScope.modalSignup.close();
            }

            $uibModal.open({
                animation: 'true',
                templateUrl: "views/modal/mobile-login.html",
                // controller: 'headerCtrl',
                windowClass: 'login-modal',
                scope: $scope
            });
        }

        $rootScope.signinModal = function () {

            $rootScope.modalSignup = $uibModal.open({
                animation: 'true',
                templateUrl: "views/modal/mobile-signin.html",
                // controller: 'headerCtrl',
                windowClass: 'signin-modal',
                scope: $scope
            });
        }



    })
    .controller('footerctrl', function ($scope, TemplateService, NavigationService, $uibModal, $rootScope, $stateParams, $state) {
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

        $scope.loyalty = function () {
            $uibModal.open({
                animation: true,
                templateUrl: "views/modal/loyalty.html",
                scope: $scope,
                windowClass: 'app-modal-window'
            });
        };
        $scope.gotoCity = function (id) {
            switch (id) {
                case '577f4d106b78e0bc03724800':
                    $rootScope.Mum = true;
                    $rootScope.GurgaonHub = false;
                    $rootScope.Hyderabad = false;
                    $rootScope.Bengaluru = false;
                    $rootScope.Noida = false;
                    $rootScope.Ludhiana = false;
                    $rootScope.GurgaonSec29 = false;

                    break;
                case '577f4d246b78e0bc03724802':
                    $rootScope.GurgaonHub = true;
                    $rootScope.Mum = false;
                    $rootScope.Hyderabad = false;
                    $rootScope.Bengaluru = false;
                    $rootScope.Noida = false;
                    $rootScope.Ludhiana = false;
                    $rootScope.GurgaonSec29 = false;

                    break;
                case '579b0d74fa72c24405ee0818':
                    $rootScope.Hyderabad = true;
                    $rootScope.GurgaonHub = false;
                    $rootScope.Mum = false;

                    $rootScope.Bengaluru = false;
                    $rootScope.Noida = false;
                    $rootScope.Ludhiana = false;
                    $rootScope.GurgaonSec29 = false;

                    break;
                case '577f4d1c6b78e0bc03724801':
                    $rootScope.Bengaluru = true;
                    $rootScope.GurgaonHub = false;
                    $rootScope.Mum = false;
                    $rootScope.Hyderabad = false;

                    $rootScope.Noida = false;
                    $rootScope.Ludhiana = false;
                    $rootScope.GurgaonSec29 = false;


                    break;
                case '57808c9032b1d30b046dd48c':
                    $rootScope.Noida = true;
                    $rootScope.GurgaonHub = false;
                    $rootScope.Mum = false;
                    $rootScope.Hyderabad = false;
                    $rootScope.Bengaluru = false;

                    $rootScope.Ludhiana = false;
                    $rootScope.GurgaonSec29 = false;


                    break;
                case '58808e0e94082f1ed90f06a0':
                    $rootScope.Ludhiana = true;
                    $rootScope.GurgaonHub = false;
                    $rootScope.Mum = false;
                    $rootScope.Hyderabad = false;
                    $rootScope.Bengaluru = false;
                    $rootScope.Noida = false;

                    $rootScope.GurgaonSec29 = false;

                    break;
                case '587366fa7309110c7de34906':
                    $rootScope.GurgaonSec29 = true;
                    $rootScope.GurgaonHub = false;
                    $rootScope.Mum = false;
                    $rootScope.Ludhiana = false;
                    $rootScope.Hyderabad = false;
                    $rootScope.Bengaluru = false;
                    $rootScope.Noida = false;



                    break;
                default:
                    $rootScope.Mum = true;
                    $rootScope.GurgaonHub = true;
                    $rootScope.Hyderabad = true;
                    $rootScope.Bengaluru = true;
                    $rootScope.Noida = true;
                    $rootScope.Ludhiana = true;
                    $rootScope.GurgaonSec29 = true;
            }
        };

        $scope.gotoCity();
        if ($stateParams.city) {
            $stateParams.city = $.jStorage.get("citySlug");
            $state.go("stars", {
                city: $stateParams.city
            });
        }
        if ($.jStorage.get("cityid") != null) {
            $rootScope.footerCity = $.jStorage.get("cityid");
        }



        NavigationService.getCity(function (data) {
            $scope.getCities = data.data;
            TemplateService.removeLoader();
            // if (true) {
            //
            // }


        });
        $scope.attrctionId = "57bc4b2aeb9c91f1025a3b55";
        $scope.drinkandPartyId = "57bc4b48eb9c91f1025a3b57";
        $scope.dealsandpackagesId = "57bc4b5aeb9c91f1025a3b58";
        $scope.eventId = "57bd4e71a86ee9fa6770d4b2";
        // $scope.id = '57bc4b10eb9c91f1025a3b54';
        $scope.promotionId = "57bc4b36eb9c91f1025a3b56";
        $scope.cityID = $.jStorage.get("cityid");

        NavigationService.getSingleExploreSmaaashByUrl('host-a-party', $scope.cityID, function (data) {
            $scope.SingleHostParty1 = data.data;
        });
        if ($.jStorage.get("weekdays") != null) {
            $scope.weekdays = $.jStorage.get("weekdays");
            $scope.weekend = $.jStorage.get("weekend");
        }



    })
   .controller('TimesPrimeOffersCtrl', function ($scope, TemplateService, NavigationService, $timeout,$uibModal) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("times-prime-offers");
        $scope.menutitle = NavigationService.makeactive("times-prime-offers");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
   .controller('TimesInnerCtrl', function ($scope, TemplateService, NavigationService, $timeout,$uibModal) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("times-inner");
        $scope.menutitle = NavigationService.makeactive("Times-Inner");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
               $scope.loyalty = function () {
            $uibModal.open({
                animation: true,
                templateUrl: "views/modal/times-prime.html",
                scope: $scope,
                 size: 'md',
                windowClass: ''
            });
        };
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