let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}]
    }
};

function allSalaries(obj) {
    let salaries = 0;

    for (let key in obj) {
        if (Array.isArray(obj[key])) {
            salaries += obj[key].reduce((sum, person) => sum + person.salary, 0);
        } else if (typeof obj[key] === 'object') {
            salaries += allSalaries(obj[key]);
        }
    }
    return salaries;
}

console.log(allSalaries(company));