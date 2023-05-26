function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const IS_PART_TIME_HOURS = 4;
const IS_FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NO_OF_WORKING_DAYS = 20;
let empHrs = 0;
const Max_Hrs_In_Month = 160;
const Num_Of_Working_Days = 20;
let totalEmpHours = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();


function getWorkingHours(empCheck) 
{
    switch(empCheck)
    {
        case IS_PART_TIME:
            return IS_PART_TIME_HOURS;
        case IS_FULL_TIME:
            return IS_FULL_TIME_HOURS;
        default:
            return 0;
    }
}
while (totalEmpHours<= Max_Hrs_In_Month && totalWorkingDays < Num_Of_Working_Days) {
    totalWorkingDays++; 
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHours += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
} 
let empWage = calcDailyWage(totalEmpHours);
console.log("UC6 - Total Days: " + totalWorkingDays + "Total Hrs: " + totalEmpHours + "Empn Wage: " + empWage);