function AboutMe() {
    return (
      <div class="container">
        <h3 class="pageTitle">All About Billy</h3>
        <img class="face" src="src\public\img\Billy_Swiftpage.jpg" />
        <p>
          Billy is a .Net Software Developer with a passion for coding and
          learning.  He has recently gone through a node.js bootcamp and is
          currently working on a full stack database management program for his
          live-action roleplaying game.
        </p>
        <ul id="backgroundlist">
          <li>
            Born and raised in Atlanta, GA
          </li>
          <li>
            Die-hard Falcons Fan, for some reason
          </li>
          <li>
            Lives in Globe Arizona
          </li>
          <li>
            Currently employed at Fivetran
          </li>
          <li>
            <b>Dream Job:</b> Full stack developer
          </li>
        </ul>
      </div>
    );
  }
  
  export default AboutMe;