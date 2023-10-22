var data = [
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
            stack: [{ name: "Node JS" }, { name: "React JS" }, { name: undefined }]
        }
    }
];
function deleteUndefinedAndNull(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }
    var newData = {};
    for (var key in obj) {
        var value = deleteUndefinedAndNull(obj[key]);
        console.log(77, value);
        if (value !== null && value !== undefined) {
            newData[key] = value;
        }
    }
    return newData;
}
console.log(deleteUndefinedAndNull(data));
