import { 
  SiNextdotjs, 
  SiTypescript, 
  SiPostgresql, 
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { FaBrain, FaLink, FaGraduationCap, FaChartLine, FaLaptopCode } from 'react-icons/fa'

export default function TechIcon({ tag }: { tag: string }) {
  const iconProps = { className: "w-3 h-3 mr-1.5 inline shrink-0" }
  
  switch(tag.toLowerCase()) {
    case 'next.js':
      return <SiNextdotjs {...iconProps} />
    case 'typescript':
      return <SiTypescript {...iconProps} />
    case 'postgresql':
      return <SiPostgresql {...iconProps} />
    case 'vs code extension':
      return <VscVscode {...iconProps} />
    case 'ai':
    case 'local llm':
    case 'ollama':
      return <FaBrain {...iconProps} />
    case 'blockchain':
      return <FaLink {...iconProps} />
    case 'capstone':
      return <FaGraduationCap {...iconProps} />
    case 'applied analytics':
      return <FaChartLine {...iconProps} />
    case 'system development':
      return <FaLaptopCode {...iconProps} />
    default:
      return null
  }
}
