

  <div class="container about-wrapper" id="aboutWrapper">
  <aside class="container brand-about-cover" id="brandAboutCover">
    
  </aside> <!-- End Brand About -->

  <aside class="brand-about" id="brandAbout">
    <h1 class="brand-about-title" id="brandAboutTitle"></h1>
    <nav class="nav brand-about-nav" id="brandAbout">
      <button onclick="openService('cForm')" class="btn brand-about-nav-btn-1" id="brandAboutNavBtn_1">
      <button onclick="openService('specials')" class="brand-about-nav-btn-2" id="brandAboutNavBtn_2">
      <button onclick="openService('events')" class="brand-about-nav-btn-3" id="brandAboutNavBtn_3">
      <button onclick="openService('staff')" class="brand-about-nav-btn-4" id="brandAboutNavBtn_4">
    </nav>

    <div class="service contact-form" id="cForm">
      <h1></h1>
      <form class="form">

        <div class="field">
          <input type="text" autocomplete="off" id="fname" value="" required />
          <label for="fname" class="label-fname">
          <span class="content-fname" name="fname"></span>
          </label>
        </div>
       <div class="field">
          <input type="text" autocomplete="off" id="lname" value="" required />
          <label for="lname" class="label-lname">
          <span class="content-lname" name="lname"></span>
          </label>
        </div>
       <div class="field">
          <input type="email" autocomplete="off" id="email" value="" required />
          <label for="email" class="label-email">
          <span class="content-email" name="email"></span>
          </label>
        </div>
       <div class="field">
          <input type="text" autocomplete="off" id="company" value="" required />
          <label for="company" class="label-company">
          <span class="content-company" name="company"></span>
          </label>
        </div>
        <nav class="btn-bar">
          <button class="btn" id="form-btn-1"></button>
        </nav>

      </form>
    </div>

    <div class="service special-deals" id="specials">
        <div class="deals">
          <div class="dwkz" id="dwkzBrand">
              <h1>dashWoorkZ IT</h1>
              <quote>Linux Driven To Succeed</quote>
              <h2><a href="https://dashwoorkz.ca"></a></h2>
              <h3>Phone: 604-347-8698</h3>
          </div>
          <div class="current" id="currentSpec"></div>
          <div class="current1" id="currentSpec1"></div>
          <div class="consult" id="freeConsult"></div>
        </div>
    </div>

   <div class="service events-list" id="events"><!-- Rename ID(eventsList) -->
      <div class="current-events" id="currentEvents"></div>
    </div>

   <div class="service staff-list" id="staff">
      <div class="lead-staff" id="leadStaff">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
              <h1 class="flip-title">Sole-Proprietor</h1>
            <img src="imgs/DL_brand.jpg" alt="Dash LaLonde">
          </div>
         <div class="flip-card-back">
            <h1>Dash LaLonde</h1>
            <p>Web Develper</p>
            <p>Full Stack</p>
          </div>
        </div>
      </div> 
    </div>
  </aside> <!--End Animated Container -->
  </div> <!-- End About Wrapper -->

    <div class="container brand-info" id="main-container"> <!-- Rename ID(brandInfo) -->
        <div class="content-container" id="mainContent"><!-- Rename Class(container, brand-info-wallet), ID(brandInfoWallet) --> 
            <div class="info-wallet" id="infoWallet">
                <div class="content-billboard" id="billboard"></div>
                <div class="content-brand" id="brand"></div>
            </div> <!-- End Info Wallet -->
            <div class="brand-content" id="brandContent"> <!-- Rename Class(container, brand-info-services), ID(brandInfoServices) -->
            <div class="content" id="content-box-1"></div><!-- css attribute(appearance:button) -->
            <div class="content" id="content-box-2"></div><!-- css attribute(appearance:button) -->
            <div class="content" id="content-box-3"></div><!-- css attribute(appearance:button) -->
            <div class="content" id="content-box-4"></div><!-- css attribute(appearance:button) -->
            </div> <!-- End Brand Content -->
       </div> <!-- End Main Content -->
    </div> <!-- End Main Container -->
