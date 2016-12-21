// JavaScript Document
$.jStorage.set("city", "Mumbai");
$.jStorage.set("branchId", "12");
$.jStorage.set("cityid", "577f4d106b78e0bc03724800");
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
//             $.jStorage.set("city","hyderabad");deal
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
    'angulartics.google.analytics',
    'imageupload'

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
    .state('landingform', {
      url: "/landingform",
      templateUrl: "views/template.html",
      controller: 'LandingCtrl'
  })
      .state('sky-form', {
      url: "/sky-form",
      templateUrl: "views/template.html",
      controller: 'SkiesCtrl'
  })

    .state('event', {
        url: "/event/:id",
        templateUrl: "views/template.html",
        controller: 'EventCtrl'
    })

    .state('dealsp', {
        url: "/dealsp/:id",
        templateUrl: "views/template.html",
        controller: 'DealspCtrl'
    })

    .state('drink-party', {
        url: "/drink-party/:id",
        templateUrl: "views/template.html",
        controller: 'DrinkCtrl'
    })

    .state('reset', {
        url: "/reset",
        templateUrl: "views/template.html",
        controller: 'ResetCtrl'
    })

    .state('thank', {
        url: "/thank-you",
        templateUrl: "views/template.html",
        controller: 'ThankCtrl'
    })



    .state('promotion-inner', {
        url: "/:name/:id",
        templateUrl: "views/template.html",
        controller: 'PromotionInnerCtrl'
    })


    .state('promotion', {
        url: "/promotion/:id",
        templateUrl: "views/template.html",
        controller: 'PromotionCtrl'
    })

    .state('blog', {
            url: "/blog",
            templateUrl: "views/template.html",
            controller: 'BlogCtrl'
        })
        .state('blogs', {
            url: "/blogs/:search",
            templateUrl: "views/template.html",
            controller: 'BlogCtrl'
        })

    .state('blog-inside', {
        url: "/blog-inside/:id",
        templateUrl: "views/template.html",
        controller: 'BlogInsideCtrl'
    })

    .state('deals-inner', {
        url: "/:name/:id",
        templateUrl: "views/template.html",
        controller: 'DealsInnerCtrl'
    })
    

    .state('event-inner', {
        url: "/:name/:id",
        templateUrl: "views/template.html",
        controller: 'EventInnerCtrl'
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

    .state('customizepackage', {
        url: "/customizepackage",
        templateUrl: "views/template.html",
        controller: 'CustomizePackageCtrl'
    })

    .state('parties', {
        url: "/parties/:id",
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
            url: "/birthday-parties/:id",
            templateUrl: "views/template.html",
            controller: 'BirthdayCtrl'
        })
        .state('smaaash-cricket', {
            url: "/smaaash-cricket",
            templateUrl: "views/template.html",
            controller: 'SportsCtrl'
        })
        .state('snow-rush', {
            url: "/:name/:id",
            templateUrl: "views/template.html",
            controller: 'SnowCtrl'
        })

    .state('sponsor', {
        url: "/sponsor",
        templateUrl: "views/template.html",
        controller: 'SponsorCtrl'
    })

    .state('contact', {
        url: "/contact",
        templateUrl: "views/template.html",
        controller: 'ContactCtrl'
    })

    .state('benefit', {
        url: "/benefit",
        templateUrl: "views/template.html",
        controller: 'BenefitCtrl'
    })

    .state('explore', {
        url: "/explore/:id",
        templateUrl: "views/template.html",
        controller: 'ExploreCtrl'
    })

    .state('buy', {
        url: "/buy",
        templateUrl: "views/template.html",
        controller: 'BuyCtrl'
    })

    .state('about', {
        url: "/about",
        templateUrl: "views/template.html",
        controller: 'AboutCtrl'
    })

    .state('profile', {
        url: "/profile",
        templateUrl: "views/template.html",
        controller: 'ProfileCtrl'
    })

    .state('recharge', {
        url: "/recharge",
        templateUrl: "views/template.html",
        controller: 'RechargeCtrl'
    })



    .state('confirm-order', {
        url: "/confirm-order",
        templateUrl: "views/template.html",
        controller: 'ConfirmCtrl'
    });

    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(isproduction);
});



