import Header from "../Layout/Header"
import Footer from "../Layout/Footer"
import CardStatus from "./CardStatus"
import Grafik from "./Grafik"
import Table from "./Table"
function IndexPage(props){
    const contentStyle={
        height:"100vh",
        top:"50px",
        backgroundColor:"#f1f1f9",
        overflowX:"hidden",
        
    }
    return(
      
        <div style={contentStyle}>
           <Header/>
        <div className="container content position-relative" >
            <div className="row">
                <div className="col-12 d-flex justify-content-center text-center">
                    <p className="mt-5 h2">KAWAL CORONA</p>
                </div>
                <div className="col-12 d-flex justify-content-center text-center">
                <p className="mt-3 f12">Website pemantauan Corona</p>
                </div>
            </div>
            <CardStatus  isGlobal={props.isGlobal} response={props.response ? props.response : 0}/>
            <Grafik isGlobal={props.isGlobal}/>
            <Table isGlobal={props.isGlobal}/>
        </div>
        <Footer rightContent={""}
                leftContent={<div className="ml-2 font-weight-bold">corona @2020 All Right Reserved</div>} />
        </div>
    )
}


export default IndexPage