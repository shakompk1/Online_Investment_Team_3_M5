import React from "react";
import Style from './sell.module.scss';
import { NavLink } from "react-router-dom";
import back from '../../img/left.png';
import { getStockData } from "../../data";
import logo from '../../img/chart-img.png'

import styled from 'styled-components';
import ChartComp from "../Chart/Chart";

const ChartContainer = styled.div`
    width: 900px;
    height: 450px;
    border-radius: 5px;
    background: white;
`;

class SellHeader extends React.Component {
    state = {
        companyName: '',
        symbol: '',
        popup: false
    }

    componentDidMount() {
      this.setState({
        companyName: this.props.name
      })
        // getStockData(this.props.companyName)
        //     .then(res => {
        //         console.log(res);
        //         this.setState({
        //             companyName: res.profile.companyName,
        //             symbol: res.symbol
        //         })
        //     })
    }

    onClickHndlr = () => {
        this.setState({ popup: true })
    }

    closePopup = (evnt) => {
        if (evnt.target.matches('#check')) {
            this.setState({ popup: false })
        }
    }

    render() {
        return <div className={Style.buyHeader}>
            <NavLink className={Style.link} to="/">
                <img src={back} alt="back" />
                <span>Back</span>
            </NavLink>
            <p className={Style.name}>
                <span>Sell {this.state.companyName}</span>
            </p>
            <div className={Style.cahartImgDiv}><img src={logo} alt=""
                style={{ width: "50px", cursor: "pointer" }}
                onClick={this.onClickHndlr} /></div>
            {!this.state.popup ? null : (<div className={Style.popupBack} id="check" onClick={this.closePopup}><ChartContainer><ChartComp symbol={this.state.symbol} /> </ChartContainer></div>)}
        </div>
    }
}

export default SellHeader;
