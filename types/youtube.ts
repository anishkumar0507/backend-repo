export interface YouTubeVideo {
  videoId: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  durationInSeconds: number;
}

export interface ProcessedVideos {
  heroVideo: YouTubeVideo | null;
  longVideos: YouTubeVideo[];
  shorts: YouTubeVideo[];
}
