class Terra {

    laughStartTime = 0;
    fingerWagStartTime = 0;
    sideTurnStartTime = 0;
    castStartTime = 0;
    spinStartTime = 0;
    morphTimer = 0;
    combatStartTime = 0;

    walkingAwayAnim = new Animator(
        ASSET_MANAGER.getAsset("./spritesheets/Terra-Branford.png"),
        12,
        12,
        64,
        96,
        3,
        0.1,
        8,
        false,
        true,
        true);

    walkingLeftAnim = new Animator(
        ASSET_MANAGER.getAsset("./spritesheets/Terra-Branford.png"),
        12,
        248,
        68,
        96,
        3,
        0.1,
        8,
        false,
        true,
        true);

    walkingTowardAnim = new Animator(
        ASSET_MANAGER.getAsset("./spritesheets/Terra-Branford.png"),
        12,
        124,
        68,
        96,
        3,
        0.1,
        4,
        false,
        true,
        true);

    surprisedAnim = new Animator(
        ASSET_MANAGER.getAsset("./spritesheets/Terra-Branford.png"),
        571,
        697,
        68,
        96,
        4,
        0.7,
        8,
        false,
        false,
        false);

    laughingAnim = new Animator(
        ASSET_MANAGER.getAsset("./spritesheets/Terra-Branford.png"),
        604,
        124,
        68,
        96,
        2,
        0.1,
        8,
        false,
        false,
        false);

    fingerWagAnim = new Animator(
        ASSET_MANAGER.getAsset("./spritesheets/Terra-Branford.png"),
        757,
        12,
        68,
        96,
        2,
        0.2,
        8,
        false,
        false,
        false);

    sideTurnAnim = new Animator(
        ASSET_MANAGER.getAsset("./spritesheets/Terra-Branford.png"),
        11,
        440,
        68,
        96,
        1,
        0.3,
        8,
        false,
        false,
        false);

    castAnim = new Animator(
        ASSET_MANAGER.getAsset("./spritesheets/Terra-Branford.png"),
        100,
        440,
        68,
        96,
        2,
        0.2,
        8,
        false,
        true,
        true);

    spinAnim = new Animator(
        ASSET_MANAGER.getAsset("./spritesheets/Terra-Branford.png"),
        12,
        552,
        68,
        96,
        4,
        0.2,
        8,
        false,
        true,
        false);

    morphAnim = new Animator(
        ASSET_MANAGER.getAsset("./spritesheets/Terra-Esper.png"),
        12,
        640,
        116,
        192,
        5,
        0.15,
        24,
        false,
        true,
        false);

    insideAuraAnim = new Animator(
        ASSET_MANAGER.getAsset("./spritesheets/Terra-Esper.png"),
        452,
        508,
        68,
        96,
        1,
        Infinity,
        8,
        false,
        false,
        false);

    esperWalkAwayAnim = new Animator(
        ASSET_MANAGER.getAsset("./spritesheets/Terra-Esper.png"),
        24,
        16,
        68,
        96,
        3,
        0.1,
        4,
        false,
        true,
        true);

    esperJumpsBackAnim = new Animator(
        ASSET_MANAGER.getAsset("./spritesheets/Terra-Esper.png"),
        16,
        508,
        68,
        96,
        1,
        0.1,
        8,
        false,
        false,
        false);

    esperCombatPoseAnim = new Animator(
        ASSET_MANAGER.getAsset("./spritesheets/Terra-Esper.png"),
        29,
        385,
        68,
        96,
        1,
        Infinity,
        8,
        false,
        false,
        false);

    esperCastAnim = new Animator(
        ASSET_MANAGER.getAsset("./spritesheets/Terra-Esper.png"),
        108,
        504,
        64,
        96,
        2,
        0.2,
        16,
        false,
        true,
        false);

    esperAttackAnim = new Animator(
        ASSET_MANAGER.getAsset("./spritesheets/Terra-Esper.png"),
        29,
        385,
        64,
        96,
        2,
        0.3,
        16,
        false,
        false,
        false);

    esperSpellAnim = new Animator(
        ASSET_MANAGER.getAsset("./spritesheets/Spells.png"),
        6,
        6,
        132,
        132,
        10,
        0.1,
        6,
        false,
        false,
        false);

    esperInsideSpellAnim = new Animator(
        ASSET_MANAGER.getAsset("./spritesheets/Terra-Esper.png"),
        106,
        385,
        64,
        96,
        1,
        1,
        16,
        false,
        false,
        false);

    constructor(game) {
        Object.assign(this, {game});
        this.state = 0;
        this.x = 488;
        this.y = 720;
        this.speed = 250;
    };

