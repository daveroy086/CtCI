function palindromePermutation (aString){
    /*Given a string, write a function to check if it is a permutation of a palindrome.
    *A palindrome is a word or phrase that is the same forwards and backwards.
    *A permutation is a rearrangement of letters.
    *The palindrome does not need to be limited to just dictionary words.
    */

    //is there anything I should check before starting
    //turn the string into an array
    //delete any empty spaces
    //a for loop to get a letter
    //another loop to see if it is repeated in the string
    //if it is repeated delete both
    //after all the doubles are deleted if there aare only zero or one characters left the string was a permutation of a palimdrome
    //check the hints
    }

/*function palindromePermutation (aString){
    /*Given a string, write a function to check if it is a permutation of a palindrome.
    *A palindrome is a word or phrase that is the same forwards and backwards.
    *A permutation is a rearrangement of letters.
    *The palindrome does not need to be limited to just dictionary words.
    

    //turn the string into an array
    var anArray = aString.split("");
    //delete any empty spaces
    for ( i = 0 ; i < aString.length; i++) {
        console.log(anArray);
        if (anArray[i] == " ") {
            anArray.splice(i, 1);
        }
    }// end for i
    //a for loop to get a letter
    for ( j = 0; j < anArray.length; j++) {
        //another loop to see if it is repeated in the string
        for( k = o; k < anArray.length - 1; k++) {
            //if it is repeated delete both
            if(anArray[j] == anArray[k]){
                anArray.splice(j);
                anArray.splice(k);
            }

        }
    }
    if(anArray.length ==0 || anArray.length == 1){
        console.log (aString + ' is a palindrome permutation');
    }
    //after all the doubles are deleted if there aare only zero or one characters left the string was a permutation of a palimdrome
    //check the hints
    }

    palindromePermutation('ab');
    palindromePermutation('aba');
    palindromePermutation('abba');
    palindromePermutation('a b');
*/
