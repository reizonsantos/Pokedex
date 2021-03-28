import React, { useState } from 'react';
import '../Pokedex/PokedexComponent.css'
import { Input, AutoComplete } from 'antd';


const SearchComponent = (props) => {
    return (
        <AutoComplete
        dropdownMatchSelectWidth={252}
        style={{
            width: 300,
        }}
        // options={options}
        // onSelect={onSelect}
        // onSearch={handleSearch}
        >
      <Input.Search size="large" placeholder="input here" enterButton />
    </AutoComplete>
    )
}

export default SearchComponent