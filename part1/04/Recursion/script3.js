import {folder, company} from './state.js';

function hasFile(title, root) {
    if(root.files) {
        for(const file of root.files) {
            if(file === title) return true;
        }
    }

    if(root.folders) {
        for(const directory of root.folders) {
            if(hasFile(title, directory)) return true;
        }
    }

    return false;
}

function getPath(fileName, rootFolder) {
    if(rootFolder.files) {
        for(const file of rootFolder.files) {
            if(file === fileName) {
                return `${rootFolder.name}\\${file}`;
            }
        }
    }

    if(rootFolder.folders) {
        for(const folder of rootFolder.folders) {
            const path = getPath(fileName, folder);

            if(path) {
                return rootFolder.name + "\\" + path;
            }
        }
    }

    return null;
}

function getEmployee(name, company) {
    if(company.name === name) return company;

    if(company.employees) {
        for(const employee of company.employees) {
            if(employee.name === name) {
                return employee;
            } else {
                const worker = getEmployee(name, employee);
                if(worker) return worker;
            }
        }
    }

    return null;
}

function countEmployees(company) {
    let count = 0;

    for(const item in company) {
        if(item === "name") count++;

        if(item === "employees") {
            for(const employee of company[item]) {
                count += countEmployees(employee);
            }
        }

    }

    return count;
}

// console.log(getEmployee("Backend Lead", company));
// console.log(getEmployee("Node.js Developer", company));
// console.log(getEmployee("Intern", company));
// console.log(getEmployee("Frontend Lead", company));

console.log(countEmployees(company));
