function isAnagram(s: string, t: string): boolean {

    const firstLength = s.length;
    const secondLength = t.length;

    if(firstLength !== secondLength) return false;

    const a = new Array(26).fill(0);

    for(let i=0;i<firstLength;i++){
        const indexS = s.charCodeAt(i) - 'a'.charCodeAt(0);
        const indexT = t.charCodeAt(i) - 'a'.charCodeAt(0);


        a[indexS]++;
        a[indexT]--;
    }

     for(let i=0;i<26;i++){
        if(a[i] !== 0) return false;
     }
    return true;
};