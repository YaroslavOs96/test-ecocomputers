export default class RickAndMortyData {
    constructor() {
        this._apiBase = 'https://rickandmortyapi.com/api/'
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`)
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, recivied ${res.status}`)
        }
        return await res.json();
    }

    getAllEpisodesData = async () => {

        const res = await this.getResource(`episode`),
            pageNumbers = res.info.pages;
        let data = res.results.map(this._transFormEpisodesData)

        for (let i = 2; i <= pageNumbers; i++) {
            const res = await this.getResource(`episode?page=${i}`)
            data = data.concat(res.results.map(this._transFormEpisodesData));
        }

        const allEpisodesData = []

        data.forEach(function (episode) {
            if (allEpisodesData[episode.seasonNumber - 1]) {
                allEpisodesData[episode.seasonNumber - 1].push(episode)
                return
            }
            allEpisodesData[episode.seasonNumber - 1] = [episode]
        });

        return allEpisodesData
    }

    _transFormEpisodesData = (episode) => {

        return {
            name: episode.name,
            id: episode.id,
            created: episode.air_date,
            seasonNumber: +episode.episode.slice(1, episode.episode.indexOf('E')),
            episodeInSeasonNumber: +episode.episode.slice(episode.episode.indexOf('E') + 1),
        }
    }

}