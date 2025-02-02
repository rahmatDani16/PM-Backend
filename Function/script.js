function jumlahVolumeDuaKubus(a,b){
    var volumA ;
    var volumB ;
    var total ;
     volumA = a * a * a;
     volumB = b * b * b;

     total = volumA + volumB;

     return total
}

alert(jumlahVolumeDuaKubus(8,3));