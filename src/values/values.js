export const GameBoxValues = {
    height: 500,
    width: 500,
}

export const BlockValues = {
    width: 30,
}

export const x = (GameBoxValues.width-4*BlockValues.width)/3;

export const blocksValues = {
    blok1 :{
        position: 0,
    },
    blok2 :{
        position: BlockValues.width+x,
    },
    blok3 :{
        position: 2*BlockValues.width+2*x,
    },
    blok4 :{
        position: 3*BlockValues.width+3*x,
    },
}

export const ManValues = {
    height: 100,
    fullwidth: 200,
}