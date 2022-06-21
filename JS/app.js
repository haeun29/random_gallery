//이미지 변경 함수

const img_url = [
 'images/image1.jpg',
 'images/image2.jpg',
 'images/image3.jpg',
 'images/image4.jpg',
 'images/image5.jpg',
 'images/image6.jpg'
];

//이미지 번호
$(function (){

    function changeBG(){
//0~2 랜덤값 ( 이미지 번호 )
    let imgNum = Math.floor(Math.random()*6);
    console.log(imgNum);



//이미지 변경하기
    $('body').css({
        background :    
        `url(./images/blackBox.png),
        url(${img_url[imgNum]})`

    })
    }

    // setInterval(함수, 시간)
    setInterval(function(){
        changeBG();
    },5000);

    //연월일 시간 표시 
    let d = new Date();
    let year =d.getFullYear();
    let month =  d.getMonth () + 1 ;
    let day =  d.getDate();
    
    console.log(year,month, day);

    $('.year').html(year);
    $('.month').html('0'+month);
    $('.day').html(day);

});



//과제 : 이미지를 총 6장으로 확장하고 랜덤으로 돌리기









