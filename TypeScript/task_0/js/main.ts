// Write an interface named Student

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Cathy',
    lastName: 'Augustin',
    age: 30,
    location: 'Toulouse',
};

const student2: Student = {
    firstName: 'Oscar',
    lastName: 'Pruvot',
    age: 20,
    location: 'Lille',
};

// Store student in an array
const studentsList: Student[] = [student1, student2];

// Render table
const renderTable = (students: Student[]) => {
    const table = document.createElement("table");

// Add table header
const thead = table.createTHead();
const headerRow = thead.insertRow();
const header1 = document.createElement("th");
const header2 = document.createElement("th");
header1.textContent = "First Name";
header2.textContent = "Location";
headerRow.appendChild(header1);
headerRow.appendChild(header2);

// Add table body
const tbody = table.createTBody();
students.forEach((student) => {
    const row = tbody.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});

// Append table to the document body
document.body.appendChild(table);
};

// Call renderTable function with studentsList
renderTable(studentsList);