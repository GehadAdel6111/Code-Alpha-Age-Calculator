function calculateAge() {
    event.preventDefault();
    // Get the input values
    let date1 = document.getElementById('date1').value;

    // Set date2 to the current date in YYYY-MM-DD format
    let today = new Date();
    let year = today.getFullYear();
    let month = String(today.getMonth() + 1).padStart(2, '0'); // Add leading zero for single-digit months
    let day = String(today.getDate()).padStart(2, '0'); // Add leading zero for single-digit days
    let date2 = `${year}-${month}-${day}`;
    // Set the value of the date2 input field
    document.getElementById('date2').value = date2;

    // Convert the input values to Date objects
    let birthDate = new Date(date1);
    let currentDate = new Date(date2);

    // Calculate the difference in years
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    let monthDiff = currentDate.getMonth() - birthDate.getMonth();
    let dayDiff = currentDate.getDate() - birthDate.getDate();

    // Adjust the age if the birth date has not occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    // Adjust the month difference if necessary
    if (monthDiff < 0) {
        monthDiff += 12;
    }

    // Adjust the day difference if necessary
    if (dayDiff < 0) {
        let lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        dayDiff += lastMonth.getDate();
        monthDiff--;
        if (monthDiff < 0) {
            monthDiff += 12;
            age--;
        }
    }

  // Display the result in the custom alert
    let resultText = `Age: ${age} years and ${monthDiff} Months and ${dayDiff} Days`;
    document.getElementById('alert-content').innerText = resultText;
    document.getElementById('alert').classList.remove('hidden');
}
function setDate2() {
    // Set date2 to the current date in YYYY-MM-DD format
    let today = new Date();
    let year = today.getFullYear();
    let month = String(today.getMonth() + 1).padStart(2, '0'); // Add leading zero for single-digit months
    let day = String(today.getDate()).padStart(2, '0'); // Add leading zero for single-digit days
    let date2 = `${year}-${month}-${day}`;

    // Set the value of the date2 input field
    document.getElementById('date2').value = date2;
}

function closeAlert() {
    document.getElementById('alert').classList.add('hidden');
}
