function shoppingTime(memberId, money) {
    var obj = {};
    var belanja = ["Sepatu Stacattu", "Baju Zoro", "Baju H&N", "Sweater Uniklooh", "Casing Handphone" ]
    var harga = [1500000, 500000, 250000, 175000, 50000]
    

    if (memberId == false) {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    } else if (memberId == undefined) {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    } else {
        obj.memberId = memberId
    }

    if (money != false && money > 50000) {
        obj.money = money
    } else if ( money < 50000) {
        return 'Mohon maaf, uang tidak cukup'
    }
    obj.listPurchased = []
    var dibeli = obj.listPurchased

    var lenb = harga.length
    for (var i = 0; i < lenb; i++) {
      if (money >= harga[i]) { //kalo duit awal lebih dari harga produk...
        money -= harga[i] //duitnya dibelanjain / dikurangin harga produk
        dibeli.push(belanja[i]) //barang belanjaan dipush di list belanja
        obj.changeMoney = money //nilai kembalian sama dengan sisa uang
      }
    }
    return obj
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja