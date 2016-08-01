// var adminurl = "";
// var imgurl = "http://wohlig.co.in/rdbackend/uploads/";

var adminurl = "http://192.168.1.103:1337/";
var imgurl = adminurl + "upload/";
var imgpath = imgurl + "readFile";
var uploadurl = imgurl;
if(isproduction)
{
  adminURL =  "http://www.wohlig.co.in/demo/index.php";
}
else {
  adminURL = "http://localhost/demo/index.php";
}

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
    getSlider: function(id,callback) {
            $http({
            url: adminurl + 'slider/getAllSliderByOrder',
            method: 'POST',
            withCredentials: true,
            data:{
              _id:id
            }
        }).success(callback);
    },
    getHomeContent: function(callback) {
            $http({
            url: adminurl + 'exploresmash/getHomeContent',
            method: 'POST',
            withCredentials: true
        }).success(callback);
    },
    getExploresmash: function(request,callback) {
            $http({
            url: adminurl + 'exploresmash/findLimited',
            method: 'POST',
            withCredentials: true,
            data:request
        }).success(callback);
    },
    getOneExploresmash: function(id, callback) {
           $http({
            url: adminurl + 'exploresmash/getOne',
            method: 'POST',
            withCredentials: true,
            data: {
                _id: id
            }

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


  };
});
