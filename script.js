var judgement = {}
var btn = document.createElement('button');
btn.addEventListener("click", () => { final(); });
var skill = {}
var truth = document.getElementsByClassName('truth');
var talk = document.getElementsByClassName('button')
var player = ''
document.getElementsByTagName('audio').play()

function func (str){
    document.getElementById('text').innerHTML = ''
    var z = 1,string
    string = str;
    function typing(){
        if(z <= string.length){
            document.getElementById('text').innerHTML = string.slice(0,z);
            z++;
            setTimeout(typing, 17);
        }
    }
    typing()
} 


function start(){
    var inp = document.getElementById('input').value
    if(inp){
    player = inp
    document.getElementById('kageyama').style.opacity = 1
    document.getElementById("kageyama").className = 'fadein'
    document.getElementById("ready").innerHTML = "";
    var test = 'Selamat datang Detektif ' + player + '  perkenalkan sebelumnya nama saya Kageyama, saya adalah seorang Sensei dan penanggung jawab dari kegiatan drama di kampus ini dan saat ini Kami sedang menghadapi kasus pembunuhan';
    func(test);
    var intro = document.createElement('button');
    intro.addEventListener("click", () => { next(); });
    intro.innerHTML = 'next';
    document.getElementById('ready').appendChild(intro) 
    }
    
    
}

function next(){
    document.getElementById('nagisa').style.opacity = 1
    document.getElementById("nagisa").className = 'fadein'
    var test = 'Korbannya ialah Nagisa, salah satu dari anggota Club Drama di Kampus ini, saat itu Nagisa mengikuti kegiatan Club drama seperti biasa';
    func(test);
    document.getElementById("ready").innerHTML = "";
    var intro2 = document.createElement('button');
    intro2.addEventListener("click", () => { next2(); });
    intro2.innerHTML = 'next';
    document.getElementById('ready').appendChild(intro2) 
   
}

function next2(){
    var test = 'namun sebelum latihan dimulai, kami sudah menemukannya Nagisa dengan keadaan tidak bernyawa di ruang MakeUp';
    func(test);
    document.getElementById("ready").innerHTML = "";
    var intro3 = document.createElement('button');
    intro3.addEventListener("click", () => { next3(); });
    intro3.innerHTML = 'next';
    document.getElementById('ready').appendChild(intro3) 
    

}

function next3(){
    document.getElementById("ready").innerHTML = "";
    alert('dalam permainan ini kami memiliki kemampuan TRUTH yang dapat mengetahui kebohongan seseorang, namun hanya dapat digunakan kepada 2 (dua) orang saja, gunakan kemampuan tersebut dengan bijak')
    var test = 'dan ini adalah ke enam anggota drama kami yang sedang berada di TKP saat kejadian itu';
    func(test);
    setInterval(mulai, 70);
    document.getElementById('kageyama').style.opacity = 0
    document.getElementById("kageyama").className = 'fadeout'
    document.getElementById('nagisa').style.opacity = 0
    document.getElementById("nagisa").className = 'fadeout'

}


function mulai(){
    for(i=0; i<7; i++){
    var people1 = document.getElementsByClassName("people")[i];
    var opacity1 = Number(people1.style.opacity)
    if(opacity1 < 1.1){
        opacity1 = opacity1 + 0.1;
        people1.style.opacity = opacity1
    }
    else{
       break
    }
    }
}


//fungsi final stage
function final(){
    document.getElementById('kageyama').style.opacity = 1
    document.getElementById("kageyama").className = 'fadein'
    document.getElementById('kageyama').addEventListener("click", () => { boss(); })
    document.getElementById("ready").innerHTML = "";
    var test = 'Bantu aku untuk menemukan siapa pelakunya dengan kemampuanmu detektif ' + player + ' ,agar segera kita tutup kasus ini';
    func(test);
    for(i=0;i<talk.length; i++){
        talk[i].innerHTML = ''
    }
    for(j=0; j<truth.length;j++){
        truth[j].innerHTML = ''
    }
    for(k=0;k<truth.length; k++){
        var end = document.createElement('button');
        switch(k){
        case 0: {end.addEventListener("click", () => { pelaku1(); });
                 end.innerHTML = 'pelaku';
                 document.getElementsByClassName('truth')[k].appendChild(end);break};
        case 1: {end.addEventListener("click", () => { pelaku2(); });
                 end.innerHTML = 'pelaku';
                 document.getElementsByClassName('truth')[k].appendChild(end);break};
        case 2: {end.addEventListener("click", () => { pelaku3(); });
                 end.innerHTML = 'pelaku';
                 document.getElementsByClassName('truth')[k].appendChild(end);break};
        case 3: {end.addEventListener("click", () => { pelaku4(); });
                 end.innerHTML = 'pelaku';
                 document.getElementsByClassName('truth')[k].appendChild(end);break};
        case 4: {end.addEventListener("click", () => { pelaku5(); });
                 end.innerHTML = 'pelaku';
                 document.getElementsByClassName('truth')[k].appendChild(end);break};
        case 5: {end.addEventListener("click", () => { pelaku6(); });
                 end.innerHTML = 'pelaku';
                 document.getElementsByClassName('truth')[k].appendChild(end);break};
        }
    }
}



