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


    getCharacterData = async (id) => {
        const
            characterAllData = await this.getResource(`character/${id}`),
            episodesID = characterAllData.episode.map((link) => {
                return link.slice(40)
            }),
            episodeData = await Promise.all(episodesID.map(async (id) => {
                return (await this.getEpisodeData(id)).description[0]
            })),
            characterData = {
                description: [this._transFormCharacterDescriptionData(characterAllData)],
                location: {
                    name: characterAllData.location.name,
                    id: characterAllData.location.url.slice(41)
                },
                episodes: episodeData
            }

        return characterData

    }



    getCharacterDescriptionData = async (id) => {
        const res = await this.getResource(`character/${id}`);
        return this._transFormCharacterDescriptionData(res)
    }

    getCharactersDataList = async (allCharacterID) => {
        if (!allCharacterID) {
            return
        }
        const res = await this.getResource(`character/${allCharacterID}`);
        const charactersData = res.map(this._transFormCharacterDescriptionData);
        return charactersData
    }

    getAllEpisodesData = async () => {

        const
            res = await this.getResource(`episode`),
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

    getEpisodeData = async (id) => {
        const
            res = await this.getResource(`episode/${id}`),
            allCharacterID = this._transFormCharacterID(res.characters),
            data = [res],
            episodeData = {
                description: data.map(this._transFormEpisodesData),
                characters: allCharacterID
            }
        return episodeData
    }

    getLocationData = async (id) => {
        const
            location = await this.getResource(`location/${id}`),
            locationData = {
                description: {
                    name: location.name,
                    id: location.url.slice(40),
                    type: location.type
                },
                allCharacterID: this._transFormCharacterID(location.residents)
            }
        return locationData
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

    _transFormCharacterID = (idList) => {
        return idList.map((link) => {
            return link.slice(42)
        }).join()
    }


    _transFormCharacterDescriptionData = (character) => {
        return {
            name: character.name,
            id: character.id,
            species: character.species
        }
    }

}