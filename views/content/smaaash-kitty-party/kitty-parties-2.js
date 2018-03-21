    firstapp.controller('KittypartiesCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state, $stateParams) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("smaaash-kitty-party/kitty-parties-2");
        $scope.menutitle = NavigationService.makeactive("Kitty-parties-2");
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
            $state.go('kitty-parties-2-thank-you', {
                thankCity: $stateParams.hostCity
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
        //kitty-parties
        if ($stateParams.partyCity === "hyderabad") {
            TemplateService.title = "SMAAASH | Don’t Adhere to a Typical Kitty Party Format ";
            TemplateService.description = "Who said women only gossip at kitty parties? Whoever did has certainly not seen a real one. Right back at them, at SMAAASH Hyderabad ladies special";
            TemplateService.keywords = "kitty party, kitty parties, kitty party venues in hyderabad	";
        }
        //snehal
        if ($stateParams.partyCity === "mumbai") {
            TemplateService.title = "Kitty Parties are Now Exciting at Smaaash";
            TemplateService.description = "Gals, host your kitty parties with a twist at Smaaash. Play virtual reality games, simulated sport and then chill and gossip over food and drinks.";
            TemplateService.keywords = "Kitty parties, virtual reality games , kitty party";
        }
        if ($stateParams.partyCity === "noida") {
            TemplateService.title = "Kitty Parties Rock at Smaaash, Noida  ";
            TemplateService.description = " Your girl gang will be the talk of town when you host your kitty parties in unconventional style at Smaaash with VR games, sports, great food and ambience. ";
            TemplateService.keywords = "Kitty parties, kitty parties,  VR games";
        }
        //  console.log("$stateParams.partyCity", $stateParams.partyCity);
        if ($stateParams.partyCity === "ludhiana") {
            TemplateService.title = "All Gals Jovial Kitty Parties at Smaaash, Ludhiana";
            TemplateService.description = "Gals put your party hats on and come down to Smaaash for some awesome kitty party fun. You could always gossip over sumptuous food and drinks to chill.";
            TemplateService.keywords = "kitty parties,  kitty party";
        }
        if ($stateParams.partyCity === "gurgaon-cyber-hub") {
            TemplateService.title = "Get Your Girl Gang And Set The Mood For A Kitty Party Night!";
            TemplateService.description = "Unlimited gossip while you sip on your favourite drinks with your favourite ladies.  Host amazing kitty parties with Smaaash and have a splendid night!";
            TemplateService.keywords = "kitty party, kitty parties";
        }
        if ($stateParams.partyCity === "bengaluru") {
            TemplateService.title = " Host a party-Kitty party";
            TemplateService.description = "Get your girl gang and set the mood for a kitty party night!- Unlimited gossip while you sip on your favourite drinks with your favourite ladies.  Host kitty parties in Bengaluru with Smaaash and have a splendid night!";
            TemplateService.keywords = "kitty party";
        }
        //kitty-parties
        //kitty-parties-2
        if ($stateParams.partyCity === "gurgaon-ambience-mall") {
            TemplateService.title = "Get Your Girl Gang And Set The Mood For A Kitty Party Night!";
            TemplateService.description = "Unlimited gossip while you sip on your favourite drinks with your favourite ladies.  Host kitty parties with Smaaash and have a splendid night!";
            TemplateService.keywords = "kitty parties, kitty party";
        }
        //kitty-parties-3
        if ($stateParams.partyCity === "delhi") {
            TemplateService.title = "Get Your Girl Gang And Set The Mood For A Kitty Party Night!";
            TemplateService.description = "Unlimited gossip while you sip on your favourite drinks with your favourite ladies.  Host kitty parties in Delhi with Smaaash and have a splendid night!";
            TemplateService.keywords = "kitty party, kitty parties in Delhi";
        }
         //kitty-parties-6
         if ($stateParams.partyCity === "pune") {
            TemplateService.title = "Smaaash: Venues For Kitty Parties In Pune";
            TemplateService.description = "Smaaash offers an environment that is safe and exciting for an occasion like kitty party. Food and drinks that keep you happy.";
            TemplateService.keywords = "kitty parties, kitty party";
        }
        if ($stateParams.partyCity === "indore") {
            TemplateService.title = "Kitty Parties In Indore At Smaaash";
            TemplateService.description = "A place that offers the best venue for team activities that helps the members bond in Indore is Smaaash with VR games and friendly competitions";
            TemplateService.keywords = "team outing places, team activities";
        }
    })