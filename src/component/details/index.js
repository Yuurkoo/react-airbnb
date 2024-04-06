import "./index.css";
import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";
import guest from "./guest.svg";
import bedroom from "./bedroom.svg";
import bed from "./bed.svg";
import bath from "./bath.svg";

export default function Details({ guests, bedrooms, beds, baths }) {
  return (
    <div>
      <Box className="details" shadow>
        <ListItem>
          <Heading>Деталі властивості:</Heading>
        </ListItem>

        <div className="details__info">
          <ListItem imageSrc={guest}>{`${guests} гості`}</ListItem>
          <ListItem imageSrc={bedroom}>{`${bedrooms} спальня`}</ListItem>
          <ListItem imageSrc={bed}>{`${beds} ліжко`}</ListItem>
          <ListItem imageSrc={bath}>{`${baths} ванна кімната`}</ListItem>
        </div>
      </Box>
    </div>
  );
}
