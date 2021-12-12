import React from 'react'
import millify from 'millify';
import { Typography,Row,Col,Statistic } from 'antd';
import {Link} from 'react-router-dom';
import { CryptoCurrencies,News } from '../components';
import Loader from './Loader';
import { useGetCryptosQuery } from '../services/cryptoApi';

const {Title} = Typography;

const Homepage = () => {
    const {data,isFetching} = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;
    if(isFetching) return <Loader></Loader>

    return (
        <>
            <Title level={2} className="heading">全球虛擬貨幣市場</Title>
            <Row>
                <Col span={12}><Statistic title="虛擬貨幣總數" value={globalStats.total}/></Col>
                <Col span={12}><Statistic title="虛擬貨幣交易所" value={millify(globalStats.totalExchanges)}/></Col>
                <Col span={12}><Statistic title="總市值" value={millify(globalStats.totalMarketCap)}/></Col>
                <Col span={12}><Statistic title="24小時交易量" value={millify(globalStats.total24hVolume)}/></Col>
                <Col span={12}><Statistic title="總市場" value={millify(globalStats.totalMarkets)}/></Col>
            </Row>
            <div className="home-heading-container">
                <Title level={2} className="home-title">前10大虛擬貨幣</Title>
                <Title level={2} className="show-more"><Link to="/cryptocurrencies">更多</Link></Title>
            </div>
            <CryptoCurrencies simplified/>
            <div className="home-heading-container">
                <Title level={2} className="home-title">最新新聞</Title>
                <Title level={2} className="show-more"><Link to="/news">更多</Link></Title>
            </div>
            <News simplified/>
        </>
    )
}

export default Homepage
