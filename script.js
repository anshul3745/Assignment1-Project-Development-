function submitForm() {
  //getting user input from form tag and storing it in variables
  let userName = document.getElementById("aw_name").value;
  let userPhone = document.getElementById("aw_phone").value;
  let userEmail = document.getElementById("aw_email").value;
  let userEmploymentIncome = document.getElementById(
    "aw_employmentIncome"
  ).value;
  let userOtherIncome = document.getElementById("aw_otherIncome").value;
  let userTaxesPaid = document.getElementById("aw_taxesPaid").value;
  // converting the user input from string to an integer
  userEmploymentIncome = parseInt(userEmploymentIncome);
  userOtherIncome = parseInt(userOtherIncome);
  userTaxesPaid = parseInt(userTaxesPaid);
  //regex for Phone number
  const phoneNumberRegex =
    /^[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;
  //Validations for Name,Phone,Email,Employment Income, Other Income, Taxes paid
  let errors = "";
  if (userName === "") {
    errors += "Please Enter a valid Name <br>";
  }
  if (!phoneNumberRegex.test(userPhone)) {
    errors += "Please enter a valid Phone Number <br>";
  }
  if (userEmail === "") {
    errors += "Please Enter a valid Email <br>";
  }
  if (userEmploymentIncome < 0 || typeof userEmploymentIncome == "float") {
    errors += "Please enter a whole number value for Employment Income <br>";
  }
  if (userOtherIncome < 0 || typeof userOtherIncome == "float") {
    errors += "Please enter a whole number value for Other Income <br>";
  }
  if (userTaxesPaid < 0 || typeof userTaxesPaid == "float") {
    errors += "Please enter a whole number value for Income taxes paid<br>";
  }
  //to display the errors
  if (errors !== "") {
    document.getElementById("errors").innerHTML = errors;
    //display output if there are no errors
  } else {
    //to clear the errors
    document.getElementById("errors").innerHTML = "";
    // to calculate all the taxes
    let myOutput = "";
    let totalIncome = userEmploymentIncome + userOtherIncome;
    let totalIncomeTax = 0;
    if (totalIncome < 60000) {
      totalIncomeTax = 0.2 * totalIncome;
    } else if (totalIncome >= 60000 && totalIncome <= 90000) {
      totalIncomeTax = 0.25 * totalIncome;
    } else if (totalIncome > 90000) {
      totalIncomeTax = 0.34 * totalIncome;
    }
    let totalIncomeTaxPayable = totalIncomeTax - userTaxesPaid;
    // to display output
    myOutput += `<table class ="resultTable">
        <tr>
          <td>Name:</td>
          <td>${userName}</td>
        </tr>
        <tr>
          <td>Phone:</td>
          <td>${userPhone}</td>
        </tr>
        <tr>
          <td>Email:</td>
          <td>${userEmail}</td>
        </tr>
        <tr>
          <td>Total Income:</td>
          <td>$${totalIncome}</td>
        </tr>
        <tr>
          <td>Total Income Tax:</td>
          <td>$${totalIncomeTax}</td>
        </tr>
        <tr>
          <td>Income Taxes Paid:</td>
          <td>$${userTaxesPaid}</td>
        </tr>
        <tr>
          <td>Income taxes Payable:</td>
          <td>$${totalIncomeTaxPayable}</td>
        </tr>
        </table>`;
    document.getElementById("result").innerHTML = myOutput;
  }
  return false;
}