//percakapan orang pertama
function people1(){
    if(Object.keys(judgement).length > 4){
        btn.innerHTML = 'Judgement';
        document.getElementById('ready').appendChild(btn); 
    }
    document.getElementById('namapeople1').innerHTML = "Name: Kojiro";
    document.getElementById('umurpeople1').innerHTML = "Age: 22 Years old";
    document.getElementById("image1").src="image/kojiro.png";
    document.getElementById("image1").className += ' fadein'
    if(judgement.hasOwnProperty('people1') == false){
    judgement.people1 = 'done'
    var test = 'Aku sangat bingung Detektif '+player+ ' aku tidak mengerti kenapa ini terjadi, terakhir aku bertemu dengannya sebelum dia masuk ke ruang MakeUp sekitar pukul 15.00'
    func (test)
    }
    else {
    var test = 'Hhhmmmmm, kurasa dia sedang dekat dengan seseorang, aku pernah melihatnya dijemput oleh seseorang sepulang latihan Drama'
    func (test)
    }
}

//truth orang pertama
function truth1(){
    if(judgement.hasOwnProperty('people1') == false){
        var test = 'Hei ' + player + ' kamu belum mendengarkan alibi dari orang tersebut'
        func (test)
    }
    else{
        skill.people1 = 'done'
        if(Object.keys(skill).length <= 2){
        var test = 'Setauku Hajime menyukai Kei namun Kei menyukai Nagisa tapi Nagisa menolak Kei, kurang lebih itu yang aku tau'
        func (test)
        }
            else{var truth = document.getElementsByClassName('truth')
            for(k=0; k<truth.length;k++){
            truth[k].innerHTML = ''
            }
            var test = 'kamu sudah menggunakan semua kesempatan untuk mengetahui kebenaran seseorang'
            func (test)
        }
    }
}

//percakapan orang kedua
function people2(){
    if(Object.keys(judgement).length > 4){
        btn.innerHTML = 'Judgement'
        document.getElementById('ready').appendChild(btn)
    }
    document.getElementById('namapeople2').innerHTML = "Name: Akeno"
    document.getElementById('umurpeople2').innerHTML = "Age: 23 Years old"
    document.getElementById("image2").src="image/akeno.png";
    document.getElementById("image2").className += ' fadein'
    if(judgement.hasOwnProperty('people2') == false){
    judgement.people2 = 'done'
    var test = 'Saat kejadian tersebut aku sedang bersama Kageyama Sensei, kami sedang mengambil beberapa barang di gudang untuk keperluan Drama kami sekitar pukul 15.30'
    func (test)
    }
    else {
        var test = 'Kageyama Sensei akhir-akhir sedang sedih karena Putrinya minggu lalu meninggal oleh sebuah kecelakaan'
        func (test)
    }
}

//truth orang kedua
function truth2(){
    if(judgement.hasOwnProperty('people2') == false){
        var test = 'Hei ' + player + ' kamu belum mendengarkan alibi dari orang tersebut'
        func (test)
    }
    else{skill.people2 = 'done'
        if(Object.keys(skill).length <= 2){
        var test = 'Kalau tidak salah nagisa dengan ayahnya sedang sibuk dengan kasus kecelakaan, ayahnya sempat menabrak seseorang hingga tewas'
        func (test)
        }
            else{var truth = document.getElementsByClassName('truth')
            for(k=0; k<truth.length;k++){
            truth[k].innerHTML = ''
            }
            var test = 'kamu sudah menggunakan semua kesempatan untuk mengetahui kebenaran seseorang'
            func (test)
        }
    }
}

