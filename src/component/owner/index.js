import "./index.css";
import Heading from "../heading";

export default function Owner({ name, image, rate, time, phone, info }) {
  return (
    <div>
      <div className="owner__block">
        <div className="owner__image-block">
          <img className="owner__image" height={80} width={80} src={image} />
        </div>

        <div className="owner__info-block">
          <Heading className="owner__title">{`Господар - ${name}`}</Heading>

          <div className="owner__info">
            <span>{phone}</span>
            <li>{time}</li>
            <li>{`${rate}%  відсотків швидкості відгуку`}</li>
          </div>
        </div>
      </div>

      <div className="info">{info}</div>
    </div>
  );
}
