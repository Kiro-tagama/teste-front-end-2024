export interface Video {
  id: string;
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
