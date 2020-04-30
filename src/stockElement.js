import React, { Component } from 'react';
import styled from "styled-components";

const StockSection = styled.div`
width: 759px;
height: 84px;
display: flex;
vertical-align: center;
justify-content: space-between;`

const CodeP = styled.p`
font-family: Space Mono;
font-size: 12px;
line-height: 10px;
padding: 0px 20px;
/* identical to box height, or 83% */

display: flex;
align-items: center;

color: rgba(0, 0, 0, 0.5);`

const NameP = styled.p`
font-family: Roboto;
font-size: 22px;
line-height: 18px;
padding: 0px 20px;
/* identical to box height, or 82% */

display: flex;
align-items: center;

color: #000000;`

const PriceP = styled.p`
font-family: Roboto;
font-size: 22px;
line-height: 18px;
/* identical to box height, or 82% */

display: flex;
align-items: center;
text-align: right;

color: #000000;`

export default class Stock extends Component {

    defaultProps = {
        Stockcode: 'N/A',
        StockName: 'N/A',
        StockPcs: 'N/A',
        StockPrice: 'N/A',
        StockChange: 'N/A',
        StockChangeRate: 'N/A'
    }


    render() {
        return (
            <StockSection>
                <CodeP>NKE
                <NameP > Nike Inc. </NameP>
                </CodeP>

                <PriceP> 12 454.00 $ </PriceP>
            </StockSection>
        )
    }
}