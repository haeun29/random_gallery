//이미지 변경 함수

    const img_url = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg',
    'images/image5.jpg',
    'images/image6.jpg'
    ];

    //작가정보 출력하기 
    const author = [
        'Jabr Adalberht',
        'Pallas Lancelot',
        'Harmon Leann'
    ];
    
    

    

    $(function(){

        //연월일 시간 표시 
        let d = new Date();
        let year =d.getFullYear();
        let month =  d.getMonth () + 1 ;
        let day =  d.getDate();
        // console.log(year,month, day);

        //html 안에 날짜 입력
        $('.year').html(year);
        $('.month').html('0'+month);
        $('.day').html(day);
    

         //0~6 랜덤값 ( 이미지 번호 )
        function changeBG(){
            let imgNum = Math.floor(Math.random()*6);
            // console.log(imgNum);

                //이미지 변경하기
                $('body').css({
                    background :    
                    `url(./images/blackBox.png),
                    url(${img_url[imgNum]})`

                })

                /// 작가정보 불러오기
                $('.author span').html(author[imgNum]);

        }
        
        $('.author span').html(author[0]);

        setInterval(changeBG, 5000);

    });





//초기값






