function isBeautifulString(s) {
    let a = [];
    for (i = 0; i < 26; i++) {
        let char = String.fromCharCode(i+97);
        let num = s.split("").filter(e => e == char).length;
        a.push(num);
    }
    for (j = 0; j < a.length - 1; j++) if (a[j] < a[j+1]) return false;
    return true;
}