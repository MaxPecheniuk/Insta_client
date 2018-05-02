export interface MediaTypes {
  id: string;
  user: {
    id: string;
    full_name: string;
    profile_picture: string;
    username: string;
  };
  images: {
    thumbnail: {
      width: number;
      height: number;
      url: string;
    };
    low_resolution: {
      width: number;
      height: number;
      url: string;
    };
    standard_resolution: {
      width: number;
      height: number;
      url: string;
    }
  };
  created_time: number | Date ;
  caption: null;
  user_has_liked: false;
  likes: {
    count: number;
  };
  tags: Array<any>;
  filter: string;
  comments: {
    count: number;
  };
  type: string;
  link: string;
  location: {
    latitude: number;
    longitude: number;
    name: string;
    id: number;
  };
  attribution: null;
  users_in_photo: Array<any>;
}
