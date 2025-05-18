export interface CourseOutline {
  course_title: string;
  modules: Module[];
}

export interface Module {
  title: string;
  lessons: Lesson[];
}

export interface Lesson {
  title: string;
  summary?: string;
}
