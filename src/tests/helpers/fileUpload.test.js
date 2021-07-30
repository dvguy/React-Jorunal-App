//Esta prueba es para verificar si un archivo se sube correctamente y si regresa el URL

import { fileUpload } from "../../components/helpers/fileUpload";
import cloudinary from "cloudinary";

cloudinary.config({ 
    cloud_name: 'dvguy', 
    api_key: '824639948299538', 
    api_secret: 'ywg3nJcF4vaJzRyGvFVe6DunBc0' 
});


describe('Purebas de fileUpload0', () => {

    const img = 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'

    test('Debe de cargar un archivo y retornar el url', async () => {
        const resp = await fetch(img);
        const blob = await resp.blob();

        const file = new File([blob],'imagen.png');
        const url = await fileUpload(file);

        expect(typeof(url)).toBe('string')

        //Borrar imagen por ID
        const segments = url.split('/');
        const imagenId = segments[ segments.length - 1].replace('.png','')

        await cloudinary.v2.api.delete_resources(imagenId)
    });

    test('Debe de retornar un error', async () => {
     
        const file = new File([],'imagen.png');
        const url = await fileUpload(file);

        expect(url).toBe(null)
    });
});