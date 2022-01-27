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
         /**UC6 Calculate Wages till a condition of total working hours or days is reached for a month - Assume 100 hours */
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

function sum(dailyWage) {
    totalEmpWage += dailyWage;
}
empDailyWageArray.forEach(sum);
console.log("\nUsing ForEach Loop, Total Wage: " + totalEmpWage);

// UC7A using Reduce Method
let totalempWages = 0;
function totalWages(totalempwages, dailyWage) {
    return totalempwages + dailyWage;
}
let totalEmpWageUsingReduce = empDailyWageArray.reduce(totalWages, 0);
console.log("\nUsing Reduce Method, Total Wage: " + totalEmpWageUsingReduce);

// UC 7B Showing Day and DailyWage Using MAP helper function
let counter = 0;
function dayAndDailyWageMap(dailyWage) {
    counter++;
    return counter + " -> " + dailyWage;
}
let dayAndDailyWageMapArray = new Array();
dayAndDailyWageMapArray = empDailyWageArray.map(dayAndDailyWageMap);
console.log("\nUsing Map Printing Day with DailyWage.\n");
console.log(dayAndDailyWageMapArray);

/* UC 7C Showing/Storing  Only Full Time Wage =160 Earned Days in Array 
* using Filter function/Method
*/
function fullTimeWageDay(dailyWage) {
    return dailyWage.includes("160");
}
let fullTimeWageArray = dayAndDailyWageMapArray.filter(fullTimeWageDay);
console.log("\nUsing Filter Storing Only FullTimewage into Array\n");
console.log(fullTimeWageArray);

//UC 7D  Finding first of Full Time Wage in Array using Find function
let fullTimeWageFirstOccurance = dayAndDailyWageMapArray.find(fullTimeWageDay);
console.log("\nfirst Occurence of Full Time Wage(160) 0n :\n");
console.log(fullTimeWageFirstOccurance);

// UC 7E Checking UC7C result Array Full time Wage Array , truly Holds Full timewage
// Using Every function

console.log("Is fulltimeWageArray truely holds fulltime Wage: "+fullTimeWageArray.every(fullTimeWageDay));

/*
 UC 7F Check for PartTime Wage in empWageDaily Array and Performing All other opertions too
 */
 function partTimeWageDay(dailyWage) {
    return dailyWage.includes("80");
}

console.log("Checking for parttimeWage(80) in map Array Present or not:\n" + dayAndDailyWageMapArray.some(partTimeWageDay));
// Storing only partTimeWage days in parttimeWagearray using Filter
let partTimeWageArray = dayAndDailyWageMapArray.filter(partTimeWageDay);
console.log("Part timeWage Days:\n" + partTimeWageArray);
// checking parttimeWageArray truly holds Parttime totalWages
console.log("Is parttimeWageArray truely holds Parttime Wage: " + partTimeWageArray.every(partTimeWageDay));
let partTimeWageFirstOccurance = dayAndDailyWageMapArray.find(partTimeWageDay);
console.log("\nfirst Occurence of Part Time Wage(80) 0n :");
console.log(partTimeWageFirstOccurance);

/* 
* UC 7GFinding the Number of Days Employee Worked out Of 20Days
*/

function totalFullTimeWorked(numOfFullTimeDays, dailyWage) {
    if (dailyWage == 160)
        return numOfFullTimeDays + 1;
    return numOfFullTimeDays;
}
function totalPartTimesWorked(numOfPartTimeDays, dailyWage) {
    if (dailyWage == 80)
        return numOfPartTimeDays + 1;
    return numOfPartTimeDays;
}

let partTimeWorkedDays = empDailyWageArray.reduce(totalFullTimeWorked, 0);
console.log("Employee Worked Part time for " + partTimeWorkedDays + " Days");
let fullTimeWorkedDays = empDailyWageArray.reduce(totalPartTimesWorked, 0);
console.log("Employee Worked Full time for " + fullTimeWorkedDays + " Days");
let totalDaysWorked= fullTimeWorkedDays+partTimeWorkedDays;
console.log("Employee Total Worked  for " + totalDaysWorked + " Days");                                                       