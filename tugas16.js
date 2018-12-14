function totalDigitRekursif(angka) {
    
  if(String(angka).length == 1) {
    
    return angka
    
  } else {
    var tampung = String(angka) //jadiin string dulu
    var akhir = Number(tampung[tampung.length-1])//ambil angka terakhir berupa number. ini yg akan diproses
    
    //ngurangin angka buat diproses di rekursif selanjutnya
    var sisa = Number(tampung.slice(0,-1)) //parameter minus adalah pengambilan data dari kanan
    
    return akhir + totalDigitRekursif(sisa) //akhir jadi parameter karena inilah yg akan diproses
   
  }
  
     
    
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5