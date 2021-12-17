import styled from 'styled-components';

const HeadText = styled.div`
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #293845;

  height: 110px;
`
function Title({text}){
  return(
    <HeadText>
      {text}
    </HeadText>
  );
}

export default Title;