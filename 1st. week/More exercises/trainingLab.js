function trainingLab(input){
    let w = Number(input[0]);
    let h = Number(input[1]);
    let deskWidth = 0.7;
    let deskLength = 1.2;
    let corridor = 1;
    let workPlacesLost = 3;
 
    let freeSpace = h - corridor;
    let desks = Math.floor(freeSpace / deskWidth);
    let rows = Math.floor(w / deskLength);
    let workPlaces = (desks * rows) - workPlacesLost;
 
    console.log(workPlaces);
}

trainingLab(["15", "8.9"])





















