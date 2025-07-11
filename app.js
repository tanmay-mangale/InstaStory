let arr=[
    {
        dp:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1741802869522-3b4245d8aec9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1741802822447-a165460a7cfb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://plus.unsplash.com/premium_photo-1668917804825-1629ab4ef195?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://plus.unsplash.com/premium_photo-1664281937500-01d7d3101180?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://plus.unsplash.com/premium_photo-1664281937740-aa3bb2911675?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://plus.unsplash.com/premium_photo-1664372145586-37c3f7de6983?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://plus.unsplash.com/premium_photo-1664372145875-ca0078b2842b?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];


let clutter="";
arr.forEach(function(ele,idx){
    clutter+=`<div class="story">
                <img id="${idx}" src="${ele.dp}" alt="">
            </div>`
});

document.querySelector("#stories").innerHTML=clutter;

document.querySelector("#stories").addEventListener("click",function(ele) {
    let value=arr[ele.target.id].story;
    document.querySelector("#full-screen").style.display="block";
    document.querySelector("input").style.display="block";
    document.querySelector("#full-screen").style.backgroundImage=`url(${value})`

    setTimeout(()=>{
        document.querySelector("#full-screen").style.display="none";
        document.querySelector("input").style.display="none";
    },2000);
    
})

let btn=document.querySelector("button");
let isClick=false;

btn.addEventListener("click",()=>{
    
    if(isClick==false){
        btn.innerText="Following";
        confetti({
            particleCount:400,
            spread:600,
            origin:{y:0.50}
        });
        isClick=true;
    }else{
        btn.innerText="Follow";
        isClick=false;
    }
})