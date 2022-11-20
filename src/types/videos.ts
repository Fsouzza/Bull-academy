import videos from 'data/videos.json';

export type Aula = typeof videos;
export type Player = typeof videos[0];

export interface Exclusivos {
    title: string;
    description: string;
    thumb: string;
    img: string;
    canal: string;
    time: number;
    video: string;
    price: string;
    id: number;
    category: {
        id: number;
        label: string;
    };
}