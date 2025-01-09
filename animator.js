class Animator {
    constructor(
        spritesheet,
        xstart,
        ystart,
        width,
        height,
        frameCount,
        frameDuration,
        framePadding,
        reverse,
        loop,
        cycle,

    ) {
        Object.assign(this, {
            spritesheet, xstart, ystart, width, height,
            frameCount, frameDuration, framePadding, reverse, loop, cycle,
        });

        this.elapsedTime = 0;
        this.totalTime = this.frameCount * this.frameDuration;
        if (cycle) {
            this.totalTime = (2 * this.frameCount - 2) * this.frameDuration;
        }
    };

    drawFrame(tick, ctx, x, y, scale) {
        this.elapsedTime += tick;
        if (this.elapsedTime > this.totalTime) this.elapsedTime -= this.totalTime;

        if (this.isDone()) {
            if (this.loop) {
                this.elapsedTime -= this.totalTime;
            } else {
                return;
            }
        }

        let frame = this.currentFrame();

        if (this.reverse) frame = this.frameCount - frame - 1;

        ctx.drawImage(this.spritesheet,
            this.xstart + frame * (this.width + this.framePadding), this.ystart,
            this.width, this.height,
            x, y,
            this.width * scale,
            this.height * scale);
    };


    currentFrame() {
        const nonCyclicalFrame = Math.floor(this.elapsedTime / this.frameDuration);
        const lastFrameIndex = this.frameCount - 1
        if (this.cycle && nonCyclicalFrame > lastFrameIndex) {
            return lastFrameIndex + (lastFrameIndex - nonCyclicalFrame);
        }

        return nonCyclicalFrame;
    };

    isDone() {
        return this.elapsedTime >= this.totalTime;
    };


}