const bgPics = [];
for (let i = 1; i <= 6; i++) {
    bgPics.push(`${i}.jpg`);
}


const randomIndex = Math.floor(Math.random() * bgPics.length);
const randomBg = bgPics[randomIndex];

const home = document.querySelector('.home');
home.style.background = `url(../images/${randomBg})`;
home.style.backgroundPosition = `center`;
home.style.backgroundRepeat = `no-repeat`;
home.style.backgroundSize = `cover`;


home.addEventListener('dblclick', () => {
    const randomIndex = Math.floor(Math.random() * bgPics.length);
    const randomBg = bgPics[randomIndex];
    home.style.background = `url(images/${randomBg})`;
    home.style.backgroundPosition = `center`;
    home.style.backgroundRepeat = `no-repeat`;
    home.style.backgroundSize = `cover`;
})


//random avatars
const avatar = document.querySelector('#avatar');
const dps = ['dp5.jpg'];
const randomDp = dps[Math.floor(Math.random() * dps.length)]
avatar.src = `images/dp/${randomDp}`;

avatar.addEventListener('click', function(event) {
    const randomDp = dps[Math.floor(Math.random() * dps.length)]
    this.src = `images/dp/${randomDp}`;
    event.stopPropagation();
})


//add a class
const container = document.querySelector('#container');

container.addEventListener('dblclick', (e) => {
    if (container.className === "dark") {
        container.className = "light";
    } else {
        container.className = "dark";
    }

    e.stopPropagation();

});


//random btwn min and max
const minComments = 900;
const maxComments = 1620;
const randomNumberOfComments = Math.floor(Math.random() * (maxComments - minComments + 1)) + minComments;

const minRetweets = 900;
const maxRetweets = 1620;
const randomNumberOfRetweets = Math.floor(Math.random() * (maxRetweets - minRetweets + 1)) + minRetweets;

const minLikes = 12.1;
const maxLikes = 26.4;
const randomNumberOfLikes = Math.floor(Math.random() * (maxLikes - minLikes + 1)) + minLikes;


//num animation
window.onload = () => {
    let countRetweets = setInterval(retweetUpdate);
    let retweetCount = 0;

    function retweetUpdate() {
        var retweets = document.getElementById("retweets");
        retweets.innerHTML = (retweetCount += 2).toLocaleString();

        if (retweetCount >= randomNumberOfRetweets) {
            clearInterval(countRetweets);
        }
    }

    let countLikes = setInterval(likeUpdate);
    let likeCount = 0.0;

    function likeUpdate() {
        var likes = document.getElementById("likes");
        likes.innerHTML = `${Math.round((likeCount += 0.1) * 10) / 10}K`;


        if (likeCount >= randomNumberOfLikes) {
            clearInterval(countLikes);
        }
    }

    let countComments = setInterval(commentUpdate);
    let commentCount = 0;

    function commentUpdate() {
        var comments = document.getElementById("comments");
        comments.innerHTML = (commentCount += 2).toLocaleString();

        if (commentCount >= randomNumberOfComments) {
            clearInterval(countComments);
        }
    }



};



var fadeElement = document.getElementById("fade-element");

setTimeout(function() {
    fadeElement.style.opacity = 1;
}, 4000)
setTimeout(function() {
    fadeElement.style.opacity = 0;
}, 9000)


let dots = document.querySelector('.dots')

dots.addEventListener('click', () => {
    fadeElement.style.opacity = 1;

    setTimeout(function() {
        fadeElement.style.opacity = 0;
    }, 4000);
})