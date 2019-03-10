function reserseString(string) {
    for (let i=0;i<string.length/2;i++){
        let b=string[i];
        string[i]=string[string.length-i];
        string[string.length-1]=b;
    }
    return string;
}