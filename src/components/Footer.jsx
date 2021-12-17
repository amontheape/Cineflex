import styled from 'styled-components';

const Tail = styled.footer`
  font-weight: normal;
  font-size: 26px;
  line-height: 30px;
  display: flex;
  align-items: center;

  height: 118px;
`

function Footer(){
  return(
    <Tail>
      <img />
      <div className="movie-info">
        <p></p>
        {1 > 2 && <p></p>}
      </div>
    </Tail>
  );
}

export default Footer;