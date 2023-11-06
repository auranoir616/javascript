import PropTypes from "prop-types"

const Footer =(props)=>{
    if(!props.leftContent && !props.rightContent){
        return null
    }
    return (
        <footer className="main-footer clearfix fixed-bottom bg-white border-top">
            {props.rightContent && (
                <div className="float-right d-none d-sm-inline" style={{color:"#6c757d"}}>
                    {props.rightContent}
                </div>
            )}
            {props.leftContent && props.leftContent}
        </footer>
    )
}

Footer.propTypes ={
    leftContent : PropTypes.element,
    rightContent : PropTypes.string,
}
export default Footer