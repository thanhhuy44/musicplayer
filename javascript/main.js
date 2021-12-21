var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

const songPlaylist = $('.playlist__container');
const songPlayingName = $('.song__playing-name');
const songPlayingSinger = $('.song__playing-singer');
const songPlayingImg = $('.song__playing-img');
const songFullScreenName = $('.player__name');
const songFullScreenSinger = $('.player__singer');
const songFullScreenImg = $('.player__img');
const fullScreenBackground = $('.full-screen__img');
const audio = $('#song__audio');

const nextSongBtn = $('.next-song__btn');
const prevSongBtn = $('.prev-song__btn');
const fullScreenNextSongBtn = $('.full-screen__next-song');
const fullScreenPrevSongBtn = $('.full-screen__prev-song');

const playSongBtn = $('.play-song__btn');
const fullScreenPlaySongBtn = $('.full-screen__play-song')

const currentProgressSong = $('#song__progress');
const fullScreenProgressSong = $('#player__progress');

const randomBtn = $('.random-song__btn');
const fullScreenRandomBtn = $('.full-screen__random-song')

const repeatSongBtn = $('.repeat-song__btn');
const fullScreenRepeatSong = $('.full-screen__repeat-song')

const storyBtn = $('.quick__play');
const storyBackground = $('.story__background-img');
const closeStoryBtn = $('.story__close');
const storyAudio = $('#story__audio');

//volume option
const muteVolumeBtn = $('.change-volume__btn');
const changeVolumeInput = $('.volume__status')


