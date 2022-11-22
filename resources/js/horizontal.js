// function autoscreen(){
//     let w = document.documentElement.clientWidth || document.body.clientWidth;
//     let h = document.documentElement.clientHeight || document.body.clientHeight;

//     if(w< h){
//         document.querySelector('body').style.transform = `scale(${w/1080}, ${h/1920}) rotate(90deg) translate(0px, -1080px)`;
//     }else{
//     document.querySelector('body').style.transform = `scale(${w/1920}, ${h/1080})`
//     }
// }

// window.onresize = ()=>{
//     autoscreen();
// }