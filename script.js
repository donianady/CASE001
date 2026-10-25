const submitButton = document.getElementById("submit-deduction");

const result = document.getElementById("result");
const reasoning = document.getElementById("reasoning");

submitButton.addEventListener = ("click", function()
{const selectedSuspect = document.querySelector('input[name="suspect"]:checked');
    if(!selectedSuspect){
        result.textContent = "Please select a suspect first.";
        return;
    }
    if(reasoning.value.trim()===""){
        result.textContent = "Please explain your deduction first.";
        return;
    }
    result.textContent= "Deduction submitted. Your theory has been recorded forreview;"
});

const correctSuspect="Mariam";
if(selectedSuspect.value === correctSuspect) {
    result.textContent=
    "correct deduction! Your theory matches the evidence.";
    
}
else{
    result.textContent= "Not quite. Re-examine the evidence and try again.";
};