import React from 'react'

type Props = {}

const MailModal = (props: Props) => {
  return (
    <div className="modal fade" id="send-request">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">Send request</h2>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <i className="lni lni-close"></i>
          </button>
        </div>
        <div className="modal-body">
          <p className="slide-descr">
            Leave your contacts and i will contact you soon.
          </p>
          <form className="form-request a-ajax-form">
            <div className="form-group form-group-material a-form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="form-group form-group-material a-form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                required
                placeholder="Email *"
              />
            </div>
            <div className="form-group form-group-material a-form-group">
              <textarea
                rows={3}
                name="message"
                className="form-control"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="message text-success success-message">
              Your message is successfully sent...
            </div>
            <div className="message text-danger error-message">
              Sorry something went wrong
            </div>
            <div className="control-btn text-right">
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MailModal