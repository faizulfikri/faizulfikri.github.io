function inisialisasi(){
    const menus= document.querySelectorAll('.tombol');
    const pages = document.querySelectorAll('.page');
    const hiasan = document.querySelector('.hiasan');
    const bukaUndangan = document.querySelector('.buka-undangan');
    const bukaRSVP = document.querySelector('.six .enam button');
    const close = document.querySelector('.navigasi-ucapan svg');
    const containerRSVP = document.querySelector(".container-ucapan");
    const commentSection = document.querySelectorAll(".ucapan-dalam .tab");
    const tabMenu = document.querySelectorAll(".navigasi-ucapan .tab-menu");


    menus.forEach((menu,index) => {
        menu.addEventListener('click', function(){
            changeDots(this);
            nextPage(index);
        });
    });

    function changeDots(dot){
        menus.forEach(menu =>{
            menu.classList.remove("active");
        });
        dot.classList.add("active");
    }

    function countDownPernikahan(){
        const theDay = new Date(2022, 4, 22, 10, 00);

        let $days = document.querySelector(".hari .angka");
        let $hours = document.querySelector(".jamJam .angka");
        let $minutes = document.querySelector(".menit .angka");
        let $seconds = document.querySelector(".detik .angka");

        setInterval(() => {
            var now = new Date();
            var timeLeft = (theDay - now)/1000;
            updateclock(timeLeft);
        }, 1000);

        function updateclock(remainingTime) {
            let days = Math.floor(remainingTime / 86400);
            remainingTime -= days * 86400;

            let hours = Math.floor(remainingTime / 3600) % 24;
            remainingTime -= hours * 3600;

            let minutes = Math.floor(remainingTime / 60) % 60;
            remainingTime -= minutes * 60;

            let seconds = Math.floor(remainingTime % 60);

            $days.innerHTML = Number(days);
            $hours.innerHTML = Number(hours);
            $minutes.innerHTML = Number(minutes);
            $seconds.innerHTML = Number(seconds);
        }

        function Number(number){
            return number < 10 ? "0" + number : number;
        }
    }

    let current = 0;

    function nextPage(pageNumber){
        const nextPages = pages[pageNumber];
        const currentPages = pages[current];

        closeAnimation(currentPages);
        setTimeout(function(){   
            openAnimation(pageNumber, nextPages);
        },300);
        current = pageNumber;
    }

    function closeAnimation(halaman){
        hiasan.classList.add("blur");
        halaman.classList.remove("up");
        halaman.classList.add("blur");
    }

    function openAnimation(index, halaman){
            if(index == 0){
                animasiSatu(halaman);
            }
            else if(index == 1){
                animasiDua(halaman);
            }
            else if(index == 2){
                animasiTiga(halaman);
            }
            else if(index == 3){
                animasiEmpat(halaman);
            }
            else if(index == 4){
                animasiLima(halaman);
            }
            else if(index == 5){
                animasiEnam(halaman);
            }
            else  if(index == 6){
                animasiTujuh(halaman);
            }
    }

    function animasiSatu(halaman){
        const Judul = halaman.querySelector('.judulSatu');
        const pasanganWanita = halaman.querySelector('.pasangan .pasangan-pria');
        const pasanganPria = halaman.querySelector('.pasangan .pasangan-wanita');
        const hari = halaman.querySelector('.tanggal .masehi');
        const mid = halaman.querySelector('.tanggal h6');

        hiasan.classList.remove("blur");
        hiasan.classList.add("up")
        halaman.classList.remove("blur");
        halaman.classList.add("up");
        setTimeout(function(){
            Judul.classList.add("jelas");
            pasanganWanita.classList.add("geserKiri");
            pasanganPria.classList.add("geserKanan");
            setTimeout(function(){
                hari.firstElementChild.classList.add("geserKiri");
                hari.lastElementChild.classList.add("geserKanan");
                mid.classList.add("keatas");
                setTimeout(function(){
                    Judul.classList.remove("jelas");
                    pasanganWanita.classList.remove("geserKiri");
                    pasanganPria.classList.remove("geserKanan");
                    hari.firstElementChild.classList.remove("geserKiri");
                    hari.lastElementChild.classList.remove("geserKanan");
                    mid.classList.remove("keatas");
                },1000);
            },10);
        },10);
    }

    function animasiDua(halaman){
        const judulSecond = halaman.querySelector('h4');
        const infoPria = halaman.querySelector('.infoPria');
        const dan2 = halaman.querySelector('h6');
        const infoWanita = halaman.querySelector('.infoWanita'); 

        setTimeout(function(){
            judulSecond.classList.add("keatas");
            dan2.classList.add("jelas");
            infoPria.classList.add("geserKiri");
            infoWanita.classList.add("geserKanan");
                setTimeout(function(){
                    judulSecond.classList.remove("keatas");
                    dan2.classList.remove("jelas");
                    infoPria.classList.remove("geserKiri");
                    infoWanita.classList.remove("geserKanan");
                },1000);
        },5);
        hiasan.classList.remove("blur");
        hiasan.classList.add("up")
        halaman.classList.remove("blur");
        halaman.classList.add("up");
    }

    function animasiTiga(halaman){
        const judulTiga = halaman.querySelector('.judul-tiga');
        const tanggalWalimah = halaman.querySelector('.tanggal-2');
        const hijriah = halaman.querySelector('h6');
        const akad = halaman.querySelector('.container-acara .info-akad');
        const resepsi = halaman.querySelector('.container-acara .info-resepsi');
        const doa = halaman.querySelector('.doa');
        const hitungMundur = halaman.querySelector('.hitungMundur');
        const countdown = halaman.querySelector('.countdown');

        countDownPernikahan();

        setTimeout(function(){
            judulTiga.classList.add("keatas");
            setTimeout(function(){
                tanggalWalimah.classList.add("keatas");
                setTimeout(function(){
                    hijriah.classList.add("keatas");
                    setTimeout(function(){
                        akad.classList.add("geserKiri");
                        resepsi.classList.add("geserKanan");
                        setTimeout(function(){
                            doa.classList.add("keatas");
                            hitungMundur.classList.add("keatas");
                            countdown.classList.add("keatas");
                            setTimeout(function(){
                                judulTiga.classList.remove("keatas");
                                tanggalWalimah.classList.remove("keatas");
                                hijriah.classList.remove("keatas");
                                akad.classList.remove("geserKiri");
                                resepsi.classList.remove("geserKanan");
                                doa.classList.remove("keatas");
                                hitungMundur.classList.remove("keatas");
                                countdown.classList.remove("keatas");
                            },1500);
                        },10)
                    },10)
                },10);
            },10);
        },5);
        hiasan.classList.remove("blur");
        hiasan.classList.add("up")
        halaman.classList.remove("blur");
        halaman.classList.add("up");
    }

    function animasiEmpat(halaman){
        const judulEmpat = halaman.querySelector(".judulEmpat");
        const lokasi = halaman.querySelector("h2");
        const lokasi2 = halaman.querySelector(".alamat");
        setTimeout(function(){
            judulEmpat.classList.add("keatas");
            setTimeout(function(){
                lokasi.classList.add("keatas");
                setTimeout(function(){
                    lokasi2.classList.add("keatas");
                    setTimeout(function(){
                        judulEmpat.classList.remove("keatas");
                        lokasi.classList.remove("keatas");
                        lokasi2.classList.remove("keatas");
                    },1000);
                },10);
            },10);
        },5);
        hiasan.classList.remove("blur");
        hiasan.classList.add("up");
        halaman.classList.remove("blur");
        halaman.classList.add("up");
    }

    function animasiLima(halaman){
        const judulLima = halaman.querySelector(".judulLima");
        const keterangan = halaman.querySelector(".imbauan");
        const protokol = halaman.querySelector(".protokol");

        setTimeout(function(){
            judulLima.classList.add("keatas");
            setTimeout(function(){
                keterangan.classList.add("keatas");
                setTimeout(function(){
                    protokol.classList.add("keatas");
                    setTimeout(function(){
                        judulLima.classList.remove("keatas");
                        keterangan.classList.remove("keatas");
                        protokol.classList.remove("keatas");
                    },1000);
                },100);
            },100);
        },5);
        hiasan.classList.remove("blur");
        hiasan.classList.add("up");
        halaman.classList.remove("blur");
        halaman.classList.add("up");
    }

    function animasiEnam(halaman){
        const judulEnam = halaman.querySelector(".judulEnam");
        const arabEnam = halaman.querySelector(".tulisan-arab");
        const latin = halaman.querySelector(".latin");
        const paragraf = halaman.querySelector(".terjemahan");
        const pembatas = halaman.querySelector(".pembatas");
        const konfirmsi = halaman.querySelector(".konfirmasi");

        setTimeout(function(){
            judulEnam.classList.add("keatas");
            setTimeout(function(){
                arabEnam.classList.add("keatas");
                setTimeout(function(){
                    latin.classList.add("keatas");
                    setTimeout(function(){
                        paragraf.classList.add("keatas");
                        setTimeout(function(){
                            pembatas.classList.add("scaleUp");
                            konfirmsi.classList.add("keatas");
                            setTimeout(function(){
                                judulEnam.classList.remove("keatas");
                                arabEnam.classList.remove("keatas");
                                latin.classList.remove("keatas");
                                paragraf.classList.remove("keatas");
                                pembatas.classList.remove("scaleUp");
                                konfirmsi.classList.remove("keatas");
                            },1000);
                        },100);
                    },100);
                },100);
            },100);
        },5);
        hiasan.classList.remove("blur");
        hiasan.classList.add("up");
        halaman.classList.remove("blur");
        halaman.classList.add("up");
    }

    function animasiTujuh(halaman){
        const pertama = halaman.querySelector(".pembuka");
        const kedua = halaman.querySelector(".terjemahan-2");
        const keluarga = halaman.querySelector(".keluarga");

        setTimeout(function(){
            pertama.classList.add("keatas");
            setTimeout(function(){
                kedua.classList.add("keatas");
                keluarga.classList.add("keatas");
                setTimeout(function(){
                    pertama.classList.remove("keatas");
                    kedua.classList.remove("keatas");
                    keluarga.classList.remove("keatas");
                },1000);
            },100);
        },5);
        hiasan.classList.remove("blur");
        hiasan.classList.add("up");
        halaman.classList.remove("blur");
        halaman.classList.add("up");
    }

    bukaUndangan.addEventListener('click', function(){
        const halamanSatu = document.querySelector(".one");
        const coverUndangan = document.querySelector(".cover-undangan");
        coverUndangan.classList.add("tidakAktif");
        animasiSatu(halamanSatu);
    });

    bukaRSVP.addEventListener('click', function(){
        containerRSVP.classList.remove("tidakAktif");

        tabMenu.forEach((tab, index) =>{
            tab.addEventListener('click', function(){
                tabMenu.forEach(tabSatu => {
                    tabSatu.classList.remove("on");
                });
                tab.classList.add("on");
                gantiHalaman(index);
            });
        });
    });

    close.addEventListener('click', function(){
        containerRSVP.classList.add("tidakAktif");
        tabMenu.forEach(tabSatuu => {
            tabSatuu.classList.remove("on");
        });
        tabMenu[0].classList.add("on");

        commentSection.forEach(com => {
            commentSection[0].classList.remove("up");
            commentSection[0].classList.remove("blur");
            commentSection[1].classList.remove("up");
            commentSection[1].classList.remove("blur");
        });
        hal = 0;
    });

    let hal = 0;
    function gantiHalaman(noHalaman){
        const halamanSelanjutnya = commentSection[noHalaman];
        const halamanSekarang = commentSection[hal];

        halamanSekarang.classList.remove("up");
        halamanSekarang.classList.add("blur");
        setTimeout(function(){   
            halamanSelanjutnya.classList.remove("blur");
            halamanSelanjutnya.classList.add("up")
        },300);
        hal = noHalaman;
    }

}

inisialisasi();