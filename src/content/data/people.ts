import type { ImageMetadata } from 'astro';
import duncanCampbell from '../../assets/photos/people/duncan-campbell.jpg';
import shonaCochrane from '../../assets/photos/people/shona-cochrane.jpg';
import alanCochrane from '../../assets/photos/people/alan-cochrane.jpg';

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
		bio: 'A former teacher, she brings her experience in education and community engagement to coordinating meetings, communications, and volunteer sign-ups for regeneration events.',
		photo: shonaCochrane,
	},
	{
		name: 'Alan Cochrane',
		role: 'Technical Lead, Pier Design & Restoration',
		bio: 'Leads the technical planning behind the pier’s restoration, drawing on his engineering background to guide the project from design through to delivery.',
		photo: alanCochrane,
	},
];
