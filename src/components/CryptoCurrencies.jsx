import React,{useState,useEffect} from 'react';
import millify from 'millify';
import {Link} from 'react-router-dom';
import {Card,Row,Col,Input} from 'antd';
import Loader from './Loader';
import { useGetCryptosQuery } from '../services/cryptoApi';

const CryptoCurrencies = ({simplified}) => {
    const count = simplified?10:100;
    const {data:cryptosList,isFetching} = useGetCryptosQuery(count);
    const [cryptos,setCryptos] = useState([]);
    const [searchTerm,setSearchTerm] = useState('');

    useEffect(()=>{
        const filterdData = cryptosList?.data?.coins.filter((coin)=>coin.name.toLowerCase().includes(searchTerm.toLowerCase()));

        setCryptos(filterdData);
    },[cryptosList,searchTerm]);

    console.log(cryptos);
    if(isFetching) return <Loader></Loader>;
    return (
        <>
            {!simplified &&(
                <div className="search-crypto">
                <Input placeholder="Search Cryptocurrency" onChange={(e)=>setSearchTerm(e.target.value)}/>
                </div>
            )}
            <Row gutter={[32,32]} className="crypto-card-container">
                {cryptos?.map((currency)=>(
                    <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
                        <Link to={`/crypto/${currency.id}`}>
                            <Card 
                                title={`${currency.rank}. ${currency.name}`}
                                extra={<img className="crypto-image" src={currency.iconUrl}></img>}
                                hoverable
                            >
                                <p>價格: {millify(currency.price)}</p>
                                <p>市值: {millify(currency.marketCap)}</p>
                                <p>日漲幅: {millify(currency.change)}%</p>
                            </Card>
                        </Link>
                    </Col>
                ))}

            </Row>
        </>
    )
}

export default CryptoCurrencies