var apps = {
    currentIndex: 0,
    currentVolume: 100,
    isMute: false,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    isStory: false,
    songs : [
        {
            name: "Bước Qua Nhau",
            singer: "Vũ",
            path: "./assets/Data/songs/Buoc Qua Nhau - Vu.mp3",
            img: "./assets/Data/img/Buocquanhau.jpg"
        },
        {
            name: "Closer",
            singer: "The Chainsmokers",
            path: "./assets/Data/songs/Closer - The Chainsmokers_ Halsey.mp3",
            img: "./assets/Data/img/Closer.jpg"
        },
        {
            name: "Cut Your Teeth (Kygo Remix)",
            singer: "Kygo",
            path: "./assets/Data/songs/Cut Your Teeth - Kyla La Grange_ Kygo.mp3",
            img: "./assets/Data/img/CutYourTeeth.jpg"
        },
        {
            name: "Funny",
            singer: "Zedd",
            path: "./assets/Data/songs/Funny - Zedd_ Jasmine Thompson.mp3",
            img: "./assets/Data/img/Funny.jpg"
        },
        {
            name: "Hát Mừng Xuân",
            singer: "Như Mai",
            path: "./assets/Data/songs/Hat Mung Xuan - Nhu Mai.mp3",
            img: "./assets/Data/img/HatMungXuan.jpg"
        },
        {
            name: "It Ain't Me",
            singer: "Selena Gomez",
            path: "./assets/Data/songs/It Ain_t Me - Kygo_ Selena Gomez.mp3",
            img: "./assets/Data/img/ItainMe.jpg"
        },
        {
            name: "Lean On",
            singer: "Major Lazer",
            path: "./assets/Data/songs/Lean On - Major Lazer_ DJ Snake_ MO.mp3",
            img: "./assets/Data/img/LeanOn.jpg"
        },
        {
            name: "Muộn Rồi Mà Sao Còn",
            singer: "Sơn Tùng",
            path: "./assets/Data/songs/Muon Roi Ma Sao Con - Son Tung M-TP.mp3",
            img: "./assets/Data/img/MuonRoiMaSaoCon.jpg"
        },
        {
            name: "Solo Dance",
            singer: "Martin Jensen",
            path: "./assets/Data/songs/Solo Dance - Martin Jensen.mp3",
            img: "./assets/Data/img/SoloDance.jpg"
        },
        {
            name: "Somebody I'm Not",
            singer: "Martin Jensen",
            path: "./assets/Data/songs/Somebody I_m Not - Martin Jensen_ Bjorns.mp3",
            img: "./assets/Data/img/SomebodyImNot.jpg"
        },
        {
            name: "Stay",
            singer: "Kygo",
            path: "./assets/Data/songs/Stay - Kygo_ Maty Noyes.mp3",
            img: "./assets/Data/img/StayKygo.jpg"
        },
        {
            name: "This Feeling",
            singer: "The Chainsmokers",
            path: "./assets/Data/songs/This Feeling - The Chainsmokers_ Kelsea.mp3",
            img: "./assets/Data/img/ThisFeeling.jpg"
        },
        {
            name: "Trốn Tìm",
            singer: "Đen Vâu",
            path: "./assets/Data/songs/Tron Tim - Den_ MTV Band.mp3",
            img: "./assets/Data/img/TronTim.jpg"
        },
        {
            name: "We Don't Talk Anymore",
            singer: "Charlie Puth",
            path: "./assets/Data/songs/We Don_t Talk Anymore - Charlie Puth_ Se.mp3",
            img: "./assets/Data/img/Wedonttalkanymore.jpg"
        },
        {
            name: "Selfish Love",
            singer: "Selena Gomez",
            path: "./assets/Data/songs/Selfish Love - DJ Snake_ Selena Gomez.mp3",
            img: "./assets/Data/img/selfishlove.jpg"
        },
        {
            name: "Close Your Eyes",
            singer: "KSHMR",
            path: "./assets/Data/songs/Close Your Eyes - KSHMR_ Tungevaag.mp3",
            img: "./assets/Data/img/CloseYourEyes.jpg"
        },
        {
            name: "Có Hẹn Với Thanh Xuân",
            singer: "Monstar",
            path: "./assets/Data/songs/Co Hen Voi Thanh Xuan - Monstar.mp3",
            img: "./assets/Data/img/CoHenVoiThanhXuan.jpg"
        },
        {
            name: "Don't Let Me Down",
            singer: "The Chainsmokers",
            path: "./assets/Data/songs/Don_t Let Me Down - The Chainsmokers_ Da.mp3",
            img: "./assets/Data/img/DontLetMeDown.jpg"
        },
        {
            name: "Harder",
            singer: "KSHMR",
            path: "./assets/Data/songs/Harder - Tiesto_ KSHMR_ Talay Riley.mp3",
            img: "./assets/Data/img/Harder.jpg"
        },
        {
            name: "Stay Young",
            singer: "Mike Perry",
            path: "./assets/Data/songs/Stay Young - Mike Perry_ TESSA.mp3",
            img: "./assets/Data/img/StayYoung.jpg"
        },

        
    ],
    render: function(){
        var htmls = this.songs.map((song, index) => {
            return`
            <div class="playlist__song ${index === this.currentIndex ? 'song__active' : ''}" data-index=${index}>
                <img src="${song.img}" alt="" class="song__img">
                <div class="song__info">
                    <h3 class="song__name">${song.name}</h3>
                    <p class="song__singer">${song.singer}</p>
                </div>
                <div class="song-play__btn"><i class="song__listen-icon fas fa-headphones-alt"></i><i class="song__playing-icon fas fa-play"></i></div>
            </div>
            `
        })
        $('.playlist__container').innerHTML = htmls.join('')
    },
    defindProperties: function(){
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex]
            }
        })
    },
    handleEvents: function(){
        const _this = this;
        const header = $('.playlist__heading');
        const headerHeight = header.offsetHeight
        document.onscroll = function() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const newHeaderHeight = headerHeight - scrollTop;
            if(newHeaderHeight <= 80) {
                header.classList.add('playlist__heading--small');
                $('#content').style.marginTop = '360px';
            }else{
                header.classList.remove('playlist__heading--small');
                $('#content').style.marginTop = '0';
            }
        }
        //play song
        playSongBtn.onclick = function(){
            if(_this.isPlaying) {
                audio.pause();
            }
            else{
                audio.play();
            }
            
        }
        fullScreenPlaySongBtn.onclick = function() {
            if(_this.isPlaying) {
                audio.pause();
            }
            else{
                audio.play();
            }
        }
        //pause song when playing
        audio.onplay = function() {
            _this.isPlaying = true;
            imgAnimate.play();
            playSongBtn.classList.add('play__active');
            fullScreenPlaySongBtn.classList.add('play__active');
        }
        //play song when pausing
        audio.onpause = function() {
            _this.isPlaying = false;
            imgAnimate.pause();
            playSongBtn.classList.remove('play__active');
            fullScreenPlaySongBtn.classList.remove('play__active');
        }

        //tua song
        audio.ontimeupdate = function() {
            if(audio.duration) {
                currentProgressSong.value = audio.currentTime / audio.duration * 100;
                fullScreenProgressSong.value = audio.currentTime / audio.duration * 100;
            }
        }
        //xửa lý khi tua
        currentProgressSong.onchange = function(e) {
            const seekTime = currentProgressSong.value / 100 * audio.duration;
            audio.currentTime = seekTime;
        }
        fullScreenProgressSong.onchange = function(e) {
            const seekTime = fullScreenProgressSong.value / 100 * audio.duration;
            audio.currentTime = seekTime;
        }
        //auto next song
        audio.onended = function() {
            if(_this.isRepeat) {
                audio.play();
            }
            else{
                nextSongBtn.click();
            }
        }
        //repeatsong

        //xử lý CD
        const imgAnimate = songFullScreenImg.animate([
            { transform : 'rotate(360deg)'}
        ],
        {
            duration: 10000,
            iterations: Infinity
        })
        imgAnimate.pause();
        //next song
        nextSongBtn.onclick = function() {
            if(_this.isRandom) {
                _this.playRandomSong();
            }
            else{
                _this.nextSong();
            }
            audio.play();
            _this.render();
        }
        fullScreenNextSongBtn.onclick = function() {
            if(_this.isRandom) {
                _this.playRandomSong();
            }
            else{
                _this.nextSong();
            }
            audio.play();
            _this.render();
        }
        //prev song
        fullScreenPrevSongBtn.onclick = function() {
            if(_this.isRandom) {
                _this.playRandomSong();
            }
            else{
                _this.prevSong();
            }
            audio.play();
            _this.render();
        }
        prevSongBtn.onclick = function() {
            if(_this.isRandom) {
                _this.playRandomSong();
            }
            else{
                _this.prevSong();
            }
            audio.play();
            _this.render();
        }
        //random song
        randomBtn.onclick = function() {
            _this.isRandom = !_this.isRandom;
            randomBtn.classList.toggle('active__btn', _this.isRandom);
        }
        fullScreenRandomBtn.onclick = function() {
            _this.isRandom = !_this.isRandom;
            fullScreenRandomBtn.classList.toggle('active__btn', _this.isRandom);
        }
        //repeat song
        repeatSongBtn.onclick = function() {
            _this.isRepeat = !_this.isRepeat;
            repeatSongBtn.classList.toggle('active__btn', _this.isRepeat);
        }
        fullScreenRepeatSong.onclick = function() {
            _this.isRepeat = !_this.isRepeat;
            fullScreenRepeatSong.classList.toggle('active__btn', _this.isRepeat);
        }
        //play song when click
        songPlaylist.onclick = function(e) {
            const songNode = e.target.closest('.playlist__song:not(.song__active)')
            console.log(songNode);
            if(songNode){
                _this.currentIndex = Number(songNode.dataset.index);
                _this.loadCurrentSong();
                _this.render();
                audio.play();
            }
        }
        //play storyBtn
        storyBtn.onclick = function() {
            _this.isStory = true;
            audio.pause();
            _this.playStory();
            _this.myInterval;
        }
        closeStoryBtn.onclick = function() {
            _this.isStory = false;
            clearInterval(myInterval)
            storyAudio.pause();
        }
        myInterval = setInterval(function() {
            _this.playStory();
        }, 15000)
        //volume
        muteVolumeBtn.onclick = function() {
            if(audio.volume === 0) {
                muteVolumeBtn.classList.remove('is--muted');
                audio.volume = _this.currentVolume / 100;
                changeVolumeInput.value = _this.currentVolume;
            }
            else{
                muteVolumeBtn.classList.add('is--muted');
                changeVolumeInput.value = 0;
                audio.volume = 0;
            }
        }
        changeVolumeInput.onchange = function() {
            audio.volume = changeVolumeInput.value/100;
            if(audio.volume === 0) {
                muteVolumeBtn.classList.add('is--muted');
                console.log('mute');
            }
            else{
                _this.currentVolume = changeVolumeInput.value;
                muteVolumeBtn.classList.remove('is--muted');
            }
        }
    },
    nextSong: function() {
        this.currentIndex ++;
        if(this.currentIndex === this.songs.length) {
            this.currentIndex = 0;
        }      
        this.loadCurrentSong();
    },
    prevSong: function() {
        if(audio.currentTime >= 5) {
            this.loadCurrentSong();
        }
        else {
            if(this.currentIndex === 0) {
                this.currentIndex = this.songs.length;
            }
            this.currentIndex --;
            this.loadCurrentSong();
        }
    },
    playStory: function() {
        let newIndex
        if(this.isStory) {
            newIndex = Math.floor(Math.random() * this.songs.length);
            this.currentIndex = newIndex;
            this.loadStorySong();
            storyAudio.play();
        }
    },
    playRandomSong: function() {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * this.songs.length);
        }
        while(newIndex === this.currentIndex);
        this.currentIndex = newIndex;
        this.loadCurrentSong();
    },
    loadStorySong() {
        storyBackground.src = this.currentSong.img;
        storyAudio.src = this.currentSong.path;
        storyAudio.currentTime = 75;
    },
    loadCurrentSong() {
        songPlayingName.textContent = this.currentSong.name;
        songFullScreenName.textContent = this.currentSong.name;
        songPlayingSinger.textContent = this.currentSong.singer;
        songFullScreenSinger.textContent = this.currentSong.singer;
        songPlayingImg.src = this.currentSong.img;
        songFullScreenImg.src = this.currentSong.img;
        fullScreenBackground.src = this.currentSong.img;
        audio.src = this.currentSong.path;
    },
    start: function() {
        // định nghĩa thuộc tính
        changeVolumeInput.value = this.currentVolume;
        audio.volume = this.currentVolume/100;
        this.defindProperties();
        this.render();
        // lắng nghe xử lý sự kiện
        // tải bài hát đầu tiên
        this.loadCurrentSong();
        this.handleEvents();
    }
}

apps.start();
