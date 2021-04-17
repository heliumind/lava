
function generateExample(text, response){
    const pretext = 'Lese diesen Zeitungsartikel und beantworte die folgenden Fragen:\n\n"""\n'
    const posttext = '\n"""\n\nFrage:\n1. Was könnte eine Schlagzeile für diesen Zeitungsartikel sein?\n2. Was könnte eine Zusammenfassung für einen Tweet sein?\n3. Wie könnten mögliche Hashtags lauten?\n'
    var prompt = pretext + text + posttext + response;
    //console.log(prompt);
    return prompt;
}

function generatePrompt(text){
    const pretext = 'Lese diesen Zeitungsartikel und beantworte die folgenden Fragen:\n\n"""\n'
    const posttext = '\n"""\n\nFrage:\n1. Was könnte eine Schlagzeile für diesen Zeitungsartikel sein?\n2. Was könnte eine Zusammenfassung für einen Tweet sein?\n3. Wie könnten mögliche Hashtags lauten?\n'
    var prompt = pretext + text + posttext;
    //console.log(prompt);
    return prompt;
}

export {generatePrompt, generateExample};