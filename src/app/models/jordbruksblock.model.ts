export class Jordbruksblock {
    type: string;
    properties: {
        BLOCKID: string,
        REGION: string,
        AGOSLAG: string,
        AREAL: number,
        KATEGORI: string
    };
    geometry: {
        type: string,
        coordinates: []
    };
}