    update() {

        if (this.state === 15) {
            if (this.game.timer.gameTime - this.castStartTime > 1) {
                this.state = 16;
                this.castStartTime = this.game.timer.gameTime;
            }

        }

        if (this.state === 14) {
            if (this.game.timer.gameTime - this.castStartTime > 0.5) {
                this.state = 15;
                this.castStartTime = this.game.timer.gameTime;
            }
            this.x -= this.speed * this.game.clockTick;

        }

        if (this.state === 13) {
            if (this.game.timer.gameTime - this.castStartTime >= 2) {
                this.state = 14;
                this.castStartTime = this.game.timer.gameTime;
            }
        }

        if (this.state === 12) {
            if (this.game.timer.gameTime - this.castStartTime >= 8) {
                this.state = 13;
                this.castStartTime = this.game.timer.gameTime;
            }
        }

        if (this.state === 11) {
            if (this.y < 300) {
                this.x += 1.5 * (this.speed * this.game.clockTick);
                this.y += 1.5 * (this.speed * this.game.clockTick);
            } else if (this.x > 900) {
                this.state = 12;
                this.combatStartTime = this.game.timer.gameTime;
            }
            this.x += 1.5 * (this.speed * this.game.clockTick);
            this.y -= 0.5 * (this.speed * this.game.clockTick);
        }

        if (this.state === 10) {
            if (this.y <= 350) {
                this.state = 11;
            }
            this.y -= this.speed * this.game.clockTick;
        }

        if (this.state === 9) {
            if (this.game.timer.gameTime - this.morphTimer >= 1) {
                this.state = 10;
            }
        }

        if (this.state === 8) {
            if (this.game.timer.gameTime - this.spinStartTime >= 1.6) {
                this.state = 9;
                this.morphTimer = this.game.timer.gameTime;
            }
        }

        if (this.state === 7) {
            if (this.game.timer.gameTime - this.castStartTime >= 2) {
                this.state = 8;
                this.spinStartTime = this.game.timer.gameTime;
            }
        }

        if (this.state === 6) {
            if (this.game.timer.gameTime - this.sideTurnStartTime >= 0.4) {
                this.state = 7;
                this.castStartTime = this.game.timer.gameTime;
            }
        }

        if (this.state === 5) {
            if (this.game.timer.gameTime - this.fingerWagStartTime >= 2) {
                this.state = 6;
                this.sideTurnStartTime = this.game.timer.gameTime;
            }
        }

        if (this.state === 4) {
            if (this.game.timer.gameTime - this.laughStartTime >= 2) {
                this.state = 5;
                this.fingerWagStartTime = this.game.timer.gameTime;
            }

        }

        if (this.state === 3) {
            if (this.surprisedAnim.currentFrame() >= 3) {
                this.state = 4;
                this.laughStartTime = this.game.timer.gameTime;
            }
        }

        if (this.state === 2) {
            if (this.y > 600 && this.y < 650) {
                this.state = 3;
            }
            this.y += this.speed * this.game.clockTick;
        }

        if (this.state === 0) {
            this.y -= this.speed * this.game.clockTick;

            if (this.y <= 400) {
                this.state = 1;
            }
        } else if (this.state === 1) {

            if (this.x > 488 && this.x < 495) {
                this.state = 2;
            }

            if (this.x > -68) {
                this.x -= this.speed * this.game.clockTick;
            } else {
                this.x = 1024;
            }
        }

    };

    draw(ctx) {
        if (this.state === 0) {
            this.walkingAwayAnim.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
        } else if (this.state === 1) {
            this.walkingLeftAnim.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
        } else if (this.state === 2) {
            this.walkingTowardAnim.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
        } else if (this.state === 3) {
            this.surprisedAnim.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
        } else if (this.state === 4) {
            this.laughingAnim.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
        } else if (this.state === 5) {
            this.fingerWagAnim.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
        } else if (this.state === 6) {
            this.sideTurnAnim.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
        } else if (this.state === 7) {
            this.castAnim.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
        } else if (this.state === 8) {
            this.spinAnim.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
        } else if (this.state === 9) {
            this.morphAnim.drawFrame(this.game.clockTick, ctx, this.x - 26, this.y - 85, 1);
            this.insideAuraAnim.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
        } else if (this.state === 10) {
            this.esperWalkAwayAnim.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
        } else if (this.state === 11) {
            this.esperJumpsBackAnim.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
        } else if (this.state === 12) {
            this.esperCombatPoseAnim.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
        } else if (this.state === 13) {
            this.esperCastAnim.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
        } else if (this.state === 14) {
            this.esperAttackAnim.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
        } else if (this.state === 15) {
            this.esperSpellAnim.drawFrame(this.game.clockTick, ctx, this.x - 35.5, this.y - 18, 1);
            this.esperInsideSpellAnim.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
        } else if (this.state === 16) {
            this.esperCastAnim.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
        }
    };


}