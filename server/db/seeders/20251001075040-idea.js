"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Ideas", [
      {
        title: "Математические квесты",
        description:
          "Создать квесты с загадками и задачами, где для продвижения нужно решать примеры.",
        vote_count: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Игра «Найди лишнее»",
        description:
          "Развивает умение классифицировать и выделять закономерности.",
        vote_count: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Логические комиксы",
        description:
          "Мини-комиксы с заданиями на внимательность и причинно-следственные связи.",
        vote_count: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Соревнования между друзьями",
        description:
          "Возможность устраивать дуэли по задачам на логику и интеллект.",
        vote_count: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Уроки от персонажей",
        description:
          "Задачи объясняются сказочными героями, которые дают подсказки.",
        vote_count: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Головоломки с блоками",
        description:
          "Визуальные задачки с фигурами и тетрис-подобными элементами.",
        vote_count: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Разгадывание шифров",
        description:
          "Детям нужно расшифровать кодовое слово по подсказкам и логическим правилам.",
        vote_count: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Серия заданий на внимание",
        description:
          "Игры, где нужно быстро находить отличия или ошибки в рисунках.",
        vote_count: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Игра «Построй цепочку»",
        description:
          "Соединение фактов или картинок в правильную последовательность.",
        vote_count: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Мини-олимпиады",
        description:
          "Соревнования с наградами за регулярное прохождение заданий.",
        vote_count: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Развитие мышления",
        description:
          "3D-головоломки, где нужно мысленно вращать фигуры и находить правильный ответ.",
        vote_count: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Истории-детективы",
        description:
          "Ребёнок становится сыщиком и решает логические задачки, чтобы раскрыть тайну.",
        vote_count: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Игра «Составь алгоритм»",
        description: "Базовые шаги программирования в виде пазлов и стрелочек.",
        vote_count: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Кроссворды для детей",
        description: "Небольшие кроссворды с заданиями на мышление и внимание.",
        vote_count: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Счёт в уме",
        description:
          "Весёлые тренажёры для быстрой арифметики без калькулятора.",
        vote_count: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Игра «Собери слово»",
        description:
          "Из набора букв собрать правильное слово, используя подсказки.",
        vote_count: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Тренажёр памяти",
        description:
          "Карточки и картинки, которые нужно запомнить и найти пары.",
        vote_count: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Головоломки с лабиринтами",
        description:
          "Найти выход, используя правила движения и логические подсказки.",
        vote_count: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Задачи на классификацию",
        description:
          "Разделение предметов на группы по признакам (цвет, форма, назначение).",
        vote_count: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Игра «Угадай предмет»",
        description:
          "Серия вопросов, где ребёнок сужает круг вариантов, пока не найдёт ответ.",
        vote_count: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Задачи на скорость реакции",
        description:
          "Нужно выбрать правильный ответ как можно быстрее, чтобы заработать очки.",
        vote_count: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Логические турниры",
        description:
          "Рейтинги и таблицы лидеров для детей, которые любят соревноваться.",
        vote_count: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Игра «Собери картинку»",
        description:
          "Пазлы, которые требуют внимательности и пространственного мышления.",
        vote_count: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Ребусы и загадки",
        description: "Традиционные ребусы в современном игровом оформлении.",
        vote_count: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Викторины по фактам",
        description:
          "Тесты на знания из разных областей: природа, техника, история.",
        vote_count: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Игра «Продолжи ряд»",
        description:
          "Задачи на закономерности: выбрать, какой элемент идёт дальше.",
        vote_count: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Тренажёр для шахматистов",
        description: "Мини-задачи на шахматную логику и стратегию.",
        vote_count: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Головоломки с числами",
        description:
          "Судоку и его адаптированные аналоги для детей младшего возраста.",
        vote_count: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Игра «Логическая ферма»",
        description:
          "Развивающая игра, где нужно решать задачки, чтобы ухаживать за животными.",
        vote_count: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Миссии на командную работу",
        description:
          "Онлайн-игры, где дети объединяются и решают головоломки вместе.",
        vote_count: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Ideas", null, {});
  },
};
