document.addEventListener("DOMContentLoaded", function () {
    // we configure our axios instance to target our currency converter backend
    const axiosInstance = axios.create({
        baseURL: 'http://localhost:8080',
        timeout: 1000,
    });

    function getSelectedItem(selectTagId) {
        let availableOptions = document.getElementById(selectTagId).options;
        let selectedIndex = document.getElementById(selectTagId).selectedIndex;
        return availableOptions[selectedIndex].value;
    }

    function displayResult(value) {
        document.getElementById("result").getElementsByTagName("input")[0].value = value;
    }

    function formSubmitted() {
        let selectedSource = getSelectedItem("source");
        let selectedTarget = getSelectedItem("target");
        let amount = document.getElementById("amount").value;
        console.log(selectedSource);
        console.log(selectedTarget);
        console.log(amount);
        // let's do a shortcut here if our source and target are the same
        if (selectedSource === selectedTarget) {
            displayResult(amount);
        } else {
            axiosInstance.get('/convert', { 
                params: { 
                    source: selectedSource, 
                    target: selectedTarget, 
                    amount: amount 
                } 
            }).then(function(response) {
                console.log(response);
                displayResult(response.data.value);
            }).catch(function(error) {
                console.log(error);
                displayResult(error.response.data.message);
            });
        }
    }
    document.getElementById("submit").addEventListener("click", formSubmitted);
    // prevent the submit action on the form from refreshing the page
    document.getElementById("inputForm").addEventListener("submit", function (e) { e.preventDefault() });
});
