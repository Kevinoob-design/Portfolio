import React from "react";
import ProjectModel from "./ProjectModel.json";
import ProjectComponet from "./ProjectComponent";

const Projects = () => {
    return ( 
        <div className="pt-16 px-5 md:p-32 flex flex-wrap ProjectsContainer">
            <div className="w-full laptop\:w-full md:w-3/4">
                {ProjectModel.map(element => {
                    return <ProjectComponet params={element} />
                })}
            </div>
            {/* <div className="bg-aqua-900 w-1/4 p-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas exercitationem sapiente sequi debitis commodi labore rerum reiciendis. Quibusdam nostrum et beatae fugiat id, minima suscipit non esse asperiores laborum atque.
            </div> */}
        </div>
     );
}
export default Projects;