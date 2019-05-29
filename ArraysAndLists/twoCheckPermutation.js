function checkPermutation (aString, anotherString) {

    //check to see if the loops are the same length
    if(aString.length != anotherString.length) {
        //if they arn't return they are not permutations
        console.log('The strings are not permutations of one another.');
    }else{//else
        //turn the strings into arrays
        var anArray = aString.split("");
        var initialArrayLength = anArray.length;
        var anotherArray = anotherString.split("");
        //make a loop
        for( i = 0 ; i <= anArray.length - 1; i++){
            //get a letter from the first array
            var aLetter = anArray[i];
            //compare it against the second string
            if(anotherArray.includes(aLetter)) {
                //if it's there remove it
                anotherArray.splice(anotherArray.indexOf(aLetter),1);
                console.log(anotherArray)
            }else{
            //if it's not return it's not a permutation
            console.log('The strings are not permutations of one another.');
            }
        }//end for i
             //if it goes to the end of the loop
             if(anotherArray.length == 0) {
                 //return they are permutations
            console.log('The strings are permutations of one another.');
             }
        }//end first else
}//end checkPermutation}

//checkPermutation('dave', 'dav');
//checkPermutation('dave', 'davi');
//checkPermutation('dave', 'dave');

/*it's running but the output is wrong */