'use strict';

herrmannApp.factory('suppliersData', function ()
{
    var returnObj = 
    {
        suppliers :
        [  
            {     
                name : 'Gaulhofer',
                logo : 'img/gaulhofer-logo.jpg',
                description : 'Windows & Doors',
                url : '#/gaulhofer'
            },
            {     
                name : 'Heco',
                logo : 'img/heco-logo.png',
                description : 'Screws',
                url : '#/heco'
            }, 
            {     
                name : 'Pitzl',
                logo : 'img/pitzl-logo.png',
                description : 'Timber Joints & Post Girders',
                url : '#/pitzl'
            }, 
            {     
                name : 'Hanno',
                logo : 'img/hanno-logo.png',
                description : 'Window & Door Sealing Systems',
                url : '#/hanno'
            },
            {     
                name : 'Siga',
                logo : 'img/siga-logo.png',
                description : 'Wind & Air Tightening Systems',
                url : '#/siga'
            },
            {     
                name : 'Pavatex',
                logo : 'img/pavatex-logo.jpg',
                description : 'Instlation',
                url : '#/pavatex'
            },
            {     
                name : 'Balteschwiler',
                logo : 'img/balteschwiler-logo.jpg',
                description : 'Tongue & Groove Paneling',
                url : '#/balteschwiler'
            }
        ]
    };
    
    return returnObj;   
});
