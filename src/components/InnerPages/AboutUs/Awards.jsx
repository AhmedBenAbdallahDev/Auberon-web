//= Static Data
import data from '@/data/AgencyPortfolio/awards.json';

function Awards() {
  return (
    <div className="tc-about-awards-style1 wow fadeInUp slow">
      <div className="container">
        <div className="content wow fadeInUp">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">hosted</th>
                  <th scope="col">Award</th>
                  <th scope="col">project</th>
                  <th scope="col">year</th>
                </tr>
              </thead>
              <tbody>
                {data.map(item => (
                  <tr key={item.id}>
                    <td>{item.host}</td>
                    <td> <strong> {item.title} </strong> </td>
                    <td> <a href="#"> {item.project} </a> </td>
                    <td>{item.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="button_su mt-70">
            <span className="su_button_circle bg-black desplode-circle"></span>
            <a href="#" className="butn text-capitalize button_su_inner hover-white">
              <span className="button_text_container"> Show More <i className="ti-angle-down ms-2"></i> </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Awards