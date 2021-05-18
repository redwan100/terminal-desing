
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const aboutContent = document.querySelector('#about-content');
const contactContent = document.querySelector('#contact-content');

about.addEventListener('click', function () {
    const AboutBox = new WinBox({
        title: 'about box',
        mount: aboutContent,
        width: '400px',
        hight: '400px',
        top: 50,
        left: 50,
        right: 50,
        bottom: 50,
        onfocus: function () {
            this.setBackground("#00aa00")
        },
        onblur: function () {
            this.setBackground("#777")
        }
    })
})
contact.addEventListener('click', function () {
    const AboutBox = new WinBox({
        title: 'about box',
        mount: contactContent,
        width: '400px',
        hight: '400px',
        top: 120,
        left: 0,
        right: 0,
        bottom: 110,
        onfocus: function () {
            this.setBackground("#00aa00")
        },
        onblur: function () {
            this.setBackground("#777")
        }
    })
    
})
