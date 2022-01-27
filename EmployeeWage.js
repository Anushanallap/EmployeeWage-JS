console.log("Welcome to EmployeeWage");

    /**UC1: Check weather the employee is present or absent
    * using Math.random Function
    */

    const IS_PRESENT = 1;
    const IS_ABSENT = 0;


    // let employeeCheck = Math.floor(Math.random() * 10 % 2);
    // if (employeeCheck == IS_PRESENT) {
    //  console.log("Employee Is Present");
    // } else
    //  console.log("Employee Is Absent")

    /**UC2  Calculate Daily Employee Wage based on part time and full time
 * 
      * 
      */
 const IS_PART_TIME = 1;
 const IS_FULL_TIME = 2;
 const PART_TIME_HRS = 4;
 const FULL_TIME_HRS = 8;
 const WAGE_PER_HR = 20;
 const MAX_WORKING_DAYS = 20;
 const MAX_WORKING_HOURS = 160;
let empCheck = Math.floor(Math.random() * 10 % 4);//random values in btwn 1-4

let empHrs;
function getEmployeeWage(eCheck){
            

   switch (empCheck) {
       case IS_PART_TIME:
           empHrs = PART_TIME_HRS;
           break;
       case IS_FULL_TIME:
           empHrs = FULL_TIME_HRS;
           break;
       default:
           return 0;
   }
}
   
//    let empWage = empHrs * WAGE_PER_HR;
//    console.log("Employee Wage is: "+empWage);

     /**UC3  Add part time empoyee and wage
      * 
      * UC4 solve using switch case
     */
        
      //getEmployeeWage(empCheck);
        //   let empWage = empHrs * WAGE_PER_HR;
        //   console.log("Employee Wage is: "+empWage);

        /**UC5 calculate wages for a month And total working days
         * 
         */ 
         /*let totalEmpHrs = 0;
         let totalWorkingDays = 0;
         for (let day = 1; day <= MAX_WORKING_DAYS; day++) {
             let employeeCheck = Math.floor(Math.random() * 10) % 3;
             let emphrs = getEmployeeWage(employeeCheck);
             totalEmpHrs += emphrs;
             totalWorkingDays++;
         
         }*/
         let totalEmpHrs  = 0;
         let totalWorkigDays = 0;
         let empDailyWageArray = new Array();

         function calculateWage (empHrs){
             return empHrs * WAGE_PER_HR;
         }
         while (totalEmpHrs<MAX_WORKING_HOURS && totalWorkigDays<MAX_WORKING_DAYS){
            totalWorkigDays++;
         let employeeCheck = Math.floor(Math.random() * 10) % 3;
         let emphrs = getEmployeeWage(employeeCheck);
         totalEmpHrs += emphrs;
          empDailyWageArray.push(calculateWage(emphrs));   
         }

         let totalEmpWage = calculateWage(totalEmpHrs);
         console.log("Daily Employee Wage stored in Array:\n"+empDailyWageArray);
            console.log(" Total Employee Wage is: " + totalEmpWage + " for Total Employee Work Hours: " + totalEmpHrs
                                                                +" Total Working Days: "+totalWorkigDays);