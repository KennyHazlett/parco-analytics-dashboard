// Define the type for each data entry
export interface UserData {
  date: string;
  day: string;
  urgent: number;
  likely: number;
  unlikely: number;
  notActionable: number;
}

// Define the mock data
export const dailyUserData: UserData[] = [
  {
    date: "Oct 09",
    day: "Wed",
    urgent: 6,
    likely: 5,
    unlikely: 9,
    notActionable: 3,
  },
  {
    date: "Oct 10",
    day: "Thu",
    urgent: 5,
    likely: 8,
    unlikely: 1,
    notActionable: 7,
  },
  {
    date: "Oct 11",
    day: "Fri",
    urgent: 1,
    likely: 5,
    unlikely: 7,
    notActionable: 9,
  },
  {
    date: "Oct 12",
    day: "Sat",
    urgent: 4,
    likely: 8,
    unlikely: 2,
    notActionable: 8,
  },
  {
    date: "Oct 13",
    day: "Sun",
    urgent: 1,
    likely: 9,
    unlikely: 6,
    notActionable: 3,
  },
  {
    date: "Oct 14",
    day: "Mon",
    urgent: 4,
    likely: 8,
    unlikely: 10,
    notActionable: 2,
  },
  {
    date: "Oct 15",
    day: "Tue",
    urgent: 5,
    likely: 7,
    unlikely: 12,
    notActionable: 3,
  },
  {
    date: "Oct 16",
    day: "Wed",
    urgent: 6,
    likely: 9,
    unlikely: 8,
    notActionable: 1,
  },
  {
    date: "Oct 17",
    day: "Thu",
    urgent: 7,
    likely: 10,
    unlikely: 9,
    notActionable: 2,
  },
  {
    date: "Oct 18",
    day: "Fri",
    urgent: 8,
    likely: 12,
    unlikely: 10,
    notActionable: 3,
  },
  {
    date: "Oct 19",
    day: "Sat",
    urgent: 5,
    likely: 8,
    unlikely: 15,
    notActionable: 2,
  },
  {
    date: "Oct 20",
    day: "Sun",
    urgent: 10,
    likely: 14,
    unlikely: 12,
    notActionable: 5,
  },
  {
    date: "Oct 21",
    day: "Mon",
    urgent: 9,
    likely: 13,
    unlikely: 11,
    notActionable: 4,
  },
  {
    date: "Oct 22",
    day: "Tue",
    urgent: 11,
    likely: 16,
    unlikely: 13,
    notActionable: 6,
  },
  {
    date: "Oct 23",
    day: "Wed",
    urgent: 12,
    likely: 15,
    unlikely: 14,
    notActionable: 5,
  },
  {
    date: "Oct 24",
    day: "Thu",
    urgent: 13,
    likely: 14,
    unlikely: 16,
    notActionable: 6,
  },
  {
    date: "Oct 25",
    day: "Fri",
    urgent: 14,
    likely: 17,
    unlikely: 15,
    notActionable: 7,
  },
  {
    date: "Oct 26",
    day: "Sat",
    urgent: 15,
    likely: 18,
    unlikely: 17,
    notActionable: 6,
  },
  {
    date: "Oct 27",
    day: "Sun",
    urgent: 10,
    likely: 12,
    unlikely: 14,
    notActionable: 4,
  },
  {
    date: "Oct 28",
    day: "Mon",
    urgent: 9,
    likely: 11,
    unlikely: 13,
    notActionable: 3,
  },
  {
    date: "Oct 29",
    day: "Tue",
    urgent: 8,
    likely: 13,
    unlikely: 12,
    notActionable: 5,
  },
  {
    date: "Oct 30",
    day: "Wed",
    urgent: 11,
    likely: 14,
    unlikely: 15,
    notActionable: 6,
  },
  {
    date: "Oct 31",
    day: "Thu",
    urgent: 7,
    likely: 10,
    unlikely: 11,
    notActionable: 4,
  },
  {
    date: "Nov 01",
    day: "Fri",
    urgent: 5,
    likely: 9,
    unlikely: 12,
    notActionable: 2,
  },
  {
    date: "Nov 02",
    day: "Sat",
    urgent: 6,
    likely: 10,
    unlikely: 14,
    notActionable: 3,
  },
  {
    date: "Nov 03",
    day: "Sun",
    urgent: 7,
    likely: 11,
    unlikely: 13,
    notActionable: 5,
  },
  {
    date: "Nov 04",
    day: "Mon",
    urgent: 8,
    likely: 12,
    unlikely: 15,
    notActionable: 4,
  },
  {
    date: "Nov 05",
    day: "Tue",
    urgent: 10,
    likely: 15,
    unlikely: 18,
    notActionable: 5,
  },
  {
    date: "Nov 06",
    day: "Wed",
    urgent: 12,
    likely: 16,
    unlikely: 20,
    notActionable: 6,
  },
  {
    date: "Nov 07",
    day: "Thu",
    urgent: 13,
    likely: 18,
    unlikely: 19,
    notActionable: 5,
  },
  {
    date: "Nov 08",
    day: "Fri",
    urgent: 14,
    likely: 17,
    unlikely: 21,
    notActionable: 7,
  },
  {
    date: "Nov 09",
    day: "Sat",
    urgent: 11,
    likely: 14,
    unlikely: 18,
    notActionable: 6,
  },
  {
    date: "Nov 10",
    day: "Sun",
    urgent: 9,
    likely: 12,
    unlikely: 16,
    notActionable: 4,
  },
  {
    date: "Nov 11",
    day: "Mon",
    urgent: 8,
    likely: 10,
    unlikely: 14,
    notActionable: 3,
  },
  {
    date: "Nov 12",
    day: "Tue",
    urgent: 7,
    likely: 11,
    unlikely: 13,
    notActionable: 2,
  },
  {
    date: "Nov 13",
    day: "Wed",
    urgent: 6,
    likely: 12,
    unlikely: 15,
    notActionable: 5,
  },
  {
    date: "Nov 14",
    day: "Thu",
    urgent: 10,
    likely: 14,
    unlikely: 18,
    notActionable: 4,
  },
  {
    date: "Nov 15",
    day: "Fri",
    urgent: 11,
    likely: 15,
    unlikely: 19,
    notActionable: 5,
  },
  {
    date: "Nov 16",
    day: "Sat",
    urgent: 12,
    likely: 16,
    unlikely: 20,
    notActionable: 6,
  },
  {
    date: "Nov 17",
    day: "Sun",
    urgent: 11,
    likely: 4,
    unlikely: 6,
    notActionable: 7,
  },
  {
    date: "Nov 18",
    day: "Mon",
    urgent: 4,
    likely: 8,
    unlikely: 12,
    notActionable: 16,
  },
  {
    date: "Nov 19",
    day: "Tue",
    urgent: 2,
    likely: 4,
    unlikely: 6,
    notActionable: 8,
  },
  {
    date: "Today",
    day: "Wed",
    urgent: 12,
    likely: 15,
    unlikely: 20,
    notActionable: 5,
  },
];