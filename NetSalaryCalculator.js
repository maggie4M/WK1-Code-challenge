function NetSalaryCalculator(basicSalary,benefits){
    const nssfRate = 0.06;
    //Calculate gross salary for PAYE calculations
    let grossSalary = basicSalary + benefits;
    // Calculating PAYE for different tax brackets
    let PAYE = 0
    if( grossSalary <= 24000){
        PAYE = grossSalary * 0.1;
    } else if (grossSalary <=32333){
        PAYE = 2400 + (grossSalary-24000)* 0.25;
    } else if (grossSalary <= 40385){
        PAYE = 5866 + (grossSalary-32333)* 0.3;
    } else if (grossSalary <= 48334) {
        PAYE = 10916+ (grossSalary-40385)*0.32;
    }else{
        PAYE = 13469+(grossSalary-48334)*0.35;
    }
    //Calculating NHIF deductions according to NHIF rates
    let nhifDeductions = 0;
    if(grossSalary <= 5999){
        nhifDeductions = 150;
    }else if (grossSalary <= 7999){
        nhifDeductions = 300;
    } else if (grossSalary <= 11999){
        nhifDeductions = 400;
    } else if (grossSalary <= 14999){
        nhifDeductions = 500;
    } else if (grossSalary <= 19999){
        nhifDeductions = 600;
    } else if (grossSalary <= 24999){
        nhifDeductions = 750;
    } else if (grossSalary <= 29999){
        nhifDeductions = 850;
    } else if (grossSalary <= 34999){
        nhifDeductions = 900;
    } else if (grossSalary <= 39999){
        nhifDeductions = 1000;
    }else if (grossSalary <= 44999){
        nhifDeductions = 1100;
    } else if (grossSalary <= 49999){
        nhifDeductions = 1200;
    } else if (grossSalary <= 59999){
        nhifDeductions = 1300;
    } else if (grossSalary <= 69999){
        nhifDeductions = 1400;
    } else if (grossSalary <= 79999){
        nhifDeductions = 1500 ;
    }else if (grossSalary <= 89999){
        nhifDeductions = 1600;
    }else if (grossSalary <= 99999){
        nhifDeductions = 1700;
    }else{
        nhifDeductions = 1800;
    }
    // Calculating NSSF deductions
    let nssfDeductions = grossSalary * nssfRate;

    // Calculating net salary
    let netSalary = grossSalary-PAYE-nhifDeductions-nssfDeductions;

    // After Calculating payee,NHIFDeductions,NSSFDeductions, gross salary and net salary will be displayed 
    console.log(`payee:${PAYE}`);
    console.log(`net Salary: ${netSalary}`);
    console.log(`NHIFDeductions: ${nhifDeductions}`);
    console.log (`NSSFDeductions: ${nssfDeductions}`);
    console.log(`gross salary: ${grossSalary}`);
}
