import axios from 'axios';

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: 'dee926416b8a40f98b691ac612cd8368'
    }
})