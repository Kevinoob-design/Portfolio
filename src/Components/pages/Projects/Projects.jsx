import React from "react";
import ProjectModel from "./ProjectModel.json";
import ProjectComponet from "./ProjectComponent";

const Projects = () => {
    return ( 
        <div className="pt-16 justify-center ProjectsContainer">
            <div className="md:w-1/2 w-auto text-2xl text-center mx-auto shadow-inner rounded bg-gray-900"><b>PROJECTS</b></div>
            <div className="max-w-6xl lg:flex lg:flex-wrap mx-auto">
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