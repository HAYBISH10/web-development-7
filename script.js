// ==========================================
// EXPENSE TRACKER - WEEK 7
// Arrays, Objects, Functions, DOM & Events
// ==========================================


// ==========================================
// PART 1: STORE EXPENSES AS AN ARRAY OF OBJECTS
// ==========================================

let expenses = [
    {
        name: "Rent",
        amount: 150,
        category: "Rent"
    },

    {
        name: "Food",
        amount: 85,
        category: "Food"
    },

    {
        name: "Transport",
        amount: 60,
        category: "Transport"
    },

    {
        name: "Internet",
        amount: 120,
        category: "Internet"
    },

    {
        name: "Entertainment",
        amount: 75,
        category: "Entertainment"
    },

    {
        name: "Utilities",
        amount: 155,
        category: "Utilities"
    }
];


// ==========================================
// PART 2: CALCULATE TOTAL EXPENSES
// ==========================================

function calculateTotal() {

    let total = 0;

    for (let expense of expenses) {

        total = total + Number(expense.amount);

    }

    // Math.round formats the result to 2 decimal places
    let formattedTotal = Math.round((total + Number.EPSILON) * 100) / 100;

    return formattedTotal;
}


// ==========================================
// PART 3: RENDER EXPENSES TO THE DOM
// ==========================================

function renderExpenses() {

    // Get the table body
    const tableBody = document.getElementById("expenseTableBody");

    // Clear existing table rows
    tableBody.innerHTML = "";

    // Loop through the expenses array
    for (let expense of expenses) {

        // Create a new table row
        const row = document.createElement("tr");

        // Create expense name cell
        const nameCell = document.createElement("td");
        nameCell.textContent = expense.name;

        // Create amount cell
        const amountCell = document.createElement("td");
        amountCell.textContent = "$" + Number(expense.amount).toFixed(2);

        // Create category cell
        const categoryCell = document.createElement("td");
        categoryCell.textContent = expense.category;

        // Add cells to the row
        row.appendChild(nameCell);
        row.appendChild(amountCell);
        row.appendChild(categoryCell);

        // Add row to the table
        tableBody.appendChild(row);
    }

    // Update total on the page
    const totalElement = document.getElementById("totalExpenses");

    totalElement.textContent = "$" + calculateTotal().toFixed(2);
}


// ==========================================
// PART 4: ADD EXPENSE USING AN EVENT
// ==========================================

// Get the Add Expense button
const addExpenseButton = document.getElementById("addExpenseBtn");


// Add click event listener
addExpenseButton.addEventListener("click", function () {

    // Read values from the form
    const nameInput = document.getElementById("expenseName");
    const amountInput = document.getElementById("expenseAmount");
    const categoryInput = document.getElementById("expenseCategory");

    const name = nameInput.value.trim();
    const amount = Number(amountInput.value);
    const category = categoryInput.value;


    // Validate the input
    if (name === "") {

        alert("Please enter an expense name.");
        return;

    }

    if (amount <= 0 || isNaN(amount)) {

        alert("Please enter a valid expense amount.");
        return;

    }


    // Create a new expense object
    const newExpense = {
        name: name,
        amount: amount,
        category: category
    };


    // Add the new object to the expenses array
    expenses.push(newExpense);


    // Re-render the table
    renderExpenses();


    // Clear the form
    nameInput.value = "";
    amountInput.value = "";

    // Return focus to the name field
    nameInput.focus();

});


// ==========================================
// INITIAL PAGE LOAD
// ==========================================

// Display existing expenses when page loads
renderExpenses();