import styled from 'styled-components'

const Banner = styled.header`
  font-weight: normal;
  font-size: 34px;
  line-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: #e8833a;
  background-color: #c3cfd9;

  height: 67px;
`

function Header() {
  return(
    <Banner>
      CINEFLEX
    </Banner>
  );
}

export default Header;