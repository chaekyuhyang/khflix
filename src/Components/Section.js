import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// :not(:last-child)  : 마지막 children에게  적용하고 싶지 않을 경우
const Container = styled.div`
    :not(:last-child){     
        margin-bottom: 50px
    }
`;

const Title = styled.span`
    font-size: 14px;
    font-weight: 600;
`;

const Grid = styled.div`
    margin-top: 25px;
    display: grid;
    grid-template-columns: repeat(auto-fill,125px);
    grid-gap: 25px;
`;

const Section = ({title, children}) => (
    <Container>
        <Title>{title}</Title>
        <Grid>{children}</Grid> {/*리엑트에서 children은 일반적으로 태그 사이의 값을 받아옴 */}
    </Container>
);

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };
export default Section;