function read(input) {
    let index = 0;
    let read = input[index];
    index++;

    while (read !== "Stop") {
        console.log(read);
        read = input[index];
        index++;

    }

}

read(["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"])
    ;