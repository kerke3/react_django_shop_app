import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      <div id="content-wrapper">
        <div className="container-fluid">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active">Statistics for today</li>
          </ol>
          {/* Icon Cards*/}
          <div className="row">
            <div className="col-xl-3 col-sm-6 mb-3">
              <div className="card text-white bg-primary o-hidden h-100">
                <div className="card-body">
                  <div className="card-body-icon">
                    <i className="fas fa-fw fa-users" />
                  </div>
                  <div className="mr-5">2 Customers</div>
                </div>
                <a
                  className="card-footer text-white clearfix small z-1"
                  href="#"
                >
                  <span className="float-left">View Details</span>
                  <span className="float-right">
                    <i className="fas fa-angle-right" />
                  </span>
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-3">
              <div className="card text-white bg-warning o-hidden h-100">
                <div className="card-body">
                  <div className="card-body-icon">
                    <i className="fas fa-fw fa-list" />
                  </div>
                  <div className="mr-5">5 Products out of stock</div>
                </div>
                <a
                  className="card-footer text-white clearfix small z-1"
                  href="#"
                >
                  <span className="float-left">View Details</span>
                  <span className="float-right">
                    <i className="fas fa-angle-right" />
                  </span>
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-3">
              <div className="card text-white bg-success o-hidden h-100">
                <div className="card-body">
                  <div className="card-body-icon">
                    <i className="fas fa-fw fa-shopping-cart" />
                  </div>
                  <div className="mr-5">12 Purchase Order</div>
                </div>
                <a
                  className="card-footer text-white clearfix small z-1"
                  href="#"
                >
                  <span className="float-left">View Details</span>
                  <span className="float-right">
                    <i className="fas fa-angle-right" />
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Area Chart Example*/}
          <div className="card mb-3">
            <div className="card-header">
              <i className="fas fa-chart-area" />
              Area Chart Example
            </div>
            <div className="card-body">
              <canvas id="myAreaChart" width="100%" height={30} />
            </div>
            <div className="card-footer small text-muted">
              Updated yesterday at 11:59 PM
            </div>
          </div>
        </div>

        {/* /.container-fluid */}
        {/* Sticky Footer */}
        <footer className="sticky-footer">
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
              <span>Shopify © 2018</span>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Dashboard;
