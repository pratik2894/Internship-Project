const Pricing = ()=>{
    return(
        <div class="container">
        <h1 class="heading">Choose Your Best Pricing Plan</h1>
        <p>
          Let's choose the package that is best for you and explore it happily and
          cheerfully.
        </p>
  
        <div class="card_group">
          <div class="pricing-card">
            <img src="./assets/pricing.png" />
            <h3>Free Plan</h3>
            <ul class="package_list">
             <li><i class="fa-solid fa-check"style={{ color: "#2fab73", marginRight: "7px" }}></i>Unlimited Bandwidth</li>
              <li><i class="fa-solid fa-check"style={{ color: "#2fab73", marginRight: "7px" }}></i>Encrypted Connection</li>
              <li><i class="fa-solid fa-check"style={{ color: "#2fab73", marginRight: "7px" }}></i>No Traffic Logs</li>
              <li><i class="fa-solid fa-check"style={{ color: "#2fab73", marginRight: "7px" }}></i>Works on All Devices</li>
            </ul>
            <h4 class="price">Free</h4>
            <a href="#" class="get_started_btn"> Select </a>
          </div>
          <div class="pricing-card">
            <img src="./assets/pricing.png" />
            <h3>Standard Plan</h3>
            <ul class="package_list">
              <li><i class="fa-solid fa-check"style={{ color: "#2fab73", marginRight: "7px" }}></i>Unlimited Bandwidth</li>
              <li><i class="fa-solid fa-check"style={{ color: "#2fab73", marginRight: "7px" }}></i>Encrypted Connection</li>
              <li><i class="fa-solid fa-check"style={{ color: "#2fab73", marginRight: "7px" }}></i>No Traffic Logs</li>
              <li><i class="fa-solid fa-check"style={{ color: "#2fab73", marginRight: "7px" }}></i>Works on All Devices</li>
              <li><i class="fa-solid fa-check"style={{ color: "#2fab73", marginRight: "7px" }}></i>Connection Anywhere</li>
            </ul>
            <h4 class="price">$9 / mo</h4>
            <a href="#" class="get_started_btn"> Select </a>
          </div>
          <div class="pricing-card">
            <img src="./assets/pricing.png" />
            <h3>Premium Plan</h3>
            <ul class="package_list">
              <li><i class="fa-solid fa-check"style={{ color: "#2fab73", marginRight: "7px" }}></i>Unlimited Bandwidth</li>
              <li><i class="fa-solid fa-check"style={{ color: "#2fab73", marginRight: "7px" }}></i>Encrypted Connection</li>
              <li><i class="fa-solid fa-check"style={{ color: "#2fab73", marginRight: "7px" }}></i>No Traffic Logs</li>
              <li><i class="fa-solid fa-check"style={{ color: "#2fab73", marginRight: "7px" }}></i>Works on All Devices</li>
              <li><i class="fa-solid fa-check"style={{ color: "#2fab73", marginRight: "7px" }}></i>Connection Anywhere</li>
              <li><i class="fa-solid fa-check"style={{ color: "#2fab73", marginRight: "7px" }}></i>Get New Features</li>
            </ul>
            <h4 class="price">$12 / mo</h4>
            <a href="#" class="get_started_btn"> Select </a>
          </div>
        </div>
      </div>
    )
}

export default Pricing;