const testimonials =[
    {
        name: "Cherise K",
        photoUrl:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        text: "I love Apple! This is an amazing service and it has saved me and my small business so much time. I plan to use it for a long time to come."
    },

    {
        name: "Alexandar Q",
        photoUrl:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        text: "I have been using Apple for over a year now and I love it! I can't imagine life without it. It's so easy to use, and the customer service is great."
    },

    {
        name: "Frances L",
        photoUrl:"https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        text: "If you are a business owner, and you don't have Apple in your toolkit just yet, I highly recommend that you check it out."
    },
];
const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

function updateTestimonial(){
const {name, photoUrl, text } = testimonials[idx];
imgEl.src = photoUrl;
textEl.innerText = textEl;
usernameEl.innerText = name;
idx++;
if(idx=== testimonials.length){
    idx = 0;
}
setTimeout(()=>{
updateTestimonial();
}, 10000)
}