export const mergeTailwindClass = (...classes:string[]):string => {
    return classes.filter(Boolean).join(' ');
}