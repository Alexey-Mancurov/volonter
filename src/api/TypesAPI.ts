export type GenericBlockType<A> = {
  success: boolean;
  items: Array<A>;
};

export type CoursesType = GenericBlockType<{
  id: number | string;
  title: string;
  description: string;
  tier: boolean;
  isFavorite: boolean;
  isCompleted: boolean;
  author: {
    img: string;
    name: string;
  };
}>;

export type ModulesType = GenericBlockType<{
  id: number | string;
  title: string;
}>;

export type LessonsType = GenericBlockType<{
  id: number | string;
  title: string;
  check: boolean;
  materials?: Array<{
    text: string;
    link: string;
  }>;
}>;

export type CoursesReviewsType = {
  num: number;
  items: Array<{
    img?: string;
    name: string;
    date: string;
    text: string;
    rating: string;
  }>;
};

export type CoursesDetailType = {
  id: string | number;
  title: string;
  description: string;
  time: string;
  linkVideo: string;
  whatGive: Array<string>;
  howNeed: string;
  contentList: Array<{
    title: string;
    text: string;
  }>;
  willLearnList: {
    title: string;
    items: Array<string>;
  };
  experts: {
    img: string;
    name: string;
    description: string;
  };
};

export type CourseItemType = {
  success: boolean;
  course: {
    id: number | string;
    title: string;
    description: string;
    totalPoints: number;
    totalAsks: number;
    checkAsks: number;
    totalLessons: number;
    checkLessons: number;
  };
};

export type LessonItemType = {
  success: boolean;
  item: {
    id: string | number;
    title: string;
    check: boolean;
    linkVideo: string;
    description: string;
    info: Array<string>;
    idListTests: Array<string>;
  };
};
