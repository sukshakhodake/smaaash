    firstapp.controller('PreweddingpartyCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state, $stateParams) {
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
            $state.go('pre-wedding-party-thank-you', {
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
        //similar meta tags
        //pre-wedding-parties

        if ($stateParams.partyCity === "bengaluru") {
            TemplateService.title = "Pre-Wedding Parties- Have A Cool Pre-Wedding Party & Have A Smaaashing Night! ";
            TemplateService.description = "  Celebrate your last night as a bachelor with your buddies and make the most of it. Smaaash helps you host an extravagant pre-wedding party!";
            TemplateService.keywords = "pre-wedding party, pre-wedding parties";
        }
        if ($stateParams.partyCity === "mumbai") {
            TemplateService.title = "Have A Cool Pre-Wedding Party & Have A Smaaashing Night!";
            TemplateService.description = "Celebrate your last night as a bachelor with your buddies and make the most of it. Smaaash helps you host an extravagant pre-wedding party in Mumbai!";
            TemplateService.keywords = "pre-wedding party, pre-wedding parties";
        }
        if ($stateParams.partyCity === "gurgaon-cyber-hub") {
            TemplateService.title = "Have A Cool Pre-Wedding Party & Have A Smaaashing Night!";
            TemplateService.description = "Celebrate your last night as a bachelor with your buddies and make the most of it. Smaaash helps you host an extravagant pre-wedding party!";
            TemplateService.keywords = "pre-wedding party, pre-wedding parties";
        }
        //pre-wedding-parties-2
        if ($stateParams.partyCity === "gurgaon-ambience-mall") {
            TemplateService.title = "Have A Cool Pre-Wedding Party & Have A Smaaashing Night! ";
            TemplateService.description = "Celebrate your last night as a bachelor with your buddies and make the most of it. Smaaash helps you host an extravagant pre-wedding party in Gurgaon!";
            TemplateService.keywords = "pre-wedding party, pre-wedding parties";
        }
        if ($stateParams.partyCity === "delhi") {
            TemplateService.title = "Have A Cool Pre-Wedding Party & Have A Smaaashing Night!";
            TemplateService.description = "Celebrate your last night as a bachelor with your buddies and make the most of it. Smaaash helps you host an extravagant pre-wedding party, Delhi!";
            TemplateService.keywords = "pre-wedding party, pre-wedding parties";
        }
        if ($stateParams.partyCity === "ludhiana") {
            TemplateService.title = "Cut Loose at Your Pre-Wedding Party at Smaaash";
            TemplateService.description = "VR games like Finger Coaster, simulated sport like cricket will keep your pre-wedding party, action packed. There’s sumptuous food and drinks to top it off. ";
            TemplateService.keywords = "Pre-wedding parties,  pre-wedding party,  VR games";
        }
        if ($stateParams.partyCity === "noida") {
            TemplateService.title = " The Excitement Never Stops at Smaaash Pre-Wedding Parties";
            TemplateService.description = "Your pre-wedding party should boast of great memories which you can hold for lifetime. At Smaaash you get exactly that, great VR games, sports, food and drinks.";
            TemplateService.keywords = "Pre-wedding parties,  pre-wedding party";
        }
        if ($stateParams.partyCity === "hyderabad") {
            TemplateService.title = "SMAAASH | Make Your Pre Wedding Party Memorable ";
            TemplateService.description = "Let your last night as a free man/woman turn into the most smashing pre wedding party that other bachelor(ettes) would envy";
            TemplateService.keywords = "pre wedding party, prewedding party , prewedding parties";
        }
        if ($stateParams.partyCity === "pune") {
            TemplateService.title = "Smaaash: Pre-Wedding Party Venues In Pune";
            TemplateService.description = "Give the best bachelorette to your friends at Smaaash Pune and make the celebration the most memorable one";
            TemplateService.keywords = "Pre-wedding party";
        }
        if ($stateParams.partyCity === "indore") {
            TemplateService.title = "Smaaash: Pre-Wedding Parties Done Right";
            TemplateService.description = "A venue that hosts the best pre-wedding parties in Indore is Smaaash as it has games, food, beer and everything that a bachelor would ask for";
            TemplateService.keywords = "pre-wedding parties";
        }
    })