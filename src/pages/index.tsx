import { Box, Card, Container, Content, Header, Main } from "@/styles/pages";
import axios from "axios";
import { GetStaticProps } from "next";


interface pokemonProps {
    pokemons: {
        name: string;
        url: string;
    }[]
}

export default function Home({pokemons}: pokemonProps) {
  return (
    <Container>
        <Header>
            <h1>Pokedex</h1>
            <form>
                <Box>
                    <label>Type</label>
                    <select>
                        <option value="">Fire</option>
                    </select>
                </Box>
                <Box>
                    <label>Search by name</label>
                    <input type="text" />
                </Box>
            </form>
        </Header>
        <Main>
            {pokemons.map(pokemon => (
                <Card>
                    <Content>
                        <strong>{pokemon.name}</strong>
                    </Content>
                </Card>
            ))}
        </Main>
    </Container>
  );
}


export const getStaticProps: GetStaticProps = async () => {
    const response = await axios.get("http://localhost:3000/api/searchPokemon")

    const pokemons = response.data.results
    
    return {
        props: {
            pokemons,
        },
        revalidate: 60 * 60 * 2
    }
}