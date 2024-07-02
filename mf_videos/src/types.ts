export interface Video {
  id: {
    videoId:string
  };
  snippet: {
    title: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
}

export interface ApiError {
  error: {
    code: number;
  };
}
