let myform = document.querySelector('form');
let inp1 = document.getElementById('Name');
let inp2 = document.getElementById('Employee ID');
let inp3 = document.getElementById('Department');
let inp4 = document.getElementById('Experience');
let inp5 = document.getElementById('Email Address');
let inp6 = document.getElementById('Mobile Number');
let tbody = document.querySelector('tbody');

let AllTask = [];

myform.addEventListener('submit',function(e)
{
e.preventDefault();
let Data = {};
Data.name = inp1.value;
Data.employeeID = inp2.value;
Data.department = inp3.value;
Data.exp = inp4.value;
Data.email = inp5.value;
Data.mbl = inp6.value;


AllTask.push(Data);
console.log(AllTask);
tbody.innerHTML = null;
AllTask.map((ele)=>
{
    let row = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');
    let td6 = document.createElement('td');
    td1.innerText = ele.name;
    td2.innerText = ele.employeeID;
    td3.innerText = ele.department;
    td4.innerText = ele.exp;
    td5.innerText = ele.email;
    td6.innerText = ele.mbl;

    row.append(td1,td2,t3,t4,t5,t6);
  tbody.append(row);

})
})