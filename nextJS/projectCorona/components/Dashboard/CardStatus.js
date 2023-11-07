// import NumberFormat from 'react-number-format'
// const {sum} =require ("../../util/Library")

const CardStatus = (props)=>{
    console.log(props)
    return (
        <div className="row mt-3 ml-1 mr-1 mb-2">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                <div className="card bg-danger img-card box-primary-shadow border">
                    <div className="card-body">
                        <div className="d-flex">
                            <div className="text-white">
                                <p className="text-white mb-0">TOTAL POSITIF</p>
                                <h2 className="mb-0 number-font">{props.isGlobal ? props.response[0].positif : props.response[0].Confirmed}</h2>
                                <p className="text-white mb-0">ORANG</p>
                            </div>
                            <div className="ml-auto" style={{margin:"auto"}}>
                                <img src="images/positif.png" alt="positif" width="50" height="50"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                <div className="card bg-success img-card box-primary-shadow border">
                    <div className="card-body">
                        <div className="d-flex">
                            <div className="text-white">
                                <p className="text-white mb-0">TOTAL SEMBUH</p>
                                <h2 className="mb-0 number-font">{props.isGlobal ? props.response[0].sembuh : props.response[0].Recovered}</h2>
                                <p className="text-white mb-0">ORANG</p>
                            </div>
                            <div className="ml-auto" style={{margin:"auto"}}>
                                <img src="images/sembuh.png" alt="sembuh" width="50" height="50"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                <div className="card bg-secondary img-card box-primary-shadow border">
                    <div className="card-body">
                        <div className="d-flex">
                            <div className="text-white">
                                <p className="text-white mb-0">TOTAL MATI</p>
                                <h2 className="mb-0 number-font">{props.isGlobal ? props.response[0].meninggal : props.response[0].Deaths}</h2>
                                <p className="text-white mb-0">ORANG</p>
                            </div>
                            <div className="ml-auto" style={{margin:"auto"}}>
                                <img src="images/meninggal.png" alt="meninggal" width="50" height="50"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                <div className="card bg-info img-card box-primary-shadow border">
                    <div className="card-body">
                        <div className="d-flex">
                            <div className="text-white">
                                <p className="text-white mb-0">TOTAL AKTIF</p>
                                <h2 className="mb-0 number-font">{props.isGlobal ? props.response[0].kasus_aktif : props.response[0].Active}</h2>
                                <p className="text-white mb-0">ORANG</p>
                            </div>
                            <div className="ml-auto" style={{margin:"auto"}}>
                                <img src="images/aktif.png" alt="aktif" width="50" height="50"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardStatus