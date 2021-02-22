import styled from 'styled-components';
import propToStyle from '../../../../theme/utils/propToStyle';

const WrapperProjects = styled.div`
    ${propToStyle('flex')}
    ${propToStyle('display')}
    ${propToStyle('flexDirection')}
    ${propToStyle('justifyContent')}
    ${propToStyle('flexWrap')}
    ${propToStyle('paddingTop')}
    ${propToStyle('paddingBottom')}
`;

export default WrapperProjects;