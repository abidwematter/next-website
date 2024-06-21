import React from 'react'
const SocialContent = [
    {
        icon: 'fab fa-facebook-f',
        routerPath: 'https://www.facebook.com/wematterfb/'
    },
    {
        icon: 'fab fa-twitter',
        routerPath: 'https://twitter.com/Wematter_global'
    },
    {
        icon: 'fab fa-linkedin-in',
        routerPath: 'https://www.linkedin.com/company/w-e-matter/'
    },
    {
        icon: 'fab fa-whatsapp',
        routerPath: 'https://api.whatsapp.com/send?text=Employee Engagement Survey in India - W.E.-Matter https://we-matter.com'
    },
    {
        icon: 'fab fa-youtube',
        routerPath: 'https://www.youtube.com/@wematter9307'
    },
    {
        icon: 'fab fa-instagram',
        routerPath: 'https://www.instagram.com/we_matterglobal/?hl=en'
    },
];

const Socialicon = () => {
  return (
    <>
                <ul className="d-flex social-icon style-none">
                        {SocialContent.map((val, i)=>(
                            <li key={i}>
                            <a target='_blank' href={val.routerPath}><i className={val.icon}/></a>
                        </li>
                        ))}
                    </ul>
    </>


  )
}

export default Socialicon