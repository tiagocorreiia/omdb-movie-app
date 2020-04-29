import styled from 'styled-components'

export const StyledBackButtom = styled.div `
  position: fixed;
  bottom: 0;

  width: 100%;
  padding: 30px 0;

  a {
    font-weight: bold;
    background-color: white;
    color: #E684C3;
    text-transform: uppercase;
    padding: 6px 10px;
    transition: all .5s;

    &:hover {
      text-decoration: none;
      color: #7CE6D7;
    }
  }
`