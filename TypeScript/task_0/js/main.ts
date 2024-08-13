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
}
