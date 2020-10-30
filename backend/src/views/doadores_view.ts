import Doador from '../models/Doador';
import imagesView from './images_view';

export default{
    render(doador: Doador){
        return{
            id:doador.id,
            name:doador.name,
	        latitude:doador.latitude,
	        longitude:doador.longitude,
	        about:doador.about,
	        opening_hours:doador.opening_hours,
            open_on_weekends:doador.open_on_weekends,
            images: imagesView.renderMany(doador.images)
        };
    },

    renderMany(doadores: Doador[]){
        return doadores.map(doador=> this.render(doador));
    }
};