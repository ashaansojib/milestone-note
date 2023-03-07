let count = 0;
    let interValId;
    // start inter val
    const startInterVal = data =>{
        const countText = document.getElementById("count");
        countText.innerText = count++;
    }
    document.getElementById("start").addEventListener('click', function(){
        interValId = setInterval(startInterVal, 1000)
    });
    // clear inter val
    document.getElementById("clear").addEventListener('click', function(){
        const countText = document.getElementById("count");
        countText.innerText = 'Clear Counter';
    });
    // stop inter val
    document.getElementById("stop").addEventListener('click', function(){
        clearInterval(interValId)
    });

// this is header banner text info

const bannerTitles = ["Welcome To My Website", "MD.Ashaduzzaman Sojib", "Professional Web Developer"];

let bannerIndex = 0;
const bannerTitle = document.getElementById("banner-title");

setInterval(() => {
  bannerTitle.innerText = bannerTitles[bannerIndex];
  bannerIndex = (bannerIndex + 1) % bannerTitles.length;
}, 800);

// const texts = ["I'm Professional Web Developer", "Web Application Maker", "Top Rated SEO Expert!"];
// let textIndex = 0;

// let displayText = "";
// let charIndex = 0;

// const displayElement = document.getElementById("banner-title");

// setInterval(() => {
//   const text = texts[textIndex];
//   displayText += text.charAt(charIndex);
//   charIndex++;

//   if (charIndex > text.length) {
//     charIndex = 0;
//     textIndex = (textIndex + 1) % texts.length;
//   }

//   displayElement.innerText = displayText;
// }, 100);
