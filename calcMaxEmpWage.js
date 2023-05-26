const MAX_WORKING_HOURS = 100;
const NUM_OF_WORKING_DAYS = 10;
let totalEmpHours = 0;
let totalWorkingDays = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const IS_PART_TIME_HOURS = 4;
const IS_FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

function GetWorkingHours(empCheck) 
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

while(totalEmpHours <= MAX_WORKING_HOURS && totalWorkingDays <= NUM_OF_WORKING_DAYS) 
{
    totalWorkingDays++;
    empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHours += GetWorkingHours(empCheck);
}
let empWage = totalEmpHours * WAGE_PER_HOUR;
console.log("Total Days: " + totalWorkingDays + "  Total Hours: " + totalEmpHours + "  EmpWage: "+ empWage);