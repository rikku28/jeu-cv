'use strict';

window.addEventListener('DOMContentLoaded', function(){
    // On sait jamais, ça pourrait servir... ^^"
    var largeurEcran = window.screen.width;
    var hauteurEcran = window.screen.height;

    var lokhlass = {
        // 2ème ligne de la planche de sprites : 1 décomposition + 4ème ligne : 5 décompositions.
            calme:[{ // Décomposition de la 2ème ligne
                sprite: {
                    top: -100,
                    left: 0
                },
                masque: {
                    height: 100,
                    width: 110
                }
                },{ // Décompositions de la 4ème ligne - 1
                sprite: {
                    top: -296,
                    left: 0
                },
                masque: {
                    height: 100,
                    width: 104
                }
            },{ // Décompositions de la 4ème ligne - 2
                sprite: {
                    top: -296,
                    left: -103
                },
                masque: {
                    height: 100,
                    width: 106
                }
            },{ // Décompositions de la 4ème ligne - 3
                sprite: {
                    top: -292,
                    left: -208
                },
                masque: {
                    height: 98,
                    width: 108
                }
            },{ // Décompositions de la 4ème ligne - 4
                sprite: {
                    top: -294,
                    left: -315
                },
                masque: {
                    height: 98,
                    width: 106
                }
            },{ // Décompositions de la 4ème ligne - 5
                sprite: {
                    top: -298,
                    left: -420
                },
                masque: {
                    height: 98,
                    width: 104
                }
            }],
        // 1ère ligne de la planche de sprites : 5 décompositions
            patient:[{
                sprite: {
                    top: -2,
                    left: 0
                },
                masque: {
                    height: 100,
                    width: 105,
                }
            },{
                    sprite: {
                        top: -3,
                        left: -104
                    },
                    masque: {
                        height: 100,
                        width: 105
                    }
                },{
                sprite: {
                    top: -6,
                    left: -209
                },
                masque: {
                    height: 100,
                    width: 108
                }
            },{
                sprite: {
                    top: -2,
                    left: -318
                },
                masque: {
                    height: 102,
                    width: 98
                }
            },{
                sprite: {
                    top: 0,
                    left: -417
                },
                masque: {
                    height: 106,
                    width: 96
                }
            }],
        // 3ème ligne de la planche de sprites : 5 décompositions
            agite:[{
                sprite: {
                    top: -190,
                    left: 0
                },
                masque: {
                    height: 100,
                    width: 105
                }
            },{
                sprite: {
                    top: -192,
                    left: -108
                },
                masque: {
                    height: 98,
                    width: 105
                }
            },{
                sprite: {
                    top: -190,
                    left: -212
                },
                masque: {
                    height: 98,
                    width: 103
                }
            },{
                sprite: {
                    top: -195,
                    left: -315
                },
                masque: {
                    height: 98,
                    width: 106
                }
            },{
                sprite: {
                    top: -196,
                    left: -421
                },
                masque: {
                    height: 100,
                    width: 114
                }
            }
        ],
        // 5ème ligne de la planche de sprites : 4 décompositions
            enerve:[{
                sprite: {
                    top: -393,
                    left: 0
                },
                masque: {
                    height: 100,
                    width: 109
                }
            },{
                sprite: {
                    top: -396,
                    left: -108
                },
                masque: {
                    height: 100,
                    width: 115
                }
            },{
                sprite: {
                    top: -393,
                    left: -222
                },
                masque: {
                    height: 100,
                    width: 109
                }
            },{
                sprite: {
                    top: -391,
                    left: -330
                },
                masque: {
                    height: 98,
                    width: 106
                }
            }]   
        };

        var ballsInit = {
            masterball: [{
                sprite:{
                    sequence: '0-13',
                    top: -520,
                    left: 0
                }, masque: {
                    height: 40,
                    width: 40
                }
            },{
                sprite:{
                    sequence: '0-12',
                    top: -480,
                    left: 0
                }, masque: {
                    height: 40,
                    width: 40
                }
            },{
                sprite:{
                    sequence: '0-11',
                    top: -440,
                    left: 0
                }, masque: {
                    height: 40,
                    width: 40
                }
            },{
                sprite:{
                    sequence: '0-10',
                    top: -400,
                    left: 0
                }, masque: {
                    height: 40,
                    width: 40
                }
            },{
                sprite:{
                    sequence: '0-00',
                    top: -480,
                    left: 0
                }, masque: {
                    height: 40,
                    width: 40
                }
            }, {
                sprite:{
                    sequence: '0-14',
                    top: -560,
                    left: 0
                }, masque: {
                    height: 40,
                    width: 40
                }
            }, {
                sprite:{
                    sequence: '0-15',
                    top: -600,
                    left: 0
                }, masque: {
                    height: 40,
                    width: 40
                }
            }, {
                sprite:{
                    sequence: '0-16',
                    top: -640,
                    left: 0
                }, masque: {
                    height: 40,
                    width: 40
                }
            }],
            hyperball: [{
                sprite:{
                    sequence: '1-13',
                    top: -520,
                    left: -40
                }, masque: {
                    height: 40,
                    width: 40
                }
            },{
                sprite:{
                    sequence: '1-12',
                    top: -480,
                    left: -40
                }, masque: {
                    height: 40,
                    width: 40
                }
            },{
                sprite:{
                    sequence: '1-11',
                    top: -440,
                    left: -40
                }, masque: {
                    height: 40,
                    width: 40
                }
            },{
                sprite:{
                    sequence: '1-10',
                    top: -400,
                    left: -40
                }, masque: {
                    height: 40,
                    width: 40
                }
            },{
                sprite:{
                    sequence: '1-00',
                    top: -480,
                    left: -40
                }, masque: {
                    height: 40,
                    width: 40
                }
            }, {
                sprite:{
                    sequence: '1-14',
                    top: -560,
                    left: -40
                }, masque: {
                    height: 40,
                    width: 40
                }
            }, {
                sprite:{
                    sequence: '1-15',
                    top: -600,
                    left: -40
                }, masque: {
                    height: 40,
                    width: 40
                }
            }, {
                sprite:{
                    sequence: '1-16',
                    top: -640,
                    left: -40
                }, masque: {
                    height: 40,
                    width: 40
                }
            }],
            superball: [{
                sprite:{
                    sequence: '2-13',
                    top: -520,
                    left: -80
                }, masque: {
                    height: 40,
                    width: 40
                }
            },{
                sprite:{
                    sequence: '2-12',
                    top: -480,
                    left: -80
                }, masque: {
                    height: 40,
                    width: 40
                }
            },{
                sprite:{
                    sequence: '2-11',
                    top: -440,
                    left: -80
                }, masque: {
                    height: 40,
                    width: 40
                }
            },{
                sprite:{
                    sequence: '2-10',
                    top: -400,
                    left: -80
                }, masque: {
                    height: 40,
                    width: 40
                }
            },{
                sprite:{
                    sequence: '2-00',
                    top: -480,
                    left: -80
                }, masque: {
                    height: 40,
                    width: 40
                }
            }, {
                sprite:{
                    sequence: '2-14',
                    top: -560,
                    left: -80
                }, masque: {
                    height: 40,
                    width: 40
                }
            }, {
                sprite:{
                    sequence: '2-15',
                    top: -600,
                    left: -80
                }, masque: {
                    height: 40,
                    width: 40
                }
            }, {
                sprite:{
                    sequence: '2-16',
                    top: -640,
                    left: -80
                }, masque: {
                    height: 40,
                    width: 40
                }
            }],
            pokeball: [{
                sprite:{
                    sequence: '3-13',
                    top: -520,
                    left: -120
                }, masque: {
                    height: 40,
                    width: 40
                }
            },{
                sprite:{
                    sequence: '3-12',
                    top: -480,
                    left: -120
                }, masque: {
                    height: 40,
                    width: 40
                }
            },{
                sprite:{
                    sequence: '3-11',
                    top: -440,
                    left: -120
                }, masque: {
                    height: 40,
                    width: 40
                }
            },{
                sprite:{
                    sequence: '3-10',
                    top: -400,
                    left: -120
                }, masque: {
                    height: 40,
                    width: 40
                }
            },{
                sprite:{
                    sequence: '3-00',
                    top: -480,
                    left: -120
                }, masque: {
                    height: 40,
                    width: 40
                }
            }, {
                sprite:{
                    sequence: '3-14',
                    top: -560,
                    left: -120
                }, masque: {
                    height: 40,
                    width: 40
                }
            }, {
                sprite:{
                    sequence: '3-15',
                    top: -600,
                    left: -120
                }, masque: {
                    height: 40,
                    width: 40
                }
            }, {
                sprite:{
                    sequence: '3-16',
                    top: -640,
                    left: -120
                }, masque: {
                    height: 40,
                    width: 40
                }
            }],
            luxeball: [{
                sprite:{
                    sequence: '10-13',
                    top: -520,
                    left: -400
                }, masque: {
                    height: 40,
                    width: 40
                }
            },{
                sprite:{
                    sequence: '10-12',
                    top: -480,
                    left: -400
                }, masque: {
                    height: 40,
                    width: 40
                }
            },{
                sprite:{
                    sequence: '10-11',
                    top: -440,
                    left: -400
                }, masque: {
                    height: 40,
                    width: 40
                }
            },{
                sprite:{
                    sequence: '10-10',
                    top: -400,
                    left: -400
                }, masque: {
                    height: 40,
                    width: 40
                }
            },{
                sprite:{
                    sequence: '10-00',
                    top: -480,
                    left: -400
                }, masque: {
                    height: 40,
                    width: 40
                }
            }, {
                sprite:{
                    sequence: '10-14',
                    top: -560,
                    left: -400
                }, masque: {
                    height: 40,
                    width: 40
                }
            }, {
                sprite:{
                    sequence: '10-15',
                    top: -600,
                    left: -400
                }, masque: {
                    height: 40,
                    width: 40
                }
            }, {
                sprite:{
                    sequence: '10-16',
                    top: -640,
                    left: -400
                }, masque: {
                    height: 40,
                    width: 40
                }
            }],
            honorball: [{
                sprite:{
                    sequence: '11-13',
                    top: -520,
                    left: -440
                }, masque: {
                    height: 40,
                    width: 40
                }
            },{
                sprite:{
                    sequence: '11-12',
                    top: -480,
                    left: -440
                }, masque: {
                    height: 40,
                    width: 40
                }
            },{
                sprite:{
                    sequence: '11-11',
                    top: -440,
                    left: -440
                }, masque: {
                    height: 40,
                    width: 40
                }
            },{
                sprite:{
                    sequence: '11-10',
                    top: -400,
                    left: -440
                }, masque: {
                    height: 40,
                    width: 40
                }
            },{
                sprite:{
                    sequence: '11-00',
                    top: -480,
                    left: -440
                }, masque: {
                    height: 40,
                    width: 40
                }
            }, {
                sprite:{
                    sequence: '11-14',
                    top: -560,
                    left: -440
                }, masque: {
                    height: 40,
                    width: 40
                }
            }, {
                sprite:{
                    sequence: '11-15',
                    top: -600,
                    left: -440
                }, masque: {
                    height: 40,
                    width: 40
                }
            }, {
                sprite:{
                    sequence: '11-16',
                    top: -640,
                    left: -440
                }, masque: {
                    height: 40,
                    width: 40
                }
            }],
            honorball: [{
                sprite:{
                    sequence: '14-13',
                    top: -520,
                    left: -560
                }, masque: {
                    height: 40,
                    width: 40
                }
            },{
                sprite:{
                    sequence: '14-12',
                    top: -480,
                    left: -560
                }, masque: {
                    height: 40,
                    width: 40
                }
            },{
                sprite:{
                    sequence: '14-11',
                    top: -440,
                    left: -560
                }, masque: {
                    height: 40,
                    width: 40
                }
            },{
                sprite:{
                    sequence: '14-10',
                    top: -400,
                    left: -560
                }, masque: {
                    height: 40,
                    width: 40
                }
            },{
                sprite:{
                    sequence: '14-00',
                    top: -480,
                    left: -560
                }, masque: {
                    height: 40,
                    width: 40
                }
            }, {
                sprite:{
                    sequence: '14-14',
                    top: -560,
                    left: -560
                }, masque: {
                    height: 40,
                    width: 40
                }
            }, {
                sprite:{
                    sequence: '14-15',
                    top: -600,
                    left: -560
                }, masque: {
                    height: 40,
                    width: 40
                }
            }, {
                sprite:{
                    sequence: '14-16',
                    top: -640,
                    left: -560
                }, masque: {
                    height: 40,
                    width: 40
                }
            }]
        };

    // var iBall = 0;
    // var iSprite = 0;

    var ballsMasque = window.document.getElementById('containerBall');
    var ballsSprite = window.document.getElementById('spriteBall');
    var ballIndex = 0;

    var ballsMasque = window.document.getElementById('containerBall');
    ballsMasque.style.left ='375px';
    ballsMasque.style.top = '700px';
    var ballsSprite = window.document.getElementById('spriteBall');
    var lokhlassIndex = 0;
    var pkmnMasque = window.document.getElementById('containerPkmn');
    pkmnMasque.style.left = '328px';
    pkmnMasque.style.top = '300px';
    var gaucheMasque = pkmnMasque.style.left;
    var pkmnSprite = window.document.getElementById('spritePkmn');

    var ballEnCours;
    var idTimeoutBall;


    // Ajouter argument iBallTab pour l'index dans le tableau
    var ballsInitMovements = function(iBall){
    // iBall correspond à l'index de ballsInit.
        ballsSprite.style.left = ballsInit.masterball[iBall].sprite.left + 'px';
        ballsSprite.style.top = ballsInit.masterball[iBall].sprite.top + 'px';
        var ballTimeoutId = window.setTimeout(function(){
            if(ballsInit.masterball[iBall +1]){
                ballsInitMovements(iBall + 1);
                console.log('Le compteur de la ball est à : ' + iBall);
            } else{
                ballsInitMovements(0);
            };
        }, 300);
        console.log('Id timeout ball: ' + ballTimeoutId);
        idTimeoutBall = ballTimeoutId;
        // return ballTimeoutId;
    };

    console.log('Le container est positionné à : ' + gaucheMasque);
    var deplacementGauchePkmn = true;
    let countInitMvt = 0;

    var pkmnInitMovements = function(iPkmn){
    // iPkmn correspond à l'index de ballsInit.
        
        // console.log('Gauche vaut : ' + deplacementGauchePkmn);
        pkmnSprite.style.left = lokhlass.calme[iPkmn].sprite.left + 'px';
        pkmnSprite.style.top = lokhlass.calme[iPkmn].sprite.top + 'px';
        pkmnMasque.style.height = lokhlass.calme[iPkmn].masque.height + 'px';
        pkmnMasque.style.width = lokhlass.calme[iPkmn].masque.width + 'px';   
        // console.log('Le compteur de Lokhlass est à : ' + iPkmn);

        var pkmnInitTimeoutId = window.setTimeout(function(){
            if(lokhlass.calme[iPkmn +1]){
                // console.log('Le compteur de Lokhlass est à : ' + iPkmn);
                
                //"Collision entre le bord gauche de la div et Lokhlass qu'il change de sens.
                if(deplacementGauchePkmn === true && parseFloat(gaucheMasque) > 24){
                    gaucheMasque = parseFloat(gaucheMasque) - 25;
                    pkmnMasque.style.left = gaucheMasque + 'px';
                }else{
                    // pkmnSprite.style.transform = 'scaleX(-1)';   => Mauvaise idée, ça décale tout car ça inverse la planche de sprites.
                    pkmnMasque.style.transform = 'scaleX(-1)';      // Flip sur le masque, ça fonctionne hyper bien!
                    deplacementGauchePkmn = false;
                    gaucheMasque = parseFloat(gaucheMasque) + 25;
                    pkmnMasque.style.left = gaucheMasque + 'px';
                    // console.log('Test : ' + (parseFloat(gaucheMasque) - parseFloat(pkmnMasque.style.width)));

                    if(deplacementGauchePkmn === false && parseFloat(gaucheMasque) >= 700){  //(parseFloat(gaucheMasque) - parseFloat(pkmnMasque.style.width)) 
                        pkmnMasque.style.transform = 'scaleX(1)';
                        deplacementGauchePkmn = true;
                        gaucheMasque = parseFloat(gaucheMasque) - 25;
                        pkmnMasque.style.left = gaucheMasque + 'px';
                    }
                }
                // console.log('La position gauche de Lokhlass est : ' + gaucheMasque + ' et son left est à : ' + pkmnSprite.style.left + ' et la largeur du masque est de : ' + pkmnMasque.style.width); //pkmnMasque.style.left);
                pkmnInitMovements(iPkmn + 1);
            } else{
                pkmnInitMovements(0);
            };
        }, 500);

    };

    pkmnInitMovements(0);
    ballsInitMovements(0);

    // Contrôle des balls

    var ballsLancer = {
        masterball: [{
            sprite:{
                sequence: '0-0',
                top: 0,
                left: 0
            }, masque: {
                height: 40,
                width: 40
            }
        },{
            sprite:{
                sequence: '0-1',
                top: -40,
                left: 0
            }, masque: {
                height: 40,
                width: 40
            }
        },{
            sprite:{
                sequence: '0-2',
                top: -80,
                left: 0
            }, masque: {
                height: 40,
                width: 40
            }
        },{
            sprite:{
                sequence: '0-3',
                top: -120,
                left: 0
            }, masque: {
                height: 40,
                width: 40
            }
        },{
            sprite:{
                sequence: '0-4',
                top: -160,
                left: 0
            }, masque: {
                height: 40,
                width: 40
            }
        }, {
            sprite:{
                sequence: '0-5',
                top: -200,
                left: 0
            }, masque: {
                height: 40,
                width: 40
            }
        }, {
            sprite:{
                sequence: '0-6',
                top: -240,
                left: 0
            }, masque: {
                height: 40,
                width: 40
            }
        }, {
            sprite:{
                sequence: '0-7',
                top: -280,
                left: 0
            }, masque: {
                height: 40,
                width: 40
            }
        }, {
            sprite:{
                sequence: '0-8',
                top: -320,
                left: 0
            }, masque: {
                height: 40,
                width: 40
            }
        }, {
            sprite:{
                sequence: '0-9',
                top: -360,
                left: 0
            }, masque: {
                height: 40,
                width: 40
            }
        }],
        hyperball: [{
            sprite:{
                sequence: '1-0',
                top: -0,
                left: -40
            }, masque: {
                height: 40,
                width: 40
            }
        },{
            sprite:{
                sequence: '1-1',
                top: -40,
                left: -40
            }, masque: {
                height: 40,
                width: 40
            }
        },{
            sprite:{
                sequence: '1-2',
                top: -80,
                left: -40
            }, masque: {
                height: 40,
                width: 40
            }
        },{
            sprite:{
                sequence: '1-3',
                top: -120,
                left: -40
            }, masque: {
                height: 40,
                width: 40
            }
        },{
            sprite:{
                sequence: '1-4',
                top: -160,
                left: -40
            }, masque: {
                height: 40,
                width: 40
            }
        }, {
            sprite:{
                sequence: '1-5',
                top: -200,
                left: -40
            }, masque: {
                height: 40,
                width: 40
            }
        }, {
            sprite:{
                sequence: '1-6',
                top: -240,
                left: -40
            }, masque: {
                height: 40,
                width: 40
            }
        }, {
            sprite:{
                sequence: '1-7',
                top: -280,
                left: -40
            }, masque: {
                height: 40,
                width: 40
            }
        }, {
            sprite:{
                sequence: '1-8',
                top: -320,
                left: -40
            }, masque: {
                height: 40,
                width: 40
            }
        }, {
            sprite:{
                sequence: '1-9',
                top: -360,
                left: -40
            }, masque: {
                height: 40,
                width: 40
            }
        }]
    };

    var colDivBalls = true;
    var posXMaskBall = ballsMasque.style.left;
    var posYMaskBall = ballsMasque.style.top;
    // console.log('Là, l\'Id timeout ball vaut : ' + idTimeoutBall);

    var yBall = -15;
    var idTimeoutLancer;
    var ball3238 = false;
    var ball37 = false;
    var ball39 = false;
    
    var ballKeyDown = function(clavier){
        var touche = clavier.keyCode;

        switch(touche){
            case 37 : // "ArrowLeft"
                ball37 = true;
                posXMaskBall = parseFloat(posXMaskBall) -5;
                ballsMasque.style.left = posXMaskBall + 'px';
            break;

            case 39 : // "ArrowRight"
                posXMaskBall = parseFloat(posXMaskBall) +5;
                ballsMasque.style.left = posXMaskBall + 'px';
                ball39 = true;
            break;

            case 32 : // "Space"
            case 38 : // "ArrowUp"
                ball3238 = true;
                console.log(touche.keyCode + ' ' + ball3238);
                posYMaskBall = (parseFloat(posYMaskBall) - parseFloat(yBall)) + 'px';
                // lancer();
                console.log('ball3238 vaut : ' + ball3238 + ' La ball va être envoyée');
            break;

            default:
                console.log('La touche ' + clavier.keyCode + ' ' + clavier.code + ' n\'est pas utilisable dans ce jeu. Pou rappel, les flèches de droite et gauche vous permettent de positionner la Ball, avant que vous la lanciez en appuyant sur la barre espace.');
        }
        console.log(touche);
        // touche.preventDefault();
    };

    var ballKeyUp = function(clavier){
        var touche = clavier.keyCode;

        switch(touche){
            case 37 : // "ArrowLeft"
                ball37 = false;
            break;

            case 39 : // "ArrowRight"
                ball39 = false;
            break;

            // default:
            //     console.log('La touche ' + clavier.keyCode + ' ' + clavier.code + ' n\'est pas utilisable dans ce jeu. Pou rappel, les flèches de droite et gauche vous permettent de positionner la Ball, avant que vous la lanciez en appuyant sur la barre espace.');
        }
        // console.log(touche);
        // touche.preventDefault();
    };

    window.addEventListener('keydown', ballKeyDown);
    window.addEventListener('keydown', ballKeyUp);
    window.addEventListener('click', testBoooh);

    // var lancer = function(){ // Rajouter argument iBall quand ça fonctionnera pour masterball[iBall]

    //     clearTimeout(idTimeoutBall); // On supprime l'animation sur la ball.
    //     console.log('ball32 : ' +  ball32 + ' On stoppe l\'id du setTimeout de la ball : ' + idTimeoutBall + ' position Y du masque : ' + posYMaskBall);

    //     ballsSprite.style.left = ballsInit.masterball[0].sprite.left + 'px';
    //     ballsSprite.style.top = ballsInit.masterball[0].sprite.top + 'px';

        // var idLancerInterval = setInterval(function(){
        //         ballsSprite.style.left = ballsLancer.masterball[iBall].sprite.left + 'px';
        //         ballsSprite.style.top = ballsLancer.masterball[iBall].sprite.top + 'px';
        //         ballsMasque.style.width = ballsLancer.masterball[iBall].masque.width + 'px';
        //         ballsMasque.style.height = ballsLancer.masterball[iBall].masque.height + 'px';
        //     }, 100);









        // if(ball32) {
        //     var ballInterval = setInterval(deplacementBall, 500);
        //     if(parseFloat(posYMaskBall) < 0) {
        //         clearInterval(ballInterval);
        //         console.log('position Y du masque : ' + posYMaskBall);
        //         ball32 = false;
        //         posYMaskBall = 700 + 'px';
        //     }
        //     // var lancerTimeoutId = window.setTimeout(function(){
        //         posYMaskBall = (parseFloat(posYMaskBall) - parseFloat(yball)) + 'px';
        //         // ballsMasque.style.top = posYMaskBall + 'px';
        //     // }, 100);
        // } else{
        //     console.log('On est dans le "else" de la fonction lancer, donc ball32, ball37 et ball39 sont à false. :(');
        // }
        // ballsSprite.style.left = ballsLancer.masterball[iBall].sprite.left + 'px';
        // ballsSprite.style.top = ballsLancer.masterball[iBall].sprite.top + 'px';
        // ballsMasque.style.width = ballsLancer.masterball[iBall].masque.width + 'px';
        // ballsMasque.style.height = ballsLancer.masterball[iBall].masque.height + 'px';

        // var lancerTimeoutId = window.setTimeout(function(){
        //     if(ballsLancer.masterball[iBall +1]){
        //         posYMaskBall = (parseFloat(posYMaskBall) + parseFloat(ballsLancer.masterball[iBall].masque.height)) + 'px';
        //         console.log('Sprite left : ' + ballsSprite.style.left + ' sprite top : ' + ballsSprite.style.top + ' posYMaskBall : ' + posYMaskBall);
        //         lancer(iBall + 1);
        //         console.log('Le compteur de la ball est à : ' + iBall);
        //     } else{
        //         lancer(0);
        //     };
        // }, 100);
        // // console.log('Id timeout ball: ' + ballTimeoutId);
        // idTimeoutLancer = lancerTimeoutId;
        // return ballTimeoutId;
    // };

    // var deplacementBall = function() {
    //     posYMaskBall = (parseFloat(posYMaskBall) + 15) + 'px';
    // }

    // lancer();


    // // - Constructeur de Pokéball
    // var PokeBallConstructor = function(){
    //     // utiliser le mot=clé this pour attribuer des propriétés à l'objet.
    //     this.leftPokeball;
    //     this.topPokeball; 
    // }

// https://www.onlinewebfonts.com/download/831e1f4da157d96bc996f8c9f5f1e578

});