import "./aboutMe.css"

export default function AboutMe() {
    return (
        <div className="aboutme">
            <h1>O mně</h1>
            <div className="aboutme-info">
                <div className="aboutme-text">
                    <h2>Jmenuji se Michal Hrabal</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur vitae diam non enim vestibulum interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis viverra diam non justo. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus.</p>
                </div>
                <div className="aboutme-img">
                    <img className="aboutme-man" src="/3dman2.png" alt=""/>
                    <div className="aboutme-3dman"></div>
                </div>
            </div>
        </div>
    )
}