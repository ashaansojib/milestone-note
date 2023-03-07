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