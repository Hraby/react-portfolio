import "./projectDetail.css"

export default function ProjectDetailPage(props){

    return(
        <div className="projectDetail">
            <a href="/">Zpět</a>
            <div className="projectDetailInfo">
                <h1>{props.name}</h1>
                <p>{props.shortDescription}</p>
            </div>
            <div className="projectDetailImg">
                <img className="img" src={`/${props.img}`} alt=""/>
                <img className="img2" src={`/${props.img}`} alt=""/>
            </div>
            <div className="projectDetailIntroducing">
                <h2>Popis</h2>
                <p>{props.description}</p>
            </div>
            <div className="projectDetailTech">
                <h2>Technologie</h2>
                <img src="https://www.datocms-assets.com/48294/1671537942-mern-stack-1-mern-stack.png"></img>
            </div>
        </div>
    )
}