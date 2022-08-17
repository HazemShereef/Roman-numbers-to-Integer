var romanToInt = function(s) {
    var stringLength = s.length;
    var obj = {"I": 1,"V":5,"X":10, "L":50,"C":100, "D":500, "M":1000};
    var number = 0;
    for (var i= 0; i<=stringLength-1;i++){
        if ( i == stringLength-1){
            number = number + obj[s[i]];
            break;
        }
        else if (obj[s[i]]>= obj[s[i+1]]){
            number = number + obj[s[i]];
        }
        else if (obj[s[i]] < obj[s[i+1]]) {
            number= number +  obj[s[i+1]];
            number = number - obj[s[i]] ;
            i++ ;
                                            
    }}
    return number;
    
};
