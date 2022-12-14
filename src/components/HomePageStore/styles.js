import styled from "styled-components";

export const Header = styled.div`
    width: 100%;
    height: 70px;
    background-color: #412972;
`

export const Container = styled.div`
     background-color: #f2f2f2;
     height: 100vh;
     display: flex;
     justify-content: center;
    
`

export const ContainerProducts = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    flex-wrap: wrap;
    justify-items: center;
    gap: 100px;
   
    @media (min-width: 1600px){
        grid-template-columns: repeat(4, 1fr);
    }

`

export const CardsProducts = styled.div`
   background-color: white;
   width: 300px;
   height: 300px;
    padding: 30px;
   border-radius: 8px;
   box-shadow: 1px 2px 3px black;
`

export const HeaderSideLeft = styled.div`
    display: flex;
    margin-left: 30px;

`

export const HeaderSideRight = styled.div`
    display: flex;
    justify-content: end;
    margin-right: 30px;
`

export const TextCard = styled.span`
    color: black;
`
export const TopContainerCard = styled.div`
   
   justify-content: center;
   align-items: center;
  
`

export const CenterContainerCard = styled.div`
    position: relative;
    right: 20px;
   

`

export const DownContainerCard = styled.div`
    display: flex;
   justify-content: center;
   margin-top: 15px;
`

export const textTitle = styled.span`
    font-size: 17px;
    white-space: nowrap;

`

export const TextPrice = styled.span`
    font-size: 20px;
    font-weight: bold;
`

export const ImageProduct = styled.img`
    border-radius: 8px;
    max-width: 200px;
    position: relative;
    bottom: 20px;
    
    
`

export const ButtonAddToCart = styled.button`
    font-size: 18px;
    border-radius: 8px;
    width: 200px;
    height: 30px;
    background-color:  #412972;
    color: white;
    
`