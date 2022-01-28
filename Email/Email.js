/** UC1 validate email address with a regex .email consists of minimum 3 and optional
 * 
 * */
 function emailaddress(emailvalid,emailinvalid)
{
    let pattern = RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

    let email = pattern.test(emailvalid);
    let email1 = pattern.test(emailinvalid);

    console.log(email);      
    console.log(email1);  
}
emailaddress("abc@bridgelabz.co","ab");