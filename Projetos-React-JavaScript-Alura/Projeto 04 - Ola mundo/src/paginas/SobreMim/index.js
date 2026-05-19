import PostModelo from 'components/PostModelo'
import React from 'react'
import fotoCapa from 'assets/sobre_mim_capa.png'
import styles from './SobreMim.module.css'
import fotoSobreMim from 'assets/sobre_mim_foto.jpg'

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim">
      <h3 className={styles.subtitulo}> Olá, eu sou Isabela </h3>
      <img src={fotoSobreMim} alt='Foto da Isabela Sorrindo' className={styles.fotoSobreMim} />
      
      <p className={styles.paragrafo}>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Suscipit hendrerit at malesuada fringilla montes vitae ullamcorper sit elementum. Tempor facilisi conubia torquent per habitant ridiculus per dapibus proin. Dui placerat venenatis parturient potenti semper cras nullam. Sit luctus primis luctus hendrerit vivamus sagittis mattis. Faucibus potenti cras; fringilla mollis netus eleifend. Porta mollis per hac est eros. Suspendisse tempor massa elit pretium euismod. Convallis tristique eleifend nisi; habitasse lobortis lectus vestibulum phasellus? Scelerisque maximus inceptos var
      </p>
     
      <p className={styles.paragrafo}>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Suscipit hendrerit at malesuada fringilla montes vitae ullamcorper sit elementum. Tempor facilisi conubia torquent per habitant ridiculus per dapibus proin. Dui placerat venenatis parturient potenti semper cras nullam. Sit luctus primis luctus hendrerit vivamus sagittis mattis. Faucibus potenti cras; fringilla mollis netus eleifend. Porta mollis per hac est eros. Suspendisse tempor massa elit pretium euismod. Convallis tristique eleifend nisi; habitasse lobortis lectus vestibulum phasellus? Scelerisque maximus inceptos var
      </p>
    
      <p className={styles.paragrafo}>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Suscipit hendrerit at malesuada fringilla montes vitae ullamcorper sit elementum. Tempor facilisi conubia torquent per habitant ridiculus per dapibus proin. Dui placerat venenatis parturient potenti semper cras nullam. Sit luctus primis luctus hendrerit vivamus sagittis mattis. Faucibus potenti cras; fringilla mollis netus eleifend. Porta mollis per hac est eros. Suspendisse tempor massa elit pretium euismod. Convallis tristique eleifend nisi; habitasse lobortis lectus vestibulum phasellus? Scelerisque maximus inceptos var
      </p>
    
      <p className={styles.paragrafo}>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Suscipit hendrerit at malesuada fringilla montes vitae ullamcorper sit elementum. Tempor facilisi conubia torquent per habitant ridiculus per dapibus proin. Dui placerat venenatis parturient potenti semper cras nullam. Sit luctus primis luctus hendrerit vivamus sagittis mattis. Faucibus potenti cras; fringilla mollis netus eleifend. Porta mollis per hac est eros. Suspendisse tempor massa elit pretium euismod. Convallis tristique eleifend nisi; habitasse lobortis lectus vestibulum phasellus? Scelerisque maximus inceptos var
      </p>
    </PostModelo>
  )
}
