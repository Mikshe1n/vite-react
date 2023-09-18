import React from 'react'
import styles from './Home.module.css'


const App = () => {
  return (
    <div>
        <h1>Cars</h1>
        <div>
         <div className={styles.item}>
            <div 
            className={styles.image} 
                style={{
                backgroundImage: 'url(/i.webp)',
            }}
            />
            
            <div className={styles.info}>
                <h2>car1</h2>
                <p>100 000</p>
                <button>read more</button>
            </div>
            
         </div>
        </div>
    </div>

  )
}

export default App