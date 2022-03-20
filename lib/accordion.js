export default class Accordion {
  constructor(el) {
    this.el = el;
    this.summary = el.querySelector('summary');
    this.content = el.querySelector('div');

    this.contentPadding = 8; // (px)
    this.animDuration = 500; // (ms)

    this.animation = null;
    this.isClosing = false;
    this.isExpanding = false;
    this.summary.addEventListener('click', (e) => this.onDetailsClick(e));
  }

  onDetailsClick(e) {
    e.preventDefault();
    this.el.style.overflow = 'hidden';
    if (this.isClosing || !this.el.open) { this.open(); }
    else if (this.isExpanding || this.el.open) { this.shrink(); }
  }

  shrink() {
    this.isClosing = true;

    const startHeight = `${this.el.offsetHeight - this.contentPadding}px`;
    const endHeight = `${this.summary.offsetHeight}px`;

    if (this.animation) { this.animation.cancel(); }

    this.animation = this.el.animate({ height: [startHeight, endHeight] }, {
      duration: this.animDuration,
      easing: 'ease-in-out'
    });

    // When the animation is complete, call onAnimationFinish()
    this.animation.onfinish = () => this.onAnimationFinish(false);
    // If the animation is cancelled, isClosing variable is set to false
    this.animation.oncancel = () => this.isClosing = false;
  }

  open() {
    this.el.style.height = `${this.el.offsetHeight}px`;
    this.el.open = true;
    window.requestAnimationFrame(() => this.expand() );
  }

  expand() {
    this.isExpanding = true;
    const startHeight = `${this.el.offsetHeight}px`;
    const endHeight = `${this.summary.offsetHeight + this.content.offsetHeight + this.contentPadding}px`; // + 16px (1em) for padding

    if (this.animation) { this.animation.cancel(); }

    this.animation = this.el.animate({ height: [startHeight, endHeight] }, {
      duration: this.animDuration,
      easing: 'ease-out'
    });

    // When the animation is complete, call onAnimationFinish()
    this.animation.onfinish = () => this.onAnimationFinish(true);
    // If the animation is cancelled, isExpanding variable is set to false
    this.animation.oncancel = () => this.isExpanding = false;
  }

  onAnimationFinish(open) {
    this.el.open = open;
    this.animation = null;
    this.isClosing = false;
    this.isExpanding = false;
    this.el.style.height = this.el.style.overflow = '';
    this.summary.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
  }
}
