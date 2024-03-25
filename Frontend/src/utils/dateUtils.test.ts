import { formatDate } from './dateUtils'; 

describe('formatDate function', () => {
  it('returns a formatted date string when a date object is provided', () => {
    const date = new Date('2024-03-22T00:00:00.000Z');
    const formattedDate = formatDate(date);
    expect(formattedDate).toBe('March 22, 2024');
  });

  it('returns a formatted date string when a date string is provided', () => {
    const dateString = '2024-03-22T00:00:00.000Z';
    const formattedDate = formatDate(dateString);
    expect(formattedDate).toBe('March 22, 2024');
  });

});
