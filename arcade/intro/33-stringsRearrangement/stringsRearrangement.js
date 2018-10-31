function stringsRearrangement(a) {   
    let links = 0;
    let ends = 0;
    for (let i in a) {
        let connections = 0;
        
        for (let j in a) {
            let count = 0;
            for (let k in a[0]) if (a[i][k] === a[j][k]) count++;
            if (count === a[0].length - 1) connections++;
        }
        console.log(a[i], connections)
        if (connections === 0) return false;
        else if (connections === 1) ends++;
        else if (connections === 2) links++;
    }
    console.log(links, ends)
    if (ends === 1 && links > 2) return false;
    return ends <= 2;
}
