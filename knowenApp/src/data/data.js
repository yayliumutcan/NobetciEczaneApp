const city_data = [
    {
        id: "01",
        name: "ADANA",
        image:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/06/b4/b6/adana-merkez-camii.jpg?w=1000&h=600&s=1",
    },
    {
        id: "02",
        name: "ADİYAMAN",
        image: "https://www.avis.com.tr/AppResources/Uploads/City/adiyaman.jpg",
    },
    {
        id: "03",
        name: "AFYONKARAHİSAR",
        image:
            "https://cdn.otelleri.net/landing/afyon/gezi-rehberi/afyonkarahisar-kalesi-2112-9a.jpg",
    },
    {
        id: "04",
        name: "AGRI",
        image:
            "https://blog.biletbayi.com/wp-content/uploads/2017/07/agri-tarihi-yerler-1-scaled.jpg",
    },
    {
        id: "05",
        name: "AMASYA",
        image:
            "https://staticb.yolcu360.com/blog/wp-content/uploads/2018/02/28203243/Amasya-foto%C4%9Fraflar%C4%B1.jpg",
    },
    {
        id: "06",
        name: "ANKARA",
        image:
            "https://cdnp.flypgs.com/files/Sehirler-long-tail/Ankara/Ankara_Sehir_Rehberi.jpg",
    },
    {
        id: "07",
        name: "ANTALYA",
        image:
            "https://i12.haber7.net//haber/haber7/photos/2020/32/antalyada_gezilecek_tarihi_ve_dogal_yerler_14_farkli_adres_1596525989_026.jpg",
    },
    {
        id: "08",
        name: "ARTVİN",
        image:
            "https://turkishairlines.ssl.cdn.sdlmedia.com/637056978935836142PQ.jpg",
    },
    {
        id: "09",
        name: "AYDİN",
        image:
            "https://i2.milimaj.com/i/milliyet/75/0x0/5f6690755542870568e2dc87.jpg",
    },
    {
        id: "10",
        name: "BALİKESİR",
        image:
            "https://gezimanya.com/sites/default/files/styles/800x600_/public/lokasyon-detay/2019-11/image-Turizm-6.jpg",
    },
    {
        id: "11",
        name: "BİLECİK",
        image:
            "https://gezimanya.com/sites/default/files/styles/800x600_/public/lokasyon-detay/2019-11/image-hb_b_11142751_l-b.jpg",
    },
    {
        id: "12",
        name: "BİNGOL",
        image:
            "https://imagessl.etstur.com/files/images/hotelImages/integration/TR/99350/l/qtmmt56igafzmgmge9n5.jpg",
    },
    {
        id: "13",
        name: "BİTLİS",
        image:
            "https://blog.konusarakogren.com/wp-content/uploads/2020/04/bitlis-tanitim.jpg",
    },
    {
        id: "14",
        name: "BOLU",
        image:
            "https://i12.haber7.net//haber/haber7/photos/2020/15/boluda_gezilecek_yerler_listesi_10_farkli_adres_1586701032_772.jpg",
    },
    {
        id: "15",
        name: "BURDUR",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Burdur_manzara_-_panoramio.jpg/1200px-Burdur_manzara_-_panoramio.jpg",
    },
    {
        id: "16",
        name: "BURSA",
        image: "https://www.pamukkale.com.tr/images/sehirler/bursa-1.jpg",
    },
    {
        id: "17",
        name: "CANAKKALE",
        image:
            "https://staticb.yolcu360.com/blog/wp-content/uploads/2018/06/28202302/canakkale-gezi-rehberi-main.jpg",
    },
    {
        id: "18",
        name: "CANKIRI",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/0/0e/%C3%87ank%C4%B1r%C4%B1_%28Kaleden%29.jpg",
    },
    {
        id: "19",
        name: "CORUM",
        image: "https://i.ytimg.com/vi/GdVtQyQG80M/maxresdefault.jpg",
    },
    {
        id: "20",
        name: "DENİZLİ",
        image:
            "https://cdnp.flypgs.com/files/Sehirler-long-tail/Denizli/denizli_338932319.jpg",
    },
    {
        id: "21",
        name: "DİYARBAKİR",
        image:
            "https://img-s2.onedio.com/id-53f8e1a5f11c88f77841b251/rev-0/w-900/h-620/f-jpg/s-49e54dab5b3cf4d4bc764924a36ebe0b2f26a6a5.jpg",
    },
    {
        id: "22",
        name: "EDİRNE",
        image:
            "https://i4.hurimg.com/i/hurriyet/75/1110x740/5cb6d4520f25440e94deba57.jpg",
    },
    {
        id: "23",
        name: "ELAZİG",
        image:
            "https://turkishairlines.ssl.cdn.sdlmedia.com/637082058672200764KF.jpg",
    },
    {
        id: "24",
        name: "ERZİNCAN",
        image: "https://pbs.twimg.com/media/EYxCPrGXgAYpqKD.jpg",
    },
    {
        id: "25",
        name: "ERZURUM",
        image:
            "https://images.etstur.com/files/images/hotelImages/TR/51115/l/Polat-Erzurum-Resort-Hotel-Genel-302511.jpg",
    },
    {
        id: "26",
        name: "ESKİSEHİR",
        image:
            "https://www.bizevdeyokuz.com/wp-content/uploads/Eskisehir-porsuk-cayi-tekne-1280x720.jpg",
    },
    {
        id: "27",
        name: "GAZİANTEP",
        image:
            "https://www.gaziantep.bel.tr/uploads/2020/05/slider04_w1920_op.webp",
    },
    {
        id: "28",
        name: "GİRESUN",
        image:
            "https://giresun.bel.tr/tema/genel/uploads/projeler/kale-cevre-donusum-04.jpg",
    },
    {
        id: "29",
        name: "GUMUSHANE",
        image:
            "https://haberkelkit.com/resimler/gumushane_de_en_fazla_trabzonlular_yasiyor_h25340_a30d7_75e223c45eaa5e549458.jpg",
    },
    {
        id: "30",
        name: "HAKKARİ",
        image:
            "https://alevinet12.com/wp-content/uploads/2019/12/hakkarinin-5-bolgesi-iasaklandi.jpg",
    },
    {
        id: "31",
        name: "HATAY",
        image: "https://tele1.com.tr/wp-content/uploads/2020/02/hatay-3.jpg",
    },
    {
        id: "32",
        name: "İSPARTA",
        image:
            "https://www.artiyasam.com/wp-content/uploads/2017/10/egirdir444.jpg",
    },
    {
        id: "33",
        name: "MERSİN",
        image:
            "https://iasbh.tmgrup.com.tr/97fbc1/650/344/0/28/748/422?u=https://isbh.tmgrup.com.tr/sbh/2020/04/02/mersinde-corona-virusu-vaka-ve-olu-sayisi-kac-saglik-bakani-fahrettin-koca-son-dakika-acikladi-1585829862814.jpg",
    },
    {
        id: "34",
        name: "İSTANBUL",
        image: "https://istanbul.ktb.gov.tr/Resim/251740,istjpg.png?0",
    },
    {
        id: "35",
        name: "İZMİR",
        image:
            "https://turkishairlines.ssl.cdn.sdlmedia.com/637055069968008252RJ.jpg",
    },
    {
        id: "36",
        name: "KARS",
        image:
            "https://iasbh.tmgrup.com.tr/7c8d74/650/344/0/66/734/451?u=https://isbh.tmgrup.com.tr/sbh/2018/09/11/dogunun-gizemli-sehri-kars-1536659945067.jpg",
    },
    {
        id: "37",
        name: "KASTAMONU",
        image:
            "https://www.bizevdeyokuz.com/wp-content/uploads/kastamonu-kalesi.jpg",
    },
    {
        id: "38",
        name: "KAYSERİ",
        image: "https://i.ytimg.com/vi/Ez2xpC9-AF4/maxresdefault.jpg",
    },
    {
        id: "39",
        name: "KIRKLARELİ",
        image:
            "https://gezimanya.com/sites/default/files/styles/800x600_/public/lokasyon-detay/2019-11/image-kirklareli-nasil-gidilir-gorsel-696x462.jpg",
    },
    {
        id: "40",
        name: "KİRSEHİR",
        image: "https://www.timeturk.com/resim/detay/145/1450617.jpg",
    },
    {
        id: "41",
        name: "KOCAELİ",
        image: "https://ajssarimg.mediatriple.net/1107039.jpg",
    },
    {
        id: "42",
        name: "KONYA",
        image:
            "https://cdnuploads.aa.com.tr/uploads/Contents/2020/03/19/thumbs_b_c_b19b9fa266d8d825498857d8f7a8c362.jpg",
    },
    {
        id: "43",
        name: "KUTAHYA",
        image:
            "https://im.haberturk.com/yerel_haber/2020/05/15/ver1589557441/77960902_620x410.jpg",
    },
    {
        id: "44",
        name: "MALATYA",
        image:
            "https://im.haberturk.com/yerel_haber/2020/09/28/ver1601302261/81182521_620x410.jpg",
    },
    {
        id: "45",
        name: "MANİSA",
        image:
            "https://gezimanya.com/sites/default/files/styles/800x600_/public/lokasyon-detay/2019-11/image-manisa.jpg",
    },
    {
        id: "46",
        name: "KAHRAMANMARAS",
        image:
            "https://blog.biletbayi.com/wp-content/uploads/2019/08/kahramanmaras-kalesi.jpg",
    },
    {
        id: "47",
        name: "MARDİN",
        image:
            "https://i4.hurimg.com/i/hurriyet/75/1110x740/55ea5525f018fbb8f8790adc.jpg",
    },
    {
        id: "48",
        name: "MUGLA",
        image:
            "https://blog.obilet.com/wp-content/uploads/2018/02/mu%C4%9Fla-seyahat-rehberi.jpg",
    },
    {
        id: "49",
        name: "MUS",
        image:
            "https://www.aa.com.tr/uploads/userFiles/61711173-5fde-465e-9a7e-6afe03048c5b/2020%2Fnisan%2Flale_11.jpeg",
    },
    {
        id: "50",
        name: "NEVSEHİR",
        image: "https://blog.obilet.com/wp-content/uploads/2018/10/kapadokya.jpg",
    },
    {
        id: "51",
        name: "NİGDE",
        image:
            "https://gezimanya.com/sites/default/files/styles/800x600_/public/lokasyon-detay/2019-11/image-Nigde-Led-Tabela-Fiyatlari-ve-Fiyat-Hesaplama.jpg",
    },
    {
        id: "52",
        name: "ORDU",
        image: "https://www.doka.org.tr/dosyalar/page_108/1554895337_1.jpg",
    },
    {
        id: "53",
        name: "RİZE",
        image: "https://blog.biletbayi.com/wp-content/uploads/2019/12/rize.jpg",
    },
    {
        id: "54",
        name: "SAKARYA",
        image:
            "https://i2.milimaj.com/i/milliyet/75/0x0/5f601b26554283157896277f.jpg",
    },
    {
        id: "55",
        name: "SAMSUN",
        image:
            "https://univerlist.com/media/cache/db/98/db985e24aa7efc7a4ea34df378497863.webp",
    },
    {
        id: "56",
        name: "SİİRT",
        image:
            "https://adhocdergi.com/wp-content/uploads/2019/05/bir-zamanlarin-beyaz-gelini-siirt-960x626.jpg",
    },
    {
        id: "57",
        name: "SİNOP",
        image: "https://i.ytimg.com/vi/D_1GXAO70_c/maxresdefault.jpg",
    },
    {
        id: "58",
        name: "SİVAS",
        image:
            "https://www.sivas.bel.tr/AjaxResize.ashx?file=/Files/Sivas_Fotograflar/9_960.jpg&width=230&height=153",
    },
    {
        id: "59",
        name: "TEKİRDAG",
        image: "https://cdn.islamansiklopedisi.org.tr/madde/40/tekirdag-4.jpg",
    },
    {
        id: "60",
        name: "TOKAT",
        image:
            "https://i12.haber7.net//haber/haber7/photos/2017/47/tokat_1511177426_556.jpg",
    },
    {
        id: "61",
        name: "TRABZON",
        image:
            "https://blog.biletbayi.com/wp-content/uploads/2020/03/trabzon-turkiye-scaled.jpg",
    },
    {
        id: "62",
        name: "TUNCELİ",
        image:
            "https://i2.milimaj.com/i/milliyet/75/0x0/5f5ff5555542871184688de5.jpg",
    },
    {
        id: "63",
        name: "SANLİURFA",
        image:
            "https://i2.milimaj.com/i/milliyet/75/0x0/5f6010d75542831578962734.jpg",
    },
    {
        id: "64",
        name: "USAK",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/5/59/Lydian_Cilandiras_Bridge_Karahalli_Usak_Province_Turkey.jpg",
    },
    {
        id: "65",
        name: "VAN",
        image:
            "https://cdnuploads.aa.com.tr/uploads/Contents/2019/01/02/thumbs_b_c_7177ab8874d4993850cceed599888259.jpg",
    },
    {
        id: "66",
        name: "YOZGAT",
        image:
            "https://i12.haber7.net//haber/haber7/photos/2017/47/yozgat_1511178553_3409.jpg",
    },
    {
        id: "67",
        name: "ZONGULDAK",
        image:
            "https://i2.milimaj.com/i/milliyet/75/0x0/5f5fede65542871184688d9a.jpg",
    },
    {
        id: "68",
        name: "AKSARAY",
        image:
            "https://gezimanya.com/sites/default/files/styles/800x600_/public/lokasyon-detay/2019-11/image-3efgga20160401224540.jpg",
    },
    {
        id: "69",
        name: "BAYBURT",
        image:
            "https://gezimanya.com/sites/default/files/styles/800x600_/public/lokasyon-detay/2019-11/image-bayburt-sehir2.jpg",
    },
    {
        id: "70",
        name: "KARAMAN",
        image:
            "https://www.turizmajansi.com/images/haber/karaman-a-uc-yeni-otel-da_40ff.jpg",
    },
    {
        id: "71",
        name: "KİRİKKALE",
        image:
            "https://static.birgun.net/resim/haber-detay-resim/2020/05/05/kirikkale-de-sifirlanan-vaka-sayisi-1-gunde-ciddi-artis-gosterdi-727224-5.jpg",
    },
    {
        id: "72",
        name: "BATMAN",
        image:
            "https://www.besirigazetesi.com/files/news/default/petrolle-dogan-sehir-batman60c6c2d6b6e568196d02.jpg",
    },
    {
        id: "73",
        name: "SİRNAK",
        image:
            "https://i4.hurimg.com/i/hurriyet/75/750x422/5aa7a05b7af5071efc764c12.jpg",
    },
    {
        id: "74",
        name: "BARTİN",
        image:
            "https://i2.milimaj.com/i/milliyet/75/750x0/5ef078bf5542851a0c06701c",
    },
    {
        id: "75",
        name: "ARDAHAN",
        image:
            "https://i4.hurimg.com/i/hurriyet/75/1110x740/5ac4bfdc7af50717283cc583.jpg",
    },
    {
        id: "76",
        name: "İGDİR",
        image:
            "https://univerlist.com/media/cache/f7/cd/f7cdb83b410f0c307184e4f5f237d503.webp",
    },
    {
        id: "77",
        name: "YALOVA",
        image: "https://aday.yalova.edu.tr/Uploads/www/images/27%20(31)-min.jpg",
    },
    {
        id: "78",
        name: "KARABUK",
        image:
            "https://gezimanya.com/sites/default/files/styles/800x600_/public/lokasyon-detay/2019-11/image-21112016_kosuyolu_1.jpg",
    },
    {
        id: "79",
        name: "KİLİS",
        image:
            "https://www.turkiyeotobusfirmalari.com/seyahat/images/kilis-ravanda-kalesi.jpg",
    },
    {
        id: "80",
        name: "OSMANİYE",
        image:
            "https://staticb.yolcu360.com/blog/wp-content/uploads/2019/01/08152433/Osmaniye-gezi-rehberi-3.jpg",
    },
    {
        id: "81",
        name: "DÜZCE",
        image:
            "https://www.ozdeha.com/wp-content/uploads/2019/10/d%C3%BCzce-1.jpeg",
    },];

export { city_data };