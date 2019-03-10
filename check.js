function check() {
    let string = prompt('Enter a string:');
    if (checkPalindrome(string)===true){
        document.getElementById('result').innerHTML=string+' is String Palindrome!!!';
    }
    else {
        document.getElementById('result').innerHTML=string+' is not String Palindrome!!!';
    }
}