import { Container, Heading2 } from "../components/styles/LayoutComponents";
import { StyledSection, Grid, Flex } from "../components/styles/Filters.styled";
import Typebox from "../components/Typebox";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const Filters = ({
  min,
  max,
  rangePrice,
  onClick,
  onSelectChange,
  onInputMinChange,
  onInputMaxChange,
  onInputRangeChange,
}) => {
  const boxData = [
    { type: "Campervan", heading: "Campervan", paragraph: "Obytka s rozměry osobáku, se kterou dojedete všude." },
    { type: "Intergrated", heading: "Integrál", paragraph: "Král mezi karavany. Luxus na kolech." },
    { type: "BuiltIn", heading: "Vestavba", paragraph: "Celý byt geniálně poskládaný do dodávky." },
    { type: "Alcove", heading: "Přívěs", paragraph: "Tažný karavan za vaše auto. Od kapkovitých až po rodinné." },
  ];

  return (
    <StyledSection>
      <Container>
        <Grid>
          <div>
            <Heading2>Cena za den</Heading2>
            <InputRange
              maxValue={10000}
              minValue={100}
              value={{ min: rangePrice.min, max: rangePrice.max }}
              onChange={value => onInputRangeChange(value)}
            />
            <Flex>
              <input
                type="number"
                id="minNum"
                value={min}
                min="100"
                max="10000"
                onChange={event => onInputMinChange(event)}
              />
              <input
                type="number"
                id="maxNum"
                value={max}
                min="100"
                max="10000"
                onChange={event => onInputMaxChange(event)}
              />
            </Flex>
          </div>
          <div>
            <Heading2>Typ karavanu</Heading2>
            <Flex>
              {boxData.map((box, index) => (
                <Typebox
                  heading={box.heading}
                  paragraph={box.paragraph}
                  key={index}
                  onClick={() => onClick(box.type)}
                />
              ))}
            </Flex>
          </div>
          <div>
            <Heading2>Okamžitá rezervace</Heading2>
            <select name="reservation" id="reservation" onChange={event => onSelectChange(event)}>
              <option value="yes">Ano</option>
              <option value="no">Ne</option>
            </select>
          </div>
        </Grid>
      </Container>
    </StyledSection>
  );
};

export default Filters;
