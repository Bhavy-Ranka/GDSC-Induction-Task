function toggleData(id) {
    let data = document.getElementById(id);
    if (data.style.display === "none" || data.style.display === "") {
        data.style.display = "block";  // Show the element
    } else {
        data.style.display = "none";   // Hide the element
    }
    
}

// Toggle tick or cross on click
function toggleMark(cell) {
    if (cell.innerText === "❌") {
        cell.innerText = "✔️";
    } else {
        cell.innerText = "❌";
    }
    updateCount(cell.parentNode);
}

// Count ✔️ marks for streak calculation
function updateCount(row) {
    let count = 0;
    let cells = row.getElementsByTagName("td");
    for (let i = 1; i <= 30; i++) {
        if (cells[i].innerText === "✔️") {
            count++;
        }
    }
    row.getElementsByClassName("count")[0].innerText = count;
}

// Add new activity row
function addActivity(month) {
    let activityName = document.getElementById(month + "-activity").value.trim();
    if (activityName === "") return; // Ignore empty input

    let table = document.getElementById(month + "-table");
    let row = document.createElement("tr");

    // Activity Name Cell
    let nameCell = document.createElement("td");
    nameCell.innerText = activityName;
    row.appendChild(nameCell);
 
    if (month === "feb"){
        for (let i = 1; i <= 28; i++) {
            let dayCell = document.createElement("td");
            dayCell.innerText = "❌"; // Default state
            dayCell.onclick = function () { toggleMark(dayCell); };
            row.appendChild(dayCell);  
    }}
    else if(month==="jan"||month==="march"||month==="may"||month==="july"||month==="aug"||month==="oct"||month==="dec"){
    for (let i = 1; i <= 31; i++) {
        let dayCell = document.createElement("td");
        dayCell.innerText = "❌"; // Default state
        dayCell.onclick = function () { toggleMark(dayCell); };
        row.appendChild(dayCell);
    }}
    else if(month==="april"||month==="june"||month==="sept"){
        for (let i = 1; i <= 31; i++) {
            let dayCell = document.createElement("td");
            dayCell.innerText = "❌"; // Default state
            dayCell.onclick = function () { toggleMark(dayCell); };
            row.appendChild(dayCell);
        }}

    // Streak Count Column
    let countCell = document.createElement("td");
    countCell.classList.add("count");
    countCell.innerText = "0";
    row.appendChild(countCell);

    // Delete Button Column
    let deleteCell = document.createElement("td");
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "🗑️";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function () { deleteActivity(deleteBtn); };
    deleteCell.appendChild(deleteBtn);
    row.appendChild(deleteCell);

    table.appendChild(row); // Append row to table
    document.getElementById(month + "-activity").value = ""; // Clear input field
}

// Delete activity row
function deleteActivity(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
