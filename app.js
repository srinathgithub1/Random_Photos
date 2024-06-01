const imgContainer=document.querySelector(".image-container");
const btn=document.querySelector(".btn");

btn.addEventListener("click",()=>{
    imgNo=5;
    addImage();
});

function addImage(){
    for(let i=0;i<imgNo;i++){
        const newimg=document.createElement("img");
        newimg.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
        imgContainer.appendChild(newimg);
    }
}