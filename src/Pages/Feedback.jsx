import { useForm, ValidationError } from '@formspree/react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Feedback = () => {
    const [state, handleSubmit] = useForm("myyrvglo");
    if (state.succeeded) {
        return <p>Thanks for your feedback!</p>;
    }

    return (
        <>
            <div className='text-center'>
                <h2>We would love to hear from you!</h2>
            </div>

            <form className="row g-3 m-5 p-4 border border-secondary" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" name="firstName" className="form-control" id="firstName" placeholder='John' />
                    <ValidationError
                        prefix="First Name"
                        field="firstName"
                        errors={state.errors}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="secondName" className="form-label">Second Name</label>
                    <input type="text" name='secondName' className="form-control" id="secondName" placeholder='Doe' />
                    <ValidationError
                        prefix="Second Name"
                        field="secondName"
                        errors={state.errors}
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" name='email' className="form-control" id="email" placeholder="johndoe@gmail.com" />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="feedbackForm" className="form-label">Give Feedback</label>
                    <textarea className="form-control" name='feedback' id="feedbackForm" rows="3" placeholder='Best news app to ever exist...'></textarea>
                    <ValidationError
                        prefix="Feedback"
                        field="feedback"
                        errors={state.errors}
                    />
                </div>
                <div className="col-12 text-center">
                    <button type="submit" className="btn btn-primary" disabled={state.submitting}>Send Feedback</button>
                </div>
            </form>
        </>
    );
}

export default Feedback;
