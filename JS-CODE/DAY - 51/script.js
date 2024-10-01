let currentIndexEdit = null;

// retrive and display on page load
document.addEventListener("DOMContentLoaded", displayRecord);

// getRecord
function getRecord() {
  const records = localStorage.getItem("records");
  return records ? JSON.parse(records) : [];
}

function displayRecord() {
  const recordList = document.getElementById("recordList");
  recordList.innerHTML = "";

  const records = getRecord();
  records.forEach((record, index) => {
    recordList.innerHTML += `
      <tr>
      <td>${record.name}</td>
      <td>${record.details}</td>
      <td>${new Date(record.date).toLocaleString()}</td>
      <td>
        <button onclick ="loadRecord(${index})">Edit</button>
        <button onclick ="deleteRecord(${index})">Delete</button>
      </td>
      </tr>
    `;
  });
}

function addRecord() {
  const nameInput = document.getElementById("name").value.trim();
  const detailsInput = document.getElementById("details").value.trim();

  if (!nameInput || !detailsInput) {
    alert("Both name and details fields are required");
    return;
  }

  const newRecord = {
    id: generateUniqueId(),
    name: nameInput,
    details: detailsInput,
    date: new Date(),
  };

  const records = getRecord();
  records.push(newRecord);
  localStorage.setItem("records", JSON.stringify(records));
  clearForm();
  displayRecord();
}

function loadRecord(index) {
  const records = getRecord();
  const record = records[index];

  document.getElementById("name").value = record.name;
  document.getElementById("details").value = record.details;

  currentIndexEdit = index;

  document.getElementById("add-button").style.display = "none";
  document.getElementById("update-button").style.display = "inline";
}

function updateRecord() {
  const records = getRecord();
  records[currentIndexEdit].name = document.getElementById("name").value.trim();
  records[currentIndexEdit].details = document
    .getElementById("details")
    .value.trim();
  records[currentIndexEdit].date = new Date();

  localStorage.setItem("records", JSON.stringify(records));
  clearForm();
  displayRecord();

  document.getElementById("add-button").style.display = "inline";
  document.getElementById("update-button").style.display = "none";
  currentIndexEdit = null;
}

function deleteRecord(index) {
  const records = getRecord();
  records.splice(index, 1);
  localStorage.setItem("records", JSON.stringify(records));
  displayRecord();
}

function searchByName() {
  const query = document.getElementById("search").value.toLowerCase();
  const records = getRecord();
  const filterData = records.filter((record) =>
    record.name.toLowerCase().includes(query)
  );

  const recordList = document.getElementById("recordList");
  recordList.innerHTML = "";

  filterData.forEach((record, index) => {
    recordList.innerHTML += `
      <tr>
      <td>${record.name}</td>
      <td>${record.details}</td>
      <td>${new Date(record.date).toLocaleString()}</td>
      <td>
        <button onclick ="loadRecord(${index})">Edit</button>
        <button onclick ="deleteRecord(${index})">Delete</button>
      </td>
      </tr>
    `;
  });
}

function generateUniqueId() {
  return Math.floor(Math.random() * Date.now());
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("details").value = "";
}
