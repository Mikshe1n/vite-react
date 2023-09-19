import React from 'react'
import styles from './Home.module.css'
import logo from '../../../../public/logo.png'
import {AiOutlineCloseCircle} from 'react-icons/ai'

const App = () => {
  return (
    <div>
         <div className={styles.image}>
            <img src={logo} alt="" />
            <h1>Дисклеймер</h1>
            <AiOutlineCloseCircle size={50}/>
         </div>
         
        <div className='info'>
        <h2>Давай так.</h2>
        <p>Мы старались здесь что-то интересное и по-истине крутое. То что ты прочитаешь и узнаешь дальше - плод нашей фантазии и желания устроить крутое пати.</p>
        <p>Если у тебя сейчас нет 15 минут чтобы изучить весь сайт - то не выебывайся, пожалуйста, а найди 15 минут и изучи весь сайт. </p>
        <p>И сейчас я задам тебе один вопрос который ты должен пронести через весь сайт -а готов ли я проебать это событие?</p>
        <p><b>Все, можешь закрывать дисклеймер и потратить свои 15 минут!</b></p>
        </div>
        <div className='helpf'>
            <h3>Управление сайтом НАЖАТИЕМ, А НЕ СКРОЛЛОМ, БЛЯТЬ</h3>
        </div>
    </div>
  )
}

export default App