export default function parse(data = '') {
    if (data.startsWith('=')) {
        try {
            return eval(data.slice(1));
        } catch (e) {
            return data;
        }
    }
    return data;
}