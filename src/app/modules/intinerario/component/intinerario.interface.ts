
export interface Marker{
    position:{
        lat: number,
        lng: number
    };
    options: {
        animation: any,
        icon: string
    }
    title:string;
}
