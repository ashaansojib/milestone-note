    const title = document.getElementById("post-title");
        const postDescribe = document.getElementById("post-info");
        // this is module one topic what is javscript and browser debug
        const JavaScriptAndDebug = data =>{
            title.innerText = 'What is JavaScript And How Dose It Works?';
            postDescribe.innerText = `Javascript is a high level abstruction language. Javascript automatically clear grabage collection you don't need to clear menually. Some time javscript chceck your memory that you use All or not. If this checked found garbage it can remove it. JavaScript is a compiled and interpreted language. JavaScript JIT mean just in time it mean compile in time. JavaScript assemble on web Browser it run with v8 engine. JavaScript run on Browser with v8 engine.
            `;
        }
        JavaScriptAndDebug();
        // setTimeOut
        const aboutSetTimeOut = data =>{
            title.innerText = 'What is JavaScript setTimeOut function and how it work?';
            postDescribe.innerText = 'setTimeout হল জাভাস্ক্রিপ্টের একটি ফাংশন যা একটি কাউন্টডাউন শুরু করে এবং একটি নির্দিষ্ট সময় পর ক্রিয়া সম্পন্ন করে।'
        }
        // setInterval
        const aboutSetInterVal = data =>{
            title.innerText = 'What is JavaScript setInterVal and how it work?';
            postDescribe.innerText = 'setInterval() ফাংশন হল জাভাস্ক্রিপ্টের একটি ফাংশন যা নির্দিষ্ট সময়কে নিরন্তরভাবে পুনরাবৃত্তি করে দেওয়া ফাংশনকে। এটি প্রথম প্যারামিটার হিসাবে একটি ফাংশন এবং দ্বিতীয় প্যারামিটার হিসাবে নির্দিষ্ট সময়কে মিলিসেকেন্ডে নির্দিষ্ট করে। একটি setInterval() ফাংশনের কাজ বন্ধ করতে হলে আমরা clearInterval() ফাংশন ব্যবহার করতে পারি। এটি নির্দিষ্ট সময়কে বন্ধ করে দেয় এবং সেই ফাংশনের সমস্ত রিকোর্ড মুছে ফেলে দেয়।';
        }
        // module two

        
const modalOpen = (data) =>{
    const title = document.getElementById("title");
    title.innerText = 'this is first title of'
    
}