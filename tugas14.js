function changeVocals (str) {
    var a = str.length //length parameter
    var tampung = '' //buat nampung string baru
    for ( var i = 0; i < a; i++) { //kamus ala ala gue. hahahahaha
        switch (str[i]) {
            case 'a':
                tampung += 'b';
                break;
                case 'i':
                tampung += 'j';
                break;
                case 'u':
                tampung += 'v';
                break;
                case 'e':
                tampung += 'f';
                break;
                case 'o':
                tampung += 'p';
                break;
                case 'A':
                tampung += 'B';
                break;
                case 'I':
                tampung += 'J';
                break;
                case 'U':
                tampung += 'V';
                break;
                case 'E':
                tampung += 'F';
                break;
                case 'O':
                tampung += 'P';
                break;
                default:
                tampung += str[i]
        }
    }
    return tampung
  }
  
  function reverseWord (str) {
    var change = changeVocals (str) //function changeVocals gw jadiin variabel
    var dibalik = ''
    for (var i = change.length - 1; i >= 0; i--) {
        dibalik += change[i]
    }
    return dibalik
  }
  
  function setLowerUpperCase (str) {
    var ganti = '';
    var balik =  reverseWord (str)
    for (var i = 0; i < balik.length; i++) {
        if (balik[i] === balik[i].toLowerCase()) {
            ganti += balik[i].toUpperCase()
        } else if (balik[i] === balik[i].toUpperCase()) {
            ganti += balik[i].toLowerCase()
        } else {
            ganti += ' '
        }
    }  
    return ganti
  }
  
  function removeSpaces (str) {
    var ilangspace = setLowerUpperCase (str);
    var noSpace = ilangspace.split(' ').join('');
    return noSpace
  }
  
  function passwordGenerator (name) {
    var jadi = removeSpaces (name)
    if (name.length <5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    } else {
        return jadi
    }
    
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'. 