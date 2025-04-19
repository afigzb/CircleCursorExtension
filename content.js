class CircleCursor {
    constructor(options = {}) {
        const defaultOptions = {
            size: 50,
            animationSpeed: 0.05,
            color: '#ffffff',
            mixBlendMode: 'difference'
        };

        this.config = { ...defaultOptions, ...options };

        this.circle = document.createElement('div');
        this.circle.className = 'circle-cursor';
        document.body.appendChild(this.circle);

        this.innerCircle = document.createElement('div');
        this.innerCircle.className = 'circle-cursor-inner';
        document.body.appendChild(this.innerCircle);

        this.mouseX = 0;
        this.mouseY = 0;
        this.circleX = 0;
        this.circleY = 0;
        this.innerCircleX = 0;
        this.innerCircleY = 0;

        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        });

        this.animate();
    }

    animate() {
        const dx = this.mouseX - this.circleX;
        const dy = this.mouseY - this.circleY;

        this.circleX += dx * this.config.animationSpeed;
        this.circleY += dy * this.config.animationSpeed;

        this.circle.style.left = this.circleX + 'px';
        this.circle.style.top = this.circleY + 'px';

        // 内圈动画速度更快
        const innerDx = this.mouseX - this.innerCircleX;
        const innerDy = this.mouseY - this.innerCircleY;

        this.innerCircleX += innerDx * (this.config.animationSpeed * 3);
        this.innerCircleY += innerDy * (this.config.animationSpeed * 3);

        this.innerCircle.style.left = this.innerCircleX + 'px';
        this.innerCircle.style.top = this.innerCircleY + 'px';

        requestAnimationFrame(() => this.animate());
    }

    destroy() {
        this.circle.remove();
        this.innerCircle.remove();
    }
}

// 创建光标效果实例
const cursor = new CircleCursor({
    size: 50,
    animationSpeed: 0.04,
    color: '#ffffff',
    mixBlendMode: 'difference'
}); 