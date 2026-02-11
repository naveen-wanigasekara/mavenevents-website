
export interface EventIdea {
  theme: string;
  description: string;
  venueSuggestions: string[];
  suggestedSchedule: {
    time: string;
    activity: string;
  }[];
  decorStyle: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export enum EventType {
  WEDDING = 'Wedding',
  CORPORATE = 'Corporate Gala',
  PRIVATE_PARTY = 'Private Party',
  FESTIVAL = 'Community Festival',
  BABY_SHOWER = 'Baby Shower',
  BRIDAL_PARTY = 'Bridal Party',
  BIRTHDAY_PARTY = 'Birthday Party',
  ANNIVERSARY_PARTY = 'Anniversary Party',
}

