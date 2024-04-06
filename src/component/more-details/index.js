import "./index.css";
import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

export default function MoreDetails({
  houseRuls,
  policy,
  transportstion,
  languages,
  offers,
  instructions,
}) {
  return (
    <div>
      <Box className="details" shadow>
        <ListItem>
          <Heading border>Додаткові властивості</Heading>
        </ListItem>

        <div className="details__info">
          <ListItem title="Правила дому">${houseRuls}</ListItem>
          <ListItem title="Політика скасування">{policy}</ListItem>
          <ListItem title="Місцевий транспорт">{transportstion}</ListItem>
          <ListItem title="Мови хоста">{languages}</ListItem>
          <ListItem title="Спеціальні пропозиції">{offers}</ListItem>
          <ListItem title="Інструкції щодо реєстрації">{instructions}</ListItem>
        </div>
      </Box>
    </div>
  );
}
