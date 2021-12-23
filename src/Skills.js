import React from "react";
import "./Skills.css";


function Skills() {
  return (
    <div className="skills" id="Skills">
      <div class="max-width">
        <h2 class="title">My Skills</h2>
        <div class="skills-content">
          <div class="left">
            <div class="text">My Knowledge.</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus deserunt a deleniti minus fugit ducimus magnam ad
              consectetur eius odit similique nesciunt aliquid mollitia aperiam
              soluta atque aut, laborum, totam placeat voluptatem quae tempora?
              Quod, quasi quo esse voluptas velit atque. Ducimus necessitatibus
              perferendis nulla minus ipsa, ut eveniet cumque sequi asperiores,
              voluptas praesentium optio officia animi? Dolorum, cum quae.
            </p>
            <a href="#">Read More</a>
          </div>
          <div class="right">
            <div class="bars">
              <div class="info">
                <span>HTML</span>
                <span>90%</span>
              </div>
              <div class="line html"></div>
            </div>
            <div class="bars">
              <div class="info">
                <span>CSS</span>
                <span>90%</span>
              </div>
              <div class="line css"></div>
            </div>
            <div class="bars">
              <div class="info">
                <span>JavaScript</span>
                <span>60%</span>
              </div>
              <div class="line js"></div>
            </div>
            <div class="bars">
              <div class="info">
                <span>PHP</span>
                <span>5%</span>
              </div>
              <div class="line php"></div>
            </div>
            <div class="bars">
              <div class="info">
                <span>MySQL</span>
                <span>5%</span>
              </div>
              <div class="line mysql"></div>
            </div>
            <div class="bars">
              <div class="info">
                <span>ReactJS</span>
                <span>20%</span>
              </div>
              <div class="line react"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
