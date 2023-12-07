import "./projectDetail.css"


export default function ProjectDetailPage(props){

    return(
        <div className="projectDetail">
            <div className="projectDetailInfo">
                <h1>{props.name}</h1>
                <p>{props.shortDescription}</p>
            </div>
            <div className="projectDetailImg">
                <img className="img" src={`/${props.img}`} alt=""/>
                <img className="img2" src={`/${props.img}`} alt=""/>
            </div>
            <div className="projectDetailIntroducing">
                <h2>Introducing</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
}