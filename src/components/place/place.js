import './_place.scss';
import { Component } from 'react';
import first from '../../resources/img/third_section/chehov_house.jpg'
import second from '../../resources/img/third_section/chehov_house.jpg'
import firstNextPlace from '../../resources/img/third_section/chehov_house.jpg'
import secondNextPlace from '../../resources/img/third_section/chehov_house.jpg'
import thirdNextPlace from '../../resources/img/third_section/chehov_house.jpg'
class Place extends Component {


    render() {
        return(

            <section className="place">

            <div className="place__container">
                <div className="place_box">
                    <div className="place__title">Мемориальный музей «Домик Чехова»</div>
                    <div className="place__descr"><p>Таганрогский музей «Домик Чехова» - старейший мемориальный чеховский музей в России открытый в 1926 году. Расположен в небольшом флигеле на территории бывшего домовладения таганрогского купца А.Д. Гнутова по ул. Чехова (быв. Купеческой, Полицейской, Александровской). Постройка домика относится к 1850-м годам. В 50-60-е годы XIX в. здесь находился деревянный дом и два небольших флигеля, каретный сарай и хозяйственные постройки.</p>
                        <p>Купец 3-й гильдии П.Е. Чехов с семьей проживал в этом доме с лета 1859 г. по март 1861 г. 29 января 1860 г. здесь родился третий сын Чеховых – Антон, будущий великий писатель.</p>
                        <p>О месте своего рождения Антон Павлович Чехов писал П.Ф. Иорданову: «Родился я в доме Болотова (так говорит моя мать) или Гнутова, около Третьякова В.Н., на Полицейской улице в маленьком флигеле во дворе».</p>
                        <p>Благодаря усилиям Чеховского кружка, организованного в Таганроге в 1904 году по инициативе В. Гаршина, в 1914 году на стене дома была установлена мемориальная доска. В 1916 году по инициативе Чеховского кружка городская управа приобрела в собственность от госпожи Коваленковой принадлежащее ей дворовое место по ул. Чехова, 69 с целью сохранения в неприкосновенности домика, в котором родился А.П. Чехов. В декабре 1920 года домик был освобожден от квартирантов. В 1921 году его отремонтировали, а в 1926 году в нем открылась первая экспозиция, рассказывающая о жизни А.П. Чехова, о его приездах в родной город. С тех пор «Домик Чехова» стал одним из всемирно известных памятников отечественной культуры.</p>
                    </div>
                </div>
                
                <div className="place__info">
                    <div className="place__info_descr">Мемориальный музей «Домик Чехова»</div>
                    <div className="place__img">
                        <div className="place__slide_round_right"><span></span><i className="right"></i></div>
                        <div className="place__slide_round_left"><span></span><i className="left"></i></div>
                    </div>
                    
                    
                    <div className="place__img_container">
                        <img className="place__img_small" src={first} alt="place1"/>
                        <img className="place__img_small" src={second} alt="place2"/>
                    </div>
                    <div className="place__description"><p>Таганрогский музей «Домик Чехова» - старейший мемориальный чеховский музей в России открытый в 1926 году. Расположен в небольшом флигеле на территории бывшего домовладения таганрогского купца А.Д. Гнутова по ул. Чехова (быв. Купеческой, Полицейской, Александровской). Постройка домика относится к 1850-м годам. В 50-60-е годы XIX в. здесь находился деревянный дом и два небольших флигеля, каретный сарай и хозяйственные постройки.</p>
                    </div>
                    <div className="place__contact"><span>Контакты:</span> <br/> 347900, г. Таганрог, ул. Чехова, 69
                        тел.: (8634) 39-42-76</div>
                    <div className="place__operating_mode"><span>Режим работы:</span> <br/> Ежедневно с 10 до 18 часов.
                        Касса открыта с 10 до 17 часов,
                        выходной - понедельник.</div>
                    
                </div>
            </div>
            <div className="place__card_container">
                <div className="place__card"><iframe className='frame' src="https://yandex.ru/map-widget/v1/?l=masstransit&ll=38.93140%2C47.206969&mode=poi&poi%5Bpoint%5D=38.931277%2C47.206906&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%&z=17.75" ></iframe></div>
            </div>

            <div className="place_other">
                <div className="place_other__title">Похожие места</div>
                <div className="place_other__container">
                    <div className="place_other__img">
                        <img src={firstNextPlace} alt="place" className="place_other_img"/>
                        <div className="place_other_img_title">Самбекские высоты</div>
                    </div>
                    <div id="two" className="place_other__img">
                        <img src={secondNextPlace} alt="place" className="place_other_img"/>
                        <div className="place_other_img_title">Памятник Петру I</div>
                    </div>
                    <div id="last" className="place_other__img">
                        <img  src={thirdNextPlace} alt="place" className="place_other_img"/>
                        <div className="place_other_img_title">Приморский парк</div>
                    </div>
                </div>
                
            </div>
            
        </section>

            )
    }

}

export default Place