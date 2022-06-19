

import IconText from './IconText'

const ProjectCard = ({ thumbnail, projectName, projectDescription,  toolList = [], linkList = []}) => {
    return (
        <div className="card-p">
            <div className="face face1">
                <div className="content">
                    {thumbnail}
                    <h3>{projectName}</h3>
                </div>
                
            </div>
            <div className="face face2">
                <div className="content mt-2 text-center">
                    <p>{projectDescription}</p>
                    <div className='flex flex-row absolute bottom-4 left-4'>
                        {
                            toolList.map((tool) => (
                                <IconText key={toolList.indexOf(tool)} icon={tool} curCount={0} />
                            ))
                        }
                    </div>
                    <div className='flex flex-row absolute bottom-3 right-0'>
                        {
                            linkList.map((link) => (
                                <a key={linkList.indexOf(link)} href={link.url} target="_blank" rel="noopener noreferrer"><IconText icon={link.icon} curCount={0} /></a>
                            ))
                        }       
                    </div>
                </div>
            </div>
     </div>
    )
  }
  
  export default ProjectCard