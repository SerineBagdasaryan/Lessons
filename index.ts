interface IUser {
    firstName: string;
    lastName: string;
    age?: number | null;
    profession?: {
        name: string;
        level: string;
        stack: IStack[];
    };
}


interface IStack {
    name: string | undefined
}


const data: IUser[] = [
    {
        firstName: "Karen",
        lastName: "Karapetyan",
        age: null
    },
    {
        firstName: "Karen",
        lastName: "Karapetyan",
        age: 18,
        profession: undefined
    },
    {
        firstName: "Vardan",
        lastName: "Vardanyan",
        age: 18,
        profession: {
            name: "Programmer",
            level: "Middle",
            stack: [{ name: "Node JS" }, { name: "React JS" },{ name: undefined }]
        }
    }
];

function deleteUndefinedAndNull<T>(obj: T): T {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }
    const newData = {} as T;
    for (const key in obj) {
        const value = deleteUndefinedAndNull(obj[key]);
        if (value !== null && value !== undefined) {
            newData[key] = value;
        }
    }

    return newData;
}

console.log(deleteUndefinedAndNull(data))