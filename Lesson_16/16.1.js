class Student {
    constructor(firstName, lastName, birthYear, grades = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = grades;
        this.attendance = new Array(25).fill(null);
        this.attendanceIndex = 0;
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    getAverageGrade() {
        if (this.grades.length === 0) return 0;
        const sum = this.grades.reduce((a, b) => a + b, 0);
        return sum / this.grades.length;
    }

    present() {
        if (this.attendanceIndex < 25) {
            this.attendance[this.attendanceIndex++] = true;
        } else {
            console.warn("Усі заняття вже заповнені.");
        }
    }

    absent() {
        if (this.attendanceIndex < 25) {
            this.attendance[this.attendanceIndex++] = false;
        } else {
            console.warn("Усі заняття вже заповнені.");
        }
    }

    summary() {
        const avgGrade = this.getAverageGrade();
        const valid = this.attendance.filter(val => val !== null);
        const avgAttendance = valid.length > 0
            ? valid.filter(val => val).length / valid.length
            : 0;

        if (avgGrade > 90 && avgAttendance > 0.9) {
            return "Молодець!";
        } else if (avgGrade > 90 || avgAttendance > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}


const student1 = new Student("Олег", "Шевченко", 2002, [95, 88, 92, 96]);
const student2 = new Student("Ірина", "Коваль", 2003, [72, 75, 80, 78]);
const student3 = new Student("Андрій", "Мельник", 2001, [100, 98, 95, 97]);

student1.present(); student1.present(); student1.absent();
student1.present(); student1.present();

student2.absent(); student2.present(); student2.absent();

for (let i = 0; i < 25; i++) student3.present(); // максимум

const students = [student1, student2, student3];

students.forEach(s => {
    console.log(`${s.firstName} ${s.lastName}, ${s.getAge()} років`);
    console.log("Середній бал:", s.getAverageGrade().toFixed(2));
    console.log("Оцінка:", s.summary());
    console.log("----------");
});
