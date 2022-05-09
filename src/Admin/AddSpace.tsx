import React from 'react'
import Select from 'react-select'
import './AdminNav.css'

function AddSpace() {

  const facilty = [
    { value: 1, label: 'Washroom' },
    { value: 2, label: 'Parking' },
    { value: 3, label: 'Lift' },
    { value: 4, label: 'Locker' }
  ];

  const perks = [
    { value: 1, label: 'Wifi' },
    { value: 2, label: 'AC' },
    { value: 3, label: 'FreeSnacks' },
    { value: 4, label: 'Canteen' },
    { value: 5, label: 'Plug Point' },
    { value: 6, label: 'Printer' },
    { value: 7, label: 'Power Backup' },
    { value: 8, label: 'Projector' },
  ];

  const spacetype = [
    { value: 1, label: 'Hotseat' },
    { value: 2, label: 'Large desk' },
    { value: 3, label: 'Cabin' }
  ];

  return (
    <div className='spaces '>
      <section className="vh-100"  >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card border-radius: 1rem">
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block ">
                    <img src='/Images/spaceImage.webp'
                      alt="login form" className="spaceimage img-fluid border-radius: 1rem 0 0 1rem" />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <h5 className="fw-normal mb-4 pb-4 letter-spacing: 1px text-center display-3" >Add Space Detail</h5>
                        <div className="form-outline mb-4">
                          <label className="form-label" >Space Name</label>
                          <input type="text" id="form2Example17" className="form-control form-control-lg" required />

                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" >Space Type</label>
                          <Select options={spacetype} />

                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" >Location</label>
                          <input type="text" id="form2Example17" className="form-control form-control-lg" required />

                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" >Open Time</label>
                          <input type="time" id="form2Example17" className="form-control form-control-lg" required />

                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" >Close Time</label>
                          <input type="time" id="form2Example17" className="form-control form-control-lg" required />

                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" >Price of Space</label>
                          <input type="text" id="form2Example17" className="form-control form-control-lg" required />

                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" >Facilities</label>
                          <div>
                            <Select isMulti options={facilty} />
                          </div>
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" >Perks</label>
                          <div>
                            <Select isMulti options={perks} />
                          </div>
                        </div>
                        <div className="pt-1 mb-4">
                          <button className="btn btn-dark btn-lg btn-block" type="submit">Add</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AddSpace