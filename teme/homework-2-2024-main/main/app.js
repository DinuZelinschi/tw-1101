/**
 * the function renders an object to a tagged string and performs token substitution
 * @param {object} input - a javascript object representing a hierachycal structure  
 * @param {object} values - a list of key value pairs where the key is a token to be replaced with the value in strings present in input
 */
function render(input, values) {
    if (typeof input !== 'object' || typeof values !== 'object') {
        throw new Error('InvalidType');
    }

    if (Object.keys(input).length === 0) {
        return '';
    }

    function replaceTokens(str, values) {
        return str.replace(/\${(.*?)}/g, (_, key) => values[key] || '');
    }

    function generateTags(obj) {
        let result = '';
        for (let key in obj) {
            let content;
            if (typeof obj[key] === 'object') {
                content = generateTags(obj[key]);
            } else {
                content = replaceTokens(obj[key], values);
            }
            result += `<${key}>${content}</${key}>`;
        }
        return result;
    }

    return generateTags(input);
}

module.exports = {
    render
};
