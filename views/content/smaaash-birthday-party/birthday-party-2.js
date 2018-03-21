    firstapp.controller('Birthdayparty2Ctrl', function ($scope, TemplateService, NavigationService, $timeout, $state, $stateParams) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("smaaash-birthday-party/birthday-party-2");
        $scope.menutitle = NavigationService.makeactive("Birthday-party-2");
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
            $state.go('birthday-party-2-thank-you', {
                thankCity: $stateParams.partyCity
            });
        }
        $scope.city = $stateParams.partyCity;
        // console.log("citycity", $stateParams.partyCity, $scope.city);
        // ***FOR DATEPICKER****
        $scope.popup2 = {
            opened: false
        };
        $scope.open2 = function () {
            $scope.popup2.opened = true;
        };

        // ***FOR DATEPICKER**** 
        //seo
        //birthday-2

        if ($stateParams.partyCity === "gurgaon-ambience-mall") {
            TemplateService.title = "Make Your Special Day Even More Special";
            TemplateService.description = "With Smaaash you get to host some of the best birthday parties in Gurgaon. So put on your party caps and gear up to have a grand birthday party, Gurgaon!";
            TemplateService.keywords = "birthday parties in Gurgaon, birthday party";
        }
        //birthday

        if ($stateParams.partyCity === "mumbai") {
            TemplateService.title = "Make Your Special Day Even More Special";
            TemplateService.description = "With Smaaash you get to host some of the best birthday parties in Mumbai. So put on your party caps and gear up to have a grand birthday party, Mumbai!";
            TemplateService.keywords = "birthday party, birthday parties in Mumbai";
        }
        if ($stateParams.partyCity === "gurgaon-cyber-hub") {
            TemplateService.title = "Make Your Special Day Even More Special";
            TemplateService.description = "With Smaaash you get to host some of the best birthday party place in Gurgaon. So put on your party caps and gear up to have a great birthday party!";
            TemplateService.keywords = "party place in Gurgaon, birthday party";
        }
        if ($stateParams.partyCity === "ludhiana") {
            TemplateService.title = "Perfect Place and Packages for a Birthday Party| SMAAASH";
            TemplateService.description = "SMAAASH makes your special day even more special with offers and deals only for you. Throw the most vibrant birthday party here";
            TemplateService.keywords = "Birthday parties, birthday party, Birthday parties venues, Birthday parties venue, venues for birthday parties , venues for birthday party, Birthday party venues, birthday celebration places";
        }
        if ($stateParams.partyCity === "hyderabad") {
            TemplateService.title = "Throw Your Birthday Party in Hyderabad with SMAAASH";
            TemplateService.description = "Try a new birthday party venue in Hyderabad and have a smashing time with your friends and family";
            TemplateService.keywords = "birthday party in Hyderabad, birthday party venue in Hyderabad , party places, party places in hyderabad	";
        }
        if ($stateParams.partyCity === "bengaluru") {
            TemplateService.title = "Make Your Special Day Even More Special";
            TemplateService.description = "With Smaaash you get to host some of the best birthday parties in Bengaluru. So put on your party  caps and gear up to have a grand birthday party, Bengaluru!";
            TemplateService.keywords = "birthday parties in Bengaluru, birthday party";
        }

        if ($stateParams.partyCity === "gurgaon-sector-29") {
            TemplateService.title = "Birthday Party on the Fast Track";
            TemplateService.description = "Birthday parties never got this happening as you go kart  with your friends and enjoy scrumptious food and drinks at Smaaash Sky Karting and Pitstop Brewpub.";
            TemplateService.keywords = "Birthday parties,birthday party,Birthday parties venues,Birthday parties venue,venues for birthday parties ,venues for birthday party,Birthday party venues, birthday celebration places";
        }
        if ($stateParams.partyCity === "noida") {
            TemplateService.title = "Birthday Parties, Noida Get a Twist at Smaaash, Noida";
            TemplateService.description = "Birthday parties, Noida get a whacky makeover at Smaaash, with all the exciting virtual reality games, simulated sport, food and drinks to enjoy.";
            TemplateService.keywords = "Birthday parties Noida, Birthday parties Noida, virtual reality games";
        }
        if ($stateParams.partyCity === "delhi") {
            TemplateService.title = "Host A Party Like Never Before";
            TemplateService.description = "Make your special day even more special- With Smaaash you get to host some of the best birthday parties in Delhi. So put on your party caps and gear up to have a grand birthday party, Delhi!";
            TemplateService.keywords = "birthday parties in Delhi , birthday parties ";
        }
        if ($stateParams.partyCity === "pune") {
            TemplateService.title = "Smaaash: A Place For Birthday Party In Pune";
            TemplateService.description = "The best venues for birthday parties in Pune offered by Smaaash";
            TemplateService.keywords = "birthday party in Pune, birthday parties";
        }
        if ($stateParams.partyCity === "indore") {
            TemplateService.title = "Smaaash: Host A Birthday Party In Indore";
            TemplateService.description = "The best birthday parties are the ones that give you an experience of a lifetime. Smaaash gives you all that you want to make the most of someone's birthday";
            TemplateService.keywords = "birthday party in Indore";
        }
        //birthday

    })