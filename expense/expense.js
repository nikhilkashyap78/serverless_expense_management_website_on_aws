let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function addExpense() {
  const title = document.getElementById("title").value;
  const amount = document.getElementById("amount").value;
  const category = document.getElementById("category").value;
  const date = document.getElementById("date").value;

  if (title && amount && category && date) {
    expenses.push({ title, amount, category, date });
    localStorage.setItem("expenses", JSON.stringify(expenses));
    renderExpenses();
  } else {
    alert("Please fill all fields!");
  }
}

function renderExpenses() {
  const tableBody = document.querySelector("#expense-table tbody");
  const totalExpenses = document.getElementById("total-expenses");
  tableBody.innerHTML = "";
  let total = 0;

  expenses.forEach((expense, index) => {
    total += parseFloat(expense.amount);
    tableBody.innerHTML += `
      <tr>
        <td>${expense.title}</td>
        <td>${expense.amount}</td>
        <td>${expense.category}</td>
        <td>${expense.date}</td>
        <td><button onclick="deleteExpense(${index})">Delete</button></td>
      </tr>
    `;
  });

  totalExpenses.textContent = total;
}

function deleteExpense(index) {
  expenses.splice(index, 1);
  localStorage.setItem("expenses", JSON.stringify(expenses));
  renderExpenses();
}

// Initialize
renderExpenses();