//percakapan orang ketiga
function people3(){
    if(Object.keys(judgement).length > 4){
        btn.innerHTML = 'Judgement'
        document.getElementById('ready').appendChild(btn)
    }
    document.getElementById('namapeople3').innerHTML = "Name: Kei"
    document.getElementById('umurpeople3').innerHTML = "Age: 23 Years old"
    document.getElementById("image3").src="image/kei.png";
    document.getElementById("image3").className += ' fadein'
    if(judgement.hasOwnProperty('people3') == false){
    judgement.people3 = 'done'
    var test = 'Saat Kejadian aku sedang menyiapkan peralatan Drama bersama Mitsuo itu sekitar Pukul 15.30'
    func (test)
    }
    else {
        var test = 'Kau tidak mungkin mencurigai aku kan Detektif ' + player + '?, aku sempat pergi ke toilet beberapa saat kemudian, toilet tersebut berada disebelah ruang MakeUp '
        func (test)
    }
}

//truth orang ketiga
function truth3(){
    if(judgement.hasOwnProperty('people3') == false){
        var test = 'Hei ' + player + ' kamu belum mendengarkan alibi dari orang tersebut'
        func (test)
    }
    else{
        skill.people3 = 'done'
        if(Object.keys(skill).length <= 2){
        var test = 'Aku cukup dekat dengan Nagisa, aku terkadang mengantarnya pulang untuk memastikan dia sampai dengan selamat'
        func (test)
        }
            else{var truth = document.getElementsByClassName('truth')
            for(k=0; k<truth.length;k++){
            truth[k].innerHTML = ''
            }
            var test = 'kamu sudah menggunakan semua kesempatan untuk mengetahui kebenaran seseorang'
            func (test)
        }
    }
}

//percakapan orang keempat
function people4(){
    if(Object.keys(judgement).length > 4){
        btn.innerHTML = 'Judgement'
        document.getElementById('ready').appendChild(btn)
    }
    document.getElementById('namapeople4').innerHTML = "Name: Mitsuo"
    document.getElementById('umurpeople4').innerHTML = "Age: 22 Years old"
    document.getElementById("image4").src="image/mitsuo.png";
    document.getElementById("image4").className += ' fadein'
    if(judgement.hasOwnProperty('people4') == false){
    judgement.people4 = 'done'
    var test = 'hhmmmm, waktu itu aku sedang menyiapkan peralatan Drama bersama Kei'
    func (test)
    }
    else {
        var test = 'Aku melihat Akeno Kembali membawa barang - barang dari gudang sendirian'
        func (test)
    }
}

//truth orang keempat
function truth4(){
    if(judgement.hasOwnProperty('people4') == false){
        var test = 'Hei ' + player + ' kamu belum mendengarkan alibi dari orang tersebut'
        func (test)
    }
    else{
        skill.people4 = 'done'
        if(Object.keys(skill).length <= 2){
        var test = 'Kageyama Sensei pernah menanyakan kepadaku mengenai keluarga Nagisa, mungkin dia hanya menjalankan tugas sebagai sensei'
        func (test)
        }
            else{var truth = document.getElementsByClassName('truth')
            for(k=0; k<truth.length;k++){
            truth[k].innerHTML = ''
            }
            var test = 'kamu sudah menggunakan semua kesempatan untuk mengetahui kebenaran seseorang'
            func (test)
        }
    }
}

//percakapan orang lima
function people5(){
    if(Object.keys(judgement).length > 4){
        btn.innerHTML = 'Judgement'
        document.getElementById('ready').appendChild(btn)
    }
    document.getElementById('namapeople5').innerHTML = "Name: Hideo"
    document.getElementById('umurpeople5').innerHTML = "Age: 23 Years old"
    document.getElementById("image5").src="image/hideo.png";
    document.getElementById("image5").className += ' fadein'
    if(judgement.hasOwnProperty('people5') == false){
    judgement.people5 = 'done'
    var test = 'Aku sudah tidak mengerti lagi dengan kegilaan ini semua, Nagisa orang yang sangat baik tidak mungkin ada orang yang dendam terhadapnya, saat kejadian aku sedang di ruang audio'
    func (test)
    }
    else {
        var test = 'Rumor yang sedang beradar di Club Drama ini, mengenai Nagisa yang menolak Kei'
        func (test)
    }
}

