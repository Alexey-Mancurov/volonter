let api = {
    coursesList: [{
            url: 'https://a.ru',
            title: 'Курс 1',
            totalPoints: 0,
            totalsAsks: 10,
            /* Узнать, надо ли это и что это вообще такое */
            totalLessons: 5,
            checkLessons: 2,
            lessonsList: {
                module: {
                    title: 'Модуль 1',
                    id: 1,
                    lessons: [{
                            // по course/lesson/{id}
                            url: 'https://a.ru',
                            title: 'Урок 1',
                            check: false,
                            urlVideo: 'urlVideo',
                            linkVideo: 'linkVideo',
                            // Узнать, как получить, если нужен iframe, либо локальное видео
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

                            id: 1,
                        },
                        {
                            url: 'https://a.ru',
                            title: 'Урок 2',
                            check: false,
                            id: 2,
                        },
                        // возможность получать Уроки в определенном количестве, а не все сразу через указание параметра в get запросе
                    ]
                    // возможность получать Модули в определенном количестве, а не все сразу через указание параметра в get запросе
                }

            },
            id: 1,
        },
        {
            url: 'https://a.ru',
            title: 'Курс 2',
            id: 2,
        },
        // возможность получать Курсы в определенном количестве, а не все сразу через указание параметра в get запросе
    ],

    testsList:[
        {
            id: 1,
            isCompleted: false,
            isSuccess: null,
            data:[
                {
                    ask: 'Кто это?',
                    options: [
                        {text: 'Распределение в команду '},
                        {text: 'Стажировка'},
                        {text: 'Инструктаж  '},
                        {text: 'Заполнение анкеты'},
                    ]
                },
                {
                    ask: 'Кто это 2?',
                    options: [
                        {text: 'Распределение в команду '},
                        {text: 'Стажировка'},
                        {text: 'Инструктаж  '},
                        {text: 'Заполнение анкеты'},
                    ]
                }
            ]
        }
    ]
}