function charCount(str){
    // make obj ot return at end
    var result = {};

    // loop over string, for each character...
    for(var i=0; i < str.lenght; i++){
        var char = str[i].toLowerCase()
        if(result[char] > 0){
            result[char]++;
        }
        else {
            result[char] = 1;
        };
    }
    return result;
}