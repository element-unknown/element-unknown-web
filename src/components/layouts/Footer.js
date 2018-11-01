import React from 'react'

const Footer = () => {
  return (
    <footer class="page-footer grey darken-4">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text center">Links</h5>
            <ul className="center">
              <li><a href="#!" className="grey-text text-lighten-3">News</a></li>
              <li><a href="#!" className="grey-text text-lighten-3">Contact</a></li>
              <li><a href="#!" className="grey-text text-lighten-3">About</a></li>
              <li><a href="#!" className="grey-text text-lighten-3">Shop</a></li>
              <li><a href="#!" className="grey-text text-lighten-3">Games</a></li>
            </ul>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text center">Social Media</h5>
            <div className="center">
              <a class="grey-text text-lighten-3" href="#!"><i className="fab fa-facebook-square fa-lg"></i> </a>
              <a class="grey-text text-lighten-3" href="#!"><i className="fab fa-twitter-square fa-lg"></i> </a>
              <a class="grey-text text-lighten-3" href="#!"><i className="fab fa-instagram fa-lg"></i> </a>
              <a class="grey-text text-lighten-3" href="#!"><i className="fab fa-linkedin fa-lg"></i> </a>
            </div>
            <h5 className="white-text center">Contact</h5>
            <ul className="center">
            <li><a href="#!" className="grey-text text-lighten-3">Email</a></li>
            <li><a href="#!" className="grey-text text-lighten-3">Support</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright grey darken-2">
        <div class="container">
        <span className="right">© 2018 Element Unknown</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
