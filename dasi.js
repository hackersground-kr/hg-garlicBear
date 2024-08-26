const button1 = document.querySelector('#bt1')
const button2 = document.querySelector('#bt2')
const button3 = document.querySelector('#bt3')
const textcontent= document.getElementById('textcontent')
const photo = document.getElementById('example')

button1.addEventListener('click', () => {
    textcontent.innerHTML = '<p>1. 음식을 조리할 때 <br>자리를 비우지 않기</p><p>2. 가스레인지와 오븐의 <br>사용법 숙지</p><p>3. 정기적인 점검</p>'

    photo.src="becca-tapert-sY5RjMB1KkE-unsplash.jpg";

})

button2.addEventListener('click', ()=>{
    textcontent.innerHTML = '<p> 1. 불을 피울 때 가연성 <br>물질이 없는 곳에서 피우기</p><p>2. 캠프파이어 후 정리</p><p>3. 쓰레기 처리 잘하기</p>';

    photo.src="kevin-erdvig-BdfHZ4LH11A-unsplash.jpg";
})

button3.addEventListener('click',()=>{
    textcontent.innerHTML = '<p>1. 금연하기</p><p>2. 산에서 캠프파이어<br>하지 않기</p><p>3. 취식하지 않기</p>'

    photo.src = "matheus-bandoch-mkdI8JN6sDU-unsplash.jpg";
})