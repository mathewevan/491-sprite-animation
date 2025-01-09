const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./spritesheets/Terra-Branford.png")
ASSET_MANAGER.queueDownload("./spritesheets/Backgrounds.png")
ASSET_MANAGER.queueDownload("./spritesheets/Terra-Esper.png")
ASSET_MANAGER.queueDownload("./spritesheets/Spells.png")

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.addEntity(new Terra(gameEngine));
	gameEngine.addEntity(new Background(gameEngine))


	gameEngine.init(ctx);

	gameEngine.start();
});
