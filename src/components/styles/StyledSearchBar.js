import styled from 'styled-components';

export const StyledSearchBar = styled.div`
  width: 100%;
  background: #e9e9e9;
  box-sizing: border-box;
  color: #fff;
  padding: 15px;

  position: fixed;
  bottom: 0;
  left: 0%;
`;

export const StyledSearchBarContent = styled.div`
  max-width: 1110px;
  width: 100%;
  background: #fafafa;
  margin: 0 auto;
  position: relative;
  color: #333;
  padding: 15px 0;

  .fa-search {
    position: absolute;
    left: 20px;
    top: 12px;
    color: #fff;
    z-index: 1000;
  }

  input {
    font-family: 'Abel', sans-serif;
    font-size: 28px;
    left: 0px;
    margin: 8px 0;
    padding: 0 0 0 30px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: #333;
    box-sizing: border-box;

    :focus {
      outline: none;
    }

    @media screen and (max-width: 720px) {
      font-size: 28px;
    }
  }
`;
