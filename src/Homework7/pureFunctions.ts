// Задание 1
export type Team = { name: string; score: number };

export const getTopName = (teams: Team[]): string => {
    return teams.sort((a, b) => b.score - a.score)[0].name;
};

// Задание 2
export type QsObj = Record<string, string | number | boolean | unknown>;

export const createQs = (qsObj: QsObj): string => {
    return Object.keys(qsObj)
        .map((item, key) => `${key ? '&' : '?'}${item}=${qsObj[item]}`)
        .join('');
};

// Задание 3

export const parseQs = (qs: string): QsObj => {
    return qs
        .substr(1)
        .split('&')
        .reduce((acc, elem) => {
            const arr = elem.split('=');
            return { ...acc, [arr[0]]: arr[1] };
        }, {});
};
