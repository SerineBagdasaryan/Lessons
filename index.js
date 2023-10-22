var Professions;
(function (Professions) {
    Professions["Ceo"] = "Ceo";
    Professions["PM"] = "Pm";
    Professions["Developer"] = "Developer";
})(Professions || (Professions = {}));
var Company = /** @class */ (function () {
    function Company(name) {
        this.projects = [];
        this.employees = [];
        this.name = name;
    }
    Company.prototype.createEmployee = function (ceoData) {
        return new Ceo(ceoData.userName, ceoData.age);
    };
    Company.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Company.prototype.addProject = function (project) {
        this.projects.push(project);
    };
    Company.prototype.getCompanyName = function () {
        return this.name;
    };
    return Company;
}());
var Ceo = /** @class */ (function () {
    function Ceo(userName, age) {
        this.profession = Professions.Ceo;
        this.userName = userName;
        this.age = age;
    }
    Ceo.prototype.getUserName = function () {
        return this.userName;
    };
    Ceo.prototype.getAge = function () {
        return this.age;
    };
    Ceo.prototype.createProject = function (name) {
        return new Project(name);
    };
    Ceo.prototype.createEmployee = function (pmData) {
        return new ProjectManager(pmData.userName, pmData.age);
    };
    return Ceo;
}());
var ProjectManager = /** @class */ (function () {
    function ProjectManager(userName, age) {
        this.profession = Professions.PM;
        this.userName = userName;
        this.age = age;
    }
    ProjectManager.prototype.createEmployee = function (developerData) {
        return new Developer(developerData.userName, developerData.age);
    };
    ProjectManager.prototype.createProject = function (name) {
        return new Project(name);
    };
    ProjectManager.prototype.addDeveloperToProject = function (project, developer) {
        project.addDeveloper(developer);
    };
    return ProjectManager;
}());
var Developer = /** @class */ (function () {
    function Developer(userName, age) {
        this.profession = Professions.Developer;
        this.userName = userName;
        this.age = age;
    }
    return Developer;
}());
var Project = /** @class */ (function () {
    function Project(name) {
        this.developers = [];
        this.name = name;
    }
    Project.prototype.getName = function () {
        return this.name;
    };
    Project.prototype.addDeveloper = function (developer) {
        if (developer instanceof Developer) {
            this.developers.push(developer);
        }
    };
    return Project;
}());
var company = new Company('IT');
var ceo = company.createEmployee({
    userName: "SSEo",
    age: 12,
});
company.addEmployee(ceo);
var pm = ceo.createEmployee({
    userName: "X",
    age: 15
});
company.addEmployee(pm);
var dev = pm.createEmployee({
    userName: "ZZ",
    age: 16
});
company.addEmployee(dev);
var project = pm.createProject("MatchStat");
company.addProject(project);
pm.addDeveloperToProject(project, dev);
console.log(company);
