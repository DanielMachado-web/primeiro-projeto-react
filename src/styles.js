import styled from "styled-components";


export const Container = styled.div`

    background-color: linear-gradient(90deg, #383838 0%, #000000, 81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const TodoList = styled.div`
    background: white;
    padding: 30px 20px;
    border-radius: 10px;

    ul{
        padding: 0;
        margin-top: 60px;
    }
    
`
export const Input = styled.Input`
    border: 2px solid #000;
    padding: 30px 20px;
    border-radius: 10px;
    width: 340px;
    margin-right: 40px;

`
export const Button = styled.Button`
    background: #8052ec;
    border-radius: 10px;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-size: 17px;
    line-height: 1.5;
    height: 40px;
    font-weight: 400;
    width: 130px;
    

`
export const ListItem = styled.div`
    background: #E4E4E4;
    box-shadow: 1px 4px 10px rgba(0,0,0,0.2);
    border-radius: 5px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    padding: 0, 10px;
    width: 500px;


    li{
        list-style: none;
    }
    
`