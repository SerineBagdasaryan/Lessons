let colors: string[] = ["red", "yellow", "blue", "black"];

function printRandomColors(colors: string[]): string[] {

    let randomColors: string[] = [];

    while(colors.length) {
        const randomIndex = Math.floor(Math.random() * colors.length);
        const color = colors.splice(randomIndex, 1)[0];
        randomColors.push(color);
    }
    return randomColors;
}

console.log(printRandomColors(colors));