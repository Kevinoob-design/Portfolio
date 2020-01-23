import React from "react";
import ProjectModel from "./ProjectModel.json";
import ProjectComponet from "./ProjectComponent";

const Projects = () => {
    return ( 
        <div className="pt-16 justify-center ProjectsContainer">
            <div className="max-w-6xl md:p-12 lg:flex lg:flex-wrap mx-auto">
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