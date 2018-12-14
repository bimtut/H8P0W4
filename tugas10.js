function changeMe(arr) {
    if (arr == false) {
        console.log('""')
    } 
    
    var obj = {}
    var a = arr.length
    var tahun = new Date().getFullYear();
    
    
    
    for(var i = 0; i < a; i++) {
        obj.firstName = arr[i][0];
        obj.lastName = arr[i][1];
        obj.gender = arr[i][2]
        if (tahun - arr[i][3] > 0) {
            obj.age = tahun - arr[i][3]
        } else {
            obj.age = 'Invalid Birth Year'
        }
        
        console.log(obj)
    }
    
    
    
}
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 36 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""