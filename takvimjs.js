function zaman() {
    var tr = new Date();
    var saat = tr.getHours();
    var dakika = tr.getMinutes();
    var saniye = tr.getSeconds();
    if (saat < 10)
        saat = "0" + saat;
    if (dakika < 10)
        dakika = "0" + dakika;
    if (saniye < 10)
        saniye = "0" + saniye;
    var bastir = document.getElementById('Saat');
    bastir.innerHTML = saat + ":" + dakika + ":" + saniye;
}
setTimeout(zaman, 0);
setInterval('zaman()', 1000);
var Aylar = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık"
];
var global = [];
var tarihsuan = new Date();
var k;
var kacgün;
var yilimiz = tarihsuan.getFullYear();
var sayac = 0;
var aysuan = tarihsuan.getMonth();
k = aysuan + 1;
ana();
function arttır() {
    aysuan++;
    if (aysuan == 12) {
        aysuan = 0; yilimiz++;
    }
    return aysuan;
}
function temizlik() {
    for (var temizle = 1; temizle <= 42; temizle++) {
        document.getElementById(temizle).innerHTML = "";
        document.getElementById(temizle).style = "background-color:#333";
    }
}
function gunlerbasilcak() {
    var tr = new Date(yilimiz, k - 1, 1);
    var gd = tr.getDay();
    var gunubas = tr.getDay() == 0 ? 7 : tr.getDay()
    var aykacgun = new Date(yilimiz, k, 0).getDate();
    for (var deneyelim = 1; deneyelim <= aykacgun; deneyelim++) {
        document.getElementById(gunubas).innerHTML = deneyelim;
        for(var lngal=0;lngal<global.length;lngal++)
        {
            var ttarih=deneyelim+"-"+k+"-"+yilimiz;
        if(ttarih==global[lngal].tarih)
        {
            document.getElementById(gunubas).style="background-color:orange;";
        }
    }
        gunubas++;
    }
    //-------------------------------------------------------------------
    var tsg = new Date(yilimiz, k, 0).getDate();
    if (gd == 0)
    gd = gd + 7;
    tt = tsg + gd;
    var try1 = 1;
    var ktop=k+1;
    for (var ttt = tt; ttt <= 42; ttt++) {
        document.getElementById(ttt).innerHTML = try1;
        document.getElementById(ttt).style = "background-color:#444;";
        for(var lngal=0;lngal<global.length;lngal++)
        {
            var ttarih=try1+"-"+ktop+"-"+yilimiz;
        if(ttarih==global[lngal].tarih)
        {
            document.getElementById(ttt).style="background-color:orange;";
        }
    }
    try1++;
    }
    //1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    var buay = new Date().getMonth();
    var buyil = new Date().getFullYear();
    var dayscope = new Date().getDate();   
    var icerik;
    var monthscope = new Date(buyil, buay, 1).getMonth();
    var yukardakiay = Aylar.indexOf(document.getElementById('seçilenay').innerHTML);
    var yukardakiyil = document.getElementById('seçilenyıl').innerHTML;
    var yearscope = new Date().getFullYear();
    for (var i = 1; i <= 42; i++) {
        icerik = document.getElementById(i).innerHTML;
        idyakala = document.getElementById(i).id;
        if (yukardakiay == monthscope && yukardakiyil == yearscope) {
            if (icerik == dayscope) {
                document.getElementById(i).style = "background-color:#0761c6; border:1px solid black;";
                break;
            }
        }
    }
}
function ana() {
    document.getElementById("seçilenay").innerHTML = Aylar[aysuan];//Default olarak gelen ay
    k = (Aylar.indexOf(document.getElementById('seçilenay').innerHTML)) + 1;
    document.getElementById("seçilenyıl").innerHTML = yilimiz;
    temizlik();
    disalanigetir();
    gunlerbasilcak();
}//Anafonksiyonun apostrofu
function disalanigetir() {
    var dis = new Date(yilimiz, k - 1, 1); //BU AY
   var ksal=k-1;
    //BU AYIN KAÇTAN BAŞLADIĞINI BULAN KISIM
    var gunubas = dis.getDay() == 0 ? 7 : dis.getDay() //Ayın kaçıncıdan başladığını alıyorum. Eğer sıfır gelirse pazardan dolayı 7 yapıyorum.
    var aykacgun = new Date(yilimiz, k - 1, 0).getDate();
    //BU AYIN KAÇTAN BAŞLADIĞINI BULAN KISIM
    for (gunubas = gunubas - 1; gunubas > 0; gunubas--) {
        document.getElementById(gunubas).innerHTML = aykacgun;
        document.getElementById(gunubas).style = "background-color:#444;";    
        for(var lngal=0;lngal<global.length;lngal++)
        {
            var ttarih=aykacgun+"-"+ksal+"-"+yilimiz;
        if(ttarih==global[lngal].tarih)
        {
            document.getElementById(gunubas).style="background-color:orange;";
        }
    }
        aykacgun--;
    }
}
//--------------------------------------------------------------------------------------------------
function azalt() {
    aysuan--;
    if (aysuan == -1) {
        aysuan = 11; yilimiz--;
    }
    return aysuan;
}
//----------------------------------------------NOT DÜŞME ALANI-------------------------------------------------------------------------------
not = {
    tarih: null,
    notumuz: null
}
var dizigünler = new Array();
for (var j = 0; j < 42; j++) {
    dizigünler[j] = "";
}
function ana2() {
    for (var i = 1; i <= 42; i++) {
        document.getElementById(i).addEventListener('click', function (event) {
            var deger = event.currentTarget.innerHTML;
            var tiklananid = event.currentTarget.id;            
            günüyaz(tiklananid);         
    var monthscope;
    var kscope = k;
    var firstday = new Date(yilimiz, k - 1, 1).getDay() == 0 ? 7 : new Date(yilimiz, k - 1, 1).getDay()//Bu ayın ilk gününün kaçıncı günden başladığını verir. 4
    var howmanyday = new Date(yilimiz, k, 0).getDate(); //Bu ayın kaç gün çektiğini verir. 31
    var firstandnow = firstday + howmanyday;  
 if (document.getElementById("tiklananid").innerHTML < firstday && k == 1) {
                var kcopy = 12;
                monthscope = kcopy; yearscope--;
                kcopy = 0;
            }
            if (document.getElementById("tiklananid").innerHTML < firstday && kcopy != 0) {
                monthscope = k - 1;        
            }        
            if (document.getElementById("tiklananid").innerHTML >= firstandnow) {
                monthscope = k + 1;
                if (monthscope == 13) {
                    monthscope = 1; yearscope++;
                }
            }        
            if (document.getElementById("tiklananid").innerHTML >= firstday && document.getElementById("tiklananid").innerHTML < firstandnow) {
                monthscope = kscope;        
            }
    var tarihgünn=document.getElementById("tiklanangun").innerHTML;
   var tarihayy=monthscope;
   var tarihyıll=document.getElementById("seçilenyıl").innerHTML;
   var tarihfulll=tarihgünn+"-"+tarihayy+"-"+tarihyıll; 
   for(var i=0;i<global.length;i++)
   {
    if(tarihfulll==global[i].tarih)
    {        
        document.getElementById("ogununnotu").innerHTML=global[i].notumuz.join("<br>");
        break;
    }
    else
    document.getElementById("ogununnotu").innerHTML="Not bulunmamaktadır.";
   }
        });
    }
}
ana2();
function günüyaz(deg) {
    var üsteyaz = document.getElementById(deg).innerHTML;
    var üsteidyaz = document.getElementById(deg).id;
    document.getElementById("tiklanangun").innerHTML = üsteyaz;
    document.getElementById("tiklananid").innerHTML = üsteidyaz;
};
function kaydet() {
    var monthscope;
    var kscope = k;
    var firstday = new Date(yilimiz, k - 1, 1).getDay() == 0 ? 7 : new Date(yilimiz, k - 1, 1).getDay()//Bu ayın ilk gününün kaçıncı günden başladığını verir. 4
    var howmanyday = new Date(yilimiz, k, 0).getDate(); //Bu ayın kaç gün çektiğini verir. 31
    var firstandnow = firstday + howmanyday;
    var days = document.getElementById("tiklanangun").innerHTML;
    var dayscope = document.getElementById("tiklananid").innerHTML; //yukarda yazan günü alıyor
    var yearscope = document.getElementById("seçilenyıl").innerHTML;
    //-----------------NOT ALDIĞIM YERİN TARİHİNİ ATMA------------------------------------------   
    if (document.getElementById("tiklananid").innerHTML < firstday && k == 1) {
        var kcopy = 12;
        monthscope = kcopy; yearscope--;
        kcopy = 0;
    }
    if (document.getElementById("tiklananid").innerHTML < firstday && kcopy != 0) {
        monthscope = k - 1;
    }
    if (document.getElementById("tiklananid").innerHTML >= firstandnow) {
        monthscope = k + 1;
        if (monthscope == 13) {
            monthscope = 1; yearscope++;
        }
    }
    if (document.getElementById("tiklananid").innerHTML >= firstday && document.getElementById("tiklananid").innerHTML < firstandnow) {
        monthscope = kscope;
    }
    //-----------------NOT ALDIĞIM YERİN TARİHİNİ ATMA------------------------------------------    
    var fullyear = days + "-" + monthscope + "-" + yearscope; //kaydete bastığın tam tarih için.
    var metin = document.getElementById("not").value; //textin içindeki değeri alıyor.
    var findkontrol = global.findIndex(function (item) {
        return fullyear == item.tarih;
    });
    if (findkontrol != -1) {
        document.getElementById(dayscope).style = "background-color:orange;";
        global[findkontrol].notumuz.push(metin);
        document.getElementById("not").value="";
    }
    else {
        global.push({
            tarih: fullyear,
            notumuz: [metin]
        });
        document.getElementById(dayscope).style = "background-color:orange;";
        document.getElementById("not").value="";
    }       
/* TIKLANAN GÜNÜN TARİHİNİ OLUŞTURULAN DİZİDE TARATMA */
    for(var lngal=0;lngal<global.length;lngal++)
        {            
        if(fullyear==global[lngal].tarih)         
        {
            document.getElementById("ogununnotu").innerHTML=global[lngal].notumuz.join("<br>");
        }
    }
/* TIKLANAN GÜNÜN TARİHİNİ OLUŞTURULAN DİZİDE TARATMA */
}
//----------------------------------------------NOT DÜŞME ALANI-------------------------------------------------------------------------------
function sil(){
    var monthscope;
    var kscope = k;
    var firstday = new Date(yilimiz, k - 1, 1).getDay() == 0 ? 7 : new Date(yilimiz, k - 1, 1).getDay()//Bu ayın ilk gününün kaçıncı günden başladığını verir. 4
    var howmanyday = new Date(yilimiz, k, 0).getDate(); //Bu ayın kaç gün çektiğini verir. 31
    var firstandnow = firstday + howmanyday;
var tikgun=document.getElementById("tiklanangun").innerHTML;
if (document.getElementById("tiklananid").innerHTML < firstday && k == 1) {
    var kcopy = 12;
    monthscope = kcopy; yearscope--;
    kcopy = 0;
}
if (document.getElementById("tiklananid").innerHTML < firstday && kcopy != 0) {
    monthscope = k - 1;
}

if (document.getElementById("tiklananid").innerHTML >= firstandnow) {
    monthscope = k + 1;
    if (monthscope == 13) {
        monthscope = 1; yearscope++;
    }
}
if (document.getElementById("tiklananid").innerHTML >= firstday && document.getElementById("tiklananid").innerHTML < firstandnow) {
    monthscope = kscope;
}
var tikay=monthscope;
var tikyil=document.getElementById("seçilenyıl").innerHTML;
var  findddkontrol;
var tikfultarih=tikgun+"-"+tikay+"-"+tikyil;
for(var lngal=0;lngal<global.length;lngal++)
        {            
            findddkontrol=global.findIndex( function (deneme){ return tikfultarih==deneme.tarih } );
            if(findddkontrol!=-1)
            {
                global.splice(findddkontrol,1);
              //  document.getElementById(tikid).style="background-color:red;";
            }
    }
}
