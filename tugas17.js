function kaliTerusRekursif(angka) {
  if ( String(angka).length == 1) {
    return angka
  } else { //kalo angkanya minimal 2 biji
    var a = String(angka)//angka jadiin string
    var jumlah = 1  //buat nampung sementara
    for (var i =0; i < a.length; i++) {
       jumlah *= Number(a[i]) //dapetin angka hasil jumlah angka per urutan
    }
    //jumlah akan diproses di rekursi
    return kaliTerusRekursif(jumlah)

  }
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6