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

const emptyBlock: Jordbruksblock = {
    type: '',
    properties: {
        BLOCKID: '',
        REGION: '',
        AGOSLAG: '',
        AREAL: 0,
        KATEGORI: ''
    },
    geometry: {
        type: '',
        coordinates: []
    }
};

export function makeEmptyBlock() {
    return Object.assign ( {}, emptyBlock )
}
