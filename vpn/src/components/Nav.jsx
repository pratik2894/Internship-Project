const Nav = () =>{

    return(
        <> <header class="headContainer">
        <div class="child1">
          <img class="Logoimg" src="./assets/Logo.png"/>
        </div>
        <div class="child2">
          <a> About </a>
          <a>Features</a>
          <a>pricing</a>
          <a>Testimonials</a>
          <a>Help</a>
        </div>
        <div class="child3">
          <a>Sign in</a>
          <a class="SignUp"> Signup up </a>
        </div>
        <div onclick="sideButton()" class="sidebar">
          <i class="fa-solid fa-bars"></i>
        </div>
      </header>
      <header class="header2">
        <a> About </a>
        <a>Features</a>
        <a>pricing</a>
        <a>Testimonials</a>
        <a>Help</a>
      </header>
  
        
        </>
    )

}

export default Nav;