//truth orang kelima
function truth5(){
    if(judgement.hasOwnProperty('people5') == false){
        var test = 'Hei ' + player + ' kamu belum mendengarkan alibi dari orang tersebut'
        func (test)
    }
    else{
        skill.people5 = 'done'
        if(Object.keys(skill).length <= 2){
        var test = 'Sepertinya Kageyama Sensei sering memperhatikan Nagisa Akhir - Akhir ini'
        func (test)
        }
            else{var truth = document.getElementsByClassName('truth')
            for(k=0; k<truth.length;k++){
            truth[k].innerHTML = ''
            }
            var test = 'kamu sudah menggunakan semua kesempatan untuk mengetahui kebenaran seseorang'
            func (test)
        }
    }
}

//percakapan orang enam
function people6(){
    if(Object.keys(judgement).length > 4){
        btn.innerHTML = 'Judgement'
        document.getElementById('ready').appendChild(btn)
    }
    document.getElementById('namapeople6').innerHTML = "Name: Hajime"
    document.getElementById('umurpeople6').innerHTML = "Age: 24 Years old"
    document.getElementById("image6").src="image/hajime.png";
    document.getElementById("image6").className += ' fadein'
    if(judgement.hasOwnProperty('people6') == false){
    judgement.people6 = 'done'
    var test = 'Tolong aku Derektif ' + player + ' ,aku tau aku yang paling dicurigai disini, karena aku yang membantu Nagisa di ruang MakeUp sekitar pukul 15.20'
    func (test)
    }
    else {
        var test = 'aku tidak begitu mengerti, namun hari itu Nagisa terlihat cemas sekali'
        func (test)
    }
}

//truth orang keenam
function truth6(){
    if(judgement.hasOwnProperty('people6') == false){
        var test = 'Hei ' + player + ' kamu belum mendengarkan alibi dari orang tersebut'
        func (test)
    }
    else {
        skill.people6 = 'done'
        if(Object.keys(skill).length <= 2){
        var test = 'Ketika keluar dari ruang MakeUp, aku bertemu dengan Kei yang sedang berjalan ke arah toilet, dan melihat Kageyama Sensei seorang diri di gudang'
        func (test)
    }
        else{var truth = document.getElementsByClassName('truth')
        for(k=0; k<truth.length;k++){
        truth[k].innerHTML = ''
        }
        var test = 'kamu sudah menggunakan semua kesempatan untuk mengetahui kebenaran seseorang'
        func (test)
        }
    }
}


//jawaban atas tuduhan 1
function pelaku1(){
    var test = 'Terima Kasih Detectif ' + player + ' aku akan segera mengamankan mahasiswa ini'
    func (test)
    for(o=0; o<truth.length;o++){
        truth[o].innerHTML = ''
    }
}

//jawaban atas tuduhan 1
function pelaku2(){
    var test = 'Terima Kasih Detectif ' + player + ' aku akan segera mengamankan mahasiswa ini'
    func (test)
    for(o=0; o<truth.length;o++){
        truth[o].innerHTML = ''
    }
}

//jawaban atas tuduhan 1
function pelaku3(){
    var test = 'Terima Kasih Detectif ' + player + ' aku akan segera mengamankan mahasiswa ini'
    func (test)
    for(o=0; o<truth.length;o++){
        truth[o].innerHTML = ''
    }
}

//jawaban atas tuduhan 1
function pelaku4(){
    var test = 'Terima Kasih Detectif ' + player + ' aku akan segera mengamankan mahasiswa ini'
    func (test)
    for(o=0; o<truth.length;o++){
        truth[o].innerHTML = ''
    }
}

//jawaban atas tuduhan 1
function pelaku5(){
    var test = 'Terima Kasih Detectif ' + player + ' aku akan segera mengamankan mahasiswa ini'
    func (test)
    for(o=0; o<truth.length;o++){
        truth[o].innerHTML = ''
    }
}

//jawaban atas tuduhan 1
function pelaku6(){
    var test = 'Terima Kasih Detectif ' + player + ' aku akan segera mengamankan mahasiswa ini'
    func (test)
    for(o=0; o<truth.length;o++){
        truth[o].innerHTML = ''
    }
}


function boss (){
    var last = document.getElementsByClassName('people');
    for(y=0; y<last.length; y++){
    document.getElementsByClassName('people')[y].innerHTML = '';
    }
    alert('selamat Detektif ' + player + ' , Kamu sudah menemukan pelaku sebenarnya dengan kemampuan luar biasamu')

    var test = 'Bagamana kamu bisa tau kebenaran tersebut? aku benci mengakuinya tapi Kamu hebat sekali Detectif '+player+ ' , aku melakukan ini untuk balas dendam atas kematian putriku yang terbunuh karena sebuah kecelakaan yang disebabkan oleh ayah Nagisa'
    func (test)

}