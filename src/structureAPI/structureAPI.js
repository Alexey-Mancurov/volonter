let api = {
    coursesList: [{
        courseId: 1,
        title: 'Курс 1',
        totalPoints: 0,
        totalsAsks: 10,
        checkAsks: 1,
        totalLessons: 5,
        checkLessons: 2,
        modulesList: {
            module: {
                title: 'Модуль 1',
                moduleId: 1,
                lessonsList: [{
                    lessonId: 1,
                    url: 'https://a.ru',
                    title: 'Урок 1',
                    check: false,
                    linkVideo: 'linkVideo',
                    description: 'Описание',
                    infoSteps: [{
                            text: 'Изучим - это 1'
                        },
                        {
                            text: 'Изучим - это 2'
                        },
                        {
                            text: 'Изучим - это 3'
                        }
                    ],
                }, ]
            }
        },
    }, ],

    testsList: [{
        testId: 1,
        isCompleted: false,
        isSuccess: null,
        data: [{
            ask: 'Кто это?',
            options: [{
                    text: 'Распределение в команду '
                },
                {
                    text: 'Стажировка'
                },
                {
                    text: 'Инструктаж  '
                },
                {
                    text: 'Заполнение анкеты'
                },
            ]
        }, ]
    }]
}