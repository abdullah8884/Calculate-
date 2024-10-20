document.getElementById('absenceForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const employees = parseInt(document.getElementById('employees').value);
    const absentHours = parseInt(document.getElementById('absentHours').value);
    
    const workingHoursPerDay = 7;
    const workingDaysPerMonth = 20;
    
    const totalExpectedHours = employees * workingHoursPerDay * workingDaysPerMonth;
    const absenteeRate = (absentHours / totalExpectedHours) * 100;
    
    document.getElementById('result').textContent = `نسبة الغياب الشهرية: ${absenteeRate.toFixed(2)}%`;
});
