var adminurl = "https://test.smaaash.in/";



var imgurl = adminurl + "upload/";
var imgpath = imgurl + "readFile";

var pdfpath = "https://test.smaaash.in/upload/readFile?file";

var uploadurl = imgurl;

var navigationservice = angular.module('navigationservice', [])

    .factory('NavigationService', function ($http) {
        var navigation = [{
            name: "Home",
            classis: "active",
            anchor: "home",
            subnav: [{
                name: "Subnav1",
                classis: "active",
                anchor: "home"
            }]
        }];



        return {
            getnav: function () {
                return navigation;
            },

            makeactive: function (menuname) {

                for (var i = 0; i < navigation.length; i++) {
                    if (navigation[i].name == menuname) {
                        navigation[i].classis = "active";
                    } else {
                        navigation[i].classis = "";
                    }
                }
                return menuname;
            },

            getCity: function (callback) {
                $http({
                    url: adminurl + 'city/getAllCityByOrder',
                    method: 'POST',
                    withCredentials: true
                }).success(callback);
            },

            getSlider: function (callback) {
                var data = {
                    city: $.jStorage.get("cityid")
                };
                $http({
                    url: adminurl + 'slider/getAllSliderByOrder',
                    method: 'POST',
                    withCredentials: true,
                    data: data
                }).success(callback);
            },
            getHomeContent: function (callback) {
                var data = {
                    city: $.jStorage.get("cityid")
                };
                $http({
                    url: adminurl + 'exploresmash/getHomeContent',
                    method: 'POST',
                    withCredentials: true,
                    data: data
                }).success(callback);
            },
            getExploresmash: function (request, callback) {

                $http({
                    url: adminurl + 'exploresmash/findLimited',
                    method: 'POST',
                    withCredentials: true,
                    data: request
                }).success(callback);
            },
            getOneExploresmash: function (id, callback) {
                var data = {
                    _id: id,
                    city: $.jStorage.get("cityid")
                };
                $http({
                    url: adminurl + 'exploresmash/getOne',
                    method: 'POST',
                    withCredentials: true,
                    data: data
                }).success(callback);
            },
            getDetailBlog: function (id, callback) {
                var data = {
                    _id: id,
                    city: $.jStorage.get("cityid")
                };
                $http({
                    url: adminurl + 'blog/getDetailBlog',
                    method: 'POST',
                    withCredentials: true,
                    data: data
                }).success(callback);
            },
            getPopularBlog: function (callback) {
                $http({
                    url: adminurl + 'blog/getPopularBlog',
                    method: 'POST',
                    withCredentials: true
                }).success(callback);
            },
            getFoodGallery: function (id, callback) {
                var data = {
                    _id: id,
                    city: $.jStorage.get("cityid")
                };
                $http({
                    url: adminurl + 'exploresmash/getOneExploreSmaaash',
                    method: 'POST',
                    withCredentials: true,
                    data: data
                }).success(callback);
            },
            getPartyInside: function (id, cityid, callback) {
                var data = {
                    // _id: id,
                    myslug: id,
                    city: cityid
                    // city: $.jStorage.get("cityid")
                };
                $http({
                    url: adminurl + 'exploresmash/getDetailExploreSmaaashByUrl',
                    method: 'POST',
                    withCredentials: true,
                    data: data
                }).success(callback);
            },
            // getPartyInside: function(id,cityid, callback) {
            //     var data = {
            //         // _id: id,
            //         myslug: id,
            //         city:cityid
            //         // city: $.jStorage.get("cityid")
            //     };
            //     $http({
            //         url: adminurl + 'exploresmash/getByUrl',
            //         method: 'POST',
            //         withCredentials: true,
            //         data: data
            //     }).success(callback);
            // },
            getAllExploreSmashByCity: function (id, callback) {
                $http({
                    url: adminurl + 'exploresmash/getAllExploreSmashByCity',
                    method: 'POST',
                    withCredentials: true,
                    data: {
                        _id: id
                    }

                }).success(callback);
            },


            signup: function (signupData, callback) {

                $http({
                    url: adminurl + 'signup/save',
                    method: 'POST',

                    data: signupData

                }).success(callback);
            },
            editCartPackage: function (editCart, callback) {

                $http({
                    url: adminurl + 'signup/EditCartPackage',
                    method: 'POST',

                    data: editCart

                }).success(callback);
            },
            rechargeCard: function (rechargeOnline, callback) {

                $http({
                    url: adminurl + 'signup/RechargeCard',
                    method: 'POST',

                    data: rechargeOnline

                }).success(callback);
            },
            GetCustomerBookingDetails: function (custId, callback) {
                var data = {
                    CustID: custId
                };
                $http({
                    url: adminurl + 'signup/GetCustomerBookingDetails',
                    method: 'POST',

                    data: data

                }).success(callback);
            },
            getCustomerBalance: function (detailsForBal, callback) {
                $http({
                    url: adminurl + 'signup/GetCustomerBalance',
                    method: 'POST',

                    data: detailsForBal

                }).success(callback);
            },

            CustomerRegistration: function (signupData, callback) {

                $http({
                    url: adminurl + 'signup/CustomerRegistration',
                    method: 'POST',

                    data: signupData

                }).success(callback);
            },
            generateOtp: function (dataforOtp, callback) {

                $http({
                    url: adminurl + 'signup/generateOtp',
                    method: 'POST',

                    data: dataforOtp

                }).success(callback);
            },

            VerifyCustomerLogin: function (userData, callback) {

                $http({
                    url: adminurl + 'signup/VerifyCustomerLogin',
                    method: 'POST',


                    data: userData

                }).success(callback);
            },
            custom: function (signupData, callback) {

                $http({
                    url: adminurl + 'custom/save',
                    method: 'POST',

                    data: signupData

                }).success(callback);
            },

            getOne: function (callback) {
                if ($.jStorage.get("loginDetail") != null) {
                    var data = {
                        _id: $.jStorage.get("loginDetail")._id,

                    };
                }

                $http({
                    url: adminurl + 'signup/getOne',
                    method: 'POST',

                    data: data

                }).success(callback);
            },

            eventInnerForm: function (userData, callback) {
                $http({
                    url: adminurl + 'enquiry/save',
                    method: 'POST',

                    data: userData

                }).success(callback);
            },
            subscribe: function (subscribeData, callback) {

                $http({
                    url: adminurl + 'subscribe/save',
                    method: 'POST',

                    data: subscribeData

                }).success(callback);
            },
            getHomeBanner: function (callback) {
                var data = {
                    city: $.jStorage.get("cityid")
                };
                $http({
                    url: adminurl + 'configtwo/getAll',
                    method: 'POST',
                    withCredentials: true,
                    data: data
                }).success(callback);
            },
            getSingleExploreSmaaash: function (id, callback) {
                var data = {
                    // myslug: id,
                    _id: id,
                    city: $.jStorage.get("cityid")
                };
                $http({
                    url: adminurl + 'exploresmash/getSingleExploreSmaaash',
                    method: 'POST',
                    withCredentials: true,
                    data: data

                }).success(callback);
            },
            getSingleExploreSmaaashHost: function (id, callback) {
                var data = {
                    myslug: id,
                    // _id: id,
                    city: $.jStorage.get("cityid")
                };
                $http({
                    url: adminurl + 'exploresmash/getSingleExploreSmaaashByUrl',
                    method: 'POST',
                    withCredentials: true,
                    data: data

                }).success(callback);
            },
            getSingleExploreSmaaashByUrl: function (id, cityid, callback) {
            
                if (cityid) {
                    var cityId = cityid;
                } else {
                    cityId = $.jStorage.get("cityid");
                }
                var data = {
                    // _id: id,
                    myslug: id,
                    city: cityId
                };
                $http({
                    url: adminurl + 'exploresmash/getSingleExploreSmaaashByUrl',
                    method: 'POST',
                    withCredentials: true,
                    data: data

                }).success(callback);
            },
            getSingleExploreSmaaashByUrlDeals: function (id, cityid, callback) {
                console.log(id, "id");
                var data = {
                    // _id: id,
                    myslug: id,
                    city: cityid
                };
                $http({
                    url: adminurl + 'exploresmash/getSingleExploreSmaaashByUrl',
                    method: 'POST',
                    withCredentials: true,
                    data: data

                }).success(callback);
            },
            getcustomizeCityFun: function (id, custCityId, callback) {
                var data = {
                    _id: id,
                    city: custCityId
                };
                $http({
                    url: adminurl + 'exploresmash/getSingleExploreSmaaash',
                    method: 'POST',
                    withCredentials: true,
                    data: data

                }).success(callback);
            },
            // searchExploreSmaaash: function(filter, callback) {
            //     if (filter) {
            //         filter.city = $.jStorage.get("cityid");
            //     }
            //     $http({
            //         url: adminurl + 'exploresmash/getSingleExploreSmaaash',
            //         method: 'POST',
            //         withCredentials: true,
            //         data: filter
            //
            //     }).success(callback);
            // },
            searchExploreSmaaash: function (filter, callback) {
                // if(filter){
                //   filter.city=$.jStorage.get("cityid");
                // }
                $http({
                    url: adminurl + 'exploresmash/getSingleExploreSmaaashByUrl',
                    method: 'POST',
                    withCredentials: true,
                    data: filter

                }).success(callback);
            },


            getStars: function (request, callback) {

                $http({
                    url: adminurl + 'star/findLImited',
                    method: 'POST',
                    withCredentials: true,
                    data: request

                }).success(callback);

            },
            getGallery: function (mediaObj, callback) {
                $http({
                    url: adminurl + 'mediagallery/findLimited',
                    method: 'POST',
                    data: mediaObj,
                    withCredentials: true

                }).success(callback);
            },
            assistanceLoginSignup: function (formdata, callback) {

                $http({
                    url: adminurl + 'assistance/save',
                    method: 'POST',

                    data: formdata

                }).success(callback);
            },
            addToCart: function (params, callback) {

                $http({
                    url: adminurl + 'signup/addToCart',
                    method: 'POST',
                    withCredentials: true,
                    data: params

                }).success(callback);
            },

            getAllHostPartySlider: function (callback) {
                var data = {
                    city: $.jStorage.get("cityid")
                };
                $http({
                    url: adminurl + 'slider/getAllHostPartySlider',
                    method: 'POST',
                    withCredentials: true,
                    data: data
                }).success(callback);
            },
            getDetailExploreSmaaash: function (id, callback) {
                var data = {
                    _id: id,
                    city: $.jStorage.get("cityid")
                };

                $http({
                    url: adminurl + 'exploresmash/getDetailExploreSmaaash',
                    method: 'POST',
                    withCredentials: true,
                    data: data

                }).success(callback);
            },
            getDetailExploreSmaaashByUrl: function (id, cityid, callback) {
                if (cityid) {
                    var cityId = cityid;
                } else {
                    var cityId = $.jStorage.get("cityid");
                }
                var data = {
                    myslug: id,
                    // _id: id,
                    city: cityId
                };

                $http({
                    url: adminurl + 'exploresmash/getDetailExploreSmaaashByUrl',
                    method: 'POST',
                    withCredentials: true,
                    data: data

                }).success(callback);
            },
            addToWishList: function (id, callback) {
                console.log("nAV", id);
                var data = {
                    user: $.jStorage.get("loginDetail")._id,
                    wishList: {
                        exploresmash: id,
                        city: $.jStorage.get("cityid")
                    }
                };
                $http({
                    url: adminurl + 'signup/addToWishList',
                    method: 'POST',
                    withCredentials: true,
                    data: data
                }).success(callback);
            },
            showWishList: function (callback) {
                // console.log("nAV", id);
                var data = {
                    user: $.jStorage.get("loginDetail")._id,
                };
                $http({
                    url: adminurl + 'signup/showWishList',
                    method: 'POST',
                    withCredentials: true,
                    data: data
                }).success(callback);
            },
            showCartPackage: function (showCartParams, callback) {
                $http({
                    url: adminurl + 'signup/SelectCartPackage',
                    method: 'POST',
                    withCredentials: true,
                    data: showCartParams
                }).success(callback);
            },
            CheckOutCart: function (checkOutParams, callback) {
                $http({
                    url: adminurl + 'signup/CheckOut',
                    method: 'POST',
                    withCredentials: true,
                    data: checkOutParams
                }).success(callback);
            },
            removeCartPackage: function (removePackageParams, callback) {
                $http({
                    url: adminurl + 'signup/RemoveCartPackage',
                    method: 'POST',
                    withCredentials: true,
                    data: removePackageParams
                }).success(callback);
            },
            removeFromWishList: function (id, callback) {
                console.log("inNav", id);
                var data = {
                    user: $.jStorage.get("loginDetail")._id,
                    _id: id
                };
                $http({
                    url: adminurl + 'signup/deleteWishList',
                    method: 'POST',
                    withCredentials: true,
                    data: data
                }).success(callback);
            },
            getMediaGallery: function (callback) {
                $http({
                    url: adminurl + 'mediagallery/getAllMediaGallery',
                    method: 'POST',
                    withCredentials: true
                }).success(callback);
            },

            logout: function (callback) {
                $.jStorage.set("loginDetail", null);
                $.jStorage.set("customizeobj", null);
                return $http({
                    url: adminurl + 'register/logout',
                    method: 'POST',
                }).success(callback);

            },

            getLeader: function (callback) {
                $http({
                    url: adminurl + 'leader/getAllLeader',
                    method: 'POST',
                    withCredentials: true
                }).success(callback);
            },
            getBlog: function (blogObj, callback) {
                $http({
                    url: adminurl + 'blog/findLimited',
                    method: 'POST',
                    data: blogObj,
                    withCredentials: true
                }).success(callback);
            },
            hostGetCall: function (formDatapopup, callback) {

                $http({
                    url: adminurl + 'callenquiry/save',
                    method: 'POST',

                    data: formDatapopup

                }).success(callback);
            },
            setUser: function (data) {
                $.jStorage.set("loginDetail", data);
            },
            setCity: function (cityname) {


                $.jStorage.set("cityid", cityname._id);
                $.jStorage.set("city", cityname.name);
                $.jStorage.set("logos", cityname.logo);
                $.jStorage.set("branchId", cityname.BranchID);
                $.jStorage.set("citySlug", cityname.myslug);
                $.jStorage.set("weekdays", cityname.weekdays);
                $.jStorage.set("weekend", cityname.weekend);

            },
            // getStoredUser: function() {
            //     return $.jStorage.get("user");
            // },
            getStoredCity: function () {
                return $.jStorage.get("cityid");
            },


            editUserData: function (signupData, callback) {

                $http({
                    url: adminurl + 'signup/save',
                    method: 'POST',

                    data: signupData

                }).success(callback);
            },
            forgotPassword: function (credentials, callback) {

                $http({
                    url: adminurl + 'signup/forgotPassword',
                    method: 'POST',

                    data: credentials

                }).success(callback);
            },
            CustomerResetPassword: function (credentials, callback) {

                $http({
                    url: adminurl + 'signup/CustomerResetPassword',
                    method: 'POST',

                    data: credentials

                }).success(callback);
            },
            forgotPasswordSubmit: function (credentials, callback) {

                $http({
                    url: adminurl + 'signup/forgotPasswordSubmit',
                    method: 'POST',

                    data: credentials

                }).success(callback);
            },
            CustomerForgetPassword: function (credentials, callback) {

                $http({
                    url: adminurl + 'signup/CustomerForgetPassword',
                    method: 'POST',

                    data: credentials

                }).success(callback);
            },
            signupProfile: function (callback) {
                if ($.jStorage.get("loginDetail") != null) {
                    var data = {
                        _id: $.jStorage.get("loginDetail")._id,
                    };
                }

                $http({
                    url: adminurl + 'signup/profile',
                    method: 'POST',

                    data: data

                }).success(callback);
            },
            updateProfile: function (userprofile, callback) {
                // var data = {
                //     _id: $.jStorage.get("loginDetail").data._id,
                //   };
                $http({
                    url: adminurl + 'signup/updateProfile',
                    method: 'POST',

                    data: userprofile

                }).success(callback);
            },


            getSponsors: function (callback) {

                $http({
                    url: adminurl + 'sponsor/getAllSponsorPageDetail',
                    method: 'POST',
                    withCredentials: true

                }).success(callback);
            },
            getBenefit: function (callback) {

                $http({
                    url: adminurl + 'benefit/getAll',
                    method: 'POST',
                    withCredentials: true

                }).success(callback);
            },


        };
    });