// firstapp.directive('img', function ($compile, $parse) {
//     return {
//         restrict: 'E',
//         replace: false,
//         link: function ($scope, element, attrs) {
//             var $element = $(element);
//             if (!attrs.noloading) {
//                 $element.after("<img src='img/loading.gif' class='loading' />");
//                 var $loading = $element.next(".loading");
//                 $element.load(function () {
//                     $loading.remove();
//                     $(this).addClass("doneLoading");
//                 });
//             } else {
//                 $($element).addClass("doneLoading");
//             }
//         }
//     };
// });

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
})

firstapp.directive('fancyboxThumb', function($document) {

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
                    nextEffect: 'none',
                    prevEffect: 'none',
                    padding: 0,
                    helpers: {
                        title: {
                            type: 'over'
                        },
                        thumbs: {
                            width: 50,
                            height: 50
                        }
                    }
                });
            }
        };
    })
    // firstapp.directive('fancyboxThumb', function ($document) {
    //     $(".fancybox-thumb").fancybox({
    //         prevEffect: 'none',
    //         nextEffect: 'none',
    //         helpers: {
    //             title: {
    //                 type: 'outside'
    //             },
    //             thumbs: {
    //                 width: 50,
    //                 height: 50
    //             }
    //         }
    //     });



//     iframe.setAttribute('allowFullScreen', '');
//     $('.fancybox').fancybox({
// 	afterLoad: function(e) {
// 		$(e.inner).find('iframe').attr({
// 			'webkitallowfullscreen': true,
// 			'mozallowfullscreen': true
// 		});
// 	}
// });
// });

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

firstapp.directive('imageonload', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('load', function() {
                scope.$apply(attrs.imageonload);
            });
        }
    };
});

firstapp.directive('uploadImage', function($http, $filter) {
    return {
        templateUrl: 'views/directive/uploadFile.html',
        scope: {
            model: '=ngModel',
            callback: "=ngCallback"
        },
        link: function($scope, element, attrs) {
            $scope.isMultiple = false;
            $scope.inObject = false;
            if (attrs.multiple || attrs.multiple === "") {
                $scope.isMultiple = true;
                $("#inputImage").attr("multiple", "ADD");
            }
            if (attrs.noView || attrs.noView === "") {
                $scope.noShow = true;
            }
            if ($scope.model) {
                if (_.isArray($scope.model)) {
                    $scope.image = [];
                    _.each($scope.model, function(n) {
                        $scope.image.push({
                            url: $filter("uploadpath")(n)
                        });
                    });
                }

            }
            if (attrs.inobj || attrs.inobj === "") {
                $scope.inObject = true;
            }
            $scope.clearOld = function() {
                $scope.model = [];
            };
            $scope.uploadNow = function(image) {
                var Template = this;
                image.hide = true;
                var formData = new FormData();
                formData.append('file', image.file, image.name);
                $http.post(uploadurl, formData, {
                    headers: {
                        'Content-Type': undefined
                    },
                    transformRequest: angular.identity
                }).success(function(data) {
                    console.log("success");
                    if ($scope.callback) {
                        $scope.callback(data);
                    } else {
                        if ($scope.isMultiple) {
                            if ($scope.inObject) {
                                $scope.model.push({
                                    "image": data.data[0]
                                });
                            } else {
                                $scope.model.push(data.data[0]);
                            }
                        } else {
                            $scope.model = data.data[0];
                        }
                    }
                });
            };
        }
    };
});

