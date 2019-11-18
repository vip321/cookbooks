
export default {
    get(url) {
        return fetch(url)
            .then(respon => respon.json())
            .then((result) => {
                return result;
            })
    }
}
