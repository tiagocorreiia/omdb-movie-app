import styled from 'styled-components'

export const StyledMovie = styled.div `
  color: white;

  h1 {
    text-transform: uppercase;

    span {
      font-size: 16px;
      background-color: #7CE6D7;
      padding: 5px;
      border-radius: 50%;
      position: relative;
      top: -5px;
    }
  }

  h2 {
    font-weight: 300;
    text-transform: uppercase;
    padding-top: 30px;
    position: relative;

    display: flex;
    align-items: center;

    left: 30px;

    &:before {
      content: '';
      display: block;
      width: 20px;
      height: 4px;
      background-color: #E684C3;

      position: absolute;
      left: -28px
    }
  }

  p {
    font-weight: 300;
    opacity: .6;
  }

  img {
    display: block;
    margin: 0 auto;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.4);
    margin-bottom: 30px;
  }

  ul {
    list-style: none;

    li {
      display: inline-block;
      margin-right: 5px;
      margin-bottom: 5px;
      background-color: rgba(255, 255, 255, 0.8);
      color: #333;
      padding: 2px 5px;
      text-transform: uppercase;
    }
  }

  @media(min-width: 480px) {
    img {
    display: block;
    margin: 0;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.4);
  }
  }
`