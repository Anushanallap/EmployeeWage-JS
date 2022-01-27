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


     
          