
const submitButton = document.getElementById("submit-deduction");
const result = document.getElementById("result");
const reasoning = document.getElementById("reasoning");

const correctSuspect = "Mariam";

submitButton.addEventListener("click", function () {

    const selectedSuspect = document.querySelector('input[name="suspect"]:checked');

    if (!selectedSuspect) {
        result.textContent = "Please select a suspect first.";
        return;
    }

    if (reasoning.value.trim() === "") {
        result.textContent = "Please explain your deduction first.";
        return;
    }

    if (selectedSuspect.value === correctSuspect) {
        result.textContent = "Correct deduction! Your theory matches the evidence.";
    } else {
        result.textContent = "Not quite. Re-examine the evidence and try again.";
    }

});
