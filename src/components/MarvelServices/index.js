class MarverlService {
    _baseURL = 'https://gateway.marvel.com:443/v1/public';
    _apiKey = 'apikey=979d8532685bcc48bcc275ee7957736c';
    _baseLimit = 9;

    getResourses = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not Fetch ${url}, status ${res.status}`);
        }

        return await res.json();
    };

    getRandomCharacter = (id) => {
        return this.getResourses(
            `${this._baseURL}/characters/${id}?${this._apiKey}`
        );
    };

    getCharacters = (limit = this._baseLimit) => {
        return this.getResourses(
            `${this._baseURL}/characters?limit=${limit}&${this._apiKey}`
        );
    };
}

export default MarverlService;
