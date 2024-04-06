import "./index.css";
import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";
import pool from "./pool.svg";
import gym from "./gym.svg";
import breakfast from "./breakfast.svg";
import internet from "./internet.svg";
import parking from "./parking.svg";
import pets from "./pets.svg";
import car from "./car.svg";
import service from "./service.svg";
import cleaning from "./cleaning.svg";
import child from "./child.svg";

export default function Emenities({
  hasPool,
  hasGym,
  freeBreakfast,
  freeWiFi,
  hasParking,
  petsAllowed,
  airportShuttle,
  conciergeService,
  roomService,
  childFriendly,
}) {
  return (
    <div>
      <Box className="details" shadow>
        <ListItem>
          <Heading>Зручності:</Heading>
        </ListItem>

        <div className="details__info">
          <ListItem imageSrc={pool}>{hasPool && <span>Басейн</span>}</ListItem>
          <ListItem imageSrc={gym}>
            {hasGym || <span>Спортивний зал</span>}
          </ListItem>
          <ListItem imageSrc={breakfast}>
            {freeBreakfast && <span>Безкоштовний сніданок</span>}
          </ListItem>
          <ListItem imageSrc={internet}>
            {freeWiFi && <span>Безкоштовний Wi-Fi</span>}
          </ListItem>
          <ListItem imageSrc={parking}>
            {hasParking || <span>Безкоштовний вуличний паркінг</span>}
          </ListItem>
          <ListItem imageSrc={pets}>
            {petsAllowed || (
              <span>Дозволено розміщення з домашніми тваринами</span>
            )}
          </ListItem>
          <ListItem imageSrc={car}>
            {airportShuttle && <span>Трансфер до/з аеропорту</span>}
          </ListItem>
          <ListItem imageSrc={service}>
            {conciergeService && <span>Консьєрж-сервіс</span>}
          </ListItem>
          <ListItem imageSrc={cleaning}>
            {roomService || <span>Обслуговування номерів</span>}
          </ListItem>
          <ListItem imageSrc={child}>
            {childFriendly && <span>Підходить для дітей</span>}
          </ListItem>
        </div>
      </Box>
    </div>
  );
}
