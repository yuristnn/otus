// Задание 1
export type OriginalTeam = {
    size: number;
    name: string;
    league: string;
};

export type ExpectedTeam = {
    name: string;
    league: string;
    roster: number;
};

export const originalTeamToExpectedTeam = (
    originalTeam: OriginalTeam
): ExpectedTeam => {
    return <ExpectedTeam>Object.keys(originalTeam).reduce((acc, elem) => {
        switch (elem) {
            case 'name':
                return { ...acc, name: 'New York Badgers' };
            case 'size':
                return { ...acc, roster: 25 };
            default:
                return { ...acc, league: originalTeam.league };
        }
    }, {});
};

// Задание 2
type SomeArray = Array<number | string>;

export const originalArrayToExpectedArray = (
    originalArray: SomeArray
): SomeArray => {
    return ['two', ...originalArray.slice(2, originalArray.length), 5];
};

// Задание 3

export type Team = {
    name: string;
    captain: {
        name: string;
        age: number;
    };
};

export const originalTeamToExpectedTeam2 = (originalTeam: Team): Team => {
    return <Team>Object.keys(originalTeam).reduce((acc, elem) => {
        if (elem === 'captain') {
            return { ...acc, captain: { ...originalTeam.captain, age: 28 } };
        }
        return { ...acc, name: originalTeam.name };
    }, {});
};
