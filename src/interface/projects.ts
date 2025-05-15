export interface ProjectProps {
  id: string;
  title: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  apkUrl?: string;
  skills: string[];
  image: string;
  repoType: string;
}

export interface ProjectsSectionProps {
  title: string;
  projects: any[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
