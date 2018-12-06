/*Diberikan function ubahHuruf(kata) yang akan menerima satu parameter berupa string. 
Functiona akan me-return sebuah kata baru dimana setiap huruf akan digantikan dengan 
huruf alfabet setelahnya. Contoh, huruf a akan menjadi b, c akan menjadi d, k menjadi l, dan z menjadi a.
*/

//Code

function ubahHuruf(kata) {
    
    var a = kata.length;
    var katanew = '';

    for(var i = 0; i < a; i++) {
        switch(kata[i]) {
            case 'a':
                katanew += 'b';    
                break;
                case 'b':
                katanew += 'c';
                break;
                case 'c':
                katanew += 'd';    
                break;
                case 'd':
                katanew += 'e';    
                break;
                case 'e':
                katanew += 'f';    
                break;
                case 'f':
                katanew += 'g';    
                break;
                case 'g':
                katanew += 'h';    
                break;
                case 'h':
                katanew += 'i';    
                break;
                case 'i':
                katanew += 'j';    
                break;
                case 'j':
                katanew += 'k';    
                break;
                case 'k':
                katanew += 'l';    
                break;
                case 'l':
                katanew += 'm';    
                break;
                case 'm':
                katanew += 'n';    
                break;
                case 'n':
                katanew += 'o';    
                break;
                case 'o':
                katanew += 'p';    
                break;
                case 'p':
                katanew += 'q';    
                break;
                case 'q':
                katanew += 'r';    
                break;
                case 'r':
                katanew += 's';    
                break;
                case 's':
                katanew += 't';    
                break;
                case 't':
                katanew += 'u';    
                break;
                case 'u':
                katanew += 'v';    
                break;
                case 'v':
                katanew += 'w';    
                break;
                case 'w':
                katanew += 'x';    
                break;
                case 'x':
                katanew += 'y';    
                break;
                case 'y':
                katanew += 'z';    
                break;
                case 'z':
                katanew += 'a';    
                break;
        }
    }
    
    return katanew 
}
// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu 
