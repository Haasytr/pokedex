import { Box, Card, Container, Content, Header, Main } from "@/styles/pages";
import Image from "next/image";

export default function Home() {
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
            <Card>
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" alt="" />
                <Content>
                    <span>N 001</span>
                    <strong>Bulbasaur</strong>
                </Content>
            </Card>
            <Card>
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" alt="" />
                <Content>
                    <span>N 001</span>
                    <strong>Bulbasaur</strong>
                </Content>
            </Card>
            <Card>
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" alt="" />
                <Content>
                    <span>N 001</span>
                    <strong>Bulbasaur</strong>
                </Content>
            </Card>
        </Main>
    </Container>
  );
}
