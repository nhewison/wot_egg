$(document).ready(function () { 

    // $("button").click(function(){
    //     alert("clicked");

    // });
    

    function randomImg1() {
        var myImage1 = new Array();

        myImage1[0] = "./images/benedict.png";
        myImage1[1] = "./images/boiled.jpg";
        myImage1[2] = "./images/easter.jpg";
        myImage1[3] = "./images/fried.png";
        myImage1[4] = "./images/omlette.jpg";
        myImage1[5] = "./images/poached.jpg";
        myImage1[6] = "./images/raw.jpg";
        myImage1[7] = "./images/scrambled.jpg";
        myImage1[8] = "./images/nategg.jpg";

        var random = Math.floor(Math.random() * myImage1.length);
        return myImage1[random];
    }
    
    let isScrabbled = true;

    $("button").click(function(){
        if (isScrabbled) {
            var randomImage = randomImg1();
            $(".eggbox").html("<img src='"+ randomImage +"' alt='image'/>");
            const eggName = randomImage.split('/')[2].split('.')[0]
            document.querySelector('button').innerHTML = `${eggName.split('')[0].toUpperCase()}${eggName.split('').splice(1, eggName.length - 1).join('')}`;
            return isScrabbled = false
        } else {
            document.querySelector('button').innerHTML = 'I\'m scrambled.'
            $(".eggbox").html('<img src="./images/eggif.gif" alt="eggbox">');
            return isScrabbled = true
        }
    });


})

// window.addEventListener('DOMContentLoaded', () => {
//     function randomImg1() {
//         var myImage1 = new Array();

//         myImage1[0] = "./images/benedict.png";
//         myImage1[1] = "./images/boiled.jpg";
//         myImage1[2] = "./images/easter.jpg";
//         myImage1[3] = "./images/fried.png";
//         myImage1[4] = "./images/omlette.jpg";
//         myImage1[5] = "./images/poached.jpg";
//         myImage1[6] = "./images/raw.jpg";
//         myImage1[7] = "./images/scrambled.jpg";

//         var random = Math.floor(Math.random() * myImage1.length);
//         return myImage1[random];
//     }

//     const button = document.querySelector('button')
//     const eggbox = document.querySelector('.eggbox')

//     button.addEventListener('click', () => eggbox.outerHTML = `<img src="${randomImg1()}" alt='image'/>`)

// })

