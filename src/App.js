import React from 'react'
import {Routes,Route,Link} from 'react-router-dom';
import {Layout, Typography,Space} from 'antd';

import {Navbar,Exchanges,Homepage,CryptoCurrencies,News,CryptoDetails} from './components';
import './App.css'
const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar/>
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Routes>
                            <Route exact path="/" element={<Homepage/>}/>
                            <Route path="/exchanges" exact element={<Exchanges/>}/>
                            <Route path="/cryptocurrencies"  exact element={<CryptoCurrencies/>}/>
                            <Route path="/crypto/:coinId" exact element={<CryptoDetails/>}/>
                            <Route exact path="/news" exact element={<News/>}/>
                            <Route path="https://mumu.tw/ReactProject/CryptoWeb" element={<Homepage/>} />
                        </Routes>
                    </div>
                </Layout>
            <div className="footer" >
                <Typography.Title level={5} style={{color:'white',textAlign:'center'}}>
                    虛擬貨幣網 <br/>
                    學習用
                </Typography.Title>
                <Space>
                    <Link to="/">首頁</Link>
                    <Link to="/exchanges">交易所</Link>
                    <Link to="/news">新聞</Link>
                </Space>
            </div>
            </div>
        </div>
    )
}

export default App
