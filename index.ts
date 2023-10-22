enum Professions {
    Ceo = "Ceo",
    PM = "Pm",
    Developer = "Developer"
}

interface IHuman {
    userName: string;
    age: number;
}

interface ICreateProjects {
    createProject(name: string): Project;
}

interface ICreateEmployee {
    createEmployee(employee: IHuman): IHuman;
}

class Company implements ICreateEmployee {
    private readonly name!: string;
    private projects: Project[] = [];
    private employees: IHuman[] = [];

    createEmployee(ceoData: IHuman): Ceo {
        return new Ceo(ceoData.userName, ceoData.age);
    }

    constructor(name: string) {
        this.name = name;
    }


    addEmployee(employee: IHuman): void {
        this.employees.push(employee);
    }

    addProject(project: Project): void {
        this.projects.push(project);
    }
    getCompanyName(): string {
        return this.name;
    }
}

class Ceo implements IHuman, ICreateProjects, ICreateEmployee {
    userName!: string;
    profession: Professions = Professions.Ceo;
    age!: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    }

    getUserName(): string {
        return this.userName;
    }

    getAge(): number {
        return this.age;
    }

    createProject(name: string): Project {
        return new Project(name);
    }

    createEmployee(pmData: IHuman): ProjectManager {
        return  new ProjectManager(pmData.userName, pmData.age);
    }
}

class ProjectManager implements IHuman, ICreateEmployee {
    userName!: string;
    profession: Professions = Professions.PM;
    age!: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    }

    createEmployee(developerData: IHuman): IHuman {
        return  new Developer(developerData.userName, developerData.age);
    }

    createProject(name: string): Project {
        return new Project(name);
    }

    addDeveloperToProject(project: Project, developer: IHuman): void {
        project.addDeveloper(developer);
    }
}

class Developer implements IHuman {
    userName!: string;
    profession: Professions = Professions.Developer;
    age!: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    }
}

class Project {
    private readonly name: string;
    public developers: Developer[] = [];

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    addDeveloper(developer: IHuman) {
        if (developer instanceof Developer) {
            this.developers.push(developer);
        }
    }
}

const company = new Company('IT');

const ceo = company.createEmployee({
    userName: "SSEo",
    age: 12,
});
company.addEmployee(ceo);

const pm = ceo.createEmployee({
    userName: "X",
    age: 15
});
company.addEmployee(pm);

const dev = pm.createEmployee({
    userName: "ZZ",
    age: 16
});
company.addEmployee(dev);

const project = pm.createProject("MatchStat");
company.addProject(project)

pm.addDeveloperToProject(project, dev);

console.log(company);