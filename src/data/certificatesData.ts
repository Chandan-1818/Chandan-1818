export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  skills?: string[];
  imageUrl: string;
  credentialUrl?: string;
}

export const certificatesData: Certificate[] = [
  {
    id: 'aws-cloud-practitioner',
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'AWS Training & Certification',
    issueDate: 'JULY 10 2025',
    credentialId: 'Not Mentioned',
    skills: ['AWS', 'Cloud Computing', 'Security'],
    imageUrl: '/CERTIFICATES/AWS CLOUD PARCTITIONER ESSENTIALS.png',
    credentialUrl: 'https://aws.amazon.com/certification/'
  },
  {
    id: 'aws-lambda-foundations',
    title: 'AWS Lambda Foundations',
    issuer: 'AWS Training & Certification',
    issueDate: 'MAY 22 2026',
    credentialId: 'Not Mentioned',
    skills: ['AWS Lambda', 'Serverless', 'Compute'],
    imageUrl: '/CERTIFICATES/AWS LAMBDA FOUNDATIONS.png',
    credentialUrl: 'https://aws.amazon.com/training/'
  },
  {
    id: 'cloud-application-developer',
    title: 'Cloud Application Developer',
    issuer: 'National Council for Vocational Education and Training',
    issueDate: 'AUGUST 12 2025',
    credentialId: 'Not Mentioned',
    skills: ['Cloud', 'Application Development'],
    imageUrl: '/CERTIFICATES/CLOUD APPLICATION DEVELOPER.png'
  },
  {
    id: 'serverless-mindset',
    title: 'Getting into Serverless Mindset',
    issuer: 'AWS Training & Certification',
    issueDate: 'MAY 22 2026',
    credentialId: 'Not Mentioned',
    skills: ['Serverless', 'Cloud Architecture'],
    imageUrl: '/CERTIFICATES/GETTING INTO SERVERLESS MINDSET.png'
  },
  {
    id: 'aws-cloud-essentials',
    title: 'Getting Started with AWS Cloud Essentials',
    issuer: 'AWS Training & Certification',
    issueDate: 'JULY 21 2025',
    credentialId: 'Not Mentioned',
    skills: ['AWS', 'Cloud Computing', 'Fundamentals'],
    imageUrl: '/CERTIFICATES/GETTING STARTED WITH AWS CLOUD ESSENTIALS.png',
    credentialUrl: 'https://aws.amazon.com/training/'
  },
  {
    id: 'introduction-to-containers',
    title: 'Introduction to Containers',
    issuer: 'AWS Training & Certification',
    issueDate: 'MAY 22 2026',
    credentialId: 'Not Mentioned',
    skills: ['Containers', 'Docker', 'Kubernetes'],
    imageUrl: '/CERTIFICATES/INTRODUCTION TO CONTAINERS.png',
    credentialUrl: 'https://aws.amazon.com/training/'
  },
  {
    id: 'introduction-to-serverless-development',
    title: 'Introduction to Serverless Development',
    issuer: 'AWS Training & Certification',
    issueDate: 'MAY 22 2026',
    credentialId: 'Not Mentioned',
    skills: ['Serverless', 'AWS Lambda', 'Cloud Functions'],
    imageUrl: '/CERTIFICATES/INTRODUCTION TO SERVERLESS DEPLOYMENT.png',
    credentialUrl: 'https://aws.amazon.com/training/'
  },
  {
    id: 'build-with-ai-agent-builder-camp',
    title: 'Build with AI Agent Builder Camp',
    issuer: 'GFG',
    issueDate: 'JUNE 04 2026',
    credentialId: 'Not Mentioned',
    skills: ['AI', 'Agent Building', 'Machine Learning'],
    imageUrl: '/CERTIFICATES/BUILD WITH AI AGENT BUILDER CAMP.png'
  }
];
