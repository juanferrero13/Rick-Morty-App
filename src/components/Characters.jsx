
export const Characters = (props) => {
    const { characters, setCharacters } = props

    const resetCharacters = () => {
        setCharacters(null)
    }
    return (
        <section className="characters">
            <h2>Personajes</h2>
            <p className="back-home" onClick={resetCharacters}>Volver al home</p>
            <div className="container-characters">
                {characters.map((character) => (
                    <div className="character-container" key={character.id}>
                        <div>
                            <img src={character.image} alt={character.name} />
                        </div>
                        <div>
                            <h3>{character.name}</h3>
                            <h6>{character.status === "Alive" ? (
                                <>
                                    <span className="alive" />
                                    Alive
                                </>
                            ) : (
                                <>
                                    <span className="dead" />
                                    Dead
                                </>
                            )}</h6>
                            <p>
                                <span className="text-grey">Especie: </span>
                                <span>{character.species}</span>
                            </p>
                            <p>
                                <span className="text-grey">Género: </span>
                                <span>{character.gender}</span>
                            </p>
                            <p>
                                <span className="text-grey">Episodios: </span>
                                <span>{character.episode.length}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <p className="back-home" onClick={resetCharacters}>Volver al home</p>
        </section>
    )
}
