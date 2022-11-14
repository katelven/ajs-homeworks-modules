
import Game, {
    GameSavingData,
    readGameSaving as loadGame,
    writeGameSaving as writeGameSaving
} from "./game"
 
const game = new Game();
game.start();


console.log('app worked')