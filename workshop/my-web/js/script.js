const button1 = document.querySelector('#bt1')
const button2 = document.querySelector('#bt2')
const button3 = document.querySelector('#bt3')
const textcontent= document.getElementById('textcontent')
const photo = document.getElementById('example')
const home= document.getElementById('homebnt')
const mountain= document.getElementById('mountainbnt')
const car = document.getElementById('carbnt')
const factory = document.getElementById('factorybnt')
const modal = document.getElementById('modal')
const hmodal= document.getElementById('home-modal')
const cancle = document.querySelector('.x1')
const mmodal= document.getElementById('mountain-modal')
const cmodal=document.getElementById('car-modal')
const fmodal = document.getElementById('factory-modal')
const cancle1 = document.querySelector('.x2')
const cancle2 = document.querySelector('.x3')
const cancle3  = document.querySelector('.x4')

button1.addEventListener('click', () => {
    textcontent.innerHTML = '<p>1. 음식을 조리할 때 <br>자리를 비우지 않기</p><p>2. 가스레인지와 오븐의 <br>사용법 숙지</p><p>3. 정기적인 점검</p>'

    photo.src="/hg-garlicBear/workshop/my-web/img/becca-tapert-sY5RjMB1KkE-unsplash.jpg";

})

button2.addEventListener('click', ()=>{
    textcontent.innerHTML = '<p> 1. 불을 피울 때 가연성 <br>물질이 없는 곳에서 피우기</p><p>2. 캠프파이어 후 정리</p><p>3. 쓰레기 처리 잘하기</p>';

    photo.src="/hg-garlicBear/workshop/my-web/img/kevin-erdvig-BdfHZ4LH11A-unsplash.jpg";
})

button3.addEventListener('click',()=>{
    textcontent.innerHTML = '<p>1. 금연하기</p><p>2. 산에서 캠프파이어<br>하지 않기</p><p>3. 취식하지 않기</p>'

    photo.src = "/hg-garlicBear/workshop/my-web/img/matheus-bandoch-mkdI8JN6sDU-unsplash.jpg";
})

home.addEventListener('click',()=>{
    console.log('Home button clicked');
    modal.classList.add('on')
    hmodal.classList.add('on')

    console.log('Classes added:', modal.classList, hmodal.classList);
})

cancle.addEventListener('click',()=>{
    console.log('button click')
    modal.classList.remove('on')
    hmodal.classList.remove('on')
  

})

cancle1.addEventListener('click',()=>{
    console.log('button click')
    modal.classList.remove('on')
    mmodal.classList.remove('on')

})

cancle2.addEventListener('click',()=>{
    console.log('button click')
    modal.classList.remove('on')
    cmodal.classList.remove('on')

})

cancle3.addEventListener('click',()=>{
    console.log('button click')
    modal.classList.remove('on')
    fmodal.classList.remove('on')

})

mountain.addEventListener('click',()=>{
    console.log('Home button clicked');
    modal.classList.add('on')
    mmodal.classList.add('on')
    hmodal.classList.remove('on')
    console.log('Classes added:', modal.classList, mmodal.classList);
})

car.addEventListener('click',()=>{
    console.log(' button clicked');
    modal.classList.add('on')
    cmodal.classList.add('on')
    hmodal.classList.remove('on')
    console.log('Classes added:', modal.classList, mmodal.classList);
})

factory.addEventListener('click',()=>{
    console.log(' button clicked');
    modal.classList.add('on')
    fmodal.classList.add('on')
    hmodal.classList.remove('on')
    console.log('Classes added:', modal.classList, mmodal.classList);
})


// const click = () => {
//     window.open('../html/popup.html', '', 'width=560, height=600')
//     let num = document.getElementById()
// }

// const close = () => {
//     window.close()
// }

