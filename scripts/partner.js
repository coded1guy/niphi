// scroll effect for the partners logo
let partnerCnt = document.querySelector("#partners > div");
let prevBtn = document.querySelector("button#chevron-left");
let nextBtn = document.querySelector("button#chevron-right");

prevBtn.onclick = () => {
    partnerCnt.scrollLeft -= 200;
}
nextBtn.onclick = () => {
    partnerCnt.scrollLeft += 200;
}
setInterval(() => {
    let max = partnerCnt.scrollWidth - partnerCnt.clientWidth;
    nextBtn.click();
    if(max - partnerCnt.scrollLeft <= 3) partnerCnt.scrollLeft -= max;
}, 5000);
