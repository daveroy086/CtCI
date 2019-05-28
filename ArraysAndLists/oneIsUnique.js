/*function isUnique (aString) {
    /*Is Unique: Implement an algorithm to determine if a string has all unique characters.
    What if you cannot use additional data structures?
    Hints: #44, #117, #132  
    I should have asked do caps count

    if(aString.length == 0){
        console.log('The string is empty');
    }else if (aString.length ==1){
    console.log('The character is unique');
    }else{
        for(i = 0; i<=aString.length - 2; i++) {
            for(j = i + 1; j <=aString.length - 1; j++){               
                if(aString[i] == aString[j]){
                    break;
                }if(aString[i] == aString[j]){
                    break;
                }//end if//end if
            }if(aString[i] == aString[j]){
                console.log('Not all characters are unique');
                break;
            }
        }console.log('All characters are unique');//end for i
    }
}

isUnique('daveroy');
*/
//or

//create an empty array
//use a for loop to get the first character
//see if it's an element of the array
//if it is return all characters are not unique and break
//if arrray.length is == string.length return all characters are unique and break
//loop
/*
function isUnique2(aString) {
    anArray = [];
    for ( let i = 0 ; i <= aString.length - 1; i++) {
        let aLetter = aString[i];// get a letter
        if (anArray.includes(aLetter)) {// if it matches another
            console.log('The characters are not all unique');
            break;
        }else{// if it doesn't
            anArray.push(aLetter);
            console.log(anArray);
            if (anArray.length == aString.length){//if we've tried them all
            console.log('The characters are all unique');
            break;
            }
        }//end else
    }//end for i
}//end isUnique

isUnique2('daveroy');
isUnique2('dade');*/

function isUnique3HashFunction(aLetter){
    return aLetter.charCodeAt(0);//you could just stick this in the for loop and skip the seperate function
}

function isUnique3 (aString) {
    var hashArray = [];
    //hint 44 says try a hash table
    for ( let i = 0; i <= aString.length - 1; i ++) {// this used to say aLetter.length
        var asciiValue = isUnique3HashFunction(aString);//this used to say aLetter
        hashArray.splice(asciiValue/26, 0, aString);
    //check to see if there are more than one entry per index
    }//end for i
}//end isUnique3

isUnique3('daveroy');
isUnique3('dade');
