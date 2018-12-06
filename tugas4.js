function cariModus(arr) {
  // CARA II :
  var arrModus = [], isiSama = false; //isiSama dipake buat manipulasi hasil. jika modus murni, maka outputnya -1
  
  for (var i = 0; i < arr.length; i++) {
    for (var j = i+1; j < arr.length; j++) {
      if (arr[i] === arr[j]) { //jika ada angka yang sama, push angka tersebut ke arrModus
        isiSama = true;
        arrModus.push(arr[i]); //push angka yg sama ke arrModus
      } else {
        isiSama = false; //kalo g sama, g ada nilai yg dipush dan isiSama tetep false
      }
    }
  }

  return (arrModus[0] === undefined || isiSama) ? -1 : arrModus[0];
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1 //pada i 3 dan seterusnya kebanyak return flagnya false. cuma ini yg true karena sama mulu