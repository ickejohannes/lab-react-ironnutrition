import { Divider, Input } from 'antd';

function Search({ searchString, setter }) {
    return (
        <>
        <Divider>Search</Divider>

        <label>Search</label>
        <Input value={searchString} type="text" onChange={setter} />
        </>
    );
}

export default Search;