function URLify (aString, anInt) {
    /*Write a method to replace all spaces in a string with '%20'.
    *Your may assume that the string has sufficient space at the end to hold all the additional characters, 
    *and that you are given the "true" length of the string.
    *(Note: If implementing in  Java, please use a character array so that you can perform this operation in place.)
    *Input:  "Mr John Smith ", 13
    *Output: "Mr%20John%20Smith"
    *Hints:
    *   #53. It's often easiest to modify strings by going from the end of the string to the beginning.
    *   #118. You might find you need the number of spaces. Can you just count them?
    */
    
    var anArray = aString.split("");
    
    var outputString = "";
    
    for( i = 0; i <= anInt - 1; i++) {
        if(anArray[i] == " ") {
            outputString += "%20";
        }else{
            outputString += anArray[i];
        }console.log(outputString);
    }//end for
}

URLify('out put String', 14);
