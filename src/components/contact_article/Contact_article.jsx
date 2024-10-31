import './contact_article.css'

const Contact_article = ({icon,title,description,link}) => {
  return (
    <article className='contact__option'>
            <div className='icon'>{icon}</div>
            <h4>{title}</h4>
            <h5>{description}</h5>
            <a href={link} target='_blank' rel='noreferrer noopener' >Send a message</a>
    </article>
  )
}

export default Contact_article