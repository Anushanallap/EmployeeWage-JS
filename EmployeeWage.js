console.log("Welcome to EmployeeWage");

    /**UC1: Check weather the employee is present or absent
    * using Math.random Function
    */

    const IS_PRESENT = 1;
    const IS_ABSENT = 0;


    let employeeCheck = Math.floor(Math.random() * 10 % 2);
    if (employeeCheck == IS_PRESENT) {
     console.log("Employee Is Present");
    } else
     console.log("Employee Is Absent")

    /**UC2  Calculate Daily Employee Wage based on part time and full time
 * 
      * 
      */
 const IS_PART_TIME = 1;
 const IS_FULL_TIME = 2;
 const PART_TIME_HRS = 4;
 const FULL_TIME_HRS = 8;
 const WAGE_PER_HR = 20;
let empCheck = Math.floor(Math.random() * 10 % 4);//random values in btwn 1-4
let empHrs;
   switch (empCheck) {
       case IS_PART_TIME:
           empHrs = PART_TIME_HRS;
           break;
       case IS_FULL_TIME:
           empHrs = FULL_TIME_HRS;
           break;
       default:
           empHrs = 0;
   }
   
   let empWage = empHrs * WAGE_PER_HR;
   console.log("Employee Wage is: "+empWage);

     
          