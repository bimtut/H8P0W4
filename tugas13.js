function sorting(arrNumber) {
    // sorting dan dapetin angka terbesar AJA
    var urut = arrNumber.sort();
    return urut
  }
  
  function getTotal(arrNumber) {
    // dapetin angka terbesar dan brp frekuensi yang terbesar nongol
    var count = 0;
    var lenu = arrNumber.length; //length dari arrNumber
    var besar = sorting(arrNumber)[lenu - 1] //dapetin angka terbesar
    //console.log(sorting(arrNumber))
    for (var i = 0; i < lenu; i++) { //ngitung frekuensi angka terbesar
        if (arrNumber[i] === besar) {
            count += 1
        }
    }
    return 'angka paling besar adalah '+besar+' dan jumlah kemunculan sebanyak '+count+' kali' //return hasil akhir (tapi kondisi kalo arraynya kosong belum)
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    if(arrNumber == false) {
      return ''
    }else {
      return countHighest;
    }
    
  }
 
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([])); //yang ini belum kejawab. tinggal pake if aja. dikerjain nanti
  //''
  

 