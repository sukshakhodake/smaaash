    firstapp.controller('TeambuildingeventsCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state, $stateParams) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("smaaash-team-management/team-building-events");
        $scope.menutitle = NavigationService.makeactive("Team-building-events");
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
            $state.go('team-building-events-thank-you', {
                thankCity: $stateParams.partyCity
            });
        }
        $scope.city = $stateParams.partyCity;
        console.log("citycity", $scope.city);
        // ***FOR DATEPICKER****
        $scope.popup2 = {
            opened: false
        };
        $scope.open2 = function () {
            $scope.popup2.opened = true;
        };

        // ***FOR DATEPICKER**** 

        //seo
        //team-building-events-2
        if ($stateParams.partyCity === "gurgaon-ambience-mall") {
            TemplateService.title = "Strengthen Bond As You Build Team Spirit With Smaaash!";
            TemplateService.description = "A team that works together succeeds together. Play competitive games, gulp drinks & relish delicacies with your comrades in a team outing event at Smaaash.";
            TemplateService.keywords = "a team outing event";
        }

        //team-building-events-3
        if ($stateParams.partyCity === "delhi") {
            TemplateService.title = "Strengthen Bond As You Build Team Spirit With Smaaash!";
            TemplateService.description = "A team that works together succeeds together. Play competitive games, gulp drinks & relish delicacies with your comrades at one of the best team outing places.";
            TemplateService.keywords = "team outing places";
        }
        //team-building-events

        // console.log("$stateParams.partyCity", $stateParams.partyCity);


        if ($stateParams.partyCity === "hyderabad") {
            TemplateService.title = "SMAAASH | Team Building Activities at a Non-Boring Venue	";
            TemplateService.description = "Bonding with colleagues over fun activities, delicious food and beverages, in a zestful ambience. One for all, only at SMAAASH	";
            TemplateService.keywords = "team outing places, team outing hyderabad, team building activities, company offsite	";
        }
        if ($stateParams.partyCity === "mumbai") {
            TemplateService.title = "Strengthen Bond As You Build Team Spirit With Smaaash!";
            TemplateService.description = "A team that works together succeeds together. Play competitive games, sip on your drinks and savour the delicacies with you comrades by planning a team outing at Smaaash.";
            TemplateService.keywords = "team outing";
        }
        if ($stateParams.partyCity === "gurgaon-cyber-hub") {
            TemplateService.title = "Strengthen Bond As You Build Team Spirit With Smaaash!";
            TemplateService.description = "A team that works together succeeds together. Play competitive games as team building activities with delectable food and drinks at Smaaash.";
            TemplateService.keywords = "team building activities";
        }
        if ($stateParams.partyCity === "bengaluru") {
            TemplateService.title = "Strengthen Bond As You Build Team Spirit With Smaaash!";
            TemplateService.description = "A team that works together succeeds together. Play competitive games, sip on your drinks and savour the delicacies with you comrades by planning a team outing at Smaaash.";
            TemplateService.keywords = "team outing places";
        }
        if ($stateParams.partyCity === "noida") {
            TemplateService.title = " Exciting Team Building Events for Your Office at Smaaash";
            TemplateService.description = "With a host of exciting VR games, simulated sport, great food and drinks, you have a lot to choose from, to make your team building event a memorable one. ";
            TemplateService.keywords = "team building events, VR games, team building event";
        }
        if ($stateParams.partyCity === "ludhiana") {
            TemplateService.title = "Team Building Events are a Cut Above the Rest at Smaaash";
            TemplateService.description = "Host team building events that give you goose bumps as you enjoy the spirit of winning, with great VR games, simulated sport, food and drinks.  ";
            TemplateService.keywords = "Team building events,   team building in ludhiana";
        }
        if ($stateParams.partyCity === "pune") {
            TemplateService.title = "Team Building Activities At Smaaash";
            TemplateService.description = "Smaaash offers the best team outing places in Pune with activities that build a stronger bond amongst the team members";
            TemplateService.keywords = "team building activities, team outing places";
        }
        if ($stateParams.partyCity === "indore") {
            TemplateService.title = "Smaaash: Team Outing Places In Indore";
            TemplateService.description = "A place that offers the best venue for team activities that helps the members bond in Indore is Smaaash with VR games and friendly competitions";
            TemplateService.keywords = "team outing places, team activities";
        }
        //team-building-events
    })