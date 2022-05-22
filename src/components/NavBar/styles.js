import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  z-index: 1;
/*   display: ${({ open }) => open ? 'flex' : 'none'}; */
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0%)' : 'translateX(-100%)'};
    top: 0;
    left: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
`;

export default Ul;