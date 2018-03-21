    firstapp.controller('CorporatepartyCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state,$stateParams) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("smaaash-corporate-party/corporate-parties2");
        $scope.menutitle = NavigationService.makeactive("Corporate-Parties");
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
              $state.go('corporate-parties-thank-you', {thankCity: $stateParams.hostCity});
        }
     $scope.city=$stateParams.partyCity;
        console.log("citycity",$scope.city);

          //seo
    //corporate-2
    if ($stateParams.partyCity === "mumbai" && $stateParams.id === "corporate-party-2") {
        TemplateService.title = "Get Out Of Cubicle & Let Loose With Smaaash ";
        TemplateService.description = "Break the monotony and get ready to have a blast with your work buddies. Host corporate parties with Smaaash & have a fun beating your boss, at the game.";
        TemplateService.keywords = "corporate events, corporate parties";
    }
    //corporate-3
    if ($stateParams.partyCity === "gurgaon-ambience-mall" && $stateParams.id === "corporate-party-3") {
        TemplateService.title = " Get Out Of Cubicle & Let Loose With Smaaash";
        TemplateService.description = "Break the monotony and get ready to have a blast with your work buddies. Host corporate parties in Gurgaon with Smaaash & enjoy beating your boss, at the game.";
        TemplateService.keywords = "corporate parties in Gurgaon, corporate parties";
    }
    //corporate-4
    if ($stateParams.partyCity === "delhi" && $stateParams.id === "corporate-party-4") {
        TemplateService.title = "Get Out Of Cubicle & Let Loose With Smaaash ";
        TemplateService.description = "Break the monotony and get ready to have a blast with your work buddies. Host corporate parties in Delhi with Smaaash & have fun beating your boss, at the game.";
        TemplateService.keywords = "corporate parties in Delhi, corporate parties";
    }
    //corporate
    if ($stateParams.partyCity === "gurgaon-cyber-hub" && $stateParams.id === "corporate-party") {
        TemplateService.title = " Get Out Of Cubicle & Let Loose With Smaaash";
        TemplateService.description = "Break the monotony and get ready to have a blast with your work buddies. Host corporate events & parties with Smaaash & have fun beating your boss, at the game. ";
        TemplateService.keywords = "corporate events, corporate parties";
    }

    if ($stateParams.partyCity === "noida") {
        TemplateService.title = "Rocking Corporate Parties UnFurled at Smaaash, Noida";
        TemplateService.description = "Corporate parties take a detour at Smaaash as you enjoy in the most unconventional fashion. Look no more for team outing places or venue for corporate events.";
        TemplateService.keywords = "corporate parties, corporate parties, team outing places, venue for corporate events";
    }

    //corprate
    console.log("$stateParams.partyCity", $stateParams.partyCity);

    if ($stateParams.partyCity === "mumbai") {
        TemplateService.title = "Uncork August Corporate Parties ";
        TemplateService.description = "Smaaash has plug and play facilities for uncanny corporate parties, right from corporate events, company offsites, team outings and team building activities. ";
        TemplateService.keywords = "corporate party,corporate parties,corporate event venues,corporate events,venue for corporate events";
    }
    if ($stateParams.partyCity === "gurgaon-cyber-hub") {
        TemplateService.title = "Get Out Of Cubicle & Let Loose With Smaaash";
        TemplateService.description = "aBreak the monotony and get ready to have a blast with your work buddies. Host corporate events & parties with Smaaash & have fun beating your boss, at the game. ";
        TemplateService.keywords = "corporate events, corporate parties";
    }
    if ($stateParams.partyCity === "ludhiana") {
        TemplateService.title = "Boring Corporate Events are Now only an Oxymoron| SMAAASH";
        TemplateService.description = "You can have fun with your office colleagues outside the office as well. Host/attend corporate parties and exhaust yourself with enjoyment	";
        TemplateService.keywords = "corporate party, corporate parties, corporate event venues, corporate events, venue for corporate events	";
    }
    if ($stateParams.partyCity === "hyderabad") {
        TemplateService.title = "SMAAASH | End Your Hunt for a Suitable Corporate Events Venue ";
        TemplateService.description = "Dynamic corporate party venue now in your city, Hyderabad. Remove ‘boring’ from your dictionary";
        TemplateService.keywords = "corporate party, corporate parties, corporate event venues, corporate events, venue for corporate events, corporate party venues";
    }
    if ($stateParams.partyCity === "bengaluru") {
        TemplateService.title = "Host Fun Filled Corporate Parties";
        TemplateService.description = "Get out of cubicle & let loose with Smaaash- Break the monotony and get ready to have a blast with your work buddies. Host parties with Smaaash & have fun beating your boss, at the game.";
        TemplateService.keywords = "corporate parties";
    }

    if ($stateParams.partyCity === "gurgaon-sector-29") {
        TemplateService.title = "Corporate Parties, the Zippy Style";
        TemplateService.description = "Company offsite, corporate event or team building activities and a lot more could be hosted at Smaaash Sky Karting and Pitstop Brewpub.";
        TemplateService.keywords = "Corporate parties, company offsite, corporate events, team building activities";
    } 
    if ($stateParams.partyCity === "pune") {
        TemplateService.title = "Smaaash: Corporate Party Venues In Pune";
        TemplateService.description = "Looking for venues that offer the best venues for corporate parties? Look out for Smaaash, an amusement park that has it all";
        TemplateService.keywords = "corporate party venues, corporate parties";
    }
    if ($stateParams.partyCity === "indore") {
        TemplateService.title = "Smaaash: Corporate Party Venues In Indore";
        TemplateService.description = "The shift from bored-room to the game-room is real. Activities that helps in team bonding with good food offered at Smaaash, Indore";
        TemplateService.keywords = "corporate party, corporate parties, corporate party in Indore";
    } 
    })