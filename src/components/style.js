import styled from "styled-components";

const Banner = styled.header`
  height: 67px;
  
  font-weight: normal;
  font-size: 34px;
  line-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: #e8833a;
  background-color: #c3cfd9;

  position: absolute;
  top: 0;
  right: 0;
  left: 0;
`
const HeadText = styled.div`
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  color: #293845;

  height: 110px;
`

const Tail = styled.footer`
  width: 385px;
  height: 118px;

  font-weight: normal;
  font-size: 26px;
  line-height: 30px;
  display: flex;
  align-items: center;

  background-color: #DFE6ED;
  border-top: 1px solid #9EADBA;
  padding: 14px 10px;

  position: fixed;
  bottom: 0;
  left: calc((100% - 385px) / 2);
  z-index: 1;
`
const MovieInfo = styled.div`
  font-weight: normal;
  font-size: 26px;
  line-height: 30px;
  color: #293845;

  margin-left: 14px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export {Banner, HeadText, Tail, MovieInfo};