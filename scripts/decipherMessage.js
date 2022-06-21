// This is the first test script for checking compatibility with `fetch github shortcut`
const code = '72101108108111328711111410810033';
const cipher = [2, 3, 3, 3, 3, 2, 2, 3, 3, 3, 3, 2];

function decipherMessage(code, cipher) {
    const decipheredParts = [];
    let currentIndex = 0;

    for (let length of cipher) {
        const extractedPiece = code.slice(currentIndex, currentIndex + length);
        const decodedPiece = String.fromCharCode(Number(extractedPiece));
        decipheredParts.push(decodedPiece);
        currentIndex += length;
    }

    const result = decipheredParts.join('');
    return result;
}

console.log(decipherMessage(code, cipher));