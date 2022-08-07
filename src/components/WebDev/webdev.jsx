import React from 'react'
import "./webdev.css"          

const Webdev = () => {
  return (
    
    <webdev id="Webdev">

        <div className="container">

            <div className="content">

                <h1>
                    <span>W</span>eb Developments
                </h1>

                <h2>Skills</h2>

                <div className="webdev_skills">
                    
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt = "JS" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt = "HTML" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt = "CSS" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt = "React" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt = "sql"/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" alt = "WordPress"/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt = "PHP"/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg" alt = "DigitalOcean"/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" alt = "Flask"/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt = "Python"/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt = "VScode"/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt = "Figma" />
          
          
                    
                </div>

                <h2>Projects</h2>

                <div className="webdev_all_work">

                    <div className="webdev_work">
                        <div className="webdev_work_img1"></div>
                        <div className="webdev_work_name">TSAJ Website</div>
                        <div className="webdev_work_describe">
                            Responsible for front-end work with WordPress framework with SQL database for creating and launching
                            a new website <a href="https://tsaj.org" target = "_blank" rel="noreferrer">tsaj.org</a> with <a href="https://www.digitalocean.com" target = "_blank" rel="noreferrer">DigitalOcean Cloud</a>.
                        </div>
                        <div className="webdev_work_skills">
                            <li>PHP</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JS</li>
                            <li>SQL</li>
                        </div>
                    </div>

                    <div className="webdev_work">
                        <div className="webdev_work_img2"></div>
                        <div className="webdev_work_name2">Inspirer</div>
                        <div className="webdev_work_describe2">
                            A website for finding own inspirers of the career path. The web is based 
                            on <a href="https://flask.palletsprojects.com" target="_blank" rel="noreferrer">Python Flask</a> framework with SQL database. 
                            Login and account functions are employed. 
                        </div>
                        <div className="webdev_work_skills2">
                            <li>Flask</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JS</li>
                            <li>SQL</li>
                        </div>
                    </div>

                    <div className="webdev_work">
                        <div className="webdev_work_img3"></div>
                        <div className="webdev_work_name">Activity Registration Platform</div>
                        <div className="webdev_work_describe">
                        Responsible for a full-stack single page of Activity Registration and Creation Platform, 
                        mainly using Google Apps Script with Sheet Databasea new website on <a href="https://tsaj.org" target = "_blank" rel="noreferrer">tsaj.org</a>
                        </div>
                        <div className="webdev_work_skills">
                            <li>Google Apps Script</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </div>
                    </div>

                    <div className="webdev_work_last">
                        <div className="webdev_work_img4"></div>
                        <div className="webdev_work_name2">GitHub Page</div>
                        <div className="webdev_work_describe2">
                            Edit <span className='font_yellow'>README</span> to create own GitHub profile. Built the profile with Spotify connected page.
                            Also created the portfolio by uploading previous work on my space.
                        </div>
                        <div className="webdev_work_skills2">
                            <li>Markdown</li>
                            <li>Spotify Connected</li>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    </webdev>

  )
}

export default Webdev