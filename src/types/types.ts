export type TContext = {
  course: {
    success: boolean;
    course: TCourse;
  };
  courseId: number;
  getCourseId: (id: number) => void;
  modules: {
    success: boolean;
    items: TModulesItems;
  };
};

export type TCourse = {
  checkAsks: number;
  checkLessons: number;
  description: string;
  id: string | number;
  title: string;
  totalAsks: number;
  totalLessons: number;
  totalPoints: number;
};

export type TModulesItems =
  | Array<{
      id: number | string;
      title: string;
    }>
  | JSX.Element |JSX.Element[];

export type TLessonList = {
  items: TLessonItems | never
  success: boolean;

} | undefined;

export type TLessonItems = Array<{
  check: boolean;
  id: number | string;
  materials?: Array<{
    text: string;
    link: string;
  }>;
  title: string;
}> | undefined;
