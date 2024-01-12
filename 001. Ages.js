function ages(parameter) {
    let a = parameter;
    if (a >= 0 && a <= 2) {
        console.log("baby");
    } else if (a >= 3 && a <= 13) {
        console.log(`child`)
    } else if (a >= 14 && a <= 19) {
        console.log(`teenager`);
    } else if (a >= 20 && a <= 65) {
        console.log(`adult`);
    } else if (a >= 66) {
        console.log(`elder`);
    } else {
        console.log(`out of bounds`)
    }
}
ages(20)
//0 - 2(age) – is a baby;
//3 - 13(age) – is a child;
//14 - 19(age) – is a teenager;
//20 - 65(age) – is an adult;
//>= 66(age) – is an elder;
//In all other cases print – "out of bounds";