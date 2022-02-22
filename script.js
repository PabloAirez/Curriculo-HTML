

function githubOn(){
    var git = document.querySelector("#github");
    git.setAttribute('src', 'src/githubHover.svg');
    git.style.height = "50px";
}

function githubOff(){
    var git = document.querySelector("#github");
    git.style.transition = "all .5s";
    git.setAttribute('src', 'src/github.svg');
    git.style.height = "30px";
    
}

function linkedinOn(){
    var linkedin = document.querySelector("#linkedin");
   
    linkedin.setAttribute('src', 'src/linkedinHover.svg');
    linkedin.style.transition = "all .5s";
    linkedin.style.height = "50px";
}

function linkedinOff(){
    var linkedin = document.querySelector("#linkedin");
    linkedin.setAttribute('src', 'src/linkedin.svg');
    linkedin.style.height = "30px";
}

function instaOn(){
    var insta = document.querySelector("#insta");
   
    insta.setAttribute('src', 'src/instagramHover.svg');
    insta.style.transition = "all .5s";
    insta.style.height = "50px";
}

function instaOff(){
    var insta = document.querySelector("#insta");
    insta.setAttribute('src', 'src/instagram.svg');
    insta.style.height = "30px";
}

