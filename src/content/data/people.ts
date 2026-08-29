import type { ImageMetadata } from 'astro';
import duncanCampbell from '../../assets/photos/people/duncan-campbell.jpg';
import shonaCochrane from '../../assets/photos/people/shona-cochrane.jpg';
import alanCochrane from '../../assets/photos/people/alan-cochrane.jpg';

export interface Person {
	name: string;
	role: string;
	bio: string;
	photo?: ImageMetadata;
	// CSS object-position for cropping `photo` to a square — defaults to '50% 20%'
	// in PersonCard.astro. Override per-person when the default crop cuts off
	// hair/head (e.g. a photo where hair reaches close to the top of the frame).
	photoPosition?: string;
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
		photoPosition: '50% 0%',
	},
	{
		name: 'Alan Cochrane',
		role: 'Technical Lead, Pier Design & Restoration',
		bio: 'Leads the technical planning behind the pier’s restoration, drawing on his engineering background to guide the project from design through to delivery.',
		photo: alanCochrane,
	},
];
