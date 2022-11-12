



        let song = document.getElementById('song');
        let icon = document.getElementById('icon');
        let container = document.getElementById('container');
        let next = document.getElementById('next');
        //console.log(icon);

        icon.onclick=function(){
            if(song.paused){
                song.play();
                icon.src='images/pause.png';
            }else{
                song.pause();
                icon.src='images/play.webp'
            }
        }
        song.value='audio/song1.mp3';

        console.log(song.value);

        next.onclick=()=>{

            if(song.value =='audio/song1.mp3'){
                song.src='audio/song2.mp3';
                icon.src='images/play.webp'
                console.log('song1');
                song.value='audio/song2.mp3';
                return 0;
            }
            else if(song.value =='audio/song2.mp3'){
                song.src='audio/song3.mp3';
                console.log('song2');
                song.value='audio/song3.mp3';
                icon.src='images/play.webp'
                return 0;
            }
            else if(song.value =='audio/song3.mp3'){
                console.log('song3');
                song.src='audio/song1.mp3';
                song.value='audio/song1.mp3';
                icon.src='images/play.webp'
                return 0;
            }
        }








