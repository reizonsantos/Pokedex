import React, {useState} from 'react'
import {Layout} from 'antd'
import {Container} from 'react-bootstrap'
import SearchComponent from '../Search/SearchComponent'

const {Content, Footer} = Layout

const PokedexComponent = () => {
    return (
        <Container>
            <Layout className="layout">
                <Content>
                    <div className='site-layout-content'>
                        <SearchComponent />
                    </div>
                </Content>
            </Layout>
        </Container>
    )
}

export default PokedexComponent