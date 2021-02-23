import { DateTime } from 'luxon';

/**
 * Date filter
 *
 * @export
 * @param {Date} value
 * @param {string} format
 */
export function DateFilter(
  value: Date,
  format: string = 'dd LLLL yyyy',
  plusDay: number = 0
): string {
  if (!value) {
    return '';
  }
  let date: DateTime = DateTime.fromJSDate(new Date(value));
  if (plusDay > 0) {
    date = date.plus({ days: plusDay });
  }
  return date.setLocale('id').toFormat(format);
}
