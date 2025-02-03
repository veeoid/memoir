
// types/index.ts
export interface BlogPost {
    id: number;
    title: string;
    content: string;
    image_url?: string;  // Make sure this matches your backend
    image?: string;
  }
  