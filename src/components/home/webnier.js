import React from 'react';

const webnier = (props) => {
    return (
        <section className="ag-section mt-4 ">
            <div className="container">
                <div className="middle-card calander ">
                    <div className="row">
                        <div className="col-md-4">
                            <span className="image">
                                {" "}
                                <img src="assets/images/arrow.png" />
                            </span>
                            <h3> Sessions Available </h3>
                        </div>
                        <div className="col-md-8 text-right pt-3">
                            <strong> Share Now </strong>
                            <div className="social-icons">
                                <img src="assets/images/p.png" />
                                <img src="assets/images/s.jpg" />
                                <img src="assets/images/linked.jpg" />
                                <img src="assets/images/L00013.jpg" />
                                <img src="assets/images/gmail.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className="calnder-part">
                        <div className="row">
                            <div className="col-md-6 d-flex">
                                <h1> 3 Hour Webinar </h1>
                                <div className="custom-btn"> $25</div>
                                <span>
                                    {" "}
                                    <i className="fa fa-pencil-square-o"> EDIT</i>
                                </span>
                            </div>
                            <div className="col-md-6 d-flex">
                                <h1 style={{ color: "#a8a8a8" }}>1 Hour One-on-One </h1>
                                <div className="custom-btn"> $10</div>
                                <span>
                                    {" "}
                                    <i className="fa fa-pencil-square-o"> EDIT</i>
                                </span>
                            </div>
                            <span style={{ marginTop: 0 }}>
                                <img src="assets/images/line.png" />{" "}
                            </span>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="eventsTable table-responsive">
                                    <table className="table" id="customers">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <b className="day">Mon</b>
                                                    <span className="date">01/04/20</span>
                                                </th>
                                                <th>
                                                    <b className="day">Tue</b>
                                                    <span className="date">01/04/20</span>
                                                </th>
                                                <th>
                                                    <b className="day">Wed</b>
                                                    <span className="date">01/04/20</span>
                                                </th>
                                                <th>
                                                    <b className="day">Wed</b>
                                                    <span className="date">01/04/20</span>
                                                </th>
                                                <th>
                                                    <b className="day">Wed</b>
                                                    <span className="date">01/04/20</span>
                                                </th>
                                                <th>
                                                    <b className="day">Sat</b>
                                                    <span className="date">01/04/20</span>
                                                </th>
                                                <th>
                                                    <b className="day bd">Sun</b>
                                                    <span className="date">01/04/20</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="badge orangeBg">9:00 AM</div>
                                                </td>
                                                <td />
                                                <td />
                                                <td />
                                                <td />
                                                <td />
                                                <td>
                                                    <div className="badge orangeBg">11:00 AM</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="badge orangeBg">11:00 AM</div>
                                                </td>
                                                <td />
                                                <td />
                                                <td>
                                                    <div className="badge orangeBg">10:00 AM</div>
                                                </td>
                                                <td />
                                                <td />
                                                <td />
                                            </tr>
                                            <tr>
                                                <td />
                                                <td>
                                                    <div className="badge orangeBg">9:00 AM</div>
                                                </td>
                                                <td />
                                                <td />
                                                <td />
                                                <td />
                                                <td />
                                            </tr>
                                            <tr>
                                                <td />
                                                <td>
                                                    <div className="badge orangeBg">9:00 AM</div>
                                                </td>
                                                <td />
                                                <td />
                                                <td />
                                                <td>
                                                    <div className="badge orangeBg">9:00 AM</div>
                                                </td>
                                                <td />
                                            </tr>
                                            <tr>
                                                <td />
                                                <td />
                                                <td />
                                                <td />
                                                <td>
                                                    <div className="badge orangeBg">9:00 AM</div>
                                                </td>
                                                <td />
                                                <td />
                                            </tr>
                                            <tr className="no-right-border">
                                                <td>
                                                    <div className="badge orangeBg">9:00 AM</div>
                                                </td>
                                                <td />
                                                <td>
                                                    <div className="badge orangeBg">9:00 AM</div>
                                                </td>
                                                <td />
                                                <td />
                                                <td />
                                                <td>
                                                    <div className="badge orangeBg">9:00 AM</div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default webnier;
