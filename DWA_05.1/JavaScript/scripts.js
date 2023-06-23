// scripts.js

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

    //Validation when are missing
    if (dividend === "" || divider === ""){ 
        result.innerText = 'Calculation not performed. Both text box require value. Try again';
    }
    
    //An invalid division should log an error in the console
    else if(dividend < 0 || divider < 0){
        result.innerHTML = 'Division not performed. Invalid number provided. Try again';
        console.log();
    }

    //Providing anything that is not a number shoud crash the program  
    else if (isNaN(dividend) || isNaN(divider)) {
        console.error(
        new Error('Something critical went wrong. Please reload the page.'));
        document.body.innerHTML = '<h1>Something critical went wrong. Please reload the page.</h1>';

    }

    //Dividing numbers result in a decimal number
    else{
    result.innerText = Math.floor(dividend / divider);
    }
});
