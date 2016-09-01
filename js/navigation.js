// var adminurl = "";
// var imgurl = "http://wohlig.co.in/rdbackend/uploads/";

// var adminurl = "http://192.168.1.103:1337/";
// var adminurl = "http://104.197.84.255/";//pooja
// var adminurl = "http://192.168.0.118:1337/";
var adminurl = "http://104.154.89.21:82/";
// var adminurl = "http://192.168.0.114:1337/";
var imgurl = adminurl + "upload/";
var imgpath = imgurl + "readFile";
var uploadurl = imgurl;
// if(isproduction)
// {
//   adminURL =  "http://www.wohlig.co.in/demo/index.php";
// }
// else {
//   adminURL = "http://localhost/demo/index.php";
// }

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
            var data = {city:$.jStorage.get("cityid")};
            $http({
                url: adminurl + 'slider/getAllSliderByOrder',
                method: 'POST',
                withCredentials: true,
                data: data
            }).success(callback);
        },
        getHomeContent: function(callback) {
            var data = {city:$.jStorage.get("cityid")};
            $http({
                url: adminurl + 'exploresmash/getHomeContent',
                method: 'POST',
                withCredentials: true,
                data:data
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
          var data = {_id:id,city:$.jStorage.get("cityid")};
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

        signup: function(signupData, callback) {

            $http({
                url: adminurl + 'signup/save',
                method: 'POST',

                data: signupData

            }).success(callback);
        },
        login: function(userData, callback) {

            $http({
                url: adminurl + 'signup/login',
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
            $http({
                url: adminurl + 'configtwo/getAll',
                method: 'POST',
                withCredentials: true
            }).success(callback);
        },
        getSingleExploreSmaaash: function(id,callback) {
            var data = {_id:id,city:$.jStorage.get("cityid")};

            $http({
                url: adminurl + 'exploresmash/getSingleExploreSmaaash',
                method: 'POST',
                withCredentials: true,
                data: data

            }).success(callback);
        },

        getStars: function(request, callback) {

               $http({
                url: adminurl + 'star/findLImited',
                method: 'POST',
                withCredentials: true,
                data:request

                }).success(callback);

        },
        assistanceLoginSignup: function(formData, callback) {

            $http({
                url: adminurl + 'assistance/save',
                method: 'POST',

                data: formData

            }).success(callback);
        },
        getAllHostPartySlider: function(callback) {
            var data = {city:$.jStorage.get("cityid")};
            $http({
                url: adminurl + 'slider/getAllHostPartySlider',
                method: 'POST',
                withCredentials: true,
                data: data
            }).success(callback);
        },
        getDetailExploreSmaaash: function(id,callback) {
            var data = {_id:id,city:$.jStorage.get("cityid")};

            $http({
                url: adminurl + 'exploresmash/getDetailExploreSmaaash',
                method: 'POST',
                withCredentials: true,
                data: data

            }).success(callback);
        },
        wishList: function(id,callback) {
          console.log("nAV",id);
            var data = {exploresmash:id,user:$.jStorage.get("loginDetail").data._id,city:$.jStorage.get("cityid")};

            $http({
                url: adminurl + 'wishlist/save',
                method: 'POST',
                withCredentials: true,
                data:data
            }).success(callback);
        },
        // userWishList: function(callback) {
        //     var data = {user:$.jStorage.get("loginDetail").data._id,city:$.jStorage.get("cityid")};
        //     $http({
        //         url: adminurl + 'wishlist/getWishlistByUser',
        //         method: 'POST',
        //         withCredentials: true,
        //         data:data
        //     }).success(callback);
        // },

        // logout: function(callback) {
        //     $.jStorage.flush();
        //     return $http({
        //         url: adminurl + 'signup/logout',
        //         method: 'POST',
        //     }).success(callback);
        // },



  };
});
