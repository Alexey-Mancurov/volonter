export type StoreType = typeof store;
const store = {
  coursesAPI: {
    courses: {
      success: true,
      items: [
        {
          id: 29,
          title: "IT",
          description: "Тут все про IT",
          tier: true,
          isFavorite: false,
          isCompleted: false,
          author: {
            img: "ссылка лого",
            name: "имя автора",
          },
        },
        {
          id: 33,
          title: "Шитье",
          description: "Балалаллаа",
          tier: false,
          isFavorite: false,
          isCompleted: false,
          author: {
            img: "ссылка лого",
            name: "имя автора",
          },
        },
        {
          id: 40,
          title: "Волтерство",
          description: "Описание",
          tier: false,
          isFavorite: false,
          isCompleted: false,
          author: {
            img: "ссылка лого",
            name: "имя автора",
          },
        },
      ],
    },
    coursesReviews: {
      29: {
        items: [
          {
            img: "/upload/forum/avatar/1cc/1cc29bde46ad25154fdd26d9116317b0.jpg",
            name: " Илья Вячеславович",
            date: "20.10.2021",
            text: "Cool, very good. Not Bad",
            rating: "4",
          },
          {
            img: "/upload/forum/avatar/1cc/1cc29bde46ad25154fdd26d9116317b0.jpg",
            name: " Илья Вячеславович",
            date: "21.10.2021",
            text: "Отзыв ",
            rating: "5",
          },
        ],
        num: 2,
      },
      33: {
        items: [
          {
            img: "/upload/forum/avatar/1cc/1cc29bde46ad25154fdd26d9116317b0.jpg",
            name: "Петр Петрович",
            date: "20.10.2021",
            text: "Cool, very good. Not Bad",
            rating: "3",
          },
        ],
        num: 1,
      },
      40: {
        items: [
          {
            img: "/upload/forum/avatar/1cc/1cc29bde46ad25154fdd26d9116317b0.jpg",
            name: "Василий Васильевич",
            date: "20.10.2021",
            text: "Cool, very good. Not Bad",
            rating: "3",
          },
        ],
        num: 1,
      },
    },
    coursesDetail: {
      29: {
        id: "29",
        title: "IT",
        description: "Тут все про IT",
        time: "1:30",
        linkVideo: "https://www.youtube.com/watch?v=n7p_k6XZLyQ",
        whatGive: ["Лакала", "Дададада", "Фыафыафы"],
        howNeed: "Для того кто чайник",
        contentList: [
          {
            title: "Title 1",
            text: "Content1",
          },
          {
            title: "Title 2",
            text: "Content2",
          },
        ],
        willLearnList: {
          title: "asdfasdfsadf",
          items: ["фвафвыа", "вафываыф", "выафыва"],
        },
        experts: [
          {
            img: "/upload/forum/avatar/1cc/1cc29bde46ad25154fdd26d9116317b0.jpg",
            name: "Егоров Илья Вячеславович",
            description:
              "Лалалалалазвозпфрвпрфывдлопфркщшпсфткшщфртщша фштщуар щшупащшф пзшаузцу",
          },
        ],
      },
      33: {
        id: "33",
        title: "Шитье",
        description: "Балалаллаа",
        time: "1:30",
        linkVideo: "https://www.youtube.com/watch?v=gvBaHZYts4U",
        whatGive: ["dfasdf", "adsfsadfsda"],
        howNeed: "adsfagasdgasdgasdfds",
        contentList: [
          {
            title: "asdfasdf",
            text: "sdfsadfasda",
          },
        ],
        willLearnList: {
          title: "sdfasdf",
          items: ["asdfasdf", "adfasdf"],
        },
        experts: [],
      },
      40: {
        id: "40",
        title: "Волонтерство",
        description: "Описание",
        time: "1:30",
        linkVideo: "https://www.youtube.com/watch?v=gvBaHZYts4U",
        whatGive: ["dfasdf", "adsfsadfsda"],
        howNeed: "adsfagasdgasdgasdfds",
        contentList: [
          {
            title: "asdfasdf",
            text: "sdfsadfasda",
          },
        ],
        willLearnList: {
          title: "sdfasdf",
          items: ["asdfasdf", "adfasdf"],
        },
        experts: [],
      },
    },
    courseItem: {
      29: {
        success: true,
        course: {
          id: "29",
          title: "IT",
          description: "Тут все про IT",
          totalPoints: 2,
          totalAsks: 7,
          checkAsks: 2,
          totalLessons: 3,
          checkLessons: 0,
        },
      },
      33: {
        success: true,
        course: {
          id: "33",
          title: "Шитье",
          description: "Балалаллаа",
          totalPoints: 2,
          totalAsks: 0,
          checkAsks: 2,
          totalLessons: 1,
          checkLessons: 0,
        },
      },
      40: {
        success: true,
        course: {
          id: "40",
          title: "Волонтерство",
          description: "Описание",
          totalPoints: 5,
          totalAsks: 3,
          checkAsks: 1,
          totalLessons: 1,
          checkLessons: 0,
        },
      },
    },
    modules: {
      29: {
        success: true,
        items: [
          {
            id: 30,
            title: "Web",
          },
          {
            id: 31,
            title: "С#",
          },
        ],
      },
      33: {
        success: true,
        items: [
          {
            id: 34,
            title: "Иглой",
          },
        ],
      },
      40: {
        success: true,
        items: [
          {
            id: 21,
            title: "Помощь",
          },
          {
            id: 22,
            title: "Поддержка",
          },
        ],
      },
    },
    lessons: {
      29: {
        30: {
          success: true,
          items: [
            {
              id: 2989,
              title: "HTML",
              check: false,
              materials: [
                {
                  text: "Проверка excel",
                  link: "/upload/vote/5e5/5e5e4a873d4597ec097ca3e192340a1e.xlsx",
                },
              ],
            },
            {
              id: 3139,
              title: "PHP",
              check: false,
            },
          ],
        },
        31: {
          success: true,
          items: [
            {
              id: 3690,
              title: "Все о переменных C#",
              check: false,
            },
          ],
        },
      },
      33: {
        34: {
          success: true,
          items: [
            {
              id: 3731,
              title: "Лалалала",
              check: false,
            },
          ],
        },
      },
      40: {
        21: {
          success: true,
          items: [
            {
              id: 1000,
              title: "Дома",
              check: false,
              materials: [
                {
                  text: "Проверка excel",
                  link: "/upload/vote/5e5/5e5e4a873d4597ec097ca3e192340a1e.xlsx",
                },
              ],
            },
            {
              id: 1001,
              title: "На улице",
              check: false,
            },
          ],
        },
        22: {
          success: true,
          items: [
            {
              id: 1002,
              title: "Все о переменных C#",
              check: false,
            },
          ],
        },
      },
    },
    lessonItem: {
      29: {
        30: {
          2989: {
            success: true,
            item: {
              id: 2989,
              title: "HTML",
              check: false,
              linkVideo: "https://www.youtube.com/watch?v=vIjf7KMMq8k",
              description: "Объяснение про HTML подробно",
              info: ["testinfo", "testinfo", "testinfo"],
              idListTests: ["3098"],
            },
          },
          3139: {
            success: true,
            item: {
              id: 3139,
              title: "PHP",
              check: false,
              linkVideo: "https://www.youtube.com/watch?v=a6xtQQqx1tg",
              description: "Тут подробный урок по PHP",
              info: ["Переменные", "Условия", "Циклы"],
              idListTests: ["3143"],
            },
          },
        },
        31: {
          3690: {
            success: true,
            item: {
              id: 3690,
              title: "Все о переменных C#",
              check: false,
              linkVideo: "https://www.youtube.com/watch?v=_8yZYhAkQjQ",
              description: "Тут подробный рассказ о переменных в C#",
              info: ["целочисленные переменные", "Булевые переменные"],
              idListTests: ["3691"],
            },
          },
        },
      },
      33: {
        34: {
          3731: {
            success: true,
            item: {
              id: 3731,
              title: "Лалалала",
              check: false,
              linkVideo: null,
              description: "Лалалалла",
              info: ["Лалалал", "Аллалаа", "Алалала"],
              idListTests: [],
            },
          },
        },
      },
      40: {
        21: {
          1000: {
            success: true,
            item: {
              id: 1000,
              title: "HTML",
              check: false,
              linkVideo: "https://www.youtube.com/watch?v=vIjf7KMMq8k",
              description: "Объяснение про HTML подробно",
              info: ["testinfo", "testinfo", "testinfo"],
              idListTests: ["1000"],
            },
          },
          1001: {
            success: true,
            item: {
              id: 1001,
              title: "PHP",
              check: false,
              linkVideo: "https://www.youtube.com/watch?v=a6xtQQqx1tg",
              description: "Тут подробный урок по PHP",
              info: ["Переменные", "Условия", "Циклы"],
              idListTests: ["1000"],
            },
          },
        },
        22: {
          1002: {
            success: true,
            item: {
              id: 1002,
              title: "Все о переменных C#",
              check: false,
              linkVideo: "https://www.youtube.com/watch?v=_8yZYhAkQjQ",
              description: "Тут подробный рассказ о переменных в C#",
              info: ["целочисленные переменные", "Булевые переменные"],
              idListTests: ["1000"],
            },
          },
        },
      },
    },
  },
  TestsAPI: {
    tests: {
      success: true,
      items: [
        {
          id: 3098,
          name: "Какой то тест",
          isCompleted: true,
          isSuccess: false,
          totalAsks: 2,
        },
        {
          id: 3143,
          name: "Какой то тест 2",
          isCompleted: true,
          isSuccess: false,
          totalAsks: 3,
        },
        {
          id: 3691,
          name: "Тест по переменным C#",
          isCompleted: false,
          isSuccess: null,
          totalAsks: 2,
        },
      ],
    },
    testItem: {
      3098: {
        id: 3098,
        name: "Какой то тест",
        isCompleted: true,
        isSuccess: false,
        idLesson: "2989",
        totalAsks: 2,
        askList: [
          {
            id: 1,
            ask: "Вопрос 1",
            options: ["Ответ 1", "Ответ 2", "Ответ 3", "Ответ 4"],
          },
          {
            id: 2,
            ask: "Вопрос 2",
            options: ["Ответ 1", "Ответ 2", "Ответ 3", "Ответ 4"],
          },
          {
            id: 3,
            ask: "Вопрос 3",
            options: ["Ответ 1", "Ответ 2", "Ответ 3", "Ответ 4"],
          },
          {
            id: 4,
            ask: "Вопрос 4",
            options: ["Ответ 1", "Ответ 2", "Ответ 3", "Ответ 4"],
          },
        ],
      },
      3143: {
        id: 3143,
        name: "Какой то тест 2",
        isCompleted: true,
        isSuccess: false,
        idLesson: "3139",
        totalAsks: 3,
        askList: [
          {
            id: 1,
            ask: "Какой то вопрос",
            options: [
              "Какой то ответ 1",
              "Какой то ответ 2",
              "Какой то ответ 3",
              "Какой то ответ 3",
            ],
          },
          {
            id: 2,
            ask: "Какой то вопрос",
            options: [
              "Какой то ответ 1",
              "Какой то ответ 2",
              "Какой то ответ 3",
              "Какой то ответ 4",
            ],
          },
          {
            id: 3,
            ask: "Какой то вопрос",
            options: [
              "Какой то ответ 1",
              "Какой то ответ 2",
              "Какой то ответ 3",
              "Какой то ответ 4",
            ],
          },
        ],
      },
      3691: {
        id: 3691,
        name: "Тест по переменным C#",
        isCompleted: false,
        isSuccess: null,
        idLesson: "3690",
        totalAsks: 2,
        askList: [
          {
            id: 5,
            ask: "Вопрос 1",
            options: ["Ответ1", "Ответ2", "Ответ3", "Ответ4"],
          },
          {
            id: 6,
            ask: "Вопрос 2",
            options: ["Ответ1", "Ответ2", "Ответ3", "Ответ4"],
          },
        ],
      },
    },
  },
  fakeCompleted: {
    successTest: true,
    successAsks: 3,
    totalAsk: 4,
    noCorrectAsks: [
      {
        id: 1,
        ask: "А в чом смысол?",
        options: ["Ответ 1", "Ответ 2", "Ответ 3", "Ответ 4"],
      },
    ],
  },
};

export default store;
