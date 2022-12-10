function clock(input) {
    for (let h = 0; h <= 23; h++) {
        for (let mins = 0; mins <= 59; mins++) {
            console.log(`${h}:${mins}`);
        }
    }
}


clock();