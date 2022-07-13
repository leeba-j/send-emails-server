const calculateBMI = (weight, height) => weight / Math.pow(height, 2);


const getBMI = (weight, height) => {
    const bodyMassIndex = calculateBMI(weight, height);
    const weightResults = getWeightResults(bodyMassIndex)

    return weightResults;
};

const getWeightResults = bmi => {
    if (bmi > 25.0) {
        return `overweight`

    } else if (bmi >= 18.0 && bmi < 24.9) {

        return `normal`
    }
    else {
        return `underweight`
    }
}

module.exports = { getBMI }