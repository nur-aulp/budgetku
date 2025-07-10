const backHomeBtn = document.querySelector("#budget_details button.back__home");
const budgetsPage = document.getElementById("budgets");
const budgetDetailPage = document.querySelector("#budget_details");
const budgetCards = document.querySelectorAll("#budgets .budget__card");
const addBudgetButton = document.querySelector("#budgets button");
const budgetForm = document.getElementById("budget_form");
const closeModalBudgetBtn = document.querySelector("#budget_form i");
const addSpentBtn = document.querySelector(".add__spent__btn");
const spentForm = document.getElementById("spent_form");
const closeModalSpentBtn = document.querySelector("#spent_form i");

//Klik Tombol Halaman Utama
backHomeBtn.addEventListener("click", ()=>{
    budgetDetailPage.classList.add("hidden");
    budgetsPage.classList.remove("hidden");
});

//Klik Budget Card
budgetCards.forEach((card) => {
    card.addEventListener("click", ()=>{
        budgetsPage.classList.add("hidden"); 
        budgetDetailPage.classList.remove("hidden");
    });
});

//klik Tambah Budget
addBudgetButton.addEventListener("click", ()=>{
    budgetForm.classList.remove("hidden");
});

closeModalBudgetBtn.addEventListener("click", ()=>{
    budgetForm.classList.add("hidden");
});

addSpentBtn.addEventListener("click", ()=>{
    spentForm.classList.remove("hidden");
});

closeModalSpentBtn.addEventListener("click", ()=>{
    spentForm.classList.add("hidden");
});