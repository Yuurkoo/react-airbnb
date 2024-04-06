import "./index.css";
import Heading from "../heading";
import { Fragment } from "react";
import Box from "../box";

export default function Feedback({ list }) {
  return (
    <div className="room__block">
      <Heading border>Відгуки клієнтів</Heading>
      <div className="room__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ guestName, rating, review }) {
  return (
    <Box>
      <div className="item-block">
        <span className="title">{guestName}</span>
        <span className="rating">Рейтинг: {rating}</span>
      </div>
      <span className="review">{review}</span>
    </Box>
  );
}
