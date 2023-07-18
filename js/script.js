document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    var gender = document.getElementById('gender').value;

    // Validate input
    if (isNaN(weight) || isNaN(height) || gender === '') {
        alert('Please fill in all fields with valid values.');
        return;
    }

    // Calculate BMI
    var bmi = weight / ((height/100) ** 2);

    // Determine BMI category based on gender
    var category = '';
    if (gender === 'male') {
        if (bmi < 18.5) {
            category = 'Kekurangan Berat Badan';
        } else if (bmi < 25) {
            category = 'Normal (ideal)';
        } else if (bmi < 30) {
            category = 'Kelebihan Berat Badan';
        } else {
            category = 'Obesitas';
        }
    } else if (gender === 'female') {
        if (bmi < 18.5) {
            category = 'Kekurangan Berat Badan';
        } else if (bmi < 24.9) {
            category = 'Normal (ideal)';
        } else if (bmi < 29.9) {
            category = 'Kelebihan Berat Badan';
        } else {
            category = 'Obesitas';
        }
    }

    // Display result
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = 'Your BMI is: ' + bmi.toFixed(2) + ' kg/m²' + '<br>';
    resultElement.innerHTML += 'Category: ' + category;
});
