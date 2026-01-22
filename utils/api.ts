import { ProcessedVideos } from '../types/youtube';

// Use port 3002 if specified, otherwise default to 3001
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3002';

/**
 * Fetches processed YouTube videos from the backend API
 */
export async function fetchYouTubeVideos(): Promise<ProcessedVideos> {
  try {
    console.log(`[Frontend] Fetching videos from: ${API_BASE_URL}/api/youtube/videos`);
    
    const response = await fetch(
        `${API_BASE_URL}/api/youtube/videos?t=${Date.now()}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          cache: 'no-store',
        }
      );
      
    
    if (!response.ok) {
      // Try to get error details from response
      let errorMessage = `Failed to fetch videos: ${response.status} ${response.statusText}`;
      try {
        const errorData = await response.json();
        if (errorData.message) {
          errorMessage = errorData.message;
        } else if (errorData.error) {
          errorMessage = `${errorData.error}: ${errorData.message || errorData.details || ''}`;
        }
      } catch (e) {
        // If response is not JSON, use status text
      }
      
      console.error('[Frontend] API request failed:', {
        status: response.status,
        statusText: response.statusText,
        message: errorMessage
      });
      
      throw new Error(errorMessage);
    }
    
    const data = await response.json();
    console.log('[Frontend] Successfully fetched videos:', {
      featured: data.featured ? 'Yes' : 'No',
      longVideos: data.longVideos?.length || 0,
      shorts: data.shorts?.length || 0
    });
    
    return data;
  } catch (error) {
    console.error('[Frontend] Error fetching YouTube videos:', error);
    
    // Provide more helpful error messages
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error(`Cannot connect to backend server at ${API_BASE_URL}. Make sure the server is running.`);
    }
    
    throw error;
  }
}

/**
 * Formats date string to readable format
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

/**
 * Formats duration in seconds to readable format (e.g., "4m 13s" or "60s")
 */
export function formatDuration(seconds: number): string {
  if (seconds < 60) {
    return `${seconds}s`;
  }
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  if (remainingSeconds === 0) {
    return `${minutes}m`;
  }
  return `${minutes}m ${remainingSeconds}s`;
}
