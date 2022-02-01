import React, {Component} from "react";
/*// Bootstrap 4
import '../../../assets/css/bootstrap.min.css';
// Material Design Bootstrap
import '../../../assets/css/mdb.min.css';
// Custom Styles
import '../../../assets/css/style.css';*/
//Animated Css
import '../MONTH1/love-letter.css';
import PICTURE from "../../../assets/img/pics/les-banner.jpeg"

class ASK1 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            hasMessage: false
        }
    }

    render() {
        return (
            <div className="wrap">
                <h1>Preguntas y Respuestas</h1>
                <br/>
                <br/>
                <div className="postcard">

                    <div className="letter">
                        <form action="#" method="post" className="message_form">
                            <p className="push">Querida </p>
                            <input type="text" id="recipient" name="recipient_name"
                                                            placeholder="Leslie"
                                                                className="push"
                            disabled={true}/>
                            <p> ,</p>
                            <br/>
                            <label htmlFor="message">Con mi más sincero amor respondo lo siguiente:</label>
                            <br/>
                            {/*<textarea id="message" name="message_to_recipient"
                                      placeholder="Te amo beibi.">
                                <p>Hola</p>
                            </textarea>*/}
                            <br/>
                            <div id="message_love">
                                <p>1. ¿Qué te agradezco?</p>
                                <br/>
                                Agradezco el que ingresaras a mi vida y me permitas compartir y crear recuerdos a tu lado día a día, darme el gusto de hacerte sentir bien conmigo y escucharme en los malos y buenos momentos y dejar que escuche los tuyos de igual manera.
                                <br/>
                                <p>2. ¿Qué me gusta de ti?</p>
                                <br/>
                                Lo alegre, empática, paciente que eres y como puedes a su vez ser frozen y directa para no andar en rodeos cuando te lo pido, el hecho de que busques intentar hacer de todo para lograr una mejor comunicación entre nosotros y el que puedo hablar de todo contigo siempre, me gusta mucho lo libre que eres.
                                <br/>
                                <p>3. ¿Qué me gusta de nuestra relación?</p>
                                <br/>
                                Que te pueda contar las cosas que me gustan y que no me gustan directamente sin tapujos, los momentos en que solo una mirada basta para hacerme sonreír, cuando te abrazo y siento que el alrededor simplemente no existe, que me dejes escucharte cuando estas triste o alegre y me escuches de manera que me sienta querido y apreciado, la paciencia que me tienes y como buscas comportarte bien conmigo y el sentirme tan en confianza como para hablar contigo huevadas como si fuéramos amigos de años.
                                <br/>
                                <p>4. ¿Qué cosas me gustaría agregar a nuestra relación? </p>
                                <br/>
                                Muchos viajes, muchas más memorias, muchas más salidas, muchos más eventos, una casita, mascotas, aún más comunicación y silencios tranquilos y de paz a tu lado.
                                <br/>
                                <p>5. Te perdono por: </p>
                                <br/>
                                Lo triste que me pone el que a veces te quieras alejar, no hablar y escapar sin saber que hice o como pudiese arreglarlo uu.
                                <br/>
                                <p>6. Te pido perdón por: </p>
                                <br/>
                                No siempre recordar todo lo que me comentas o parecer que no te escucho, por hacerte sentir incómoda cuando no sé comunicar correctamente las cosas y por cualquier malentendido que pude ocasionar uu.
                            </div>
                            <br/>
                            <p>Siempre tuyo y con amor, </p>
                            <br/>
                            <input type="text" id="sender_name" name="sender"
                                   placeholder="Banner" disabled={true}/>
                        </form>
                    </div>

                    <div className="address">
                        <img src={PICTURE} className="mail_stamp"/>
                            <p id="address">Huánuco Perú, 2021 </p>
                        <br/>
                        <p>Te amo babe &lt;3</p>
                    </div>

                </div>
            </div>
        );
    }

}

export default ASK1