function rot13() {
    let bukva = '';
    let input_text = document.getElementById("input_text");
    let output_text = document.getElementById("output_text");
    let words = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let strong_words = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    output_text.innerHTML = '';

    for (let i = 0; i < input_text.value.length; i++) {
        bukva = input_text.value[i];
        if (words.includes(bukva)) {
            for (let j = 0; j < words.length; j++) {
                if (bukva === words[j]) {
                    bukva = words[(j + 13) % 26];
                    break;
                }
            }
        }
        else if (strong_words.includes(bukva)) {
            for (let j = 0; j < strong_words.length; j++) {
                if (bukva === strong_words[j]) {
                    bukva = strong_words[(j + 13) % 26];
                    break;
                }
            }
        }
        output_text.innerHTML += bukva;
    }
}