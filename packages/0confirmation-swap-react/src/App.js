import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Row, Col, Modal, ModalBody, Dropdown,
  DropdownItem, DropdownMenu, DropdownToggle
} from "reactstrap";
import { async } from 'q';
const randomBytes = require('random-bytes').sync;

const { ZeroMock } = require('@0confirmation/sdk');
const ethers = require('ethers');

let provider = new ethers.providers.Web3Provider(window.ethereum);

const zero = new ZeroMock(window.ethereum);
const { getAddresses } = require('@0confirmation/sdk/environments');

const contracts = getAddresses();

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value:0,
      rate:2000,
      coin: "BTC",
      calcValue: 0,
      percentage: 0.5,
      sliplimit: 0.5,
      modal: false,
      address: "X93jdjd90dkakdjdlalhhdohodhohofhohohdlslhjhlfhjslhjhkhk",
      menu: false,
      selectedAddress: '0x' + Array(40).fill('0').join(''),
      parcel: null,
      borrowProxy: null,


        feetooltip: false,
          blocktooltip: false,
          liquidityvalue: "Add Liquidity",
          showdetail: true,
          pool: 450.392,
          share: 2.1,
          stake: 1.8,
          wallet: "xfekdjj39jsgahshjebah3i393jandbbrrb",
          sendOpen: false,
          getOpen: false,
          send: 0,
          get: 0,
          transactions: true,
          transactionDetails: 0,
          transactionModal: false,
          rate: 203,
          getvalue: 0,
          sendvalue: 0,
          slippage: 0.5,
          copied: false,
          liquidity: false,
          modal: false,
          _getcoins: {
            coin: < Fragment > < InlineIcon color = "#ffffff"
            style = {
              {
                fontSize: "1.5em"
              }
            }
            className = "mr-2"
            icon = {
              daiIcon
            }
            /></Fragment > ,
            id: 0,
            fullname: "Ethereum",
            name: "DAI"
          },
          _sendcoins: {
            coin: < Fragment > < InlineIcon color = "#ffffff"
            style = {
              {
                fontSize: "1.5em"
              }
            }
            className = "mr-2"
            icon = {
              btcIcon
            }
            /></Fragment > ,
            id: 0,
            fullname: "Bitcoin",
            name: "BTC"
          },

    }

        this.setsend = this.setsend.bind(this);
        this.setget = this.setget.bind(this);

  }
  zero.initializeDriver
  async componentDidMount() {
    await zero.initializeDriver();
    this.setState({
      selectedAddress: window.ethereum.selectedAddress
    });
  }
  async requestLoan() {
    const liquidityRequest = zero.createLiquidityRequest({
      token: contracts.renbtc,
      amount: this.state.value,
      nonce: '0x' + randomBytes(32).toString('hex'),
      gasRequested: ethers.utils.parseEther('0.01').toString()
    });
    console.log('signing');
    const parcel = await liquidityRequest.sign();
    await parcel.broadcast();
    console.log('broadcasted');
    this.setState({
zero.initializeDriver      parcel,
      borrowProxy: await parcel.getBorrowProxy()
    });
  }

  _send = 0;
  _get = 0;
  _coin = < Fragment > < InlineIcon color = "#ffffff"
  style = {
    {
      fontSize: "1.5em"
    }
  }
  className = "mr-2"
  icon = {
    btcIcon
  }
  /></Fragment >
  _coins = [{
      coin: < Fragment > < InlineIcon color = "#ffffff"
      style = {
        {
          fontSize: "1.5em"
        }
      }
      className = "mr-2"
      icon = {
        btcIcon
      }
      /></Fragment > ,
      id: 0,
      fullname: "Bitcoin",
      name: "BTC"
    },
    {
      coin: < Fragment > < InlineIcon color = "#ffffff"
      style = {
        {
          fontSize: "1.5em"
        }
      }
      className = "mr-2"
      icon = {
        daiIcon
      }
      /></Fragment > ,
      id: 1,
      fullname: "Ethereum",
      name: "DAI"
    },
    {
      coin: < Fragment > < InlineIcon color = "#ffffff"
      style = {
        {
          fontSize: "1.5em"
        }
      }
      className = "mr-2"
      icon = {
        ltcIcon
      }
      /></Fragment > ,
      id: 2,
      fullname: "Litecoin",
      name: "LTC"
    },
    {
      coin: < Fragment > < InlineIcon color = "#ffffff"
      style = {
        {
          fontSize: "1.5em"
        }
      }
      className = "mr-2"
      icon = {
        ethIcon
      }
      /></Fragment > ,
      id: 3,
      fullname: "Ethereum",
      name: "ETH"
    },
    {
      coin: < Fragment > < InlineIcon color = "#ffffff"
      style = {
        {
          fontSize: "1.5em"
        }
      }
      className = "mr-2"
      icon = {
        usdtIcon
      }
      /></Fragment > ,
      id: 4,
      fullname: "USDT",
      name: "USDT"
    },
    {
      coin: < Fragment > < InlineIcon color = "#ffffff"
      style = {
        {
          fontSize: "1.5em"
        }
      }
      className = "mr-2"
      icon = {
        eosIcon
      }
      /></Fragment > ,
      id: 5,
      fullname: "EOS",
      name: "EOS"
    },
    {
      coin: < Fragment > < InlineIcon color = "#ffffff"
      style = {
        {
          fontSize: "1.5em"
        }
      }
      className = "mr-2"
      icon = {
        btgIcon
      }
      /></Fragment > ,
      id: 6,
      fullname: "BTG",
      name: "BTG"
    },
  ];
  _history = [{
      created: "05/06/20 10:15",
      address: "xfekdjj39jsgahshjebah3i393jandbbrrb",
      confirmations: 1,
      sent: "0.200",
      received: "836.42",
      status: "Liquidated",
      sentcoin: < Fragment > < InlineIcon color = "#ffffff"
      style = {
        {
          fontSize: "2.5em"
        }
      }
      className = "mr-2"
      icon = {
        btcIcon
      }
      /></Fragment > ,
      sentfullname: "Bitcoin",
      sentname: "BTC",
      receivedcoin: < Fragment > < InlineIcon color = "#ffffff"
      style = {
        {
          fontSize: "2.5em"
        }
      }
      className = "mr-2"
      icon = {
        daiIcon
      }
      /></Fragment > ,
      receivedfullname: "Ethereum",
      receivedname: "DAI",
      blocks: "8,294",
      target: "qk1kkwkekekqlqkwelekkqlkwlek",
      fees: "0.0001"
    },
    {
      created: "05/06/20 10:15",
      address: "xfekdjj39jsgahshjebah3i393jandbbrrb",
      confirmations: 4,
      sent: "0.200",
      sentcoin: < Fragment > < InlineIcon color = "#ffffff"
      style = {
        {
          fontSize: "2.5em"
        }
      }
      className = "mr-2"
      icon = {
        btcIcon
      }
      /></Fragment > ,
      sentfullname: "Bitcoin",
      sentname: "BTC",
      receivedcoin: < Fragment > < InlineIcon color = "#ffffff"
      style = {
        {
          fontSize: "2.5em"
        }
      }
      className = "mr-2"
      icon = {
        daiIcon
      }
      /></Fragment > ,
      receivedfullname: "Ethereum",
      receivedname: "DAI",
      blocks: "8,294",
      target: "qk1kkwkekekqlqkwelekkqlkwlek",
      fees: "0.0001",
      received: "836.42",
      status: "Pending"
    },
    {
      created: "05/06/20 10:15",
      address: "xfekdjj39jsgahshjebah3i393jandbbrrb",
      confirmations: 4,
      sent: "0.200",
      sentcoin: < Fragment > < InlineIcon color = "#ffffff"
      style = {
        {
          fontSize: "2.5em"
        }
      }
      className = "mr-2"
      icon = {
        btcIcon
      }
      /></Fragment > ,
      sentfullname: "Bitcoin",
      sentname: "BTC",
      receivedcoin: < Fragment > < InlineIcon color = "#ffffff"
      style = {
        {
          fontSize: "2.5em"
        }
      }
      className = "mr-2"
      icon = {
        daiIcon
      }
      /></Fragment > ,
      receivedfullname: "Ethereum",
      receivedname: "DAI",
      blocks: "8,294",
      target: "qk1kkwkekekqlqkwelekkqlkwlek",
      fees: "0.0001",
      received: "836.42",
      status: "Pending"
    },
    {
      created: "05/06/20 10:15",
      address: "xfekdjj39jsgahshjebah3i393jandbbrrb",
      confirmations: 4,
      sent: "0.200",
      sentcoin: < Fragment > < InlineIcon color = "#ffffff"
      style = {
        {
          fontSize: "2.5em"
        }
      }
      className = "mr-2"
      icon = {
        btcIcon
      }
      /></Fragment > ,
      sentfullname: "Bitcoin",
      sentname: "BTC",
      receivedcoin: < Fragment > < InlineIcon color = "#ffffff"
      style = {
        {
          fontSize: "2.5em"
        }
      }
      className = "mr-2"
      icon = {
        daiIcon
      }
      /></Fragment > ,
      receivedfullname: "Ethereum",
      receivedname: "DAI",
      blocks: "8,294",
      target: "qk1kkwkekekqlqkwelekkqlkwlek",
      fees: "0.0001",
      received: "836.42",
      status: "Pending"
    },
    {
      created: "05/06/20 10:15",
      address: "xfekdjj39jsgahshjebah3i393jandbbrrb",
      confirmations: 6,
      sent: "0.200",
      sentcoin: < Fragment > < InlineIcon color = "#ffffff"
      style = {
        {
          fontSize: "2.5em"
        }
      }
      className = "mr-2"
      icon = {
        btcIcon
      }
      /></Fragment > ,
      sentfullname: "Bitcoin",
      sentname: "BTC",
      receivedcoin: < Fragment > < InlineIcon color = "#ffffff"
      style = {
        {
          fontSize: "2.5em"
        }
      }
      className = "mr-2"
      icon = {
        daiIcon
      }
      /></Fragment > ,
      receivedfullname: "Ethereum",
      receivedname: "DAI",
      blocks: "8,294",
      target: "qk1kkwkekekqlqkwelekkqlkwlek",
      fees: "0.0001",
      received: "836.42",
      status: "Completed"
    },
    {
      created: "05/06/20 10:15",
      address: "xfekdjj39jsgahshjebah3i393jandbbrrb",
      confirmations: 6,
      sent: "0.200",
      sentcoin: < Fragment > < InlineIcon color = "#ffffff"
      style = {
        {
          fontSize: "2.5em"
        }
      }
      className = "mr-2"
      icon = {
        btcIcon
      }
      /></Fragment > ,
      sentfullname: "Bitcoin",
      sentname: "BTC",
      receivedcoin: < Fragment > < InlineIcon color = "#ffffff"
      style = {
        {
          fontSize: "2.5em"
        }
      }
      className = "mr-2"
      icon = {
        daiIcon
      }
      /></Fragment > ,
      receivedfullname: "Ethereum",
      receivedname: "DAI",
      blocks: "8,294",
      target: "qk1kkwkekekqlqkwelekkqlkwlek",
      fees: "0.0001",
      received: "836.42",
      status: "Completed"
    },
    {
      created: "05/06/20 10:15",
      address: "xfekdjj39jsgahshjebah3i393jandbbrrb",
      confirmations: 6,
      sent: "0.200",
      sentcoin: < Fragment > < InlineIcon color = "#ffffff"
      style = {
        {
          fontSize: "2.5em"
        }
      }
      className = "mr-2"
      icon = {
        btcIcon
      }
      /></Fragment > ,
      sentfullname: "Bitcoin",
      sentname: "BTC",
      receivedcoin: < Fragment > < InlineIcon color = "#ffffff"
      style = {
        {
          fontSize: "2.5em"
        }
      }
      className = "mr-2"
      icon = {
        daiIcon
      }
      /></Fragment > ,
      receivedfullname: "Ethereum",
      receivedname: "DAI",
      blocks: "8,294",
      target: "qk1kkwkekekqlqkwelekkqlkwlek",
      fees: "0.0001",
      received: "836.42",
      status: "Completed"
    },
    {
      created: "05/06/20 10:15",
      address: "xfekdjj39jsgahshjebah3i393jandbbrrb",
      confirmations: 1,
      sent: "0.200",
      sentcoin: < Fragment > < InlineIcon color = "#ffffff"
      style = {
        {
          fontSize: "2.5em"
        }
      }
      className = "mr-2"
      icon = {
        btcIcon
      }
      /></Fragment > ,
      sentfullname: "Bitcoin",
      sentname: "BTC",
      receivedcoin: < Fragment > < InlineIcon color = "#ffffff"
      style = {
        {
          fontSize: "2.5em"
        }
      }
      className = "mr-2"
      icon = {
        daiIcon
      }
      /></Fragment > ,
      receivedfullname: "Ethereum",
      receivedname: "DAI",
      blocks: "8,294",
      target: "qk1kkwkekekqlqkwelekkqlkwlek",
      fees: "0.0001",
      received: "836.42",
      status: "Liquidated"
    },
    {
      created: "05/06/20 10:15",
      address: "xfekdjj39jsgahshjebah3i393jandbbrrb",
      confirmations: 1,
      sent: "0.200",
      sentcoin: < Fragment > < InlineIcon color = "#ffffff"
      style = {
        {
          fontSize: "2.5em"
        }
      }
      className = "mr-2"
      icon = {
        btcIcon
      }
      /></Fragment > ,
      sentfullname: "Bitcoin",
      sentname: "BTC",
      receivedcoin: < Fragment > < InlineIcon color = "#ffffff"
      style = {
        {
          fontSize: "2.5em"
        }
      }
      className = "mr-2"
      icon = {
        daiIcon
      }
      /></Fragment > ,
      receivedfullname: "Ethereum",
      receivedname: "DAI",
      blocks: "8,294",
      target: "qk1kkwkekekqlqkwelekkqlkwlek",
      fees: "0.0001",
      received: "836.42",
      status: "Liquidated"
    },
  ];
  render() {
    const closeBtn = <button className="btn" style={{ color: "#317333", fontSize:(this.state.transactionModal)?"2em":"" }} onClick={async () => (this.state.modal) ? await this.setState({ modal: !this.state.modal }) : await this.setState({ transactionModal: !this.state.transactionModal })}>&times;</button>;
        return (
            <>
                
                <Modal
                    style={{ overflowX: "hidden" }}
                    className="dmodal"
                    wrapClassName="dmodal"
                    modalClassName="dmodal"
                    backdropClassName="dmodal"
                    contentClassName="dmodal" centered isOpen={this.state.modal}
                    toggle={async () => await this.setState({ modal: !this.state.modal })}>
                    <ModalBody style={{ backgroundColor: "#1f2820" }} className="h-100" >
                        <Row className="w-100 align-content-center justify-content-center my-3">
                            <Col lg="10" sm="10" md="10" className="align-content-center justify-content-center text-center">
                                <span style={{ fontSize: "1.7em", fontFamily: "PT Sans", fontWeight: "bolder" }}
                                    className="mx-auto align-content-center justify-content-center text-center text-light ml-3">
                                    Bitcoin Payment
                                </span>
                            </Col>
                            <Col lg="1" sm="1" md="1">{closeBtn}</Col>
                        </Row>
                        <Row className="w-100 align-content-center justify-content-center text-center text-light">
                            <Col lg="12" sm="12" md="12" style={{ fontSize: "0.9em" }} className="align-content-center justify-content-center text-center text-light">
                                You are selling <b>{this.state.sendvalue} {this.state._sendcoins.name}</b> for at least <b>{this.state.sendvalue * this.state.rate} {this.state._getcoins.name}</b><br />
                                Expected Price Slippage: <b>{this.state.slippage}%</b><br />
                                Additional slippage limit: <b>{this.state.slippage}%</b>
                            </Col>
                        </Row>
                        <Row className="my-3 align-content-start justify-content-start">
                            <Col lg="3" md="3" sm="3"
                                className="text-light text-center align-content-start justify-content-start">
                                <QRCode value={this.state.wallet}
                                    fgColor="#317333"
                                    logoHeight={30}
                                    logoWidth={30}
                                    logoOpacity={0.5}
                                    logoImage={require("../images/0cf.svg")}
                                    size={100} bgColor="transparent"
                                    qrStyle="squares" />
                                {/* <img src={require("../images/barcode.svg")} alt="0CF" className="img-fluid" /> */}
                            </Col>
                            <Col lg="9" md="9" sm="9" className="align-content-start justify-content-start">
                                <Row style={{ border: "2px solid #317333", borderRadius: "10px" }}
                                    className="text-light mx-1 h-100 text-center align-content-center justify-content-center">
                                    <Col lg="12" md="12" sm="12" className="text-light text-center align-content-center justify-content-center">
                                        <span style={{ fontSize: "0.7em" }}>To complete payment, send 0.1 BTC to the below address</span>
                                    </Col>
                                    <Col lg="12" md="12" sm="12" className="text-light text-center align-content-center justify-content-center">
                                        <span className="mx-1" style={{
                                            fontSize: "0.79em", letterSpacing: "0.03em", color: "#137333",

                                        }}>
                                            <b className="mr-1 pb-3"
                                                style={{ borderBottom: "1px solid #137333 " }}
                                            >{this.state.wallet}</b>
                                            {(this.state.copied) ?
                                                <b style={{ fontSize: "0.79em", letterSpacing: "0.03em", color: "#137333" }}>Copied!</b>
                                                : <img
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        // e.clipboardData.setData('text/plain', this.state.wallet);
                                                        navigator.clipboard.writeText(this.state.wallet);
                                                        this.setState({ copied: true })
                                                    }}
                                                    style={{ cursor: "pointer" }} className="img-fluid" src={require("../images/copy.svg")} alt="Copy" />}</span>
                                    </Col>
                                    <Col lg="12" md="12" sm="12" className="text-light my-3 mx-1 text-center align-content-center justify-content-center">
                                        <span style={{ fontSize: "0.7em" }}>Time Left To Pay: 12:34 mins</span>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="align-content-center justify-content-center mt-4 mb-5 text-center text-light">
                            <Col lg="8" sm="8" md="8" style={{ fontSize: "0.9em" }} className="align-content-center justify-content-center">
                                <button className="btn btn-block rounded-pill bg-danger text-center text-light">
                                    Payment Sent
                                </button>
                            </Col>
                        </Row>
                    </ModalBody>
                </Modal>
                
                <div className="justify-content-center align-content-center pt-5" style={{ zIndex: "1", overflowX: "hidden", position: "relative" }} >
                    <div className="justify-content-center align-content-center text-center mx-auto my-auto pb-4 pt-5">
                        <button className="btn text-light button-small btn-sm" style={{ fontSize: "24dp", backgroundColor: "#317333", width: "248dp", borderRadius: "10px" }}>Connect Wallet</button>
                    </div>
                    <div className="alert-box">
                        <Alert delay={2000} boldText="Test Green" detailText="Test Detail" alertType="alert-green" />
                        <Alert delay={3000} boldText="Test Yellow" detailText="Test Detail" alertType="alert-yellow" />
                        <Alert boldText="Test Red" detailText="Test Detail" alertType="alert-red" />
                    </div>
                    <Row className="justify-content-center align-content-center text-center mx-auto">
                        <Col lg="2" md="2" sm="6" className="justify-content-center align-content-center mx-auto w-50" style={{ backgroundColor: "#1F2820", borderRadius: "10px" }}>
                            <Row className="justify-content-center align-content-center p-1 text-light">
                                <Col className="justify-content-center align-content-center py-1" lg="6" md="6" sm="6" style={{ borderRadius: (this.props.ismobile) ? "10px" : "13px", backgroundColor: (window.location.pathname.split("/")[2] === "swap") ? "#317333" : "" }}>
                                    <Link to="/trade/swap" style={{ outline: "none", textDecoration: "none", color: "#ffffff" }} href="/#"

                                    >Swap</Link>
                                </Col>
                                <Col className="justify-content-center align-content-center py-1" lg="6" md="6" sm="6" style={{ borderRadius: (this.props.ismobile) ? "10px" : "13px", backgroundColor: (window.location.pathname.split("/")[2] === "earn") ? "#317333" : "" }}>
                                    <Link to="/trade/earn" style={{ outline: "none", textDecoration: "none", color: "#ffffff" }} href="/#"

                                    >Earn</Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="justify-content-center align-content-center text-center mx-auto my-1">
                        {(window.location.pathname.split("/")[2] === "earn") ? null : <Col lg="6" md="6" sm="6">
                            <Link to="##" style={{ outline: "none", textDecoration: "none", borderBottom: "1px solid #317333", color: "#317333", fontSize: "0.8em", fontStyle: "normal", fontWeight: "bold" }} href="/#"
                                onClick={async()=> await this.setState({transactions:!this.state.transactions})}
                            >Recent Transactions</Link>
                        </Col>}
                    </Row>
                    <Row className="justify-content-center align-content-center text-center">
                        <Col lg="8" md="8" sm="8" style={{ backgroundColor: "#1F2820", borderRadius: "10px 10px 0px 0px", minHeight: "70vh" }} className=" mx-4">

                            <Row className="justify-content-center align-content-center text-center mx-auto mt-3">
                                {(window.location.pathname.split("/")[2] === "earn") ?
                                    <Col lg="6" md="6" sm="6">
                                        <Row>
                                            <Col lg="12" md="12" sm="12"><p style={{ fontWeight: "bold", fontStyle: "normal", fontSize: "2em", fontFamily: "PT Sans", color: "#ffffff" }}>0cf Earn</p></Col>
                                            <Col lg="12" md="12" sm="12">
                                                <Dropdown className="my-3" isOpen={this.state.liquidity} toggle={async () => await this.setState({ liquidity: !this.state.liquidity })}>
                                                    <DropdownToggle style={{
                                                        width: "11em", padding: "0.200em",
                                                        backgroundColor: "#485F4B", borderRadius: "8px 8px 8px 8px",
                                                        color: "#ffffff", border: "none", outline: "none"
                                                    }}>
                                                        <span><span className="mr-1">{this.state.liquidityvalue}</span> <FaAngleDown /></span>
                                                    </DropdownToggle>
                                                    <DropdownMenu className="dhover text-light" style={{
                                                        backgroundColor: "#354737", borderRadius: "0px 0px 8px 8px",
                                                        color: "#ffffff", border: "none", outline: "none", marginLeft: "7.5em"
                                                    }}>
                                                        {["Add Liquidity", "Remove Liquidity"].map((a, i) => {
                                                            return (
                                                                <DropdownItem key={i} className="dhover" style={{ color: "#ffffff", backgroundColor: (this.state.liquidityvalue === a) ? "#485F4B" : "" }}
                                                                    // onClick={() => { this._send = i; alert(this._send)}}
                                                                    onClick={(i) => { this.setState({ liquidityvalue: a }) }}
                                                                >
                                                                    {a}</DropdownItem>
                                                            );
                                                        })}
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </Col>
                                        </Row>
                                    </Col>
                                    :
                                    <Col lg="6" md="6" sm="6">
                                        <p style={{ fontWeight: "bold", fontStyle: "normal", fontSize: "2em", fontFamily: "PT Sans", color: "#ffffff" }}>0cf Swap</p>
                                    </Col>}
                            </Row>
                            <Row className="justify-content-center align-content-center text-center mx-auto">
                                {(window.location.pathname.split("/")[2] === "earn") ?
                                    <Col lg="12" md="12" sm="12">
                                        <p style={{ fontWeight: "normal", fontStyle: "normal", fontSize: "0.8em", fontFamily: "PT Sans", color: "#ffffff" }}>
                                            Add BTC to the 0cf pool to gain interest on short term liquidity loans
                                    </p>
                                    </Col>
                                    :
                                    <Col lg="12" md="12" sm="12">
                                        <p style={{ fontWeight: "normal", fontStyle: "normal", fontSize: "0.8em", fontFamily: "PT Sans", color: "#ffffff" }}>
                                            Instantly Swap BTC for ETH assets using decentralized exchanges
                                    </p>
                                    </Col>}
                            </Row>
                            {(window.location.pathname.split("/")[2] === "earn") ?
                                <Row className="justify-content-center align-content-center text-center mx-auto my-3 text-light">
                                    <Col lg="4" md="12" sm="12" className="mt-2">
                                        <InputGroup style={{ height: "52px" }}>
                                            <Input type="text"
                                                value={this.state.sendvalue} onChange={event => this.setState({ sendvalue: event.target.value.replace(/\D/, '') })}
                                                className="sendcoin h-100" style={{
                                                    backgroundColor: "#354737",
                                                    borderRadius: "8px 0px 0px 8px", color: "#ffffff", border: "none", outline: "none"
                                                }} />
                                            <InputGroupButtonDropdown style={{ backgroundColor: "#354737", borderRadius: "0px 8px 8px 0px", color: "#ffffff" }} direction="right" setActiveFromChild={true} addonType="append" isOpen={this.state.sendOpen} toggle={async (e) => await this.setState({ sendOpen: !this.state.sendOpen })}>
                                                <DropdownToggle
                                                    style={{
                                                        backgroundColor: "#485F4B", borderRadius: "0px 8px 8px 0px",
                                                        color: "#ffffff", border: "none", outline: "none"
                                                    }}>
                                                    {this.state._sendcoins.coin}{' '}
                                                    {this.state._sendcoins.name}{' '}<FaAngleDown />
                                                </DropdownToggle>
                                                <DropdownMenu style={{ backgroundColor: "#354737", borderRadius: "8px 8px 8px 8px", color: "#ffffff", border: "none", outline: "none", marginTop: "3.5em", marginLeft: "-10em" }}>
                                                    {this._coins.map((a, i) => {
                                                        return (
                                                            <DropdownItem key={i} className="dhover" style={{ color: "#ffffff", backgroundColor: (this.state.send === a.id) ? "#485F4B" : "" }}
                                                                // onClick={() => { this._send = i; alert(this._send)}}
                                                                onClick={(i) => { this.setState({ send: a.id, _sendcoins: { name: a.name, id: a.id, coin: a.coin } }) }}
                                                            >
                                                                {a.coin}{a.name}</DropdownItem>
                                                        );
                                                    })}
                                                    {/* active={(a.id === this.state.send) ? true : false}  async ()=> await this.setState({send:a.id})*/}
                                                </DropdownMenu>
                                            </InputGroupButtonDropdown>
                                        </InputGroup>
                                    </Col></Row>
                                :
                                <Row className="justify-content-center align-content-center text-center mx-auto my-3 text-light">

                                    <Col lg="4" md="12" sm="12" className="mt-2">
                                        <InputGroup style={{ height: "52px" }}>
                                            <Input type="text"
                                                value={this.state.sendvalue} onChange={event => this.setState({ sendvalue: event.target.value.replace(/\D/, '') })}
                                                className="sendcoin h-100" style={{
                                                    backgroundColor: "#354737",
                                                    borderRadius: "8px 0px 0px 8px", color: "#ffffff", border: "none", outline: "none"
                                                }} />
                                            <InputGroupButtonDropdown style={{ backgroundColor: "#354737", borderRadius: "0px 8px 8px 0px", color: "#ffffff" }} direction="right" setActiveFromChild={true} addonType="append" isOpen={this.state.sendOpen} toggle={async (e) => await this.setState({ sendOpen: !this.state.sendOpen })}>
                                                <DropdownToggle style={{ backgroundColor: "#485F4B", borderRadius: "0px 8px 8px 0px", color: "#ffffff", border: "none", outline: "none" }}>
                                                    {this.state._sendcoins.coin}{' '}
                                                    {this.state._sendcoins.name}{' '}<FaAngleDown />
                                                </DropdownToggle>
                                                <DropdownMenu style={{ backgroundColor: "#354737", borderRadius: "8px 8px 8px 8px", color: "#ffffff", border: "none", outline: "none", marginTop: "3.5em", marginLeft: "-10em" }}>
                                                    {this._coins.map((a, i) => {
                                                        return (
                                                            <DropdownItem key={i} className="dhover" style={{ color: "#ffffff", backgroundColor: (this.state.send === a.id) ? "#485F4B" : "" }}
                                                                // onClick={() => { this._send = i; alert(this._send)}}
                                                                onClick={(i) => { this.setState({ send: a.id, _sendcoins: { name: a.name, id: a.id, coin: a.coin } }) }}
                                                            >
                                                                {a.coin}{a.name}</DropdownItem>
                                                        );
                                                    })}
                                                    {/* active={(a.id === this.state.send) ? true : false}  async ()=> await this.setState({send:a.id})*/}
                                                </DropdownMenu>
                                            </InputGroupButtonDropdown>
                                        </InputGroup>
                                    </Col>
                                    <Col lg="2" md="6" sm="6" className="mt-2">
                                        <img className="img-fluid" src={require("../images/swapicon.svg")} alt="Swap" />
                                    </Col>
                                    <Col lg="4" md="12" sm="12" className="mt-2">
                                        <InputGroup style={{ height: "52px" }}>
                                            <Input readonly="readonly" type="text"
                                                value={this.state.sendvalue * this.state.rate}
                                                // value={this.state.getvalue}
                                                // onChange={event => this.setState({ getvalue: event.target.value.replace(/\D/, '') })}
                                                className="getcoin h-100" style={{
                                                    backgroundColor: "#354737",
                                                    borderRadius: "8px 0px 0px 8px", color: "#ffffff", border: "none", outline: "none"
                                                }} />
                                            <InputGroupButtonDropdown style={{ backgroundColor: "#354737", borderRadius: "0px 8px 8px 0px", color: "#ffffff" }} direction="right" setActiveFromChild={true} addonType="append" isOpen={this.state.getOpen} toggle={async (e) => await this.setState({ getOpen: !this.state.getOpen })}>
                                                <DropdownToggle style={{ backgroundColor: "#485F4B", borderRadius: "0px 8px 8px 0px", color: "#ffffff", border: "none", outline: "none" }}>

                                                    {this.state._getcoins.coin}{' '}
                                                    {this.state._getcoins.name}{' '}<FaAngleDown />
                                                </DropdownToggle>
                                                <DropdownMenu style={{ backgroundColor: "#354737", borderRadius: "8px 8px 8px 8px", color: "#ffffff", border: "none", outline: "none", marginTop: "3.5em", marginLeft: "-10em" }}>

                                                    {this._coins.map((a, i) => {
                                                        return (
                                                            <DropdownItem key={i} className="dhover" style={{ color: "#ffffff", backgroundColor: (this.state.get === a.id) ? "#485F4B" : "" }}
                                                                // onClick={() => {this._get = i; alert(this._get)}}
                                                                onClick={(i) => { this.setState({ get: a.id, _getcoins: { name: a.name, id: a.id, coin: a.coin } }) }}
                                                            >
                                                                {a.coin}<tab /> {a.name}</DropdownItem>
                                                        );
                                                    })}
                                                    {/* active = {(a.id === this.state.get) ? true : false  async (e) => await this.setState({ get: a.id })*/}
                                                </DropdownMenu>
                                            </InputGroupButtonDropdown>
                                        </InputGroup>
                                    </Col>
                                </Row>}

                            <div className="justify-content-center align-content-center text-center mx-auto my-auto pt-3">
                                {(window.location.pathname.split("/")[2] === "earn") ?
                                    <button onClick={async () => { await this.setState({ modal: true }) }} className="btn text-light button-small btn-sm px-5"
                                        style={{ fontSize: "24dp", backgroundColor: "#317333", borderRadius: "10px" }}>
                                        {(this.state.liquidityvalue === "Add Liquidity") ? 'Pool' : 'Remove'}</button>
                                    :
                                    <button onClick={async () => { await this.setState({ modal: true }) }} className="btn text-light button-small btn-sm px-5" style={{ fontSize: "24dp", backgroundColor: "#317333", borderRadius: "10px" }}>Swap</button>
                                }
                            </div>
                            <Row className="justify-content-center align-content-center text-center mx-auto py-3">
                                <Col lg="6" md="6" sm="6">
                                    <span onClick={async (e) => await this.setState({ showdetail: !this.state.showdetail })} className="text-light" style={{ fontWeight: "normal", cursor: "pointer", fontStyle: "normal", fontSize: "0.7em", fontFamily: "PT Sans", color: "#ffffff" }}>Details <FaAngleDown /></span>
                                </Col>
                            </Row>
                            {(this.state.showdetail) ?
                                <Row className="justify-content-center align-content-center text-center mx-auto mt-1 mb-5">

                                    {(window.location.pathname.split("/")[2] === "earn") ?
                                        <Col lg="9" md="9" sm="9" style={{ backgroundColor: "#354737", borderRadius: "10px" }} className=" mx-4  py-3">
                                            {(this.state.liquidityvalue === "Add Liquidity") ?

                                                <Row className="justify-content-center align-content-center">
                                                    <Col sm="7" lg="7" md="7">
                                                        <p className="text-center text-break" style={{ fontWeight: "normal", fontStyle: "normal", fontSize: "0.8em", fontFamily: "PT Sans", color: "#ffffff" }}>
                                                            {this.state.sendvalue} {this.state._sendcoins.name} has historic returns of 23.2% APY or .0232 BTC interest per year
                                                    </p>
                                                    </Col>
                                                    <Col sm="12" lg="12" md="12">
                                                        <Row>
                                                            <Col className="text-light align-content-start justify-content-start" sm="6" lg="6" md="6">
                                                                <p style={{ fontWeight: "normal", fontStyle: "normal", fontSize: "0.8em", fontFamily: "PT Sans", color: "#ffffff" }}>Current Pool Size</p>
                                                            </Col>
                                                            <Col className="text-light align-content-end justify-content-end" sm="6" lg="6" md="6">
                                                                <p style={{ fontWeight: "normal", fontStyle: "normal", fontSize: "0.8em", fontFamily: "PT Sans", color: "#ffffff" }}>450.392 BTC</p>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                                :
                                                <Row>
                                                    <Col sm="12" lg="12" md="12">
                                                        <Row>
                                                            <Col className="text-light align-content-start justify-content-start" sm="6" lg="6" md="6">
                                                                <p className={(this.props.ismobile)?"":"text-right"} style={{ fontWeight: "normal", fontStyle: "normal", fontSize: "0.8em", fontFamily: "PT Sans", color: "#ffffff" }}>Current Pool Size</p>
                                                            </Col>
                                                            <Col className="text-light align-content-end justify-content-end" sm="1" lg="1" md="1">
                                                                <p className={(this.props.ismobile)?"":"text-right"} style={{ fontWeight: "normal", fontStyle: "normal", fontSize: "0.8em", fontFamily: "PT Sans", color: "#ffffff" }}>{this.state.pool}</p>
                                                            </Col>
                                                            <Col className="text-light align-content-start justify-content-start" sm="1" lg="1" md="1">
                                                                <p className={(this.props.ismobile)?"":"text-left"} style={{ fontWeight: "normal", fontStyle: "normal", fontSize: "0.8em", fontFamily: "PT Sans", color: "#ffffff" }}>{this.state._sendcoins.name}</p>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col sm="12" lg="12" md="12">
                                                        <Row>
                                                            <Col className="text-light align-content-start justify-content-start" sm="6" lg="6" md="6">
                                                                <p className={(this.props.ismobile)?"":"text-right"} style={{ fontWeight: "normal", fontStyle: "normal", fontSize: "0.8em", fontFamily: "PT Sans", color: "#ffffff" }}>Your Share Size</p>
                                                            </Col>
                                                            <Col className="text-light align-content-end justify-content-end" sm="1" lg="1" md="1">
                                                                <p className={(this.props.ismobile)?"":"text-right"} style={{ fontWeight: "normal", fontStyle: "normal", fontSize: "0.8em", fontFamily: "PT Sans", color: "#ffffff" }}>{this.state.share}</p>
                                                            </Col>
                                                            <Col className="text-light align-content-start justify-content-start" sm="1" lg="1" md="1">
                                                                <p className={(this.props.ismobile)?"":"text-left"} style={{ fontWeight: "normal", fontStyle: "normal", fontSize: "0.8em", fontFamily: "PT Sans", color: "#ffffff" }}>{this.state._sendcoins.name}</p>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col sm="12" lg="12" md="12">
                                                        <Row>
                                                            <Col className="text-light align-content-start justify-content-start" sm="6" lg="6" md="6">
                                                                <p className={(this.props.ismobile)?"":"text-right"} style={{ fontWeight: "normal", fontStyle: "normal", fontSize: "0.8em", fontFamily: "PT Sans", color: "#ffffff" }}>Original Stake</p>
                                                            </Col>
                                                            <Col className="text-light align-content-end justify-content-end" sm="1" lg="1" md="1">
                                                                <p className={(this.props.ismobile)?"":"text-right"} style={{ fontWeight: "normal", fontStyle: "normal", fontSize: "0.8em", fontFamily: "PT Sans", color: "#ffffff" }}>{this.state.stake}</p>
                                                            </Col>
                                                            <Col className="text-light align-content-start justify-content-start" sm="1" lg="1" md="1">
                                                                <p className={(this.props.ismobile)?"":"text-left"} style={{ fontWeight: "normal", fontStyle: "normal", fontSize: "0.8em", fontFamily: "PT Sans", color: "#ffffff" }}>{this.state._sendcoins.name}</p>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            }
                                        </Col>
                                        :
                                        <Col lg="9" md="9" sm="9" style={{ backgroundColor: "#354737", borderRadius: "10px" }} className=" mx-4  py-3">
                                            <Row className="align-content-center justify-content-center">
                                                <Col lg="7" md="7" sm="7" className="justify-content-center align-content-center">
                                                    <p className="text-center text-break" style={{ fontWeight: "normal", fontStyle: "normal", fontSize: "0.8em", fontFamily: "PT Sans", color: "#ffffff" }}>
                                                        You are selling <b>{this.state.sendvalue} {this.state._sendcoins.name}</b> for at least <b>{this.state.sendvalue * this.state.rate} {this.state._getcoins.name}</b> Expected Price Slippage: <b>{this.state.slippage}%</b>  Additional slippage limit: <b>{this.state.slippage}%</b> fee disclosures
                                                    </p>
                                                </Col>
                                            </Row>
                                            {/* <p className="text-center text-break" style={{ fontWeight: "normal", fontStyle: "normal", fontSize: "0.8em", fontFamily: "PT Sans", color: "#ffffff" }}>
                                        You are selling <b>{this.state.sendvalue} {this.state._sendcoins.name}</b> for at least <b>{this.state.sendvalue * this.state.rate} {this.state._getcoins.name}</b> <br />Expected Price Slippage: <b>{this.state.slippage}%</b>  <br />Additional slippage limit: <b>{this.state.slippage}%</b>  <br />fee disclosures
                                    </p> */}
                                        </Col>
                                    }
                                </Row>
                                : null
                            }
                            {(window.location.pathname.split("/")[2] === "earn") ? null :
                                <Row className="justify-content-center align-content-center mx-auto">
                                    {(this.state.transactions) ?
                                    
                                        <Col lg="12" sm="12" md="12" className="min-vh-100 mt-5 pt-5">
                                            <p className="text-light" style={{ fontWeight: "bolder", fontSize: "2em", fontFamily: "PT Sans",}}>Your Recent Transactions</p>
                                            <span className="text-light" style={{ fontSize: "0.8em", fontFamily: "PT Sans", }}><b>Connected Address:</b> {
                                                this.state.wallet.substr(0, 6) + "..." + this.state.wallet.substr(this.state.wallet.length - 5, this.state.wallet.length)
                                            }</span>
                                            <Table responsive hover borderless className="mt-4">
                                                <thead  style={{
                                                    fontSize: "0.8em", fontFamily: "PT Sans",  color:"#ffffff",
                                                     backgroundColor: "#354737", boxShadow:" 0px 4px 4px rgba(0, 0, 0, 0.2005)"
                                                }}>
                                                    <tr>
                                                        <th>Created</th>
                                                        <th>Proxy Address</th>
                                                        <th>Confirmations</th>
                                                        <th>Sent</th>
                                                        <th>Received</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this._history.map((eleos, i)=>{
                                                        return (
                                                            <tr key={i} className="dhover justify-content-center align-content-center text-center"
                                                             onClick={async ()=>await this.setState({transactionDetails:i, transactionModal:!this.state.transactionModal})}>
                                                                <td className="text-light justify-content-center align-content-center text-center my-auto">{eleos.created}</td>
                                                                <td className="text-light justify-content-center align-content-center text-center my-auto">{
                                                                    eleos.address.substr(0, 6) + "..." + eleos.address.substr(eleos.address.length - 5, eleos.address.length)
                                                                }</td>
                                                                <td className="text-light justify-content-center align-content-center text-center my-auto">
                                                                    <img alt={`${eleos.confirmations} of 6`} width="30%" height="30%" src={require(`../images/${eleos.confirmations}.svg`)} className="img-fluid" /></td>
                                                                <td className="text-light justify-content-center align-content-center text-center my-auto">{eleos.sent} {eleos.sentname}</td>
                                                                <td className="text-light justify-content-center align-content-center text-center my-auto">{eleos.received} {eleos.receivedname}</td>
                                                                <td>
                                                                    <p style={{ color: "#000000", borderRadius:"5px", backgroundColor: (eleos.status === "Liquidated") ? "#D4533B" : (eleos.status === "Completed") ? "#317333" : "#DAA520" }}>
                                                                        {eleos.status}</p></td>
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </Table>
                                        </Col>
                                    : null    
                                }
                                </Row>
                            
                        }

                        
                        </Col>
                    </Row>
                </div>
                {/* transaction details modal */}
                <Modal
                    style={{  minWidth: (this.props.ismobile) ? "60%" : "60%", overflowX:"hidden"}}
                    className="dmodal  mx-auto"
                    wrapClassName="dmodal  mx-auto"
                    modalClassName="dmodal  mx-auto"
                    backdropClassName="dmodal  mx-auto"
                    contentClassName="dmodal  mx-auto" centered isOpen={this.state.transactionModal}
                    toggle={async () => await this.setState({ transactionModal: !this.state.transactionModal })}>
                    <ModalBody style={{ backgroundColor: "#1f2820" }} className="align-content-center justify-content-center py-5" >
                        <Row><Col md='12' lg='12' sm='12' className="justify-content-end align-content-end"><span className="ml-auto">{closeBtn}</span></Col></Row>
                        <Row className="justify-content-center align-content-center"><Col lg="12" md="12" sm="12" className="justify-content-center align-content-center">
                            <p className="text-light text-center" style={{ fontWeight: "bolder", fontSize: (this.props.ismobile) ? "1.3em" : "2em", fontFamily: "PT Sans", }}>
                                Transaction Details</p>
                        </Col></Row>
                        <Row className="justify-content-center align-content-center">
                            <Col lg="5" md="9" sm="9" className="justify-content-center align-content-center text-center text-light">
                                <p style={{ fontWeight: "normal", fontFamily: "PT Sans",fontSize:"0.9em"}}>Sent: {this._history[`${this.state.transactionDetails}`].created}</p> 
                            </Col>
                        </Row>
                        <Row className="justify-content-center align-content-center">
                            <Col lg="9" md="9" sm="9" className="justify-content-center align-content-center text-center text-light">
                                <p className="mx-auto" style={{ color: "#000000", width:"10em", borderRadius: "5px", backgroundColor: (this._history[`${this.state.transactionDetails}`].status === "Liquidated") ? "#D4533B" : (this._history[`${this.state.transactionDetails}`].status === "Completed") ? "#317333" : "#DAA520" }}>
                                    {this._history[`${this.state.transactionDetails}`].status}</p>
                            </Col>
                        </Row>
                        <Row className="justify-content-center align-content-center">
                            <Col lg="6" md="9" sm="9" className="justify-content-center align-content-center text-light  my-3">
                                <Col className="w-100 h-100 py-3" style={{backgroundColor:"#354737", boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.2005)", borderRadius:"20px"}}>
                                    <p className="text-center" style={{ fontWeight: "normal", fontFamily: "PT Sans",fontSize:"0.9em"}}>
                                        Sent {this._history[`${this.state.transactionDetails}`].sentname} ({this._history[`${this.state.transactionDetails}`].sentfullname})</p>
                                    <Row className="justify-content-center align-content-center text-center text-light">
                                        <Col lg="4" md="4" sm="4" className="justify-content-center align-content-center text-center text-light">
                                            {this._history[`${this.state.transactionDetails}`].sentcoin}
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-center align-content-center text-center text-light">
                                        <Col lg="4" sm="4" md="4" className="align-content-center justify-content-center text-center text-light my-2">
                                            <p style={{fontFamily:"PT Sans", fontStyle:"normal", fontWeight:"bold", fontSize:"1.2em"}}>
                                                {this._history[`${this.state.transactionDetails}`].sent}
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="6" md="6" sm="6">
                                            <p style={{color:"#757975", fontFamily:"PT Sans", fontStyle:"normal", fontWeight:"normal", fontSize:"0.7em"}}>To</p>
                                        </Col>
                                        <Col lg="6" md="6" sm="6">
                                            <p style={{color:"#ffffff", fontFamily:"PT Sans", fontStyle:"normal", fontWeight:"normal", fontSize:"0.9em"}}>
                                                {
                                                    this._history[`${this.state.transactionDetails}`].target.substr(0, 6) + "..." +
                                                    this._history[`${this.state.transactionDetails}`].target.substr(
                                                        this._history[`${this.state.transactionDetails}`].target.length - 5,
                                                        this._history[`${this.state.transactionDetails}`].target.length)
                                                }
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="6" md="6" sm="6">
                                            <p style={{ color: "#757975", fontFamily: "PT Sans", fontStyle: "normal", fontWeight: "normal", fontSize: "0.7em" }}>
                                                Fees   
                                            </p>
                                        </Col>
                                        <Col lg="6" md="6" sm="6">
                                            <p style={{color:"#ffffff", fontFamily:"PT Sans", fontStyle:"normal", fontWeight:"normal", fontSize:"0.9em"}}>
                                                {this._history[`${this.state.transactionDetails}`].fees}{this._history[`${this.state.transactionDetails}`].sentname}
                                                <span><i id="liquidity"><img alt="i" width="20px" className="img-fluid ml-2"
                                                    src={require("../images/infoicon.svg")} /></i><Tooltip placement="top"
                                                        isOpen={this.state.feetooltip} target="liquidity" toggle={async (e) => await this.setState({ feetooltip: !this.state.feetooltip })} >
                                                        info
                                                </Tooltip></span> 
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="6" md="6" sm="6">
                                            <p style={{color:"#757975", fontFamily:"PT Sans", fontStyle:"normal", fontWeight:"normal", fontSize:"0.7em"}}>Transaction</p>
                                        </Col>
                                        <Col lg="6" md="6" sm="6">
                                            <p style={{color:"#ffffff", fontFamily:"PT Sans", fontStyle:"normal", fontWeight:"normal", fontSize:"0.9em"}}>
                                                {
                                                    this._history[`${this.state.transactionDetails}`].target.substr(0, 6) + "..." +
                                                    this._history[`${this.state.transactionDetails}`].target.substr(
                                                        this._history[`${this.state.transactionDetails}`].target.length - 5,
                                                            this._history[`${this.state.transactionDetails}`].target.length)
                                                }
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="6" md="6" sm="6">
                                            <p style={{color:"#757975", fontFamily:"PT Sans", fontStyle:"normal", fontWeight:"normal", fontSize:"0.7em"}}>Confirmations</p>
                                        </Col>
                                        <Col lg="6" md="6" sm="6">
                                            <p style={{color:"#ffffff", fontFamily:"PT Sans", fontStyle:"normal", fontWeight:"normal", fontSize:"0.7em"}}>
                                                <img alt={`${this._history[`${this.state.transactionDetails}`].confirmations} of 6`} width="30%" height="30%" src={require(`../images/${this._history[`${this.state.transactionDetails}`].confirmations}.svg`)} className="img-fluid" />
                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Col>
                            <Col lg="6" md="9" sm="9" className="justify-content-center align-content-center text-light my-3">
                                <Col className="w-100 h-100 py-3" style={{backgroundColor:"#354737", boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.2005)", borderRadius:"20px"}}>
                                    <p className="text-center" style={{ fontWeight: "normal", fontFamily: "PT Sans",fontSize:"0.9em"}}>
                                        Received {this._history[`${this.state.transactionDetails}`].receivedname} ({this._history[`${this.state.transactionDetails}`].receivedfullname})</p>
                                    <Row className="justify-content-center align-content-center text-center text-light">
                                        <Col lg="4" md="4" sm="4" className="justify-content-center align-content-center text-center text-light">
                                            {this._history[`${this.state.transactionDetails}`].receivedcoin}
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-center align-content-center text-center text-light">
                                        <Col lg="4" sm="4" md="4" className="align-content-center justify-content-center text-center text-light my-2">
                                            <p style={{fontFamily:"PT Sans", fontStyle:"normal", fontWeight:"bold", fontSize:"1.2em"}}>
                                                {this._history[`${this.state.transactionDetails}`].received}
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="6" md="6" sm="6">
                                            <p style={{color:"#757975", fontFamily:"PT Sans", fontStyle:"normal", fontWeight:"normal", fontSize:"0.7em"}}>Destination</p>
                                        </Col>
                                        <Col lg="6" md="6" sm="6">
                                            <p style={{color:"#ffffff", fontFamily:"PT Sans", fontStyle:"normal", fontWeight:"normal", fontSize:"0.9em"}}>
                                                {
                                                    this._history[`${this.state.transactionDetails}`].address.substr(0, 6) + "..." +
                                                    this._history[`${this.state.transactionDetails}`].address.substr(
                                                        this._history[`${this.state.transactionDetails}`].address.length - 5,
                                                        this._history[`${this.state.transactionDetails}`].address.length)
                                                }
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="6" md="6" sm="6">
                                            <p style={{color:"#757975", fontFamily:"PT Sans", fontStyle:"normal", fontWeight:"normal", fontSize:"0.7em"}}>Proxy</p>
                                        </Col>
                                        <Col lg="6" md="6" sm="6">
                                            <p style={{color:"#ffffff", fontFamily:"PT Sans", fontStyle:"normal", fontWeight:"normal", fontSize:"0.9em"}}>
                                                {
                                                    this._history[`${this.state.transactionDetails}`].address.substr(0, 6) + "..." +
                                                    this._history[`${this.state.transactionDetails}`].address.substr(
                                                        this._history[`${this.state.transactionDetails}`].address.length - 5,
                                                        this._history[`${this.state.transactionDetails}`].address.length)
                                                }
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="6" md="6" sm="6">
                                            <p style={{color:"#757975", fontFamily:"PT Sans", fontStyle:"normal", fontWeight:"normal", fontSize:"0.7em"}}>Transaction</p>
                                        </Col>
                                        <Col lg="6" md="6" sm="6">
                                            <p style={{color:"#ffffff", fontFamily:"PT Sans", fontStyle:"normal", fontWeight:"normal", fontSize:"0.9em"}}>
                                                {
                                                    this._history[`${this.state.transactionDetails}`].address.substr(0, 6) + "..." +
                                                    this._history[`${this.state.transactionDetails}`].address.substr(
                                                        this._history[`${this.state.transactionDetails}`].address.length - 5,
                                                        this._history[`${this.state.transactionDetails}`].address.length)
                                                }
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="12" md="12" sm="12">
                                            <p style={{ color: "#757975", fontFamily: "PT Sans", fontStyle: "normal", fontWeight: "normal", fontSize: "0.7em" }}>Blocks Until Liquidation
                                                <span><i id="liquidity"><img alt="i" width="18px" className="img-fluid ml-2"
                                                    src={require("../images/infoicondark.svg")} /></i><Tooltip placement="top"
                                                        isOpen={this.state.blocktooltip} target="liquidity" toggle={async (e) => await this.setState({ blocktooltip: !this.state.blocktooltip })} >
                                                        info
                                                </Tooltip></span> 
                                            </p>
                                        </Col>
                                        <Col lg="12" md="12" sm="12" className="mt-n4">
                                            <p className="mt-2 text-center" style={{color:"#ffffff", fontFamily:"PT Sans", fontStyle:"normal", fontWeight:"normal", fontSize:"1.8em"}}>
                                                {this._history[`${this.state.transactionDetails}`].blocks}
                                            </p>
                                            <p style={{ color: "#757975", fontFamily: "PT Sans", fontStyle: "normal", fontWeight: "normal", fontSize: "0.8em" }}
                                                className="mt-n4 text-center">out of 10,000</p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Col>
                        </Row>

                    </ModalBody>
                </Modal>
                {/* transaction details modal */}
            </>
        );
  }
}
