import "../styles/Skills.css";

function Skills() {
    return (
        <div className="skills">
            <div className="width">
                <div className="years">
                    <div><h1>We are expert in this field since almost 20 years.</h1></div>
                    <div>
                        Proin gravida nibh vel velit auctor aliquet aenean sollicitudin,
                        lorem quis bibendum auctor, nisi elit cuat ipsum, nec sagittis sem
                        nibh id elit duis sed odio sit nibh vulputate cursus a sit amet
                        mauris morbi accumsan.
                    </div>
                </div>
                <div className="stats">
                    <div className="content">
                        <div className="grid">
                            <p className="font-bold">ARCHITECTURE <span className="float-right">72%</span></p>
                            <div className="bg"><div className="orangered"></div></div>
                        </div>
                        <div className="grid">
                            <p className="font-bold">BUILDING <span className="float-right">20%</span></p>
                            <div className="bg"><div className="orangered two"></div></div>
                        </div>
                        <div className="grid">
                            <p className="font-bold">CONSTRUCTION <span className="float-right">100%</span></p>
                            <div className="bg"><div className="orangered one"></div></div>
                        </div>
                        <div className="grid">
                            <p className="font-bold">PLANNING <span className="float-right">50%</span></p>
                            <div className="bg"><div className="orangered five"></div></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Skills;
