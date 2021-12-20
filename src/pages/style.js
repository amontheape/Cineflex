import styled from "styled-components";

const MoviesWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
`
const MovieCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  padding: 8px;

  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);

  img {
    width: ${( { imgSize } ) => imgSize };
  }
`

const Button = styled.button`
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #fff;

  border: none;
  border-radius: 3px;

  padding: 12px 27px;

  background-color: #e8833a;
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  
  margin-bottom: 22px;
`

const Seat = styled.button`
  width: 26px;
  height: 26px;

  background: ${({ status, selected }) => {
    if (selected) {
      return '#8DD7CF';
    } else return status ? '#C3CFD9' : '#FBE192';
  }
  };
  border: 1px solid #808F9D;
  border-color: ${({ status, selected }) => {
    if (selected) {
      return '#45BDB0';
    } else return status ? '#808F9D' : '#F7C52B';
  }
  };
  border-radius: 12px;

  pointer-events: ${({ status }) => status ? 'auto' : 'none'};
  
  display: flex;
  align-items: center;
  justify-content: center;
`
const SeatsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`
const SeatsSummary = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 16px;
  margin-bottom: 40px;
`
const SummaryItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p{
    font-weight: normal;
    font-size: 13px;
    line-height: 15px;
    color: #4E5A65;
  }
`
const Label = styled.label`
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #293845;

`
const Input = styled.input`
  width: 325px;
  height: 50px;

  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #293845;

  border: 1px solid #D5D5D5;
  border-radius: 3px;

  display: flex;
  align-items: center;

  margin-bottom: 8px;
  padding: 0 18px;

  &::placeholder{
    font-style: italic;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
  }
`
const Form = styled.form`
  
  & :last-child {
    margin: 58px auto 0;
  }
`

export {
  MoviesWrapper,
  MovieCard, 
  Button,
  ButtonWrapper, 
  Seat, 
  SeatsWrapper, 
  SeatsSummary, 
  SummaryItem, 
  Label, 
  Input, 
  Form
};