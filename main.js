var config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
const tileSize = 32    ;

/*

    1  = basicFloor
    2 = floor1

    21 = G
    22 = CG
    23 = H
    24 = CD
    25 = D

    51 = G
    52 =CH
    53 = H
    54 = CD
    55 = CG

    57 = CB




*/

const map = [
    [52,53,53,53,53,53,23,1,1,1,1,1,1,55],
    [51,22,1,1,1,1,23,1,1,1,1,1,25,55],
    [51,21,1,1,1,2,1,1,1,1,1,1,25,55],
    [51,21,1,1,1,1,1,1,1,1,1,1,25,55],
    [51,21,1,1,1,2,1,1,1,1,1,1,25,55],
    [51,1,2,558,557,557,556,1,1,1,1,1,1,55],
    [51,2,1,551,0,0,0,558,1,1,1,1,55]
];
var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('floor1', './asset/floor/floor_1.png');
    this.load.image('basicFloor', './asset/floor/floor_2.png');
    this.load.image('contourH', './asset/floor/floor_side.png');
    this.load.image('contourG', './asset/floor/floor_side3.png');
    this.load.image('contourD', './asset/floor/floor_side2.png');
    this.load.image('contourCG', './asset/floor/floor_side4.png');
    this.load.image('contourCD', './asset/floor/floor_side5.png');

    this.load.image('dust1', './asset/floor/floor_6.png');
    this.load.image('dust2', './asset/floor/floor_7.png');
    this.load.image('dust3', './asset/floor/floor_8.png');

    this.load.image('wallG', './asset/wall/wall_top_left.png');
    this.load.image('wallCG', './asset/wall/wall_top_inner_left.png');
    this.load.image('wallH', './asset/wall/wall_top_1.png');
    this.load.image('wallCD', './asset/wall/wall_top_inner_right.png');
    this.load.image('wallD', './asset/wall/wall_top_right.png');
    this.load.image('wallCDB', './asset/wall/wall_bottom_right.png');
    this.load.image('wallB', './asset/wall/wall_bottom.png');
    this.load.image('wallCGB', './asset/wall/wall_bottom_left.png');
}

function create ()
{
    for(let x=0;x<map.length;x++)
        for(let y=0;y<map[x].length;y++)
            switch (map[x][y]) {
                case 1:
                    this.add.image(y*tileSize,x*tileSize,'basicFloor').setScale(2).setOrigin(0, 0);
                    break;
                case 2:
                    this.add.image(y*tileSize,x*tileSize,'floor1').setScale(2).setOrigin(0, 0);
                    break;
                case 21:
                    this.add.image(y*tileSize,x*tileSize,'contourG').setScale(2).setOrigin(0, 0);
                    break;
                case 22:
                    this.add.image(y*tileSize,x*tileSize,'contourCG').setScale(2).setOrigin(0, 0);
                    break;
                case 23:
                    this.add.image(y*tileSize,x*tileSize,'contourH').setScale(2).setOrigin(0, 0);
                    break;
                case 24:
                    this.add.image(y*tileSize,x*tileSize,'contourCD').setScale(2).setOrigin(0, 0);
                    break;
                case 25:
                    this.add.image(y*tileSize,x*tileSize,'contourD').setScale(2).setOrigin(0, 0);
                    break;

                case 51:
                    this.add.image(y * tileSize, x * tileSize, 'wallG').setScale(2).setOrigin(0, 0);
                    break;
                case 52:
                    this.add.image(y * tileSize, x * tileSize, 'wallCG').setScale(2).setOrigin(0, 0);
                    break;
                case 53:
                    this.add.image(y * tileSize, x * tileSize, 'wallH').setScale(2).setOrigin(0, 0);
                    break;
                case 54:
                    this.add.image(y * tileSize, x * tileSize, 'wallCD').setScale(2).setOrigin(0, 0);
                    break;
                case 55:
                    this.add.image(y * tileSize, x * tileSize, 'wallD').setScale(2).setOrigin(0, 0);
                    break;
                case 56:
                    this.add.image(y * tileSize, x * tileSize, 'wallCDB').setScale(2).setOrigin(0, 0.8);
                    break;
                case 57:
                    this.add.image(y * tileSize, x * tileSize, 'wallB').setScale(2).setOrigin(0,0.8);
                    break;
                case 58:
                    this.add.image(y * tileSize, x * tileSize, 'wallCGB').setScale(2).setOrigin(0, 0.8);
                    break;
                case 551:
                    this.add.image(y * tileSize, x * tileSize, 'wallG').setScale(2).setOrigin(0.8, 0);
                    break;
                case 552:
                    this.add.image(y * tileSize, x * tileSize, 'wallCG').setScale(2).setOrigin(0, 0);
                    break;
                case 553:
                    this.add.image(y * tileSize, x * tileSize, 'wallH').setScale(2).setOrigin(0, 0);
                    break;
                case 554:
                    this.add.image(y * tileSize, x * tileSize, 'wallCD').setScale(2).setOrigin(0, 0);
                    break;
                case 555:
                    this.add.image(y * tileSize, x * tileSize, 'wallD').setScale(2).setOrigin(0, 0);
                    break;
                case 556:
                    this.add.image(y * tileSize, x * tileSize, 'wallCDB').setScale(2).setOrigin(0, 0.8);
                    break;
                case 557:
                    this.add.image(y * tileSize, x * tileSize, 'wallB').setScale(2).setOrigin(0, 0.8);
                    break;
                case 558:
                    this.add.image(y * tileSize, x * tileSize, 'wallCGB').setScale(2).setOrigin(0, 0.8);
                    break;



            }

}

function update ()
{
}