firstapp.directive('img', function($compile, $parse) {

    return {
        restrict: 'E',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);

            if (!attrs.noloading) {
                // $element.after("<img src='img/loading.gif' class='loading' />");
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

firstapp.filter('uploadprofilepicture', function() {
    return function(input, width, height, style) {
        console.log("input", input);
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
        } else {
            return 'img/profile/female.png';
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

firstapp.directive('allowPattern', [allowPatternDirective]);

function allowPatternDirective() {
    return {
        restrict: "A",
        compile: function(tElement, tAttrs) {
            return function(scope, element, attrs) {
              element.bind("keypress", function(event) {
                    var keyCode = event.which || event.keyCode;
                    var keyCodeChar = String.fromCharCode(keyCode);
                    if (!keyCodeChar.match(new RegExp(attrs.allowPattern, "i"))) {
            event.preventDefault();
                        return false;
                    }

                });
            };
        }
    };
}

firstapp.directive('scrolldown', function ($compile, $parse) {

    return {
        restrict: 'EA',
        replace: false,
        link: function ($scope, element, attrs) {
            var $element = $(element);
            // var windowHeight = $(window).height();
            $scope.scrollDown = function () {
                $scope.startVideo=false;
                $('html,body').animate({
                        scrollTop: $(".second").offset().top
                    },
                    'slow');
            }

        }
    };
});
firstapp.filter('rmvStartEndSpace', function() {
    return function(input) {
        if (input) {
            console.log(input);
            return input.toString().trim();
        }
    };
});
// firstapp.filter('youtubethumb', function() {
//     return function(input, onlyid) {
//         if (input) {
//             return "http://img.youtube.com/vi/" + input + "/hqdefault.jpg";
//         }
//     };
// });
firstapp.filter('youtubethumb', function() {
    return function(input, onlyid) {
        if (input) {
            console.log(input);
            var videoid = input.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
            console.log(videoid);
            if (videoid != null) {
                console.log('tgyuhj', videoid);
                if (onlyid == false) {
                    return "http://img.youtube.com/vi/" + videoid[1] + "/hqdefault.jpg";
                } else if (onlyid == true) {
                    return videoid[1];
                }
            } else {
                return input;
                console.log('1 else', input);
            }
        } else {
            return input;
            console.log('2 else', input);
        }
    };
});
// firstapp.filter('youtubethumb', function() {
//     return function(input, onlyid) {
//         if (input) {
//             console.log(input);
//             var videoid = input.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
//             console.log(videoid);
//             if (videoid != null) {
//                 console.log('tgyuhj', videoid);
//                 if (onlyid == false) {
//                     return "http://img.youtube.com/vi/" + videoid[1] + "/hqdefault.jpg";
//                 } else if (onlyid == true) {
//                     return videoid[1];
//                 }
//             } else {
//                 return input;
//                 console.log('1 else', input);
//             }
//         } else {
//             return input;
//             console.log('2 else', input);
//         }
//     };
// });
firstapp.filter('rawHtml', ['$sce',
    function($sce) {
        return function(val) {
            console.log(val);
            return $sce.trustAsHtml(val);
        };
    }
]);
firstapp.filter('trusted', ['$sce', function($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);
// firstapp.filter('cut', function() {
//     return function(value, wordwise, max, tail) {
//         if (!value) return '';
//
//         max = parseInt(max, 10);
//         if (!max) return value;
//         if (value.length <= max) return value;
//         value = value.substr(0, max);
//         if (wordwise) {
//             var lastspace = value.lastIndexOf(' ');
//             if (lastspace != -1) {
//                 value = value.substr(0, lastspace);
//             }
//         }
//
//         return value + (tail || ' …');
//     };
// });

firstapp.filter('shorten', function() {
    return function(value, limit) {
        if (value)
            if (value.length < limit) {
                return value;
            } else {
                return value.slice(0, limit - 2) + "..";

            }

    }
});
firstapp.filter('htmlToPlaintext', function() {
    return function(text) {
        return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
});

firstapp.directive('aplhaOnly', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                var transformedInput = text.replace(/[^a-zA-Z]/g, '');
                if (transformedInput !== text) {
                    ngModelCtrl.$setViewValue(transformedInput);
                    ngModelCtrl.$render();
                }
                return transformedInput;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});
firstapp.filter('urlEncode', [function() {
    return window.encodeURIComponent;
}]);

firstapp.filter('englishNumeralDate', function() {
    return function(value) {
        if (value) {
            console.log(angular.isDate(value));
            return moment(new Date(value)).format("Do MMMM YYYY");
        }
    };
});
firstapp.filter('englishNumeralTime', function() {
    return function(value) {
        if (value) {
            console.log(angular.isDate(value));
            return moment(new Date(value)).format("h:mm a");
        }
    };
});
firstapp.directive('noPaste', function ($filter) {
  return {
    scope: {},
    link: function (scope, element) {
      element.on('cut copy paste', function (event) {
        event.preventDefault();
      });
    }
  };
});
