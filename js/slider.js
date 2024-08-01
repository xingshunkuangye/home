import { createApp } from '../lib/vue.esm-browser.js'

let Slider = {
    data() {
        return {
            showId: 0,
            imgs: [{
                    id: 0,
                    link: '',
                    img: 'slider1.jpg'
                },
                {
                    id: 1,
                    link: '',
                    img: 'slider2.jpg'
                },
                {
                    id: 2,
                    link: '',
                    img: 'slider3.jpg'
                },
                {
                    id: 3,
                    link: '',
                    img: 'slider4.jpg'
                },
                {
                    id: 4,
                    link: '',
                    img: 'slider5.jpg'
                },
                {
                    id: 5,
                    link: '',
                    img: 'slider6.jpg'
                },
                {
                    id: 6,
                    link: '',
                    img: 'slider7.jpg'
                },
                {
                    id: 7,
                    link: '',
                    img: 'slider8.jpg'
                },
                {
                    id: 8,
                    link: '',
                    img: 'slider9.jpg'
                }
            ]
        }
    },
    mounted() {
        setInterval(() => {
            this.showId = (this.showId + 1) % this.imgs.length
        }, 5000)
    }
}

createApp(Slider).mount('#slider')