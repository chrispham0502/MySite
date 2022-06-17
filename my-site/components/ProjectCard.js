

import IconText from './IconText'

const ProjectCard = ({ thumbnail, projectName, projectDescription,  toolList = [], linkList = []}) => {
    return (
        <div class="card-p">
            <div class="face face1">
                <div class="content">
                    {thumbnail}
                    <h3>{projectName}</h3>
                </div>
                
            </div>
            <div class="face face2">
                <div class="content mt-2 text-center">
                    <p>{projectDescription}</p>
                    <div className='flex flex-row absolute bottom-4 left-4'>
                        {
                            toolList.map((tool) => (
                                <IconText icon={tool} curCount={0} />
                            ))
                        }
                    </div>
                    <div className='flex flex-row absolute bottom-3 right-0'>
                        {
                            linkList.map((link) => (
                                <a href={link.url} target="_blank" rel="noopener noreferrer"><IconText icon={link.icon} curCount={0} /></a>
                            ))
                        }       
                    </div>
                </div>
            </div>
     </div>
    )
  }
  
  export default ProjectCard