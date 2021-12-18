import React,{useState,useEffect} from 'react'
import {Button,Menu,Typography,Avatar} from 'antd';
import { Link } from 'react-router-dom';
import {HomeOutlined,MoneyCollectOutlined,BulbOutlined,FundOutlined,MenuOutlined,WalletOutlined} from '@ant-design/icons';

import icon from '../image/logo.png';
const Navbar = () => {
    const [activeMenu,setActiveMenu] = useState(true);
    const [screenSize,setScreenSize] = useState(null);

    useEffect(()=>{
        const handleResize = ()=> setScreenSize(window.innerWidth);

        window.addEventListener('resize',handleResize);
        handleResize();
        return ()=> window.removeEventListener('resize',handleResize);
    },[]);

    useEffect(()=>{
        if(screenSize<768){
            setActiveMenu(false);
        }else{
            setActiveMenu(true);
        }
    },[screenSize])

    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large"></Avatar>
                <Typography.Title level={2} className="logo">
                    <Link to={`/`}>虛擬貨幣網</Link>
                </Typography.Title>
                <Button className="menu-control-container" onClick={()=>setActiveMenu(!activeMenu)}>
                    <MenuOutlined></MenuOutlined>
                </Button>
            </div>
            {activeMenu &&(
                <Menu theme="dark">
                <Menu.Item icon={<HomeOutlined/>}>
                    <Link to={`/`}>首頁</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined/>}>
                    <Link to={`/cryptocurrencies`}>虛擬貨幣列表</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined/>}>
                    <Link to={`/exchanges`}>交易所</Link>
                </Menu.Item>
                <Menu.Item icon={<WalletOutlined/>}>
                    <Link to={`/cryptowallet`}>錢包</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined/>}>
                    <Link to={`/news`}>新聞</Link>
                </Menu.Item>
                </Menu>
            )}
            
            
        </div>
    )
}

export default Navbar
