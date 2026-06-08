import { 
  SiNextdotjs, 
  SiTypescript, 
  SiPostgresql,
  SiDocker,
  SiSupabase,
  SiPrisma,
  SiSolidity,
  SiPolygon,
  SiTailwindcss,
  SiDjango,
  SiFlutter,
  SiPython,
  SiDart,
  SiCplusplus
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { 
  FaBrain, 
  FaLink, 
  FaGraduationCap, 
  FaChartLine, 
  FaLaptopCode,
  FaHardHat,
  FaRainbow,
  FaMicrochip,
  FaHourglassHalf
} from 'react-icons/fa'

export default function TechIcon({ tag }: { tag: string }) {
  const iconProps = { className: "w-3 h-3 mr-1.5 inline shrink-0" }
  
  switch(tag.toLowerCase()) {
    case 'next.js':
    case 'next.js 14 app router':
      return <SiNextdotjs {...iconProps} />
    case 'typescript':
    case 'typescript (next.js)':
      return <SiTypescript {...iconProps} />
    case 'postgresql':
      return <SiPostgresql {...iconProps} />
    case 'vs code extension':
      return <VscVscode {...iconProps} />
    case 'ai':
    case 'local llm':
    case 'ollama':
    case 'qwen3.5 4b':
    case 'gemini 1.5 flash':
      return <FaBrain {...iconProps} />
    case 'blockchain':
      return <FaLink {...iconProps} />
    case 'capstone':
      return <FaGraduationCap {...iconProps} />
    case 'applied analytics':
      return <FaChartLine {...iconProps} />
    case 'system development':
      return <FaLaptopCode {...iconProps} />
    case 'docker':
      return <SiDocker {...iconProps} />
    case 'supabase':
      return <SiSupabase {...iconProps} />
    case 'prisma':
      return <SiPrisma {...iconProps} />
    case 'hardhat':
      return <FaHardHat {...iconProps} />
    case 'solidity':
      return <SiSolidity {...iconProps} />
    case 'polygon amoy':
      return <SiPolygon {...iconProps} />
    case 'tailwindcss':
    case 'tailwind css':
      return <SiTailwindcss {...iconProps} />
    case 'rainbowkit':
      return <FaRainbow {...iconProps} />
    case 'iot':
      return <FaMicrochip {...iconProps} />
    case 'django':
      return <SiDjango {...iconProps} />
    case 'flutter':
      return <SiFlutter {...iconProps} />
    case 'python (django)':
      return <SiPython {...iconProps} />
    case 'dart (flutter)':
      return <SiDart {...iconProps} />
    case 'c++ (iot scripts)':
      return <SiCplusplus {...iconProps} />
    case 'in progress':
      return <FaHourglassHalf {...iconProps} />
    default:
      return null
  }
}
