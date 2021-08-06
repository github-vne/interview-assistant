import moment from 'moment';
import { formatValues } from 'const/formatValues';

const t = `
Плюсы:
- Хороший опыт в разработке
- Быстро справился с техническим заданием
- Коммуникабельный
- Умеет объяснить на прикладном опыте

Минусы:
- Нет знаний TS (при необходимости - готов выучить за 1 неделю)
- Приверженец конкретной технологии (React, Redux). Не заметно желание развиваться ещё в каком-то направлении.

Итог:
Одобрено. Кандидат подходит под наш стек технологий (за исключением TS) и задачи, которые решаются в проектах.
`;

export const parseFormFields = (values: any) => {
  console.info(values);
  if (!Object.keys(values).length) return 'empty';

  let result = '';

  const { date, name, rating, sex, experience, task, max, ...other } = values;

  result += `#Собеседование ${name} (${moment(date).format('DD.MM.YYYY')}):` + '\n\n';

  result += `Уровень: ${formatValues.rating[rating]}` + '\n';
  result += `Опыт: ${formatValues.experience[experience]}` + '\n';
  if (task && max) result += `Тех. задача: ${task} из ${max}` + '\n';

  // result += `Подходит под стек: ${stack ? 'Да' : 'Нет'}` + '\n';

  Object.keys(other).forEach(key => {
    const value = other[key];
    if (!value) return;
    result += `${formatValues[key][value]}\n`;
  });

  return result;
};
