import type { ImageMetadata } from 'astro';
import duncanCampbell from '../../assets/photos/people/duncan-campbell.jpg';

// TODO: add photos for Shona and Alan as they come in (see `photo` on Duncan's
// entry for the pattern — falls back to a placeholder box in PersonCard.astro
// when omitted).
export interface Person {
	name: string;
	role: string;
	bio: string;
	photo?: ImageMetadata;
}

export const people: Person[] = [
	{
		name: 'Duncan Campbell',
		role: 'Chair',
		bio: 'A long-time Lower Largo resident leading the group’s efforts to restore the harbour and pier for community use.',
		photo: duncanCampbell,
	},
	{
		name: 'Shona Cochrane',
		role: 'Vice-Chair & Secretary',
		bio: 'Coordinates meetings, communications, and volunteer sign-ups for regeneration events.',
	},
	{
		name: 'Alan Cochrane',
		role: 'Signatory',
		bio: 'One of the company’s signatories, providing formal oversight and authorisation for the group’s official transactions and agreements.',
	},
];
