const Rating = ({times})=>{

    return (
        <>{
            Array.from({length: times}).map((_item, index) => <img style={{height: '20px'}}key={index} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd7rdnK_1oeA-o-87qe1kHfSOn5Sb0JQPTJtxUBpuQXm1yiFvpkw1wr--NjpZam7RDsms&usqp=CAU'/>)
        }
        {
            Array.from({length: 6-times}).map((_item, index) => <img style={{height: '20px'}}key={index} src='https://www.pngfind.com/pngs/m/8-80639_transparent-background-star-icon-png-download-.png'/>)
        }
        
         
         </>
    )
}

export default Rating