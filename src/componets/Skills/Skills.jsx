import Frontend from './Frontend';
import Backend from './Backend';
import Tools from './Tools'
import './Skills.css'
import Others from './others';
const Skills = () => {
    return (
        <div className="skills section" id="skills">
            <h2 className="section__title">
                Skills
            </h2>
            <span className="section__subtitle">My tecnical level</span>
            <div className="skills__container container">
                <Frontend />
                <Backend />
                <Tools/>
                <Others/>
            </div>
        </div>
    )
}

export default Skills