import styles from "../../styles/JobsCard.module.css"

const JobsCard = () => {
    const jobs =[
        {
            id:1,
            title: "Senior Web Developr",
            location: "Brussel" 
        },
        {
            id:2,
            title: "Senior Java Developr",
            location: "Aalst"
        },
        {
            id:3,
            title: "Front End Web Developr",
            location: "Ghent"
        },
        {
            id:4,
            title: "PHP Developr",
            location: "Antwerpen"
        },
        {
            id:5,
            title: "Network Administrator",
            location: "Liege"
        },
        {
            id:6,
            title: "System Administrator",
            location: "Vilvorde"
        }
            
    ]
  return (
    jobs.map(({id, title, location}) => {
        return (
       <div key={id} className={styles.container}>
        
                <article className={styles.cardItem}>
                    <div className={styles.jobTitle}>
                        <span className={styles.spantitle}>{title}</span>
                    <div className={styles.jobLocation}>
                        <span className={styles.spanlocation}>{location}</span>
                    </div>
                    </div>
                    <div className={styles.button}>
                        <button className={styles.btn}>Apply</button>
                    </div>
                </article>
            
          </div>
           )
       })
  )
}

export default JobsCard
