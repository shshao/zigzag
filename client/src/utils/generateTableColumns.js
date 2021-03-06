const mapFun = col => ({
    Header: col,
    accessor: col,
    style: {
        width: 'auto'
    }
});

export default (columns, width) =>{
    if(width <= 800) {
     return ['Symbol', 'Trend', 'Current', 'fresh'].map(mapFun)
    }
    return columns.map(mapFun);
} 
