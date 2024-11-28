import imgAuthor from '../images/georgia-de-lotz-unsplash.png';

function About() {
    return (
        <section className='about'>
            <div className='about__container'>
                <img className='about__image' src={imgAuthor} alt='Image of author' />
                <div className='about__description'>
                <h2 className='about__title'>Sobre mim</h2>
                <p className='about__subheading'>Olá, meu nome é Malhane e sou desenvolvedora web fullstack. Tenho experiência em diversas tecnologias de desenvolvimento, incluindo HTML, CSS, JavaScript, React, Node.js, entre outras.</p>
                <p className='about__subheading'>Minha jornada no mundo da programação foi intensificada por minha participação na TripleTen, uma plataforma de aprendizado intensivo, onde tive a oportunidade de expandir meus conhecimentos e habilidades práticas na criação de websites e aplicativos móveis. </p>
                <p className='about__subheading'>Durante o programa, trabalhei em projetos reais que me permitiram aplicar minhas habilidades em situações do mundo real, e isso me deu uma base sólida para resolver problemas complexos e desenvolver soluções eficientes.</p>
                </div>
            </div>

        </section>
    )
};

export default About;