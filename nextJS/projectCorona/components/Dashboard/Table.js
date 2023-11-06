const Table =(props) =>{

    return (
        <div className="row mb-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-14">
                <div className="card">
                    <div className="card-Header">
                        <h3 className="card-title">{props.isGlobal ? "data kasus corona dunia" : "data kasus corona Indonesia"}</h3>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bodered table-hover mb-0 text-nowrap">
                                <thead>
                                    <tr>
                                    <th>NO.</th>
                                    <th>{props.isGlobal ? "NEGARA" : "provinsi"}</th>
                                    <th>Positif</th>
                                    <th>Sembuh</th>
                                    <th>Meninggal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {props.isGlobal ?
                                    <tr>
                                        <td>1.</td>
                                        <td>Amerika</td>
                                        <td>300000</td>
                                        <td>50000</td>
                                        <td>21000</td>
                                        </tr>
                                        :
                                        <tr>
                                        <td>1.</td>
                                        <td>jawa timur</td>
                                        <td>1000</td>
                                        <td>12500</td>
                                        <td>1240</td>
                                    </tr>
}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Table