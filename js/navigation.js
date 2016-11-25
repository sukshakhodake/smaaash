var adminurl = "http://104.155.129.33:82/"; //server
// var adminurl = "http://192.168.0.104:1337/";
var imgurl = adminurl + "upload/";
var imgpath = imgurl + "readFile";
// var pdfpath = imgurl + "readFile?file=";
var pdfpath ="http://104.155.129.33:82/upload/readFile?file";
// var uploadurl = adminURL + "imageUpload";

var uploadurl = imgurl;

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
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
        getnav: function() {
            return navigation;
        },

        makeactive: function(menuname) {

            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },

        getCity: function(callback) {
            $http({
                url: adminurl + 'city/getAllCityByOrder',
                method: 'POST',
                withCredentials: true
            }).success(callback);
        },
        getSlider: function(callback) {
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
        getHomeContent: function(callback) {
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
        getExploresmash: function(request, callback) {

            $http({
                url: adminurl + 'exploresmash/findLimited',
                method: 'POST',
                withCredentials: true,
                data: request
            }).success(callback);
        },
        getOneExploresmash: function(id, callback) {
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
        getDetailBlog: function(id, callback) {
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
        getPopularBlog: function(callback) {
          $http({
                url: adminurl + 'blog/getPopularBlog',
                method: 'POST',
                withCredentials: true
          }).success(callback);
        },
        getFoodGallery: function(id, callback) {
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
        getPartyInside: function(id, callback) {
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
        getAllExploreSmashByCity: function(id, callback) {
            $http({
                url: adminurl + 'exploresmash/getAllExploreSmashByCity',
                method: 'POST',
                withCredentials: true,
                data: {
                    _id: id
                }

            }).success(callback);
        },

        getTypes: function(callback) {
            $http({
                url: adminurl + 'Type/getAll',
                method: 'POST',
                withCredentials: true
            }).success(callback);
        },

        getUser: function(callback) {
            $http({
                url: adminurl + 'user/getall',
                method: 'POST',
                withCredentials: true
            }).success(callback);
        },



        signup: function(signupData, callback) {

            $http({
                url: adminurl + 'signup/save',
                method: 'POST',

                data: signupData

            }).success(callback);
        },

        CustomerRegistration: function(signupData, callback) {

            $http({
                url: adminurl + 'signup/CustomerRegistration',
                method: 'POST',

                data: signupData

            }).success(callback);
        },
        generateOtp: function(dataforOtp, callback) {

            $http({
                url: adminurl + 'signup/generateOtp',
                method: 'POST',

                data: dataforOtp

            }).success(callback);
        },

        VerifyCustomerLogin: function(userData, callback) {

            $http({
                url: adminurl + 'signup/VerifyCustomerLoginWeb',
                method: 'POST',


                data: userData

            }).success(callback);
        },
        custom: function(signupData, callback) {

            $http({
                url: adminurl + 'custom/save',
                method: 'POST',

                data: signupData

            }).success(callback);
        },
        getOne: function(callback) {
            var data = {
                _id: $.jStorage.get("loginDetail").data._id,

            };
            $http({
                url: adminurl + 'signup/getOne',
                method: 'POST',

                data: data

            }).success(callback);
        },

        eventInnerForm: function(userData, callback) {
            $http({
                url: adminurl + 'enquiry/save',
                method: 'POST',

                data: userData

            }).success(callback);
        },
        subscribe: function(subscribeData, callback) {

            $http({
                url: adminurl + 'subscribe/save',
                method: 'POST',

                data: subscribeData

            }).success(callback);
        },
        getHomeBanner: function(callback) {
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
        getSingleExploreSmaaash: function(id, callback) {
            var data = {
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
      searchExploreSmaaash: function(filter, callback) {
        if(filter){
          filter.city=$.jStorage.get("cityid");
        }
                $http({
                url: adminurl + 'exploresmash/getSingleExploreSmaaash',
                method: 'POST',
                withCredentials: true,
                data: filter

            }).success(callback);
        },

        getStars: function(request, callback) {

            $http({
                url: adminurl + 'star/findLImited',
                method: 'POST',
                withCredentials: true,
                data: request

            }).success(callback);

        },
        assistanceLoginSignup: function(formdata, callback) {

            $http({
                url: adminurl + 'assistance/save',
                method: 'POST',

                data: formdata

            }).success(callback);
        },

        getAllHostPartySlider: function(callback) {
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
        getDetailExploreSmaaash: function(id, callback) {
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
        addToWishList: function(id, callback) {
            console.log("nAV", id);
            var data = {
                user: $.jStorage.get("loginDetail").data._id,
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
        showWishList: function(callback) {
            // console.log("nAV", id);
            var data = {
                user: $.jStorage.get("loginDetail").data._id,
            };
            $http({
                url: adminurl + 'signup/showWishList',
                method: 'POST',
                withCredentials: true,
                data: data
            }).success(callback);
        },
        removeFromWishList: function(id,callback) {
          console.log("inNav",id);
            var data = {
                user: $.jStorage.get("loginDetail").data._id,
                _id:id
            };
            $http({
                url: adminurl + 'signup/deleteWishList',
                method: 'POST',
                withCredentials: true,
                data: data
            }).success(callback);
        },
        getMediaGallery: function(callback) {
            $http({
                url: adminurl + 'mediagallery/getAllMediaGallery',
                method: 'POST',
                withCredentials: true
            }).success(callback);
        },

        logout: function(callback) {
          // console.log("im in logout");
            // $.jStorage.flush();
              $.jStorage.set("loginDetail",null);
              $.jStorage.set("loginId",null);
              $.jStorage.set("loggedInUser",null);
              $.jStorage.set("customizeobj",null);
            return $http({
                url: adminurl + 'register/logout',
                method: 'POST',
            }).success(callback);

        },

        getLeader: function(callback) {
            $http({
                url: adminurl + 'leader/getAllLeader',
                method: 'POST',
                withCredentials: true
            }).success(callback);
        },
        getBlog: function(blogObj,callback) {
            $http({
                url: adminurl + 'blog/findLimited',
                method: 'POST',
                data:blogObj,
                withCredentials: true
            }).success(callback);
        },
        hostGetCall: function(formDatapopup, callback) {

            $http({
                url: adminurl + 'callenquiry/save',
                method: 'POST',

                data: formDatapopup

            }).success(callback);
        },


        editUserData: function(signupData, callback) {

            $http({
                url: adminurl + 'signup/save',
                method: 'POST',

                data: signupData

            }).success(callback);
        },
        forgotPassword: function(credentials, callback) {

            $http({
                url: adminurl + 'signup/forgotPassword',
                method: 'POST',

                data: credentials

            }).success(callback);
        },
        CustomerResetPassword: function(credentials, callback) {

            $http({
                url: adminurl + 'signup/CustomerResetPassword',
                method: 'POST',

                data: credentials

            }).success(callback);
        },
        forgotPasswordSubmit: function(credentials, callback) {

            $http({
                url: adminurl + 'signup/forgotPasswordSubmit',
                method: 'POST',

                data: credentials

            }).success(callback);
        },
        CustomerForgetPassword: function(credentials, callback) {

            $http({
                url: adminurl + 'signup/CustomerForgetPassword',
                method: 'POST',

                data: credentials

            }).success(callback);
        },
        signupProfile: function(callback) {
          var data = {
              _id: $.jStorage.get("loginDetail").data._id,
            };
            $http({
                url: adminurl + 'signup/profile',
                method: 'POST',

                data: data

            }).success(callback);
        },
        updateProfile: function(callback) {
          // var data = {
          //     _id: $.jStorage.get("loginDetail").data._id,
          //   };
            $http({
                url: adminurl + 'signup/updateProfile',
                method: 'POST',

                data: data

            }).success(callback);
        },

        getSponsors: function(callback) {

            $http({
                url: adminurl + 'sponsor/getAllSponsorPageDetail',
                method: 'POST',
                withCredentials: true

            }).success(callback);
        },
        getBenefit: function(callback) {

            $http({
                url: adminurl + 'benefit/getAll',
                method: 'POST',
                withCredentials: true

            }).success(callback);
        },


    };
});
