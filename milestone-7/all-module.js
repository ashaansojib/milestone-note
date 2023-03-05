/*
This is milestone 7 note and question ans. In this file add all module practice and important topic. In this file you know what metter in this milestone.
*/
// this is module one in this milestone about more javascript concept and how dose work javscript
const moduleOne = () =>{
    const container = document.getElementById("content");
    container.textContent = '';
    const createDiv = document.createElement("div");
    createDiv.innerHTML = `
    <section class="bg-slate-100 text-black p-2">
          <!-- home link -->
          <a href="../index.html">Go Home</a>
          <!-- topic title -->
            <h2 class="text-2xl text-red-500 font-semibold py-1"><span class="text-blue-400">Topic</span> : Explore more Javascript and Browser!</h2>
            <hr>
            <!-- topic Question -->
            <h4 class="p-2 font-medium ">What is JavaScript And How Dose It Works?</h4>
            <div class="bg-black text-white">
                <p class="p-2">Javascript is a high level abstruction language. Javascript automatically clear grabage collection you don't need to clear menually. Some time javscript chceck your memory that you use All or not. If this checked found garbage it can remove it. JavaScript is a compiled and interpreted language. JavaScript JIT mean just in time it mean compile in time. JavaScript assemble on web Browser it run with v8 engine. JavaScript run on Browser with v8 engine.</p>
            </div>
            <h4 class="p-2 font-medium ">What is JavaScript setTimeOut function and how it work?</h4>
            <div class="bg-black text-white">
                <p class="p-2">setTimeout হল জাভাস্ক্রিপ্টের একটি ফাংশন যা একটি কাউন্টডাউন শুরু করে এবং একটি নির্দিষ্ট সময় পর ক্রিয়া সম্পন্ন করে।</p>
            </div>
            <h4 class="p-2 font-medium ">What is JavaScript setInterVal and how it work?</h4>
            <div class="bg-black text-white">
                <p class="p-2">setInterval() ফাংশন হল জাভাস্ক্রিপ্টের একটি ফাংশন যা নির্দিষ্ট সময়কে নিরন্তরভাবে পুনরাবৃত্তি করে দেওয়া ফাংশনকে। এটি প্রথম প্যারামিটার হিসাবে একটি ফাংশন এবং দ্বিতীয় প্যারামিটার হিসাবে নির্দিষ্ট সময়কে মিলিসেকেন্ডে নির্দিষ্ট করে। একটি setInterval() ফাংশনের কাজ বন্ধ করতে হলে আমরা clearInterval() ফাংশন ব্যবহার করতে পারি। এটি নির্দিষ্ট সময়কে বন্ধ করে দেয় এবং সেই ফাংশনের সমস্ত রিকোর্ড মুছে ফেলে দেয়।</p>
            </div>
            <!-- code preview -->
            <div class="py-2 text-2xl">
            <div class="mockup-code">
            <pre data-prefix=">" class="text-warning"><code>// this is setTimeOut with arrow function</code></pre>
            <pre data-prefix="$">
            <code>
    setTimeOut( ()=>{
    console.log("run this before 5 second")
    }, 5000);
    <pre data-prefix=">" class="text-warning"><code>// this is setInterVal code with arrow function</code></pre>
    let i = 0;
    const setTime = () =>{
        console.log(i++)
    }
    const setinterId = setInterval(setTime, 1000);
    setTimeout(() => {
        clearInterval(setinterId)
        console.log("set interval time out")
    }, 5000);
            </code>
            </pre> 
    <pre data-prefix=">" class="text-warning"><code>installing...</code></pre> 
    <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
            </div>
            </div>
        </section>
    `;
    container.appendChild(createDiv);
}
// this is module to in this milestone about
const moduleTwo = () =>{
    const container = document.getElementById("content");
    container.textContent = '';
    const createDiv = document.createElement("div");
    createDiv.innerHTML = `
    <section class="bg-slate-100 text-black p-2">
          <!-- home link -->
          <a href="../index.html">Go Home</a>
          <!-- topic title -->
            <h2 class="text-2xl text-red-500 font-semibold py-1"><span class="text-blue-400">Topic</span> : Explore more Javascript and Browser!</h2>
            <hr>
            <!-- topic Question -->
            <h4 class="p-2 font-medium ">What is JavaScript And How Dose It Works?</h4>
            <div class="bg-zinc-400 text-white">
                <p class="p-2">lorem</p>
            </div>
            <!-- code preview -->
            <div class="bg-white text-2xl text-left">
                <pre>
                    <code>

                    </code>
                </pre>
            </div>
        </section>
    `;
    container.appendChild(createDiv);
}