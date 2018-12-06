function angkaPrima( n ) {
    var akar = Math.sqrt(n); //cari akar supaya jadi batas increment i. i digunakan sbg modulus
    for( var i = 2;  i <= akar;  i++ ) { //i dimulai dari 2 karena kalo dari 1 pasti modnya 0 semua
        if( n % i == 0 )                //batas i sampai max karena harusnya sudah ketemu faktor sebelum sampe/sama dengan max
            return false;               //yang berhasil mod i = 0 bukan prima karena prima faktornya hanya 1 dan n
    }
    return true;    //kalo seluruh i dicoba dan ga nemu mod = 0 berarti prima. maka return true
}


//kesimpulan : di proses ini prosesnya nyari yg bukan prima lalu return false. baru kalo g berhasil ketemu
//baru return true

console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false