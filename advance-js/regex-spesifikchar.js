    //karakter ke
    function panggilRegexp1(value) {
    var ambilData1 = value.match(/ke/g);
    console.log(ambilData1);
   }
   panggilRegexp1("Bulan ke 1 sd ke 4");
    //outpur : [ 'ke', 'ke' ]

    // karakter k,e
   function panggilRegexp2(value) {
    var ambilData2 = value.match(/[ke]/g);
    console.log(ambilData2);
   }
   panggilRegexp2("Bulan ke 1 sd ke 4");
    //output: [ 'k', 'e', 'k', 'e' ]

    //karakter kecuali ke
   function panggilRegexp3(value) {
    var ambilData3 = value.match(/[^ke]/g);
    console.log(ambilData3);
   }
   panggilRegexp3("Bulan ke 1 sd ke 4");
   //output :[ 'B', 'u', 'l', 'a', 'n', ' ', ' ', '1', ' ', 's', 'd', ' ', ' ', '4' ]

   //antara karakter tertentu
   function panggilRegexp4(value) {
    var ambilData4 = value.match(/[a-i]/g);
    console.log(ambilData4);
   }
   panggilRegexp4("Bulan ke 1 sd ke 4");
   //output : [ 'a', 'e', 'd', 'e' ]
