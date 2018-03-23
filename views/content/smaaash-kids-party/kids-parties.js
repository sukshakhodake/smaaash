    firstapp.controller('KidspartiesCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state,$stateParams) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("smaaash-kids-party/kids-parties");
        $scope.menutitle = NavigationService.makeactive("Kids-parties");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.removeLoaderOn(1);
        $timeout(function () {
            $('#mform').validate();

            var d = new Date();
            var n = Math.floor(Math.random() * 90 + 10) + d.valueOf();
            document.getElementById("returnURL").value = document.getElementById("returnURL").value + "?lead_id=" + n;
            $(".leadid").val(n);
            $('.responsive').slick({
                dots: true,
                infinite: true,
                speed: 1000,
                slidesToShow: 4,
                slidesToScroll: 4,
                responsive: [{
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 5,
                            slidesToScroll: 5,
                            infinite: true,
                            dots: true
                        }
                    }, {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    }, {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }

                ]
            });
        }, 500);

            $scope.goToThanks = function (data) {
              $state.go('kids-parties-thank-you', {thankCity: $stateParams.hostCity});
        }
     $scope.city=$stateParams.partyCity;
        console.log("citycity",$scope.city);
         // ***FOR DATEPICKER****
        $scope.popup2 = {
            opened: false
        };
       $scope.open2 = function() {
    $scope.popup2.opened = true;
  };

        // ***FOR DATEPICKER**** 

        // seo
         if ($stateParams.partyCity === "pune") {
        TemplateService.title = "Kids Birthday Parties At Smaaash";
        TemplateService.description = "Gift your kids the perfect birthday filled with amazing games, delicious food and tons of fun at Smaaash Junior. Kids parties will never be the same again!";
        TemplateService.keywords = "kids birthday party ,kids party";
    }
          if ($stateParams.partyCity === "indore") {
        TemplateService.title = "Kids birthday parties at Smaaash";
        TemplateService.description = "Gift your kids the perfect birthday filled with amazing games, delicious food and tons of fun at Smaaash Junior. Kids parties will never be the same again!";
        TemplateService.keywords = "kids birthday party ,kids party";
    }
    })