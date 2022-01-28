/**UC1 the postal index number(PIN) or PIN code is 6 digit code of post office numbering
 * used by india post
 * create regex pattern to validate PIN code 400088
 */

function PincodeValidation(pincode) {

    if (/^[1-9]{1}[0-9]{2}\\s{0, 1}[0-9]{3}$/.test(pincode)) {
        return true;
    }
    else{
        return false;
    }
    }

//console.log(PincodeValidation("400088")); 

/**UC2 restrict the pin code from taking alphabets or special characters at the beginning.
 * 
 */

function Validatealphabets(pincode) {

    let regexexpression  = RegExp('^[A-Z]{1}[0-9]{5}');
    let rs  = regexexpression.test(pincode);
    console.log(rs);

}

console.log(Validatealphabets("400088"));
console.log(Validatealphabets("T400088"));
