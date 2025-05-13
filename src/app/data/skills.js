import {
  SiNestjs,
  SiTypescript,
  SiExpress,
  SiJest,
  SiVitest,
  SiRedis,
  SiAmazondynamodb,
  SiApachekafka,
  SiDatadog,
  SiMetabase,
  SiKubernetes,
  SiGithubactions,
} from 'react-icons/si';
import {
  FaNodeJs,
  FaReact,
  FaCss3,
  FaHtml5,
  FaFigma,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaGitlab,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { MdMiscellaneousServices } from 'react-icons/md';
import { DiMongodb, DiRedis } from 'react-icons/di';
import { RiTailwindCssFill } from 'react-icons/ri';
import { BiLogoPostgresql } from 'react-icons/bi';
import { VscSymbolMisc } from 'react-icons/vsc';

const CATEGORIES = {
  BACKEND: 'backend',
  FRAMEWORK: 'framework',
  FRONTEND: 'frontend',
  LANGUAGE: 'language',
  TESTING: 'testing',
  DATABASE: 'Database',
  CACHING: 'caching',
  QUEUE: 'queue',
  MONITORING: 'monitoring',
  CLOUD_INFRA: 'cloud and infrastructure',
  VERSION_CONTROL: 'version control',
  CICD: 'CICD',
};
export default [
  { title: 'Nest Js', icon: <SiNestjs />, description: '', categories: [CATEGORIES.BACKEND, CATEGORIES.FRAMEWORK] },
  { title: 'Node Js', icon: <FaNodeJs />, description: '', categories: [CATEGORIES.BACKEND] },
  { title: 'Typescript', icon: <SiTypescript />, description: '', categories: [CATEGORIES.LANGUAGE] },
  { title: 'Javascript', icon: <IoLogoJavascript />, description: '', categories: [CATEGORIES.LANGUAGE] },
  { title: 'Express', icon: <SiExpress />, description: '', categories: [CATEGORIES.BACKEND, CATEGORIES.FRAMEWORK] },
  {
    title: 'Microservices',
    icon: <MdMiscellaneousServices />,
    description: '',
    categories: [CATEGORIES.BACKEND, CATEGORIES.CLOUD_INFRA],
  },
  { title: 'React', icon: <FaReact />, description: '', categories: [CATEGORIES.FRONTEND, CATEGORIES.FRAMEWORK] },
  { title: 'Tailwind', icon: <RiTailwindCssFill />, description: '', categories: [CATEGORIES.FRONTEND] },
  { title: 'CSS', icon: <FaCss3 />, description: '', categories: [CATEGORIES.FRONTEND] },
  { title: 'HTML', icon: <FaHtml5 />, description: '', categories: [CATEGORIES.FRONTEND] },
  { title: 'Figma', icon: <FaFigma />, description: '', categories: [CATEGORIES.FRONTEND] },
  {
    title: 'Jest',
    icon: <SiJest />,
    description: '',
    categories: [CATEGORIES.BACKEND, CATEGORIES.FRONTEND, CATEGORIES.TESTING],
  },
  {
    title: 'Vitest',
    icon: <SiVitest />,
    description: '',
    categories: [CATEGORIES.BACKEND, CATEGORIES.FRONTEND, CATEGORIES.TESTING],
  },
  {
    title: 'Postgresql',
    icon: <BiLogoPostgresql />,
    description: '',
    categories: [CATEGORIES.BACKEND, CATEGORIES.DATABASE],
  },
  { title: 'Redis', icon: <SiRedis />, description: '', categories: [CATEGORIES.DATABASE, CATEGORIES.CACHING] },
  { title: 'MongoDB', icon: <DiMongodb />, description: '', categories: [CATEGORIES.BACKEND, CATEGORIES.DATABASE] },
  {
    title: 'DynamoDB',
    icon: <SiAmazondynamodb />,
    description: '',
    categories: [CATEGORIES.BACKEND, CATEGORIES.DATABASE],
  },
  { title: 'Kafka', icon: <SiApachekafka />, description: '', categories: [CATEGORIES.BACKEND, CATEGORIES.QUEUE] },
  { title: 'Redis Streams', icon: <DiRedis />, description: '', categories: [CATEGORIES.BACKEND, CATEGORIES.QUEUE] },
  { title: 'BullMQ', icon: <VscSymbolMisc />, description: '', categories: [CATEGORIES.BACKEND, CATEGORIES.QUEUE] },
  { title: 'Datadog', icon: <SiDatadog />, description: '', categories: [CATEGORIES.BACKEND, CATEGORIES.MONITORING] },
  {
    title: 'Metabase',
    icon: <SiMetabase />,
    description: '',
    categories: [CATEGORIES.MONITORING, CATEGORIES.DATABASE],
  },
  { title: 'AWS', icon: <FaAws />, description: '', categories: [CATEGORIES.CLOUD_INFRA] },
  { title: 'Kubernetes', icon: <SiKubernetes />, description: '', categories: [CATEGORIES.CLOUD_INFRA] },
  { title: 'Docker', icon: <FaDocker />, description: '', categories: [CATEGORIES.CLOUD_INFRA] },
  { title: 'Git', icon: <FaGitAlt />, description: '', categories: [CATEGORIES.VERSION_CONTROL] },
  { title: 'Github', icon: <FaGithub />, description: '', categories: [CATEGORIES.VERSION_CONTROL] },
  { title: 'Github Actions', icon: <SiGithubactions />, description: '', categories: [CATEGORIES.CICD] },
  { title: 'Gitlab', icon: <FaGitlab />, description: '', categories: [CATEGORIES.VERSION_CONTROL] },
  { title: 'Gitlab CI', icon: <FaGitlab />, description: '', categories: [CATEGORIES.CICD] },
];
