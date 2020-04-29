import styled from 'styled-components'

export const StyledGrid = styled.div `
  width: 100%;
`

export const StyledGridContent = styled.div `
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;

  div {
    flex: 0 0 50%;
    padding: 0 15px;
    margin-bottom: 30px;

    img {
      width: 100%;
      height: auto;
      display: block;
      box-shadow: 0 6px 8px rgba(0, 0, 0, 0.4);
      transition: all .5s;

      &:hover {
        transform: scale(1.03);
      }
    }
  }

  @media(min-width: 480px) {
    div {
    flex: 0 0 25%;
    padding: 0 15px;
    margin-bottom: 30px;
    }
  }
`