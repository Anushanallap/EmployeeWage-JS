/**UC1 the postal index number(PIN) or PIN code is 6 digit code of post office numbering
 * used by india post
 * create regex pattern to validate PIN code 400088
 */

function PincodeValidation(){
    if ("^[1-9]{1}[0-9]{2}\\s{0, 1}[0-9]{3}$") {
        return true;
    }
    else{
        return false;
    }
}
console.log(PincodeValidation("400088"));
