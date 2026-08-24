import type { ImageMetadata } from 'astro';
import pierLobsterPots from '../../assets/photos/pier-lobster-pots.png';
import harbourViaduct from '../../assets/photos/harbour-viaduct.jpg';
import oldHarbour from '../../assets/photos/old-harbour.jpg';
import largoBay from '../../assets/photos/largo-bay.jpg';

// `credit`/`creditUrl` are only set for the sourced Wikimedia Commons/Geograph.org.uk photos
// (CC BY-SA 2.0, attribution required by the license — rendered via <PhotoTile credit/creditUrl>).
// The client's own photos (no credit set) need none.
export interface GalleryItem {
	src: ImageMetadata;
	label: string;
	alt: string;
	credit?: string;
	creditUrl?: string;
}

export const galleryItems: GalleryItem[] = [
	{
		src: pierLobsterPots,
		label: 'Lower Largo Pier',
		alt: 'Lobster pots stacked on Lower Largo pier, with a fishing boat moored alongside',
	},
	{
		src: harbourViaduct,
		label: 'Harbour and viaduct',
		alt: 'Lower Largo harbour with fishing boats, cottages, and the railway viaduct behind',
		credit: 'Joan Murfitt',
		creditUrl: 'https://www.geograph.org.uk/photo/2541639',
	},
	{
		src: oldHarbour,
		label: 'The old harbour',
		alt: 'View across the beach at Lower Largo towards the row of houses along the shore',
		credit: 'Richard Law',
		creditUrl: 'https://www.geograph.org.uk/photo/5861565',
	},
	{
		src: largoBay,
		label: 'View across Largo Bay',
		alt: 'Largo Bay coastline seen from above, with the beach and village in the distance',
		credit: 'Jerzy Morkis',
		creditUrl: 'https://www.geograph.org.uk/photo/5498005',
	},
];
