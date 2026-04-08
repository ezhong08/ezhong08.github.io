import { Col } from "react-bootstrap";

export const ExperienceCard = ({
  title,
  subtitle,
  description,
  imgUrl,
  justify,
  imgStyle,
}) => {
  return (
    <Col sm={6} md={4}>
      <div className={`exp-imgbx ${justify}`}>
        <img src={imgUrl} style={imgStyle} />
        <div className="exp-txtx">
          <h4>{title}</h4>
          <i>{subtitle}</i>
          <div>{description}</div>
        </div>
      </div>
    </Col>
  );
};
