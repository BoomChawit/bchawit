import React from 'react'
import "./aicomp.css"

const Aicomp = () => {
  return (
    
    <aicomp id="Aicomp">

        <div className="container">

          <div className="content">

            <h1>
              <span>A</span>rtificial Intelligence
            </h1>

            <h2>Skills</h2>

            <div className="aicomp_skills">
              
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt = "tf"/>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" alt = "torch"/>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" alt = "np"/>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" alt = "pd"/>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg" alt = "anaconda"/>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg" alt = "jupyter"/>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt = "Python" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kaggle/kaggle-original-wordmark.svg" alt = "kaggle"/>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg" alt = "matlab" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg"  alt = "r"/>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt = "c"/>
          

            </div>

            <h2>Experiences</h2>

            <div className="aicomp_experience">

                <div className="aicomp_experience_box">
                  <div className="aicomp_experience_name">NLP Data Scientist Intern</div>
                  <div className="aicomp_experience_skill">
                    Train pre-trained model for job classification to analyse trendy skills for each job category. Use zero-shot classification models.
                    Gain knowledge on cutting-edge NLP models: Attention, Transformer, Bert.
                  </div>
                  
                  <div className="aicomp_experience_prof">Big Data, Thailand Development Research Institute</div>
                  <div className="aicomp_experience_period">July - Aug 2021</div>
                </div>

                <div className="aicomp_experience_box">
                  <div className="aicomp_experience_name">Student Researcher Intern</div>
                  <div className="aicomp_experience_skill">
                    Helped conducting a research on Data-driven drug discovery for human GPCRs by data mining and machine learning.
                    Gained software development experience in Python, Visual studio code and Git
                  </div>
                  <div className="aicomp_experience_prof">Vidyasirimedhi Institute of Science and Technology</div>
                  <div className="aicomp_experience_period">Aug - Sep 2022</div>
                </div>
            </div>

            <h2>Related Courses</h2>

            <div className="aicomp_courses">

              <div className="aicomp_courses_box">
                <div className="aicomp_courses_box1">Transfer Learning for NLP with TensorFlow Hub</div>
              </div>
              
              <div className="aicomp_courses_box">
                <div className="aicomp_courses_box2">Machine Learning Professional Certificate</div>
              </div>

              <div className="aicomp_courses_box">
                <div className="aicomp_courses_box3">Machine Learning for Business Professional</div>
              </div>

              <div className="aicomp_courses_box">
                <div className="aicomp_courses_box4">CS50: Introduction to Computer Science</div>
              </div>

              <div className="aicomp_courses_box">
                <div className="aicomp_courses_box5">Computer Vision Basics</div>
              </div>

              <div className="aicomp_courses_box">
                <div className="aicomp_courses_box6">Introduction to Programming with MATLAB</div>
              </div>

            </div>

            <h2>Projects</h2>

            <div className="aicomp_project">

            <div className="aicomp_project_box">
                <div className="aicomp_project_box_SM"></div>
                <div className="aicomp_project_text">Time Series Analysis of BTC-USD Price with the Comparison of LSTM and RNN</div>
                <div className="aicomp_project_skills">ARMA, RNN, LSTM</div>
                <div className='aicomp_project_link'> <a href = "https://github.com/BoomChawit/IBM_SM/blob/main/BTC%20TimeSeries.ipynb">Github</a></div>
              </div>

              <div className="aicomp_project_box">
                <div className="aicomp_project_box_DLRL"></div>
                <div className="aicomp_project_text">Region-based Neural Network for Vehicle Detection in Computer Vision</div>
                <div className="aicomp_project_skills">Region-based, VGG, LeNet</div>
                <div className='aicomp_project_link'> <a href = "https://github.com/BoomChawit/IBM_DLRL/blob/main/CNN%20Car%20Detection.ipynb">Github</a></div>
              </div>

              <div className="aicomp_project_box">
                <div className="aicomp_project_box_SMLC"></div>
                <div className="aicomp_project_text">Classify and Predict Salary Level of Data Science Career by Classification</div>
                <div className="aicomp_project_skills">SVM, RF, Confusion Matrix</div>
                <div className='aicomp_project_link'> <a href = "https://github.com/BoomChawit/IBM_SMLC/blob/main/Salary%20Level%20Classification.ipynb">Github</a></div>
              </div>

              <div className="aicomp_project_box">
                <div className="aicomp_project_box_EDA"></div>
                <div className="aicomp_project_text">The Analysis of COURSERA Platform by EDA tools</div>
                <div className="aicomp_project_skills">NumPy, SciPy, Matplotlib</div>
                <div className='aicomp_project_link'> <a href = "https://github.com/BoomChawit/IBM_EDA/blob/main/Coursera%20EDA.ipynb">Github</a></div>
              </div>
              
              <div className="aicomp_project_box">
                <div className="aicomp_project_box_SMLR"></div>
                <div className="aicomp_project_text">Learn and Predict Laptop Price by Regressions</div>
                <div className="aicomp_project_skills">Linear, Lasso, Ridge Regressions</div>
                <div className='aicomp_project_link'> <a href = "https://github.com/BoomChawit/IBM_SMLR/blob/main/Laptop%20Price%20Regression.ipynb">Github</a></div>
              </div>

              <div className="aicomp_project_box">
                <div className="aicomp_project_box_UML"></div>
                <div className="aicomp_project_text">Natural Language Processing and Clustering of Covid-19 Tweet Sentiments</div>
                <div className="aicomp_project_skills">K-mean Clustering, NNMF</div>
                <div className='aicomp_project_link'> <a href = "https://github.com/BoomChawit/IBM_UML/blob/main/NMF%20on%20Corona%20Tweets.ipynb">Github</a></div>
              </div>

              <div className="aicomp_project_box">
                <div className="aicomp_project_box_IPE"></div>
                <div className="aicomp_project_text">Comparison of Machine Learning Techniques for the Prediction of Water-wells Functionality in Tanzania</div>
                <div className="aicomp_project_skills">Pandas, KNN, ANN, XGBoost</div>
                <div className='aicomp_project_link'> <a href = "https://github.com/BoomChawit/IPE-final/blob/main/mainpro.ipynb">Github</a></div>

              </div>

              <div className="aicomp_project_box">
                <div className="aicomp_project_box_DAP"></div>
                <div className="aicomp_project_text">Wine Classification and Prediction based on Chemical Properties</div>
                <div className="aicomp_project_skills">Paired T Test, KNN, Tree</div>
                <div className='aicomp_project_link'> <a href = "https://github.com/BoomChawit/DAP-final/blob/main/main_program.ipynb">Github</a></div>
              </div>

            </div>
          
          </div>

        </div>

    </aicomp>

  )
}

export default Aicomp