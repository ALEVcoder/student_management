var mod_pagespeed_2ZzaegJiWi = "(function ($) {\r\n    'use strict';\r\n\r\n    var browserWindow = $(window);\r\n\r\n    // :: 1.0 Preloader Active Code\r\n    browserWindow.on('load', function () {\r\n        $('#preloader').fadeOut('slow', function () {\r\n            $(this).remove();\r\n        });\r\n    });\r\n\r\n    // :: 2.0 Nav Active Code\r\n    if ($.fn.classyNav) {\r\n        $('#academyNav').classyNav();\r\n    }\r\n\r\n    // :: 3.0 Sliders Active Code\r\n    if ($.fn.owlCarousel) {\r\n        var welcomeSlide = $('.hero-slides');\r\n        var aboutSlide = $('.about-slides');\r\n\r\n        welcomeSlide.owlCarousel({\r\n            items: 1,\r\n            margin: 0,\r\n            loop: true,\r\n            nav: true,\r\n            navText: ['<i class=\"fa fa-angle-left\"></i>', '<i class=\"fa fa-angle-right\"></i>'],\r\n            dots: true,\r\n            autoplay: true,\r\n            autoplayTimeout: 5000,\r\n            smartSpeed: 1000\r\n        });\r\n\r\n        welcomeSlide.on('translate.owl.carousel', function () {\r\n            var slideLayer = $(\"[data-animation]\");\r\n            slideLayer.each(function () {\r\n                var anim_name = $(this).data('animation');\r\n                $(this).removeClass('animated ' + anim_name).css('opacity', '0');\r\n            });\r\n        });\r\n\r\n        welcomeSlide.on('translated.owl.carousel', function () {\r\n            var slideLayer = welcomeSlide.find('.owl-item.active').find(\"[data-animation]\");\r\n            slideLayer.each(function () {\r\n                var anim_name = $(this).data('animation');\r\n                $(this).addClass('animated ' + anim_name).css('opacity', '1');\r\n            });\r\n        });\r\n\r\n        $(\"[data-delay]\").each(function () {\r\n            var anim_del = $(this).data('delay');\r\n            $(this).css('animation-delay', anim_del);\r\n        });\r\n\r\n        $(\"[data-duration]\").each(function () {\r\n            var anim_dur = $(this).data('duration');\r\n            $(this).css('animation-duration', anim_dur);\r\n        });\r\n\r\n        aboutSlide.owlCarousel({\r\n            items: 1,\r\n            margin: 0,\r\n            loop: true,\r\n            nav: true,\r\n            navText: ['<i class=\"fa fa-angle-left\"></i>', '<i class=\"fa fa-angle-right\"></i>'],\r\n            dots: true,\r\n            autoplay: true,\r\n            autoplayTimeout: 5000,\r\n            smartSpeed: 1000\r\n        });\r\n    }\r\n\r\n    // :: 4.0 Gallery Active Code\r\n    if ($.fn.magnificPopup) {\r\n        $('.gallery-img').magnificPopup({\r\n            type: 'image',\r\n            gallery: {\r\n                enabled: true\r\n            }\r\n        });\r\n    }\r\n\r\n    // :: 5.0 ScrollUp Active Code\r\n    if ($.fn.scrollUp) {\r\n        browserWindow.scrollUp({\r\n            scrollSpeed: 1500,\r\n            scrollText: '<i class=\"fa fa-angle-up\"></i>'\r\n        });\r\n    }\r\n\r\n    // :: 6.0 CouterUp Active Code\r\n    if ($.fn.counterUp) {\r\n        $('.counter').counterUp({\r\n            delay: 10,\r\n            time: 2000\r\n        });\r\n    }\r\n\r\n    // :: 7.0 prevent default a click\r\n    $('a[href=\"#\"]').click(function ($) {\r\n        $.preventDefault()\r\n    });\r\n\r\n    // :: 8.0 wow Active Code\r\n    if (browserWindow.width() > 767) {\r\n        new WOW().init();\r\n    }\r\n    \r\n    // :: 9.0 Sticky Active Code\r\n    if ($.fn.sticky) {\r\n        $(\".academy-main-menu\").sticky({\r\n            topSpacing: 0\r\n        });\r\n    }\r\n\r\n})(jQuery);";
var mod_pagespeed_bs55kMaUlC = "var map;\r\nvar latlng = new google.maps.LatLng(40.730610, -73.935242);\r\nvar stylez = [{\r\n    featureType: \"all\",\r\n    elementType: \"all\",\r\n    stylers: [{\r\n        saturation: -10\r\n            }]\r\n        }];\r\nvar mapOptions = {\r\n    zoom: 15,\r\n    center: latlng,\r\n    scrollwheel: false,\r\n    scaleControl: false,\r\n    disableDefaultUI: true,\r\n    mapTypeControlOptions: {\r\n        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'gMap']\r\n    }\r\n};\r\nmap = new google.maps.Map(document.getElementById(\"googleMap\"), mapOptions);\r\nvar geocoder_map = new google.maps.Geocoder();\r\nvar address = 'New york';\r\ngeocoder_map.geocode({\r\n    'address': address\r\n}, function (results, status) {\r\n    if (status == google.maps.GeocoderStatus.OK) {\r\n        map.setCenter(results[0].geometry.location);\r\n        var marker = new google.maps.Marker({\r\n            map: map,\r\n            position: map.getCenter()\r\n        });\r\n    } else {\r\n        alert(\"Geocode was not successful for the following reason: \" + status);\r\n    }\r\n});\r\nvar mapType = new google.maps.StyledMapType(stylez, {\r\n    name: \"Grayscale\"\r\n});\r\nmap.mapTypes.set('gMap', mapType);\r\nmap.setMapTypeId('gMap');";