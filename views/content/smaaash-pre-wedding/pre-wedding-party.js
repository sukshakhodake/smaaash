    firstapp.controller('PreweddingpartyCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state,$stateParams) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("smaaash-pre-wedding/pre-wedding-party");
        $scope.menutitle = NavigationService.makeactive("Pre-wedding-party");
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
              $state.go('pre-wedding-party-thank-you', {thankCity: $stateParams.partyCity});
        }
              $scope.city=$stateParams.partyCity;
        console.log("citycity",$scope.city);
        
    })