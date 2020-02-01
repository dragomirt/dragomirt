const FontFaceObserver = require('fontfaceobserver');

const Fonts = () => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css?family=Cormorant+Garamond:300,400,700';
    link.rel = 'stylesheet';

    document.head.appendChild(link);

    const garamond = new FontFaceObserver('Cormorant Garamond');

    garamond.load().then(() => {
        document.documentElement.classList.add('garamond')
    });
};

export default Fonts