import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import CreditScore from "./CreditScore";
import PlatformIconList from "./PlatformIconList";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => (
  <Card>
    <Image src={getCroppedImageUrl(game.background_image)}></Image>
    <CardBody>
      <HStack justifyContent={"space-between"} marginBottom={3}>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        ></PlatformIconList>
        <CreditScore score={game.metacritic}></CreditScore>
      </HStack>
      <Heading fontSize="2xl" display="inline-block">
        {game.name} <Emoji rating={game.rating_top}></Emoji>
      </Heading>
    </CardBody>
  </Card>
);

export default GameCard;
