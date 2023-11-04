import Header from "../Layout/Header"

function IndexPage(){
    const contentStyle={
        minheight:"90vh",
        top:"50px",
        backgroundColor:"#f1f1f9",
        overflowX:"hidden",
        
    }
    return(
      
        <div style={{backgroundColor:"#f1f1f9",marginTop:"45px"}}>
           <Header/>
        <div className="container content position-relative" style={contentStyle}>
            <div className="row">
                <div className="col-12 d-flex justify-content-center text-center">
                    <p className="mt-5 h2">KAWAL CORONA</p>
                </div>
                <div className="col-12 d-flex justify-content-center text-center">
                <p className="mt-3 f12">Website pemantauan Corona</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default IndexPage