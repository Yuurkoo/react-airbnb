import "./index.css";
import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

export default function Attraction({ nearbyAttractions }) {
  return (
    <div>
      <Box>
        <ListItem>
          <Heading>Пам'ятки поблизу</Heading>
        </ListItem>

        <duv className="item">
          {nearbyAttractions.map((attraction) => (
            <ListItem key={attraction.id}>
              <a className="item-det" href={attraction.link}>
                {attraction.name}
              </a>
            </ListItem>
          ))}
        </duv>
      </Box>
    </div>
  );
}
