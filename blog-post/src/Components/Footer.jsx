import React from 'react'
import 'font-awesome/css/font-awesome.min.css';

function Footer() {
  return (
    
       <footer className="bg-gray-900 text-white w-full py-6 mt-auto shadow-indigo-900">
          <div className="flex  flex-col  items-center">
              <div className="row">
                  <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                      <ul className="flex space-x-4 mb-4">
                          <li>
                              <a href="#">
                                  <span className="fa-stack fa-lg">
                                      <i className="fa fa-circle fa-stack-2x"></i>
                                      <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                                  </span>
                              </a>
                          </li>
                          <li>
                              <a href="#">
                                  <span className="fa-stack fa-lg">
                                      <i className="fa fa-circle fa-stack-2x"></i>
                                      <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                                  </span>
                              </a>
                          </li>
                          <li>
                              <a href="#">
                                  <span className="fa-stack fa-lg">
                                      <i className="fa fa-circle fa-stack-2x"></i>
                                      <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                                  </span>
                              </a>
                          </li>
                      </ul>
<p className="text-gray-400 text-sm">
  Copyright &copy; Your Website 2016
</p>
                  </div>
              </div>
          </div>
      </footer>

  )
}

export default Footer
