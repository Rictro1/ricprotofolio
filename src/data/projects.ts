import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'sia',
    title: 'SIA Kaputama Binjai',
    description:
      'A web based academic information system for STMIK Kaputama Binjai, built using PHP. This system provides separate access for admin, lecturers, and students to manage academic information and learning related data.',
    image: '/images/projects/project_1.png',
    imageAlt: 'sia kaputama',
    projectUrl: 'https://github.com/Rictro1/SIA-Project',
    tags: ['PHP', 'Javascript'],
    alignment: 'left',
  },
  {
    id: 'cyberdetective',
    title: 'Cyber Detective',
    description:
      'An interactive cybersecurity learning platform that helps users recognize online scam patterns through mission based challenges, AI analysis, and gamified learning.',
    image: '/images/projects/project_2.png',
    imageAlt: 'Lumina',
    projectUrl: 'https://cyber-detective-976218760355.asia-southeast1.run.app',
    tags: ['TypeScript', 'Gemini AI'],
    alignment: 'right',
  },
];
