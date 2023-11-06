import React from "react";
import ChartComponentPie from "./ChartComponentPie";
import ChartComponentLine from "./chartComponentLine";
const Grafik = (props) =>{
    let dataCovid = null
    let data = null

    if(!props.isGlobal){
        dataCovid=[2,2,2,2,4,4,6,19,27,35]
        data={
            labels : ["2 mar","3 mar","4 mar","5 mar","6 mar","7 mar","8 mar","9 mar","10 mar"],
            datasets :[
                {
                    label: "jumlah positif",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor:  'rgba(229,56,50,0.4)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(299,56,56,1)',
                    pointBackgroundColor: '#fff', 
                    pointBorderWidth: 1,
                    pointHoverRadius: 10,
                    pointHoverBackgroundColor: 'rgba(299,56,56,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    // pointBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: dataCovid

                }

            ]
        }
    }
    const dataPie ={
        labels : [
            'Positif',
            'Sembuh',
            'Meninggal'
        ],
        datasets : [
            {
                data: [20000,12000,3000],
                backgroundColor:[
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ],
                pointHoverBackgroundColor:[
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ]
            }
        ]
    }
    return (
        <div className="row mb-5">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
                <div className="card overflow-hidden bg-white">
                    <div className="card-header">
                        <h3 className="card-title">{props.isGlobal ? "statistik virus corona Global":"statistik virus corona Indonesia"}</h3>
                    </div>
                    <div className="card-body">
                        <div className="chart-wrapper">
                            {props.isGlobal ? 
                            <ChartComponentPie data={dataPie} /> : 
                         <ChartComponentLine data={data} />
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Grafik