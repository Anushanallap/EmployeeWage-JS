/** UC1 validate email address with a regex .email consists of minimum 3 and optional
 * 
 * */
 function emailaddress(emailvalid,emailinvalid)
{
    let pattern = RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    let pattern = RegExp ('[A-Za-z0-9.+-]*[a-zA-Z0-9]+[@]{1}[b][r][i][d][g][e][l][a][b][z]+[.][a-z]');

    let email = pattern.test(emailvalid);
    let email1 = pattern.test(emailinvalid);

    console.log(email);      
    console.log(email1);  
}
emailaddress("abc@bridgelabz.co","ab");

/**UC2 ensure @ and validate the mandatory 2nd part i.e bridgelabz
 * 
 */
emailaddress("bridgelabz.co");